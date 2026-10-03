(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/expand.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Expand",
    ()=>Expand
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconChevronDown$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/@tabler/icons-react/dist/esm/icons/IconChevronDown.mjs [app-client] (ecmascript) <export default as IconChevronDown>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function Expand({ label, openLabel = "Show less", children }) {
    _s();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: ()=>setOpen((o)=>!o),
                "aria-expanded": open,
                className: "press flex min-h-11 w-full items-center justify-center gap-1 pt-2 text-sm font-medium text-muted-foreground",
                children: [
                    open ? openLabel : label,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconChevronDown$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconChevronDown$3e$__["IconChevronDown"], {
                        size: 16,
                        stroke: 2,
                        className: "transition-transform duration-200 [transition-timing-function:var(--ease-out)]",
                        style: {
                            transform: open ? "rotate(180deg)" : "none"
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/expand.tsx",
                        lineNumber: 13,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/expand.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid transition-[grid-template-rows,opacity] duration-200 [transition-timing-function:var(--ease-out)]",
                style: {
                    gridTemplateRows: open ? "1fr" : "0fr",
                    opacity: open ? 1 : 0
                },
                "aria-hidden": !open,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "min-h-0 overflow-hidden",
                    children: children
                }, void 0, false, {
                    fileName: "[project]/src/components/expand.tsx",
                    lineNumber: 16,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/expand.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/expand.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_s(Expand, "xG1TONbKtDWtdOTrXaTAsNhPg/Q=");
_c = Expand;
var _c;
__turbopack_context__.k.register(_c, "Expand");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/pay-sheet.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PaySheet",
    ()=>PaySheet
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconX$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconX$3e$__ = __turbopack_context__.i("[project]/node_modules/@tabler/icons-react/dist/esm/icons/IconX.mjs [app-client] (ecmascript) <export default as IconX>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconCopy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconCopy$3e$__ = __turbopack_context__.i("[project]/node_modules/@tabler/icons-react/dist/esm/icons/IconCopy.mjs [app-client] (ecmascript) <export default as IconCopy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconCheck$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/@tabler/icons-react/dist/esm/icons/IconCheck.mjs [app-client] (ecmascript) <export default as IconCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconClock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconClock$3e$__ = __turbopack_context__.i("[project]/node_modules/@tabler/icons-react/dist/esm/icons/IconClock.mjs [app-client] (ecmascript) <export default as IconClock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconAlertCircle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconAlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/@tabler/icons-react/dist/esm/icons/IconAlertCircle.mjs [app-client] (ecmascript) <export default as IconAlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconCreditCard$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconCreditCard$3e$__ = __turbopack_context__.i("[project]/node_modules/@tabler/icons-react/dist/esm/icons/IconCreditCard.mjs [app-client] (ecmascript) <export default as IconCreditCard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconPhoto$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconPhoto$3e$__ = __turbopack_context__.i("[project]/node_modules/@tabler/icons-react/dist/esm/icons/IconPhoto.mjs [app-client] (ecmascript) <export default as IconPhoto>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$pay$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/pay.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
const MAX_FILE = 10 * 1024 * 1024, TYPES = "image/jpeg,image/png,image/gif,image/webp"; // the backend's proof limits
const SEND_FAIL = "Couldn’t send it. Check your connection and try again.";
const TITLE = {
    review: "Review payment",
    upi: "Pay with UPI",
    confirm: "Confirm your payment",
    done: "Sent for confirmation"
};
const textBtn = "min-h-11 w-full text-sm font-medium text-muted-foreground underline underline-offset-2";
// Every error and the rejection note share one red box, so a problem always looks like a problem.
const Alert = ({ children, live = true })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        role: live ? "alert" : undefined,
        className: "flex items-start gap-2 rounded-lg bg-destructive/10 px-3 py-2.5 text-sm",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconAlertCircle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconAlertCircle$3e$__["IconAlertCircle"], {
                size: 16,
                stroke: 2,
                className: "mt-0.5 shrink-0 text-destructive"
            }, void 0, false, {
                fileName: "[project]/src/components/pay-sheet.tsx",
                lineNumber: 23,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-w-0",
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/pay-sheet.tsx",
                lineNumber: 23,
                columnNumber: 90
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/pay-sheet.tsx",
        lineNumber: 22,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c = Alert;
const WhatsApp = ({ p })=>p?.phone ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
        href: `https://wa.me/${p.phone.replace(/\D/g, "")}`,
        target: "_blank",
        rel: "noopener noreferrer",
        className: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["btn"])("ghost")} mt-3`,
        children: [
            "Message ",
            p.name,
            " on WhatsApp"
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/pay-sheet.tsx",
        lineNumber: 27,
        columnNumber: 14
    }, ("TURBOPACK compile-time value", void 0)) : null;
_c1 = WhatsApp;
function PaySheet({ token, who = "", link = false, provider, name, children }) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const pushed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const want = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false); // open as soon as the portalled dialog attaches
    const [live, setLive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])(); // two sheets can share a token (Home's Renew link and its due card)
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("review");
    const [via, setVia] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("review"); // where Back on the confirm step returns to
    const [ctx, setCtx] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [req, setReq] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [err, setErr] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [busy, setBusy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [hint, setHint] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(""); // quiet guidance (no UPI app opened, copy blocked), not an error
    const [file, setFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // a server message that reads as a sentence (expired link) is shown as is, anything else becomes the connection line
    const load = ()=>{
        setErr("");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$pay$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContext"])(token).then(setCtx, (e)=>setErr(e instanceof Error && /[a-z]{3,}.*\./.test(e.message) ? e.message : "Couldn’t load this payment. Check your connection and try again."));
    };
    // focus the sheet itself, not its first button, so no focus ring lands on ✕ (Tab still walks the sheet)
    const show = (d)=>{
        d.showModal();
        d.focus();
    };
    const attach = (d)=>{
        ref.current = d;
        if (d && want.current) {
            want.current = false;
            show(d);
        }
    };
    const open = ()=>{
        if (ref.current) show(ref.current);
        else {
            want.current = true;
            setLive(true);
        }
        history.pushState(history.state, "");
        pushed.current = true;
        addEventListener("popstate", ()=>{
            pushed.current = false;
            ref.current?.close();
        }, {
            once: true
        });
        if (!ctx) load();
    };
    // every way out (✕, scrim, Esc, Pay later, Close, Back) lands here
    const onClose = ()=>{
        if (ref.current?.open) return; // a late close event after a quick reopen
        const after = ()=>{
            if (step === "done") {
                setCtx(null);
                setReq(null);
                router.refresh();
            }
        }; // the bill now reads "Checking"
        // history.back() pops later and Next restores its cached page on that pop, so refresh only after it, or the refresh is lost
        if (pushed.current) {
            pushed.current = false;
            addEventListener("popstate", ()=>setTimeout(after), {
                once: true
            });
            history.back();
        } else after();
        setStep("review");
        setVia("review");
        setFile(null);
        setCopied(false);
        setErr("");
        setHint("");
    };
    const close = ()=>ref.current?.close();
    const start = ()=>{
        setErr("");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$pay$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initiate"])(token).then(setReq, ()=>setErr("Couldn’t set up the UPI payment."));
    };
    const toUpi = ()=>{
        setStep("upi");
        setHint("");
        if (!req) start();
    };
    // upi:// does nothing on a phone without a UPI app (or on a laptop). If this page is still in front after 2.5s, point at the other two routes.
    const tapped = ()=>setTimeout(()=>{
            if (document.visibilityState === "visible") setHint("Nothing opened? Copy the UPI ID below, or scan the QR from another phone.");
        }, 2500);
    const send = async ()=>{
        if (!file) return; // UPI claims need the screenshot, the backend rejects one without
        setBusy(true);
        setErr("");
        try {
            await (req ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$pay$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["submitProof"])(token, req.request_id, file) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$pay$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["claimAlreadyPaid"])(token, file));
            if (ref.current?.open) setStep("done");
            else router.refresh(); // closed while sending: the claim still went through, so the page should say Checking
        } catch  {
            setErr(SEND_FAIL);
        } finally{
            setBusy(false);
        }
    };
    const pick = (f)=>{
        setFile(null);
        if (f && !TYPES.split(",").includes(f.type)) setErr("That file won’t upload. Pick a JPG, PNG, GIF or WebP screenshot.");
        else if (f && f.size > MAX_FILE) setErr("That screenshot is over 10 MB. Pick a smaller one.");
        else {
            setErr("");
            setFile(f);
        }
    };
    // old WebViews and http pages have no clipboard API: fall back to telling the parent how to copy by hand
    const copy = ()=>(navigator.clipboard?.writeText(ctx.provider.upi_id) ?? Promise.reject()).then(()=>setCopied(true), ()=>setHint("Couldn’t copy here. Long-press the UPI ID to copy it."));
    const due = ctx?.bill ?? ctx?.renewal;
    const settled = !!due && due.amount <= 0; // fully paid, status lagging: never offer "Pay ₹0"
    const place = ctx?.provider ?? provider;
    const rejected = ctx?.rejection_notice;
    const upiFail = step === "upi" && !!err && !req;
    const rows = due?.breakdown ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["breakdownRows"])(due.breakdown).filter(([, v])=>v !== 0) : [];
    const notice = rejected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mb-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Alert, {
            live: false,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "font-medium text-destructive",
                    children: rejected.reason_label
                }, void 0, false, {
                    fileName: "[project]/src/components/pay-sheet.tsx",
                    lineNumber: 99,
                    columnNumber: 7
                }, this),
                rejected.note && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-1",
                    children: [
                        "“",
                        rejected.note,
                        "” ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-muted-foreground",
                            children: [
                                "· ",
                                ctx.provider.name
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/pay-sheet.tsx",
                            lineNumber: 100,
                            columnNumber: 63
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/pay-sheet.tsx",
                    lineNumber: 100,
                    columnNumber: 25
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/pay-sheet.tsx",
            lineNumber: 98,
            columnNumber: 27
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/pay-sheet.tsx",
        lineNumber: 98,
        columnNumber: 5
    }, this);
    const upiRow = ctx && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-between gap-3 rounded-xl bg-muted/60 py-1.5 pl-3.5 pr-1.5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-w-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-muted-foreground",
                        children: "UPI ID"
                    }, void 0, false, {
                        fileName: "[project]/src/components/pay-sheet.tsx",
                        lineNumber: 105,
                        columnNumber: 32
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "truncate font-medium",
                        children: ctx.provider.upi_id
                    }, void 0, false, {
                        fileName: "[project]/src/components/pay-sheet.tsx",
                        lineNumber: 105,
                        columnNumber: 87
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/pay-sheet.tsx",
                lineNumber: 105,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: copy,
                className: "press inline-flex h-11 shrink-0 items-center gap-1.5 rounded-lg px-3 text-sm font-medium",
                children: copied ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconCheck$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconCheck$3e$__["IconCheck"], {
                            size: 16,
                            stroke: 2,
                            className: "text-success"
                        }, void 0, false, {
                            fileName: "[project]/src/components/pay-sheet.tsx",
                            lineNumber: 106,
                            columnNumber: 157
                        }, this),
                        "Copied"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/pay-sheet.tsx",
                    lineNumber: 106,
                    columnNumber: 155
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconCopy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconCopy$3e$__["IconCopy"], {
                            size: 16,
                            stroke: 2
                        }, void 0, false, {
                            fileName: "[project]/src/components/pay-sheet.tsx",
                            lineNumber: 106,
                            columnNumber: 230
                        }, this),
                        "Copy"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/pay-sheet.tsx",
                    lineNumber: 106,
                    columnNumber: 228
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/pay-sheet.tsx",
                lineNumber: 106,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/pay-sheet.tsx",
        lineNumber: 104,
        columnNumber: 5
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: open,
                "aria-label": name,
                className: link ? "font-medium underline underline-offset-2" : (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["btn"])(),
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/pay-sheet.tsx",
                lineNumber: 112,
                columnNumber: 7
            }, this),
            live && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPortal"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dialog", {
                ref: attach,
                onClose: onClose,
                onClick: (e)=>e.target === e.currentTarget && close(),
                "aria-labelledby": `${id}t`,
                tabIndex: -1,
                className: "sheet outline-none",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex max-h-[90dvh] flex-col rounded-t-[1.25rem] border-t border-border",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                            className: "flex items-start justify-between gap-3 px-4 pt-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "min-w-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            id: `${id}t`,
                                            className: "text-lg font-semibold leading-snug",
                                            children: TITLE[step]
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/pay-sheet.tsx",
                                            lineNumber: 117,
                                            columnNumber: 15
                                        }, this),
                                        ctx && step !== "done" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-muted-foreground",
                                            children: [
                                                ctx.provider.name,
                                                who,
                                                ctx.bill && ` · ${ctx.bill.overdue ? "Was due" : "Due by"} ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["day"])(ctx.bill.due_date)}`
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/pay-sheet.tsx",
                                            lineNumber: 118,
                                            columnNumber: 42
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/pay-sheet.tsx",
                                    lineNumber: 116,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: close,
                                    "aria-label": "Close",
                                    className: "press -mr-2 -mt-2 grid size-11 shrink-0 place-items-center rounded-full text-muted-foreground",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconX$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconX$3e$__["IconX"], {
                                        size: 20,
                                        stroke: 2
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/pay-sheet.tsx",
                                        lineNumber: 120,
                                        columnNumber: 176
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/pay-sheet.tsx",
                                    lineNumber: 120,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/pay-sheet.tsx",
                            lineNumber: 115,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "overflow-y-auto overscroll-contain px-4 pb-2 pt-4",
                            children: !ctx || !due ? err ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pb-2",
                                children: /expired/.test(err) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Alert, {
                                            children: err
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/pay-sheet.tsx",
                                            lineNumber: 125,
                                            columnNumber: 68
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WhatsApp, {
                                            p: place
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/pay-sheet.tsx",
                                            lineNumber: 125,
                                            columnNumber: 88
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/pay-sheet.tsx",
                                    lineNumber: 125,
                                    columnNumber: 66
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Alert, {
                                    children: [
                                        err,
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: load,
                                            className: "font-medium underline underline-offset-2",
                                            children: "Try again"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/pay-sheet.tsx",
                                            lineNumber: 126,
                                            columnNumber: 32
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/pay-sheet.tsx",
                                    lineNumber: 126,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/pay-sheet.tsx",
                                lineNumber: 125,
                                columnNumber: 21
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3 pb-6",
                                "aria-busy": "true",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-4 w-2/3 rounded bg-muted"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/pay-sheet.tsx",
                                        lineNumber: 127,
                                        columnNumber: 68
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-4 w-1/2 rounded bg-muted"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/pay-sheet.tsx",
                                        lineNumber: 127,
                                        columnNumber: 114
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-24 rounded-xl bg-muted"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/pay-sheet.tsx",
                                        lineNumber: 127,
                                        columnNumber: 160
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/pay-sheet.tsx",
                                lineNumber: 127,
                                columnNumber: 19
                            }, this) : settled ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "pb-2 text-sm",
                                children: [
                                    "Nothing left to pay on this bill. If it still shows as due, ",
                                    ctx.provider.name,
                                    "’s records will catch up shortly."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/pay-sheet.tsx",
                                lineNumber: 129,
                                columnNumber: 15
                            }, this) : step === "review" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    notice,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mb-2 font-medium",
                                        children: ctx.renewal ? `Renewal for ${ctx.renewal.batch}` : ctx.bill?.label
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/pay-sheet.tsx",
                                        lineNumber: 133,
                                        columnNumber: 17
                                    }, this),
                                    ctx.renewal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dl", {
                                        className: "mb-4 space-y-1 text-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                        className: "text-muted-foreground",
                                                        children: "Plan"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/pay-sheet.tsx",
                                                        lineNumber: 136,
                                                        columnNumber: 65
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                        className: "text-right font-medium",
                                                        children: ctx.renewal.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/pay-sheet.tsx",
                                                        lineNumber: 136,
                                                        columnNumber: 112
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/pay-sheet.tsx",
                                                lineNumber: 136,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                        className: "text-muted-foreground",
                                                        children: "New cycle"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/pay-sheet.tsx",
                                                        lineNumber: 137,
                                                        columnNumber: 65
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                        className: "text-right font-medium",
                                                        children: ctx.renewal.cycle_dates.end_date ? `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["day"])(ctx.renewal.cycle_dates.start_date)} to ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["day"])(ctx.renewal.cycle_dates.end_date)}` : ctx.renewal.cycle_dates.start_date ? `Starts ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["day"])(ctx.renewal.cycle_dates.start_date)}` : "After this cycle ends"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/pay-sheet.tsx",
                                                        lineNumber: 137,
                                                        columnNumber: 117
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/pay-sheet.tsx",
                                                lineNumber: 137,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "pt-1 text-xs text-muted-foreground",
                                                children: [
                                                    "To change plan, ask ",
                                                    ctx.provider.name,
                                                    "."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/pay-sheet.tsx",
                                                lineNumber: 138,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/pay-sheet.tsx",
                                        lineNumber: 135,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dl", {
                                        className: "rounded-xl bg-muted/60 px-3.5 py-2.5 text-sm",
                                        children: [
                                            rows.map(([n, v, sub])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `flex justify-between py-1 text-muted-foreground ${sub ? "pl-3" : ""}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                            children: n
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/pay-sheet.tsx",
                                                            lineNumber: 142,
                                                            columnNumber: 142
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                            className: "tabular-nums",
                                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signed"])(v)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/pay-sheet.tsx",
                                                            lineNumber: 142,
                                                            columnNumber: 154
                                                        }, this)
                                                    ]
                                                }, n, true, {
                                                    fileName: "[project]/src/components/pay-sheet.tsx",
                                                    lineNumber: 142,
                                                    columnNumber: 46
                                                }, this)),
                                            ctx.bill?.amount_paid ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between border-t border-border py-1 pt-1.5",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                                children: "Total"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/pay-sheet.tsx",
                                                                lineNumber: 144,
                                                                columnNumber: 94
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                                className: "tabular-nums",
                                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inr"])(ctx.bill.bill_amount)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/pay-sheet.tsx",
                                                                lineNumber: 144,
                                                                columnNumber: 108
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/pay-sheet.tsx",
                                                        lineNumber: 144,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between py-1 text-success",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                                children: "Paid"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/pay-sheet.tsx",
                                                                lineNumber: 145,
                                                                columnNumber: 77
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                                className: "tabular-nums",
                                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signed"])(-ctx.bill.amount_paid)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/pay-sheet.tsx",
                                                                lineNumber: 145,
                                                                columnNumber: 90
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/pay-sheet.tsx",
                                                        lineNumber: 145,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/pay-sheet.tsx",
                                                lineNumber: 143,
                                                columnNumber: 44
                                            }, this) : null,
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `flex justify-between pt-1.5 font-semibold ${rows.length ? "border-t border-border" : ""}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                        children: ctx.bill?.amount_paid ? "Left to pay" : "Total"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/pay-sheet.tsx",
                                                        lineNumber: 147,
                                                        columnNumber: 127
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                        className: "tabular-nums",
                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inr"])(due.amount)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/pay-sheet.tsx",
                                                        lineNumber: 147,
                                                        columnNumber: 185
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/pay-sheet.tsx",
                                                lineNumber: 147,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/pay-sheet.tsx",
                                        lineNumber: 141,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/pay-sheet.tsx",
                                lineNumber: 131,
                                columnNumber: 15
                            }, this) : step === "upi" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-3xl font-semibold tabular-nums",
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inr"])(due.amount)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/pay-sheet.tsx",
                                        lineNumber: 152,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mb-4 text-sm text-muted-foreground",
                                        children: [
                                            "to ",
                                            req?.upi_name || ctx.provider.upi_name
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/pay-sheet.tsx",
                                        lineNumber: 153,
                                        columnNumber: 17
                                    }, this),
                                    upiFail ? // no request, so no deep link or QR: the UPI ID is the way through, with the error right above it
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Alert, {
                                                children: [
                                                    "Couldn’t set up the UPI payment. ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: start,
                                                        className: "font-medium underline underline-offset-2",
                                                        children: "Try again"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/pay-sheet.tsx",
                                                        lineNumber: 157,
                                                        columnNumber: 61
                                                    }, this),
                                                    " or pay to the UPI ID below, then tap I’ve paid."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/pay-sheet.tsx",
                                                lineNumber: 157,
                                                columnNumber: 21
                                            }, this),
                                            upiRow
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/pay-sheet.tsx",
                                        lineNumber: 156,
                                        columnNumber: 19
                                    }, this) : /* phones get the UPI app button first; on desktop (fine pointer) the QR moves to the top instead */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: req?.deep_link,
                                                onClick: tapped,
                                                "aria-disabled": !req,
                                                className: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["btn"])()} pointer-fine:hidden ${req ? "" : "pointer-events-none opacity-50"}`,
                                                children: "Open UPI app"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/pay-sheet.tsx",
                                                lineNumber: 163,
                                                columnNumber: 21
                                            }, this),
                                            upiRow,
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("figure", {
                                                className: "flex items-center gap-3 rounded-xl bg-muted/60 p-3 pointer-fine:order-first pointer-fine:flex-col pointer-fine:text-center",
                                                children: [
                                                    req ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        unoptimized: true,
                                                        src: req.payment_qr_data_uri,
                                                        alt: `UPI QR code to pay ${ctx.provider.upi_name}`,
                                                        width: 112,
                                                        height: 112,
                                                        className: "size-28 shrink-0 rounded-lg pointer-fine:size-44"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/pay-sheet.tsx",
                                                        lineNumber: 166,
                                                        columnNumber: 30
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "size-28 shrink-0 rounded-lg bg-muted pointer-fine:size-44"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/pay-sheet.tsx",
                                                        lineNumber: 166,
                                                        columnNumber: 222
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("figcaption", {
                                                        className: "text-sm text-muted-foreground",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "pointer-fine:hidden",
                                                                children: "Paying from another phone? Scan this with any UPI app."
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/pay-sheet.tsx",
                                                                lineNumber: 167,
                                                                columnNumber: 77
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "hidden pointer-fine:inline",
                                                                children: "Scan with any UPI app on your phone."
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/pay-sheet.tsx",
                                                                lineNumber: 167,
                                                                columnNumber: 176
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/pay-sheet.tsx",
                                                        lineNumber: 167,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/pay-sheet.tsx",
                                                lineNumber: 165,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                "aria-disabled": "true",
                                                className: "flex min-h-11 items-center gap-2 rounded-xl border border-dashed border-border px-3.5 text-sm text-muted-foreground",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconCreditCard$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconCreditCard$3e$__["IconCreditCard"], {
                                                        size: 16,
                                                        stroke: 2,
                                                        className: "shrink-0"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/pay-sheet.tsx",
                                                        lineNumber: 169,
                                                        columnNumber: 175
                                                    }, this),
                                                    "Card / net banking · coming soon"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/pay-sheet.tsx",
                                                lineNumber: 169,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/pay-sheet.tsx",
                                        lineNumber: 162,
                                        columnNumber: 19
                                    }, this),
                                    hint && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-3 text-sm text-muted-foreground",
                                        role: "status",
                                        children: hint
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/pay-sheet.tsx",
                                        lineNumber: 172,
                                        columnNumber: 26
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/pay-sheet.tsx",
                                lineNumber: 151,
                                columnNumber: 15
                            }, this) : step === "confirm" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    notice,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mb-4 text-sm text-muted-foreground",
                                        children: [
                                            "Add the screenshot from your UPI app so ",
                                            ctx.provider.name,
                                            " can confirm it faster."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/pay-sheet.tsx",
                                        lineNumber: 177,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm font-medium",
                                        children: "Screenshot"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/pay-sheet.tsx",
                                        lineNumber: 178,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "press mt-1.5 flex min-h-12 cursor-pointer items-center gap-2 rounded-xl border border-dashed border-border px-3.5 text-sm has-focus-visible:outline-2 has-focus-visible:outline-foreground",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconPhoto$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconPhoto$3e$__["IconPhoto"], {
                                                size: 18,
                                                stroke: 2,
                                                className: "shrink-0 text-muted-foreground"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/pay-sheet.tsx",
                                                lineNumber: 180,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "min-w-0 truncate",
                                                children: file ? file.name : "Add a screenshot"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/pay-sheet.tsx",
                                                lineNumber: 181,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "file",
                                                accept: TYPES,
                                                className: "sr-only",
                                                onChange: (e)=>pick(e.target.files?.[0] ?? null)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/pay-sheet.tsx",
                                                lineNumber: 182,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/pay-sheet.tsx",
                                        lineNumber: 179,
                                        columnNumber: 17
                                    }, this),
                                    file && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setFile(null),
                                        className: "mt-1 min-h-11 text-sm font-medium text-muted-foreground underline underline-offset-2",
                                        children: "Remove screenshot"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/pay-sheet.tsx",
                                        lineNumber: 184,
                                        columnNumber: 26
                                    }, this),
                                    err && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Alert, {
                                                children: err
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/pay-sheet.tsx",
                                                lineNumber: 185,
                                                columnNumber: 47
                                            }, this),
                                            err === SEND_FAIL && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WhatsApp, {
                                                p: place
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/pay-sheet.tsx",
                                                lineNumber: 185,
                                                columnNumber: 89
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/pay-sheet.tsx",
                                        lineNumber: 185,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/pay-sheet.tsx",
                                lineNumber: 175,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col items-center pb-2 pt-2 text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "grid size-14 place-items-center rounded-full bg-primary-soft text-primary-deep",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconClock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconClock$3e$__["IconClock"], {
                                            size: 28,
                                            stroke: 2
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/pay-sheet.tsx",
                                            lineNumber: 189,
                                            columnNumber: 114
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/pay-sheet.tsx",
                                        lineNumber: 189,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-3 text-3xl font-semibold tabular-nums",
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inr"])(due.amount)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/pay-sheet.tsx",
                                        lineNumber: 190,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-1 text-sm",
                                        children: [
                                            ctx.provider.name,
                                            " usually confirms within a day."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/pay-sheet.tsx",
                                        lineNumber: 191,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-1 text-sm text-muted-foreground",
                                        children: "You’ll see it as Checking in Payments until then."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/pay-sheet.tsx",
                                        lineNumber: 192,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/pay-sheet.tsx",
                                lineNumber: 188,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/pay-sheet.tsx",
                            lineNumber: 123,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                            className: "space-y-2 border-t border-border px-4 pt-3 pb-[max(1rem,env(safe-area-inset-bottom))]",
                            children: [
                                step === "review" && !ctx && err || settled ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: close,
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["btn"])("ghost"),
                                    children: "Close"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/pay-sheet.tsx",
                                    lineNumber: 199,
                                    columnNumber: 62
                                }, this) : null,
                                step === "review" && !(!ctx && err) && !settled && (rejected && due ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>{
                                                setVia("review");
                                                setStep("confirm");
                                            },
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["btn"])(),
                                            children: "Already paid? Send proof again"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/pay-sheet.tsx",
                                            lineNumber: 202,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: toUpi,
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["btn"])("ghost"),
                                            children: [
                                                "Pay ",
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inr"])(due.amount),
                                                " with UPI"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/pay-sheet.tsx",
                                            lineNumber: 203,
                                            columnNumber: 15
                                        }, this),
                                        rejected.reason_code === "amount_mismatch" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "pt-1 text-center text-xs text-muted-foreground",
                                            children: "If you already paid part of this, send proof instead of paying again."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/pay-sheet.tsx",
                                            lineNumber: 204,
                                            columnNumber: 62
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/pay-sheet.tsx",
                                    lineNumber: 200,
                                    columnNumber: 84
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    disabled: !due,
                                    onClick: toUpi,
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["btn"])(),
                                    children: due ? `Pay ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inr"])(due.amount)} with UPI` : "Pay with UPI"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/pay-sheet.tsx",
                                    lineNumber: 205,
                                    columnNumber: 19
                                }, this)),
                                step === "upi" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>{
                                                setErr("");
                                                setHint("");
                                                setVia("upi");
                                                setStep("confirm");
                                            },
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["btn"])("ghost"),
                                            children: "I’ve paid"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/pay-sheet.tsx",
                                            lineNumber: 207,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>{
                                                        setErr("");
                                                        setHint("");
                                                        setStep("review");
                                                    },
                                                    className: textBtn,
                                                    children: "Back"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/pay-sheet.tsx",
                                                    lineNumber: 208,
                                                    columnNumber: 66
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: close,
                                                    className: textBtn,
                                                    children: "Pay later"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/pay-sheet.tsx",
                                                    lineNumber: 208,
                                                    columnNumber: 185
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/pay-sheet.tsx",
                                            lineNumber: 208,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/pay-sheet.tsx",
                                    lineNumber: 206,
                                    columnNumber: 32
                                }, this),
                                step === "confirm" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            disabled: busy || !file,
                                            onClick: send,
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["btn"])(),
                                            children: busy ? "Sending…" : "Send for confirmation"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/pay-sheet.tsx",
                                            lineNumber: 211,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            disabled: busy,
                                            onClick: ()=>{
                                                setErr("");
                                                setStep(via);
                                            },
                                            className: textBtn,
                                            children: "Back"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/pay-sheet.tsx",
                                            lineNumber: 212,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/pay-sheet.tsx",
                                    lineNumber: 210,
                                    columnNumber: 36
                                }, this),
                                step === "done" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: close,
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["btn"])(),
                                    children: "Close"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/pay-sheet.tsx",
                                    lineNumber: 214,
                                    columnNumber: 33
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/pay-sheet.tsx",
                            lineNumber: 198,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/pay-sheet.tsx",
                    lineNumber: 114,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/pay-sheet.tsx",
                lineNumber: 113,
                columnNumber: 29
            }, this), document.body)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/pay-sheet.tsx",
        lineNumber: 111,
        columnNumber: 5
    }, this);
}
_s(PaySheet, "TR1ZBrKK294eVEdpZgG1hzHidaI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"]
    ];
});
_c2 = PaySheet;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "Alert");
__turbopack_context__.k.register(_c1, "WhatsApp");
__turbopack_context__.k.register(_c2, "PaySheet");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/scroll-row.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScrollRow",
    ()=>ScrollRow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function ScrollRow({ children, label }) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [edge, setEdge] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        l: false,
        r: false
    });
    const [breathe, setBreathe] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ScrollRow.useEffect": ()=>{
            const el = ref.current;
            if (!el) return;
            const update = {
                "ScrollRow.useEffect.update": ()=>setEdge({
                        l: el.scrollLeft > 4,
                        r: el.scrollLeft + el.clientWidth < el.scrollWidth - 4
                    })
            }["ScrollRow.useEffect.update"];
            const onScroll = {
                "ScrollRow.useEffect.onScroll": ()=>{
                    update();
                    setBreathe(false);
                }
            }["ScrollRow.useEffect.onScroll"];
            update();
            el.addEventListener("scroll", onScroll, {
                passive: true
            });
            const ro = new ResizeObserver(update);
            ro.observe(el);
            const overflow = el.scrollWidth > el.clientWidth;
            const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
            if (overflow && !reduce && !sessionStorage.getItem("chips-breathed")) {
                sessionStorage.setItem("chips-breathed", "1");
                setBreathe(true);
            }
            return ({
                "ScrollRow.useEffect": ()=>{
                    el.removeEventListener("scroll", onScroll);
                    ro.disconnect();
                }
            })["ScrollRow.useEffect"];
        }
    }["ScrollRow.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative -mx-4 mb-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                ref: ref,
                "aria-label": label,
                className: "flex overflow-x-auto px-4 py-0.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `flex gap-2 ${breathe ? "breathe" : ""}`,
                    onAnimationEnd: ()=>setBreathe(false),
                    children: children
                }, void 0, false, {
                    fileName: "[project]/src/components/scroll-row.tsx",
                    lineNumber: 25,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/scroll-row.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "aria-hidden": true,
                className: `pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-background to-transparent transition-opacity duration-200 ${edge.l ? "opacity-100" : "opacity-0"}`
            }, void 0, false, {
                fileName: "[project]/src/components/scroll-row.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "aria-hidden": true,
                className: `pointer-events-none absolute inset-y-0 right-0 w-14 bg-gradient-to-l from-background via-background/70 to-transparent transition-opacity duration-200 ${edge.r ? "opacity-100" : "opacity-0"}`
            }, void 0, false, {
                fileName: "[project]/src/components/scroll-row.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/scroll-row.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
_s(ScrollRow, "DhduKjgPYAOlegcMR/1+CEqY6T0=");
_c = ScrollRow;
var _c;
__turbopack_context__.k.register(_c, "ScrollRow");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/stepped.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Stepped",
    ()=>Stepped
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconChevronDown$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/@tabler/icons-react/dist/esm/icons/IconChevronDown.mjs [app-client] (ecmascript) <export default as IconChevronDown>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function Stepped({ items, groups, step = 10, word = "more", className = "" }) {
    _s();
    const [n, setN] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const left = items.length - n;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            n > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: className,
                children: items.slice(0, n).flatMap((it, i)=>groups && groups[i] !== groups[i - 1] ? [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            className: "pb-1 pt-4 text-sm font-medium text-muted-foreground first:pt-1",
                            children: groups[i]
                        }, `g${i}`, false, {
                            fileName: "[project]/src/components/stepped.tsx",
                            lineNumber: 14,
                            columnNumber: 12
                        }, this),
                        it
                    ] : [
                        it
                    ])
            }, void 0, false, {
                fileName: "[project]/src/components/stepped.tsx",
                lineNumber: 13,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: ()=>setN(left > 0 ? n + step : 0),
                className: "press flex min-h-11 w-full items-center justify-center gap-1 pt-2 text-sm font-medium text-muted-foreground",
                children: [
                    left > 0 ? left > step ? `Show ${step} of ${left} ${word}` : `Show ${left} ${word}` : "Show less",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconChevronDown$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconChevronDown$3e$__["IconChevronDown"], {
                        size: 16,
                        stroke: 2,
                        className: "transition-transform duration-200 [transition-timing-function:var(--ease-out)]",
                        style: {
                            transform: left > 0 ? "none" : "rotate(180deg)"
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/stepped.tsx",
                        lineNumber: 18,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/stepped.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/stepped.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
_s(Stepped, "Am0Fli1WBNLwo25CwvKoIntcbnA=");
_c = Stepped;
var _c;
__turbopack_context__.k.register(_c, "Stepped");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "Card",
    ()=>Card,
    "H1",
    ()=>H1,
    "Label",
    ()=>Label,
    "NotLinked",
    ()=>NotLinked,
    "Pill",
    ()=>Pill,
    "SUPPORT_WA",
    ()=>SUPPORT_WA,
    "breakdownRows",
    ()=>breakdownRows,
    "btn",
    ()=>btn,
    "day",
    ()=>day,
    "inr",
    ()=>inr,
    "local",
    ()=>local,
    "rejectedLine",
    ()=>rejectedLine,
    "relDay",
    ()=>relDay,
    "signed",
    ()=>signed,
    "time12",
    ()=>time12,
    "weekOf",
    ()=>weekOf
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
;
;
const Card = ({ children, className = "", accent = false })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: `rounded-2xl p-4 ${accent ? "bg-primary-soft text-brand ring-1 ring-primary/70" : "bg-card shadow-xs ring-1 ring-border"} ${className}`,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ui.tsx",
        lineNumber: 8,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c = Card;
const H1 = ({ children, eyebrow })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "mb-4 flex items-center justify-between gap-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-w-0",
                children: [
                    eyebrow && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-muted-foreground",
                        children: eyebrow
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui.tsx",
                        lineNumber: 14,
                        columnNumber: 19
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "line-clamp-2 text-2xl font-semibold leading-tight tracking-tight [overflow-wrap:anywhere]",
                        children: children
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui.tsx",
                        lineNumber: 15,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui.tsx",
                lineNumber: 13,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: "/mm-logo.svg",
                alt: "Mr. Manager",
                width: 162,
                height: 28,
                className: "h-5 w-auto shrink-0 [:root[data-theme=dark]_&]:hidden"
            }, void 0, false, {
                fileName: "[project]/src/components/ui.tsx",
                lineNumber: 17,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: "/mm-logo-dark.svg",
                alt: "Mr. Manager",
                width: 162,
                height: 28,
                className: "hidden h-5 w-auto shrink-0 [:root[data-theme=dark]_&]:block"
            }, void 0, false, {
                fileName: "[project]/src/components/ui.tsx",
                lineNumber: 18,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui.tsx",
        lineNumber: 12,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c1 = H1;
const Label = ({ children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        className: "text-xs font-medium uppercase tracking-wide text-muted-foreground",
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ui.tsx",
        lineNumber: 23,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c2 = Label;
const btn = (variant = "primary")=>`press block w-full min-h-12 rounded-xl px-4 py-3 text-center text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground disabled:opacity-50 ${variant === "primary" ? "bg-primary text-primary-foreground" : "border border-border bg-card"}`;
const Button = ({ href, children, variant = "primary" })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        href: href,
        className: btn(variant),
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ui.tsx",
        lineNumber: 32,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c3 = Button;
const breakdownRows = (k)=>{
    const items = k.addon_items ?? [];
    const addons = items.length === 0 ? k.addons ? [
        [
            "Add-ons",
            k.addons
        ]
    ] : [] : [
        ...items.length > 1 ? [
            [
                "Add-ons",
                k.addons ?? items.reduce((n, i)=>n + i.amount, 0)
            ]
        ] : [],
        ...items.map((i)=>[
                `${i.name}${i.qty > 1 ? ` × ${i.qty}` : ""}`,
                i.amount,
                items.length > 1
            ])
    ];
    return [
        [
            "Package fee",
            k.package
        ],
        ...addons,
        ...k.registration ? [
            [
                "Registration",
                k.registration
            ]
        ] : [],
        ...k.discount ? [
            [
                "Discount",
                -k.discount
            ]
        ] : [],
        ...k.gst ? [
            [
                "GST",
                k.gst
            ]
        ] : []
    ];
};
const rejectedLine = (provider, code = "other")=>({
        not_received: `${provider} hasn’t received this payment yet`,
        unclear_proof: "The screenshot wasn’t clear enough to confirm",
        amount_mismatch: "The amount received doesn’t match this bill",
        other: `${provider} couldn’t confirm your payment`
    })[code];
const signed = (v)=>v < 0 ? `− ${inr(-v)}` : inr(v);
const Pill = ({ tone, children })=>{
    const cls = {
        ok: "bg-success/15 text-success",
        bad: "bg-destructive/15 text-destructive",
        warn: "bg-primary/25 text-primary-deep",
        muted: "bg-muted text-muted-foreground",
        info: "bg-brand/10 text-brand"
    }[tone];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: `inline-flex h-7 items-center whitespace-nowrap rounded-full px-2.5 text-xs font-medium ${cls}`,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ui.tsx",
        lineNumber: 56,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
_c4 = Pill;
const inr = (n)=>new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 0
    }).format(n);
const local = (iso)=>new Date(iso.length === 10 ? iso + "T00:00:00" : iso);
const YEAR = new Date().getFullYear(); // ponytail: read once at load, a server left running over New Year's Eve shows the year on both years' dates until it restarts
const day = (iso)=>local(iso).toLocaleDateString("en-IN", {
        weekday: "short",
        day: "numeric",
        month: "short",
        ...+iso.slice(0, 4) !== YEAR && {
            year: "numeric"
        }
    });
const time12 = (hhmm)=>{
    const [h, m] = hhmm.split(":").map(Number);
    return `${(h + 11) % 12 + 1}:${String(m).padStart(2, "0")} ${h < 12 ? "AM" : "PM"}`;
};
const weekOf = (today)=>{
    const t = local(today);
    const mon = new Date(t);
    mon.setDate(t.getDate() - (t.getDay() + 6) % 7);
    const pad = (n)=>String(n).padStart(2, "0");
    return Array.from({
        length: 7
    }, (_, i)=>{
        const d = new Date(mon);
        d.setDate(mon.getDate() + i);
        return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
    });
};
const relDay = (iso, today)=>{
    const n = Math.round((+local(iso) - +local(today)) / 864e5);
    return n === 0 ? "Today" : n === 1 ? "Tomorrow" : n > 1 && n < 7 ? `In ${n} days` : day(iso);
};
const SUPPORT_WA = "https://wa.me/919920099776"; // Mr. Manager support, same number as mrmanager.app/contact-us
const NotLinked = ({ phone, path })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-lg font-semibold",
                children: "No sessions on this number yet"
            }, void 0, false, {
                fileName: "[project]/src/components/ui.tsx",
                lineNumber: 78,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-1 text-sm text-muted-foreground",
                children: [
                    "We couldn’t find an enrolment for ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "whitespace-nowrap font-medium text-foreground",
                        children: phone
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui.tsx",
                        lineNumber: 80,
                        columnNumber: 41
                    }, ("TURBOPACK compile-time value", void 0)),
                    ". Tutors add students with a parent’s phone number, so ask your tutor which number they used."
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui.tsx",
                lineNumber: 79,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: path,
                        className: btn(),
                        children: "Check again"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui.tsx",
                        lineNumber: 83,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                        href: "/login",
                        variant: "ghost",
                        children: "Sign in with a different number"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui.tsx",
                        lineNumber: 84,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui.tsx",
                lineNumber: 82,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-3 text-center text-sm text-muted-foreground",
                children: [
                    "Still stuck? ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: SUPPORT_WA,
                        target: "_blank",
                        rel: "noreferrer",
                        className: "font-medium text-foreground underline underline-offset-2",
                        children: "WhatsApp Mr. Manager support"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui.tsx",
                        lineNumber: 86,
                        columnNumber: 80
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui.tsx",
                lineNumber: 86,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui.tsx",
        lineNumber: 77,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c5 = NotLinked;
var _c, _c1, _c2, _c3, _c4, _c5;
__turbopack_context__.k.register(_c, "Card");
__turbopack_context__.k.register(_c1, "H1");
__turbopack_context__.k.register(_c2, "Label");
__turbopack_context__.k.register(_c3, "Button");
__turbopack_context__.k.register(_c4, "Pill");
__turbopack_context__.k.register(_c5, "NotLinked");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/week-days.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WeekDays",
    ()=>WeekDays
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconX$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconX$3e$__ = __turbopack_context__.i("[project]/node_modules/@tabler/icons-react/dist/esm/icons/IconX.mjs [app-client] (ecmascript) <export default as IconX>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function WeekDays({ days }) {
    _s();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const sel = days.find((d)=>d.iso === open);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mb-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                className: "grid grid-cols-7",
                "aria-label": "This week",
                children: days.map((d)=>{
                    const on = d.iso === open;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        "aria-current": d.isToday ? "date" : undefined,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            "aria-label": d.said,
                            "aria-expanded": on,
                            "aria-controls": "week-day-panel",
                            onClick: ()=>setOpen(on ? null : d.iso),
                            className: "press flex w-full flex-col items-center gap-1.5 rounded-xl py-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    "aria-hidden": true,
                                    className: `text-[11px] font-medium uppercase ${on ? "text-foreground" : "text-muted-foreground"}`,
                                    children: d.letter
                                }, void 0, false, {
                                    fileName: "[project]/src/components/week-days.tsx",
                                    lineNumber: 22,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    "aria-hidden": true,
                                    className: `grid h-9 w-9 place-items-center rounded-full text-sm font-semibold transition-shadow duration-150 ${d.isToday ? "bg-foreground text-background" : ""} ${on ? "ring-2 ring-foreground ring-offset-2 ring-offset-background" : ""}`,
                                    children: d.num
                                }, void 0, false, {
                                    fileName: "[project]/src/components/week-days.tsx",
                                    lineNumber: 23,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "flex h-3 items-center gap-1",
                                    "aria-hidden": true,
                                    children: d.marks
                                }, void 0, false, {
                                    fileName: "[project]/src/components/week-days.tsx",
                                    lineNumber: 24,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/week-days.tsx",
                            lineNumber: 20,
                            columnNumber: 15
                        }, this)
                    }, d.iso, false, {
                        fileName: "[project]/src/components/week-days.tsx",
                        lineNumber: 18,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/components/week-days.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            sel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "stagger mt-3",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    id: "week-day-panel",
                    "aria-label": sel.title,
                    className: "rounded-2xl bg-card px-4 pb-3 pt-1 shadow-xs ring-1 ring-border",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm font-semibold",
                                    children: [
                                        sel.title,
                                        sel.rel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-normal text-muted-foreground",
                                            children: [
                                                " · ",
                                                sel.rel
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/week-days.tsx",
                                            lineNumber: 34,
                                            columnNumber: 75
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/week-days.tsx",
                                    lineNumber: 34,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    "aria-label": "Close",
                                    onClick: ()=>setOpen(null),
                                    className: "press -mr-3 grid h-11 w-11 place-items-center text-muted-foreground",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconX$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconX$3e$__["IconX"], {
                                        size: 16,
                                        stroke: 2
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/week-days.tsx",
                                        lineNumber: 35,
                                        columnNumber: 166
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/week-days.tsx",
                                    lineNumber: 35,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/week-days.tsx",
                            lineNumber: 33,
                            columnNumber: 13
                        }, this),
                        sel.panel
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/week-days.tsx",
                    lineNumber: 32,
                    columnNumber: 11
                }, this)
            }, sel.iso, false, {
                fileName: "[project]/src/components/week-days.tsx",
                lineNumber: 31,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/week-days.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_s(WeekDays, "3gHT60S3lHEhyYybFcB05ha95j4=");
_c = WeekDays;
var _c;
__turbopack_context__.k.register(_c, "WeekDays");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/data:513531 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mockContext",
    ()=>$$RSC_SERVER_ACTION_0
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"407b66ecfe828b5f0ad9075793962de443b933756b":{"name":"mockContext"}},"src/lib/pay-mock.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("407b66ecfe828b5f0ad9075793962de443b933756b", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "mockContext");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/pay.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// In-app payment client for bills (bill.pay_token) and renewals (cycle.renewal_token). Mirrors the public pay-page API in
// mr-manager-backend app/modules/common/public_payment, which is token-authenticated, so no parent login is involved.
// NEXT_PUBLIC_API_URL set: the browser calls `${API}/api/v1/public/payment/{token}/...` (as the pay page does) and the
// adapter below turns PublicContextResponse into PayContext. Unset: the mock in pay-mock.ts, unchanged.
__turbopack_context__.s([
    "adapt",
    ()=>adapt,
    "claimAlreadyPaid",
    ()=>claimAlreadyPaid,
    "getContext",
    ()=>getContext,
    "initiate",
    ()=>initiate,
    "submitProof",
    ()=>submitProof
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$3a$513531__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/lib/data:513531 [app-client] (ecmascript) <text/javascript>");
;
;
const API = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_API_URL;
const n = (v)=>Number(v ?? 0) || 0;
const breakdown = (q)=>q ? {
        package: n(q.package_charge),
        discount: n(q.discount_amount),
        addons: n(q.addons_total),
        registration: n(q.registration_fee_total),
        gst: n(q.gst_total)
    } : undefined;
const CODES = {
    WRONG_AMOUNT: "amount_mismatch",
    PAYMENT_NOT_RECEIVED: "not_received",
    SCREENSHOT_UNCLEAR: "unclear_proof"
};
async function call(token, path = "", init) {
    const r = await fetch(`${API}/api/v1/public/payment/${encodeURIComponent(token)}${path}`, {
        credentials: "omit",
        ...init
    });
    // 401 is the backend's "Invalid or expired payment link"; the sheet shows a sentence with "expired" as is, plus WhatsApp
    if (r.status === 401) throw new Error("This payment link has expired. Ask the institute for a new one.");
    if (!r.ok) throw new Error(`payment ${r.status}`);
    return r.json();
}
const post = (token, path, body)=>call(token, path, {
        method: "POST",
        ...body instanceof FormData ? {
            body
        } : {
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "application/json"
            }
        }
    });
function adapt(w) {
    const name = w.provider.brand_name || w.provider.business_name || "Your institute", upi = w.payment_options.upi;
    const label = w.current_cycle?.package_name || w.batch_details?.name || "Fees";
    const code = CODES[w.rejection_notice?.reason ?? ""] ?? "other";
    const base = {
        token_type: w.token_type,
        provider: {
            name,
            phone: w.provider.contact?.phone ?? "",
            upi_id: upi.upi_id ?? "",
            upi_name: upi.upi_name || name
        },
        payment_options: {
            upi: {
                enabled: upi.enabled
            },
            razorpay: {
                enabled: false
            }
        },
        ...w.rejection_notice && {
            rejection_notice: {
                reason_code: code,
                reason_label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rejectedLine"])(name, code),
                note: w.rejection_notice.note ?? undefined
            }
        }
    };
    if (w.renewal) {
        const r = w.renewal, q = r.current_quote;
        return {
            ...base,
            renewal: {
                label: r.packages?.find((p)=>p.id === r.selected_package_id)?.package_name ?? label,
                batch: r.batch_name ?? "",
                amount: upi.payable_amount != null ? n(upi.payable_amount) : n(q?.total),
                breakdown: breakdown(q),
                cycle_dates: {
                    start_date: r.renewal_window?.start_date ?? "",
                    end_date: ""
                }
            }
        }; // renewal_window is the allowed start range, the new cycle's end is not in the context
    }
    const b = w.bill, total = n(b.bill_amount), paid = n(b.meta?.amount_paid);
    return {
        ...base,
        bill: {
            label,
            bill_amount: total,
            ...paid > 0 && {
                amount_paid: paid
            },
            amount: upi.payable_amount != null ? n(upi.payable_amount) : Math.max(0, total - paid),
            due_date: b.due_date ?? "",
            overdue: b.bill_status === "OVERDUE",
            breakdown: breakdown(b.meta)
        }
    };
}
const getContext = (token)=>API ? call(token).then(adapt) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$3a$513531__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["mockContext"])(token);
async function initiate(token) {
    if (API) {
        const r = await post(token, "/initiate", {
            method: "UPI"
        });
        // the initiate response may carry no deep link (seen on the local backend), the context does, and failing both we build the NPCI link ourselves
        let deep = r.deep_link ?? "";
        if (!deep) {
            const c = await call(token);
            const upi = c.payment_options.upi, pa = r.upi_id ?? upi.upi_id ?? "", am = n(r.amount ?? upi.payable_amount);
            deep = upi.deep_link ?? (pa ? `upi://pay?pa=${pa}&pn=${encodeURIComponent(r.upi_name ?? upi.upi_name ?? c.provider.brand_name ?? "")}&am=${am.toFixed(2)}&cu=INR` : "");
        }
        return {
            request_id: r.request_id,
            upi_id: r.upi_id ?? "",
            upi_name: r.upi_name ?? undefined,
            deep_link: deep,
            payment_qr_data_uri: r.payment_qr_data_uri ?? ""
        };
    }
    if (token.startsWith("noupi-")) throw new Error("UPI not set up"); // review hook (C40)
    const c = await getContext(token);
    const p = c.provider, due = c.bill ?? c.renewal;
    const ref = `MM${token.replace(/\W/g, "").slice(-8).toUpperCase()}`;
    // NPCI UPI linking spec: pa payee VPA, pn payee name, am amount (2 decimals), cu INR, tn note, tr reference
    const q = [
        [
            "pn",
            p.upi_name
        ],
        [
            "am",
            due.amount.toFixed(2)
        ],
        [
            "cu",
            "INR"
        ],
        [
            "tn",
            due.label.slice(0, 50)
        ],
        [
            "tr",
            ref
        ]
    ].map(([k, v])=>`${k}=${encodeURIComponent(v)}`).join("&");
    return {
        request_id: `req_${token}`,
        upi_id: p.upi_id,
        deep_link: `upi://pay?pa=${p.upi_id}&${q}`,
        payment_qr_data_uri: SAMPLE_QR
    };
}
async function submitProof(token, request_id, file) {
    if (API) {
        const fd = new FormData();
        fd.append("file", file);
        await post(token, `/proof?request_id=${encodeURIComponent(request_id)}`, fd);
        return;
    }
    if (request_id.includes("noproof-")) throw new Error("upload failed"); // review hook (C40)
    sent(token);
}
async function claimAlreadyPaid(token, file) {
    if (API) {
        const fd = new FormData();
        fd.append("method", "UPI");
        fd.append("payment_date", new Date().toLocaleDateString("en-CA", {
            timeZone: "Asia/Kolkata"
        })); // YYYY-MM-DD, today in IST
        fd.append("screenshot", file);
        await post(token, "/claim-already-paid", fd);
        return;
    }
    if (token.includes("noproof-")) throw new Error("upload failed"); // review hook (C40)
    sent(token);
}
// Mock state: tokens sent for confirmation live in the mm_paid cookie, which getMe() turns into PENDING_REVIEW claims. /case/<code> clears it.
const sent = (token)=>{
    const now = document.cookie.match(/(?:^|; )mm_paid=([^;]*)/)?.[1].split(",").filter(Boolean) ?? [];
    document.cookie = `mm_paid=${[
        ...new Set([
            ...now,
            token
        ])
    ].join(",")}; Path=/; SameSite=Lax`;
};
// Placeholder QR (finder squares plus fixed noise), clearly labelled as a sample. The real one is payment_qr_data_uri from /initiate.
const SAMPLE_QR = (()=>{
    const n = 25, cells = [];
    const finder = (x, y)=>`<path d="M${x} ${y}h7v7h-7z M${x + 1} ${y + 1}v5h5v-5z" fill-rule="evenodd"/><path d="M${x + 2} ${y + 2}h3v3h-3z"/>`;
    for(let y = 0; y < n; y++)for(let x = 0; x < n; x++){
        const inFinder = x < 8 && y < 8 || x > n - 9 && y < 8 || x < 8 && y > n - 9;
        if (!inFinder && (x * 7 + y * 13 + x * y) % 5 < 2) cells.push(`M${x} ${y}h1v1h-1z`);
    }
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 ${n + 4} ${n + 4}" shape-rendering="crispEdges"><rect x="-2" y="-2" width="${n + 4}" height="${n + 4}" fill="#fff"/><g fill="#111">${finder(0, 0)}${finder(n - 7, 0)}${finder(0, n - 7)}<path d="${cells.join("")}"/></g></svg>`;
    return `data:image/svg+xml,${encodeURIComponent(svg)}`;
})();
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_1rgya8y._.js.map