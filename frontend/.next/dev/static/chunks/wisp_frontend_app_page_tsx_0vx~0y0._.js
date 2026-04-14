(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/wisp/frontend/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$wisp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/wisp/frontend/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wisp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wisp/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wisp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wisp/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wisp$2f$frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wisp/frontend/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function Home() {
    _s();
    const [userId, setUserId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$wisp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [text, setText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$wisp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$wisp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [answer, setAnswer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$wisp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [displayedAnswer, setDisplayedAnswer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$wisp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [citations, setCitations] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$wisp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$wisp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [indexed, setIndexed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$wisp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$wisp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const answerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$wisp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [mode, setMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$wisp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    // document tracking
    const [documents, setDocuments] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$wisp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedDocId, setSelectedDocId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$wisp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // load persisted documents and selected doc from localStorage
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$wisp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
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
        }
    }["Home.useEffect"], []);
    // persist documents and selectedDocId
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$wisp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            try {
                window.localStorage.setItem("wisp_documents", JSON.stringify(documents));
            } catch (e) {}
        }
    }["Home.useEffect"], [
        documents
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$wisp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            try {
                if (selectedDocId) {
                    window.localStorage.setItem("wisp_selected_doc", selectedDocId);
                } else {
                    window.localStorage.removeItem("wisp_selected_doc");
                }
            } catch (e) {}
        }
    }["Home.useEffect"], [
        selectedDocId
    ]);
    const API = ("TURBOPACK compile-time value", "http://localhost:8001") || "http://localhost:8001";
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$wisp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            setMounted(true);
            setUserId("test-user");
        }
    }["Home.useEffect"], []);
    // Word-by-word reveal animation
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$wisp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            if (!answer) return;
            setDisplayedAnswer("");
            const words = answer.split(" ");
            let i = 0;
            const interval = setInterval({
                "Home.useEffect.interval": ()=>{
                    if (i < words.length) {
                        setDisplayedAnswer({
                            "Home.useEffect.interval": (prev)=>prev ? prev + " " + words[i] : words[i]
                        }["Home.useEffect.interval"]);
                        i++;
                    } else {
                        clearInterval(interval);
                    }
                }
            }["Home.useEffect.interval"], 38);
            return ({
                "Home.useEffect": ()=>clearInterval(interval)
            })["Home.useEffect"];
        }
    }["Home.useEffect"], [
        answer
    ]);
    const ingest = async ()=>{
        if (!text) return;
        setLoading(true);
        const title = text.trim().split('\n')[0].substring(0, 30) || "Untitled Document";
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$wisp$2f$frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(`${API}/ingest/text`, {
            user_id: userId,
            title: title,
            raw_text: text
        });
        const docId = res?.data?.doc_id;
        if (docId) {
            setDocuments((prev)=>[
                    ...prev,
                    {
                        doc_id: docId,
                        title: title
                    }
                ]);
            setSelectedDocId(docId);
        }
        setLoading(false);
        setIndexed(true);
        setTimeout(()=>setIndexed(false), 3000);
    };
    const runQuery = async ()=>{
        if (!query) return;
        setLoading(true);
        setAnswer("");
        setDisplayedAnswer("");
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$wisp$2f$frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(`${API}/query/`, {
            user_id: userId,
            query,
            doc_id: selectedDocId
        });
        const cleanAnswer = (res.data.answer || "").replace(/undefined/g, "");
        setAnswer(cleanAnswer);
        setCitations(res.data.citations);
        setMode(res.data.retrieval_mode);
        setLoading(false);
        setTimeout(()=>answerRef.current?.scrollIntoView({
                behavior: "smooth"
            }), 100);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wisp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$wisp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wisp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
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
      `
            }, void 0, false, {
                fileName: "[project]/wisp/frontend/app/page.tsx",
                lineNumber: 128,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wisp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "vert-rule"
            }, void 0, false, {
                fileName: "[project]/wisp/frontend/app/page.tsx",
                lineNumber: 466,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wisp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "page",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wisp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: "header",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wisp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "eyebrow",
                                children: "Personal Knowledge Engine"
                            }, void 0, false, {
                                fileName: "[project]/wisp/frontend/app/page.tsx",
                                lineNumber: 470,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wisp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "title",
                                children: [
                                    "W",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wisp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                        children: "i"
                                    }, void 0, false, {
                                        fileName: "[project]/wisp/frontend/app/page.tsx",
                                        lineNumber: 472,
                                        columnNumber: 14
                                    }, this),
                                    "sp"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/wisp/frontend/app/page.tsx",
                                lineNumber: 471,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wisp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "subtitle",
                                children: "Surface meaning from your documents through hybrid AI retrieval"
                            }, void 0, false, {
                                fileName: "[project]/wisp/frontend/app/page.tsx",
                                lineNumber: 474,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/wisp/frontend/app/page.tsx",
                        lineNumber: 469,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wisp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "section",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wisp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "section-label",
                                "data-num": "01",
                                children: "Archive a Document"
                            }, void 0, false, {
                                fileName: "[project]/wisp/frontend/app/page.tsx",
                                lineNumber: 480,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wisp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                className: "archive-textarea",
                                rows: 6,
                                value: text,
                                onChange: (e)=>setText(e.target.value),
                                placeholder: "Paste any text — notes, articles, research, transcripts…"
                            }, void 0, false, {
                                fileName: "[project]/wisp/frontend/app/page.tsx",
                                lineNumber: 481,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wisp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wisp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "btn btn-ghost",
                                        onClick: ingest,
                                        disabled: loading,
                                        children: loading ? "Indexing…" : "Index Content"
                                    }, void 0, false, {
                                        fileName: "[project]/wisp/frontend/app/page.tsx",
                                        lineNumber: 489,
                                        columnNumber: 13
                                    }, this),
                                    indexed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wisp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "indexed-badge",
                                        children: "Archived to memory"
                                    }, void 0, false, {
                                        fileName: "[project]/wisp/frontend/app/page.tsx",
                                        lineNumber: 492,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/wisp/frontend/app/page.tsx",
                                lineNumber: 488,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/wisp/frontend/app/page.tsx",
                        lineNumber: 479,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wisp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "section",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wisp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "section-label",
                                "data-num": "02",
                                children: "Ask a Question"
                            }, void 0, false, {
                                fileName: "[project]/wisp/frontend/app/page.tsx",
                                lineNumber: 497,
                                columnNumber: 11
                            }, this),
                            documents.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wisp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginBottom: 12
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wisp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        className: "archive-input",
                                        value: selectedDocId ?? "",
                                        onChange: (e)=>setSelectedDocId(e.target.value || null),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wisp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "",
                                                children: "Select document"
                                            }, void 0, false, {
                                                fileName: "[project]/wisp/frontend/app/page.tsx",
                                                lineNumber: 505,
                                                columnNumber: 17
                                            }, this),
                                            documents.map((d, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wisp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: d.doc_id,
                                                    children: d.title || `Document ${i + 1}`
                                                }, i, false, {
                                                    fileName: "[project]/wisp/frontend/app/page.tsx",
                                                    lineNumber: 507,
                                                    columnNumber: 19
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/wisp/frontend/app/page.tsx",
                                        lineNumber: 500,
                                        columnNumber: 15
                                    }, this),
                                    selectedDocId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wisp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            marginTop: 8,
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 8
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wisp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    width: 10,
                                                    height: 10,
                                                    borderRadius: 6,
                                                    background: "var(--gold)"
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/wisp/frontend/app/page.tsx",
                                                lineNumber: 514,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wisp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontFamily: "var(--mono)",
                                                    fontSize: 11,
                                                    color: "var(--gold-dim)"
                                                },
                                                children: [
                                                    "Selected: ",
                                                    documents.find((d)=>d.doc_id === selectedDocId)?.title || selectedDocId
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/wisp/frontend/app/page.tsx",
                                                lineNumber: 515,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/wisp/frontend/app/page.tsx",
                                        lineNumber: 513,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/wisp/frontend/app/page.tsx",
                                lineNumber: 499,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wisp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "query-row",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wisp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        className: "archive-input",
                                        value: query,
                                        onChange: (e)=>setQuery(e.target.value),
                                        placeholder: "What would you like to know?",
                                        onKeyDown: (e)=>e.key === "Enter" && runQuery()
                                    }, void 0, false, {
                                        fileName: "[project]/wisp/frontend/app/page.tsx",
                                        lineNumber: 523,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wisp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "btn btn-search",
                                        onClick: runQuery,
                                        disabled: loading,
                                        children: loading ? "…" : "Search"
                                    }, void 0, false, {
                                        fileName: "[project]/wisp/frontend/app/page.tsx",
                                        lineNumber: 530,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/wisp/frontend/app/page.tsx",
                                lineNumber: 522,
                                columnNumber: 11
                            }, this),
                            loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wisp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "loading-bar"
                            }, void 0, false, {
                                fileName: "[project]/wisp/frontend/app/page.tsx",
                                lineNumber: 534,
                                columnNumber: 23
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/wisp/frontend/app/page.tsx",
                        lineNumber: 496,
                        columnNumber: 9
                    }, this),
                    displayedAnswer && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wisp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "answer-block",
                        ref: answerRef,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wisp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "answer-label",
                                children: "Retrieved"
                            }, void 0, false, {
                                fileName: "[project]/wisp/frontend/app/page.tsx",
                                lineNumber: 539,
                                columnNumber: 13
                            }, this),
                            mode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wisp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontFamily: "var(--mono)",
                                    fontSize: 10,
                                    letterSpacing: "0.2em",
                                    color: "#8a6f30",
                                    marginBottom: 16,
                                    textTransform: "uppercase"
                                },
                                children: [
                                    "Mode: ",
                                    mode
                                ]
                            }, void 0, true, {
                                fileName: "[project]/wisp/frontend/app/page.tsx",
                                lineNumber: 545,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wisp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "answer-text",
                                children: [
                                    (displayedAnswer || "").replace(/undefined/g, ""),
                                    displayedAnswer !== answer && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wisp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "cursor"
                                    }, void 0, false, {
                                        fileName: "[project]/wisp/frontend/app/page.tsx",
                                        lineNumber: 558,
                                        columnNumber: 46
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/wisp/frontend/app/page.tsx",
                                lineNumber: 556,
                                columnNumber: 13
                            }, this),
                            citations.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wisp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginTop: 40
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wisp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            fontFamily: "var(--mono)",
                                            fontSize: 9,
                                            letterSpacing: "0.28em",
                                            color: "var(--gold)",
                                            marginBottom: 18,
                                            textTransform: "uppercase",
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "12px"
                                        },
                                        children: [
                                            "Sources",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wisp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    flex: 1,
                                                    height: 1,
                                                    background: "linear-gradient(to right, rgba(201,168,76,0.25), transparent)"
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/wisp/frontend/app/page.tsx",
                                                lineNumber: 575,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/wisp/frontend/app/page.tsx",
                                        lineNumber: 563,
                                        columnNumber: 17
                                    }, this),
                                    citations.slice(0, 3).map((c, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wisp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                marginBottom: 18,
                                                padding: "14px 16px",
                                                background: "rgba(255,255,255,0.02)",
                                                border: "1px solid rgba(201,168,76,0.12)",
                                                borderLeft: "2px solid var(--gold)"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wisp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        fontFamily: "var(--mono)",
                                                        fontSize: 10,
                                                        letterSpacing: "0.15em",
                                                        color: "#8a6f30",
                                                        marginBottom: 6
                                                    },
                                                    children: c.source_title || `Chunk ${i + 1}`
                                                }, void 0, false, {
                                                    fileName: "[project]/wisp/frontend/app/page.tsx",
                                                    lineNumber: 593,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wisp$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        fontFamily: "var(--serif)",
                                                        fontSize: 14,
                                                        color: "#c8bfaa",
                                                        lineHeight: 1.6
                                                    },
                                                    children: c.snippet
                                                }, void 0, false, {
                                                    fileName: "[project]/wisp/frontend/app/page.tsx",
                                                    lineNumber: 603,
                                                    columnNumber: 9
                                                }, this)
                                            ]
                                        }, i, true, {
                                            fileName: "[project]/wisp/frontend/app/page.tsx",
                                            lineNumber: 583,
                                            columnNumber: 7
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/wisp/frontend/app/page.tsx",
                                lineNumber: 562,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/wisp/frontend/app/page.tsx",
                        lineNumber: 538,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/wisp/frontend/app/page.tsx",
                lineNumber: 468,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(Home, "jnwz5KXLBzsAGchrMIj5wyagMdA=");
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=wisp_frontend_app_page_tsx_0vx~0y0._.js.map