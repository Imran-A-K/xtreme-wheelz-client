import { Helmet } from "react-helmet-async";
import Gallery from "../Components/HomePageComponents/Gallery";
import Hero from "../Components/HomePageComponents/Hero";

import TabSection from "../Components/HomePageComponents/TabSection";

import Stats from "../Components/HomePageComponents/Stats";
import ContactUs from "../Components/HomePageComponents/ContactUs";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>XtremeWheelz | Home</title>
      </Helmet>
      <Hero></Hero>
      <Gallery></Gallery>
      <TabSection></TabSection>
      <Stats></Stats>
      <ContactUs></ContactUs>
    </div>
  );
};

export default Home;
