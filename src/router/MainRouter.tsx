import {
  BrowserRouter as Router,
  Route,
  Navigate,
  Routes,
} from "react-router-dom";
import loadable from "@loadable/component";

import SuspenseComponent from "../components/Suspense/Suspense";
import Information from "../pages/Information/Index";
import Customers from "../pages/Customers";

/**
 * Lazy imports components
 */
const Home = loadable(() => import("../pages/Home"));
const PageNotFound = loadable(() => import("../pages/404"));

const MainRouter = () => {
  return (
    <SuspenseComponent>
      <Router>
        <Routes>
          {/**
           * Home
           */}
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />

          {/**
           * Information
           */}
          <Route path="/information" element={<Information />} />

          {/**
           * Customers
           */}
          <Route path="/customers" element={<Customers />} />

          {/**
           Page 404 not found
           */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </SuspenseComponent>
  );
};

export default MainRouter;
