"use client";

import { useState, useEffect, useRef } from "react";
import axios from "axios";


export default function Home() {
  const [userId, setUserId] = useState("");
  const [text, setText] = useState("");
  const [query, setQuery] = useState("");
  const [answer, setAnswer] = useState("");
  const [displayedAnswer, setDisplayedAnswer] = useState("");
  const [citations, setCitations] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [indexed, setIndexed] = useState(false);
  const [mounted, setMounted] = useState(false);
  const answerRef = useRef<HTMLDivElement>(null);

  const [mode, setMode] = useState("");

  // document tracking
  const [documents, setDocuments] = useState<any[]>([]);
  const [selectedDocId, setSelectedDocId] = useState<string | null>(null);

  // load persisted documents and selected doc from localStorage
  useEffect(() => {
    try {
      const raw = window.localStorage.getItem("wisp_documents");
      const sel = window.localStorage.getItem("wisp_selected_doc");
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) {
          setDocuments(parsed);
        }
      }
      if (sel) {
        setSelectedDocId(sel);
      }
    } catch (e) {
      // ignore
    }
  }, []);

  // persist documents and selectedDocId
  useEffect(() => {
    try {
      window.localStorage.setItem("wisp_documents", JSON.stringify(documents));
    } catch (e) {}
  }, [documents]);

  useEffect(() => {
    try {
      if (selectedDocId) {
        window.localStorage.setItem("wisp_selected_doc", selectedDocId);
      } else {
        window.localStorage.removeItem("wisp_selected_doc");
      }
    } catch (e) {}
  }, [selectedDocId]);

  const API = (process.env.NEXT_PUBLIC_API_URL || "http://localhost:8001").replace(/\/$/, "");

  useEffect(() => {
    setMounted(true);
    setUserId("test-user");
  }, []);

  // Word-by-word reveal animation
  useEffect(() => {
    if (!answer) return;
    setDisplayedAnswer("");
    const words = answer.split(" ");
    let i = 0;
    const interval = setInterval(() => {
      if (i < words.length) {
        setDisplayedAnswer((prev) => (prev ? prev + " " + words[i] : words[i]));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 38);
    return () => clearInterval(interval);
  }, [answer]);

  const ingest = async () => {
    if (!text) return;
    setLoading(true);
    const title = text.trim().split('\n')[0].substring(0, 30) || "Untitled Document";
    console.log("API URL:", API);
    const res = await axios.post(`${API}/ingest/text`, {
      user_id: userId,
      title: title,
      raw_text: text,
    });
    const docId = res?.data?.doc_id;

    if (docId) {
      setDocuments((prev) => [...prev, { doc_id: docId, title: title }]);
      setSelectedDocId(docId);
    }
    setLoading(false);
    setIndexed(true);
    setTimeout(() => setIndexed(false), 3000);
  };

  const runQuery = async () => {
    if (!query) return;
    setLoading(true);
    setAnswer("");
    setDisplayedAnswer("");

    const res = await axios.post(`${API}/query/`, {
      user_id: userId,
      query,
      doc_id: selectedDocId,
    });

    const cleanAnswer = (res.data.answer || "").replace(/undefined/g, "");
    setAnswer(cleanAnswer);
    setCitations(res.data.citations);
    setMode(res.data.retrieval_mode);

    setLoading(false);
    setTimeout(() => answerRef.current?.scrollIntoView({ behavior: "smooth" }), 100);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=IBM+Plex+Mono:wght@300;400&family=EB+Garamond:ital,wght@0,400;0,500;1,400&display=swap');

        :root {
          --ink: #0d0d0b;
          --ink-soft: #1a1a16;
          --ink-lift: #252520;
          --cream: #f0e8d8;
          --cream-dim: #c8bfaa;
          --gold: #c9a84c;
          --gold-dim: #8a6f30;
          --rust: #8b3a2a;
          --mono: 'IBM Plex Mono', monospace;
          --serif: 'EB Garamond', Georgia, serif;
          --display: 'Playfair Display', Georgia, serif;
        }

        * { box-sizing: border-box; margin: 0; padding: 0; }

        body {
          background: var(--ink);
          color: var(--cream);
          font-family: var(--serif);
          min-height: 100vh;
          overflow-x: hidden;
        }

        /* Grain overlay */
        body::before {
          content: '';
          position: fixed;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E");
          opacity: 0.028;
          pointer-events: none;
          z-index: 1000;
        }

        .page {
          max-width: 860px;
          margin: 0 auto;
          padding: 0 40px 120px;
          opacity: 0;
          transform: translateY(16px);
          animation: fadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.1s forwards;
        }

        @keyframes fadeUp {
          to { opacity: 1; transform: translateY(0); }
        }

        /* Header */
        .header {
          padding: 72px 0 56px;
          border-bottom: 1px solid rgba(201, 168, 76, 0.2);
          margin-bottom: 72px;
          position: relative;
        }

        .header::after {
          content: '';
          position: absolute;
          bottom: -1px;
          left: 0;
          width: 80px;
          height: 1px;
          background: var(--gold);
        }

        .eyebrow {
          font-family: var(--mono);
          font-size: 10px;
          letter-spacing: 0.3em;
          color: var(--gold);
          text-transform: uppercase;
          margin-bottom: 20px;
          opacity: 0;
          animation: fadeUp 0.6s ease 0.3s forwards;
        }

        .title {
          font-family: var(--display);
          font-size: clamp(52px, 8vw, 88px);
          font-weight: 700;
          line-height: 0.92;
          letter-spacing: -0.02em;
          color: var(--cream);
          margin-bottom: 20px;
          opacity: 0;
          animation: fadeUp 0.7s ease 0.4s forwards;
        }

        .title em {
          font-style: italic;
          color: var(--gold);
        }

        .subtitle {
          font-family: var(--serif);
          font-size: 16px;
          color: var(--cream-dim);
          font-style: italic;
          max-width: 440px;
          line-height: 1.6;
          opacity: 0;
          animation: fadeUp 0.7s ease 0.55s forwards;
        }

        /* Sections */
        .section {
          margin-bottom: 56px;
          opacity: 0;
          animation: fadeUp 0.7s ease forwards;
        }
        .section:nth-child(1) { animation-delay: 0.65s; }
        .section:nth-child(2) { animation-delay: 0.8s; }

        .section-label {
          font-family: var(--mono);
          font-size: 9px;
          letter-spacing: 0.28em;
          color: var(--gold-dim);
          text-transform: uppercase;
          margin-bottom: 16px;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .section-label::before {
          content: attr(data-num);
          color: var(--gold);
          font-size: 10px;
        }

        .section-label::after {
          content: '';
          flex: 1;
          height: 1px;
          background: linear-gradient(to right, rgba(201,168,76,0.2), transparent);
        }

        /* Textarea */
        .archive-textarea {
          width: 100%;
          background: var(--ink-soft);
          border: 1px solid rgba(201, 168, 76, 0.15);
          border-left: 2px solid var(--gold);
          color: var(--cream);
          font-family: var(--serif);
          font-size: 15px;
          line-height: 1.7;
          padding: 20px 24px;
          resize: vertical;
          min-height: 140px;
          outline: none;
          transition: border-color 0.2s, background 0.2s;
          caret-color: var(--gold);
        }

        .archive-textarea::placeholder { color: rgba(200, 191, 170, 0.3); font-style: italic; }
        .archive-textarea:focus {
          border-left-color: var(--gold);
          border-color: rgba(201, 168, 76, 0.35);
          background: var(--ink-lift);
        }

        /* Query input */
        .query-row {
          display: flex;
          gap: 0;
          align-items: stretch;
        }

        .archive-input {
          flex: 1;
          background: var(--ink-soft);
          border: 1px solid rgba(201, 168, 76, 0.15);
          border-right: none;
          color: var(--cream);
          font-family: var(--serif);
          font-size: 16px;
          font-style: italic;
          padding: 16px 20px;
          outline: none;
          transition: border-color 0.2s, background 0.2s;
          caret-color: var(--gold);
        }

        .archive-input::placeholder { color: rgba(200, 191, 170, 0.3); }
        .archive-input:focus {
          border-color: rgba(201, 168, 76, 0.35);
          border-right: none;
          background: var(--ink-lift);
        }

        /* Buttons */
        .btn {
          font-family: var(--mono);
          font-size: 10px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          border: none;
          cursor: pointer;
          padding: 14px 24px;
          transition: all 0.2s;
          position: relative;
          overflow: hidden;
        }

        .btn-ghost {
          background: transparent;
          color: var(--cream-dim);
          border: 1px solid rgba(201, 168, 76, 0.2);
          margin-top: 12px;
        }

        .btn-ghost:hover:not(:disabled) {
          background: rgba(201, 168, 76, 0.06);
          color: var(--gold);
          border-color: rgba(201, 168, 76, 0.4);
        }

        .btn-search {
          background: var(--gold);
          color: var(--ink);
          font-weight: 400;
          min-width: 100px;
        }

        .btn-search:hover:not(:disabled) {
          background: #d4b460;
          transform: translateY(-1px);
          box-shadow: 0 8px 24px rgba(201, 168, 76, 0.25);
        }

        .btn:disabled {
          opacity: 0.4;
          cursor: not-allowed;
          transform: none !important;
        }

        /* Indexed confirmation */
        .indexed-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: var(--mono);
          font-size: 10px;
          letter-spacing: 0.15em;
          color: var(--gold);
          margin-top: 12px;
          animation: fadeUp 0.3s ease forwards;
        }

        .indexed-badge::before {
          content: '✦';
          font-size: 8px;
        }

        /* Loading */
        .loading-bar {
          height: 1px;
          background: linear-gradient(to right, transparent, var(--gold), transparent);
          margin-top: 24px;
          animation: scan 1.4s ease-in-out infinite;
          background-size: 200% 100%;
        }

        @keyframes scan {
          0% { background-position: -100% 0; opacity: 0.4; }
          50% { opacity: 1; }
          100% { background-position: 200% 0; opacity: 0.4; }
        }

        /* Answer */
        .answer-block {
          margin-top: 64px;
          padding-top: 48px;
          border-top: 1px solid rgba(201, 168, 76, 0.12);
          animation: fadeUp 0.6s ease forwards;
        }

        .answer-label {
          font-family: var(--mono);
          font-size: 9px;
          letter-spacing: 0.28em;
          color: var(--gold);
          text-transform: uppercase;
          margin-bottom: 28px;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .answer-label::after {
          content: '';
          flex: 1;
          height: 1px;
          background: linear-gradient(to right, rgba(201,168,76,0.25), transparent);
        }

        .answer-text {
          font-family: var(--display);
          font-size: clamp(20px, 3vw, 26px);
          font-weight: 400;
          line-height: 1.55;
          color: var(--cream);
          letter-spacing: -0.01em;
        }

        .answer-text .cursor {
          display: inline-block;
          width: 2px;
          height: 1.1em;
          background: var(--gold);
          margin-left: 3px;
          vertical-align: text-bottom;
          animation: blink 0.9s step-end infinite;
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        /* Decorative vertical rule */
        .vert-rule {
          position: fixed;
          left: max(24px, calc(50vw - 490px));
          top: 0;
          bottom: 0;
          width: 1px;
          background: linear-gradient(to bottom, transparent 0%, rgba(201,168,76,0.08) 20%, rgba(201,168,76,0.08) 80%, transparent 100%);
          pointer-events: none;
        }
      `}</style>

      <div className="vert-rule" />

      <div className="page">
        <header className="header">
          <p className="eyebrow">Personal Knowledge Engine</p>
          <h1 className="title">
            W<em>i</em>sp
          </h1>
          <p className="subtitle">
            Surface meaning from your documents through hybrid AI retrieval
          </p>
        </header>

        <div className="section">
          <p className="section-label" data-num="01">Archive a Document</p>
          <textarea
            className="archive-textarea"
            rows={6}
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Paste any text — notes, articles, research, transcripts…"
          />
          <div>
            <button className="btn btn-ghost" onClick={ingest} disabled={loading}>
              {loading ? "Indexing…" : "Index Content"}
            </button>
            {indexed && <span className="indexed-badge">Archived to memory</span>}
          </div>
        </div>

        <div className="section">
          <p className="section-label" data-num="02">Ask a Question</p>
          {documents.length > 0 && (
            <div style={{ marginBottom: 12 }}>
              <select
                className="archive-input"
                value={selectedDocId ?? ""}
                onChange={(e) => setSelectedDocId(e.target.value || null)}
              >
                <option value="">Select document</option>
                {documents.map((d, i) => (
                  <option key={i} value={d.doc_id}>{d.title || `Document ${i + 1}`}</option>
                ))}
              </select>

              {/* small visual indicator for selected document */}
              {selectedDocId && (
                <div style={{ marginTop: 8, display: "flex", alignItems: "center", gap: 8 }}>
                  <div style={{ width: 10, height: 10, borderRadius: 6, background: "var(--gold)" }} />
                  <div style={{ fontFamily: "var(--mono)", fontSize: 11, color: "var(--gold-dim)" }}>
                    Selected: {(documents.find((d) => d.doc_id === selectedDocId)?.title) || selectedDocId}
                  </div>
                </div>
              )}
            </div>
          )}
          <div className="query-row">
            <input
              className="archive-input"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="What would you like to know?"
              onKeyDown={(e) => e.key === "Enter" && runQuery()}
            />
            <button className="btn btn-search" onClick={runQuery} disabled={loading}>
              {loading ? "…" : "Search"}
            </button>
          </div>
          {loading && <div className="loading-bar" />}
        </div>

        {displayedAnswer && (
          <div className="answer-block" ref={answerRef}>
            <p className="answer-label">Retrieved</p>
            

            

            {mode && (
              <div style={{
                fontFamily: "var(--mono)",
                fontSize: 10,
                letterSpacing: "0.2em",
                color: "#8a6f30",
                marginBottom: 16,
                textTransform: "uppercase"
              }}>
                Mode: {mode}
              </div>
            )}
            <p className="answer-text">
              {(displayedAnswer || "").replace(/undefined/g, "")}
              {displayedAnswer !== answer && <span className="cursor" />}
            </p>

            {citations.length > 0 && (
              <div style={{ marginTop: 40 }}>
                <p style={{
                  fontFamily: "var(--mono)",
                  fontSize: 9,
                  letterSpacing: "0.28em",
                  color: "var(--gold)",
                  marginBottom: 18,
                  textTransform: "uppercase",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px"
                }}>
                  Sources
                  <span style={{
                    flex: 1,
                    height: 1,
                    background: "linear-gradient(to right, rgba(201,168,76,0.25), transparent)"
                  }} />
                </p>

    {citations.slice(0, 3).map((c, i) => (
      <div
        key={i}
        style={{
          marginBottom: 18,
          padding: "14px 16px",
          background: "rgba(255,255,255,0.02)",
          border: "1px solid rgba(201,168,76,0.12)",
          borderLeft: "2px solid var(--gold)"
        }}
      >
        <div style={{
          fontFamily: "var(--mono)",
          fontSize: 10,
          letterSpacing: "0.15em",
          color: "#8a6f30",
          marginBottom: 6
        }}>
          {c.source_title || `Chunk ${i + 1}`}
        </div>

        <div style={{
          fontFamily: "var(--serif)",
          fontSize: 14,
          color: "#c8bfaa",
          lineHeight: 1.6
        }}>
          {c.snippet}
            </div>
          </div>
        ))}
      </div>
    )}
  </div>
        )}
        </div>
  </>

);
}
