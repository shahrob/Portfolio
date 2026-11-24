import { useEffect, useState } from "react";

// Returns the id of the section crossing the upper-middle of the viewport.
// `ids` must be a stable array (define it outside the component).
export function useScrollSpy(ids, enabled) {
  const [active, setActive] = useState(null);

  useEffect(() => {
    if (!enabled || !("IntersectionObserver" in window)) {
      setActive(null);
      return undefined;
    }

    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    const visible = new Set();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) visible.add(entry.target.id);
          else visible.delete(entry.target.id);
        });
        setActive(ids.find((id) => visible.has(id)) || null);
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [ids, enabled]);

  return active;
}
