import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { FiArrowLeft, FiDownload, FiExternalLink } from "react-icons/fi";
import { reveal } from "../UI/reveal";
import { profile } from "../../data/profile";
import "./ResumePage.css";

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const MAX_PAGE_WIDTH = 880;

function ResumePage() {
  const containerRef = useRef(null);
  const [pageWidth, setPageWidth] = useState(MAX_PAGE_WIDTH);
  const [numPages, setNumPages] = useState(0);

  // Size the PDF pages to the container so they stay sharp on every screen.
  useEffect(() => {
    const node = containerRef.current;
    if (!node) return undefined;
    const update = () => setPageWidth(Math.min(node.clientWidth, MAX_PAGE_WIDTH));
    update();

    if ("ResizeObserver" in window) {
      const observer = new ResizeObserver(update);
      observer.observe(node);
      return () => observer.disconnect();
    }
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <div className="page resume-page">
      <Helmet>
        <title>Resume | {profile.name}</title>
      </Helmet>

      <div className="container">
        <motion.header className="page-head resume-head" {...reveal()}>
          <div>
            <Link to="/" className="back-link">
              <FiArrowLeft aria-hidden="true" /> Back home
            </Link>
            <p className="eyebrow">Resume</p>
            <h1 className="page-title">
              {profile.shortName}'s <em>CV</em>.
            </h1>
            <p className="page-intro">
              {profile.role} · 6+ years · {profile.location}
            </p>
          </div>
          <div className="resume-actions">
            <a
              href={profile.resume}
              className="btn btn-primary"
              download="Muhammad_Shahrob_Abbas_Resume.pdf"
            >
              <FiDownload aria-hidden="true" /> Download PDF
            </a>
            <a
              href={profile.resume}
              className="btn btn-ghost"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiExternalLink aria-hidden="true" /> Open in new tab
            </a>
          </div>
        </motion.header>

        <div className="resume-doc" ref={containerRef}>
          <Document
            file={profile.resume}
            onLoadSuccess={({ numPages: total }) => setNumPages(total)}
            loading={<div className="resume-placeholder">Loading resume…</div>}
            error={
              <div className="resume-placeholder">
                The preview couldn't load.{" "}
                <a href={profile.resume} target="_blank" rel="noopener noreferrer">
                  Open the PDF
                </a>{" "}
                instead.
              </div>
            }
          >
            {Array.from({ length: numPages }, (_, index) => (
              <div className="resume-sheet" key={index}>
                <Page pageNumber={index + 1} width={pageWidth} />
              </div>
            ))}
          </Document>
        </div>
      </div>
    </div>
  );
}

export default ResumePage;
