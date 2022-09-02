import * as React from "react";
import { Routes, Route } from "react-router-loading";

import Layout from "../components/layout/index";
import Home from "../pages/Home";
import Test from "../pages/Test";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="test" element={<Test />} loading />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
