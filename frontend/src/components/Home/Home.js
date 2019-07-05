import React from "react";
import Header from "../Layout/Header";
import Banner from "../Layout/Banner";
import ChooseUs from "./ChooseUs/ChooseUs";
import WeDo from "./WeDo/WeDo";
import Footer from "../Layout/Footer";
import OurTeam from "./OurTeam/OurTeam";
import Contact from "./Contact/Contact";
import Services from "./Services/Services";

function Home(props) {
  return (
    <div>
      <Header />
      <Banner id='banner' />
      <ChooseUs />
      <WeDo />
      <Services id='services' />
      <OurTeam id='team' />
      <Contact id='contact' />
      <Footer />
    </div>
  );
}

export default Home;
