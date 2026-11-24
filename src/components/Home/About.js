import React from "react";
import GitHubCalendar from "react-github-calendar";
import {
  FiArrowUpRight,
  FiBookOpen,
  FiGithub,
  FiShoppingBag,
  FiZap,
} from "react-icons/fi";
import Card from "../UI/Card";
import Section from "../UI/Section";
import { reveal } from "../UI/reveal";
import { useTheme } from "../../hooks/useTheme";
import { about, profile } from "../../data/profile";
import "./About.css";

const CALENDAR_THEMES = {
  dark: {
    level0: "#1d1d22",
    level1: "#3f2654",
    level2: "#6b3b93",
    level3: "#9c56cb",
    level4: "#c770f0",
  },
  light: {
    level0: "#ececef",
    level1: "#ead6fd",
    level2: "#d6b0fb",
    level3: "#b26af1",
    level4: "#9333ea",
  },
};

function About() {
  const { theme } = useTheme();

  return (
    <Section
      id="about"
      index="01"
      eyebrow="About"
      tone="violet"
      glow="left"
      title={
        <>
          Reliable products, <em>end to end</em>.
        </>
      }
    >
      <div className="about-bento">
        <Card className="tile about-story" {...reveal()}>
          <div className="about-copy">
            <p className="about-lead">
              I'm a <strong>{profile.role}</strong> with 6+ years of experience
              building production web apps, mobile apps, SaaS platforms, backend
              systems and AI-powered solutions.
            </p>
            <p>
              I work with <strong>React, Next.js and React Native</strong> on the
              web and mobile side, and{" "}
              <strong>Node.js, NestJS, PostgreSQL, MongoDB and Redis</strong> on
              the backend.
            </p>
            <p>
              Recent work includes{" "}
              <strong>FinTech and open banking integrations</strong> (Stripe,
              Yapily, HMRC Making Tax Digital), <strong>AI image search</strong>{" "}
              with LLMs, embeddings and pgvector, and{" "}
              <strong>real-time WebRTC calling</strong>.
            </p>
            <p>
              I help startups and businesses turn ideas into reliable products,
              from architecture and APIs to deployment.
            </p>
          </div>

          <div className="about-footer">
            <div>
              <p className="eyebrow">Beyond code</p>
              <ul className="chips">
                {about.interests.map((interest) => (
                  <li key={interest} className="chip">
                    {interest}
                  </li>
                ))}
              </ul>
            </div>
            <blockquote className="motto">“{about.motto}”</blockquote>
          </div>
        </Card>

        <Card className="tile fact-tile about-focus tile--accent" {...reveal(0.05)}>
          <p className="eyebrow">
            <FiZap aria-hidden="true" /> Current focus
          </p>
          <p className="fact-title">{about.focus.title}</p>
          <p className="fact-text">{about.focus.text}</p>
        </Card>

        <Card className="tile fact-tile about-edu hue-blue" {...reveal(0.1)}>
          <p className="eyebrow">
            <FiBookOpen aria-hidden="true" /> Education
          </p>
          <p className="fact-title">{about.education.degree}</p>
          <p className="fact-text">
            {about.education.school} · {about.education.period}
          </p>
        </Card>

        <Card
          as="a"
          href={about.venture.url}
          target="_blank"
          rel="noopener noreferrer"
          className="tile fact-tile about-venture hue-amber is-link"
          {...reveal(0.15)}
        >
          <p className="eyebrow">
            <FiShoppingBag aria-hidden="true" /> Founder
          </p>
          <p className="fact-title">
            {about.venture.name} <FiArrowUpRight className="fact-arrow" aria-hidden="true" />
          </p>
          <p className="fact-text">{about.venture.summary}</p>
        </Card>

        <Card className="tile about-github" {...reveal(0.1)}>
          <div className="github-head">
            <div>
              <p className="eyebrow">
                <FiGithub aria-hidden="true" /> GitHub
              </p>
              <p className="fact-title">Days I code</p>
            </div>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="link-arrow"
            >
              @shahrob <FiArrowUpRight aria-hidden="true" />
            </a>
          </div>
          <div className="github-calendar">
            <GitHubCalendar
              username="shahrob"
              blockSize={12}
              blockMargin={4}
              blockRadius={3}
              fontSize={12}
              theme={CALENDAR_THEMES[theme]}
            />
          </div>
        </Card>
      </div>
    </Section>
  );
}

export default About;
