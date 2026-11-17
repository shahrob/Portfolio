import React from "react";
import { FiGithub, FiLinkedin, FiTwitter, FiInstagram, FiMail } from "react-icons/fi";
import { profile } from "../../data/portfolio";

const ITEMS = [
  { key: "github", label: "GitHub", Icon: FiGithub },
  { key: "linkedin", label: "LinkedIn", Icon: FiLinkedin },
  { key: "twitter", label: "Twitter / X", Icon: FiTwitter },
  { key: "instagram", label: "Instagram", Icon: FiInstagram },
];

export default function Socials({ withEmail = false, className = "" }) {
  return (
    <ul className={`socials ${className}`}>
      {ITEMS.map(({ key, label, Icon }) => (
        <li key={key}>
          <a href={profile.socials[key]} target="_blank" rel="noreferrer" aria-label={label} title={label}>
            <Icon />
          </a>
        </li>
      ))}
      {withEmail && (
        <li>
          <a href={`mailto:${profile.email}`} aria-label="Email" title="Email">
            <FiMail />
          </a>
        </li>
      )}
    </ul>
  );
}
