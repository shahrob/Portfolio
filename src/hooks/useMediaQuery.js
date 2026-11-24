import { useEffect, useState } from "react";

function matches(query) {
  return typeof window !== "undefined" && window.matchMedia
    ? window.matchMedia(query).matches
    : false;
}

// True while the media query matches; updates when the viewport changes.
export function useMediaQuery(query) {
  const [isMatch, setIsMatch] = useState(() => matches(query));

  useEffect(() => {
    if (!window.matchMedia) return undefined;
    const list = window.matchMedia(query);
    const onChange = () => setIsMatch(list.matches);
    onChange();
    if (list.addEventListener) list.addEventListener("change", onChange);
    else list.addListener(onChange);
    return () => {
      if (list.removeEventListener) list.removeEventListener("change", onChange);
      else list.removeListener(onChange);
    };
  }, [query]);

  return isMatch;
}
