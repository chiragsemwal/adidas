import React from "react";
import NavBar from "./Components/NavBar";
import EndOfSeasonSaleBanner from "./Components/EndOfSeasonSaleBanner";
import StealsOfTheSeason from "./Components/StealsOfTheSeason";

function App() {
  return (
    <>
      <NavBar />
      <EndOfSeasonSaleBanner />
      <StealsOfTheSeason />
    </>
  );
}

export default App;
