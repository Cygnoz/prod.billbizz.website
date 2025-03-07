import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Layout from "./Layout/Layout";
import DemoComponent from "./components/DemoComponent";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Security from "./Pages/Security";
import Privacy from "./Pages/Privacy";
import NewsAndEvents from "./Pages/NewsAndEvents/NewsAndEvents";
import NavBar from "./components/NavBar";
import ViewAll from "./Pages/NewsAndEvents/ViewAll";
import ViewEvent from "./Pages/NewsAndEvents/ViewEvent";
import Blog from "./Pages/Blog/Blog";
import ViewBlog from "./Pages/Blog/ViewBlog";
import CustomerStories from "./Pages/CustomerStories/CustomerStories";

const Dashboard = lazy(() => import("./landingpage/Explore"));
const SliderSection = lazy(() => import("./landingpage/SliderSection"));
const Cards = lazy(() => import("./cards/Cards"));
const ErpFunctionality = lazy(() => import("./components/ErpFunctionality"));
const KnowledgeBase = lazy(() => import("./Pages/KnowledgeBase/KnowledgeBase"));
const CRM = lazy(() => import("./Pages/KnowledgeBase/CRM"));
const GettingStarted = lazy(
  () => import("./Pages/KnowledgeBase/GettingStarted")
);
const IntroductionToCRM = lazy(
  () => import("./Pages/KnowledgeBase/IntroductionToCRM")
);
const TermsandConditions = lazy(() => import("./Pages/TermsandConditions"));

const AppRoutes = () => {
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
              <DemoComponent />
              <Footer />
            </>
          }
        />

        <Route
          path="/terms-and-conditions"
          element={
            <Layout>
              <TermsandConditions />
            </Layout>
          }
        />
        <Route
          path="/security"
          element={
            <Layout>
              <Security />
            </Layout>
          }
        />
        <Route
          path="/privacy-policy"
          element={
            <Layout>
              <Privacy />
            </Layout>
          }
        />
        <Route
          path="/news-and-events"
          element={
            <>
              <NavBar />
              <NewsAndEvents />
            </>
          }
        />
        <Route
          path="/news-and-events/view-all"
          element={
            <>
              <NavBar />
              <ViewAll />
            </>
          }
        />
         <Route
          path="/news-and-events/view-all/view-event"
          element={
            <>
              <NavBar />
              <ViewEvent />
            </>
          }
        />
         <Route
          path="/blog"
          element={
            <Layout>
            <Blog />
            <DemoComponent />
          </Layout>
          }
        />

<Route
          path="/blog/view"
          element={
            <Layout>
            <ViewBlog />
          </Layout>
          }
        /> 
        <Route
          path="/customer-stories"
          element={
            <Layout>
            <CustomerStories />
            <DemoComponent />
          </Layout>
          }
        />

        {/* Knowledge Base Pages - No Layout */}
        <Route path="/knowledge-base" element={<KnowledgeBase />} />
        <Route path="/knowledge-base/crm" element={<CRM />} />
        <Route
          path="/knowledge-base/crm/getting-started"
          element={<GettingStarted />}
        />
        <Route
          path="/knowledge-base/crm/getting-started/introduction"
          element={<IntroductionToCRM />}
        />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
