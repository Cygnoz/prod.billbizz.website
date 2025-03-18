import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Layout from "./Layout/Layout";
import DemoComponent from "./components/DemoComponent";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Security from "./Pages/Security";
import Privacy from "./Pages/Privacy";
import NewsAndEvents from "./Pages/NewsAndEvents/NewsAndEvents";
import ViewAll from "./Pages/NewsAndEvents/ViewAll";
import ViewEvent from "./Pages/NewsAndEvents/ViewEvent";
import Blog from "./Pages/Blog/Blog";
import ViewBlog from "./Pages/Blog/ViewBlog";
import CustomerStories from "./Pages/CustomerStories/CustomerStories";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import ViewAllNews from "./Pages/NewsAndEvents/ViewAllNews";
import ViewANews from "./Pages/NewsAndEvents/ViewANews";

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
            <Layout>
              <NewsAndEvents />
            </Layout>
          }
        />
        <Route
          path="/news-and-events/view-all"
          element={
            <Layout>
              <ViewAll />
            </Layout>
          }
        />
        <Route
          path="/news-and-events/view-all/view-event/:id"
          element={
            <Layout>
              <ViewEvent />
            </Layout>
          }
        />
        <Route
          path="/news-and-events/view-all-news"
          element={
            <Layout>
              <ViewAllNews />
            </Layout>
          }
        />
        <Route
          path="/news-and-events/view-all-news/view-news/:id"
          element={
            <Layout>
              <ViewANews />
            </Layout>
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
          path="/blog/view/:id"
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
          <Route
          path="/about-us"
          element={
            <>
             <AboutUs/>
             <Footer/>
            </>
          }
        />

<Route
          path="/contact-us"
          element={
            <Layout>
             <ContactUs/>
            </Layout>
          }
        />

        <Route path="/knowledge-base" element={<KnowledgeBase />} />
        <Route path="/knowledge-base/:id" element={<CRM />} />
        <Route
          path="/knowledge-base/:categoryName/:id"
          element={<GettingStarted />}
        />
        <Route
          path="/knowledge-base/:categoryName/:subcategory/:id"
          element={<IntroductionToCRM />}
        />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
