import * as React from "react";
import { Outlet } from "react-router-dom";

import Header from "../Header";
import Subscribe from "../Subscribe";

const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
        <Subscribe />
      </main>
    </>
  );
};

export default Layout;
