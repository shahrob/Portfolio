import React, { useRef } from "react";
import { motion } from "framer-motion";

// Bento tile with a cursor-following spotlight. Accepts any framer-motion
// props, and `as` to change the rendered element (a, article, form, ...).
function Card({ as = "div", className = "", children, ...rest }) {
  const ref = useRef(null);
  const Component = motion[as] || motion.div;

  const handlePointerMove = (event) => {
    const node = ref.current;
    if (!node || event.pointerType === "touch") return;
    const rect = node.getBoundingClientRect();
    node.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    node.style.setProperty("--my", `${event.clientY - rect.top}px`);
  };

  return (
    <Component
      ref={ref}
      className={`card ${className}`.trim()}
      onPointerMove={handlePointerMove}
      {...rest}
    >
      {children}
    </Component>
  );
}

export default Card;
