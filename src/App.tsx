import "./App.css";
import Footer from "./components/Footer";
import Cards from "./cards/Cards";
import Dashboard from "./landingpage/Explore";
import SliderSection from "./landingpage/SliderSection";
import Header from "./components/Header";
import ErpFunctionality from "./ErpFunctionality";

function App() {
  return (
    <>
    <Header/>
    <SliderSection/>
      <Dashboard />
      <Cards />
      <ErpFunctionality/>
      <Footer />
    </>
  );
}

export default App;
