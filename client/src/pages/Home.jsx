// importing installed packages
import React from "react";

// importing custom files
import Recommend from "../components/Home/Recomend";
import Trending from "../components/Home/Trending";

// home page
function Home() {
  return (
    <>
      <Trending />
      <Recommend />
    </>
  );
}

export default Home;
