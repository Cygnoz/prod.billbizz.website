import { lazy } from "react";

type Props = {};
const Dashboard = lazy(() => import("../landingpage/Explore"));
const SliderSection = lazy(() => import("../landingpage/SliderSection"));
const Cards = lazy(() => import("../cards/Cards"));
const ErpFunctionality = lazy(() => import("../components/ErpFunctionality"));
const LandingPage = ({}: Props) => {
  return (
    <div>
      <SliderSection />
      <Dashboard />
      <Cards />
      <ErpFunctionality />
    </div>
  );
};

export default LandingPage;
