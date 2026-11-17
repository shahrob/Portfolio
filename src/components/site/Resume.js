import React, { useEffect, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { FiDownload, FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";
import pdf from "../../Assets/Shahrob_Resume.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default function Resume() {
  const [width, setWidth] = useState(800);
  const [pages, setPages] = useState(0);

  useEffect(() => {
    const onResize = () => setWidth(Math.min(window.innerWidth - 32, 900));
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <section className="section resume-page">
      <div className="container">
        <div className="resume-actions">
          <Link to="/" className="btn btn-ghost">
            <FiArrowLeft /> Back
          </Link>
          <a href={pdf} className="btn btn-primary" target="_blank" rel="noreferrer">
            <FiDownload /> Download PDF
          </a>
        </div>
        <Document
          file={pdf}
          className="resume-doc"
          onLoadSuccess={({ numPages }) => setPages(numPages)}
          loading={<p className="resume-loading">Loading résumé…</p>}
        >
          {Array.from({ length: pages }, (_, i) => (
            <Page key={i} pageNumber={i + 1} width={width} renderTextLayer={false} />
          ))}
        </Document>
      </div>
    </section>
  );
}
