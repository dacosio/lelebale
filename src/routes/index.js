import { useEffect } from "react";
import Home from "../pages/Home";

import { useRoutes, useLocation } from "react-router-dom";
import Package from "pages/Package";

export function ScrollToTop({ children }) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return children;
}

export default function Router() {
  let element = useRoutes([
    {
      element: <Home />,
      path: "/",
    },
    {
      element: <Package />,
      path: "/package",
    },
  ]);
  return <ScrollToTop>{element}</ScrollToTop>;
}
