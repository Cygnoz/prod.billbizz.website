import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import CRM from "./components/KnowledgeBase/CRM";
import GettingStarted from "./components/KnowledgeBase/GettingStarted";
import IntroductionToCRM from "./components/KnowledgeBase/IntroductionToCRM";

const Footer = lazy(() => import("./components/Footer"));
const Cards = lazy(() => import("./cards/Cards"));
const Dashboard = lazy(() => import("./landingpage/Explore"));
const SliderSection = lazy(() => import("./landingpage/SliderSection"));
const Header = lazy(() => import("./components/Header"));
const ErpFunctionality = lazy(() => import("./ErpFunctionality"));
const KnowledgeBase = lazy(
  () => import("./components/KnowledgeBase/KnowledgeBase")
);

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <SliderSection />
              <Dashboard />
              <Cards />
              <ErpFunctionality />
              <ul>
                <li className="mb-2">
                  <a
                    href="/billbizz/knowledge-base"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Knowledge Base
                  </a>
                </li>
              </ul>
              <Footer />
            </>
          }
        />

        <Route path="/knowledge-base" element={<KnowledgeBase />} />
        <Route path="/knowledge-base/crm" element={<CRM />} />
        <Route path="/knowledge-base/crm/getting-started" element={<GettingStarted />} />
        <Route path="/knowledge-base/crm/getting-started/introduction" element={<IntroductionToCRM />} />


      </Routes>
    </Suspense>
  );
}

export default App;
