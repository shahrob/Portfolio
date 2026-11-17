import React, { useState } from "react";
import { FiMail, FiPhone, FiMapPin, FiCopy, FiCheck, FiSend } from "react-icons/fi";
import { profile } from "../../data/portfolio";
import Reveal, { SectionHeader } from "./Reveal";
import Socials from "./Socials";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [copied, setCopied] = useState(false);

  const update = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Hello from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (_) {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <SectionHeader
          index="05"
          eyebrow="Contact"
          title="Let's build something great."
          intro="Hiring for a senior or lead role, or have a product that needs shipping? I usually reply within a day."
        />
        <div className="contact-grid">
          <Reveal className="contact-info">
            <button type="button" className="contact-email" onClick={copyEmail}>
              <FiMail />
              <span>{profile.email}</span>
              <em>{copied ? <><FiCheck /> Copied</> : <><FiCopy /> Copy</>}</em>
            </button>
            <ul className="contact-list">
              <li>
                <FiPhone /> <a href={profile.phoneHref}>{profile.phone}</a>
              </li>
              <li>
                <FiMapPin /> {profile.location} · {profile.timezone}
              </li>
            </ul>
            <Socials className="socials--lg" />
          </Reveal>

          <Reveal delay={0.1} className="card contact-form-card">
            <form className="contact-form" onSubmit={submit}>
              <div className="field-row">
                <label className="field">
                  <span>Name</span>
                  <input name="name" required value={form.name} onChange={update} autoComplete="name" />
                </label>
                <label className="field">
                  <span>Email</span>
                  <input
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={update}
                    autoComplete="email"
                  />
                </label>
              </div>
              <label className="field">
                <span>Message</span>
                <textarea
                  name="message"
                  rows="5"
                  required
                  value={form.message}
                  onChange={update}
                  placeholder="Tell me about the role or project…"
                />
              </label>
              <button type="submit" className="btn btn-primary">
                <FiSend /> Send message
              </button>
              <p className="form-note">Opens your email client with the message pre-filled.</p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
