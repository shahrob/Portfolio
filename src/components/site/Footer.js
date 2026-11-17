import React from "react";
import { profile } from "../../data/portfolio";
import Socials from "./Socials";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>
          © {new Date().getFullYear()} {profile.name}. Designed & built with React.
        </p>
        <Socials withEmail />
      </div>
    </footer>
  );
}
