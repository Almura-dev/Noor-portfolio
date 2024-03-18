import React, { useState, useEffect } from "react";
import "./App.css";
import { DownloadNow } from "./Components/DownloadNow/DownloadNow";
import { Footer } from "./Components/Footer/Footer";
import { Futures } from "./Components/Futures/Futures";
import { Hero } from "./Components/Hero/Hero";
// // import { Products } from "./Components/Products/Products";
import { Socials } from "./Components/Socials/Socials";
import { Poster } from "./Components/poster/Poster";
import { Loading } from "./Components/Loading/Loading";
import { About } from "./Components/About/About";
import { SourceCode } from "./Components/SourceCode/SourceCode";

//  import { SourceCode } from "./Components/SourceCode/SourceCode";

function App() {
  const [activeNav, setActiveNav] = useState("#");

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => {
      clearTimeout(loadingTimeout);
    };
  }, []);

  return (
    <div className="App">
      {isLoading ? <Loading /> : <></>}
      <>
      <SourceCode/>
        <Hero activeNav={activeNav} setActiveNav={setActiveNav} />
        <Futures />
        <DownloadNow />
        <Socials />
        {/* <Products /> */}
        <Poster />
        <About />
        <Footer />
        {/* <SourceCode /> */}
      </>
    </div>
  );
}

export default App;
