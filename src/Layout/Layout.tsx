import { lazy, Suspense } from "react";

const NavBar = lazy(() => import("../components/NavBar"));
const Footer = lazy(() => import("../components/Footer"));

import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </Suspense>
  );
};

export default Layout;
