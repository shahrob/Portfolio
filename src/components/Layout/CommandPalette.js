import React, { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  FiBriefcase,
  FiCopy,
  FiCpu,
  FiCornerDownLeft,
  FiDownload,
  FiFileText,
  FiFolder,
  FiGrid,
  FiHome,
  FiLayers,
  FiMail,
  FiMoon,
  FiSearch,
  FiSun,
  FiTool,
  FiUser,
} from "react-icons/fi";
import { hirePlatforms, otherSocials, profile, sections } from "../../data/profile";
import { useTheme } from "../../hooks/useTheme";
import { useToast } from "../../hooks/useToast";
import { copyText } from "../../utils/browser";
import { EASE } from "../UI/reveal";
import "./CommandPalette.css";

const SECTION_ICONS = {
  about: FiUser,
  work: FiGrid,
  ai: FiCpu,
  experience: FiBriefcase,
  stack: FiTool,
  services: FiLayers,
  contact: FiMail,
};

function CommandPalette({ open, onClose }) {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();
  const showToast = useToast();
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef(null);
  const listRef = useRef(null);

  const commands = useMemo(() => {
    const go = (path) => () => navigate(path);
    const openUrl = (url) => () => window.open(url, "_blank", "noopener,noreferrer");

    return [
      { id: "home", group: "Navigate", label: "Home", icon: FiHome, run: go("/") },
      ...sections.map((section) => ({
        id: section.id,
        group: "Navigate",
        label: section.label,
        icon: SECTION_ICONS[section.id],
        run: go(`/#${section.id}`),
      })),
      {
        id: "projects",
        group: "Pages",
        label: "All projects",
        icon: FiFolder,
        run: go("/projects"),
      },
      { id: "resume", group: "Pages", label: "Resume", icon: FiFileText, run: go("/resume") },
      ...hirePlatforms.map((platform) => ({
        id: `hire-${platform.id}`,
        group: "Hire me",
        label: `Hire me on ${platform.name}`,
        icon: platform.icon,
        run: openUrl(platform.url),
      })),
      {
        id: "copy-email",
        group: "Actions",
        label: "Copy email address",
        hint: profile.email,
        icon: FiCopy,
        run: async () => {
          const copied = await copyText(profile.email);
          showToast(copied ? "Email copied to clipboard" : "Couldn't copy the email address");
        },
      },
      {
        id: "theme",
        group: "Actions",
        label: theme === "dark" ? "Switch to light theme" : "Switch to dark theme",
        icon: theme === "dark" ? FiSun : FiMoon,
        run: toggleTheme,
      },
      {
        id: "cv",
        group: "Actions",
        label: "Download CV (PDF)",
        icon: FiDownload,
        run: openUrl(profile.resume),
      },
      ...otherSocials.map((social) => ({
        id: social.id,
        group: "Elsewhere",
        label: social.label,
        hint: social.handle,
        icon: social.icon,
        run: openUrl(social.url),
      })),
    ];
  }, [navigate, theme, toggleTheme, showToast]);

  const results = useMemo(() => {
    const needle = query.trim().toLowerCase();
    if (!needle) return commands;
    return commands.filter((command) =>
      `${command.label} ${command.group} ${command.hint || ""}`
        .toLowerCase()
        .includes(needle)
    );
  }, [commands, query]);

  useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  useEffect(() => {
    if (!open) return undefined;
    const previouslyFocused = document.activeElement;
    setQuery("");
    setActiveIndex(0);
    document.body.style.overflow = "hidden";
    const focusTimer = setTimeout(() => inputRef.current && inputRef.current.focus(), 0);

    return () => {
      clearTimeout(focusTimer);
      document.body.style.overflow = "";
      if (previouslyFocused && previouslyFocused.focus) {
        previouslyFocused.focus({ preventScroll: true });
      }
    };
  }, [open]);

  useEffect(() => {
    if (!open || !listRef.current) return;
    const item = listRef.current.querySelector(`[data-index="${activeIndex}"]`);
    if (item) item.scrollIntoView({ block: "nearest" });
  }, [activeIndex, open]);

  const runCommand = (command) => {
    onClose();
    command.run();
  };

  const handleKeyDown = (event) => {
    const count = results.length;
    if (event.key === "ArrowDown") {
      event.preventDefault();
      if (count) setActiveIndex((index) => (index + 1) % count);
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      if (count) setActiveIndex((index) => (index - 1 + count) % count);
    } else if (event.key === "Enter") {
      event.preventDefault();
      if (results[activeIndex]) runCommand(results[activeIndex]);
    } else if (event.key === "Escape") {
      event.preventDefault();
      onClose();
    } else if (event.key === "Tab") {
      // The input is the only focus stop, which keeps focus inside the dialog.
      event.preventDefault();
    }
  };

  const activeCommand = results[activeIndex];

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="palette-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) onClose();
          }}
        >
          <motion.div
            className="palette"
            role="dialog"
            aria-modal="true"
            aria-label="Command menu"
            initial={{ opacity: 0, scale: 0.97, y: -8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: -4 }}
            transition={{ duration: 0.18, ease: EASE }}
          >
            <div className="palette-search">
              <FiSearch aria-hidden="true" />
              <input
                ref={inputRef}
                type="text"
                role="combobox"
                aria-expanded="true"
                aria-controls="palette-list"
                aria-autocomplete="list"
                aria-activedescendant={activeCommand ? `cmd-${activeCommand.id}` : undefined}
                aria-label="Search commands"
                placeholder="Type a command or search…"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                onKeyDown={handleKeyDown}
                autoComplete="off"
                spellCheck="false"
              />
              <kbd>Esc</kbd>
            </div>

            <ul id="palette-list" role="listbox" className="palette-list" ref={listRef}>
              {results.length === 0 && (
                <li className="palette-empty" role="presentation">
                  No results for “{query}”
                </li>
              )}
              {results.map((command, index) => {
                const Icon = command.icon;
                const startsGroup = index === 0 || results[index - 1].group !== command.group;
                return (
                  <React.Fragment key={command.id}>
                    {startsGroup && (
                      <li className="palette-group" role="presentation">
                        {command.group}
                      </li>
                    )}
                    <li
                      id={`cmd-${command.id}`}
                      role="option"
                      aria-selected={index === activeIndex}
                      data-index={index}
                      className={`palette-item ${index === activeIndex ? "is-active" : ""}`}
                      onMouseMove={() => setActiveIndex(index)}
                      onClick={() => runCommand(command)}
                    >
                      <Icon className="palette-icon" aria-hidden="true" />
                      <span className="palette-label">{command.label}</span>
                      {command.hint && <span className="palette-hint">{command.hint}</span>}
                      <FiCornerDownLeft className="palette-enter" aria-hidden="true" />
                    </li>
                  </React.Fragment>
                );
              })}
            </ul>

            <div className="palette-footer" aria-hidden="true">
              <span>
                <kbd>↑</kbd> <kbd>↓</kbd> navigate
              </span>
              <span>
                <kbd>↵</kbd> select
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default CommandPalette;
