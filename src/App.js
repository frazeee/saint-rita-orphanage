import "./App.css";

import Hero from "./components/Hero/Hero";
import AboutUs from "./components/AboutUs/AboutUs";
import Programs from "./components/Programs/Programs";
import Purpose from "./components/Purpose/Purpose";
import Gallery from "./components/Gallery/Gallery";
import Footer from "./components/Footer/Footer";
import ContactUs from "./components/ContactUs/ContactUs";

function App() {
  return (
    <>
      <Hero />
      <AboutUs />
      <Purpose />
      <Programs />
      <Gallery />
      <ContactUs/>
      <Footer />
    </>
  );
}

export default App;
