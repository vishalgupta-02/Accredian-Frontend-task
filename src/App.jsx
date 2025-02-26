import Banner from "./components/Notify";
import Benefits from "./components/Benefits";
import Faq from "./components/Faq";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Refer from "./components/Refer";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";

const App = () => {
  return (
    <div className="w-full h-screen overflow-x-hidden">
      <Banner />
      <Navbar />
      <Navigation />
      <Hero />
      <Refer />
      <Benefits />
      <Faq />
      <Footer />
    </div>
  );
};

export default App;
