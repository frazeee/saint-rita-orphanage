import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero/Hero";
import AboutUs from "./components/AboutUs/AboutUs";
import Programs from "./components/Programs/Programs";
import Purpose from "./components/Purpose/Purpose";
import Gallery from "./components/Gallery/Gallery";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs/>
      <Programs/>
      <Purpose/>
      <Gallery/>
    </>
  );
}

export default App;
