import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { legacySectionRoutes } from "../../data/profile";
import { prefersReducedMotion } from "../../utils/browser";

// Scrolls to the section named by the URL hash (/#work) or by a legacy route
// (/skills), and to the top of the page on any other navigation.
function ScrollManager() {
  const { pathname, hash, key } = useLocation();
  const previousPath = useRef(null);

  useEffect(() => {
    const isFirstRender = previousPath.current === null;
    const samePage = previousPath.current === pathname;
    previousPath.current = pathname;

    const behavior =
      samePage && !isFirstRender && !prefersReducedMotion() ? "smooth" : "auto";
    const targetId = hash
      ? decodeURIComponent(hash.slice(1))
      : legacySectionRoutes[pathname];

    const frame = window.requestAnimationFrame(() => {
      const target = targetId && document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior, block: "start" });
      } else {
        window.scrollTo({ top: 0, behavior });
      }
    });

    return () => window.cancelAnimationFrame(frame);
  }, [pathname, hash, key]);

  return null;
}

export default ScrollManager;
