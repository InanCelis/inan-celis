import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function useHelperFunction(title) {
  const { pathname } = useLocation();

  useEffect(() => {
    // chaging page title
    document.title = `${title} Inan The Future`;

    window.scrollTo(0, 0);
  }, [pathname]);
}

