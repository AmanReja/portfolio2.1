import React from "react";
import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import Features from "./Components/Features";
import Card from "./Components/Card";
import Skills from "./Components/Skills";
import Swip from "./Components/Swip";
import Contactus from "./Components/Contactus";

const App = () => {
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>

      <Features></Features>
      {/* <Main></Main> */}
      <Skills></Skills>
      <Card></Card>
      <Swip></Swip>
      <Contactus></Contactus>

      <Footer></Footer>
    </>
  );
};

export default App;
