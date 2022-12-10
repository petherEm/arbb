import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useRouter } from "next/dist/client/router";
import { format } from "date-fns";
import InfoCard from "../components/InfoCard";
import Map from "../components/Map";

const Search = ({ searchResults }) => {
  const router = useRouter();

  const { location, startDate, endDate, noOfGuests } = router.query;

  //   const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
  //   const formattedEndDate = format(new Date(endDate), "dd MMMM yy");
  //   const range = `${formattedStartDate} - ${formattedEndDate}`;

  return (
    <div className="bg-gradient-to-br from-gray-700 via-gray-900 to-black min-h-screen text-white">
      <Header placeholder={`${location} | ${noOfGuests} guests`} />

      <main className="flex">
        <section className="text-xs flex-grow pt-14 px-6">
          <p>300+ Stays for {noOfGuests} guests</p>

          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in {location}
          </h1>

          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-200 whitespace-nowrap">
            <p className="btn">Cancellation flexibility</p>
            <p className="btn">Type of Place</p>
            <p className="btn">Price</p>
            <p className="btn">Rooms and Beds</p>
            <p className="btn">More filters</p>
          </div>

          <div className="flex flex-col">
            {searchResults.map((item) => (
              <InfoCard
                key={item.img}
                img={item.img}
                location={item.location}
                title={item.title}
                description={item.description}
                star={item.star}
                price={item.price}
                total={item.total}
              />
            ))}
          </div>
        </section>

        <section className="hidden xl:inline-flex xl:min-w-[600px]">
          <Map searchResults={searchResults} />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Search;

export async function getServerSideProps() {
  const searchResults = await fetch("https://www.jsonkeeper.com/b/5NPS").then(
    (res) => res.json()
  );

  return {
    props: {
      searchResults,
    },
  };
}
