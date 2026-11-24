import React from "react";
import Card from "../UI/Card";
import Section from "../UI/Section";
import { reveal } from "../UI/reveal";
import { skills } from "../../data/profile";
import "./Stack.css";

function Stack() {
  return (
    <Section
      id="stack"
      index="04"
      eyebrow="Stack"
      title={
        <>
          Tools of the <em>trade</em>.
        </>
      }
      intro="The technologies I use to build web, mobile, backend and AI products."
    >
      <div className="stack-bento">
        {skills.map((group, index) => (
          <Card
            key={group.id}
            className={`tile stack-tile stack-${group.id} ${group.featured ? "is-featured" : ""}`}
            {...reveal(index * 0.04)}
          >
            <div className="stack-tile-head">
              <ul className="stack-icons" aria-hidden="true">
                {group.icons.map((Icon, iconIndex) => (
                  <li key={iconIndex}>
                    <Icon />
                  </li>
                ))}
              </ul>
              {group.featured && <span className="badge">Current focus</span>}
            </div>
            <h3 className="stack-title">{group.title}</h3>
            <ul className="chips">
              {group.items.map((item) => (
                <li key={item} className="chip">
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </Section>
  );
}

export default Stack;
