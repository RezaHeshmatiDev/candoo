import {
  BrowserRouter as Router,
  Route,
  Navigate,
  Routes,
} from "react-router-dom";
import loadable from "@loadable/component";

import SuspenseComponent from "../components/Suspense/Suspense";

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
           Page 404 not found
           */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </SuspenseComponent>
  );
};

export default MainRouter;
