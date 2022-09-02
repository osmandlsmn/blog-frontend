import * as React from "react";
import { Outlet } from "react-router-dom";

import Header from "../Header";
import Subscribe from "../Subscribe";
import Footer from "../Footer";

const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
        <Subscribe />
        <Footer />
      </main>
    </>
  );
};

export default Layout;
