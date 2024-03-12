import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function useHelperFunction(title) {
  const { pathname } = useLocation();

  useEffect(() => {
    // chaging page title
    document.title = `Inan Portfolio ${title}`;

    window.scrollTo(0, 0);
  }, [pathname]);
}

