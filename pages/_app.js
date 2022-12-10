import "../styles/globals.css";

import ProgressBar from "@badrap/bar-of-progress";
import Router from "next/router";

const progress = new ProgressBar({
  size: 4,
  color: "#FE595E",
  className: "z-50",
  delay: 100,
});

Router.events.on("routeChangeStart", progress.start); // When the route is changing, start the progress bar
Router.events.on("routeChangeComplete", progress.finish); // When the route is done changing, finish the progress bar
Router.events.on("routeChangeError", progress.finish); // If there's an error, finish the progress bar

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
