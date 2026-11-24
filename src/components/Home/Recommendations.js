import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import Card from "../UI/Card";
import Section from "../UI/Section";
import { reveal } from "../UI/reveal";
import { recommendations } from "../../data/profile";
import "./Recommendations.css";

function Recommendations() {
  return (
    <Section
      id="recommendations"
      index="07"
      eyebrow="Recommendations"
      tone="blue"
      glow="right"
      title={
        <>
          Kind <em>words</em>.
        </>
      }
      intro="What colleagues and clients say about working with me, on the platforms where they wrote it."
    >
      <div className="reco-grid">
        {recommendations.map((item, index) => {
          const Icon = item.icon;
          return (
            <Card
              key={item.id}
              as="a"
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="tile reco-card is-link"
              style={{ "--brand": item.color }}
              {...reveal(index * 0.06)}
            >
              <div className="reco-head">
                <span className="reco-icon">
                  <Icon className="brand-icon" aria-hidden="true" />
                </span>
                <span className="reco-count">{item.count}</span>
              </div>
              <h3 className="reco-title">{item.title}</h3>
              <p className="reco-text">{item.summary}</p>
              <span className="link-arrow">
                {item.linkLabel} <FiArrowUpRight aria-hidden="true" />
              </span>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}

export default Recommendations;
