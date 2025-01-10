import { Suspense, lazy } from "react";
import "./App.css";

const Footer = lazy(() => import("./components/Footer"));
const Cards = lazy(() => import("./cards/Cards"));
const Dashboard = lazy(() => import("./landingpage/Explore"));
const SliderSection = lazy(() => import("./landingpage/SliderSection"));
const Header = lazy(() => import("./components/Header"));
const ErpFunctionality = lazy(() => import("./ErpFunctionality"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Header />
      <SliderSection />
      <Dashboard />
      <Cards />
      <ErpFunctionality />
      <Footer />
    </Suspense>
  );
}

export default App;
