import React, { useState } from "react";
import { FiArrowUpRight, FiCopy, FiSend } from "react-icons/fi";
import Card from "../UI/Card";
import Section from "../UI/Section";
import { reveal } from "../UI/reveal";
import { useLocalTime } from "../../hooks/useLocalTime";
import { useToast } from "../../hooks/useToast";
import { copyText } from "../../utils/browser";
import { profile, projectTypes, socials } from "../../data/profile";
import "./Contact.css";

const EMPTY_FORM = { name: "", email: "", projectType: "", message: "" };

// The site has no backend, so the form hands the message to the visitor's
// email app instead of pretending to send it.
function buildMailto({ name, email, projectType, message }) {
  const subject = `${projectType || "Project inquiry"} from ${name}`;
  const body = [
    message,
    "",
    "---",
    name,
    email,
    projectType ? `Project type: ${projectType}` : null,
  ]
    .filter((line) => line !== null)
    .join("\n");
  return `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function Contact() {
  const showToast = useToast();
  const time = useLocalTime(profile.timeZone);
  const [form, setForm] = useState(EMPTY_FORM);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    window.location.href = buildMailto(form);
    setSubmitted(true);
  };

  const copyEmail = async () => {
    const copied = await copyText(profile.email);
    showToast(copied ? "Email copied to clipboard" : "Couldn't copy the email address");
  };

  return (
    <Section
      id="contact"
      index="07"
      eyebrow="Contact"
      title={
        <>
          Let's build something <em>together</em>.
        </>
      }
      intro="Ready to start your next project? Let's discuss how I can help bring your ideas to life."
    >
      <div className="contact-grid">
        <Card className="tile contact-info" {...reveal()}>
          <div className="contact-row">
            <p className="eyebrow">Email</p>
            <div className="contact-email-line">
              <a href={`mailto:${profile.email}`} className="contact-email">
                {profile.email}
              </a>
              <button
                type="button"
                className="icon-btn"
                onClick={copyEmail}
                aria-label="Copy email address"
                title="Copy email address"
              >
                <FiCopy aria-hidden="true" />
              </button>
            </div>
          </div>

          <div className="contact-row">
            <p className="eyebrow">Phone</p>
            <a href={profile.phoneHref} className="contact-value">
              {profile.phone}
            </a>
          </div>

          <div className="contact-row">
            <p className="eyebrow">Based in</p>
            <p className="contact-value">
              {profile.location}
              {time && <span className="contact-time"> · {time} local time</span>}
            </p>
          </div>

          <div className="contact-row">
            <p className="eyebrow">Elsewhere</p>
            <ul className="social-list">
              {socials.map(({ id, label, handle, url, icon: Icon }) => (
                <li key={id}>
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    <Icon className="social-icon" aria-hidden="true" />
                    <span className="social-label">{label}</span>
                    <span className="social-handle mono">{handle}</span>
                    <FiArrowUpRight className="social-arrow" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Card>

        <Card as="form" className="tile contact-form" onSubmit={handleSubmit} {...reveal(0.08)}>
          <div className="field-row">
            <label className="field">
              <span className="field-label">Name</span>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your full name"
                autoComplete="name"
                required
              />
            </label>
            <label className="field">
              <span className="field-label">Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@company.com"
                autoComplete="email"
                required
              />
            </label>
          </div>

          <label className="field">
            <span className="field-label">
              Project type <span className="field-optional">(optional)</span>
            </span>
            <select name="projectType" value={form.projectType} onChange={handleChange}>
              <option value="">Select a project type</option>
              {projectTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </label>

          <label className="field field-grow">
            <span className="field-label">Message</span>
            <textarea
              name="message"
              rows={6}
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me about your project…"
              required
            />
          </label>

          <div className="form-footer">
            <button type="submit" className="btn btn-primary">
              <FiSend aria-hidden="true" /> Send message
            </button>
            <p className="form-note" role="status">
              {submitted ? (
                <>
                  Your email app should open with the message ready to send. If it
                  didn't, email me at{" "}
                  <a href={`mailto:${profile.email}`}>{profile.email}</a>.
                </>
              ) : (
                "Opens your email app with the message ready to send."
              )}
            </p>
          </div>
        </Card>
      </div>
    </Section>
  );
}

export default Contact;
