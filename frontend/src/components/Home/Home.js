import React from "react";
import Banner from "./Banner";
import Welcome from "./Welcome";
import Footer from "./Footer/Footer";
import Contact from "./Contact/Contact";
import News from "./News/News";

function Home(props) {
  return (
    <div>
      <Banner />
      <Welcome />
      <News />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
