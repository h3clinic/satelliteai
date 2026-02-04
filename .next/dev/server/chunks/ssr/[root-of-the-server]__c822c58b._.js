module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/src/components/KPICard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>KPICard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function KPICard({ label, value, icon, color = 'default' }) {
    const colorClasses = {
        default: 'text-white',
        green: 'text-crop-green',
        orange: 'text-stress-orange',
        red: 'text-stress-red'
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white/5 rounded-xl p-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2 text-gray-400 mb-1",
                children: [
                    icon,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[10px] uppercase tracking-wider",
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/src/components/KPICard.tsx",
                        lineNumber: 22,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/KPICard.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: `text-lg font-bold ${colorClasses[color]}`,
                children: value
            }, void 0, false, {
                fileName: "[project]/src/components/KPICard.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/KPICard.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/TimelineScrubber.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TimelineScrubber
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/play.js [app-ssr] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pause.js [app-ssr] (ecmascript) <export default as Pause>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-ssr] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript) <export default as ChevronRight>");
'use client';
;
;
;
function TimelineScrubber({ value, onChange, weeks }) {
    const [isPlaying, setIsPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Generate week labels
    const weekLabels = Array.from({
        length: weeks
    }, (_, i)=>{
        const date = new Date();
        date.setDate(date.getDate() - (weeks - 1 - i) * 7);
        return date.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric'
        });
    });
    const handlePlayPause = ()=>{
        setIsPlaying(!isPlaying);
    // In production, this would animate through weeks
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "glass-panel rounded-xl p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>onChange(Math.max(0, value - 1)),
                            className: "p-1.5 hover:bg-white/10 rounded-lg transition",
                            disabled: value === 0,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/TimelineScrubber.tsx",
                                lineNumber: 37,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/TimelineScrubber.tsx",
                            lineNumber: 32,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handlePlayPause,
                            className: "p-2 bg-crop-green/20 hover:bg-crop-green/30 rounded-lg transition",
                            children: isPlaying ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__["Pause"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/TimelineScrubber.tsx",
                                lineNumber: 43,
                                columnNumber: 26
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/TimelineScrubber.tsx",
                                lineNumber: 43,
                                columnNumber: 58
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/TimelineScrubber.tsx",
                            lineNumber: 39,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>onChange(Math.min(weeks - 1, value + 1)),
                            className: "p-1.5 hover:bg-white/10 rounded-lg transition",
                            disabled: value === weeks - 1,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/TimelineScrubber.tsx",
                                lineNumber: 50,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/TimelineScrubber.tsx",
                            lineNumber: 45,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/TimelineScrubber.tsx",
                    lineNumber: 31,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-2 bg-white/10 rounded-full",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-full bg-gradient-to-r from-crop-green to-crop-green-dark rounded-full transition-all duration-200",
                                        style: {
                                            width: `${(value + 1) / weeks * 100}%`
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/TimelineScrubber.tsx",
                                        lineNumber: 60,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/TimelineScrubber.tsx",
                                    lineNumber: 58,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute top-0 left-0 right-0 h-2 flex justify-between",
                                    children: Array.from({
                                        length: weeks
                                    }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>onChange(i),
                                            className: `w-2 h-2 rounded-full transition-all ${i <= value ? 'bg-crop-green scale-100' : 'bg-white/20 scale-75 hover:scale-100'} ${i === value ? 'ring-2 ring-crop-green ring-offset-2 ring-offset-[#0a0a0a]' : ''}`
                                        }, i, false, {
                                            fileName: "[project]/src/components/TimelineScrubber.tsx",
                                            lineNumber: 69,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/TimelineScrubber.tsx",
                                    lineNumber: 67,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/TimelineScrubber.tsx",
                            lineNumber: 56,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between mt-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[10px] text-gray-500",
                                    children: weekLabels[0]
                                }, void 0, false, {
                                    fileName: "[project]/src/components/TimelineScrubber.tsx",
                                    lineNumber: 84,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs font-medium text-crop-green",
                                    children: weekLabels[value]
                                }, void 0, false, {
                                    fileName: "[project]/src/components/TimelineScrubber.tsx",
                                    lineNumber: 85,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[10px] text-gray-500",
                                    children: weekLabels[weeks - 1]
                                }, void 0, false, {
                                    fileName: "[project]/src/components/TimelineScrubber.tsx",
                                    lineNumber: 86,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/TimelineScrubber.tsx",
                            lineNumber: 83,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/TimelineScrubber.tsx",
                    lineNumber: 55,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-right min-w-[80px]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-gray-400",
                            children: "Week"
                        }, void 0, false, {
                            fileName: "[project]/src/components/TimelineScrubber.tsx",
                            lineNumber: 92,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-lg font-bold",
                            children: value - weeks + 1 === 0 ? 'Current' : `${value - weeks + 1}`
                        }, void 0, false, {
                            fileName: "[project]/src/components/TimelineScrubber.tsx",
                            lineNumber: 93,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/TimelineScrubber.tsx",
                    lineNumber: 91,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/TimelineScrubber.tsx",
            lineNumber: 29,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/TimelineScrubber.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/TopRiskTable.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TopRiskTable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-ssr] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-down.js [app-ssr] (ecmascript) <export default as TrendingDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/minus.js [app-ssr] (ecmascript) <export default as Minus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
;
;
;
function getRiskColor(risk) {
    if (risk >= 70) return 'text-stress-red';
    if (risk >= 50) return 'text-stress-orange';
    if (risk >= 30) return 'text-stress-yellow';
    return 'text-crop-green';
}
function getRiskBg(risk) {
    if (risk >= 70) return 'bg-stress-red/20';
    if (risk >= 50) return 'bg-stress-orange/20';
    if (risk >= 30) return 'bg-stress-yellow/20';
    return 'bg-crop-green/20';
}
function TopRiskTable({ regions }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-2",
        children: regions.map((region)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                href: `/region/${region.country.toLowerCase()}-${region.region.toLowerCase().replace(' ', '-')}`,
                className: "flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition group",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${getRiskBg(region.riskScore)} ${getRiskColor(region.riskScore)}`,
                        children: region.rank
                    }, void 0, false, {
                        fileName: "[project]/src/components/TopRiskTable.tsx",
                        lineNumber: 42,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 min-w-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm font-medium truncate",
                                        children: region.region
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/TopRiskTable.tsx",
                                        lineNumber: 49,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] text-gray-500",
                                        children: region.country
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/TopRiskTable.tsx",
                                        lineNumber: 50,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/TopRiskTable.tsx",
                                lineNumber: 48,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 text-[10px] text-gray-400",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: region.crop
                                }, void 0, false, {
                                    fileName: "[project]/src/components/TopRiskTable.tsx",
                                    lineNumber: 53,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/TopRiskTable.tsx",
                                lineNumber: 52,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/TopRiskTable.tsx",
                        lineNumber: 47,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-right",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `text-sm font-bold ${getRiskColor(region.riskScore)}`,
                                children: region.riskScore
                            }, void 0, false, {
                                fileName: "[project]/src/components/TopRiskTable.tsx",
                                lineNumber: 59,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `flex items-center justify-end gap-0.5 text-[10px] ${region.trend === 'up' ? 'text-stress-red' : region.trend === 'down' ? 'text-crop-green' : 'text-gray-500'}`,
                                children: [
                                    region.trend === 'up' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                        className: "w-3 h-3"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/TopRiskTable.tsx",
                                        lineNumber: 66,
                                        columnNumber: 41
                                    }, this),
                                    region.trend === 'down' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingDown$3e$__["TrendingDown"], {
                                        className: "w-3 h-3"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/TopRiskTable.tsx",
                                        lineNumber: 67,
                                        columnNumber: 43
                                    }, this),
                                    region.trend === 'stable' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__["Minus"], {
                                        className: "w-3 h-3"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/TopRiskTable.tsx",
                                        lineNumber: 68,
                                        columnNumber: 45
                                    }, this),
                                    region.change > 0 ? '+' : '',
                                    region.change
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/TopRiskTable.tsx",
                                lineNumber: 62,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/TopRiskTable.tsx",
                        lineNumber: 58,
                        columnNumber: 11
                    }, this)
                ]
            }, region.rank, true, {
                fileName: "[project]/src/components/TopRiskTable.tsx",
                lineNumber: 36,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/TopRiskTable.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/CropSelector.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CropSelector
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-ssr] (ecmascript) <export default as AlertCircle>");
'use client';
;
;
;
const crops = [
    {
        id: 'corn',
        name: 'Corn',
        coverage: 'global',
        confidence: 'high',
        icon: '🌽'
    },
    {
        id: 'wheat',
        name: 'Wheat',
        coverage: 'global',
        confidence: 'high',
        icon: '🌾'
    },
    {
        id: 'rice',
        name: 'Rice',
        coverage: 'global',
        confidence: 'high',
        icon: '🍚'
    },
    {
        id: 'soy',
        name: 'Soybean',
        coverage: 'global',
        confidence: 'high',
        icon: '🫘'
    },
    {
        id: 'cotton',
        name: 'Cotton',
        coverage: 'global',
        confidence: 'medium',
        icon: '☁️'
    },
    {
        id: 'divider',
        name: '---',
        coverage: '',
        confidence: '',
        icon: ''
    },
    {
        id: 'mango',
        name: 'Mango',
        coverage: 'partial',
        confidence: 'low',
        icon: '🥭'
    },
    {
        id: 'cherry',
        name: 'Cherries',
        coverage: 'partial',
        confidence: 'low',
        icon: '🍒'
    },
    {
        id: 'citrus',
        name: 'Citrus',
        coverage: 'partial',
        confidence: 'medium',
        icon: '🍊'
    },
    {
        id: 'coffee',
        name: 'Coffee',
        coverage: 'partial',
        confidence: 'medium',
        icon: '☕'
    },
    {
        id: 'grapes',
        name: 'Grapes',
        coverage: 'partial',
        confidence: 'medium',
        icon: '🍇'
    }
];
const coverageBadge = {
    global: {
        label: 'Global',
        color: 'bg-crop-green/20 text-crop-green'
    },
    partial: {
        label: 'Partial',
        color: 'bg-stress-yellow/20 text-stress-yellow'
    }
};
const confidenceBadge = {
    high: {
        label: 'High conf.',
        color: 'text-crop-green'
    },
    medium: {
        label: 'Med conf.',
        color: 'text-stress-yellow'
    },
    low: {
        label: 'Low conf.',
        color: 'text-stress-orange'
    }
};
function CropSelector({ selected, onSelect }) {
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleClickOutside = (event)=>{
            if (ref.current && !ref.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return ()=>document.removeEventListener('mousedown', handleClickOutside);
    }, []);
    const selectedCrop = crops.find((c)=>c.id === selected);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative",
        ref: ref,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setIsOpen(!isOpen),
                className: "flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm hover:bg-white/10 transition",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: selectedCrop?.icon || '🌾'
                    }, void 0, false, {
                        fileName: "[project]/src/components/CropSelector.tsx",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: selectedCrop?.name || 'Wheat'
                    }, void 0, false, {
                        fileName: "[project]/src/components/CropSelector.tsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                        className: `w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`
                    }, void 0, false, {
                        fileName: "[project]/src/components/CropSelector.tsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/CropSelector.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this),
            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-full mt-2 left-0 w-64 glass-panel rounded-xl overflow-hidden z-50",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-h-64 overflow-y-auto",
                        children: crops.map((crop)=>{
                            if (crop.id === 'divider') {
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "border-t border-white/10 my-1"
                                }, crop.id, false, {
                                    fileName: "[project]/src/components/CropSelector.tsx",
                                    lineNumber: 69,
                                    columnNumber: 24
                                }, this);
                            }
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    onSelect(crop.id);
                                    setIsOpen(false);
                                },
                                className: "w-full flex items-center gap-3 px-4 py-2.5 hover:bg-white/5 transition",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-lg",
                                        children: crop.icon
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CropSelector.tsx",
                                        lineNumber: 78,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 text-left",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm",
                                                        children: crop.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CropSelector.tsx",
                                                        lineNumber: 81,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `text-[10px] px-1.5 py-0.5 rounded-full ${coverageBadge[crop.coverage]?.color}`,
                                                        children: coverageBadge[crop.coverage]?.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CropSelector.tsx",
                                                        lineNumber: 82,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/CropSelector.tsx",
                                                lineNumber: 80,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `text-[10px] ${confidenceBadge[crop.confidence]?.color}`,
                                                children: confidenceBadge[crop.confidence]?.label
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CropSelector.tsx",
                                                lineNumber: 86,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CropSelector.tsx",
                                        lineNumber: 79,
                                        columnNumber: 19
                                    }, this),
                                    selected === crop.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                        className: "w-4 h-4 text-crop-green"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CropSelector.tsx",
                                        lineNumber: 90,
                                        columnNumber: 44
                                    }, this)
                                ]
                            }, crop.id, true, {
                                fileName: "[project]/src/components/CropSelector.tsx",
                                lineNumber: 73,
                                columnNumber: 17
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/components/CropSelector.tsx",
                        lineNumber: 66,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-t border-white/10 p-3 bg-stress-yellow/5",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-start gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                    className: "w-4 h-4 text-stress-yellow flex-shrink-0 mt-0.5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CropSelector.tsx",
                                    lineNumber: 99,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[10px] text-gray-400",
                                    children: "Specialty crops have limited coverage. Boundaries may be inferred from probability models."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CropSelector.tsx",
                                    lineNumber: 100,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/CropSelector.tsx",
                            lineNumber: 98,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/CropSelector.tsx",
                        lineNumber: 97,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/CropSelector.tsx",
                lineNumber: 64,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/CropSelector.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/lib/globalPredictions.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// =============================================================================
// AGRISENTINEL - REAL ML PREDICTIONS FROM SATELLITE DATA
// =============================================================================
// 
// Generated: 2026-02-03T15:51:52.236088
// Source: Sentinel-2 L2A (Microsoft Planetary Computer)
// Model: XGBoost trained on NDVI time series
// Countries: 83
// Regions: 718
// 
// ALL DATA IS FROM REAL SATELLITE IMAGERY - NO SIMULATED VALUES
// =============================================================================
__turbopack_context__.s([
    "countrySummary",
    ()=>countrySummary,
    "globalPredictions",
    ()=>globalPredictions,
    "globalStats",
    ()=>globalStats,
    "topRiskRegions",
    ()=>topRiskRegions
]);
const globalStats = {
    totalRegions: 718,
    highRiskRegions: 216,
    highRiskPercent: 30.1,
    countries: 83,
    avgConfidence: 88.4,
    lastUpdate: '2026-02-03 15:51'
};
const globalPredictions = [
    {
        id: 'bra-5108006-soy',
        name: '5108006 Soy',
        crop: 'Soy',
        location: {
            lat: -55.8000,
            lng: -13.7000,
            country: 'BRA',
            countryName: 'Brazil',
            region: '5108006'
        },
        risk: 0.0,
        confidence: 79,
        ndviMean: 0.482,
        dataSource: 'model'
    },
    {
        id: 'bra-4104808-soy',
        name: '4104808 Soy',
        crop: 'Soy',
        location: {
            lat: -53.2000,
            lng: -24.8000,
            country: 'BRA',
            countryName: 'Brazil',
            region: '4104808'
        },
        risk: 0.0,
        confidence: 88,
        ndviMean: 0.448,
        dataSource: 'model'
    },
    {
        id: 'bra-4100103-soy',
        name: '4100103 Soy',
        crop: 'Soy',
        location: {
            lat: -50.6000,
            lng: -23.3000,
            country: 'BRA',
            countryName: 'Brazil',
            region: '4100103'
        },
        risk: 0.0,
        confidence: 88,
        ndviMean: 0.315,
        dataSource: 'model'
    },
    {
        id: 'bra-4127700-soy',
        name: '4127700 Soy',
        crop: 'Soy',
        location: {
            lat: -52.4000,
            lng: -24.0000,
            country: 'BRA',
            countryName: 'Brazil',
            region: '4127700'
        },
        risk: 0.0,
        confidence: 88,
        ndviMean: 0.522,
        dataSource: 'model'
    },
    {
        id: 'bra-4128203-soy',
        name: '4128203 Soy',
        crop: 'Soy',
        location: {
            lat: -50.4000,
            lng: -24.7000,
            country: 'BRA',
            countryName: 'Brazil',
            region: '4128203'
        },
        risk: 0.0,
        confidence: 85,
        ndviMean: 0.516,
        dataSource: 'model'
    },
    {
        id: 'bra-4307104-soy',
        name: '4307104 Soy',
        crop: 'Soy',
        location: {
            lat: -55.0000,
            lng: -28.1000,
            country: 'BRA',
            countryName: 'Brazil',
            region: '4307104'
        },
        risk: 0.0,
        confidence: 79,
        ndviMean: 0.43,
        dataSource: 'model'
    },
    {
        id: 'bra-4311403-soy',
        name: '4311403 Soy',
        crop: 'Soy',
        location: {
            lat: -51.1000,
            lng: -28.0000,
            country: 'BRA',
            countryName: 'Brazil',
            region: '4311403'
        },
        risk: 0.0,
        confidence: 82,
        ndviMean: 0.425,
        dataSource: 'model'
    },
    {
        id: 'bra-4305108-soy',
        name: '4305108 Soy',
        crop: 'Soy',
        location: {
            lat: -53.0000,
            lng: -28.3000,
            country: 'BRA',
            countryName: 'Brazil',
            region: '4305108'
        },
        risk: 0.0,
        confidence: 85,
        ndviMean: 0.481,
        dataSource: 'model'
    },
    {
        id: 'bra-4314407-soy',
        name: '4314407 Soy',
        crop: 'Soy',
        location: {
            lat: -54.4000,
            lng: -28.5000,
            country: 'BRA',
            countryName: 'Brazil',
            region: '4314407'
        },
        risk: 0.0,
        confidence: 88,
        ndviMean: 0.446,
        dataSource: 'model'
    },
    {
        id: 'bra-5104526-corn',
        name: '5104526 Corn',
        crop: 'Corn',
        location: {
            lat: -54.0000,
            lng: -13.5000,
            country: 'BRA',
            countryName: 'Brazil',
            region: '5104526'
        },
        risk: 0.0,
        confidence: 88,
        ndviMean: 0.347,
        dataSource: 'model'
    },
    {
        id: 'bra-5106224-corn',
        name: '5106224 Corn',
        crop: 'Corn',
        location: {
            lat: -55.5000,
            lng: -11.9000,
            country: 'BRA',
            countryName: 'Brazil',
            region: '5106224'
        },
        risk: 0.0,
        confidence: 88,
        ndviMean: 0.211,
        dataSource: 'model'
    },
    {
        id: 'bra-5107909-corn',
        name: '5107909 Corn',
        crop: 'Corn',
        location: {
            lat: -56.1000,
            lng: -13.5000,
            country: 'BRA',
            countryName: 'Brazil',
            region: '5107909'
        },
        risk: 0.0,
        confidence: 85,
        ndviMean: 0.247,
        dataSource: 'model'
    },
    {
        id: 'bra-5106257-corn',
        name: '5106257 Corn',
        crop: 'Corn',
        location: {
            lat: -57.0000,
            lng: -13.0000,
            country: 'BRA',
            countryName: 'Brazil',
            region: '5106257'
        },
        risk: 0.0,
        confidence: 82,
        ndviMean: 0.47,
        dataSource: 'model'
    },
    {
        id: 'bra-5106240-corn',
        name: '5106240 Corn',
        crop: 'Corn',
        location: {
            lat: -57.4000,
            lng: -12.2000,
            country: 'BRA',
            countryName: 'Brazil',
            region: '5106240'
        },
        risk: 0.0,
        confidence: 85,
        ndviMean: 0.482,
        dataSource: 'model'
    },
    {
        id: 'bra-5107065-corn',
        name: '5107065 Corn',
        crop: 'Corn',
        location: {
            lat: -53.0000,
            lng: -13.0000,
            country: 'BRA',
            countryName: 'Brazil',
            region: '5107065'
        },
        risk: 0.0,
        confidence: 88,
        ndviMean: 0.478,
        dataSource: 'model'
    },
    {
        id: 'bra-5108006-corn',
        name: '5108006 Corn',
        crop: 'Corn',
        location: {
            lat: -55.8000,
            lng: -13.7000,
            country: 'BRA',
            countryName: 'Brazil',
            region: '5108006'
        },
        risk: 0.0,
        confidence: 82,
        ndviMean: 0.21,
        dataSource: 'model'
    },
    {
        id: 'bra-5107958-corn',
        name: '5107958 Corn',
        crop: 'Corn',
        location: {
            lat: -55.7000,
            lng: -12.5000,
            country: 'BRA',
            countryName: 'Brazil',
            region: '5107958'
        },
        risk: 0.0,
        confidence: 88,
        ndviMean: 0.278,
        dataSource: 'model'
    },
    {
        id: 'bra-4104808-corn',
        name: '4104808 Corn',
        crop: 'Corn',
        location: {
            lat: -53.2000,
            lng: -24.8000,
            country: 'BRA',
            countryName: 'Brazil',
            region: '4104808'
        },
        risk: 0.0,
        confidence: 82,
        ndviMean: 0.418,
        dataSource: 'model'
    },
    {
        id: 'bra-4100103-corn',
        name: '4100103 Corn',
        crop: 'Corn',
        location: {
            lat: -50.6000,
            lng: -23.3000,
            country: 'BRA',
            countryName: 'Brazil',
            region: '4100103'
        },
        risk: 0.0,
        confidence: 82,
        ndviMean: 0.238,
        dataSource: 'model'
    },
    {
        id: 'bra-4102802-corn',
        name: '4102802 Corn',
        crop: 'Corn',
        location: {
            lat: -50.6000,
            lng: -24.0000,
            country: 'BRA',
            countryName: 'Brazil',
            region: '4102802'
        },
        risk: 0.0,
        confidence: 88,
        ndviMean: 0.403,
        dataSource: 'model'
    },
    {
        id: 'bra-4127700-corn',
        name: '4127700 Corn',
        crop: 'Corn',
        location: {
            lat: -52.4000,
            lng: -24.0000,
            country: 'BRA',
            countryName: 'Brazil',
            region: '4127700'
        },
        risk: 0.0,
        confidence: 82,
        ndviMean: 0.481,
        dataSource: 'model'
    },
    {
        id: 'bra-4128203-corn',
        name: '4128203 Corn',
        crop: 'Corn',
        location: {
            lat: -50.4000,
            lng: -24.7000,
            country: 'BRA',
            countryName: 'Brazil',
            region: '4128203'
        },
        risk: 0.0,
        confidence: 82,
        ndviMean: 0.385,
        dataSource: 'model'
    },
    {
        id: 'bra-4311403-corn',
        name: '4311403 Corn',
        crop: 'Corn',
        location: {
            lat: -51.1000,
            lng: -28.0000,
            country: 'BRA',
            countryName: 'Brazil',
            region: '4311403'
        },
        risk: 0.0,
        confidence: 82,
        ndviMean: 0.346,
        dataSource: 'model'
    },
    {
        id: 'bra-4305108-corn',
        name: '4305108 Corn',
        crop: 'Corn',
        location: {
            lat: -53.0000,
            lng: -28.3000,
            country: 'BRA',
            countryName: 'Brazil',
            region: '4305108'
        },
        risk: 0.0,
        confidence: 82,
        ndviMean: 0.299,
        dataSource: 'model'
    },
    {
        id: 'bra-4314407-corn',
        name: '4314407 Corn',
        crop: 'Corn',
        location: {
            lat: -54.4000,
            lng: -28.5000,
            country: 'BRA',
            countryName: 'Brazil',
            region: '4314407'
        },
        risk: 0.0,
        confidence: 82,
        ndviMean: 0.328,
        dataSource: 'model'
    },
    {
        id: 'bra-5212055-corn',
        name: '5212055 Corn',
        crop: 'Corn',
        location: {
            lat: -51.5000,
            lng: -17.8000,
            country: 'BRA',
            countryName: 'Brazil',
            region: '5212055'
        },
        risk: 0.0,
        confidence: 88,
        ndviMean: 0.334,
        dataSource: 'model'
    },
    {
        id: 'bra-5212253-corn',
        name: '5212253 Corn',
        crop: 'Corn',
        location: {
            lat: -49.3000,
            lng: -16.2000,
            country: 'BRA',
            countryName: 'Brazil',
            region: '5212253'
        },
        risk: 0.0,
        confidence: 88,
        ndviMean: 0.422,
        dataSource: 'model'
    },
    {
        id: 'bra-5216304-corn',
        name: '5216304 Corn',
        crop: 'Corn',
        location: {
            lat: -47.3000,
            lng: -15.4000,
            country: 'BRA',
            countryName: 'Brazil',
            region: '5216304'
        },
        risk: 0.0,
        confidence: 85,
        ndviMean: 0.322,
        dataSource: 'model'
    },
    {
        id: 'bra-5104526-soy',
        name: '5104526 Soy',
        crop: 'Soy',
        location: {
            lat: -54.0000,
            lng: -13.5000,
            country: 'BRA',
            countryName: 'Brazil',
            region: '5104526'
        },
        risk: 0.0,
        confidence: 82,
        ndviMean: 0.399,
        dataSource: 'model'
    },
    {
        id: 'bra-5106224-soy',
        name: '5106224 Soy',
        crop: 'Soy',
        location: {
            lat: -55.5000,
            lng: -11.9000,
            country: 'BRA',
            countryName: 'Brazil',
            region: '5106224'
        },
        risk: 13.6,
        confidence: 79,
        ndviMean: 0.153,
        dataSource: 'model'
    },
    {
        id: 'bra-5106240-soy',
        name: '5106240 Soy',
        crop: 'Soy',
        location: {
            lat: -57.4000,
            lng: -12.2000,
            country: 'BRA',
            countryName: 'Brazil',
            region: '5106240'
        },
        risk: 0.0,
        confidence: 94,
        ndviMean: 0.478,
        dataSource: 'model'
    },
    {
        id: 'bra-5101902-soy',
        name: '5101902 Soy',
        crop: 'Soy',
        location: {
            lat: -52.2000,
            lng: -14.0000,
            country: 'BRA',
            countryName: 'Brazil',
            region: '5101902'
        },
        risk: 0.0,
        confidence: 95,
        ndviMean: 0.41,
        dataSource: 'model'
    },
    {
        id: 'bra-5106257-soy',
        name: '5106257 Soy',
        crop: 'Soy',
        location: {
            lat: -57.0000,
            lng: -13.0000,
            country: 'BRA',
            countryName: 'Brazil',
            region: '5106257'
        },
        risk: 0.0,
        confidence: 82,
        ndviMean: 0.494,
        dataSource: 'model'
    },
    {
        id: 'bra-5105507-soy',
        name: '5105507 Soy',
        crop: 'Soy',
        location: {
            lat: -55.3000,
            lng: -15.0000,
            country: 'BRA',
            countryName: 'Brazil',
            region: '5105507'
        },
        risk: 0.0,
        confidence: 95,
        ndviMean: 0.365,
        dataSource: 'model'
    },
    {
        id: 'bra-5107065-soy',
        name: '5107065 Soy',
        crop: 'Soy',
        location: {
            lat: -53.0000,
            lng: -13.0000,
            country: 'BRA',
            countryName: 'Brazil',
            region: '5107065'
        },
        risk: 0.0,
        confidence: 94,
        ndviMean: 0.518,
        dataSource: 'model'
    },
    {
        id: 'bra-5107958-soy',
        name: '5107958 Soy',
        crop: 'Soy',
        location: {
            lat: -55.7000,
            lng: -12.5000,
            country: 'BRA',
            countryName: 'Brazil',
            region: '5107958'
        },
        risk: 0.0,
        confidence: 88,
        ndviMean: 0.253,
        dataSource: 'model'
    },
    {
        id: 'bra-4102802-soy',
        name: '4102802 Soy',
        crop: 'Soy',
        location: {
            lat: -50.6000,
            lng: -24.0000,
            country: 'BRA',
            countryName: 'Brazil',
            region: '4102802'
        },
        risk: 0.0,
        confidence: 88,
        ndviMean: 0.491,
        dataSource: 'model'
    },
    {
        id: 'bra-5212055-soy',
        name: '5212055 Soy',
        crop: 'Soy',
        location: {
            lat: -51.5000,
            lng: -17.8000,
            country: 'BRA',
            countryName: 'Brazil',
            region: '5212055'
        },
        risk: 0.0,
        confidence: 94,
        ndviMean: 0.386,
        dataSource: 'model'
    },
    {
        id: 'bra-4320008-soy',
        name: '4320008 Soy',
        crop: 'Soy',
        location: {
            lat: -54.8000,
            lng: -28.8000,
            country: 'BRA',
            countryName: 'Brazil',
            region: '4320008'
        },
        risk: 0.0,
        confidence: 95,
        ndviMean: 0.337,
        dataSource: 'model'
    },
    {
        id: 'bra-5208707-soy',
        name: '5208707 Soy',
        crop: 'Soy',
        location: {
            lat: -49.5000,
            lng: -18.0000,
            country: 'BRA',
            countryName: 'Brazil',
            region: '5208707'
        },
        risk: 0.0,
        confidence: 95,
        ndviMean: 0.294,
        dataSource: 'model'
    },
    {
        id: 'bra-5216304-soy',
        name: '5216304 Soy',
        crop: 'Soy',
        location: {
            lat: -47.3000,
            lng: -15.4000,
            country: 'BRA',
            countryName: 'Brazil',
            region: '5216304'
        },
        risk: 0.0,
        confidence: 94,
        ndviMean: 0.38,
        dataSource: 'model'
    },
    {
        id: 'bra-5101902-corn',
        name: '5101902 Corn',
        crop: 'Corn',
        location: {
            lat: -52.2000,
            lng: -14.0000,
            country: 'BRA',
            countryName: 'Brazil',
            region: '5101902'
        },
        risk: 0.0,
        confidence: 94,
        ndviMean: 0.342,
        dataSource: 'model'
    },
    {
        id: 'bra-5105507-corn',
        name: '5105507 Corn',
        crop: 'Corn',
        location: {
            lat: -55.3000,
            lng: -15.0000,
            country: 'BRA',
            countryName: 'Brazil',
            region: '5105507'
        },
        risk: 0.0,
        confidence: 94,
        ndviMean: 0.327,
        dataSource: 'model'
    },
    {
        id: 'bra-4320008-corn',
        name: '4320008 Corn',
        crop: 'Corn',
        location: {
            lat: -54.8000,
            lng: -28.8000,
            country: 'BRA',
            countryName: 'Brazil',
            region: '4320008'
        },
        risk: 0.0,
        confidence: 94,
        ndviMean: 0.407,
        dataSource: 'model'
    },
    {
        id: 'bra-5208707-corn',
        name: '5208707 Corn',
        crop: 'Corn',
        location: {
            lat: -49.5000,
            lng: -18.0000,
            country: 'BRA',
            countryName: 'Brazil',
            region: '5208707'
        },
        risk: 0.0,
        confidence: 94,
        ndviMean: 0.263,
        dataSource: 'model'
    },
    {
        id: 'ind-IN-MH-soy',
        name: 'IN-MH Soy',
        crop: 'Soy',
        location: {
            lat: 75.3000,
            lng: 19.8000,
            country: 'IND',
            countryName: 'India',
            region: 'IN-MH'
        },
        risk: 0.0,
        confidence: 79,
        ndviMean: 0.344,
        dataSource: 'model'
    },
    {
        id: 'ind-IN-MP-soy',
        name: 'IN-MP Soy',
        crop: 'Soy',
        location: {
            lat: 78.7000,
            lng: 22.9000,
            country: 'IND',
            countryName: 'India',
            region: 'IN-MP'
        },
        risk: 0.0,
        confidence: 79,
        ndviMean: 0.378,
        dataSource: 'model'
    },
    {
        id: 'ind-IN-PB-wheat',
        name: 'IN-PB Wheat',
        crop: 'Wheat',
        location: {
            lat: 75.3000,
            lng: 31.1000,
            country: 'IND',
            countryName: 'India',
            region: 'IN-PB'
        },
        risk: 0.1,
        confidence: 88,
        ndviMean: 0.274,
        dataSource: 'model'
    },
    {
        id: 'ind-IN-MP-wheat',
        name: 'IN-MP Wheat',
        crop: 'Wheat',
        location: {
            lat: 78.7000,
            lng: 22.9000,
            country: 'IND',
            countryName: 'India',
            region: 'IN-MP'
        },
        risk: 0.0,
        confidence: 88,
        ndviMean: 0.262,
        dataSource: 'model'
    },
    {
        id: 'ind-IN-PB-rice',
        name: 'IN-PB Rice',
        crop: 'Rice',
        location: {
            lat: 75.3000,
            lng: 31.1000,
            country: 'IND',
            countryName: 'India',
            region: 'IN-PB'
        },
        risk: 0.0,
        confidence: 85,
        ndviMean: 0.359,
        dataSource: 'model'
    },
    {
        id: 'ind-IN-UP-wheat',
        name: 'IN-UP Wheat',
        crop: 'Wheat',
        location: {
            lat: 80.9000,
            lng: 26.8000,
            country: 'IND',
            countryName: 'India',
            region: 'IN-UP'
        },
        risk: 100.0,
        confidence: 88,
        ndviMean: 0.093,
        dataSource: 'model'
    },
    {
        id: 'ind-IN-UP-rice',
        name: 'IN-UP Rice',
        crop: 'Rice',
        location: {
            lat: 80.9000,
            lng: 26.8000,
            country: 'IND',
            countryName: 'India',
            region: 'IN-UP'
        },
        risk: 100.0,
        confidence: 82,
        ndviMean: 0.104,
        dataSource: 'model'
    },
    {
        id: 'ind-IN-RJ-wheat',
        name: 'IN-RJ Wheat',
        crop: 'Wheat',
        location: {
            lat: 74.2000,
            lng: 27.0000,
            country: 'IND',
            countryName: 'India',
            region: 'IN-RJ'
        },
        risk: 99.9,
        confidence: 88,
        ndviMean: 0.14,
        dataSource: 'model'
    },
    {
        id: 'ind-IN-HR-wheat',
        name: 'IN-HR Wheat',
        crop: 'Wheat',
        location: {
            lat: 76.1000,
            lng: 29.1000,
            country: 'IND',
            countryName: 'India',
            region: 'IN-HR'
        },
        risk: 0.1,
        confidence: 88,
        ndviMean: 0.171,
        dataSource: 'model'
    },
    {
        id: 'arg-ARG_Buenos_Aires_North-soy',
        name: 'ARG_Buenos_Aires_North Soy',
        crop: 'Soy',
        location: {
            lat: -61.0000,
            lng: -34.0000,
            country: 'ARG',
            countryName: 'Argentina',
            region: 'ARG_Buenos_Aires_North'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.265,
        dataSource: 'model'
    },
    {
        id: 'arg-ARG_Buenos_Aires_South-soy',
        name: 'ARG_Buenos_Aires_South Soy',
        crop: 'Soy',
        location: {
            lat: -60.0000,
            lng: -37.0000,
            country: 'ARG',
            countryName: 'Argentina',
            region: 'ARG_Buenos_Aires_South'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.457,
        dataSource: 'model'
    },
    {
        id: 'arg-ARG_Cordoba_East-soy',
        name: 'ARG_Cordoba_East Soy',
        crop: 'Soy',
        location: {
            lat: -63.0000,
            lng: -32.0000,
            country: 'ARG',
            countryName: 'Argentina',
            region: 'ARG_Cordoba_East'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.221,
        dataSource: 'model'
    },
    {
        id: 'arg-ARG_Santa_Fe_South-soy',
        name: 'ARG_Santa_Fe_South Soy',
        crop: 'Soy',
        location: {
            lat: -61.5000,
            lng: -33.0000,
            country: 'ARG',
            countryName: 'Argentina',
            region: 'ARG_Santa_Fe_South'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.284,
        dataSource: 'model'
    },
    {
        id: 'arg-ARG_Entre_Rios-soy',
        name: 'ARG_Entre_Rios Soy',
        crop: 'Soy',
        location: {
            lat: -59.0000,
            lng: -32.0000,
            country: 'ARG',
            countryName: 'Argentina',
            region: 'ARG_Entre_Rios'
        },
        risk: 0.0,
        confidence: 88,
        ndviMean: 0.206,
        dataSource: 'model'
    },
    {
        id: 'arg-ARG_Buenos_Aires_West-corn',
        name: 'ARG_Buenos_Aires_West Corn',
        crop: 'Corn',
        location: {
            lat: -63.0000,
            lng: -35.0000,
            country: 'ARG',
            countryName: 'Argentina',
            region: 'ARG_Buenos_Aires_West'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.166,
        dataSource: 'model'
    },
    {
        id: 'arg-ARG_Cordoba_South-corn',
        name: 'ARG_Cordoba_South Corn',
        crop: 'Corn',
        location: {
            lat: -64.0000,
            lng: -33.5000,
            country: 'ARG',
            countryName: 'Argentina',
            region: 'ARG_Cordoba_South'
        },
        risk: 0.0,
        confidence: 85,
        ndviMean: 0.183,
        dataSource: 'model'
    },
    {
        id: 'arg-ARG_Santa_Fe_Central-corn',
        name: 'ARG_Santa_Fe_Central Corn',
        crop: 'Corn',
        location: {
            lat: -61.0000,
            lng: -31.5000,
            country: 'ARG',
            countryName: 'Argentina',
            region: 'ARG_Santa_Fe_Central'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.341,
        dataSource: 'model'
    },
    {
        id: 'arg-ARG_La_Pampa_East-wheat',
        name: 'ARG_La_Pampa_East Wheat',
        crop: 'Wheat',
        location: {
            lat: -64.0000,
            lng: -36.5000,
            country: 'ARG',
            countryName: 'Argentina',
            region: 'ARG_La_Pampa_East'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.326,
        dataSource: 'model'
    },
    {
        id: 'arg-ARG_Buenos_Aires_Southwest-wheat',
        name: 'ARG_Buenos_Aires_Southwest Wheat',
        crop: 'Wheat',
        location: {
            lat: -62.0000,
            lng: -38.0000,
            country: 'ARG',
            countryName: 'Argentina',
            region: 'ARG_Buenos_Aires_Southwest'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.306,
        dataSource: 'model'
    },
    {
        id: 'ind-IND_Punjab_Central-wheat',
        name: 'IND_Punjab_Central Wheat',
        crop: 'Wheat',
        location: {
            lat: 75.5000,
            lng: 31.0000,
            country: 'IND',
            countryName: 'India',
            region: 'IND_Punjab_Central'
        },
        risk: 0.0,
        confidence: 88,
        ndviMean: 0.305,
        dataSource: 'model'
    },
    {
        id: 'ind-IND_Punjab_South-wheat',
        name: 'IND_Punjab_South Wheat',
        crop: 'Wheat',
        location: {
            lat: 75.0000,
            lng: 30.5000,
            country: 'IND',
            countryName: 'India',
            region: 'IND_Punjab_South'
        },
        risk: 0.0,
        confidence: 85,
        ndviMean: 0.401,
        dataSource: 'model'
    },
    {
        id: 'ind-IND_Haryana_North-wheat',
        name: 'IND_Haryana_North Wheat',
        crop: 'Wheat',
        location: {
            lat: 76.5000,
            lng: 29.5000,
            country: 'IND',
            countryName: 'India',
            region: 'IND_Haryana_North'
        },
        risk: 0.0,
        confidence: 85,
        ndviMean: 0.306,
        dataSource: 'model'
    },
    {
        id: 'ind-IND_Uttar_Pradesh_Central-wheat',
        name: 'IND_Uttar_Pradesh_Central Wheat',
        crop: 'Wheat',
        location: {
            lat: 80.0000,
            lng: 27.0000,
            country: 'IND',
            countryName: 'India',
            region: 'IND_Uttar_Pradesh_Central'
        },
        risk: 99.9,
        confidence: 79,
        ndviMean: 0.143,
        dataSource: 'model'
    },
    {
        id: 'ind-IND_Uttar_Pradesh_West-wheat',
        name: 'IND_Uttar_Pradesh_West Wheat',
        crop: 'Wheat',
        location: {
            lat: 78.0000,
            lng: 29.0000,
            country: 'IND',
            countryName: 'India',
            region: 'IND_Uttar_Pradesh_West'
        },
        risk: 0.0,
        confidence: 82,
        ndviMean: 0.264,
        dataSource: 'model'
    },
    {
        id: 'ind-IND_Maharashtra_Central-soy',
        name: 'IND_Maharashtra_Central Soy',
        crop: 'Soy',
        location: {
            lat: 77.0000,
            lng: 20.0000,
            country: 'IND',
            countryName: 'India',
            region: 'IND_Maharashtra_Central'
        },
        risk: 0.1,
        confidence: 82,
        ndviMean: 0.319,
        dataSource: 'model'
    },
    {
        id: 'ind-IND_Madhya_Pradesh_North-wheat',
        name: 'IND_Madhya_Pradesh_North Wheat',
        crop: 'Wheat',
        location: {
            lat: 77.5000,
            lng: 24.5000,
            country: 'IND',
            countryName: 'India',
            region: 'IND_Madhya_Pradesh_North'
        },
        risk: 0.0,
        confidence: 88,
        ndviMean: 0.27,
        dataSource: 'model'
    },
    {
        id: 'ind-IND_Rajasthan_East-wheat',
        name: 'IND_Rajasthan_East Wheat',
        crop: 'Wheat',
        location: {
            lat: 75.5000,
            lng: 26.5000,
            country: 'IND',
            countryName: 'India',
            region: 'IND_Rajasthan_East'
        },
        risk: 0.0,
        confidence: 88,
        ndviMean: 0.224,
        dataSource: 'model'
    },
    {
        id: 'ind-IND_Rajasthan_Southeast-soy',
        name: 'IND_Rajasthan_Southeast Soy',
        crop: 'Soy',
        location: {
            lat: 76.0000,
            lng: 24.5000,
            country: 'IND',
            countryName: 'India',
            region: 'IND_Rajasthan_Southeast'
        },
        risk: 0.0,
        confidence: 82,
        ndviMean: 0.269,
        dataSource: 'model'
    },
    {
        id: 'ind-IND_Madhya_Pradesh_West-soy',
        name: 'IND_Madhya_Pradesh_West Soy',
        crop: 'Soy',
        location: {
            lat: 76.0000,
            lng: 23.0000,
            country: 'IND',
            countryName: 'India',
            region: 'IND_Madhya_Pradesh_West'
        },
        risk: 0.0,
        confidence: 82,
        ndviMean: 0.265,
        dataSource: 'model'
    },
    {
        id: 'ind-IND_Bihar_Central-rice',
        name: 'IND_Bihar_Central Rice',
        crop: 'Rice',
        location: {
            lat: 85.5000,
            lng: 25.5000,
            country: 'IND',
            countryName: 'India',
            region: 'IND_Bihar_Central'
        },
        risk: 99.8,
        confidence: 88,
        ndviMean: 0.141,
        dataSource: 'model'
    },
    {
        id: 'ind-IND_West_Bengal_South-rice',
        name: 'IND_West_Bengal_South Rice',
        crop: 'Rice',
        location: {
            lat: 88.0000,
            lng: 23.0000,
            country: 'IND',
            countryName: 'India',
            region: 'IND_West_Bengal_South'
        },
        risk: 0.0,
        confidence: 85,
        ndviMean: 0.348,
        dataSource: 'model'
    },
    {
        id: 'ind-IND_Andhra_Pradesh_East-rice',
        name: 'IND_Andhra_Pradesh_East Rice',
        crop: 'Rice',
        location: {
            lat: 80.5000,
            lng: 16.0000,
            country: 'IND',
            countryName: 'India',
            region: 'IND_Andhra_Pradesh_East'
        },
        risk: 0.0,
        confidence: 85,
        ndviMean: 0.36,
        dataSource: 'model'
    },
    {
        id: 'ind-IND_Tamil_Nadu_East-rice',
        name: 'IND_Tamil_Nadu_East Rice',
        crop: 'Rice',
        location: {
            lat: 79.5000,
            lng: 11.0000,
            country: 'IND',
            countryName: 'India',
            region: 'IND_Tamil_Nadu_East'
        },
        risk: 0.0,
        confidence: 88,
        ndviMean: 0.406,
        dataSource: 'model'
    },
    {
        id: 'chn-CHN_Heilongjiang_Central-soy',
        name: 'CHN_Heilongjiang_Central Soy',
        crop: 'Soy',
        location: {
            lat: 127.0000,
            lng: 47.0000,
            country: 'CHN',
            countryName: 'China',
            region: 'CHN_Heilongjiang_Central'
        },
        risk: 0.0,
        confidence: 88,
        ndviMean: 0.34,
        dataSource: 'model'
    },
    {
        id: 'chn-CHN_Liaoning_Central-corn',
        name: 'CHN_Liaoning_Central Corn',
        crop: 'Corn',
        location: {
            lat: 123.0000,
            lng: 42.0000,
            country: 'CHN',
            countryName: 'China',
            region: 'CHN_Liaoning_Central'
        },
        risk: 0.0,
        confidence: 85,
        ndviMean: 0.317,
        dataSource: 'model'
    },
    {
        id: 'chn-CHN_Heilongjiang_East-soy',
        name: 'CHN_Heilongjiang_East Soy',
        crop: 'Soy',
        location: {
            lat: 130.0000,
            lng: 46.5000,
            country: 'CHN',
            countryName: 'China',
            region: 'CHN_Heilongjiang_East'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.335,
        dataSource: 'model'
    },
    {
        id: 'chn-CHN_Jilin_Central-corn',
        name: 'CHN_Jilin_Central Corn',
        crop: 'Corn',
        location: {
            lat: 126.0000,
            lng: 44.0000,
            country: 'CHN',
            countryName: 'China',
            region: 'CHN_Jilin_Central'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.327,
        dataSource: 'model'
    },
    {
        id: 'chn-CHN_Hunan_Central-rice',
        name: 'CHN_Hunan_Central Rice',
        crop: 'Rice',
        location: {
            lat: 112.0000,
            lng: 28.0000,
            country: 'CHN',
            countryName: 'China',
            region: 'CHN_Hunan_Central'
        },
        risk: 0.0,
        confidence: 88,
        ndviMean: 0.344,
        dataSource: 'model'
    },
    {
        id: 'chn-CHN_Shandong_Central-wheat',
        name: 'CHN_Shandong_Central Wheat',
        crop: 'Wheat',
        location: {
            lat: 118.0000,
            lng: 36.5000,
            country: 'CHN',
            countryName: 'China',
            region: 'CHN_Shandong_Central'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.253,
        dataSource: 'model'
    },
    {
        id: 'chn-CHN_Jiangsu_North-rice',
        name: 'CHN_Jiangsu_North Rice',
        crop: 'Rice',
        location: {
            lat: 119.0000,
            lng: 34.0000,
            country: 'CHN',
            countryName: 'China',
            region: 'CHN_Jiangsu_North'
        },
        risk: 0.0,
        confidence: 88,
        ndviMean: 0.413,
        dataSource: 'model'
    },
    {
        id: 'chn-CHN_Anhui_Central-rice',
        name: 'CHN_Anhui_Central Rice',
        crop: 'Rice',
        location: {
            lat: 117.0000,
            lng: 32.0000,
            country: 'CHN',
            countryName: 'China',
            region: 'CHN_Anhui_Central'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.444,
        dataSource: 'model'
    },
    {
        id: 'chn-CHN_Henan_Central-wheat',
        name: 'CHN_Henan_Central Wheat',
        crop: 'Wheat',
        location: {
            lat: 114.0000,
            lng: 34.5000,
            country: 'CHN',
            countryName: 'China',
            region: 'CHN_Henan_Central'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.377,
        dataSource: 'model'
    },
    {
        id: 'aus-AUS_New_South_Wales_West-wheat',
        name: 'AUS_New_South_Wales_West Wheat',
        crop: 'Wheat',
        location: {
            lat: 147.0000,
            lng: -33.0000,
            country: 'AUS',
            countryName: 'Australia',
            region: 'AUS_New_South_Wales_West'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.164,
        dataSource: 'model'
    },
    {
        id: 'chn-CHN_Hebei_South-wheat',
        name: 'CHN_Hebei_South Wheat',
        crop: 'Wheat',
        location: {
            lat: 115.0000,
            lng: 37.0000,
            country: 'CHN',
            countryName: 'China',
            region: 'CHN_Hebei_South'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.28,
        dataSource: 'model'
    },
    {
        id: 'aus-AUS_Victoria_Northwest-wheat',
        name: 'AUS_Victoria_Northwest Wheat',
        crop: 'Wheat',
        location: {
            lat: 142.0000,
            lng: -36.0000,
            country: 'AUS',
            countryName: 'Australia',
            region: 'AUS_Victoria_Northwest'
        },
        risk: 0.1,
        confidence: 91,
        ndviMean: 0.246,
        dataSource: 'model'
    },
    {
        id: 'aus-AUS_South_Australia_Southeast-wheat',
        name: 'AUS_South_Australia_Southeast Wheat',
        crop: 'Wheat',
        location: {
            lat: 139.5000,
            lng: -35.0000,
            country: 'AUS',
            countryName: 'Australia',
            region: 'AUS_South_Australia_Southeast'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.245,
        dataSource: 'model'
    },
    {
        id: 'aus-AUS_Western_Australia_Wheatbelt-wheat',
        name: 'AUS_Western_Australia_Wheatbelt Wheat',
        crop: 'Wheat',
        location: {
            lat: 117.0000,
            lng: -31.5000,
            country: 'AUS',
            countryName: 'Australia',
            region: 'AUS_Western_Australia_Wheatbelt'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.295,
        dataSource: 'model'
    },
    {
        id: 'ukr-UKR_Cherkasy-corn',
        name: 'UKR_Cherkasy Corn',
        crop: 'Corn',
        location: {
            lat: 32.0000,
            lng: 49.5000,
            country: 'UKR',
            countryName: 'Ukraine',
            region: 'UKR_Cherkasy'
        },
        risk: 100.0,
        confidence: 91,
        ndviMean: 0.003,
        dataSource: 'model'
    },
    {
        id: 'ukr-UKR_Poltava-corn',
        name: 'UKR_Poltava Corn',
        crop: 'Corn',
        location: {
            lat: 34.5000,
            lng: 49.5000,
            country: 'UKR',
            countryName: 'Ukraine',
            region: 'UKR_Poltava'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.375,
        dataSource: 'model'
    },
    {
        id: 'ukr-UKR_Kharkiv-soy',
        name: 'UKR_Kharkiv Soy',
        crop: 'Soy',
        location: {
            lat: 36.0000,
            lng: 49.5000,
            country: 'UKR',
            countryName: 'Ukraine',
            region: 'UKR_Kharkiv'
        },
        risk: 0.0,
        confidence: 88,
        ndviMean: 0.246,
        dataSource: 'model'
    },
    {
        id: 'aus-AUS_Queensland_Darling_Downs-soy',
        name: 'AUS_Queensland_Darling_Downs Soy',
        crop: 'Soy',
        location: {
            lat: 151.5000,
            lng: -27.5000,
            country: 'AUS',
            countryName: 'Australia',
            region: 'AUS_Queensland_Darling_Downs'
        },
        risk: 100.0,
        confidence: 91,
        ndviMean: 0.107,
        dataSource: 'model'
    },
    {
        id: 'ukr-UKR_Vinnytsia-wheat',
        name: 'UKR_Vinnytsia Wheat',
        crop: 'Wheat',
        location: {
            lat: 28.5000,
            lng: 49.0000,
            country: 'UKR',
            countryName: 'Ukraine',
            region: 'UKR_Vinnytsia'
        },
        risk: 0.0,
        confidence: 88,
        ndviMean: 0.303,
        dataSource: 'model'
    },
    {
        id: 'ukr-UKR_Kirovohrad-wheat',
        name: 'UKR_Kirovohrad Wheat',
        crop: 'Wheat',
        location: {
            lat: 32.5000,
            lng: 48.5000,
            country: 'UKR',
            countryName: 'Ukraine',
            region: 'UKR_Kirovohrad'
        },
        risk: 0.0,
        confidence: 88,
        ndviMean: 0.251,
        dataSource: 'model'
    },
    {
        id: 'fra-FRA_Picardy-wheat',
        name: 'FRA_Picardy Wheat',
        crop: 'Wheat',
        location: {
            lat: 2.5000,
            lng: 49.5000,
            country: 'FRA',
            countryName: 'France',
            region: 'FRA_Picardy'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.384,
        dataSource: 'model'
    },
    {
        id: 'ukr-UKR_Dnipropetrovsk-soy',
        name: 'UKR_Dnipropetrovsk Soy',
        crop: 'Soy',
        location: {
            lat: 35.0000,
            lng: 48.5000,
            country: 'UKR',
            countryName: 'Ukraine',
            region: 'UKR_Dnipropetrovsk'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.182,
        dataSource: 'model'
    },
    {
        id: 'fra-FRA_Beauce_Central-wheat',
        name: 'FRA_Beauce_Central Wheat',
        crop: 'Wheat',
        location: {
            lat: 1.5000,
            lng: 48.0000,
            country: 'FRA',
            countryName: 'France',
            region: 'FRA_Beauce_Central'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.372,
        dataSource: 'model'
    },
    {
        id: 'fra-FRA_Champagne-wheat',
        name: 'FRA_Champagne Wheat',
        crop: 'Wheat',
        location: {
            lat: 4.0000,
            lng: 49.0000,
            country: 'FRA',
            countryName: 'France',
            region: 'FRA_Champagne'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.488,
        dataSource: 'model'
    },
    {
        id: 'fra-FRA_Aquitaine-corn',
        name: 'FRA_Aquitaine Corn',
        crop: 'Corn',
        location: {
            lat: -0.5000,
            lng: 44.0000,
            country: 'FRA',
            countryName: 'France',
            region: 'FRA_Aquitaine'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.431,
        dataSource: 'model'
    },
    {
        id: 'can-CAN_Saskatchewan_South-wheat',
        name: 'CAN_Saskatchewan_South Wheat',
        crop: 'Wheat',
        location: {
            lat: -107.0000,
            lng: 50.5000,
            country: 'CAN',
            countryName: 'Canada',
            region: 'CAN_Saskatchewan_South'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.17,
        dataSource: 'model'
    },
    {
        id: 'fra-FRA_Midi_Pyrenees-corn',
        name: 'FRA_Midi_Pyrenees Corn',
        crop: 'Corn',
        location: {
            lat: 1.5000,
            lng: 43.5000,
            country: 'FRA',
            countryName: 'France',
            region: 'FRA_Midi_Pyrenees'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.357,
        dataSource: 'model'
    },
    {
        id: 'can-CAN_Saskatchewan_Central-wheat',
        name: 'CAN_Saskatchewan_Central Wheat',
        crop: 'Wheat',
        location: {
            lat: -106.0000,
            lng: 52.0000,
            country: 'CAN',
            countryName: 'Canada',
            region: 'CAN_Saskatchewan_Central'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.236,
        dataSource: 'model'
    },
    {
        id: 'can-CAN_Alberta_South-wheat',
        name: 'CAN_Alberta_South Wheat',
        crop: 'Wheat',
        location: {
            lat: -113.0000,
            lng: 50.0000,
            country: 'CAN',
            countryName: 'Canada',
            region: 'CAN_Alberta_South'
        },
        risk: 0.0,
        confidence: 88,
        ndviMean: 0.175,
        dataSource: 'model'
    },
    {
        id: 'can-CAN_Manitoba_South-wheat',
        name: 'CAN_Manitoba_South Wheat',
        crop: 'Wheat',
        location: {
            lat: -98.0000,
            lng: 49.5000,
            country: 'CAN',
            countryName: 'Canada',
            region: 'CAN_Manitoba_South'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.243,
        dataSource: 'model'
    },
    {
        id: 'can-CAN_Ontario_Southwest-corn',
        name: 'CAN_Ontario_Southwest Corn',
        crop: 'Corn',
        location: {
            lat: -81.5000,
            lng: 42.5000,
            country: 'CAN',
            countryName: 'Canada',
            region: 'CAN_Ontario_Southwest'
        },
        risk: 100.0,
        confidence: 91,
        ndviMean: -0.035,
        dataSource: 'model'
    },
    {
        id: 'rus-RUS_Stavropol-wheat',
        name: 'RUS_Stavropol Wheat',
        crop: 'Wheat',
        location: {
            lat: 42.0000,
            lng: 45.0000,
            country: 'RUS',
            countryName: 'Russia',
            region: 'RUS_Stavropol'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.38,
        dataSource: 'model'
    },
    {
        id: 'rus-RUS_Rostov-wheat',
        name: 'RUS_Rostov Wheat',
        crop: 'Wheat',
        location: {
            lat: 40.0000,
            lng: 47.0000,
            country: 'RUS',
            countryName: 'Russia',
            region: 'RUS_Rostov'
        },
        risk: 0.0,
        confidence: 85,
        ndviMean: 0.322,
        dataSource: 'model'
    },
    {
        id: 'can-CAN_Manitoba_Central-soy',
        name: 'CAN_Manitoba_Central Soy',
        crop: 'Soy',
        location: {
            lat: -98.5000,
            lng: 50.5000,
            country: 'CAN',
            countryName: 'Canada',
            region: 'CAN_Manitoba_Central'
        },
        risk: 100.0,
        confidence: 88,
        ndviMean: -0.111,
        dataSource: 'model'
    },
    {
        id: 'rus-RUS_Krasnodar-wheat',
        name: 'RUS_Krasnodar Wheat',
        crop: 'Wheat',
        location: {
            lat: 39.0000,
            lng: 45.5000,
            country: 'RUS',
            countryName: 'Russia',
            region: 'RUS_Krasnodar'
        },
        risk: 0.0,
        confidence: 85,
        ndviMean: 0.305,
        dataSource: 'model'
    },
    {
        id: 'rus-RUS_Voronezh-wheat',
        name: 'RUS_Voronezh Wheat',
        crop: 'Wheat',
        location: {
            lat: 39.5000,
            lng: 51.5000,
            country: 'RUS',
            countryName: 'Russia',
            region: 'RUS_Voronezh'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.234,
        dataSource: 'model'
    },
    {
        id: 'idn-IDN_Sumatra_North-rice',
        name: 'IDN_Sumatra_North Rice',
        crop: 'Rice',
        location: {
            lat: 98.5000,
            lng: 3.5000,
            country: 'IDN',
            countryName: 'Indonesia',
            region: 'IDN_Sumatra_North'
        },
        risk: 0.0,
        confidence: 85,
        ndviMean: 0.434,
        dataSource: 'model'
    },
    {
        id: 'idn-IDN_Sulawesi_South-rice',
        name: 'IDN_Sulawesi_South Rice',
        crop: 'Rice',
        location: {
            lat: 120.0000,
            lng: -5.0000,
            country: 'IDN',
            countryName: 'Indonesia',
            region: 'IDN_Sulawesi_South'
        },
        risk: 0.0,
        confidence: 85,
        ndviMean: 0.521,
        dataSource: 'model'
    },
    {
        id: 'rus-RUS_Saratov-wheat',
        name: 'RUS_Saratov Wheat',
        crop: 'Wheat',
        location: {
            lat: 46.0000,
            lng: 51.5000,
            country: 'RUS',
            countryName: 'Russia',
            region: 'RUS_Saratov'
        },
        risk: 100.0,
        confidence: 91,
        ndviMean: -0.012,
        dataSource: 'model'
    },
    {
        id: 'idn-IDN_Java_Central-rice',
        name: 'IDN_Java_Central Rice',
        crop: 'Rice',
        location: {
            lat: 110.5000,
            lng: -7.0000,
            country: 'IDN',
            countryName: 'Indonesia',
            region: 'IDN_Java_Central'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.31,
        dataSource: 'model'
    },
    {
        id: 'tha-THA_Central_Plains-rice',
        name: 'THA_Central_Plains Rice',
        crop: 'Rice',
        location: {
            lat: 100.5000,
            lng: 15.0000,
            country: 'THA',
            countryName: 'Thailand',
            region: 'THA_Central_Plains'
        },
        risk: 0.0,
        confidence: 85,
        ndviMean: 0.258,
        dataSource: 'model'
    },
    {
        id: 'idn-IDN_Java_East-rice',
        name: 'IDN_Java_East Rice',
        crop: 'Rice',
        location: {
            lat: 112.5000,
            lng: -7.5000,
            country: 'IDN',
            countryName: 'Indonesia',
            region: 'IDN_Java_East'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.261,
        dataSource: 'model'
    },
    {
        id: 'tha-THA_Chiang_Mai-rice',
        name: 'THA_Chiang_Mai Rice',
        crop: 'Rice',
        location: {
            lat: 99.0000,
            lng: 18.5000,
            country: 'THA',
            countryName: 'Thailand',
            region: 'THA_Chiang_Mai'
        },
        risk: 0.0,
        confidence: 88,
        ndviMean: 0.283,
        dataSource: 'model'
    },
    {
        id: 'vnm-VNM_Mekong_Delta-rice',
        name: 'VNM_Mekong_Delta Rice',
        crop: 'Rice',
        location: {
            lat: 105.5000,
            lng: 10.0000,
            country: 'VNM',
            countryName: 'Vietnam',
            region: 'VNM_Mekong_Delta'
        },
        risk: 0.1,
        confidence: 85,
        ndviMean: 0.302,
        dataSource: 'model'
    },
    {
        id: 'tha-THA_Northeast_Isan-rice',
        name: 'THA_Northeast_Isan Rice',
        crop: 'Rice',
        location: {
            lat: 103.0000,
            lng: 16.0000,
            country: 'THA',
            countryName: 'Thailand',
            region: 'THA_Northeast_Isan'
        },
        risk: 0.0,
        confidence: 88,
        ndviMean: 0.313,
        dataSource: 'model'
    },
    {
        id: 'vnm-VNM_Red_River_Delta-rice',
        name: 'VNM_Red_River_Delta Rice',
        crop: 'Rice',
        location: {
            lat: 106.0000,
            lng: 21.0000,
            country: 'VNM',
            countryName: 'Vietnam',
            region: 'VNM_Red_River_Delta'
        },
        risk: 0.0,
        confidence: 82,
        ndviMean: 0.323,
        dataSource: 'model'
    },
    {
        id: 'ind-IND_Punjab_Ludhiana-wheat',
        name: 'IND_Punjab_Ludhiana Wheat',
        crop: 'Wheat',
        location: {
            lat: 75.8500,
            lng: 30.9000,
            country: 'IND',
            countryName: 'India',
            region: 'IND_Punjab_Ludhiana'
        },
        risk: 100.0,
        confidence: 88,
        ndviMean: 0.135,
        dataSource: 'model'
    },
    {
        id: 'ind-IND_Punjab_Jalandhar-wheat',
        name: 'IND_Punjab_Jalandhar Wheat',
        crop: 'Wheat',
        location: {
            lat: 75.5800,
            lng: 31.3300,
            country: 'IND',
            countryName: 'India',
            region: 'IND_Punjab_Jalandhar'
        },
        risk: 100.0,
        confidence: 88,
        ndviMean: 0.056,
        dataSource: 'model'
    },
    {
        id: 'ind-IND_Punjab_Moga-wheat',
        name: 'IND_Punjab_Moga Wheat',
        crop: 'Wheat',
        location: {
            lat: 75.1700,
            lng: 30.8200,
            country: 'IND',
            countryName: 'India',
            region: 'IND_Punjab_Moga'
        },
        risk: 99.9,
        confidence: 85,
        ndviMean: 0.139,
        dataSource: 'model'
    },
    {
        id: 'ind-IND_Punjab_Bathinda-wheat',
        name: 'IND_Punjab_Bathinda Wheat',
        crop: 'Wheat',
        location: {
            lat: 74.9500,
            lng: 30.2100,
            country: 'IND',
            countryName: 'India',
            region: 'IND_Punjab_Bathinda'
        },
        risk: 100.0,
        confidence: 88,
        ndviMean: 0.082,
        dataSource: 'model'
    },
    {
        id: 'ind-IND_Punjab_Patiala-wheat',
        name: 'IND_Punjab_Patiala Wheat',
        crop: 'Wheat',
        location: {
            lat: 76.3800,
            lng: 30.3400,
            country: 'IND',
            countryName: 'India',
            region: 'IND_Punjab_Patiala'
        },
        risk: 99.8,
        confidence: 88,
        ndviMean: 0.147,
        dataSource: 'model'
    },
    {
        id: 'ind-IND_Punjab_Amritsar-wheat',
        name: 'IND_Punjab_Amritsar Wheat',
        crop: 'Wheat',
        location: {
            lat: 74.8700,
            lng: 31.6300,
            country: 'IND',
            countryName: 'India',
            region: 'IND_Punjab_Amritsar'
        },
        risk: 99.8,
        confidence: 88,
        ndviMean: 0.146,
        dataSource: 'model'
    },
    {
        id: 'ind-IND_Punjab_Hoshiarpur-wheat',
        name: 'IND_Punjab_Hoshiarpur Wheat',
        crop: 'Wheat',
        location: {
            lat: 75.9100,
            lng: 31.5300,
            country: 'IND',
            countryName: 'India',
            region: 'IND_Punjab_Hoshiarpur'
        },
        risk: 100.0,
        confidence: 88,
        ndviMean: 0.088,
        dataSource: 'model'
    },
    {
        id: 'ind-IND_Punjab_Sangrur-wheat',
        name: 'IND_Punjab_Sangrur Wheat',
        crop: 'Wheat',
        location: {
            lat: 75.8400,
            lng: 30.2300,
            country: 'IND',
            countryName: 'India',
            region: 'IND_Punjab_Sangrur'
        },
        risk: 0.0,
        confidence: 85,
        ndviMean: 0.203,
        dataSource: 'model'
    },
    {
        id: 'ind-IND_Punjab_Ferozepur-wheat',
        name: 'IND_Punjab_Ferozepur Wheat',
        crop: 'Wheat',
        location: {
            lat: 74.6100,
            lng: 30.9300,
            country: 'IND',
            countryName: 'India',
            region: 'IND_Punjab_Ferozepur'
        },
        risk: 0.0,
        confidence: 88,
        ndviMean: 0.251,
        dataSource: 'model'
    },
    {
        id: 'ind-IND_Punjab_Gurdaspur-wheat',
        name: 'IND_Punjab_Gurdaspur Wheat',
        crop: 'Wheat',
        location: {
            lat: 75.4000,
            lng: 32.0400,
            country: 'IND',
            countryName: 'India',
            region: 'IND_Punjab_Gurdaspur'
        },
        risk: 100.0,
        confidence: 88,
        ndviMean: 0.136,
        dataSource: 'model'
    },
    {
        id: 'ind-IND_Punjab_Ludhiana_Rice-rice',
        name: 'IND_Punjab_Ludhiana_Rice Rice',
        crop: 'Rice',
        location: {
            lat: 75.8500,
            lng: 30.9000,
            country: 'IND',
            countryName: 'India',
            region: 'IND_Punjab_Ludhiana_Rice'
        },
        risk: 0.0,
        confidence: 88,
        ndviMean: 0.182,
        dataSource: 'model'
    },
    {
        id: 'ind-IND_Punjab_Amritsar_Rice-rice',
        name: 'IND_Punjab_Amritsar_Rice Rice',
        crop: 'Rice',
        location: {
            lat: 74.8700,
            lng: 31.6300,
            country: 'IND',
            countryName: 'India',
            region: 'IND_Punjab_Amritsar_Rice'
        },
        risk: 0.0,
        confidence: 85,
        ndviMean: 0.183,
        dataSource: 'model'
    },
    {
        id: 'ind-IND_Punjab_Patiala_Rice-rice',
        name: 'IND_Punjab_Patiala_Rice Rice',
        crop: 'Rice',
        location: {
            lat: 76.3800,
            lng: 30.3400,
            country: 'IND',
            countryName: 'India',
            region: 'IND_Punjab_Patiala_Rice'
        },
        risk: 0.1,
        confidence: 88,
        ndviMean: 0.167,
        dataSource: 'model'
    },
    {
        id: 'ind-IND_Haryana_Kurukshetra-wheat',
        name: 'IND_Haryana_Kurukshetra Wheat',
        crop: 'Wheat',
        location: {
            lat: 76.8300,
            lng: 29.9700,
            country: 'IND',
            countryName: 'India',
            region: 'IND_Haryana_Kurukshetra'
        },
        risk: 100.0,
        confidence: 85,
        ndviMean: 0.102,
        dataSource: 'model'
    },
    {
        id: 'ind-IND_Haryana_Ambala-wheat',
        name: 'IND_Haryana_Ambala Wheat',
        crop: 'Wheat',
        location: {
            lat: 76.7800,
            lng: 30.3800,
            country: 'IND',
            countryName: 'India',
            region: 'IND_Haryana_Ambala'
        },
        risk: 0.0,
        confidence: 85,
        ndviMean: 0.188,
        dataSource: 'model'
    },
    {
        id: 'ind-IND_Punjab_Sangrur_Rice-rice',
        name: 'IND_Punjab_Sangrur_Rice Rice',
        crop: 'Rice',
        location: {
            lat: 75.8400,
            lng: 30.2300,
            country: 'IND',
            countryName: 'India',
            region: 'IND_Punjab_Sangrur_Rice'
        },
        risk: 0.0,
        confidence: 88,
        ndviMean: 0.235,
        dataSource: 'model'
    },
    {
        id: 'ind-IND_Haryana_Fatehabad-wheat',
        name: 'IND_Haryana_Fatehabad Wheat',
        crop: 'Wheat',
        location: {
            lat: 75.4500,
            lng: 29.5200,
            country: 'IND',
            countryName: 'India',
            region: 'IND_Haryana_Fatehabad'
        },
        risk: 100.0,
        confidence: 88,
        ndviMean: 0.111,
        dataSource: 'model'
    },
    {
        id: 'ind-IND_Haryana_Hisar-wheat',
        name: 'IND_Haryana_Hisar Wheat',
        crop: 'Wheat',
        location: {
            lat: 75.7200,
            lng: 29.1500,
            country: 'IND',
            countryName: 'India',
            region: 'IND_Haryana_Hisar'
        },
        risk: 0.0,
        confidence: 88,
        ndviMean: 0.219,
        dataSource: 'model'
    },
    {
        id: 'ind-IND_Haryana_Sonipat-wheat',
        name: 'IND_Haryana_Sonipat Wheat',
        crop: 'Wheat',
        location: {
            lat: 77.0200,
            lng: 28.9900,
            country: 'IND',
            countryName: 'India',
            region: 'IND_Haryana_Sonipat'
        },
        risk: 100.0,
        confidence: 79,
        ndviMean: 0.12,
        dataSource: 'model'
    },
    {
        id: 'ind-IND_Haryana_Sirsa-wheat',
        name: 'IND_Haryana_Sirsa Wheat',
        crop: 'Wheat',
        location: {
            lat: 75.0300,
            lng: 29.5300,
            country: 'IND',
            countryName: 'India',
            region: 'IND_Haryana_Sirsa'
        },
        risk: 100.0,
        confidence: 88,
        ndviMean: 0.072,
        dataSource: 'model'
    },
    {
        id: 'ind-IND_Haryana_Panipat-wheat',
        name: 'IND_Haryana_Panipat Wheat',
        crop: 'Wheat',
        location: {
            lat: 76.9700,
            lng: 29.3900,
            country: 'IND',
            countryName: 'India',
            region: 'IND_Haryana_Panipat'
        },
        risk: 100.0,
        confidence: 85,
        ndviMean: 0.081,
        dataSource: 'model'
    },
    {
        id: 'ind-IND_Haryana_Jind-wheat',
        name: 'IND_Haryana_Jind Wheat',
        crop: 'Wheat',
        location: {
            lat: 76.3200,
            lng: 29.3200,
            country: 'IND',
            countryName: 'India',
            region: 'IND_Haryana_Jind'
        },
        risk: 100.0,
        confidence: 85,
        ndviMean: 0.106,
        dataSource: 'model'
    },
    {
        id: 'ind-IND_Haryana_Kaithal-wheat',
        name: 'IND_Haryana_Kaithal Wheat',
        crop: 'Wheat',
        location: {
            lat: 76.4000,
            lng: 29.8000,
            country: 'IND',
            countryName: 'India',
            region: 'IND_Haryana_Kaithal'
        },
        risk: 99.9,
        confidence: 79,
        ndviMean: 0.148,
        dataSource: 'model'
    },
    {
        id: 'ind-IND_Haryana_Kurukshetra_Rice-rice',
        name: 'IND_Haryana_Kurukshetra_Rice Rice',
        crop: 'Rice',
        location: {
            lat: 76.8300,
            lng: 29.9700,
            country: 'IND',
            countryName: 'India',
            region: 'IND_Haryana_Kurukshetra_Rice'
        },
        risk: 100.0,
        confidence: 88,
        ndviMean: 0.128,
        dataSource: 'model'
    },
    {
        id: 'ind-IND_UP_Meerut-wheat',
        name: 'IND_UP_Meerut Wheat',
        crop: 'Wheat',
        location: {
            lat: 77.7000,
            lng: 28.9800,
            country: 'IND',
            countryName: 'India',
            region: 'IND_UP_Meerut'
        },
        risk: 100.0,
        confidence: 85,
        ndviMean: 0.08,
        dataSource: 'model'
    },
    {
        id: 'ind-IND_UP_Aligarh-wheat',
        name: 'IND_UP_Aligarh Wheat',
        crop: 'Wheat',
        location: {
            lat: 78.0800,
            lng: 27.8800,
            country: 'IND',
            countryName: 'India',
            region: 'IND_UP_Aligarh'
        },
        risk: 100.0,
        confidence: 85,
        ndviMean: 0.124,
        dataSource: 'model'
    },
    {
        id: 'ind-IND_UP_Agra-wheat',
        name: 'IND_UP_Agra Wheat',
        crop: 'Wheat',
        location: {
            lat: 78.0200,
            lng: 27.1800,
            country: 'IND',
            countryName: 'India',
            region: 'IND_UP_Agra'
        },
        risk: 0.0,
        confidence: 88,
        ndviMean: 0.185,
        dataSource: 'model'
    },
    {
        id: 'ind-IND_UP_Muzaffarnagar-wheat',
        name: 'IND_UP_Muzaffarnagar Wheat',
        crop: 'Wheat',
        location: {
            lat: 77.7000,
            lng: 29.4700,
            country: 'IND',
            countryName: 'India',
            region: 'IND_UP_Muzaffarnagar'
        },
        risk: 100.0,
        confidence: 85,
        ndviMean: 0.119,
        dataSource: 'model'
    },
    {
        id: 'ind-IND_UP_Saharanpur-wheat',
        name: 'IND_UP_Saharanpur Wheat',
        crop: 'Wheat',
        location: {
            lat: 77.5500,
            lng: 29.9700,
            country: 'IND',
            countryName: 'India',
            region: 'IND_UP_Saharanpur'
        },
        risk: 100.0,
        confidence: 88,
        ndviMean: 0.087,
        dataSource: 'model'
    },
    {
        id: 'ind-IND_UP_Bulandshahr-wheat',
        name: 'IND_UP_Bulandshahr Wheat',
        crop: 'Wheat',
        location: {
            lat: 77.8500,
            lng: 28.4100,
            country: 'IND',
            countryName: 'India',
            region: 'IND_UP_Bulandshahr'
        },
        risk: 100.0,
        confidence: 79,
        ndviMean: 0.074,
        dataSource: 'model'
    },
    {
        id: 'ind-IND_UP_Lucknow-wheat',
        name: 'IND_UP_Lucknow Wheat',
        crop: 'Wheat',
        location: {
            lat: 80.9500,
            lng: 26.8500,
            country: 'IND',
            countryName: 'India',
            region: 'IND_UP_Lucknow'
        },
        risk: 0.3,
        confidence: 88,
        ndviMean: 0.155,
        dataSource: 'model'
    },
    {
        id: 'ind-IND_UP_Mathura-wheat',
        name: 'IND_UP_Mathura Wheat',
        crop: 'Wheat',
        location: {
            lat: 77.6800,
            lng: 27.4900,
            country: 'IND',
            countryName: 'India',
            region: 'IND_UP_Mathura'
        },
        risk: 100.0,
        confidence: 88,
        ndviMean: 0.137,
        dataSource: 'model'
    },
    {
        id: 'ind-IND_UP_Bareilly-wheat',
        name: 'IND_UP_Bareilly Wheat',
        crop: 'Wheat',
        location: {
            lat: 79.4200,
            lng: 28.3600,
            country: 'IND',
            countryName: 'India',
            region: 'IND_UP_Bareilly'
        },
        risk: 100.0,
        confidence: 88,
        ndviMean: 0.077,
        dataSource: 'model'
    },
    {
        id: 'ind-IND_UP_Moradabad-wheat',
        name: 'IND_UP_Moradabad Wheat',
        crop: 'Wheat',
        location: {
            lat: 78.7800,
            lng: 28.8300,
            country: 'IND',
            countryName: 'India',
            region: 'IND_UP_Moradabad'
        },
        risk: 100.0,
        confidence: 88,
        ndviMean: 0.067,
        dataSource: 'model'
    },
    {
        id: 'ind-IND_UP_Kanpur-wheat',
        name: 'IND_UP_Kanpur Wheat',
        crop: 'Wheat',
        location: {
            lat: 80.3500,
            lng: 26.4500,
            country: 'IND',
            countryName: 'India',
            region: 'IND_UP_Kanpur'
        },
        risk: 100.0,
        confidence: 88,
        ndviMean: 0.124,
        dataSource: 'model'
    },
    {
        id: 'ind-IND_UP_Varanasi-wheat',
        name: 'IND_UP_Varanasi Wheat',
        crop: 'Wheat',
        location: {
            lat: 83.0000,
            lng: 25.3200,
            country: 'IND',
            countryName: 'India',
            region: 'IND_UP_Varanasi'
        },
        risk: 100.0,
        confidence: 88,
        ndviMean: 0.091,
        dataSource: 'model'
    },
    {
        id: 'ind-IND_UP_Deoria-rice',
        name: 'IND_UP_Deoria Rice',
        crop: 'Rice',
        location: {
            lat: 83.7800,
            lng: 26.5000,
            country: 'IND',
            countryName: 'India',
            region: 'IND_UP_Deoria'
        },
        risk: 0.0,
        confidence: 85,
        ndviMean: 0.21,
        dataSource: 'model'
    },
    {
        id: 'ind-IND_UP_Gorakhpur-rice',
        name: 'IND_UP_Gorakhpur Rice',
        crop: 'Rice',
        location: {
            lat: 83.3700,
            lng: 26.7600,
            country: 'IND',
            countryName: 'India',
            region: 'IND_UP_Gorakhpur'
        },
        risk: 0.2,
        confidence: 85,
        ndviMean: 0.156,
        dataSource: 'model'
    },
    {
        id: 'ind-IND_UP_Allahabad-wheat',
        name: 'IND_UP_Allahabad Wheat',
        crop: 'Wheat',
        location: {
            lat: 81.8500,
            lng: 25.4300,
            country: 'IND',
            countryName: 'India',
            region: 'IND_UP_Allahabad'
        },
        risk: 100.0,
        confidence: 88,
        ndviMean: 0.124,
        dataSource: 'model'
    },
    {
        id: 'ind-IND_UP_Azamgarh-rice',
        name: 'IND_UP_Azamgarh Rice',
        crop: 'Rice',
        location: {
            lat: 83.1800,
            lng: 26.0700,
            country: 'IND',
            countryName: 'India',
            region: 'IND_UP_Azamgarh'
        },
        risk: 0.0,
        confidence: 85,
        ndviMean: 0.172,
        dataSource: 'model'
    },
    {
        id: 'ind-IND_MP_Indore-soy',
        name: 'IND_MP_Indore Soy',
        crop: 'Soy',
        location: {
            lat: 75.8600,
            lng: 22.7200,
            country: 'IND',
            countryName: 'India',
            region: 'IND_MP_Indore'
        },
        risk: 100.0,
        confidence: 82,
        ndviMean: 0.108,
        dataSource: 'model'
    },
    {
        id: 'ind-IND_MP_Ujjain-soy',
        name: 'IND_MP_Ujjain Soy',
        crop: 'Soy',
        location: {
            lat: 75.7800,
            lng: 23.1800,
            country: 'IND',
            countryName: 'India',
            region: 'IND_MP_Ujjain'
        },
        risk: 100.0,
        confidence: 79,
        ndviMean: 0.133,
        dataSource: 'model'
    },
    {
        id: 'ind-IND_UP_Basti-rice',
        name: 'IND_UP_Basti Rice',
        crop: 'Rice',
        location: {
            lat: 82.7300,
            lng: 26.8000,
            country: 'IND',
            countryName: 'India',
            region: 'IND_UP_Basti'
        },
        risk: 0.0,
        confidence: 88,
        ndviMean: 0.2,
        dataSource: 'model'
    },
    {
        id: 'ind-IND_MP_Ratlam-soy',
        name: 'IND_MP_Ratlam Soy',
        crop: 'Soy',
        location: {
            lat: 75.0400,
            lng: 23.3300,
            country: 'IND',
            countryName: 'India',
            region: 'IND_MP_Ratlam'
        },
        risk: 0.0,
        confidence: 82,
        ndviMean: 0.176,
        dataSource: 'model'
    },
    {
        id: 'ind-IND_MP_Dewas-soy',
        name: 'IND_MP_Dewas Soy',
        crop: 'Soy',
        location: {
            lat: 76.0500,
            lng: 22.9700,
            country: 'IND',
            countryName: 'India',
            region: 'IND_MP_Dewas'
        },
        risk: 0.2,
        confidence: 82,
        ndviMean: 0.154,
        dataSource: 'model'
    },
    {
        id: 'ind-IND_MP_Mandsaur-soy',
        name: 'IND_MP_Mandsaur Soy',
        crop: 'Soy',
        location: {
            lat: 75.0700,
            lng: 24.0700,
            country: 'IND',
            countryName: 'India',
            region: 'IND_MP_Mandsaur'
        },
        risk: 0.2,
        confidence: 82,
        ndviMean: 0.164,
        dataSource: 'model'
    },
    {
        id: 'ind-IND_MP_Sehore-soy',
        name: 'IND_MP_Sehore Soy',
        crop: 'Soy',
        location: {
            lat: 77.0800,
            lng: 23.2000,
            country: 'IND',
            countryName: 'India',
            region: 'IND_MP_Sehore'
        },
        risk: 0.0,
        confidence: 79,
        ndviMean: 0.2,
        dataSource: 'model'
    },
    {
        id: 'ind-IND_MP_Neemuch-soy',
        name: 'IND_MP_Neemuch Soy',
        crop: 'Soy',
        location: {
            lat: 74.8700,
            lng: 24.4700,
            country: 'IND',
            countryName: 'India',
            region: 'IND_MP_Neemuch'
        },
        risk: 0.0,
        confidence: 82,
        ndviMean: 0.251,
        dataSource: 'model'
    },
    {
        id: 'ind-IND_MP_Hoshangabad-soy',
        name: 'IND_MP_Hoshangabad Soy',
        crop: 'Soy',
        location: {
            lat: 77.7200,
            lng: 22.7500,
            country: 'IND',
            countryName: 'India',
            region: 'IND_MP_Hoshangabad'
        },
        risk: 0.0,
        confidence: 79,
        ndviMean: 0.22,
        dataSource: 'model'
    },
    {
        id: 'ind-IND_MP_Shajapur-soy',
        name: 'IND_MP_Shajapur Soy',
        crop: 'Soy',
        location: {
            lat: 76.2700,
            lng: 23.4300,
            country: 'IND',
            countryName: 'India',
            region: 'IND_MP_Shajapur'
        },
        risk: 0.0,
        confidence: 82,
        ndviMean: 0.279,
        dataSource: 'model'
    },
    {
        id: 'ind-IND_MP_Gwalior-wheat',
        name: 'IND_MP_Gwalior Wheat',
        crop: 'Wheat',
        location: {
            lat: 78.1800,
            lng: 26.2200,
            country: 'IND',
            countryName: 'India',
            region: 'IND_MP_Gwalior'
        },
        risk: 0.1,
        confidence: 88,
        ndviMean: 0.175,
        dataSource: 'model'
    },
    {
        id: 'ind-IND_MH_Akola-soy',
        name: 'IND_MH_Akola Soy',
        crop: 'Soy',
        location: {
            lat: 77.0000,
            lng: 20.7000,
            country: 'IND',
            countryName: 'India',
            region: 'IND_MH_Akola'
        },
        risk: 0.0,
        confidence: 79,
        ndviMean: 0.285,
        dataSource: 'model'
    },
    {
        id: 'ind-IND_MH_Amravati-soy',
        name: 'IND_MH_Amravati Soy',
        crop: 'Soy',
        location: {
            lat: 77.7500,
            lng: 20.9300,
            country: 'IND',
            countryName: 'India',
            region: 'IND_MH_Amravati'
        },
        risk: 100.0,
        confidence: 79,
        ndviMean: 0.094,
        dataSource: 'model'
    },
    {
        id: 'ind-IND_MH_Washim-soy',
        name: 'IND_MH_Washim Soy',
        crop: 'Soy',
        location: {
            lat: 77.1300,
            lng: 20.1100,
            country: 'IND',
            countryName: 'India',
            region: 'IND_MH_Washim'
        },
        risk: 0.0,
        confidence: 79,
        ndviMean: 0.226,
        dataSource: 'model'
    },
    {
        id: 'ind-IND_MP_Vidisha-wheat',
        name: 'IND_MP_Vidisha Wheat',
        crop: 'Wheat',
        location: {
            lat: 77.8200,
            lng: 23.5200,
            country: 'IND',
            countryName: 'India',
            region: 'IND_MP_Vidisha'
        },
        risk: 0.0,
        confidence: 88,
        ndviMean: 0.238,
        dataSource: 'model'
    },
    {
        id: 'ind-IND_MH_Yavatmal-soy',
        name: 'IND_MH_Yavatmal Soy',
        crop: 'Soy',
        location: {
            lat: 78.1200,
            lng: 20.3900,
            country: 'IND',
            countryName: 'India',
            region: 'IND_MH_Yavatmal'
        },
        risk: 0.0,
        confidence: 82,
        ndviMean: 0.286,
        dataSource: 'model'
    },
    {
        id: 'ind-IND_MP_Bhopal-wheat',
        name: 'IND_MP_Bhopal Wheat',
        crop: 'Wheat',
        location: {
            lat: 77.4100,
            lng: 23.2600,
            country: 'IND',
            countryName: 'India',
            region: 'IND_MP_Bhopal'
        },
        risk: 100.0,
        confidence: 88,
        ndviMean: 0.118,
        dataSource: 'model'
    },
    {
        id: 'ind-IND_MH_Nagpur-soy',
        name: 'IND_MH_Nagpur Soy',
        crop: 'Soy',
        location: {
            lat: 79.0800,
            lng: 21.1500,
            country: 'IND',
            countryName: 'India',
            region: 'IND_MH_Nagpur'
        },
        risk: 0.0,
        confidence: 82,
        ndviMean: 0.23,
        dataSource: 'model'
    },
    {
        id: 'ind-IND_MH_Osmanabad-soy',
        name: 'IND_MH_Osmanabad Soy',
        crop: 'Soy',
        location: {
            lat: 76.0400,
            lng: 18.1800,
            country: 'IND',
            countryName: 'India',
            region: 'IND_MH_Osmanabad'
        },
        risk: 100.0,
        confidence: 79,
        ndviMean: 0.124,
        dataSource: 'model'
    },
    {
        id: 'ind-IND_MP_Sagar-wheat',
        name: 'IND_MP_Sagar Wheat',
        crop: 'Wheat',
        location: {
            lat: 78.7400,
            lng: 23.8400,
            country: 'IND',
            countryName: 'India',
            region: 'IND_MP_Sagar'
        },
        risk: 100.0,
        confidence: 88,
        ndviMean: 0.077,
        dataSource: 'model'
    },
    {
        id: 'ind-IND_MH_Nanded-soy',
        name: 'IND_MH_Nanded Soy',
        crop: 'Soy',
        location: {
            lat: 77.3000,
            lng: 19.1500,
            country: 'IND',
            countryName: 'India',
            region: 'IND_MH_Nanded'
        },
        risk: 0.0,
        confidence: 82,
        ndviMean: 0.305,
        dataSource: 'model'
    },
    {
        id: 'ind-IND_MH_Wardha-soy',
        name: 'IND_MH_Wardha Soy',
        crop: 'Soy',
        location: {
            lat: 78.6000,
            lng: 20.7500,
            country: 'IND',
            countryName: 'India',
            region: 'IND_MH_Wardha'
        },
        risk: 99.9,
        confidence: 82,
        ndviMean: 0.14,
        dataSource: 'model'
    },
    {
        id: 'ind-IND_MH_Buldhana-soy',
        name: 'IND_MH_Buldhana Soy',
        crop: 'Soy',
        location: {
            lat: 76.1800,
            lng: 20.5300,
            country: 'IND',
            countryName: 'India',
            region: 'IND_MH_Buldhana'
        },
        risk: 0.0,
        confidence: 82,
        ndviMean: 0.226,
        dataSource: 'model'
    },
    {
        id: 'ind-IND_MH_Parbhani-soy',
        name: 'IND_MH_Parbhani Soy',
        crop: 'Soy',
        location: {
            lat: 76.7800,
            lng: 19.2700,
            country: 'IND',
            countryName: 'India',
            region: 'IND_MH_Parbhani'
        },
        risk: 0.1,
        confidence: 79,
        ndviMean: 0.168,
        dataSource: 'model'
    },
    {
        id: 'ind-IND_MH_Jalna-soy',
        name: 'IND_MH_Jalna Soy',
        crop: 'Soy',
        location: {
            lat: 75.8800,
            lng: 19.8400,
            country: 'IND',
            countryName: 'India',
            region: 'IND_MH_Jalna'
        },
        risk: 100.0,
        confidence: 79,
        ndviMean: 0.112,
        dataSource: 'model'
    },
    {
        id: 'ind-IND_MH_Aurangabad-soy',
        name: 'IND_MH_Aurangabad Soy',
        crop: 'Soy',
        location: {
            lat: 75.3400,
            lng: 19.8800,
            country: 'IND',
            countryName: 'India',
            region: 'IND_MH_Aurangabad'
        },
        risk: 100.0,
        confidence: 82,
        ndviMean: 0.104,
        dataSource: 'model'
    },
    {
        id: 'ind-IND_RJ_Churu-wheat',
        name: 'IND_RJ_Churu Wheat',
        crop: 'Wheat',
        location: {
            lat: 74.9700,
            lng: 28.3000,
            country: 'IND',
            countryName: 'India',
            region: 'IND_RJ_Churu'
        },
        risk: 100.0,
        confidence: 88,
        ndviMean: 0.1,
        dataSource: 'model'
    },
    {
        id: 'ind-IND_RJ_Ganganagar-wheat',
        name: 'IND_RJ_Ganganagar Wheat',
        crop: 'Wheat',
        location: {
            lat: 73.8800,
            lng: 29.9200,
            country: 'IND',
            countryName: 'India',
            region: 'IND_RJ_Ganganagar'
        },
        risk: 100.0,
        confidence: 79,
        ndviMean: 0.097,
        dataSource: 'model'
    },
    {
        id: 'ind-IND_RJ_Jaipur-wheat',
        name: 'IND_RJ_Jaipur Wheat',
        crop: 'Wheat',
        location: {
            lat: 75.7900,
            lng: 26.9200,
            country: 'IND',
            countryName: 'India',
            region: 'IND_RJ_Jaipur'
        },
        risk: 100.0,
        confidence: 88,
        ndviMean: 0.127,
        dataSource: 'model'
    },
    {
        id: 'ind-IND_RJ_Sikar-wheat',
        name: 'IND_RJ_Sikar Wheat',
        crop: 'Wheat',
        location: {
            lat: 75.1400,
            lng: 27.6200,
            country: 'IND',
            countryName: 'India',
            region: 'IND_RJ_Sikar'
        },
        risk: 100.0,
        confidence: 88,
        ndviMean: 0.084,
        dataSource: 'model'
    },
    {
        id: 'ind-IND_RJ_Bharatpur-wheat',
        name: 'IND_RJ_Bharatpur Wheat',
        crop: 'Wheat',
        location: {
            lat: 77.4900,
            lng: 27.2200,
            country: 'IND',
            countryName: 'India',
            region: 'IND_RJ_Bharatpur'
        },
        risk: 100.0,
        confidence: 85,
        ndviMean: 0.094,
        dataSource: 'model'
    },
    {
        id: 'ind-IND_RJ_Alwar-wheat',
        name: 'IND_RJ_Alwar Wheat',
        crop: 'Wheat',
        location: {
            lat: 76.6100,
            lng: 27.5600,
            country: 'IND',
            countryName: 'India',
            region: 'IND_RJ_Alwar'
        },
        risk: 0.0,
        confidence: 88,
        ndviMean: 0.217,
        dataSource: 'model'
    },
    {
        id: 'ind-IND_RJ_Jhunjhunu-wheat',
        name: 'IND_RJ_Jhunjhunu Wheat',
        crop: 'Wheat',
        location: {
            lat: 75.4000,
            lng: 28.1300,
            country: 'IND',
            countryName: 'India',
            region: 'IND_RJ_Jhunjhunu'
        },
        risk: 100.0,
        confidence: 88,
        ndviMean: 0.129,
        dataSource: 'model'
    },
    {
        id: 'ind-IND_RJ_Kota-soy',
        name: 'IND_RJ_Kota Soy',
        crop: 'Soy',
        location: {
            lat: 75.8300,
            lng: 25.1800,
            country: 'IND',
            countryName: 'India',
            region: 'IND_RJ_Kota'
        },
        risk: 100.0,
        confidence: 82,
        ndviMean: 0.048,
        dataSource: 'model'
    },
    {
        id: 'ind-IND_RJ_Hanumangarh-wheat',
        name: 'IND_RJ_Hanumangarh Wheat',
        crop: 'Wheat',
        location: {
            lat: 74.3300,
            lng: 29.5800,
            country: 'IND',
            countryName: 'India',
            region: 'IND_RJ_Hanumangarh'
        },
        risk: 100.0,
        confidence: 88,
        ndviMean: 0.067,
        dataSource: 'model'
    },
    {
        id: 'ind-IND_RJ_Bundi-soy',
        name: 'IND_RJ_Bundi Soy',
        crop: 'Soy',
        location: {
            lat: 75.6400,
            lng: 25.4400,
            country: 'IND',
            countryName: 'India',
            region: 'IND_RJ_Bundi'
        },
        risk: 100.0,
        confidence: 82,
        ndviMean: 0.116,
        dataSource: 'model'
    },
    {
        id: 'ind-IND_RJ_Jhalawar-soy',
        name: 'IND_RJ_Jhalawar Soy',
        crop: 'Soy',
        location: {
            lat: 76.1600,
            lng: 24.6000,
            country: 'IND',
            countryName: 'India',
            region: 'IND_RJ_Jhalawar'
        },
        risk: 0.0,
        confidence: 82,
        ndviMean: 0.195,
        dataSource: 'model'
    },
    {
        id: 'ind-IND_BR_Patna-rice',
        name: 'IND_BR_Patna Rice',
        crop: 'Rice',
        location: {
            lat: 85.1400,
            lng: 25.6100,
            country: 'IND',
            countryName: 'India',
            region: 'IND_BR_Patna'
        },
        risk: 100.0,
        confidence: 88,
        ndviMean: 0.096,
        dataSource: 'model'
    },
    {
        id: 'ind-IND_RJ_Baran-soy',
        name: 'IND_RJ_Baran Soy',
        crop: 'Soy',
        location: {
            lat: 76.5200,
            lng: 25.1000,
            country: 'IND',
            countryName: 'India',
            region: 'IND_RJ_Baran'
        },
        risk: 0.0,
        confidence: 82,
        ndviMean: 0.186,
        dataSource: 'model'
    },
    {
        id: 'ind-IND_BR_Muzaffarpur-rice',
        name: 'IND_BR_Muzaffarpur Rice',
        crop: 'Rice',
        location: {
            lat: 85.3900,
            lng: 26.1200,
            country: 'IND',
            countryName: 'India',
            region: 'IND_BR_Muzaffarpur'
        },
        risk: 100.0,
        confidence: 85,
        ndviMean: 0.127,
        dataSource: 'model'
    },
    {
        id: 'ind-IND_BR_Vaishali-rice',
        name: 'IND_BR_Vaishali Rice',
        crop: 'Rice',
        location: {
            lat: 85.2200,
            lng: 25.9900,
            country: 'IND',
            countryName: 'India',
            region: 'IND_BR_Vaishali'
        },
        risk: 0.0,
        confidence: 88,
        ndviMean: 0.339,
        dataSource: 'model'
    },
    {
        id: 'ind-IND_BR_Siwan-rice',
        name: 'IND_BR_Siwan Rice',
        crop: 'Rice',
        location: {
            lat: 84.3600,
            lng: 26.2200,
            country: 'IND',
            countryName: 'India',
            region: 'IND_BR_Siwan'
        },
        risk: 100.0,
        confidence: 85,
        ndviMean: 0.099,
        dataSource: 'model'
    },
    {
        id: 'ind-IND_BR_Gopalganj-rice',
        name: 'IND_BR_Gopalganj Rice',
        crop: 'Rice',
        location: {
            lat: 84.4400,
            lng: 26.4700,
            country: 'IND',
            countryName: 'India',
            region: 'IND_BR_Gopalganj'
        },
        risk: 100.0,
        confidence: 82,
        ndviMean: 0.134,
        dataSource: 'model'
    },
    {
        id: 'ind-IND_BR_Darbhanga-wheat',
        name: 'IND_BR_Darbhanga Wheat',
        crop: 'Wheat',
        location: {
            lat: 85.9000,
            lng: 26.1700,
            country: 'IND',
            countryName: 'India',
            region: 'IND_BR_Darbhanga'
        },
        risk: 0.0,
        confidence: 88,
        ndviMean: 0.219,
        dataSource: 'model'
    },
    {
        id: 'ind-IND_BR_Begusarai-wheat',
        name: 'IND_BR_Begusarai Wheat',
        crop: 'Wheat',
        location: {
            lat: 86.1300,
            lng: 25.4200,
            country: 'IND',
            countryName: 'India',
            region: 'IND_BR_Begusarai'
        },
        risk: 100.0,
        confidence: 88,
        ndviMean: 0.119,
        dataSource: 'model'
    },
    {
        id: 'ind-IND_WB_Bardhaman-rice',
        name: 'IND_WB_Bardhaman Rice',
        crop: 'Rice',
        location: {
            lat: 87.8700,
            lng: 23.2300,
            country: 'IND',
            countryName: 'India',
            region: 'IND_WB_Bardhaman'
        },
        risk: 0.0,
        confidence: 82,
        ndviMean: 0.241,
        dataSource: 'model'
    },
    {
        id: 'ind-IND_BR_Saran-rice',
        name: 'IND_BR_Saran Rice',
        crop: 'Rice',
        location: {
            lat: 84.7500,
            lng: 25.9100,
            country: 'IND',
            countryName: 'India',
            region: 'IND_BR_Saran'
        },
        risk: 0.0,
        confidence: 82,
        ndviMean: 0.355,
        dataSource: 'model'
    },
    {
        id: 'ind-IND_WB_Hooghly-rice',
        name: 'IND_WB_Hooghly Rice',
        crop: 'Rice',
        location: {
            lat: 88.2400,
            lng: 22.9100,
            country: 'IND',
            countryName: 'India',
            region: 'IND_WB_Hooghly'
        },
        risk: 0.0,
        confidence: 85,
        ndviMean: 0.335,
        dataSource: 'model'
    },
    {
        id: 'ind-IND_BR_Samastipur-wheat',
        name: 'IND_BR_Samastipur Wheat',
        crop: 'Wheat',
        location: {
            lat: 85.7800,
            lng: 25.8600,
            country: 'IND',
            countryName: 'India',
            region: 'IND_BR_Samastipur'
        },
        risk: 0.0,
        confidence: 88,
        ndviMean: 0.192,
        dataSource: 'model'
    },
    {
        id: 'ind-IND_WB_Murshidabad-rice',
        name: 'IND_WB_Murshidabad Rice',
        crop: 'Rice',
        location: {
            lat: 88.2700,
            lng: 24.1800,
            country: 'IND',
            countryName: 'India',
            region: 'IND_WB_Murshidabad'
        },
        risk: 0.0,
        confidence: 88,
        ndviMean: 0.194,
        dataSource: 'model'
    },
    {
        id: 'ind-IND_WB_Nadia-rice',
        name: 'IND_WB_Nadia Rice',
        crop: 'Rice',
        location: {
            lat: 88.5500,
            lng: 23.4700,
            country: 'IND',
            countryName: 'India',
            region: 'IND_WB_Nadia'
        },
        risk: 0.0,
        confidence: 85,
        ndviMean: 0.435,
        dataSource: 'model'
    },
    {
        id: 'ind-IND_WB_MidnaproreW-rice',
        name: 'IND_WB_MidnaproreW Rice',
        crop: 'Rice',
        location: {
            lat: 87.3300,
            lng: 22.4200,
            country: 'IND',
            countryName: 'India',
            region: 'IND_WB_MidnaproreW'
        },
        risk: 0.0,
        confidence: 85,
        ndviMean: 0.221,
        dataSource: 'model'
    },
    {
        id: 'ind-IND_WB_MidnaporeE-rice',
        name: 'IND_WB_MidnaporeE Rice',
        crop: 'Rice',
        location: {
            lat: 87.9200,
            lng: 22.2800,
            country: 'IND',
            countryName: 'India',
            region: 'IND_WB_MidnaporeE'
        },
        risk: 0.0,
        confidence: 82,
        ndviMean: 0.314,
        dataSource: 'model'
    },
    {
        id: 'ind-IND_WB_Birbhum-rice',
        name: 'IND_WB_Birbhum Rice',
        crop: 'Rice',
        location: {
            lat: 87.6200,
            lng: 23.8500,
            country: 'IND',
            countryName: 'India',
            region: 'IND_WB_Birbhum'
        },
        risk: 0.0,
        confidence: 88,
        ndviMean: 0.323,
        dataSource: 'model'
    },
    {
        id: 'ind-IND_AP_WestGodavari-rice',
        name: 'IND_AP_WestGodavari Rice',
        crop: 'Rice',
        location: {
            lat: 81.3300,
            lng: 16.9200,
            country: 'IND',
            countryName: 'India',
            region: 'IND_AP_WestGodavari'
        },
        risk: 0.0,
        confidence: 85,
        ndviMean: 0.483,
        dataSource: 'model'
    },
    {
        id: 'ind-IND_AP_EastGodavari-rice',
        name: 'IND_AP_EastGodavari Rice',
        crop: 'Rice',
        location: {
            lat: 82.0000,
            lng: 17.0000,
            country: 'IND',
            countryName: 'India',
            region: 'IND_AP_EastGodavari'
        },
        risk: 0.1,
        confidence: 88,
        ndviMean: 0.353,
        dataSource: 'model'
    },
    {
        id: 'ind-IND_WB_Bankura-rice',
        name: 'IND_WB_Bankura Rice',
        crop: 'Rice',
        location: {
            lat: 87.0700,
            lng: 23.2300,
            country: 'IND',
            countryName: 'India',
            region: 'IND_WB_Bankura'
        },
        risk: 0.0,
        confidence: 88,
        ndviMean: 0.21,
        dataSource: 'model'
    },
    {
        id: 'ind-IND_TS_Warangal-rice',
        name: 'IND_TS_Warangal Rice',
        crop: 'Rice',
        location: {
            lat: 79.5900,
            lng: 17.9800,
            country: 'IND',
            countryName: 'India',
            region: 'IND_TS_Warangal'
        },
        risk: 0.0,
        confidence: 85,
        ndviMean: 0.266,
        dataSource: 'model'
    },
    {
        id: 'ind-IND_AP_Guntur-rice',
        name: 'IND_AP_Guntur Rice',
        crop: 'Rice',
        location: {
            lat: 80.4500,
            lng: 16.3000,
            country: 'IND',
            countryName: 'India',
            region: 'IND_AP_Guntur'
        },
        risk: 0.1,
        confidence: 85,
        ndviMean: 0.157,
        dataSource: 'model'
    },
    {
        id: 'ind-IND_TS_Nizamabad-rice',
        name: 'IND_TS_Nizamabad Rice',
        crop: 'Rice',
        location: {
            lat: 78.1000,
            lng: 18.6700,
            country: 'IND',
            countryName: 'India',
            region: 'IND_TS_Nizamabad'
        },
        risk: 100.0,
        confidence: 85,
        ndviMean: 0.123,
        dataSource: 'model'
    },
    {
        id: 'ind-IND_TS_Karimnagar-rice',
        name: 'IND_TS_Karimnagar Rice',
        crop: 'Rice',
        location: {
            lat: 79.1300,
            lng: 18.4400,
            country: 'IND',
            countryName: 'India',
            region: 'IND_TS_Karimnagar'
        },
        risk: 100.0,
        confidence: 79,
        ndviMean: 0.136,
        dataSource: 'model'
    },
    {
        id: 'ind-IND_TS_Nalgonda-rice',
        name: 'IND_TS_Nalgonda Rice',
        crop: 'Rice',
        location: {
            lat: 79.2700,
            lng: 17.0500,
            country: 'IND',
            countryName: 'India',
            region: 'IND_TS_Nalgonda'
        },
        risk: 100.0,
        confidence: 82,
        ndviMean: 0.146,
        dataSource: 'model'
    },
    {
        id: 'ind-IND_TN_Thanjavur-rice',
        name: 'IND_TN_Thanjavur Rice',
        crop: 'Rice',
        location: {
            lat: 79.1400,
            lng: 10.7900,
            country: 'IND',
            countryName: 'India',
            region: 'IND_TN_Thanjavur'
        },
        risk: 0.1,
        confidence: 82,
        ndviMean: 0.189,
        dataSource: 'model'
    },
    {
        id: 'ind-IND_TN_Villupuram-rice',
        name: 'IND_TN_Villupuram Rice',
        crop: 'Rice',
        location: {
            lat: 79.4900,
            lng: 11.9400,
            country: 'IND',
            countryName: 'India',
            region: 'IND_TN_Villupuram'
        },
        risk: 0.1,
        confidence: 88,
        ndviMean: 0.186,
        dataSource: 'model'
    },
    {
        id: 'ind-IND_TN_Cuddalore-rice',
        name: 'IND_TN_Cuddalore Rice',
        crop: 'Rice',
        location: {
            lat: 79.7700,
            lng: 11.7500,
            country: 'IND',
            countryName: 'India',
            region: 'IND_TN_Cuddalore'
        },
        risk: 0.0,
        confidence: 88,
        ndviMean: 0.264,
        dataSource: 'model'
    },
    {
        id: 'ind-IND_TN_Tiruvarur-rice',
        name: 'IND_TN_Tiruvarur Rice',
        crop: 'Rice',
        location: {
            lat: 79.6400,
            lng: 10.7700,
            country: 'IND',
            countryName: 'India',
            region: 'IND_TN_Tiruvarur'
        },
        risk: 0.0,
        confidence: 88,
        ndviMean: 0.296,
        dataSource: 'model'
    },
    {
        id: 'ind-IND_TN_Nagapattinam-rice',
        name: 'IND_TN_Nagapattinam Rice',
        crop: 'Rice',
        location: {
            lat: 79.8400,
            lng: 10.7700,
            country: 'IND',
            countryName: 'India',
            region: 'IND_TN_Nagapattinam'
        },
        risk: 0.0,
        confidence: 88,
        ndviMean: 0.225,
        dataSource: 'model'
    },
    {
        id: 'ind-IND_TN_Tiruchirappalli-rice',
        name: 'IND_TN_Tiruchirappalli Rice',
        crop: 'Rice',
        location: {
            lat: 78.6900,
            lng: 10.7900,
            country: 'IND',
            countryName: 'India',
            region: 'IND_TN_Tiruchirappalli'
        },
        risk: 0.0,
        confidence: 79,
        ndviMean: 0.262,
        dataSource: 'model'
    },
    {
        id: 'ind-IND_GJ_Ahmedabad-cotton',
        name: 'IND_GJ_Ahmedabad Cotton',
        crop: 'Cotton',
        location: {
            lat: 72.5800,
            lng: 23.0300,
            country: 'IND',
            countryName: 'India',
            region: 'IND_GJ_Ahmedabad'
        },
        risk: 100.0,
        confidence: 91,
        ndviMean: 0.093,
        dataSource: 'model'
    },
    {
        id: 'ind-IND_GJ_Mehsana-cotton',
        name: 'IND_GJ_Mehsana Cotton',
        crop: 'Cotton',
        location: {
            lat: 72.3800,
            lng: 23.5900,
            country: 'IND',
            countryName: 'India',
            region: 'IND_GJ_Mehsana'
        },
        risk: 100.0,
        confidence: 88,
        ndviMean: 0.1,
        dataSource: 'model'
    },
    {
        id: 'ind-IND_GJ_Sabarkantha-cotton',
        name: 'IND_GJ_Sabarkantha Cotton',
        crop: 'Cotton',
        location: {
            lat: 73.0000,
            lng: 23.6300,
            country: 'IND',
            countryName: 'India',
            region: 'IND_GJ_Sabarkantha'
        },
        risk: 0.0,
        confidence: 85,
        ndviMean: 0.241,
        dataSource: 'model'
    },
    {
        id: 'ind-IND_GJ_Banaskantha-cotton',
        name: 'IND_GJ_Banaskantha Cotton',
        crop: 'Cotton',
        location: {
            lat: 72.4300,
            lng: 24.1800,
            country: 'IND',
            countryName: 'India',
            region: 'IND_GJ_Banaskantha'
        },
        risk: 100.0,
        confidence: 85,
        ndviMean: 0.13,
        dataSource: 'model'
    },
    {
        id: 'ind-IND_GJ_Bharuch-cotton',
        name: 'IND_GJ_Bharuch Cotton',
        crop: 'Cotton',
        location: {
            lat: 72.9900,
            lng: 21.7000,
            country: 'IND',
            countryName: 'India',
            region: 'IND_GJ_Bharuch'
        },
        risk: 100.0,
        confidence: 82,
        ndviMean: 0.151,
        dataSource: 'model'
    },
    {
        id: 'ind-IND_GJ_Vadodara-cotton',
        name: 'IND_GJ_Vadodara Cotton',
        crop: 'Cotton',
        location: {
            lat: 73.1800,
            lng: 22.3100,
            country: 'IND',
            countryName: 'India',
            region: 'IND_GJ_Vadodara'
        },
        risk: 100.0,
        confidence: 88,
        ndviMean: 0.124,
        dataSource: 'model'
    },
    {
        id: 'ind-IND_GJ_Kheda-cotton',
        name: 'IND_GJ_Kheda Cotton',
        crop: 'Cotton',
        location: {
            lat: 72.6800,
            lng: 22.7500,
            country: 'IND',
            countryName: 'India',
            region: 'IND_GJ_Kheda'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.255,
        dataSource: 'model'
    },
    {
        id: 'ind-IND_GJ_Anand-cotton',
        name: 'IND_GJ_Anand Cotton',
        crop: 'Cotton',
        location: {
            lat: 72.9500,
            lng: 22.5600,
            country: 'IND',
            countryName: 'India',
            region: 'IND_GJ_Anand'
        },
        risk: 100.0,
        confidence: 85,
        ndviMean: 0.138,
        dataSource: 'model'
    },
    {
        id: 'ind-IND_KA_Bagalkot-sugarcane',
        name: 'IND_KA_Bagalkot Sugarcane',
        crop: 'Sugarcane',
        location: {
            lat: 75.7000,
            lng: 16.1800,
            country: 'IND',
            countryName: 'India',
            region: 'IND_KA_Bagalkot'
        },
        risk: 99.9,
        confidence: 82,
        ndviMean: 0.15,
        dataSource: 'model'
    },
    {
        id: 'ind-IND_GJ_Junagadh-groundnut',
        name: 'IND_GJ_Junagadh Groundnut',
        crop: 'Groundnut',
        location: {
            lat: 70.4600,
            lng: 21.5200,
            country: 'IND',
            countryName: 'India',
            region: 'IND_GJ_Junagadh'
        },
        risk: 100.0,
        confidence: 85,
        ndviMean: 0.092,
        dataSource: 'model'
    },
    {
        id: 'ind-IND_KA_Belgaum-sugarcane',
        name: 'IND_KA_Belgaum Sugarcane',
        crop: 'Sugarcane',
        location: {
            lat: 74.5000,
            lng: 15.8500,
            country: 'IND',
            countryName: 'India',
            region: 'IND_KA_Belgaum'
        },
        risk: 0.0,
        confidence: 85,
        ndviMean: 0.285,
        dataSource: 'model'
    },
    {
        id: 'ind-IND_KA_Hassan-rice',
        name: 'IND_KA_Hassan Rice',
        crop: 'Rice',
        location: {
            lat: 76.1000,
            lng: 13.0000,
            country: 'IND',
            countryName: 'India',
            region: 'IND_KA_Hassan'
        },
        risk: 99.9,
        confidence: 82,
        ndviMean: 0.147,
        dataSource: 'model'
    },
    {
        id: 'ind-IND_KA_Mysore-rice',
        name: 'IND_KA_Mysore Rice',
        crop: 'Rice',
        location: {
            lat: 76.6400,
            lng: 12.3000,
            country: 'IND',
            countryName: 'India',
            region: 'IND_KA_Mysore'
        },
        risk: 0.0,
        confidence: 85,
        ndviMean: 0.246,
        dataSource: 'model'
    },
    {
        id: 'ind-IND_GJ_Rajkot-cotton',
        name: 'IND_GJ_Rajkot Cotton',
        crop: 'Cotton',
        location: {
            lat: 70.8000,
            lng: 22.3000,
            country: 'IND',
            countryName: 'India',
            region: 'IND_GJ_Rajkot'
        },
        risk: 100.0,
        confidence: 85,
        ndviMean: 0.128,
        dataSource: 'model'
    },
    {
        id: 'ind-IND_KA_Mandya-rice',
        name: 'IND_KA_Mandya Rice',
        crop: 'Rice',
        location: {
            lat: 76.9000,
            lng: 12.5200,
            country: 'IND',
            countryName: 'India',
            region: 'IND_KA_Mandya'
        },
        risk: 99.9,
        confidence: 85,
        ndviMean: 0.149,
        dataSource: 'model'
    },
    {
        id: 'ind-IND_KA_Bellary-rice',
        name: 'IND_KA_Bellary Rice',
        crop: 'Rice',
        location: {
            lat: 76.9200,
            lng: 15.1400,
            country: 'IND',
            countryName: 'India',
            region: 'IND_KA_Bellary'
        },
        risk: 100.0,
        confidence: 85,
        ndviMean: 0.137,
        dataSource: 'model'
    },
    {
        id: 'arg-ARG_BA_Pehuajo-soy',
        name: 'ARG_BA_Pehuajo Soy',
        crop: 'Soy',
        location: {
            lat: -61.9000,
            lng: -35.8100,
            country: 'ARG',
            countryName: 'Argentina',
            region: 'ARG_BA_Pehuajo'
        },
        risk: 100.0,
        confidence: 85,
        ndviMean: 0.115,
        dataSource: 'model'
    },
    {
        id: 'arg-ARG_BA_9deJulio-soy',
        name: 'ARG_BA_9deJulio Soy',
        crop: 'Soy',
        location: {
            lat: -60.8800,
            lng: -35.4500,
            country: 'ARG',
            countryName: 'Argentina',
            region: 'ARG_BA_9deJulio'
        },
        risk: 100.0,
        confidence: 91,
        ndviMean: 0.12,
        dataSource: 'model'
    },
    {
        id: 'arg-ARG_BA_Pergamino-soy',
        name: 'ARG_BA_Pergamino Soy',
        crop: 'Soy',
        location: {
            lat: -60.5700,
            lng: -33.9000,
            country: 'ARG',
            countryName: 'Argentina',
            region: 'ARG_BA_Pergamino'
        },
        risk: 100.0,
        confidence: 91,
        ndviMean: 0.12,
        dataSource: 'model'
    },
    {
        id: 'arg-ARG_BA_Junin-soy',
        name: 'ARG_BA_Junin Soy',
        crop: 'Soy',
        location: {
            lat: -60.9500,
            lng: -34.5900,
            country: 'ARG',
            countryName: 'Argentina',
            region: 'ARG_BA_Junin'
        },
        risk: 100.0,
        confidence: 91,
        ndviMean: 0.1,
        dataSource: 'model'
    },
    {
        id: 'arg-ARG_BA_Carlos_Casares-soy',
        name: 'ARG_BA_Carlos_Casares Soy',
        crop: 'Soy',
        location: {
            lat: -61.3700,
            lng: -35.6200,
            country: 'ARG',
            countryName: 'Argentina',
            region: 'ARG_BA_Carlos_Casares'
        },
        risk: 100.0,
        confidence: 91,
        ndviMean: 0.128,
        dataSource: 'model'
    },
    {
        id: 'arg-ARG_BA_Trenque_Lauquen-soy',
        name: 'ARG_BA_Trenque_Lauquen Soy',
        crop: 'Soy',
        location: {
            lat: -62.7300,
            lng: -35.9700,
            country: 'ARG',
            countryName: 'Argentina',
            region: 'ARG_BA_Trenque_Lauquen'
        },
        risk: 100.0,
        confidence: 91,
        ndviMean: 0.113,
        dataSource: 'model'
    },
    {
        id: 'arg-ARG_BA_ChivilcoyN-soy',
        name: 'ARG_BA_ChivilcoyN Soy',
        crop: 'Soy',
        location: {
            lat: -60.0200,
            lng: -34.9000,
            country: 'ARG',
            countryName: 'Argentina',
            region: 'ARG_BA_ChivilcoyN'
        },
        risk: 100.0,
        confidence: 91,
        ndviMean: 0.108,
        dataSource: 'model'
    },
    {
        id: 'arg-ARG_BA_General_Villegas-soy',
        name: 'ARG_BA_General_Villegas Soy',
        crop: 'Soy',
        location: {
            lat: -63.0200,
            lng: -35.0300,
            country: 'ARG',
            countryName: 'Argentina',
            region: 'ARG_BA_General_Villegas'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.171,
        dataSource: 'model'
    },
    {
        id: 'arg-ARG_BA_Bragado-corn',
        name: 'ARG_BA_Bragado Corn',
        crop: 'Corn',
        location: {
            lat: -60.4900,
            lng: -35.1200,
            country: 'ARG',
            countryName: 'Argentina',
            region: 'ARG_BA_Bragado'
        },
        risk: 100.0,
        confidence: 91,
        ndviMean: 0.13,
        dataSource: 'model'
    },
    {
        id: 'arg-ARG_BA_Lincoln-corn',
        name: 'ARG_BA_Lincoln Corn',
        crop: 'Corn',
        location: {
            lat: -61.5300,
            lng: -34.8700,
            country: 'ARG',
            countryName: 'Argentina',
            region: 'ARG_BA_Lincoln'
        },
        risk: 100.0,
        confidence: 91,
        ndviMean: 0.132,
        dataSource: 'model'
    },
    {
        id: 'arg-ARG_BA_Bolivar-corn',
        name: 'ARG_BA_Bolivar Corn',
        crop: 'Corn',
        location: {
            lat: -61.1000,
            lng: -36.2300,
            country: 'ARG',
            countryName: 'Argentina',
            region: 'ARG_BA_Bolivar'
        },
        risk: 0.0,
        confidence: 88,
        ndviMean: 0.206,
        dataSource: 'model'
    },
    {
        id: 'arg-ARG_CB_Marcos_Juarez-soy',
        name: 'ARG_CB_Marcos_Juarez Soy',
        crop: 'Soy',
        location: {
            lat: -62.1000,
            lng: -32.7000,
            country: 'ARG',
            countryName: 'Argentina',
            region: 'ARG_CB_Marcos_Juarez'
        },
        risk: 100.0,
        confidence: 91,
        ndviMean: 0.133,
        dataSource: 'model'
    },
    {
        id: 'arg-ARG_BA_25deMayo-corn',
        name: 'ARG_BA_25deMayo Corn',
        crop: 'Corn',
        location: {
            lat: -60.1700,
            lng: -35.4300,
            country: 'ARG',
            countryName: 'Argentina',
            region: 'ARG_BA_25deMayo'
        },
        risk: 100.0,
        confidence: 91,
        ndviMean: 0.125,
        dataSource: 'model'
    },
    {
        id: 'arg-ARG_CB_Union-soy',
        name: 'ARG_CB_Union Soy',
        crop: 'Soy',
        location: {
            lat: -62.9000,
            lng: -32.9300,
            country: 'ARG',
            countryName: 'Argentina',
            region: 'ARG_CB_Union'
        },
        risk: 100.0,
        confidence: 91,
        ndviMean: 0.134,
        dataSource: 'model'
    },
    {
        id: 'arg-ARG_CB_General_Roca-soy',
        name: 'ARG_CB_General_Roca Soy',
        crop: 'Soy',
        location: {
            lat: -63.3800,
            lng: -34.7300,
            country: 'ARG',
            countryName: 'Argentina',
            region: 'ARG_CB_General_Roca'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.204,
        dataSource: 'model'
    },
    {
        id: 'arg-ARG_CB_Juarez_Celman-soy',
        name: 'ARG_CB_Juarez_Celman Soy',
        crop: 'Soy',
        location: {
            lat: -63.5000,
            lng: -33.1000,
            country: 'ARG',
            countryName: 'Argentina',
            region: 'ARG_CB_Juarez_Celman'
        },
        risk: 100.0,
        confidence: 91,
        ndviMean: 0.125,
        dataSource: 'model'
    },
    {
        id: 'arg-ARG_CB_San_Martin-corn',
        name: 'ARG_CB_San_Martin Corn',
        crop: 'Corn',
        location: {
            lat: -62.0800,
            lng: -31.5800,
            country: 'ARG',
            countryName: 'Argentina',
            region: 'ARG_CB_San_Martin'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.395,
        dataSource: 'model'
    },
    {
        id: 'arg-ARG_CB_San_Justo-corn',
        name: 'ARG_CB_San_Justo Corn',
        crop: 'Corn',
        location: {
            lat: -62.5300,
            lng: -31.3500,
            country: 'ARG',
            countryName: 'Argentina',
            region: 'ARG_CB_San_Justo'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.257,
        dataSource: 'model'
    },
    {
        id: 'arg-ARG_CB_Rio_Cuarto-soy',
        name: 'ARG_CB_Rio_Cuarto Soy',
        crop: 'Soy',
        location: {
            lat: -64.3500,
            lng: -33.1300,
            country: 'ARG',
            countryName: 'Argentina',
            region: 'ARG_CB_Rio_Cuarto'
        },
        risk: 100.0,
        confidence: 91,
        ndviMean: 0.071,
        dataSource: 'model'
    },
    {
        id: 'arg-ARG_SF_Caseros-soy',
        name: 'ARG_SF_Caseros Soy',
        crop: 'Soy',
        location: {
            lat: -61.1700,
            lng: -33.0500,
            country: 'ARG',
            countryName: 'Argentina',
            region: 'ARG_SF_Caseros'
        },
        risk: 0.1,
        confidence: 91,
        ndviMean: 0.166,
        dataSource: 'model'
    },
    {
        id: 'arg-ARG_SF_Iriondo-corn',
        name: 'ARG_SF_Iriondo Corn',
        crop: 'Corn',
        location: {
            lat: -61.1800,
            lng: -32.7300,
            country: 'ARG',
            countryName: 'Argentina',
            region: 'ARG_SF_Iriondo'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.241,
        dataSource: 'model'
    },
    {
        id: 'arg-ARG_SF_Constitucion-soy',
        name: 'ARG_SF_Constitucion Soy',
        crop: 'Soy',
        location: {
            lat: -60.3300,
            lng: -33.2300,
            country: 'ARG',
            countryName: 'Argentina',
            region: 'ARG_SF_Constitucion'
        },
        risk: 100.0,
        confidence: 88,
        ndviMean: 0.113,
        dataSource: 'model'
    },
    {
        id: 'arg-ARG_SF_Rosario-soy',
        name: 'ARG_SF_Rosario Soy',
        crop: 'Soy',
        location: {
            lat: -60.6500,
            lng: -33.0000,
            country: 'ARG',
            countryName: 'Argentina',
            region: 'ARG_SF_Rosario'
        },
        risk: 100.0,
        confidence: 91,
        ndviMean: 0.122,
        dataSource: 'model'
    },
    {
        id: 'arg-ARG_SF_General_Lopez-soy',
        name: 'ARG_SF_General_Lopez Soy',
        crop: 'Soy',
        location: {
            lat: -61.4200,
            lng: -33.6800,
            country: 'ARG',
            countryName: 'Argentina',
            region: 'ARG_SF_General_Lopez'
        },
        risk: 0.1,
        confidence: 91,
        ndviMean: 0.176,
        dataSource: 'model'
    },
    {
        id: 'arg-ARG_SF_Belgrano-corn',
        name: 'ARG_SF_Belgrano Corn',
        crop: 'Corn',
        location: {
            lat: -61.5200,
            lng: -32.5800,
            country: 'ARG',
            countryName: 'Argentina',
            region: 'ARG_SF_Belgrano'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.292,
        dataSource: 'model'
    },
    {
        id: 'arg-ARG_ER_Parana-soy',
        name: 'ARG_ER_Parana Soy',
        crop: 'Soy',
        location: {
            lat: -60.5200,
            lng: -31.7300,
            country: 'ARG',
            countryName: 'Argentina',
            region: 'ARG_ER_Parana'
        },
        risk: 100.0,
        confidence: 91,
        ndviMean: 0.133,
        dataSource: 'model'
    },
    {
        id: 'arg-ARG_ER_Victoria-soy',
        name: 'ARG_ER_Victoria Soy',
        crop: 'Soy',
        location: {
            lat: -60.1700,
            lng: -32.6200,
            country: 'ARG',
            countryName: 'Argentina',
            region: 'ARG_ER_Victoria'
        },
        risk: 0.0,
        confidence: 88,
        ndviMean: 0.41,
        dataSource: 'model'
    },
    {
        id: 'arg-ARG_ER_Diamante-soy',
        name: 'ARG_ER_Diamante Soy',
        crop: 'Soy',
        location: {
            lat: -60.6500,
            lng: -32.0700,
            country: 'ARG',
            countryName: 'Argentina',
            region: 'ARG_ER_Diamante'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.25,
        dataSource: 'model'
    },
    {
        id: 'chn-CHN_HLJ_Jiamusi-soy',
        name: 'CHN_HLJ_Jiamusi Soy',
        crop: 'Soy',
        location: {
            lat: 130.3500,
            lng: 46.8000,
            country: 'CHN',
            countryName: 'China',
            region: 'CHN_HLJ_Jiamusi'
        },
        risk: 0.1,
        confidence: 85,
        ndviMean: 0.162,
        dataSource: 'model'
    },
    {
        id: 'arg-ARG_ER_Gualeguaychu-soy',
        name: 'ARG_ER_Gualeguaychu Soy',
        crop: 'Soy',
        location: {
            lat: -58.5200,
            lng: -33.0000,
            country: 'ARG',
            countryName: 'Argentina',
            region: 'ARG_ER_Gualeguaychu'
        },
        risk: 0.1,
        confidence: 91,
        ndviMean: 0.168,
        dataSource: 'model'
    },
    {
        id: 'chn-CHN_HLJ_Mudanjiang-corn',
        name: 'CHN_HLJ_Mudanjiang Corn',
        crop: 'Corn',
        location: {
            lat: 129.6000,
            lng: 44.5800,
            country: 'CHN',
            countryName: 'China',
            region: 'CHN_HLJ_Mudanjiang'
        },
        risk: 100.0,
        confidence: 91,
        ndviMean: 0.111,
        dataSource: 'model'
    },
    {
        id: 'chn-CHN_HLJ_Heihe-soy',
        name: 'CHN_HLJ_Heihe Soy',
        crop: 'Soy',
        location: {
            lat: 127.5300,
            lng: 50.2500,
            country: 'CHN',
            countryName: 'China',
            region: 'CHN_HLJ_Heihe'
        },
        risk: 100.0,
        confidence: 85,
        ndviMean: 0.029,
        dataSource: 'model'
    },
    {
        id: 'chn-CHN_HLJ_Qiqihar-soy',
        name: 'CHN_HLJ_Qiqihar Soy',
        crop: 'Soy',
        location: {
            lat: 123.9700,
            lng: 47.3500,
            country: 'CHN',
            countryName: 'China',
            region: 'CHN_HLJ_Qiqihar'
        },
        risk: 100.0,
        confidence: 91,
        ndviMean: 0.152,
        dataSource: 'model'
    },
    {
        id: 'chn-CHN_HLJ_Harbin-soy',
        name: 'CHN_HLJ_Harbin Soy',
        crop: 'Soy',
        location: {
            lat: 126.6500,
            lng: 45.7500,
            country: 'CHN',
            countryName: 'China',
            region: 'CHN_HLJ_Harbin'
        },
        risk: 100.0,
        confidence: 88,
        ndviMean: 0.064,
        dataSource: 'model'
    },
    {
        id: 'chn-CHN_HLJ_Daqing-corn',
        name: 'CHN_HLJ_Daqing Corn',
        crop: 'Corn',
        location: {
            lat: 125.0000,
            lng: 46.5800,
            country: 'CHN',
            countryName: 'China',
            region: 'CHN_HLJ_Daqing'
        },
        risk: 0.1,
        confidence: 85,
        ndviMean: 0.154,
        dataSource: 'model'
    },
    {
        id: 'chn-CHN_HLJ_Suihua-corn',
        name: 'CHN_HLJ_Suihua Corn',
        crop: 'Corn',
        location: {
            lat: 126.9800,
            lng: 46.6300,
            country: 'CHN',
            countryName: 'China',
            region: 'CHN_HLJ_Suihua'
        },
        risk: 100.0,
        confidence: 91,
        ndviMean: 0.085,
        dataSource: 'model'
    },
    {
        id: 'chn-CHN_JL_Siping-corn',
        name: 'CHN_JL_Siping Corn',
        crop: 'Corn',
        location: {
            lat: 124.3500,
            lng: 43.1700,
            country: 'CHN',
            countryName: 'China',
            region: 'CHN_JL_Siping'
        },
        risk: 0.0,
        confidence: 82,
        ndviMean: 0.17,
        dataSource: 'model'
    },
    {
        id: 'chn-CHN_JL_Songyuan-corn',
        name: 'CHN_JL_Songyuan Corn',
        crop: 'Corn',
        location: {
            lat: 124.8200,
            lng: 45.1800,
            country: 'CHN',
            countryName: 'China',
            region: 'CHN_JL_Songyuan'
        },
        risk: 100.0,
        confidence: 85,
        ndviMean: 0.103,
        dataSource: 'model'
    },
    {
        id: 'chn-CHN_JL_Baicheng-corn',
        name: 'CHN_JL_Baicheng Corn',
        crop: 'Corn',
        location: {
            lat: 122.8300,
            lng: 45.6200,
            country: 'CHN',
            countryName: 'China',
            region: 'CHN_JL_Baicheng'
        },
        risk: 100.0,
        confidence: 91,
        ndviMean: 0.118,
        dataSource: 'model'
    },
    {
        id: 'chn-CHN_JL_Changchun-corn',
        name: 'CHN_JL_Changchun Corn',
        crop: 'Corn',
        location: {
            lat: 125.3200,
            lng: 43.8800,
            country: 'CHN',
            countryName: 'China',
            region: 'CHN_JL_Changchun'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.197,
        dataSource: 'model'
    },
    {
        id: 'chn-CHN_HN_Zhengzhou-wheat',
        name: 'CHN_HN_Zhengzhou Wheat',
        crop: 'Wheat',
        location: {
            lat: 113.6500,
            lng: 34.7500,
            country: 'CHN',
            countryName: 'China',
            region: 'CHN_HN_Zhengzhou'
        },
        risk: 100.0,
        confidence: 91,
        ndviMean: 0.1,
        dataSource: 'model'
    },
    {
        id: 'chn-CHN_HN_Kaifeng-wheat',
        name: 'CHN_HN_Kaifeng Wheat',
        crop: 'Wheat',
        location: {
            lat: 114.3500,
            lng: 34.8000,
            country: 'CHN',
            countryName: 'China',
            region: 'CHN_HN_Kaifeng'
        },
        risk: 100.0,
        confidence: 91,
        ndviMean: 0.131,
        dataSource: 'model'
    },
    {
        id: 'chn-CHN_HN_Xinxiang-wheat',
        name: 'CHN_HN_Xinxiang Wheat',
        crop: 'Wheat',
        location: {
            lat: 113.8800,
            lng: 35.3000,
            country: 'CHN',
            countryName: 'China',
            region: 'CHN_HN_Xinxiang'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.286,
        dataSource: 'model'
    },
    {
        id: 'chn-CHN_JL_Liaoyuan-corn',
        name: 'CHN_JL_Liaoyuan Corn',
        crop: 'Corn',
        location: {
            lat: 125.1500,
            lng: 42.9000,
            country: 'CHN',
            countryName: 'China',
            region: 'CHN_JL_Liaoyuan'
        },
        risk: 0.1,
        confidence: 91,
        ndviMean: 0.2,
        dataSource: 'model'
    },
    {
        id: 'chn-CHN_HN_Luoyang-wheat',
        name: 'CHN_HN_Luoyang Wheat',
        crop: 'Wheat',
        location: {
            lat: 112.4500,
            lng: 34.6800,
            country: 'CHN',
            countryName: 'China',
            region: 'CHN_HN_Luoyang'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.213,
        dataSource: 'model'
    },
    {
        id: 'chn-CHN_HN_Anyang-wheat',
        name: 'CHN_HN_Anyang Wheat',
        crop: 'Wheat',
        location: {
            lat: 114.3500,
            lng: 36.1000,
            country: 'CHN',
            countryName: 'China',
            region: 'CHN_HN_Anyang'
        },
        risk: 100.0,
        confidence: 91,
        ndviMean: 0.102,
        dataSource: 'model'
    },
    {
        id: 'chn-CHN_HN_Shangqiu-wheat',
        name: 'CHN_HN_Shangqiu Wheat',
        crop: 'Wheat',
        location: {
            lat: 115.6500,
            lng: 34.4300,
            country: 'CHN',
            countryName: 'China',
            region: 'CHN_HN_Shangqiu'
        },
        risk: 100.0,
        confidence: 91,
        ndviMean: 0.125,
        dataSource: 'model'
    },
    {
        id: 'chn-CHN_SD_Jinan-wheat',
        name: 'CHN_SD_Jinan Wheat',
        crop: 'Wheat',
        location: {
            lat: 116.9800,
            lng: 36.6700,
            country: 'CHN',
            countryName: 'China',
            region: 'CHN_SD_Jinan'
        },
        risk: 100.0,
        confidence: 88,
        ndviMean: 0.104,
        dataSource: 'model'
    },
    {
        id: 'chn-CHN_HN_Puyang-wheat',
        name: 'CHN_HN_Puyang Wheat',
        crop: 'Wheat',
        location: {
            lat: 115.0300,
            lng: 35.7700,
            country: 'CHN',
            countryName: 'China',
            region: 'CHN_HN_Puyang'
        },
        risk: 100.0,
        confidence: 88,
        ndviMean: 0.136,
        dataSource: 'model'
    },
    {
        id: 'chn-CHN_HN_Zhoukou-wheat',
        name: 'CHN_HN_Zhoukou Wheat',
        crop: 'Wheat',
        location: {
            lat: 114.6500,
            lng: 33.6300,
            country: 'CHN',
            countryName: 'China',
            region: 'CHN_HN_Zhoukou'
        },
        risk: 100.0,
        confidence: 91,
        ndviMean: 0.14,
        dataSource: 'model'
    },
    {
        id: 'chn-CHN_SD_Dezhou-wheat',
        name: 'CHN_SD_Dezhou Wheat',
        crop: 'Wheat',
        location: {
            lat: 116.3000,
            lng: 37.4300,
            country: 'CHN',
            countryName: 'China',
            region: 'CHN_SD_Dezhou'
        },
        risk: 100.0,
        confidence: 91,
        ndviMean: 0.129,
        dataSource: 'model'
    },
    {
        id: 'chn-CHN_SD_Liaocheng-wheat',
        name: 'CHN_SD_Liaocheng Wheat',
        crop: 'Wheat',
        location: {
            lat: 115.9800,
            lng: 36.4500,
            country: 'CHN',
            countryName: 'China',
            region: 'CHN_SD_Liaocheng'
        },
        risk: 100.0,
        confidence: 88,
        ndviMean: 0.13,
        dataSource: 'model'
    },
    {
        id: 'chn-CHN_SD_Jining-wheat',
        name: 'CHN_SD_Jining Wheat',
        crop: 'Wheat',
        location: {
            lat: 116.5800,
            lng: 35.4200,
            country: 'CHN',
            countryName: 'China',
            region: 'CHN_SD_Jining'
        },
        risk: 100.0,
        confidence: 91,
        ndviMean: 0.113,
        dataSource: 'model'
    },
    {
        id: 'chn-CHN_SD_Zibo-corn',
        name: 'CHN_SD_Zibo Corn',
        crop: 'Corn',
        location: {
            lat: 118.0500,
            lng: 36.8000,
            country: 'CHN',
            countryName: 'China',
            region: 'CHN_SD_Zibo'
        },
        risk: 100.0,
        confidence: 88,
        ndviMean: 0.126,
        dataSource: 'model'
    },
    {
        id: 'chn-CHN_SD_Weifang-corn',
        name: 'CHN_SD_Weifang Corn',
        crop: 'Corn',
        location: {
            lat: 119.1000,
            lng: 36.7200,
            country: 'CHN',
            countryName: 'China',
            region: 'CHN_SD_Weifang'
        },
        risk: 100.0,
        confidence: 91,
        ndviMean: 0.132,
        dataSource: 'model'
    },
    {
        id: 'chn-CHN_SD_Heze-wheat',
        name: 'CHN_SD_Heze Wheat',
        crop: 'Wheat',
        location: {
            lat: 115.4800,
            lng: 35.2300,
            country: 'CHN',
            countryName: 'China',
            region: 'CHN_SD_Heze'
        },
        risk: 0.1,
        confidence: 91,
        ndviMean: 0.165,
        dataSource: 'model'
    },
    {
        id: 'chn-CHN_HB_Wuhan-rice',
        name: 'CHN_HB_Wuhan Rice',
        crop: 'Rice',
        location: {
            lat: 114.2700,
            lng: 30.5800,
            country: 'CHN',
            countryName: 'China',
            region: 'CHN_HB_Wuhan'
        },
        risk: 100.0,
        confidence: 88,
        ndviMean: 0.067,
        dataSource: 'model'
    },
    {
        id: 'chn-CHN_HB_Jingzhou-rice',
        name: 'CHN_HB_Jingzhou Rice',
        crop: 'Rice',
        location: {
            lat: 112.2300,
            lng: 30.3300,
            country: 'CHN',
            countryName: 'China',
            region: 'CHN_HB_Jingzhou'
        },
        risk: 0.0,
        confidence: 85,
        ndviMean: 0.197,
        dataSource: 'model'
    },
    {
        id: 'chn-CHN_HuN_Changsha-rice',
        name: 'CHN_HuN_Changsha Rice',
        crop: 'Rice',
        location: {
            lat: 112.9300,
            lng: 28.2300,
            country: 'CHN',
            countryName: 'China',
            region: 'CHN_HuN_Changsha'
        },
        risk: 0.1,
        confidence: 88,
        ndviMean: 0.194,
        dataSource: 'model'
    },
    {
        id: 'chn-CHN_HuN_Changde-rice',
        name: 'CHN_HuN_Changde Rice',
        crop: 'Rice',
        location: {
            lat: 111.6800,
            lng: 29.0300,
            country: 'CHN',
            countryName: 'China',
            region: 'CHN_HuN_Changde'
        },
        risk: 100.0,
        confidence: 82,
        ndviMean: -0.026,
        dataSource: 'model'
    },
    {
        id: 'chn-CHN_JS_Yangzhou-rice',
        name: 'CHN_JS_Yangzhou Rice',
        crop: 'Rice',
        location: {
            lat: 119.4300,
            lng: 32.4000,
            country: 'CHN',
            countryName: 'China',
            region: 'CHN_JS_Yangzhou'
        },
        risk: 99.8,
        confidence: 91,
        ndviMean: 0.141,
        dataSource: 'model'
    },
    {
        id: 'chn-CHN_JS_Nanjing-rice',
        name: 'CHN_JS_Nanjing Rice',
        crop: 'Rice',
        location: {
            lat: 118.7800,
            lng: 32.0500,
            country: 'CHN',
            countryName: 'China',
            region: 'CHN_JS_Nanjing'
        },
        risk: 0.2,
        confidence: 91,
        ndviMean: 0.16,
        dataSource: 'model'
    },
    {
        id: 'chn-CHN_JS_Nantong-rice',
        name: 'CHN_JS_Nantong Rice',
        crop: 'Rice',
        location: {
            lat: 120.8500,
            lng: 32.0000,
            country: 'CHN',
            countryName: 'China',
            region: 'CHN_JS_Nantong'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.215,
        dataSource: 'model'
    },
    {
        id: 'chn-CHN_HuN_Yueyang-rice',
        name: 'CHN_HuN_Yueyang Rice',
        crop: 'Rice',
        location: {
            lat: 113.1200,
            lng: 29.3700,
            country: 'CHN',
            countryName: 'China',
            region: 'CHN_HuN_Yueyang'
        },
        risk: 100.0,
        confidence: 91,
        ndviMean: 0.13,
        dataSource: 'model'
    },
    {
        id: 'chn-CHN_HB_Xiangyang-rice',
        name: 'CHN_HB_Xiangyang Rice',
        crop: 'Rice',
        location: {
            lat: 112.1500,
            lng: 32.0200,
            country: 'CHN',
            countryName: 'China',
            region: 'CHN_HB_Xiangyang'
        },
        risk: 100.0,
        confidence: 91,
        ndviMean: 0.139,
        dataSource: 'model'
    },
    {
        id: 'chn-CHN_AH_Chuzhou-rice',
        name: 'CHN_AH_Chuzhou Rice',
        crop: 'Rice',
        location: {
            lat: 118.3200,
            lng: 32.3000,
            country: 'CHN',
            countryName: 'China',
            region: 'CHN_AH_Chuzhou'
        },
        risk: 0.1,
        confidence: 91,
        ndviMean: 0.182,
        dataSource: 'model'
    },
    {
        id: 'chn-CHN_AH_Wuhu-rice',
        name: 'CHN_AH_Wuhu Rice',
        crop: 'Rice',
        location: {
            lat: 118.3800,
            lng: 31.3500,
            country: 'CHN',
            countryName: 'China',
            region: 'CHN_AH_Wuhu'
        },
        risk: 0.1,
        confidence: 88,
        ndviMean: 0.168,
        dataSource: 'model'
    },
    {
        id: 'chn-CHN_AH_Hefei-rice',
        name: 'CHN_AH_Hefei Rice',
        crop: 'Rice',
        location: {
            lat: 117.2300,
            lng: 31.8200,
            country: 'CHN',
            countryName: 'China',
            region: 'CHN_AH_Hefei'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.195,
        dataSource: 'model'
    },
    {
        id: 'nga-NGA_Kaduna-corn',
        name: 'NGA_Kaduna Corn',
        crop: 'Corn',
        location: {
            lat: 7.4400,
            lng: 10.5200,
            country: 'NGA',
            countryName: 'Nigeria',
            region: 'NGA_Kaduna'
        },
        risk: 100.0,
        confidence: 85,
        ndviMean: 0.147,
        dataSource: 'model'
    },
    {
        id: 'nga-NGA_Katsina-corn',
        name: 'NGA_Katsina Corn',
        crop: 'Corn',
        location: {
            lat: 7.6000,
            lng: 13.0000,
            country: 'NGA',
            countryName: 'Nigeria',
            region: 'NGA_Katsina'
        },
        risk: 99.9,
        confidence: 91,
        ndviMean: 0.131,
        dataSource: 'model'
    },
    {
        id: 'nga-NGA_Kano-corn',
        name: 'NGA_Kano Corn',
        crop: 'Corn',
        location: {
            lat: 8.5200,
            lng: 12.0000,
            country: 'NGA',
            countryName: 'Nigeria',
            region: 'NGA_Kano'
        },
        risk: 100.0,
        confidence: 91,
        ndviMean: 0.039,
        dataSource: 'model'
    },
    {
        id: 'nga-NGA_Sokoto-corn',
        name: 'NGA_Sokoto Corn',
        crop: 'Corn',
        location: {
            lat: 5.2400,
            lng: 13.0600,
            country: 'NGA',
            countryName: 'Nigeria',
            region: 'NGA_Sokoto'
        },
        risk: 100.0,
        confidence: 88,
        ndviMean: 0.087,
        dataSource: 'model'
    },
    {
        id: 'nga-NGA_Taraba-soy',
        name: 'NGA_Taraba Soy',
        crop: 'Soy',
        location: {
            lat: 10.5000,
            lng: 8.0000,
            country: 'NGA',
            countryName: 'Nigeria',
            region: 'NGA_Taraba'
        },
        risk: 0.0,
        confidence: 82,
        ndviMean: 0.361,
        dataSource: 'model'
    },
    {
        id: 'eth-ETH_Amhara_South-wheat',
        name: 'ETH_Amhara_South Wheat',
        crop: 'Wheat',
        location: {
            lat: 38.0000,
            lng: 11.0000,
            country: 'ETH',
            countryName: 'Ethiopia',
            region: 'ETH_Amhara_South'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.398,
        dataSource: 'model'
    },
    {
        id: 'nga-NGA_Niger_State-rice',
        name: 'NGA_Niger_State Rice',
        crop: 'Rice',
        location: {
            lat: 5.6000,
            lng: 9.9300,
            country: 'NGA',
            countryName: 'Nigeria',
            region: 'NGA_Niger_State'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.32,
        dataSource: 'model'
    },
    {
        id: 'nga-NGA_Zamfara-corn',
        name: 'NGA_Zamfara Corn',
        crop: 'Corn',
        location: {
            lat: 6.2500,
            lng: 12.1700,
            country: 'NGA',
            countryName: 'Nigeria',
            region: 'NGA_Zamfara'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.304,
        dataSource: 'model'
    },
    {
        id: 'eth-ETH_Oromia_West-wheat',
        name: 'ETH_Oromia_West Wheat',
        crop: 'Wheat',
        location: {
            lat: 37.0000,
            lng: 9.0000,
            country: 'ETH',
            countryName: 'Ethiopia',
            region: 'ETH_Oromia_West'
        },
        risk: 0.0,
        confidence: 88,
        ndviMean: 0.421,
        dataSource: 'model'
    },
    {
        id: 'eth-ETH_SNNPR-corn',
        name: 'ETH_SNNPR Corn',
        crop: 'Corn',
        location: {
            lat: 38.0000,
            lng: 7.0000,
            country: 'ETH',
            countryName: 'Ethiopia',
            region: 'ETH_SNNPR'
        },
        risk: 0.0,
        confidence: 85,
        ndviMean: 0.281,
        dataSource: 'model'
    },
    {
        id: 'eth-ETH_Tigray-wheat',
        name: 'ETH_Tigray Wheat',
        crop: 'Wheat',
        location: {
            lat: 39.0000,
            lng: 13.5000,
            country: 'ETH',
            countryName: 'Ethiopia',
            region: 'ETH_Tigray'
        },
        risk: 0.0,
        confidence: 88,
        ndviMean: 0.213,
        dataSource: 'model'
    },
    {
        id: 'eth-ETH_Oromia_East-corn',
        name: 'ETH_Oromia_East Corn',
        crop: 'Corn',
        location: {
            lat: 40.0000,
            lng: 8.5000,
            country: 'ETH',
            countryName: 'Ethiopia',
            region: 'ETH_Oromia_East'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.393,
        dataSource: 'model'
    },
    {
        id: 'egy-EGY_Nile_Delta_East-wheat',
        name: 'EGY_Nile_Delta_East Wheat',
        crop: 'Wheat',
        location: {
            lat: 31.5000,
            lng: 31.0000,
            country: 'EGY',
            countryName: 'Egypt',
            region: 'EGY_Nile_Delta_East'
        },
        risk: 0.0,
        confidence: 95,
        ndviMean: 0.342,
        dataSource: 'model'
    },
    {
        id: 'egy-EGY_Nile_Delta_West-wheat',
        name: 'EGY_Nile_Delta_West Wheat',
        crop: 'Wheat',
        location: {
            lat: 30.0000,
            lng: 31.0000,
            country: 'EGY',
            countryName: 'Egypt',
            region: 'EGY_Nile_Delta_West'
        },
        risk: 0.0,
        confidence: 95,
        ndviMean: 0.292,
        dataSource: 'model'
    },
    {
        id: 'egy-EGY_Sharqia-rice',
        name: 'EGY_Sharqia Rice',
        crop: 'Rice',
        location: {
            lat: 31.5000,
            lng: 30.7000,
            country: 'EGY',
            countryName: 'Egypt',
            region: 'EGY_Sharqia'
        },
        risk: 0.0,
        confidence: 95,
        ndviMean: 0.309,
        dataSource: 'model'
    },
    {
        id: 'egy-EGY_Nile_Valley_Upper-wheat',
        name: 'EGY_Nile_Valley_Upper Wheat',
        crop: 'Wheat',
        location: {
            lat: 32.5000,
            lng: 26.0000,
            country: 'EGY',
            countryName: 'Egypt',
            region: 'EGY_Nile_Valley_Upper'
        },
        risk: 100.0,
        confidence: 95,
        ndviMean: 0.07,
        dataSource: 'model'
    },
    {
        id: 'egy-EGY_Fayoum-rice',
        name: 'EGY_Fayoum Rice',
        crop: 'Rice',
        location: {
            lat: 30.8000,
            lng: 29.3000,
            country: 'EGY',
            countryName: 'Egypt',
            region: 'EGY_Fayoum'
        },
        risk: 0.0,
        confidence: 95,
        ndviMean: 0.314,
        dataSource: 'model'
    },
    {
        id: 'zaf-ZAF_Free_State_North-corn',
        name: 'ZAF_Free_State_North Corn',
        crop: 'Corn',
        location: {
            lat: 26.5000,
            lng: -28.5000,
            country: 'ZAF',
            countryName: 'South Africa',
            region: 'ZAF_Free_State_North'
        },
        risk: 0.0,
        confidence: 95,
        ndviMean: 0.172,
        dataSource: 'model'
    },
    {
        id: 'zaf-ZAF_Free_State_East-corn',
        name: 'ZAF_Free_State_East Corn',
        crop: 'Corn',
        location: {
            lat: 27.5000,
            lng: -29.0000,
            country: 'ZAF',
            countryName: 'South Africa',
            region: 'ZAF_Free_State_East'
        },
        risk: 0.0,
        confidence: 95,
        ndviMean: 0.173,
        dataSource: 'model'
    },
    {
        id: 'zaf-ZAF_Mpumalanga-corn',
        name: 'ZAF_Mpumalanga Corn',
        crop: 'Corn',
        location: {
            lat: 29.5000,
            lng: -26.0000,
            country: 'ZAF',
            countryName: 'South Africa',
            region: 'ZAF_Mpumalanga'
        },
        risk: 99.9,
        confidence: 95,
        ndviMean: 0.128,
        dataSource: 'model'
    },
    {
        id: 'zaf-ZAF_KwaZulu_Natal-corn',
        name: 'ZAF_KwaZulu_Natal Corn',
        crop: 'Corn',
        location: {
            lat: 30.0000,
            lng: -29.0000,
            country: 'ZAF',
            countryName: 'South Africa',
            region: 'ZAF_KwaZulu_Natal'
        },
        risk: 0.0,
        confidence: 95,
        ndviMean: 0.205,
        dataSource: 'model'
    },
    {
        id: 'zaf-ZAF_North_West-corn',
        name: 'ZAF_North_West Corn',
        crop: 'Corn',
        location: {
            lat: 25.5000,
            lng: -26.5000,
            country: 'ZAF',
            countryName: 'South Africa',
            region: 'ZAF_North_West'
        },
        risk: 99.8,
        confidence: 95,
        ndviMean: 0.139,
        dataSource: 'model'
    },
    {
        id: 'zaf-ZAF_Western_Cape-wheat',
        name: 'ZAF_Western_Cape Wheat',
        crop: 'Wheat',
        location: {
            lat: 19.0000,
            lng: -33.5000,
            country: 'ZAF',
            countryName: 'South Africa',
            region: 'ZAF_Western_Cape'
        },
        risk: 0.0,
        confidence: 95,
        ndviMean: 0.35,
        dataSource: 'model'
    },
    {
        id: 'ken-KEN_Rift_Valley_North-wheat',
        name: 'KEN_Rift_Valley_North Wheat',
        crop: 'Wheat',
        location: {
            lat: 36.0000,
            lng: 0.5000,
            country: 'KEN',
            countryName: 'Kenya',
            region: 'KEN_Rift_Valley_North'
        },
        risk: 100.0,
        confidence: 95,
        ndviMean: 0.125,
        dataSource: 'model'
    },
    {
        id: 'tza-TZA_Iringa-corn',
        name: 'TZA_Iringa Corn',
        crop: 'Corn',
        location: {
            lat: 35.6900,
            lng: -7.7700,
            country: 'TZA',
            countryName: 'Tanzania',
            region: 'TZA_Iringa'
        },
        risk: 0.1,
        confidence: 95,
        ndviMean: 0.161,
        dataSource: 'model'
    },
    {
        id: 'ken-KEN_Western-corn',
        name: 'KEN_Western Corn',
        crop: 'Corn',
        location: {
            lat: 34.5000,
            lng: 0.5000,
            country: 'KEN',
            countryName: 'Kenya',
            region: 'KEN_Western'
        },
        risk: 0.0,
        confidence: 95,
        ndviMean: 0.4,
        dataSource: 'model'
    },
    {
        id: 'ken-KEN_Rift_Valley_Central-corn',
        name: 'KEN_Rift_Valley_Central Corn',
        crop: 'Corn',
        location: {
            lat: 36.0000,
            lng: -0.5000,
            country: 'KEN',
            countryName: 'Kenya',
            region: 'KEN_Rift_Valley_Central'
        },
        risk: 0.0,
        confidence: 95,
        ndviMean: 0.341,
        dataSource: 'model'
    },
    {
        id: 'ken-KEN_Nyanza-corn',
        name: 'KEN_Nyanza Corn',
        crop: 'Corn',
        location: {
            lat: 34.8000,
            lng: -0.5000,
            country: 'KEN',
            countryName: 'Kenya',
            region: 'KEN_Nyanza'
        },
        risk: 0.0,
        confidence: 95,
        ndviMean: 0.429,
        dataSource: 'model'
    },
    {
        id: 'tza-TZA_Morogoro-rice',
        name: 'TZA_Morogoro Rice',
        crop: 'Rice',
        location: {
            lat: 37.6600,
            lng: -6.8200,
            country: 'TZA',
            countryName: 'Tanzania',
            region: 'TZA_Morogoro'
        },
        risk: 0.0,
        confidence: 95,
        ndviMean: 0.201,
        dataSource: 'model'
    },
    {
        id: 'tza-TZA_Mbeya-corn',
        name: 'TZA_Mbeya Corn',
        crop: 'Corn',
        location: {
            lat: 33.4600,
            lng: -8.9000,
            country: 'TZA',
            countryName: 'Tanzania',
            region: 'TZA_Mbeya'
        },
        risk: 100.0,
        confidence: 95,
        ndviMean: 0.121,
        dataSource: 'model'
    },
    {
        id: 'tza-TZA_Rukwa-corn',
        name: 'TZA_Rukwa Corn',
        crop: 'Corn',
        location: {
            lat: 31.5000,
            lng: -8.0000,
            country: 'TZA',
            countryName: 'Tanzania',
            region: 'TZA_Rukwa'
        },
        risk: 0.0,
        confidence: 95,
        ndviMean: 0.233,
        dataSource: 'model'
    },
    {
        id: 'dza-DZA_Setif-wheat',
        name: 'DZA_Setif Wheat',
        crop: 'Wheat',
        location: {
            lat: 5.4100,
            lng: 36.1900,
            country: 'DZA',
            countryName: 'Algeria',
            region: 'DZA_Setif'
        },
        risk: 100.0,
        confidence: 95,
        ndviMean: 0.11,
        dataSource: 'model'
    },
    {
        id: 'mar-MAR_Saiss-wheat',
        name: 'MAR_Saiss Wheat',
        crop: 'Wheat',
        location: {
            lat: -5.0000,
            lng: 34.0000,
            country: 'MAR',
            countryName: 'Morocco',
            region: 'MAR_Saiss'
        },
        risk: 100.0,
        confidence: 95,
        ndviMean: 0.125,
        dataSource: 'model'
    },
    {
        id: 'mar-MAR_Chaouia-wheat',
        name: 'MAR_Chaouia Wheat',
        crop: 'Wheat',
        location: {
            lat: -7.0000,
            lng: 33.0000,
            country: 'MAR',
            countryName: 'Morocco',
            region: 'MAR_Chaouia'
        },
        risk: 100.0,
        confidence: 95,
        ndviMean: 0.106,
        dataSource: 'model'
    },
    {
        id: 'mar-MAR_Doukkala-wheat',
        name: 'MAR_Doukkala Wheat',
        crop: 'Wheat',
        location: {
            lat: -8.5000,
            lng: 32.5000,
            country: 'MAR',
            countryName: 'Morocco',
            region: 'MAR_Doukkala'
        },
        risk: 0.0,
        confidence: 95,
        ndviMean: 0.18,
        dataSource: 'model'
    },
    {
        id: 'mar-MAR_Gharb-wheat',
        name: 'MAR_Gharb Wheat',
        crop: 'Wheat',
        location: {
            lat: -6.0000,
            lng: 34.5000,
            country: 'MAR',
            countryName: 'Morocco',
            region: 'MAR_Gharb'
        },
        risk: 100.0,
        confidence: 95,
        ndviMean: 0.091,
        dataSource: 'model'
    },
    {
        id: 'sdn-SDN_Gezira-wheat',
        name: 'SDN_Gezira Wheat',
        crop: 'Wheat',
        location: {
            lat: 33.0000,
            lng: 14.5000,
            country: 'SDN',
            countryName: 'Sudan',
            region: 'SDN_Gezira'
        },
        risk: 0.1,
        confidence: 95,
        ndviMean: 0.228,
        dataSource: 'model'
    },
    {
        id: 'dza-DZA_Tiaret-wheat',
        name: 'DZA_Tiaret Wheat',
        crop: 'Wheat',
        location: {
            lat: 1.3200,
            lng: 35.3700,
            country: 'DZA',
            countryName: 'Algeria',
            region: 'DZA_Tiaret'
        },
        risk: 100.0,
        confidence: 95,
        ndviMean: 0.11,
        dataSource: 'model'
    },
    {
        id: 'dza-DZA_Constantine-wheat',
        name: 'DZA_Constantine Wheat',
        crop: 'Wheat',
        location: {
            lat: 6.6100,
            lng: 36.3600,
            country: 'DZA',
            countryName: 'Algeria',
            region: 'DZA_Constantine'
        },
        risk: 0.1,
        confidence: 95,
        ndviMean: 0.187,
        dataSource: 'model'
    },
    {
        id: 'sdn-SDN_Kassala-sorghum',
        name: 'SDN_Kassala Sorghum',
        crop: 'Sorghum',
        location: {
            lat: 36.4000,
            lng: 15.4500,
            country: 'SDN',
            countryName: 'Sudan',
            region: 'SDN_Kassala'
        },
        risk: 100.0,
        confidence: 85,
        ndviMean: 0.092,
        dataSource: 'model'
    },
    {
        id: 'sdn-SDN_Gedaref-sorghum',
        name: 'SDN_Gedaref Sorghum',
        crop: 'Sorghum',
        location: {
            lat: 35.4000,
            lng: 14.0000,
            country: 'SDN',
            countryName: 'Sudan',
            region: 'SDN_Gedaref'
        },
        risk: 100.0,
        confidence: 91,
        ndviMean: 0.12,
        dataSource: 'model'
    },
    {
        id: 'uga-UGA_Eastern-corn',
        name: 'UGA_Eastern Corn',
        crop: 'Corn',
        location: {
            lat: 34.0000,
            lng: 1.5000,
            country: 'UGA',
            countryName: 'Uganda',
            region: 'UGA_Eastern'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.339,
        dataSource: 'model'
    },
    {
        id: 'uga-UGA_Northern-corn',
        name: 'UGA_Northern Corn',
        crop: 'Corn',
        location: {
            lat: 32.5000,
            lng: 3.0000,
            country: 'UGA',
            countryName: 'Uganda',
            region: 'UGA_Northern'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.401,
        dataSource: 'model'
    },
    {
        id: 'zmb-ZMB_Eastern-corn',
        name: 'ZMB_Eastern Corn',
        crop: 'Corn',
        location: {
            lat: 32.0000,
            lng: -13.5000,
            country: 'ZMB',
            countryName: 'Zambia',
            region: 'ZMB_Eastern'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.275,
        dataSource: 'model'
    },
    {
        id: 'uga-UGA_Western-corn',
        name: 'UGA_Western Corn',
        crop: 'Corn',
        location: {
            lat: 30.5000,
            lng: 0.5000,
            country: 'UGA',
            countryName: 'Uganda',
            region: 'UGA_Western'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.382,
        dataSource: 'model'
    },
    {
        id: 'zwe-ZWE_Mashonaland_East-corn',
        name: 'ZWE_Mashonaland_East Corn',
        crop: 'Corn',
        location: {
            lat: 31.5000,
            lng: -18.0000,
            country: 'ZWE',
            countryName: 'Zimbabwe',
            region: 'ZWE_Mashonaland_East'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.193,
        dataSource: 'model'
    },
    {
        id: 'zmb-ZMB_Central-corn',
        name: 'ZMB_Central Corn',
        crop: 'Corn',
        location: {
            lat: 28.5000,
            lng: -14.5000,
            country: 'ZMB',
            countryName: 'Zambia',
            region: 'ZMB_Central'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.183,
        dataSource: 'model'
    },
    {
        id: 'zwe-ZWE_Matabeleland-corn',
        name: 'ZWE_Matabeleland Corn',
        crop: 'Corn',
        location: {
            lat: 28.0000,
            lng: -20.0000,
            country: 'ZWE',
            countryName: 'Zimbabwe',
            region: 'ZWE_Matabeleland'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.182,
        dataSource: 'model'
    },
    {
        id: 'zmb-ZMB_Southern-corn',
        name: 'ZMB_Southern Corn',
        crop: 'Corn',
        location: {
            lat: 26.5000,
            lng: -16.5000,
            country: 'ZMB',
            countryName: 'Zambia',
            region: 'ZMB_Southern'
        },
        risk: 99.9,
        confidence: 91,
        ndviMean: 0.124,
        dataSource: 'model'
    },
    {
        id: 'zwe-ZWE_Mashonaland_West-corn',
        name: 'ZWE_Mashonaland_West Corn',
        crop: 'Corn',
        location: {
            lat: 29.5000,
            lng: -17.5000,
            country: 'ZWE',
            countryName: 'Zimbabwe',
            region: 'ZWE_Mashonaland_West'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.229,
        dataSource: 'model'
    },
    {
        id: 'mli-MLI_Sikasso-corn',
        name: 'MLI_Sikasso Corn',
        crop: 'Corn',
        location: {
            lat: -5.6700,
            lng: 11.3200,
            country: 'MLI',
            countryName: 'Mali',
            region: 'MLI_Sikasso'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.247,
        dataSource: 'model'
    },
    {
        id: 'mli-MLI_Mopti-rice',
        name: 'MLI_Mopti Rice',
        crop: 'Rice',
        location: {
            lat: -4.2000,
            lng: 14.4900,
            country: 'MLI',
            countryName: 'Mali',
            region: 'MLI_Mopti'
        },
        risk: 100.0,
        confidence: 91,
        ndviMean: 0.01,
        dataSource: 'model'
    },
    {
        id: 'gha-GHA_Brong_Ahafo-corn',
        name: 'GHA_Brong_Ahafo Corn',
        crop: 'Corn',
        location: {
            lat: -2.0000,
            lng: 7.5000,
            country: 'GHA',
            countryName: 'Ghana',
            region: 'GHA_Brong_Ahafo'
        },
        risk: 0.0,
        confidence: 85,
        ndviMean: 0.485,
        dataSource: 'model'
    },
    {
        id: 'gha-GHA_Northern-corn',
        name: 'GHA_Northern Corn',
        crop: 'Corn',
        location: {
            lat: -1.0000,
            lng: 9.5000,
            country: 'GHA',
            countryName: 'Ghana',
            region: 'GHA_Northern'
        },
        risk: 0.0,
        confidence: 85,
        ndviMean: 0.249,
        dataSource: 'model'
    },
    {
        id: 'bfa-BFA_Boucle_du_Mouhoun-corn',
        name: 'BFA_Boucle_du_Mouhoun Corn',
        crop: 'Corn',
        location: {
            lat: -3.5000,
            lng: 12.5000,
            country: 'BFA',
            countryName: 'Burkina Faso',
            region: 'BFA_Boucle_du_Mouhoun'
        },
        risk: 0.0,
        confidence: 88,
        ndviMean: 0.194,
        dataSource: 'model'
    },
    {
        id: 'gha-GHA_Ashanti-corn',
        name: 'GHA_Ashanti Corn',
        crop: 'Corn',
        location: {
            lat: -1.5000,
            lng: 6.7500,
            country: 'GHA',
            countryName: 'Ghana',
            region: 'GHA_Ashanti'
        },
        risk: 0.0,
        confidence: 79,
        ndviMean: 0.491,
        dataSource: 'model'
    },
    {
        id: 'bfa-BFA_Hauts_Bassins-corn',
        name: 'BFA_Hauts_Bassins Corn',
        crop: 'Corn',
        location: {
            lat: -4.3000,
            lng: 11.1700,
            country: 'BFA',
            countryName: 'Burkina Faso',
            region: 'BFA_Hauts_Bassins'
        },
        risk: 0.0,
        confidence: 88,
        ndviMean: 0.227,
        dataSource: 'model'
    },
    {
        id: 'civ-CIV_Vallee_Bandama-rice',
        name: 'CIV_Vallee_Bandama Rice',
        crop: 'Rice',
        location: {
            lat: -5.0000,
            lng: 7.7000,
            country: 'CIV',
            countryName: 'Ivory Coast',
            region: 'CIV_Vallee_Bandama'
        },
        risk: 0.0,
        confidence: 79,
        ndviMean: 0.356,
        dataSource: 'model'
    },
    {
        id: 'mwi-MWI_Southern-corn',
        name: 'MWI_Southern Corn',
        crop: 'Corn',
        location: {
            lat: 35.0000,
            lng: -15.5000,
            country: 'MWI',
            countryName: 'Malawi',
            region: 'MWI_Southern'
        },
        risk: 0.0,
        confidence: 88,
        ndviMean: 0.262,
        dataSource: 'model'
    },
    {
        id: 'cmr-CMR_Adamawa-corn',
        name: 'CMR_Adamawa Corn',
        crop: 'Corn',
        location: {
            lat: 13.5000,
            lng: 7.5000,
            country: 'CMR',
            countryName: 'Cameroon',
            region: 'CMR_Adamawa'
        },
        risk: 0.0,
        confidence: 88,
        ndviMean: 0.424,
        dataSource: 'model'
    },
    {
        id: 'cmr-CMR_North-corn',
        name: 'CMR_North Corn',
        crop: 'Corn',
        location: {
            lat: 14.0000,
            lng: 9.5000,
            country: 'CMR',
            countryName: 'Cameroon',
            region: 'CMR_North'
        },
        risk: 0.0,
        confidence: 88,
        ndviMean: 0.275,
        dataSource: 'model'
    },
    {
        id: 'cmr-CMR_West-corn',
        name: 'CMR_West Corn',
        crop: 'Corn',
        location: {
            lat: 10.0000,
            lng: 5.5000,
            country: 'CMR',
            countryName: 'Cameroon',
            region: 'CMR_West'
        },
        risk: 0.0,
        confidence: 82,
        ndviMean: 0.414,
        dataSource: 'model'
    },
    {
        id: 'mwi-MWI_Central-corn',
        name: 'MWI_Central Corn',
        crop: 'Corn',
        location: {
            lat: 34.0000,
            lng: -13.5000,
            country: 'MWI',
            countryName: 'Malawi',
            region: 'MWI_Central'
        },
        risk: 0.0,
        confidence: 88,
        ndviMean: 0.267,
        dataSource: 'model'
    },
    {
        id: 'civ-CIV_Savanes-corn',
        name: 'CIV_Savanes Corn',
        crop: 'Corn',
        location: {
            lat: -5.5000,
            lng: 9.5000,
            country: 'CIV',
            countryName: 'Ivory Coast',
            region: 'CIV_Savanes'
        },
        risk: 0.0,
        confidence: 79,
        ndviMean: 0.31,
        dataSource: 'model'
    },
    {
        id: 'moz-MOZ_Zambezia-corn',
        name: 'MOZ_Zambezia Corn',
        crop: 'Corn',
        location: {
            lat: 37.0000,
            lng: -17.0000,
            country: 'MOZ',
            countryName: 'Mozambique',
            region: 'MOZ_Zambezia'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.269,
        dataSource: 'model'
    },
    {
        id: 'moz-MOZ_Nampula-corn',
        name: 'MOZ_Nampula Corn',
        crop: 'Corn',
        location: {
            lat: 39.0000,
            lng: -15.0000,
            country: 'MOZ',
            countryName: 'Mozambique',
            region: 'MOZ_Nampula'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.249,
        dataSource: 'model'
    },
    {
        id: 'ago-AGO_Huambo-corn',
        name: 'AGO_Huambo Corn',
        crop: 'Corn',
        location: {
            lat: 15.7300,
            lng: -12.7800,
            country: 'AGO',
            countryName: 'Angola',
            region: 'AGO_Huambo'
        },
        risk: 100.0,
        confidence: 91,
        ndviMean: 0.116,
        dataSource: 'model'
    },
    {
        id: 'ago-AGO_Bie-corn',
        name: 'AGO_Bie Corn',
        crop: 'Corn',
        location: {
            lat: 17.6700,
            lng: -12.3800,
            country: 'AGO',
            countryName: 'Angola',
            region: 'AGO_Bie'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.266,
        dataSource: 'model'
    },
    {
        id: 'sen-SEN_Thies-groundnut',
        name: 'SEN_Thies Groundnut',
        crop: 'Groundnut',
        location: {
            lat: -16.9000,
            lng: 14.8000,
            country: 'SEN',
            countryName: 'Senegal',
            region: 'SEN_Thies'
        },
        risk: 99.9,
        confidence: 91,
        ndviMean: 0.15,
        dataSource: 'model'
    },
    {
        id: 'moz-MOZ_Tete-corn',
        name: 'MOZ_Tete Corn',
        crop: 'Corn',
        location: {
            lat: 33.5000,
            lng: -16.0000,
            country: 'MOZ',
            countryName: 'Mozambique',
            region: 'MOZ_Tete'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.181,
        dataSource: 'model'
    },
    {
        id: 'sen-SEN_Diourbel-groundnut',
        name: 'SEN_Diourbel Groundnut',
        crop: 'Groundnut',
        location: {
            lat: -16.2300,
            lng: 14.6500,
            country: 'SEN',
            countryName: 'Senegal',
            region: 'SEN_Diourbel'
        },
        risk: 100.0,
        confidence: 91,
        ndviMean: 0.14,
        dataSource: 'model'
    },
    {
        id: 'deu-DEU_Bavaria-wheat',
        name: 'DEU_Bavaria Wheat',
        crop: 'Wheat',
        location: {
            lat: 11.5000,
            lng: 48.8000,
            country: 'DEU',
            countryName: 'Germany',
            region: 'DEU_Bavaria'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.34,
        dataSource: 'model'
    },
    {
        id: 'sen-SEN_Kaolack-groundnut',
        name: 'SEN_Kaolack Groundnut',
        crop: 'Groundnut',
        location: {
            lat: -16.0700,
            lng: 14.1500,
            country: 'SEN',
            countryName: 'Senegal',
            region: 'SEN_Kaolack'
        },
        risk: 100.0,
        confidence: 88,
        ndviMean: 0.069,
        dataSource: 'model'
    },
    {
        id: 'deu-DEU_Brandenburg-corn',
        name: 'DEU_Brandenburg Corn',
        crop: 'Corn',
        location: {
            lat: 13.0000,
            lng: 52.4000,
            country: 'DEU',
            countryName: 'Germany',
            region: 'DEU_Brandenburg'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.45,
        dataSource: 'model'
    },
    {
        id: 'deu-DEU_Lower_Saxony-wheat',
        name: 'DEU_Lower_Saxony Wheat',
        crop: 'Wheat',
        location: {
            lat: 9.5000,
            lng: 52.5000,
            country: 'DEU',
            countryName: 'Germany',
            region: 'DEU_Lower_Saxony'
        },
        risk: 0.0,
        confidence: 82,
        ndviMean: 0.46,
        dataSource: 'model'
    },
    {
        id: 'deu-DEU_Mecklenburg-wheat',
        name: 'DEU_Mecklenburg Wheat',
        crop: 'Wheat',
        location: {
            lat: 12.0000,
            lng: 53.8000,
            country: 'DEU',
            countryName: 'Germany',
            region: 'DEU_Mecklenburg'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.46,
        dataSource: 'model'
    },
    {
        id: 'deu-DEU_Saxony_Anhalt-wheat',
        name: 'DEU_Saxony_Anhalt Wheat',
        crop: 'Wheat',
        location: {
            lat: 11.5000,
            lng: 52.0000,
            country: 'DEU',
            countryName: 'Germany',
            region: 'DEU_Saxony_Anhalt'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.343,
        dataSource: 'model'
    },
    {
        id: 'pol-POL_Greater_Poland-wheat',
        name: 'POL_Greater_Poland Wheat',
        crop: 'Wheat',
        location: {
            lat: 17.0000,
            lng: 52.0000,
            country: 'POL',
            countryName: 'Poland',
            region: 'POL_Greater_Poland'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.49,
        dataSource: 'model'
    },
    {
        id: 'rou-ROU_Moldova-corn',
        name: 'ROU_Moldova Corn',
        crop: 'Corn',
        location: {
            lat: 27.5000,
            lng: 47.0000,
            country: 'ROU',
            countryName: 'Romania',
            region: 'ROU_Moldova'
        },
        risk: 0.0,
        confidence: 85,
        ndviMean: 0.445,
        dataSource: 'model'
    },
    {
        id: 'pol-POL_Lublin-wheat',
        name: 'POL_Lublin Wheat',
        crop: 'Wheat',
        location: {
            lat: 22.5000,
            lng: 51.2000,
            country: 'POL',
            countryName: 'Poland',
            region: 'POL_Lublin'
        },
        risk: 0.0,
        confidence: 88,
        ndviMean: 0.478,
        dataSource: 'model'
    },
    {
        id: 'pol-POL_Silesia-corn',
        name: 'POL_Silesia Corn',
        crop: 'Corn',
        location: {
            lat: 19.0000,
            lng: 50.3000,
            country: 'POL',
            countryName: 'Poland',
            region: 'POL_Silesia'
        },
        risk: 0.0,
        confidence: 88,
        ndviMean: 0.27,
        dataSource: 'model'
    },
    {
        id: 'pol-POL_Kujawy-corn',
        name: 'POL_Kujawy Corn',
        crop: 'Corn',
        location: {
            lat: 18.5000,
            lng: 52.5000,
            country: 'POL',
            countryName: 'Poland',
            region: 'POL_Kujawy'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.344,
        dataSource: 'model'
    },
    {
        id: 'rou-ROU_Wallachia-wheat',
        name: 'ROU_Wallachia Wheat',
        crop: 'Wheat',
        location: {
            lat: 26.0000,
            lng: 44.0000,
            country: 'ROU',
            countryName: 'Romania',
            region: 'ROU_Wallachia'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.268,
        dataSource: 'model'
    },
    {
        id: 'hun-HUN_Great_Plain_South-corn',
        name: 'HUN_Great_Plain_South Corn',
        crop: 'Corn',
        location: {
            lat: 20.0000,
            lng: 46.5000,
            country: 'HUN',
            countryName: 'Hungary',
            region: 'HUN_Great_Plain_South'
        },
        risk: 0.0,
        confidence: 88,
        ndviMean: 0.354,
        dataSource: 'model'
    },
    {
        id: 'rou-ROU_Banat-corn',
        name: 'ROU_Banat Corn',
        crop: 'Corn',
        location: {
            lat: 21.5000,
            lng: 45.5000,
            country: 'ROU',
            countryName: 'Romania',
            region: 'ROU_Banat'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.277,
        dataSource: 'model'
    },
    {
        id: 'rou-ROU_Transylvania-wheat',
        name: 'ROU_Transylvania Wheat',
        crop: 'Wheat',
        location: {
            lat: 24.0000,
            lng: 46.5000,
            country: 'ROU',
            countryName: 'Romania',
            region: 'ROU_Transylvania'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.395,
        dataSource: 'model'
    },
    {
        id: 'hun-HUN_Great_Plain_North-wheat',
        name: 'HUN_Great_Plain_North Wheat',
        crop: 'Wheat',
        location: {
            lat: 21.0000,
            lng: 47.5000,
            country: 'HUN',
            countryName: 'Hungary',
            region: 'HUN_Great_Plain_North'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.366,
        dataSource: 'model'
    },
    {
        id: 'hun-HUN_Transdanubia-corn',
        name: 'HUN_Transdanubia Corn',
        crop: 'Corn',
        location: {
            lat: 18.0000,
            lng: 47.0000,
            country: 'HUN',
            countryName: 'Hungary',
            region: 'HUN_Transdanubia'
        },
        risk: 100.0,
        confidence: 91,
        ndviMean: 0.138,
        dataSource: 'model'
    },
    {
        id: 'esp-ESP_Castilla_La_Mancha-wheat',
        name: 'ESP_Castilla_La_Mancha Wheat',
        crop: 'Wheat',
        location: {
            lat: -3.0000,
            lng: 39.5000,
            country: 'ESP',
            countryName: 'Spain',
            region: 'ESP_Castilla_La_Mancha'
        },
        risk: 99.8,
        confidence: 88,
        ndviMean: 0.141,
        dataSource: 'model'
    },
    {
        id: 'esp-ESP_Castilla_Leon-wheat',
        name: 'ESP_Castilla_Leon Wheat',
        crop: 'Wheat',
        location: {
            lat: -4.0000,
            lng: 41.5000,
            country: 'ESP',
            countryName: 'Spain',
            region: 'ESP_Castilla_Leon'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.228,
        dataSource: 'model'
    },
    {
        id: 'ita-ITA_Po_Valley_West-corn',
        name: 'ITA_Po_Valley_West Corn',
        crop: 'Corn',
        location: {
            lat: 8.5000,
            lng: 45.0000,
            country: 'ITA',
            countryName: 'Italy',
            region: 'ITA_Po_Valley_West'
        },
        risk: 0.0,
        confidence: 79,
        ndviMean: 0.241,
        dataSource: 'model'
    },
    {
        id: 'esp-ESP_Aragon-wheat',
        name: 'ESP_Aragon Wheat',
        crop: 'Wheat',
        location: {
            lat: -0.5000,
            lng: 41.5000,
            country: 'ESP',
            countryName: 'Spain',
            region: 'ESP_Aragon'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.304,
        dataSource: 'model'
    },
    {
        id: 'esp-ESP_Andalusia-wheat',
        name: 'ESP_Andalusia Wheat',
        crop: 'Wheat',
        location: {
            lat: -5.0000,
            lng: 37.5000,
            country: 'ESP',
            countryName: 'Spain',
            region: 'ESP_Andalusia'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.155,
        dataSource: 'model'
    },
    {
        id: 'ita-ITA_Emilia_Romagna-wheat',
        name: 'ITA_Emilia_Romagna Wheat',
        crop: 'Wheat',
        location: {
            lat: 11.0000,
            lng: 44.5000,
            country: 'ITA',
            countryName: 'Italy',
            region: 'ITA_Emilia_Romagna'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.353,
        dataSource: 'model'
    },
    {
        id: 'gbr-GBR_Yorkshire-wheat',
        name: 'GBR_Yorkshire Wheat',
        crop: 'Wheat',
        location: {
            lat: -1.0000,
            lng: 54.0000,
            country: 'GBR',
            countryName: 'UK',
            region: 'GBR_Yorkshire'
        },
        risk: 0.0,
        confidence: 82,
        ndviMean: 0.376,
        dataSource: 'model'
    },
    {
        id: 'ita-ITA_Puglia-wheat',
        name: 'ITA_Puglia Wheat',
        crop: 'Wheat',
        location: {
            lat: 16.5000,
            lng: 41.0000,
            country: 'ITA',
            countryName: 'Italy',
            region: 'ITA_Puglia'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.267,
        dataSource: 'model'
    },
    {
        id: 'gbr-GBR_Lincolnshire-wheat',
        name: 'GBR_Lincolnshire Wheat',
        crop: 'Wheat',
        location: {
            lat: -0.2000,
            lng: 53.0000,
            country: 'GBR',
            countryName: 'UK',
            region: 'GBR_Lincolnshire'
        },
        risk: 0.0,
        confidence: 85,
        ndviMean: 0.388,
        dataSource: 'model'
    },
    {
        id: 'gbr-GBR_East_Anglia-wheat',
        name: 'GBR_East_Anglia Wheat',
        crop: 'Wheat',
        location: {
            lat: 1.0000,
            lng: 52.5000,
            country: 'GBR',
            countryName: 'UK',
            region: 'GBR_East_Anglia'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.42,
        dataSource: 'model'
    },
    {
        id: 'cze-CZE_South_Moravia-corn',
        name: 'CZE_South_Moravia Corn',
        crop: 'Corn',
        location: {
            lat: 16.5000,
            lng: 49.0000,
            country: 'CZE',
            countryName: 'Czech Republic',
            region: 'CZE_South_Moravia'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.339,
        dataSource: 'model'
    },
    {
        id: 'cze-CZE_Central_Bohemia-wheat',
        name: 'CZE_Central_Bohemia Wheat',
        crop: 'Wheat',
        location: {
            lat: 14.5000,
            lng: 50.0000,
            country: 'CZE',
            countryName: 'Czech Republic',
            region: 'CZE_Central_Bohemia'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.333,
        dataSource: 'model'
    },
    {
        id: 'srb-SRB_Central_Serbia-wheat',
        name: 'SRB_Central_Serbia Wheat',
        crop: 'Wheat',
        location: {
            lat: 21.0000,
            lng: 44.0000,
            country: 'SRB',
            countryName: 'Serbia',
            region: 'SRB_Central_Serbia'
        },
        risk: 0.0,
        confidence: 88,
        ndviMean: 0.486,
        dataSource: 'model'
    },
    {
        id: 'bgr-BGR_Danubian_Plain-wheat',
        name: 'BGR_Danubian_Plain Wheat',
        crop: 'Wheat',
        location: {
            lat: 25.5000,
            lng: 43.5000,
            country: 'BGR',
            countryName: 'Bulgaria',
            region: 'BGR_Danubian_Plain'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.233,
        dataSource: 'model'
    },
    {
        id: 'bgr-BGR_Thrace-corn',
        name: 'BGR_Thrace Corn',
        crop: 'Corn',
        location: {
            lat: 25.0000,
            lng: 42.0000,
            country: 'BGR',
            countryName: 'Bulgaria',
            region: 'BGR_Thrace'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.308,
        dataSource: 'model'
    },
    {
        id: 'srb-SRB_Vojvodina-corn',
        name: 'SRB_Vojvodina Corn',
        crop: 'Corn',
        location: {
            lat: 19.8000,
            lng: 45.3000,
            country: 'SRB',
            countryName: 'Serbia',
            region: 'SRB_Vojvodina'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.269,
        dataSource: 'model'
    },
    {
        id: 'grc-GRC_Central_Macedonia-corn',
        name: 'GRC_Central_Macedonia Corn',
        crop: 'Corn',
        location: {
            lat: 23.0000,
            lng: 40.5000,
            country: 'GRC',
            countryName: 'Greece',
            region: 'GRC_Central_Macedonia'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.276,
        dataSource: 'model'
    },
    {
        id: 'dnk-DNK_Jutland-wheat',
        name: 'DNK_Jutland Wheat',
        crop: 'Wheat',
        location: {
            lat: 9.5000,
            lng: 56.0000,
            country: 'DNK',
            countryName: 'Denmark',
            region: 'DNK_Jutland'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.474,
        dataSource: 'model'
    },
    {
        id: 'grc-GRC_Thessaly-wheat',
        name: 'GRC_Thessaly Wheat',
        crop: 'Wheat',
        location: {
            lat: 22.0000,
            lng: 39.5000,
            country: 'GRC',
            countryName: 'Greece',
            region: 'GRC_Thessaly'
        },
        risk: 0.1,
        confidence: 91,
        ndviMean: 0.293,
        dataSource: 'model'
    },
    {
        id: 'swe-SWE_Skane-wheat',
        name: 'SWE_Skane Wheat',
        crop: 'Wheat',
        location: {
            lat: 13.5000,
            lng: 55.8000,
            country: 'SWE',
            countryName: 'Sweden',
            region: 'SWE_Skane'
        },
        risk: 0.0,
        confidence: 79,
        ndviMean: 0.473,
        dataSource: 'model'
    },
    {
        id: 'fin-FIN_Varsinais_Suomi-wheat',
        name: 'FIN_Varsinais_Suomi Wheat',
        crop: 'Wheat',
        location: {
            lat: 22.5000,
            lng: 60.5000,
            country: 'FIN',
            countryName: 'Finland',
            region: 'FIN_Varsinais_Suomi'
        },
        risk: 0.0,
        confidence: 88,
        ndviMean: 0.385,
        dataSource: 'model'
    },
    {
        id: 'dnk-DNK_Zealand-wheat',
        name: 'DNK_Zealand Wheat',
        crop: 'Wheat',
        location: {
            lat: 12.0000,
            lng: 55.5000,
            country: 'DNK',
            countryName: 'Denmark',
            region: 'DNK_Zealand'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.454,
        dataSource: 'model'
    },
    {
        id: 'aut-AUT_Burgenland-corn',
        name: 'AUT_Burgenland Corn',
        crop: 'Corn',
        location: {
            lat: 16.5000,
            lng: 47.5000,
            country: 'AUT',
            countryName: 'Austria',
            region: 'AUT_Burgenland'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.388,
        dataSource: 'model'
    },
    {
        id: 'swe-SWE_Ostergotland-wheat',
        name: 'SWE_Ostergotland Wheat',
        crop: 'Wheat',
        location: {
            lat: 15.6000,
            lng: 58.4000,
            country: 'SWE',
            countryName: 'Sweden',
            region: 'SWE_Ostergotland'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.347,
        dataSource: 'model'
    },
    {
        id: 'fin-FIN_Uusimaa-wheat',
        name: 'FIN_Uusimaa Wheat',
        crop: 'Wheat',
        location: {
            lat: 25.0000,
            lng: 60.2000,
            country: 'FIN',
            countryName: 'Finland',
            region: 'FIN_Uusimaa'
        },
        risk: 100.0,
        confidence: 91,
        ndviMean: -0.05,
        dataSource: 'model'
    },
    {
        id: 'aut-AUT_Lower_Austria-wheat',
        name: 'AUT_Lower_Austria Wheat',
        crop: 'Wheat',
        location: {
            lat: 15.8000,
            lng: 48.3000,
            country: 'AUT',
            countryName: 'Austria',
            region: 'AUT_Lower_Austria'
        },
        risk: 0.0,
        confidence: 88,
        ndviMean: 0.331,
        dataSource: 'model'
    },
    {
        id: 'nld-NLD_Zeeland-wheat',
        name: 'NLD_Zeeland Wheat',
        crop: 'Wheat',
        location: {
            lat: 3.8000,
            lng: 51.5000,
            country: 'NLD',
            countryName: 'Netherlands',
            region: 'NLD_Zeeland'
        },
        risk: 0.1,
        confidence: 91,
        ndviMean: 0.325,
        dataSource: 'model'
    },
    {
        id: 'nld-NLD_Flevoland-wheat',
        name: 'NLD_Flevoland Wheat',
        crop: 'Wheat',
        location: {
            lat: 5.5000,
            lng: 52.5000,
            country: 'NLD',
            countryName: 'Netherlands',
            region: 'NLD_Flevoland'
        },
        risk: 0.0,
        confidence: 88,
        ndviMean: 0.308,
        dataSource: 'model'
    },
    {
        id: 'tur-TUR_Southeastern_Anatolia-wheat',
        name: 'TUR_Southeastern_Anatolia Wheat',
        crop: 'Wheat',
        location: {
            lat: 39.0000,
            lng: 37.5000,
            country: 'TUR',
            countryName: 'Turkey',
            region: 'TUR_Southeastern_Anatolia'
        },
        risk: 99.9,
        confidence: 91,
        ndviMean: 0.133,
        dataSource: 'model'
    },
    {
        id: 'bel-BEL_Wallonia-wheat',
        name: 'BEL_Wallonia Wheat',
        crop: 'Wheat',
        location: {
            lat: 4.5000,
            lng: 50.5000,
            country: 'BEL',
            countryName: 'Belgium',
            region: 'BEL_Wallonia'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.375,
        dataSource: 'model'
    },
    {
        id: 'tur-TUR_Marmara-wheat',
        name: 'TUR_Marmara Wheat',
        crop: 'Wheat',
        location: {
            lat: 29.0000,
            lng: 40.5000,
            country: 'TUR',
            countryName: 'Turkey',
            region: 'TUR_Marmara'
        },
        risk: 0.0,
        confidence: 88,
        ndviMean: 0.441,
        dataSource: 'model'
    },
    {
        id: 'bel-BEL_Flanders-wheat',
        name: 'BEL_Flanders Wheat',
        crop: 'Wheat',
        location: {
            lat: 3.5000,
            lng: 51.0000,
            country: 'BEL',
            countryName: 'Belgium',
            region: 'BEL_Flanders'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.405,
        dataSource: 'model'
    },
    {
        id: 'prt-PRT_Alentejo-wheat',
        name: 'PRT_Alentejo Wheat',
        crop: 'Wheat',
        location: {
            lat: -7.5000,
            lng: 38.5000,
            country: 'PRT',
            countryName: 'Portugal',
            region: 'PRT_Alentejo'
        },
        risk: 99.7,
        confidence: 91,
        ndviMean: 0.151,
        dataSource: 'model'
    },
    {
        id: 'tur-TUR_Central_Anatolia-wheat',
        name: 'TUR_Central_Anatolia Wheat',
        crop: 'Wheat',
        location: {
            lat: 32.5000,
            lng: 39.0000,
            country: 'TUR',
            countryName: 'Turkey',
            region: 'TUR_Central_Anatolia'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.162,
        dataSource: 'model'
    },
    {
        id: 'tur-TUR_Aegean-corn',
        name: 'TUR_Aegean Corn',
        crop: 'Corn',
        location: {
            lat: 27.5000,
            lng: 38.5000,
            country: 'TUR',
            countryName: 'Turkey',
            region: 'TUR_Aegean'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.422,
        dataSource: 'model'
    },
    {
        id: 'irn-IRN_Khuzestan-wheat',
        name: 'IRN_Khuzestan Wheat',
        crop: 'Wheat',
        location: {
            lat: 48.5000,
            lng: 31.5000,
            country: 'IRN',
            countryName: 'Iran',
            region: 'IRN_Khuzestan'
        },
        risk: 0.1,
        confidence: 91,
        ndviMean: 0.247,
        dataSource: 'model'
    },
    {
        id: 'irn-IRN_Khorasan-wheat',
        name: 'IRN_Khorasan Wheat',
        crop: 'Wheat',
        location: {
            lat: 59.0000,
            lng: 36.0000,
            country: 'IRN',
            countryName: 'Iran',
            region: 'IRN_Khorasan'
        },
        risk: 100.0,
        confidence: 91,
        ndviMean: 0.056,
        dataSource: 'model'
    },
    {
        id: 'irn-IRN_Fars-wheat',
        name: 'IRN_Fars Wheat',
        crop: 'Wheat',
        location: {
            lat: 52.5000,
            lng: 29.5000,
            country: 'IRN',
            countryName: 'Iran',
            region: 'IRN_Fars'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.18,
        dataSource: 'model'
    },
    {
        id: 'irn-IRN_East_Azerbaijan-wheat',
        name: 'IRN_East_Azerbaijan Wheat',
        crop: 'Wheat',
        location: {
            lat: 46.0000,
            lng: 38.0000,
            country: 'IRN',
            countryName: 'Iran',
            region: 'IRN_East_Azerbaijan'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.331,
        dataSource: 'model'
    },
    {
        id: 'pak-PAK_Punjab_Rice-rice',
        name: 'PAK_Punjab_Rice Rice',
        crop: 'Rice',
        location: {
            lat: 74.5000,
            lng: 31.5000,
            country: 'PAK',
            countryName: 'Pakistan',
            region: 'PAK_Punjab_Rice'
        },
        risk: 0.0,
        confidence: 88,
        ndviMean: 0.299,
        dataSource: 'model'
    },
    {
        id: 'pak-PAK_Punjab_North-wheat',
        name: 'PAK_Punjab_North Wheat',
        crop: 'Wheat',
        location: {
            lat: 74.0000,
            lng: 32.0000,
            country: 'PAK',
            countryName: 'Pakistan',
            region: 'PAK_Punjab_North'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.254,
        dataSource: 'model'
    },
    {
        id: 'kaz-KAZ_North_Kazakhstan-wheat',
        name: 'KAZ_North_Kazakhstan Wheat',
        crop: 'Wheat',
        location: {
            lat: 69.0000,
            lng: 52.0000,
            country: 'KAZ',
            countryName: 'Kazakhstan',
            region: 'KAZ_North_Kazakhstan'
        },
        risk: 0.1,
        confidence: 91,
        ndviMean: 0.176,
        dataSource: 'model'
    },
    {
        id: 'kaz-KAZ_Akmola-wheat',
        name: 'KAZ_Akmola Wheat',
        crop: 'Wheat',
        location: {
            lat: 71.5000,
            lng: 51.5000,
            country: 'KAZ',
            countryName: 'Kazakhstan',
            region: 'KAZ_Akmola'
        },
        risk: 0.1,
        confidence: 91,
        ndviMean: 0.157,
        dataSource: 'model'
    },
    {
        id: 'pak-PAK_Sindh-wheat',
        name: 'PAK_Sindh Wheat',
        crop: 'Wheat',
        location: {
            lat: 68.5000,
            lng: 26.0000,
            country: 'PAK',
            countryName: 'Pakistan',
            region: 'PAK_Sindh'
        },
        risk: 0.1,
        confidence: 91,
        ndviMean: 0.313,
        dataSource: 'model'
    },
    {
        id: 'pak-PAK_Punjab_South-wheat',
        name: 'PAK_Punjab_South Wheat',
        crop: 'Wheat',
        location: {
            lat: 71.5000,
            lng: 30.0000,
            country: 'PAK',
            countryName: 'Pakistan',
            region: 'PAK_Punjab_South'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.291,
        dataSource: 'model'
    },
    {
        id: 'kaz-KAZ_Kostanay-wheat',
        name: 'KAZ_Kostanay Wheat',
        crop: 'Wheat',
        location: {
            lat: 63.5000,
            lng: 52.5000,
            country: 'KAZ',
            countryName: 'Kazakhstan',
            region: 'KAZ_Kostanay'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.236,
        dataSource: 'model'
    },
    {
        id: 'kaz-KAZ_Karaganda-wheat',
        name: 'KAZ_Karaganda Wheat',
        crop: 'Wheat',
        location: {
            lat: 73.1000,
            lng: 49.8000,
            country: 'KAZ',
            countryName: 'Kazakhstan',
            region: 'KAZ_Karaganda'
        },
        risk: 0.1,
        confidence: 91,
        ndviMean: 0.194,
        dataSource: 'model'
    },
    {
        id: 'uzb-UZB_Bukhara-cotton',
        name: 'UZB_Bukhara Cotton',
        crop: 'Cotton',
        location: {
            lat: 64.4200,
            lng: 39.7700,
            country: 'UZB',
            countryName: 'Uzbekistan',
            region: 'UZB_Bukhara'
        },
        risk: 100.0,
        confidence: 88,
        ndviMean: 0.059,
        dataSource: 'model'
    },
    {
        id: 'uzb-UZB_Tashkent-wheat',
        name: 'UZB_Tashkent Wheat',
        crop: 'Wheat',
        location: {
            lat: 69.3000,
            lng: 41.3000,
            country: 'UZB',
            countryName: 'Uzbekistan',
            region: 'UZB_Tashkent'
        },
        risk: 100.0,
        confidence: 91,
        ndviMean: 0.114,
        dataSource: 'model'
    },
    {
        id: 'uzb-UZB_Samarkand-wheat',
        name: 'UZB_Samarkand Wheat',
        crop: 'Wheat',
        location: {
            lat: 66.9600,
            lng: 39.6500,
            country: 'UZB',
            countryName: 'Uzbekistan',
            region: 'UZB_Samarkand'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.241,
        dataSource: 'model'
    },
    {
        id: 'uzb-UZB_Fergana-cotton',
        name: 'UZB_Fergana Cotton',
        crop: 'Cotton',
        location: {
            lat: 71.7900,
            lng: 40.3800,
            country: 'UZB',
            countryName: 'Uzbekistan',
            region: 'UZB_Fergana'
        },
        risk: 0.6,
        confidence: 91,
        ndviMean: 0.164,
        dataSource: 'model'
    },
    {
        id: 'irq-IRQ_Kirkuk-wheat',
        name: 'IRQ_Kirkuk Wheat',
        crop: 'Wheat',
        location: {
            lat: 44.3900,
            lng: 35.4700,
            country: 'IRQ',
            countryName: 'Iraq',
            region: 'IRQ_Kirkuk'
        },
        risk: 100.0,
        confidence: 91,
        ndviMean: 0.078,
        dataSource: 'model'
    },
    {
        id: 'irq-IRQ_Nineveh-wheat',
        name: 'IRQ_Nineveh Wheat',
        crop: 'Wheat',
        location: {
            lat: 43.1600,
            lng: 36.3500,
            country: 'IRQ',
            countryName: 'Iraq',
            region: 'IRQ_Nineveh'
        },
        risk: 100.0,
        confidence: 91,
        ndviMean: 0.049,
        dataSource: 'model'
    },
    {
        id: 'syr-SYR_Aleppo-wheat',
        name: 'SYR_Aleppo Wheat',
        crop: 'Wheat',
        location: {
            lat: 37.1500,
            lng: 36.2000,
            country: 'SYR',
            countryName: 'Syria',
            region: 'SYR_Aleppo'
        },
        risk: 100.0,
        confidence: 91,
        ndviMean: 0.072,
        dataSource: 'model'
    },
    {
        id: 'sau-SAU_Al_Qassim-wheat',
        name: 'SAU_Al_Qassim Wheat',
        crop: 'Wheat',
        location: {
            lat: 43.9700,
            lng: 26.3300,
            country: 'SAU',
            countryName: 'Saudi Arabia',
            region: 'SAU_Al_Qassim'
        },
        risk: 100.0,
        confidence: 91,
        ndviMean: 0.027,
        dataSource: 'model'
    },
    {
        id: 'isr-ISR_Jezreel_Valley-wheat',
        name: 'ISR_Jezreel_Valley Wheat',
        crop: 'Wheat',
        location: {
            lat: 35.3000,
            lng: 32.6000,
            country: 'ISR',
            countryName: 'Israel',
            region: 'ISR_Jezreel_Valley'
        },
        risk: 100.0,
        confidence: 88,
        ndviMean: 0.1,
        dataSource: 'model'
    },
    {
        id: 'syr-SYR_Al_Hasakah-wheat',
        name: 'SYR_Al_Hasakah Wheat',
        crop: 'Wheat',
        location: {
            lat: 40.7500,
            lng: 36.5000,
            country: 'SYR',
            countryName: 'Syria',
            region: 'SYR_Al_Hasakah'
        },
        risk: 100.0,
        confidence: 91,
        ndviMean: 0.07,
        dataSource: 'model'
    },
    {
        id: 'bgd-BGD_Rangpur-rice',
        name: 'BGD_Rangpur Rice',
        crop: 'Rice',
        location: {
            lat: 89.2500,
            lng: 25.7500,
            country: 'BGD',
            countryName: 'Bangladesh',
            region: 'BGD_Rangpur'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.237,
        dataSource: 'model'
    },
    {
        id: 'sau-SAU_Riyadh_Region-wheat',
        name: 'SAU_Riyadh_Region Wheat',
        crop: 'Wheat',
        location: {
            lat: 46.7000,
            lng: 24.7000,
            country: 'SAU',
            countryName: 'Saudi Arabia',
            region: 'SAU_Riyadh_Region'
        },
        risk: 100.0,
        confidence: 91,
        ndviMean: 0.078,
        dataSource: 'model'
    },
    {
        id: 'bgd-BGD_Rajshahi-rice',
        name: 'BGD_Rajshahi Rice',
        crop: 'Rice',
        location: {
            lat: 88.6000,
            lng: 24.3700,
            country: 'BGD',
            countryName: 'Bangladesh',
            region: 'BGD_Rajshahi'
        },
        risk: 100.0,
        confidence: 91,
        ndviMean: 0.141,
        dataSource: 'model'
    },
    {
        id: 'bgd-BGD_Dhaka-rice',
        name: 'BGD_Dhaka Rice',
        crop: 'Rice',
        location: {
            lat: 90.4000,
            lng: 23.8000,
            country: 'BGD',
            countryName: 'Bangladesh',
            region: 'BGD_Dhaka'
        },
        risk: 0.0,
        confidence: 88,
        ndviMean: 0.318,
        dataSource: 'model'
    },
    {
        id: 'bgd-BGD_Khulna-rice',
        name: 'BGD_Khulna Rice',
        crop: 'Rice',
        location: {
            lat: 89.5500,
            lng: 22.8200,
            country: 'BGD',
            countryName: 'Bangladesh',
            region: 'BGD_Khulna'
        },
        risk: 0.0,
        confidence: 88,
        ndviMean: 0.191,
        dataSource: 'model'
    },
    {
        id: 'bgd-BGD_Chittagong-rice',
        name: 'BGD_Chittagong Rice',
        crop: 'Rice',
        location: {
            lat: 91.7800,
            lng: 22.3600,
            country: 'BGD',
            countryName: 'Bangladesh',
            region: 'BGD_Chittagong'
        },
        risk: 0.1,
        confidence: 88,
        ndviMean: 0.201,
        dataSource: 'model'
    },
    {
        id: 'isr-ISR_Negev-wheat',
        name: 'ISR_Negev Wheat',
        crop: 'Wheat',
        location: {
            lat: 34.8000,
            lng: 31.0000,
            country: 'ISR',
            countryName: 'Israel',
            region: 'ISR_Negev'
        },
        risk: 100.0,
        confidence: 91,
        ndviMean: 0.065,
        dataSource: 'model'
    },
    {
        id: 'mmr-MMR_Ayeyarwady-rice',
        name: 'MMR_Ayeyarwady Rice',
        crop: 'Rice',
        location: {
            lat: 95.0000,
            lng: 17.0000,
            country: 'MMR',
            countryName: 'Myanmar',
            region: 'MMR_Ayeyarwady'
        },
        risk: 100.0,
        confidence: 82,
        ndviMean: 0.031,
        dataSource: 'model'
    },
    {
        id: 'mmr-MMR_Sagaing-rice',
        name: 'MMR_Sagaing Rice',
        crop: 'Rice',
        location: {
            lat: 95.5000,
            lng: 22.0000,
            country: 'MMR',
            countryName: 'Myanmar',
            region: 'MMR_Sagaing'
        },
        risk: 0.0,
        confidence: 88,
        ndviMean: 0.24,
        dataSource: 'model'
    },
    {
        id: 'mmr-MMR_Mandalay-rice',
        name: 'MMR_Mandalay Rice',
        crop: 'Rice',
        location: {
            lat: 96.0800,
            lng: 21.9700,
            country: 'MMR',
            countryName: 'Myanmar',
            region: 'MMR_Mandalay'
        },
        risk: 100.0,
        confidence: 88,
        ndviMean: 0.117,
        dataSource: 'model'
    },
    {
        id: 'phl-PHL_Cagayan_Valley-rice',
        name: 'PHL_Cagayan_Valley Rice',
        crop: 'Rice',
        location: {
            lat: 121.5000,
            lng: 17.5000,
            country: 'PHL',
            countryName: 'Philippines',
            region: 'PHL_Cagayan_Valley'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.473,
        dataSource: 'model'
    },
    {
        id: 'mmr-MMR_Bago-rice',
        name: 'MMR_Bago Rice',
        crop: 'Rice',
        location: {
            lat: 96.5000,
            lng: 18.0000,
            country: 'MMR',
            countryName: 'Myanmar',
            region: 'MMR_Bago'
        },
        risk: 0.0,
        confidence: 82,
        ndviMean: 0.462,
        dataSource: 'model'
    },
    {
        id: 'phl-PHL_Western_Visayas-rice',
        name: 'PHL_Western_Visayas Rice',
        crop: 'Rice',
        location: {
            lat: 122.5000,
            lng: 11.0000,
            country: 'PHL',
            countryName: 'Philippines',
            region: 'PHL_Western_Visayas'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.498,
        dataSource: 'model'
    },
    {
        id: 'khm-KHM_Kampong_Thom-rice',
        name: 'KHM_Kampong_Thom Rice',
        crop: 'Rice',
        location: {
            lat: 104.8900,
            lng: 12.7100,
            country: 'KHM',
            countryName: 'Cambodia',
            region: 'KHM_Kampong_Thom'
        },
        risk: 99.9,
        confidence: 85,
        ndviMean: 0.149,
        dataSource: 'model'
    },
    {
        id: 'phl-PHL_Central_Luzon-rice',
        name: 'PHL_Central_Luzon Rice',
        crop: 'Rice',
        location: {
            lat: 120.5000,
            lng: 15.5000,
            country: 'PHL',
            countryName: 'Philippines',
            region: 'PHL_Central_Luzon'
        },
        risk: 0.0,
        confidence: 88,
        ndviMean: 0.419,
        dataSource: 'model'
    },
    {
        id: 'phl-PHL_Ilocos-rice',
        name: 'PHL_Ilocos Rice',
        crop: 'Rice',
        location: {
            lat: 120.4000,
            lng: 17.5000,
            country: 'PHL',
            countryName: 'Philippines',
            region: 'PHL_Ilocos'
        },
        risk: 99.9,
        confidence: 91,
        ndviMean: 0.133,
        dataSource: 'model'
    },
    {
        id: 'khm-KHM_Prey_Veng-rice',
        name: 'KHM_Prey_Veng Rice',
        crop: 'Rice',
        location: {
            lat: 105.3200,
            lng: 11.4800,
            country: 'KHM',
            countryName: 'Cambodia',
            region: 'KHM_Prey_Veng'
        },
        risk: 99.9,
        confidence: 88,
        ndviMean: 0.118,
        dataSource: 'model'
    },
    {
        id: 'khm-KHM_Battambang-rice',
        name: 'KHM_Battambang Rice',
        crop: 'Rice',
        location: {
            lat: 103.2000,
            lng: 13.1000,
            country: 'KHM',
            countryName: 'Cambodia',
            region: 'KHM_Battambang'
        },
        risk: 100.0,
        confidence: 82,
        ndviMean: 0.128,
        dataSource: 'model'
    },
    {
        id: 'npl-NPL_Terai_East-rice',
        name: 'NPL_Terai_East Rice',
        crop: 'Rice',
        location: {
            lat: 87.0000,
            lng: 26.5000,
            country: 'NPL',
            countryName: 'Nepal',
            region: 'NPL_Terai_East'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.358,
        dataSource: 'model'
    },
    {
        id: 'npl-NPL_Terai_West-wheat',
        name: 'NPL_Terai_West Wheat',
        crop: 'Wheat',
        location: {
            lat: 82.0000,
            lng: 28.0000,
            country: 'NPL',
            countryName: 'Nepal',
            region: 'NPL_Terai_West'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.36,
        dataSource: 'model'
    },
    {
        id: 'lka-LKA_North_Central-rice',
        name: 'LKA_North_Central Rice',
        crop: 'Rice',
        location: {
            lat: 80.5000,
            lng: 8.3500,
            country: 'LKA',
            countryName: 'Sri Lanka',
            region: 'LKA_North_Central'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.366,
        dataSource: 'model'
    },
    {
        id: 'jpn-JPN_Tohoku-rice',
        name: 'JPN_Tohoku Rice',
        crop: 'Rice',
        location: {
            lat: 140.0000,
            lng: 39.0000,
            country: 'JPN',
            countryName: 'Japan',
            region: 'JPN_Tohoku'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.413,
        dataSource: 'model'
    },
    {
        id: 'lka-LKA_Eastern-rice',
        name: 'LKA_Eastern Rice',
        crop: 'Rice',
        location: {
            lat: 81.6900,
            lng: 7.7300,
            country: 'LKA',
            countryName: 'Sri Lanka',
            region: 'LKA_Eastern'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.279,
        dataSource: 'model'
    },
    {
        id: 'jpn-JPN_Hokkaido-rice',
        name: 'JPN_Hokkaido Rice',
        crop: 'Rice',
        location: {
            lat: 141.3500,
            lng: 43.0600,
            country: 'JPN',
            countryName: 'Japan',
            region: 'JPN_Hokkaido'
        },
        risk: 100.0,
        confidence: 88,
        ndviMean: 0.079,
        dataSource: 'model'
    },
    {
        id: 'jpn-JPN_Akita-rice',
        name: 'JPN_Akita Rice',
        crop: 'Rice',
        location: {
            lat: 140.1000,
            lng: 39.7200,
            country: 'JPN',
            countryName: 'Japan',
            region: 'JPN_Akita'
        },
        risk: 0.1,
        confidence: 91,
        ndviMean: 0.178,
        dataSource: 'model'
    },
    {
        id: 'jpn-JPN_Niigata-rice',
        name: 'JPN_Niigata Rice',
        crop: 'Rice',
        location: {
            lat: 139.0000,
            lng: 37.9000,
            country: 'JPN',
            countryName: 'Japan',
            region: 'JPN_Niigata'
        },
        risk: 100.0,
        confidence: 91,
        ndviMean: 0.119,
        dataSource: 'model'
    },
    {
        id: 'kor-KOR_Chungcheong_South-rice',
        name: 'KOR_Chungcheong_South Rice',
        crop: 'Rice',
        location: {
            lat: 127.0000,
            lng: 36.5000,
            country: 'KOR',
            countryName: 'South Korea',
            region: 'KOR_Chungcheong_South'
        },
        risk: 0.0,
        confidence: 88,
        ndviMean: 0.457,
        dataSource: 'model'
    },
    {
        id: 'prk-PRK_South_Hwanghae-rice',
        name: 'PRK_South_Hwanghae Rice',
        crop: 'Rice',
        location: {
            lat: 125.5000,
            lng: 38.5000,
            country: 'PRK',
            countryName: 'North Korea',
            region: 'PRK_South_Hwanghae'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.276,
        dataSource: 'model'
    },
    {
        id: 'kor-KOR_Gyeongsang_North-rice',
        name: 'KOR_Gyeongsang_North Rice',
        crop: 'Rice',
        location: {
            lat: 128.5000,
            lng: 36.0000,
            country: 'KOR',
            countryName: 'South Korea',
            region: 'KOR_Gyeongsang_North'
        },
        risk: 0.0,
        confidence: 85,
        ndviMean: 0.463,
        dataSource: 'model'
    },
    {
        id: 'kor-KOR_Jeolla_South-rice',
        name: 'KOR_Jeolla_South Rice',
        crop: 'Rice',
        location: {
            lat: 126.9000,
            lng: 35.0000,
            country: 'KOR',
            countryName: 'South Korea',
            region: 'KOR_Jeolla_South'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.34,
        dataSource: 'model'
    },
    {
        id: 'mys-MYS_Perak-rice',
        name: 'MYS_Perak Rice',
        crop: 'Rice',
        location: {
            lat: 101.0900,
            lng: 4.5900,
            country: 'MYS',
            countryName: 'Malaysia',
            region: 'MYS_Perak'
        },
        risk: 0.0,
        confidence: 88,
        ndviMean: 0.236,
        dataSource: 'model'
    },
    {
        id: 'prk-PRK_North_Hwanghae-corn',
        name: 'PRK_North_Hwanghae Corn',
        crop: 'Corn',
        location: {
            lat: 126.5000,
            lng: 38.8000,
            country: 'PRK',
            countryName: 'North Korea',
            region: 'PRK_North_Hwanghae'
        },
        risk: 0.0,
        confidence: 85,
        ndviMean: 0.513,
        dataSource: 'model'
    },
    {
        id: 'twn-TWN_Chiayi-rice',
        name: 'TWN_Chiayi Rice',
        crop: 'Rice',
        location: {
            lat: 120.4500,
            lng: 23.4800,
            country: 'TWN',
            countryName: 'Taiwan',
            region: 'TWN_Chiayi'
        },
        risk: 100.0,
        confidence: 88,
        ndviMean: 0.072,
        dataSource: 'model'
    },
    {
        id: 'twn-TWN_Tainan-rice',
        name: 'TWN_Tainan Rice',
        crop: 'Rice',
        location: {
            lat: 120.2000,
            lng: 23.0000,
            country: 'TWN',
            countryName: 'Taiwan',
            region: 'TWN_Tainan'
        },
        risk: 100.0,
        confidence: 85,
        ndviMean: 0.053,
        dataSource: 'model'
    },
    {
        id: 'mys-MYS_Kedah-rice',
        name: 'MYS_Kedah Rice',
        crop: 'Rice',
        location: {
            lat: 100.3700,
            lng: 6.1200,
            country: 'MYS',
            countryName: 'Malaysia',
            region: 'MYS_Kedah'
        },
        risk: 0.1,
        confidence: 85,
        ndviMean: 0.185,
        dataSource: 'model'
    },
    {
        id: 'mex-MEX_Michoacan-corn',
        name: 'MEX_Michoacan Corn',
        crop: 'Corn',
        location: {
            lat: -102.0000,
            lng: 19.5000,
            country: 'MEX',
            countryName: 'Mexico',
            region: 'MEX_Michoacan'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.334,
        dataSource: 'model'
    },
    {
        id: 'mex-MEX_Jalisco-corn',
        name: 'MEX_Jalisco Corn',
        crop: 'Corn',
        location: {
            lat: -103.5000,
            lng: 20.5000,
            country: 'MEX',
            countryName: 'Mexico',
            region: 'MEX_Jalisco'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.285,
        dataSource: 'model'
    },
    {
        id: 'mex-MEX_Sinaloa-corn',
        name: 'MEX_Sinaloa Corn',
        crop: 'Corn',
        location: {
            lat: -107.5000,
            lng: 25.0000,
            country: 'MEX',
            countryName: 'Mexico',
            region: 'MEX_Sinaloa'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.303,
        dataSource: 'model'
    },
    {
        id: 'mex-MEX_Guanajuato-corn',
        name: 'MEX_Guanajuato Corn',
        crop: 'Corn',
        location: {
            lat: -101.0000,
            lng: 21.0000,
            country: 'MEX',
            countryName: 'Mexico',
            region: 'MEX_Guanajuato'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.178,
        dataSource: 'model'
    },
    {
        id: 'mex-MEX_Chiapas-corn',
        name: 'MEX_Chiapas Corn',
        crop: 'Corn',
        location: {
            lat: -93.0000,
            lng: 16.5000,
            country: 'MEX',
            countryName: 'Mexico',
            region: 'MEX_Chiapas'
        },
        risk: 0.0,
        confidence: 88,
        ndviMean: 0.285,
        dataSource: 'model'
    },
    {
        id: 'mex-MEX_Sonora-wheat',
        name: 'MEX_Sonora Wheat',
        crop: 'Wheat',
        location: {
            lat: -110.5000,
            lng: 29.0000,
            country: 'MEX',
            countryName: 'Mexico',
            region: 'MEX_Sonora'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.162,
        dataSource: 'model'
    },
    {
        id: 'mex-MEX_Baja_California-wheat',
        name: 'MEX_Baja_California Wheat',
        crop: 'Wheat',
        location: {
            lat: -115.5000,
            lng: 32.0000,
            country: 'MEX',
            countryName: 'Mexico',
            region: 'MEX_Baja_California'
        },
        risk: 100.0,
        confidence: 91,
        ndviMean: 0.065,
        dataSource: 'model'
    },
    {
        id: 'pry-PRY_Caaguazu-soy',
        name: 'PRY_Caaguazu Soy',
        crop: 'Soy',
        location: {
            lat: -56.0000,
            lng: -25.5000,
            country: 'PRY',
            countryName: 'Paraguay',
            region: 'PRY_Caaguazu'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.36,
        dataSource: 'model'
    },
    {
        id: 'pry-PRY_Alto_Parana-soy',
        name: 'PRY_Alto_Parana Soy',
        crop: 'Soy',
        location: {
            lat: -55.0000,
            lng: -25.5000,
            country: 'PRY',
            countryName: 'Paraguay',
            region: 'PRY_Alto_Parana'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.385,
        dataSource: 'model'
    },
    {
        id: 'pry-PRY_Canindeyu-soy',
        name: 'PRY_Canindeyu Soy',
        crop: 'Soy',
        location: {
            lat: -55.5000,
            lng: -24.0000,
            country: 'PRY',
            countryName: 'Paraguay',
            region: 'PRY_Canindeyu'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.36,
        dataSource: 'model'
    },
    {
        id: 'pry-PRY_Itapua-soy',
        name: 'PRY_Itapua Soy',
        crop: 'Soy',
        location: {
            lat: -55.5000,
            lng: -27.0000,
            country: 'PRY',
            countryName: 'Paraguay',
            region: 'PRY_Itapua'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.322,
        dataSource: 'model'
    },
    {
        id: 'ury-URY_Soriano-soy',
        name: 'URY_Soriano Soy',
        crop: 'Soy',
        location: {
            lat: -57.5000,
            lng: -33.5000,
            country: 'URY',
            countryName: 'Uruguay',
            region: 'URY_Soriano'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.357,
        dataSource: 'model'
    },
    {
        id: 'ury-URY_Paysandu-soy',
        name: 'URY_Paysandu Soy',
        crop: 'Soy',
        location: {
            lat: -58.0000,
            lng: -32.3000,
            country: 'URY',
            countryName: 'Uruguay',
            region: 'URY_Paysandu'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.394,
        dataSource: 'model'
    },
    {
        id: 'ury-URY_Rio_Negro-soy',
        name: 'URY_Rio_Negro Soy',
        crop: 'Soy',
        location: {
            lat: -57.5000,
            lng: -33.0000,
            country: 'URY',
            countryName: 'Uruguay',
            region: 'URY_Rio_Negro'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.364,
        dataSource: 'model'
    },
    {
        id: 'col-COL_Tolima-rice',
        name: 'COL_Tolima Rice',
        crop: 'Rice',
        location: {
            lat: -75.0000,
            lng: 4.0000,
            country: 'COL',
            countryName: 'Colombia',
            region: 'COL_Tolima'
        },
        risk: 0.0,
        confidence: 82,
        ndviMean: 0.387,
        dataSource: 'model'
    },
    {
        id: 'col-COL_Meta-rice',
        name: 'COL_Meta Rice',
        crop: 'Rice',
        location: {
            lat: -73.0000,
            lng: 4.0000,
            country: 'COL',
            countryName: 'Colombia',
            region: 'COL_Meta'
        },
        risk: 0.0,
        confidence: 85,
        ndviMean: 0.355,
        dataSource: 'model'
    },
    {
        id: 'col-COL_Cordoba-corn',
        name: 'COL_Cordoba Corn',
        crop: 'Corn',
        location: {
            lat: -75.5000,
            lng: 8.5000,
            country: 'COL',
            countryName: 'Colombia',
            region: 'COL_Cordoba'
        },
        risk: 0.0,
        confidence: 85,
        ndviMean: 0.452,
        dataSource: 'model'
    },
    {
        id: 'bol-BOL_Santa_Cruz-soy',
        name: 'BOL_Santa_Cruz Soy',
        crop: 'Soy',
        location: {
            lat: -63.2000,
            lng: -17.8000,
            country: 'BOL',
            countryName: 'Bolivia',
            region: 'BOL_Santa_Cruz'
        },
        risk: 100.0,
        confidence: 88,
        ndviMean: 0.148,
        dataSource: 'model'
    },
    {
        id: 'bol-BOL_Beni-soy',
        name: 'BOL_Beni Soy',
        crop: 'Soy',
        location: {
            lat: -65.0000,
            lng: -14.8000,
            country: 'BOL',
            countryName: 'Bolivia',
            region: 'BOL_Beni'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.515,
        dataSource: 'model'
    },
    {
        id: 'per-PER_Arequipa-rice',
        name: 'PER_Arequipa Rice',
        crop: 'Rice',
        location: {
            lat: -71.5400,
            lng: -16.4000,
            country: 'PER',
            countryName: 'Peru',
            region: 'PER_Arequipa'
        },
        risk: 100.0,
        confidence: 91,
        ndviMean: 0.053,
        dataSource: 'model'
    },
    {
        id: 'ven-VEN_Portuguesa-corn',
        name: 'VEN_Portuguesa Corn',
        crop: 'Corn',
        location: {
            lat: -69.5000,
            lng: 9.0000,
            country: 'VEN',
            countryName: 'Venezuela',
            region: 'VEN_Portuguesa'
        },
        risk: 0.0,
        confidence: 79,
        ndviMean: 0.502,
        dataSource: 'model'
    },
    {
        id: 'ecu-ECU_Los_Rios-rice',
        name: 'ECU_Los_Rios Rice',
        crop: 'Rice',
        location: {
            lat: -79.5000,
            lng: -1.5000,
            country: 'ECU',
            countryName: 'Ecuador',
            region: 'ECU_Los_Rios'
        },
        risk: 0.0,
        confidence: 79,
        ndviMean: 0.477,
        dataSource: 'model'
    },
    {
        id: 'per-PER_Lambayeque-rice',
        name: 'PER_Lambayeque Rice',
        crop: 'Rice',
        location: {
            lat: -79.8400,
            lng: -6.7700,
            country: 'PER',
            countryName: 'Peru',
            region: 'PER_Lambayeque'
        },
        risk: 100.0,
        confidence: 88,
        ndviMean: 0.015,
        dataSource: 'model'
    },
    {
        id: 'ven-VEN_Barinas-corn',
        name: 'VEN_Barinas Corn',
        crop: 'Corn',
        location: {
            lat: -70.2000,
            lng: 8.6000,
            country: 'VEN',
            countryName: 'Venezuela',
            region: 'VEN_Barinas'
        },
        risk: 0.2,
        confidence: 79,
        ndviMean: 0.158,
        dataSource: 'model'
    },
    {
        id: 'ecu-ECU_Guayas-rice',
        name: 'ECU_Guayas Rice',
        crop: 'Rice',
        location: {
            lat: -79.9000,
            lng: -2.0000,
            country: 'ECU',
            countryName: 'Ecuador',
            region: 'ECU_Guayas'
        },
        risk: 0.0,
        confidence: 88,
        ndviMean: 0.483,
        dataSource: 'model'
    },
    {
        id: 'chl-CHL_OHiggins-wheat',
        name: 'CHL_OHiggins Wheat',
        crop: 'Wheat',
        location: {
            lat: -71.0000,
            lng: -34.5000,
            country: 'CHL',
            countryName: 'Chile',
            region: 'CHL_OHiggins'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.326,
        dataSource: 'model'
    },
    {
        id: 'ven-VEN_Guarico-rice',
        name: 'VEN_Guarico Rice',
        crop: 'Rice',
        location: {
            lat: -67.5000,
            lng: 8.7500,
            country: 'VEN',
            countryName: 'Venezuela',
            region: 'VEN_Guarico'
        },
        risk: 0.0,
        confidence: 88,
        ndviMean: 0.48,
        dataSource: 'model'
    },
    {
        id: 'chl-CHL_Maule-wheat',
        name: 'CHL_Maule Wheat',
        crop: 'Wheat',
        location: {
            lat: -71.5000,
            lng: -35.5000,
            country: 'CHL',
            countryName: 'Chile',
            region: 'CHL_Maule'
        },
        risk: 0.0,
        confidence: 85,
        ndviMean: 0.327,
        dataSource: 'model'
    },
    {
        id: 'chl-CHL_Biobio-wheat',
        name: 'CHL_Biobio Wheat',
        crop: 'Wheat',
        location: {
            lat: -72.5000,
            lng: -37.0000,
            country: 'CHL',
            countryName: 'Chile',
            region: 'CHL_Biobio'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.227,
        dataSource: 'model'
    },
    {
        id: 'cub-CUB_Pinar_del_Rio-rice',
        name: 'CUB_Pinar_del_Rio Rice',
        crop: 'Rice',
        location: {
            lat: -83.7000,
            lng: 22.4000,
            country: 'CUB',
            countryName: 'Cuba',
            region: 'CUB_Pinar_del_Rio'
        },
        risk: 0.0,
        confidence: 82,
        ndviMean: 0.45,
        dataSource: 'model'
    },
    {
        id: 'nzl-NZL_Canterbury-wheat',
        name: 'NZL_Canterbury Wheat',
        crop: 'Wheat',
        location: {
            lat: 172.0000,
            lng: -43.5000,
            country: 'NZL',
            countryName: 'New Zealand',
            region: 'NZL_Canterbury'
        },
        risk: 0.0,
        confidence: 85,
        ndviMean: 0.519,
        dataSource: 'model'
    },
    {
        id: 'nga-NGA_Jigawa-rice',
        name: 'NGA_Jigawa Rice',
        crop: 'Rice',
        location: {
            lat: 9.5000,
            lng: 12.5000,
            country: 'NGA',
            countryName: 'Nigeria',
            region: 'NGA_Jigawa'
        },
        risk: 0.1,
        confidence: 91,
        ndviMean: 0.186,
        dataSource: 'model'
    },
    {
        id: 'nga-NGA_Niger-rice',
        name: 'NGA_Niger Rice',
        crop: 'Rice',
        location: {
            lat: 6.0000,
            lng: 10.0000,
            country: 'NGA',
            countryName: 'Nigeria',
            region: 'NGA_Niger'
        },
        risk: 0.0,
        confidence: 88,
        ndviMean: 0.364,
        dataSource: 'model'
    },
    {
        id: 'nga-NGA_Kebbi-rice',
        name: 'NGA_Kebbi Rice',
        crop: 'Rice',
        location: {
            lat: 4.2000,
            lng: 12.5000,
            country: 'NGA',
            countryName: 'Nigeria',
            region: 'NGA_Kebbi'
        },
        risk: 0.0,
        confidence: 88,
        ndviMean: 0.184,
        dataSource: 'model'
    },
    {
        id: 'dom-DOM_Cibao-rice',
        name: 'DOM_Cibao Rice',
        crop: 'Rice',
        location: {
            lat: -70.7000,
            lng: 19.4500,
            country: 'DOM',
            countryName: 'Dominican Republic',
            region: 'DOM_Cibao'
        },
        risk: 100.0,
        confidence: 91,
        ndviMean: 0.103,
        dataSource: 'model'
    },
    {
        id: 'nzl-NZL_Southland-wheat',
        name: 'NZL_Southland Wheat',
        crop: 'Wheat',
        location: {
            lat: 168.5000,
            lng: -46.0000,
            country: 'NZL',
            countryName: 'New Zealand',
            region: 'NZL_Southland'
        },
        risk: 0.0,
        confidence: 85,
        ndviMean: 0.44,
        dataSource: 'model'
    },
    {
        id: 'cub-CUB_Sancti_Spiritus-rice',
        name: 'CUB_Sancti_Spiritus Rice',
        crop: 'Rice',
        location: {
            lat: -79.4400,
            lng: 21.9300,
            country: 'CUB',
            countryName: 'Cuba',
            region: 'CUB_Sancti_Spiritus'
        },
        risk: 100.0,
        confidence: 91,
        ndviMean: 0.128,
        dataSource: 'model'
    },
    {
        id: 'nga-NGA_Plateau-corn',
        name: 'NGA_Plateau Corn',
        crop: 'Corn',
        location: {
            lat: 9.8000,
            lng: 9.2000,
            country: 'NGA',
            countryName: 'Nigeria',
            region: 'NGA_Plateau'
        },
        risk: 0.0,
        confidence: 82,
        ndviMean: 0.25,
        dataSource: 'model'
    },
    {
        id: 'nga-NGA_Nassarawa-corn',
        name: 'NGA_Nassarawa Corn',
        crop: 'Corn',
        location: {
            lat: 8.0000,
            lng: 8.5000,
            country: 'NGA',
            countryName: 'Nigeria',
            region: 'NGA_Nassarawa'
        },
        risk: 0.0,
        confidence: 82,
        ndviMean: 0.372,
        dataSource: 'model'
    },
    {
        id: 'nga-NGA_Bauchi-sorghum',
        name: 'NGA_Bauchi Sorghum',
        crop: 'Sorghum',
        location: {
            lat: 9.8000,
            lng: 10.3000,
            country: 'NGA',
            countryName: 'Nigeria',
            region: 'NGA_Bauchi'
        },
        risk: 0.0,
        confidence: 88,
        ndviMean: 0.198,
        dataSource: 'model'
    },
    {
        id: 'nga-NGA_Gombe-sorghum',
        name: 'NGA_Gombe Sorghum',
        crop: 'Sorghum',
        location: {
            lat: 11.2000,
            lng: 10.3000,
            country: 'NGA',
            countryName: 'Nigeria',
            region: 'NGA_Gombe'
        },
        risk: 99.9,
        confidence: 88,
        ndviMean: 0.149,
        dataSource: 'model'
    },
    {
        id: 'nga-NGA_Adamawa-corn',
        name: 'NGA_Adamawa Corn',
        crop: 'Corn',
        location: {
            lat: 12.5000,
            lng: 9.3000,
            country: 'NGA',
            countryName: 'Nigeria',
            region: 'NGA_Adamawa'
        },
        risk: 0.0,
        confidence: 88,
        ndviMean: 0.188,
        dataSource: 'model'
    },
    {
        id: 'nga-NGA_Borno-millet',
        name: 'NGA_Borno Millet',
        crop: 'Millet',
        location: {
            lat: 13.2000,
            lng: 11.8000,
            country: 'NGA',
            countryName: 'Nigeria',
            region: 'NGA_Borno'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.249,
        dataSource: 'model'
    },
    {
        id: 'mex-MEX_Sinaloa_North-corn',
        name: 'MEX_Sinaloa_North Corn',
        crop: 'Corn',
        location: {
            lat: -108.0000,
            lng: 25.5000,
            country: 'MEX',
            countryName: 'Mexico',
            region: 'MEX_Sinaloa_North'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.209,
        dataSource: 'model'
    },
    {
        id: 'mex-MEX_Jalisco_Central-corn',
        name: 'MEX_Jalisco_Central Corn',
        crop: 'Corn',
        location: {
            lat: -103.4000,
            lng: 20.7000,
            country: 'MEX',
            countryName: 'Mexico',
            region: 'MEX_Jalisco_Central'
        },
        risk: 0.0,
        confidence: 88,
        ndviMean: 0.256,
        dataSource: 'model'
    },
    {
        id: 'nga-NGA_Yobe-millet',
        name: 'NGA_Yobe Millet',
        crop: 'Millet',
        location: {
            lat: 11.5000,
            lng: 12.0000,
            country: 'NGA',
            countryName: 'Nigeria',
            region: 'NGA_Yobe'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.21,
        dataSource: 'model'
    },
    {
        id: 'mex-MEX_Sinaloa_South-corn',
        name: 'MEX_Sinaloa_South Corn',
        crop: 'Corn',
        location: {
            lat: -107.0000,
            lng: 24.0000,
            country: 'MEX',
            countryName: 'Mexico',
            region: 'MEX_Sinaloa_South'
        },
        risk: 0.0,
        confidence: 79,
        ndviMean: 0.28,
        dataSource: 'model'
    },
    {
        id: 'mex-MEX_Jalisco_South-corn',
        name: 'MEX_Jalisco_South Corn',
        crop: 'Corn',
        location: {
            lat: -104.0000,
            lng: 19.8000,
            country: 'MEX',
            countryName: 'Mexico',
            region: 'MEX_Jalisco_South'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.365,
        dataSource: 'model'
    },
    {
        id: 'mex-MEX_Tamaulipas_North-sorghum',
        name: 'MEX_Tamaulipas_North Sorghum',
        crop: 'Sorghum',
        location: {
            lat: -98.0000,
            lng: 25.8000,
            country: 'MEX',
            countryName: 'Mexico',
            region: 'MEX_Tamaulipas_North'
        },
        risk: 0.1,
        confidence: 82,
        ndviMean: 0.195,
        dataSource: 'model'
    },
    {
        id: 'mex-MEX_Sonora_North-wheat',
        name: 'MEX_Sonora_North Wheat',
        crop: 'Wheat',
        location: {
            lat: -111.0000,
            lng: 30.0000,
            country: 'MEX',
            countryName: 'Mexico',
            region: 'MEX_Sonora_North'
        },
        risk: 0.2,
        confidence: 91,
        ndviMean: 0.156,
        dataSource: 'model'
    },
    {
        id: 'mex-MEX_Veracruz_North-corn',
        name: 'MEX_Veracruz_North Corn',
        crop: 'Corn',
        location: {
            lat: -97.4000,
            lng: 20.5000,
            country: 'MEX',
            countryName: 'Mexico',
            region: 'MEX_Veracruz_North'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.497,
        dataSource: 'model'
    },
    {
        id: 'mex-MEX_Sonora_South-wheat',
        name: 'MEX_Sonora_South Wheat',
        crop: 'Wheat',
        location: {
            lat: -109.5000,
            lng: 28.5000,
            country: 'MEX',
            countryName: 'Mexico',
            region: 'MEX_Sonora_South'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.276,
        dataSource: 'model'
    },
    {
        id: 'mex-MEX_Tamaulipas_South-sorghum',
        name: 'MEX_Tamaulipas_South Sorghum',
        crop: 'Sorghum',
        location: {
            lat: -98.5000,
            lng: 24.0000,
            country: 'MEX',
            countryName: 'Mexico',
            region: 'MEX_Tamaulipas_South'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.301,
        dataSource: 'model'
    },
    {
        id: 'mex-MEX_Veracruz_South-corn',
        name: 'MEX_Veracruz_South Corn',
        crop: 'Corn',
        location: {
            lat: -95.5000,
            lng: 18.5000,
            country: 'MEX',
            countryName: 'Mexico',
            region: 'MEX_Veracruz_South'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.436,
        dataSource: 'model'
    },
    {
        id: 'mex-MEX_Oaxaca-corn',
        name: 'MEX_Oaxaca Corn',
        crop: 'Corn',
        location: {
            lat: -96.7000,
            lng: 17.1000,
            country: 'MEX',
            countryName: 'Mexico',
            region: 'MEX_Oaxaca'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.181,
        dataSource: 'model'
    },
    {
        id: 'mex-MEX_Puebla-corn',
        name: 'MEX_Puebla Corn',
        crop: 'Corn',
        location: {
            lat: -98.2000,
            lng: 19.0000,
            country: 'MEX',
            countryName: 'Mexico',
            region: 'MEX_Puebla'
        },
        risk: 0.0,
        confidence: 85,
        ndviMean: 0.224,
        dataSource: 'model'
    },
    {
        id: 'mex-MEX_Chihuahua-wheat',
        name: 'MEX_Chihuahua Wheat',
        crop: 'Wheat',
        location: {
            lat: -106.1000,
            lng: 28.6000,
            country: 'MEX',
            countryName: 'Mexico',
            region: 'MEX_Chihuahua'
        },
        risk: 100.0,
        confidence: 91,
        ndviMean: 0.06,
        dataSource: 'model'
    },
    {
        id: 'zaf-ZAF_Free_State_Central-corn',
        name: 'ZAF_Free_State_Central Corn',
        crop: 'Corn',
        location: {
            lat: 26.8000,
            lng: -29.1000,
            country: 'ZAF',
            countryName: 'South Africa',
            region: 'ZAF_Free_State_Central'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.154,
        dataSource: 'model'
    },
    {
        id: 'zaf-ZAF_Mpumalanga_Central-corn',
        name: 'ZAF_Mpumalanga_Central Corn',
        crop: 'Corn',
        location: {
            lat: 30.0000,
            lng: -25.5000,
            country: 'ZAF',
            countryName: 'South Africa',
            region: 'ZAF_Mpumalanga_Central'
        },
        risk: 0.1,
        confidence: 82,
        ndviMean: 0.168,
        dataSource: 'model'
    },
    {
        id: 'zaf-ZAF_Mpumalanga_East-corn',
        name: 'ZAF_Mpumalanga_East Corn',
        crop: 'Corn',
        location: {
            lat: 31.0000,
            lng: -25.8000,
            country: 'ZAF',
            countryName: 'South Africa',
            region: 'ZAF_Mpumalanga_East'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.377,
        dataSource: 'model'
    },
    {
        id: 'zaf-ZAF_KwaZulu_Natal_North-corn',
        name: 'ZAF_KwaZulu_Natal_North Corn',
        crop: 'Corn',
        location: {
            lat: 30.5000,
            lng: -28.0000,
            country: 'ZAF',
            countryName: 'South Africa',
            region: 'ZAF_KwaZulu_Natal_North'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.191,
        dataSource: 'model'
    },
    {
        id: 'zaf-ZAF_North_West_Central-corn',
        name: 'ZAF_North_West_Central Corn',
        crop: 'Corn',
        location: {
            lat: 25.5000,
            lng: -26.0000,
            country: 'ZAF',
            countryName: 'South Africa',
            region: 'ZAF_North_West_Central'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.155,
        dataSource: 'model'
    },
    {
        id: 'zaf-ZAF_Limpopo_Central-corn',
        name: 'ZAF_Limpopo_Central Corn',
        crop: 'Corn',
        location: {
            lat: 29.5000,
            lng: -23.9000,
            country: 'ZAF',
            countryName: 'South Africa',
            region: 'ZAF_Limpopo_Central'
        },
        risk: 99.9,
        confidence: 91,
        ndviMean: 0.141,
        dataSource: 'model'
    },
    {
        id: 'zaf-ZAF_Western_Cape_Overberg-wheat',
        name: 'ZAF_Western_Cape_Overberg Wheat',
        crop: 'Wheat',
        location: {
            lat: 19.5000,
            lng: -34.3000,
            country: 'ZAF',
            countryName: 'South Africa',
            region: 'ZAF_Western_Cape_Overberg'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.369,
        dataSource: 'model'
    },
    {
        id: 'zaf-ZAF_Western_Cape_Swartland-wheat',
        name: 'ZAF_Western_Cape_Swartland Wheat',
        crop: 'Wheat',
        location: {
            lat: 18.7000,
            lng: -33.5000,
            country: 'ZAF',
            countryName: 'South Africa',
            region: 'ZAF_Western_Cape_Swartland'
        },
        risk: 0.0,
        confidence: 88,
        ndviMean: 0.389,
        dataSource: 'model'
    },
    {
        id: 'pak-PAK_Punjab_Lahore-wheat',
        name: 'PAK_Punjab_Lahore Wheat',
        crop: 'Wheat',
        location: {
            lat: 74.3000,
            lng: 31.5000,
            country: 'PAK',
            countryName: 'Pakistan',
            region: 'PAK_Punjab_Lahore'
        },
        risk: 0.0,
        confidence: 82,
        ndviMean: 0.381,
        dataSource: 'model'
    },
    {
        id: 'pak-PAK_Punjab_Faisalabad-wheat',
        name: 'PAK_Punjab_Faisalabad Wheat',
        crop: 'Wheat',
        location: {
            lat: 73.1000,
            lng: 31.4000,
            country: 'PAK',
            countryName: 'Pakistan',
            region: 'PAK_Punjab_Faisalabad'
        },
        risk: 100.0,
        confidence: 91,
        ndviMean: 0.102,
        dataSource: 'model'
    },
    {
        id: 'zaf-ZAF_Eastern_Cape-corn',
        name: 'ZAF_Eastern_Cape Corn',
        crop: 'Corn',
        location: {
            lat: 26.5000,
            lng: -32.0000,
            country: 'ZAF',
            countryName: 'South Africa',
            region: 'ZAF_Eastern_Cape'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.155,
        dataSource: 'model'
    },
    {
        id: 'pak-PAK_Punjab_Sahiwal-wheat',
        name: 'PAK_Punjab_Sahiwal Wheat',
        crop: 'Wheat',
        location: {
            lat: 73.1000,
            lng: 30.7000,
            country: 'PAK',
            countryName: 'Pakistan',
            region: 'PAK_Punjab_Sahiwal'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.301,
        dataSource: 'model'
    },
    {
        id: 'pak-PAK_Punjab_Multan-wheat',
        name: 'PAK_Punjab_Multan Wheat',
        crop: 'Wheat',
        location: {
            lat: 71.5000,
            lng: 30.2000,
            country: 'PAK',
            countryName: 'Pakistan',
            region: 'PAK_Punjab_Multan'
        },
        risk: 100.0,
        confidence: 91,
        ndviMean: 0.063,
        dataSource: 'model'
    },
    {
        id: 'pak-PAK_Sindh_Sukkur-wheat',
        name: 'PAK_Sindh_Sukkur Wheat',
        crop: 'Wheat',
        location: {
            lat: 68.9000,
            lng: 27.7000,
            country: 'PAK',
            countryName: 'Pakistan',
            region: 'PAK_Sindh_Sukkur'
        },
        risk: 100.0,
        confidence: 91,
        ndviMean: 0.036,
        dataSource: 'model'
    },
    {
        id: 'pak-PAK_Punjab_Bahawalpur-wheat',
        name: 'PAK_Punjab_Bahawalpur Wheat',
        crop: 'Wheat',
        location: {
            lat: 71.7000,
            lng: 29.4000,
            country: 'PAK',
            countryName: 'Pakistan',
            region: 'PAK_Punjab_Bahawalpur'
        },
        risk: 99.9,
        confidence: 91,
        ndviMean: 0.147,
        dataSource: 'model'
    },
    {
        id: 'pak-PAK_Punjab_Gujranwala-rice',
        name: 'PAK_Punjab_Gujranwala Rice',
        crop: 'Rice',
        location: {
            lat: 74.2000,
            lng: 32.2000,
            country: 'PAK',
            countryName: 'Pakistan',
            region: 'PAK_Punjab_Gujranwala'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.197,
        dataSource: 'model'
    },
    {
        id: 'pak-PAK_Punjab_Sialkot-rice',
        name: 'PAK_Punjab_Sialkot Rice',
        crop: 'Rice',
        location: {
            lat: 74.5000,
            lng: 32.5000,
            country: 'PAK',
            countryName: 'Pakistan',
            region: 'PAK_Punjab_Sialkot'
        },
        risk: 100.0,
        confidence: 88,
        ndviMean: 0.145,
        dataSource: 'model'
    },
    {
        id: 'pak-PAK_Sindh_Hyderabad-wheat',
        name: 'PAK_Sindh_Hyderabad Wheat',
        crop: 'Wheat',
        location: {
            lat: 68.4000,
            lng: 25.4000,
            country: 'PAK',
            countryName: 'Pakistan',
            region: 'PAK_Sindh_Hyderabad'
        },
        risk: 100.0,
        confidence: 91,
        ndviMean: 0.114,
        dataSource: 'model'
    },
    {
        id: 'pak-PAK_Punjab_Sargodha-wheat',
        name: 'PAK_Punjab_Sargodha Wheat',
        crop: 'Wheat',
        location: {
            lat: 72.7000,
            lng: 32.1000,
            country: 'PAK',
            countryName: 'Pakistan',
            region: 'PAK_Punjab_Sargodha'
        },
        risk: 100.0,
        confidence: 91,
        ndviMean: 0.13,
        dataSource: 'model'
    },
    {
        id: 'pak-PAK_Sindh_Larkana-rice',
        name: 'PAK_Sindh_Larkana Rice',
        crop: 'Rice',
        location: {
            lat: 68.2000,
            lng: 27.6000,
            country: 'PAK',
            countryName: 'Pakistan',
            region: 'PAK_Sindh_Larkana'
        },
        risk: 0.1,
        confidence: 91,
        ndviMean: 0.155,
        dataSource: 'model'
    },
    {
        id: 'tur-TUR_Central_Anatolia_Ankara-wheat',
        name: 'TUR_Central_Anatolia_Ankara Wheat',
        crop: 'Wheat',
        location: {
            lat: 32.9000,
            lng: 39.9000,
            country: 'TUR',
            countryName: 'Turkey',
            region: 'TUR_Central_Anatolia_Ankara'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.242,
        dataSource: 'model'
    },
    {
        id: 'pak-PAK_KPK_Peshawar-wheat',
        name: 'PAK_KPK_Peshawar Wheat',
        crop: 'Wheat',
        location: {
            lat: 71.6000,
            lng: 34.0000,
            country: 'PAK',
            countryName: 'Pakistan',
            region: 'PAK_KPK_Peshawar'
        },
        risk: 100.0,
        confidence: 91,
        ndviMean: 0.037,
        dataSource: 'model'
    },
    {
        id: 'tur-TUR_Central_Anatolia_Konya-wheat',
        name: 'TUR_Central_Anatolia_Konya Wheat',
        crop: 'Wheat',
        location: {
            lat: 32.5000,
            lng: 37.9000,
            country: 'TUR',
            countryName: 'Turkey',
            region: 'TUR_Central_Anatolia_Konya'
        },
        risk: 99.9,
        confidence: 88,
        ndviMean: 0.121,
        dataSource: 'model'
    },
    {
        id: 'tur-TUR_Central_Anatolia_Aksaray-wheat',
        name: 'TUR_Central_Anatolia_Aksaray Wheat',
        crop: 'Wheat',
        location: {
            lat: 34.0000,
            lng: 38.4000,
            country: 'TUR',
            countryName: 'Turkey',
            region: 'TUR_Central_Anatolia_Aksaray'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.177,
        dataSource: 'model'
    },
    {
        id: 'tur-TUR_Southeast_Sanliurfa-wheat',
        name: 'TUR_Southeast_Sanliurfa Wheat',
        crop: 'Wheat',
        location: {
            lat: 38.8000,
            lng: 37.2000,
            country: 'TUR',
            countryName: 'Turkey',
            region: 'TUR_Southeast_Sanliurfa'
        },
        risk: 100.0,
        confidence: 91,
        ndviMean: 0.098,
        dataSource: 'model'
    },
    {
        id: 'tur-TUR_Southeast_Diyarbakir-wheat',
        name: 'TUR_Southeast_Diyarbakir Wheat',
        crop: 'Wheat',
        location: {
            lat: 40.2000,
            lng: 37.9000,
            country: 'TUR',
            countryName: 'Turkey',
            region: 'TUR_Southeast_Diyarbakir'
        },
        risk: 99.9,
        confidence: 91,
        ndviMean: 0.122,
        dataSource: 'model'
    },
    {
        id: 'tur-TUR_Southeast_Mardin-wheat',
        name: 'TUR_Southeast_Mardin Wheat',
        crop: 'Wheat',
        location: {
            lat: 40.7000,
            lng: 37.3000,
            country: 'TUR',
            countryName: 'Turkey',
            region: 'TUR_Southeast_Mardin'
        },
        risk: 99.9,
        confidence: 91,
        ndviMean: 0.12,
        dataSource: 'model'
    },
    {
        id: 'tur-TUR_Aegean_Izmir-wheat',
        name: 'TUR_Aegean_Izmir Wheat',
        crop: 'Wheat',
        location: {
            lat: 27.1000,
            lng: 38.4000,
            country: 'TUR',
            countryName: 'Turkey',
            region: 'TUR_Aegean_Izmir'
        },
        risk: 100.0,
        confidence: 91,
        ndviMean: 0.13,
        dataSource: 'model'
    },
    {
        id: 'tur-TUR_Marmara_Tekirdag-wheat',
        name: 'TUR_Marmara_Tekirdag Wheat',
        crop: 'Wheat',
        location: {
            lat: 27.5000,
            lng: 41.0000,
            country: 'TUR',
            countryName: 'Turkey',
            region: 'TUR_Marmara_Tekirdag'
        },
        risk: 0.1,
        confidence: 91,
        ndviMean: 0.171,
        dataSource: 'model'
    },
    {
        id: 'tur-TUR_Thrace_Edirne-wheat',
        name: 'TUR_Thrace_Edirne Wheat',
        crop: 'Wheat',
        location: {
            lat: 26.6000,
            lng: 41.7000,
            country: 'TUR',
            countryName: 'Turkey',
            region: 'TUR_Thrace_Edirne'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.258,
        dataSource: 'model'
    },
    {
        id: 'deu-DEU_Bayern_South-wheat',
        name: 'DEU_Bayern_South Wheat',
        crop: 'Wheat',
        location: {
            lat: 11.6000,
            lng: 48.1000,
            country: 'DEU',
            countryName: 'Germany',
            region: 'DEU_Bayern_South'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.277,
        dataSource: 'model'
    },
    {
        id: 'deu-DEU_Bayern_North-wheat',
        name: 'DEU_Bayern_North Wheat',
        crop: 'Wheat',
        location: {
            lat: 11.0000,
            lng: 49.5000,
            country: 'DEU',
            countryName: 'Germany',
            region: 'DEU_Bayern_North'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.316,
        dataSource: 'model'
    },
    {
        id: 'tur-TUR_Black_Sea_Samsun-corn',
        name: 'TUR_Black_Sea_Samsun Corn',
        crop: 'Corn',
        location: {
            lat: 36.3000,
            lng: 41.3000,
            country: 'TUR',
            countryName: 'Turkey',
            region: 'TUR_Black_Sea_Samsun'
        },
        risk: 0.0,
        confidence: 85,
        ndviMean: 0.351,
        dataSource: 'model'
    },
    {
        id: 'tur-TUR_Mediterranean_Mersin-corn',
        name: 'TUR_Mediterranean_Mersin Corn',
        crop: 'Corn',
        location: {
            lat: 34.6000,
            lng: 36.8000,
            country: 'TUR',
            countryName: 'Turkey',
            region: 'TUR_Mediterranean_Mersin'
        },
        risk: 100.0,
        confidence: 91,
        ndviMean: 0.136,
        dataSource: 'model'
    },
    {
        id: 'tur-TUR_Mediterranean_Adana-corn',
        name: 'TUR_Mediterranean_Adana Corn',
        crop: 'Corn',
        location: {
            lat: 35.3000,
            lng: 37.0000,
            country: 'TUR',
            countryName: 'Turkey',
            region: 'TUR_Mediterranean_Adana'
        },
        risk: 100.0,
        confidence: 79,
        ndviMean: 0.084,
        dataSource: 'model'
    },
    {
        id: 'deu-DEU_Baden_Wurttemberg-wheat',
        name: 'DEU_Baden_Wurttemberg Wheat',
        crop: 'Wheat',
        location: {
            lat: 9.2000,
            lng: 48.8000,
            country: 'DEU',
            countryName: 'Germany',
            region: 'DEU_Baden_Wurttemberg'
        },
        risk: 0.0,
        confidence: 85,
        ndviMean: 0.293,
        dataSource: 'model'
    },
    {
        id: 'deu-DEU_Niedersachsen_West-wheat',
        name: 'DEU_Niedersachsen_West Wheat',
        crop: 'Wheat',
        location: {
            lat: 8.0000,
            lng: 52.5000,
            country: 'DEU',
            countryName: 'Germany',
            region: 'DEU_Niedersachsen_West'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.429,
        dataSource: 'model'
    },
    {
        id: 'deu-DEU_Sachsen_Anhalt-wheat',
        name: 'DEU_Sachsen_Anhalt Wheat',
        crop: 'Wheat',
        location: {
            lat: 11.5000,
            lng: 52.0000,
            country: 'DEU',
            countryName: 'Germany',
            region: 'DEU_Sachsen_Anhalt'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.343,
        dataSource: 'model'
    },
    {
        id: 'deu-DEU_Niedersachsen_East-wheat',
        name: 'DEU_Niedersachsen_East Wheat',
        crop: 'Wheat',
        location: {
            lat: 10.0000,
            lng: 52.3000,
            country: 'DEU',
            countryName: 'Germany',
            region: 'DEU_Niedersachsen_East'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.456,
        dataSource: 'model'
    },
    {
        id: 'deu-DEU_Schleswig_Holstein-wheat',
        name: 'DEU_Schleswig_Holstein Wheat',
        crop: 'Wheat',
        location: {
            lat: 9.9000,
            lng: 54.2000,
            country: 'DEU',
            countryName: 'Germany',
            region: 'DEU_Schleswig_Holstein'
        },
        risk: 99.9,
        confidence: 91,
        ndviMean: 0.149,
        dataSource: 'model'
    },
    {
        id: 'deu-DEU_Thuringen-wheat',
        name: 'DEU_Thuringen Wheat',
        crop: 'Wheat',
        location: {
            lat: 11.0000,
            lng: 50.9000,
            country: 'DEU',
            countryName: 'Germany',
            region: 'DEU_Thuringen'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.306,
        dataSource: 'model'
    },
    {
        id: 'deu-DEU_Mecklenburg_Vorpommern-wheat',
        name: 'DEU_Mecklenburg_Vorpommern Wheat',
        crop: 'Wheat',
        location: {
            lat: 12.4000,
            lng: 53.6000,
            country: 'DEU',
            countryName: 'Germany',
            region: 'DEU_Mecklenburg_Vorpommern'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.452,
        dataSource: 'model'
    },
    {
        id: 'egy-EGY_Beheira-wheat',
        name: 'EGY_Beheira Wheat',
        crop: 'Wheat',
        location: {
            lat: 30.4000,
            lng: 30.8000,
            country: 'EGY',
            countryName: 'Egypt',
            region: 'EGY_Beheira'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.323,
        dataSource: 'model'
    },
    {
        id: 'deu-DEU_Sachsen-wheat',
        name: 'DEU_Sachsen Wheat',
        crop: 'Wheat',
        location: {
            lat: 13.4000,
            lng: 51.0000,
            country: 'DEU',
            countryName: 'Germany',
            region: 'DEU_Sachsen'
        },
        risk: 0.0,
        confidence: 88,
        ndviMean: 0.448,
        dataSource: 'model'
    },
    {
        id: 'egy-EGY_Kafr_El_Sheikh-rice',
        name: 'EGY_Kafr_El_Sheikh Rice',
        crop: 'Rice',
        location: {
            lat: 31.0000,
            lng: 31.3000,
            country: 'EGY',
            countryName: 'Egypt',
            region: 'EGY_Kafr_El_Sheikh'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.278,
        dataSource: 'model'
    },
    {
        id: 'egy-EGY_Dakahlia-wheat',
        name: 'EGY_Dakahlia Wheat',
        crop: 'Wheat',
        location: {
            lat: 31.4000,
            lng: 31.1000,
            country: 'EGY',
            countryName: 'Egypt',
            region: 'EGY_Dakahlia'
        },
        risk: 0.1,
        confidence: 88,
        ndviMean: 0.197,
        dataSource: 'model'
    },
    {
        id: 'egy-EGY_Gharbia-wheat',
        name: 'EGY_Gharbia Wheat',
        crop: 'Wheat',
        location: {
            lat: 31.0000,
            lng: 30.9000,
            country: 'EGY',
            countryName: 'Egypt',
            region: 'EGY_Gharbia'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.26,
        dataSource: 'model'
    },
    {
        id: 'egy-EGY_Minya-wheat',
        name: 'EGY_Minya Wheat',
        crop: 'Wheat',
        location: {
            lat: 30.8000,
            lng: 28.1000,
            country: 'EGY',
            countryName: 'Egypt',
            region: 'EGY_Minya'
        },
        risk: 100.0,
        confidence: 91,
        ndviMean: 0.062,
        dataSource: 'model'
    },
    {
        id: 'egy-EGY_Assiut-wheat',
        name: 'EGY_Assiut Wheat',
        crop: 'Wheat',
        location: {
            lat: 31.2000,
            lng: 27.2000,
            country: 'EGY',
            countryName: 'Egypt',
            region: 'EGY_Assiut'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.256,
        dataSource: 'model'
    },
    {
        id: 'egy-EGY_Beni_Suef-wheat',
        name: 'EGY_Beni_Suef Wheat',
        crop: 'Wheat',
        location: {
            lat: 31.1000,
            lng: 29.1000,
            country: 'EGY',
            countryName: 'Egypt',
            region: 'EGY_Beni_Suef'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.239,
        dataSource: 'model'
    },
    {
        id: 'egy-EGY_Sohag-wheat',
        name: 'EGY_Sohag Wheat',
        crop: 'Wheat',
        location: {
            lat: 31.7000,
            lng: 26.6000,
            country: 'EGY',
            countryName: 'Egypt',
            region: 'EGY_Sohag'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.301,
        dataSource: 'model'
    },
    {
        id: 'eth-ETH_Oromia_Bale-wheat',
        name: 'ETH_Oromia_Bale Wheat',
        crop: 'Wheat',
        location: {
            lat: 40.0000,
            lng: 7.0000,
            country: 'ETH',
            countryName: 'Ethiopia',
            region: 'ETH_Oromia_Bale'
        },
        risk: 0.0,
        confidence: 85,
        ndviMean: 0.334,
        dataSource: 'model'
    },
    {
        id: 'eth-ETH_Oromia_West_Shewa-wheat',
        name: 'ETH_Oromia_West_Shewa Wheat',
        crop: 'Wheat',
        location: {
            lat: 38.0000,
            lng: 9.0000,
            country: 'ETH',
            countryName: 'Ethiopia',
            region: 'ETH_Oromia_West_Shewa'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.323,
        dataSource: 'model'
    },
    {
        id: 'eth-ETH_Oromia_Arsi-wheat',
        name: 'ETH_Oromia_Arsi Wheat',
        crop: 'Wheat',
        location: {
            lat: 39.5000,
            lng: 7.5000,
            country: 'ETH',
            countryName: 'Ethiopia',
            region: 'ETH_Oromia_Arsi'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.299,
        dataSource: 'model'
    },
    {
        id: 'egy-EGY_Qena-wheat',
        name: 'EGY_Qena Wheat',
        crop: 'Wheat',
        location: {
            lat: 32.7000,
            lng: 26.2000,
            country: 'EGY',
            countryName: 'Egypt',
            region: 'EGY_Qena'
        },
        risk: 100.0,
        confidence: 88,
        ndviMean: 0.048,
        dataSource: 'model'
    },
    {
        id: 'eth-ETH_Oromia_East_Shewa-wheat',
        name: 'ETH_Oromia_East_Shewa Wheat',
        crop: 'Wheat',
        location: {
            lat: 39.0000,
            lng: 8.5000,
            country: 'ETH',
            countryName: 'Ethiopia',
            region: 'ETH_Oromia_East_Shewa'
        },
        risk: 0.0,
        confidence: 82,
        ndviMean: 0.284,
        dataSource: 'model'
    },
    {
        id: 'egy-EGY_Luxor-wheat',
        name: 'EGY_Luxor Wheat',
        crop: 'Wheat',
        location: {
            lat: 32.6000,
            lng: 25.7000,
            country: 'EGY',
            countryName: 'Egypt',
            region: 'EGY_Luxor'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.281,
        dataSource: 'model'
    },
    {
        id: 'eth-ETH_Amhara_South_Gondar-wheat',
        name: 'ETH_Amhara_South_Gondar Wheat',
        crop: 'Wheat',
        location: {
            lat: 37.5000,
            lng: 12.0000,
            country: 'ETH',
            countryName: 'Ethiopia',
            region: 'ETH_Amhara_South_Gondar'
        },
        risk: 100.0,
        confidence: 91,
        ndviMean: -0.214,
        dataSource: 'model'
    },
    {
        id: 'eth-ETH_SNNPR_Sidama-corn',
        name: 'ETH_SNNPR_Sidama Corn',
        crop: 'Corn',
        location: {
            lat: 38.5000,
            lng: 6.8000,
            country: 'ETH',
            countryName: 'Ethiopia',
            region: 'ETH_SNNPR_Sidama'
        },
        risk: 0.0,
        confidence: 88,
        ndviMean: 0.495,
        dataSource: 'model'
    },
    {
        id: 'eth-ETH_Amhara_East_Gojjam-wheat',
        name: 'ETH_Amhara_East_Gojjam Wheat',
        crop: 'Wheat',
        location: {
            lat: 37.5000,
            lng: 10.5000,
            country: 'ETH',
            countryName: 'Ethiopia',
            region: 'ETH_Amhara_East_Gojjam'
        },
        risk: 0.0,
        confidence: 88,
        ndviMean: 0.312,
        dataSource: 'model'
    },
    {
        id: 'eth-ETH_Amhara_North_Shewa-wheat',
        name: 'ETH_Amhara_North_Shewa Wheat',
        crop: 'Wheat',
        location: {
            lat: 39.5000,
            lng: 9.7000,
            country: 'ETH',
            countryName: 'Ethiopia',
            region: 'ETH_Amhara_North_Shewa'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.362,
        dataSource: 'model'
    },
    {
        id: 'eth-ETH_Oromia_Jimma-corn',
        name: 'ETH_Oromia_Jimma Corn',
        crop: 'Corn',
        location: {
            lat: 36.8000,
            lng: 7.7000,
            country: 'ETH',
            countryName: 'Ethiopia',
            region: 'ETH_Oromia_Jimma'
        },
        risk: 0.0,
        confidence: 88,
        ndviMean: 0.468,
        dataSource: 'model'
    },
    {
        id: 'eth-ETH_SNNPR_Hadiya-corn',
        name: 'ETH_SNNPR_Hadiya Corn',
        crop: 'Corn',
        location: {
            lat: 37.8000,
            lng: 7.5000,
            country: 'ETH',
            countryName: 'Ethiopia',
            region: 'ETH_SNNPR_Hadiya'
        },
        risk: 0.0,
        confidence: 88,
        ndviMean: 0.397,
        dataSource: 'model'
    },
    {
        id: 'eth-ETH_Tigray_Central-wheat',
        name: 'ETH_Tigray_Central Wheat',
        crop: 'Wheat',
        location: {
            lat: 39.5000,
            lng: 13.5000,
            country: 'ETH',
            countryName: 'Ethiopia',
            region: 'ETH_Tigray_Central'
        },
        risk: 0.1,
        confidence: 91,
        ndviMean: 0.176,
        dataSource: 'model'
    },
    {
        id: 'eth-ETH_Oromia_Illubabor-corn',
        name: 'ETH_Oromia_Illubabor Corn',
        crop: 'Corn',
        location: {
            lat: 35.5000,
            lng: 8.3000,
            country: 'ETH',
            countryName: 'Ethiopia',
            region: 'ETH_Oromia_Illubabor'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.442,
        dataSource: 'model'
    },
    {
        id: 'ken-KEN_Trans_Nzoia-corn',
        name: 'KEN_Trans_Nzoia Corn',
        crop: 'Corn',
        location: {
            lat: 35.0000,
            lng: 1.0000,
            country: 'KEN',
            countryName: 'Kenya',
            region: 'KEN_Trans_Nzoia'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.459,
        dataSource: 'model'
    },
    {
        id: 'ken-KEN_Uasin_Gishu-wheat',
        name: 'KEN_Uasin_Gishu Wheat',
        crop: 'Wheat',
        location: {
            lat: 35.3000,
            lng: 0.5000,
            country: 'KEN',
            countryName: 'Kenya',
            region: 'KEN_Uasin_Gishu'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.362,
        dataSource: 'model'
    },
    {
        id: 'ken-KEN_Nakuru-wheat',
        name: 'KEN_Nakuru Wheat',
        crop: 'Wheat',
        location: {
            lat: 36.1000,
            lng: -0.3000,
            country: 'KEN',
            countryName: 'Kenya',
            region: 'KEN_Nakuru'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.428,
        dataSource: 'model'
    },
    {
        id: 'ken-KEN_Nyandarua-wheat',
        name: 'KEN_Nyandarua Wheat',
        crop: 'Wheat',
        location: {
            lat: 36.5000,
            lng: -0.2000,
            country: 'KEN',
            countryName: 'Kenya',
            region: 'KEN_Nyandarua'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.348,
        dataSource: 'model'
    },
    {
        id: 'ken-KEN_Narok-wheat',
        name: 'KEN_Narok Wheat',
        crop: 'Wheat',
        location: {
            lat: 35.9000,
            lng: -1.1000,
            country: 'KEN',
            countryName: 'Kenya',
            region: 'KEN_Narok'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.218,
        dataSource: 'model'
    },
    {
        id: 'ken-KEN_Laikipia-wheat',
        name: 'KEN_Laikipia Wheat',
        crop: 'Wheat',
        location: {
            lat: 37.0000,
            lng: 0.4000,
            country: 'KEN',
            countryName: 'Kenya',
            region: 'KEN_Laikipia'
        },
        risk: 99.9,
        confidence: 91,
        ndviMean: 0.135,
        dataSource: 'model'
    },
    {
        id: 'ken-KEN_Kakamega-corn',
        name: 'KEN_Kakamega Corn',
        crop: 'Corn',
        location: {
            lat: 34.8000,
            lng: 0.3000,
            country: 'KEN',
            countryName: 'Kenya',
            region: 'KEN_Kakamega'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.54,
        dataSource: 'model'
    },
    {
        id: 'ken-KEN_Bungoma-corn',
        name: 'KEN_Bungoma Corn',
        crop: 'Corn',
        location: {
            lat: 34.6000,
            lng: 0.6000,
            country: 'KEN',
            countryName: 'Kenya',
            region: 'KEN_Bungoma'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.416,
        dataSource: 'model'
    },
    {
        id: 'ken-KEN_Kericho-corn',
        name: 'KEN_Kericho Corn',
        crop: 'Corn',
        location: {
            lat: 35.3000,
            lng: -0.4000,
            country: 'KEN',
            countryName: 'Kenya',
            region: 'KEN_Kericho'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.567,
        dataSource: 'model'
    },
    {
        id: 'ken-KEN_Bomet-corn',
        name: 'KEN_Bomet Corn',
        crop: 'Corn',
        location: {
            lat: 35.3000,
            lng: -0.8000,
            country: 'KEN',
            countryName: 'Kenya',
            region: 'KEN_Bomet'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.396,
        dataSource: 'model'
    },
    {
        id: 'ken-KEN_Nyamira-corn',
        name: 'KEN_Nyamira Corn',
        crop: 'Corn',
        location: {
            lat: 34.9000,
            lng: -0.6000,
            country: 'KEN',
            countryName: 'Kenya',
            region: 'KEN_Nyamira'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.405,
        dataSource: 'model'
    },
    {
        id: 'ken-KEN_Kisii-corn',
        name: 'KEN_Kisii Corn',
        crop: 'Corn',
        location: {
            lat: 34.8000,
            lng: -0.7000,
            country: 'KEN',
            countryName: 'Kenya',
            region: 'KEN_Kisii'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.407,
        dataSource: 'model'
    },
    {
        id: 'mex-MEX_Sinaloa_Culiacan-corn',
        name: 'MEX_Sinaloa_Culiacan Corn',
        crop: 'Corn',
        location: {
            lat: -107.4000,
            lng: 24.8000,
            country: 'MEX',
            countryName: 'Mexico',
            region: 'MEX_Sinaloa_Culiacan'
        },
        risk: 100.0,
        confidence: 91,
        ndviMean: 0.059,
        dataSource: 'model'
    },
    {
        id: 'mex-MEX_Sinaloa_Navolato-corn',
        name: 'MEX_Sinaloa_Navolato Corn',
        crop: 'Corn',
        location: {
            lat: -107.7000,
            lng: 24.8000,
            country: 'MEX',
            countryName: 'Mexico',
            region: 'MEX_Sinaloa_Navolato'
        },
        risk: 0.1,
        confidence: 88,
        ndviMean: 0.2,
        dataSource: 'model'
    },
    {
        id: 'mex-MEX_Jalisco_Zapopan-corn',
        name: 'MEX_Jalisco_Zapopan Corn',
        crop: 'Corn',
        location: {
            lat: -103.4000,
            lng: 20.7000,
            country: 'MEX',
            countryName: 'Mexico',
            region: 'MEX_Jalisco_Zapopan'
        },
        risk: 0.0,
        confidence: 88,
        ndviMean: 0.256,
        dataSource: 'model'
    },
    {
        id: 'mex-MEX_Sinaloa_Ahome-corn',
        name: 'MEX_Sinaloa_Ahome Corn',
        crop: 'Corn',
        location: {
            lat: -109.0000,
            lng: 25.8000,
            country: 'MEX',
            countryName: 'Mexico',
            region: 'MEX_Sinaloa_Ahome'
        },
        risk: 100.0,
        confidence: 91,
        ndviMean: 0.103,
        dataSource: 'model'
    },
    {
        id: 'mex-MEX_Sinaloa_Guasave-corn',
        name: 'MEX_Sinaloa_Guasave Corn',
        crop: 'Corn',
        location: {
            lat: -108.5000,
            lng: 25.6000,
            country: 'MEX',
            countryName: 'Mexico',
            region: 'MEX_Sinaloa_Guasave'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.2,
        dataSource: 'model'
    },
    {
        id: 'mex-MEX_Jalisco_Lagos-corn',
        name: 'MEX_Jalisco_Lagos Corn',
        crop: 'Corn',
        location: {
            lat: -102.0000,
            lng: 21.4000,
            country: 'MEX',
            countryName: 'Mexico',
            region: 'MEX_Jalisco_Lagos'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.162,
        dataSource: 'model'
    },
    {
        id: 'mex-MEX_Jalisco_Tepatitlan-corn',
        name: 'MEX_Jalisco_Tepatitlan Corn',
        crop: 'Corn',
        location: {
            lat: -102.8000,
            lng: 20.8000,
            country: 'MEX',
            countryName: 'Mexico',
            region: 'MEX_Jalisco_Tepatitlan'
        },
        risk: 0.1,
        confidence: 91,
        ndviMean: 0.268,
        dataSource: 'model'
    },
    {
        id: 'mex-MEX_Chiapas_Tuxtla-corn',
        name: 'MEX_Chiapas_Tuxtla Corn',
        crop: 'Corn',
        location: {
            lat: -93.1000,
            lng: 16.8000,
            country: 'MEX',
            countryName: 'Mexico',
            region: 'MEX_Chiapas_Tuxtla'
        },
        risk: 0.0,
        confidence: 88,
        ndviMean: 0.289,
        dataSource: 'model'
    },
    {
        id: 'mex-MEX_Chiapas_Villaflores-corn',
        name: 'MEX_Chiapas_Villaflores Corn',
        crop: 'Corn',
        location: {
            lat: -93.3000,
            lng: 16.2000,
            country: 'MEX',
            countryName: 'Mexico',
            region: 'MEX_Chiapas_Villaflores'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.413,
        dataSource: 'model'
    },
    {
        id: 'mex-MEX_Chiapas_Tapachula-corn',
        name: 'MEX_Chiapas_Tapachula Corn',
        crop: 'Corn',
        location: {
            lat: -92.3000,
            lng: 14.9000,
            country: 'MEX',
            countryName: 'Mexico',
            region: 'MEX_Chiapas_Tapachula'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.443,
        dataSource: 'model'
    },
    {
        id: 'mex-MEX_Veracruz_Martinez-corn',
        name: 'MEX_Veracruz_Martinez Corn',
        crop: 'Corn',
        location: {
            lat: -96.9000,
            lng: 19.0000,
            country: 'MEX',
            countryName: 'Mexico',
            region: 'MEX_Veracruz_Martinez'
        },
        risk: 0.0,
        confidence: 88,
        ndviMean: 0.432,
        dataSource: 'model'
    },
    {
        id: 'mex-MEX_Veracruz_Cordoba-corn',
        name: 'MEX_Veracruz_Cordoba Corn',
        crop: 'Corn',
        location: {
            lat: -96.9000,
            lng: 18.9000,
            country: 'MEX',
            countryName: 'Mexico',
            region: 'MEX_Veracruz_Cordoba'
        },
        risk: 0.0,
        confidence: 88,
        ndviMean: 0.51,
        dataSource: 'model'
    },
    {
        id: 'mex-MEX_Guanajuato_Celaya-wheat',
        name: 'MEX_Guanajuato_Celaya Wheat',
        crop: 'Wheat',
        location: {
            lat: -100.8000,
            lng: 20.5000,
            country: 'MEX',
            countryName: 'Mexico',
            region: 'MEX_Guanajuato_Celaya'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.241,
        dataSource: 'model'
    },
    {
        id: 'mex-MEX_Veracruz_Papantla-corn',
        name: 'MEX_Veracruz_Papantla Corn',
        crop: 'Corn',
        location: {
            lat: -97.3000,
            lng: 20.4000,
            country: 'MEX',
            countryName: 'Mexico',
            region: 'MEX_Veracruz_Papantla'
        },
        risk: 0.0,
        confidence: 88,
        ndviMean: 0.472,
        dataSource: 'model'
    },
    {
        id: 'mex-MEX_Guanajuato_Leon-wheat',
        name: 'MEX_Guanajuato_Leon Wheat',
        crop: 'Wheat',
        location: {
            lat: -101.7000,
            lng: 21.1000,
            country: 'MEX',
            countryName: 'Mexico',
            region: 'MEX_Guanajuato_Leon'
        },
        risk: 100.0,
        confidence: 91,
        ndviMean: 0.064,
        dataSource: 'model'
    },
    {
        id: 'mex-MEX_Sonora_Cajeme-wheat',
        name: 'MEX_Sonora_Cajeme Wheat',
        crop: 'Wheat',
        location: {
            lat: -110.0000,
            lng: 27.5000,
            country: 'MEX',
            countryName: 'Mexico',
            region: 'MEX_Sonora_Cajeme'
        },
        risk: 35.9,
        confidence: 91,
        ndviMean: 0.153,
        dataSource: 'model'
    },
    {
        id: 'mex-MEX_Guanajuato_Irapuato-wheat',
        name: 'MEX_Guanajuato_Irapuato Wheat',
        crop: 'Wheat',
        location: {
            lat: -101.4000,
            lng: 20.7000,
            country: 'MEX',
            countryName: 'Mexico',
            region: 'MEX_Guanajuato_Irapuato'
        },
        risk: 0.1,
        confidence: 91,
        ndviMean: 0.196,
        dataSource: 'model'
    },
    {
        id: 'mex-MEX_Sonora_Hermosillo-wheat',
        name: 'MEX_Sonora_Hermosillo Wheat',
        crop: 'Wheat',
        location: {
            lat: -111.0000,
            lng: 29.1000,
            country: 'MEX',
            countryName: 'Mexico',
            region: 'MEX_Sonora_Hermosillo'
        },
        risk: 100.0,
        confidence: 91,
        ndviMean: 0.082,
        dataSource: 'model'
    },
    {
        id: 'mex-MEX_Tamaulipas_Reynosa-sorghum',
        name: 'MEX_Tamaulipas_Reynosa Sorghum',
        crop: 'Sorghum',
        location: {
            lat: -98.3000,
            lng: 26.1000,
            country: 'MEX',
            countryName: 'Mexico',
            region: 'MEX_Tamaulipas_Reynosa'
        },
        risk: 0.0,
        confidence: 88,
        ndviMean: 0.224,
        dataSource: 'model'
    },
    {
        id: 'mex-MEX_Tamaulipas_Altamira-sorghum',
        name: 'MEX_Tamaulipas_Altamira Sorghum',
        crop: 'Sorghum',
        location: {
            lat: -97.9000,
            lng: 22.4000,
            country: 'MEX',
            countryName: 'Mexico',
            region: 'MEX_Tamaulipas_Altamira'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.274,
        dataSource: 'model'
    },
    {
        id: 'mex-MEX_Tamaulipas_Matamoros-sorghum',
        name: 'MEX_Tamaulipas_Matamoros Sorghum',
        crop: 'Sorghum',
        location: {
            lat: -97.5000,
            lng: 25.9000,
            country: 'MEX',
            countryName: 'Mexico',
            region: 'MEX_Tamaulipas_Matamoros'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.177,
        dataSource: 'model'
    },
    {
        id: 'mex-MEX_Sonora_Navojoa-wheat',
        name: 'MEX_Sonora_Navojoa Wheat',
        crop: 'Wheat',
        location: {
            lat: -109.4000,
            lng: 27.1000,
            country: 'MEX',
            countryName: 'Mexico',
            region: 'MEX_Sonora_Navojoa'
        },
        risk: 99.9,
        confidence: 91,
        ndviMean: 0.151,
        dataSource: 'model'
    },
    {
        id: 'mex-MEX_Michoacan_Zamora-corn',
        name: 'MEX_Michoacan_Zamora Corn',
        crop: 'Corn',
        location: {
            lat: -102.3000,
            lng: 19.9000,
            country: 'MEX',
            countryName: 'Mexico',
            region: 'MEX_Michoacan_Zamora'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.355,
        dataSource: 'model'
    },
    {
        id: 'mex-MEX_Oaxaca_Tuxtepec-corn',
        name: 'MEX_Oaxaca_Tuxtepec Corn',
        crop: 'Corn',
        location: {
            lat: -96.1000,
            lng: 18.1000,
            country: 'MEX',
            countryName: 'Mexico',
            region: 'MEX_Oaxaca_Tuxtepec'
        },
        risk: 0.0,
        confidence: 85,
        ndviMean: 0.447,
        dataSource: 'model'
    },
    {
        id: 'mex-MEX_Oaxaca_Juchitan-corn',
        name: 'MEX_Oaxaca_Juchitan Corn',
        crop: 'Corn',
        location: {
            lat: -95.0000,
            lng: 16.4000,
            country: 'MEX',
            countryName: 'Mexico',
            region: 'MEX_Oaxaca_Juchitan'
        },
        risk: 0.0,
        confidence: 88,
        ndviMean: 0.388,
        dataSource: 'model'
    },
    {
        id: 'mex-MEX_Michoacan_Uruapan-corn',
        name: 'MEX_Michoacan_Uruapan Corn',
        crop: 'Corn',
        location: {
            lat: -102.1000,
            lng: 19.4000,
            country: 'MEX',
            countryName: 'Mexico',
            region: 'MEX_Michoacan_Uruapan'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.489,
        dataSource: 'model'
    },
    {
        id: 'mex-MEX_Puebla_Atlixco-corn',
        name: 'MEX_Puebla_Atlixco Corn',
        crop: 'Corn',
        location: {
            lat: -98.4000,
            lng: 18.9000,
            country: 'MEX',
            countryName: 'Mexico',
            region: 'MEX_Puebla_Atlixco'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.176,
        dataSource: 'model'
    },
    {
        id: 'mex-MEX_Puebla_Tehuacan-corn',
        name: 'MEX_Puebla_Tehuacan Corn',
        crop: 'Corn',
        location: {
            lat: -97.4000,
            lng: 18.5000,
            country: 'MEX',
            countryName: 'Mexico',
            region: 'MEX_Puebla_Tehuacan'
        },
        risk: 100.0,
        confidence: 91,
        ndviMean: 0.138,
        dataSource: 'model'
    },
    {
        id: 'mex-MEX_Chihuahua_Cuauhtemoc-wheat',
        name: 'MEX_Chihuahua_Cuauhtemoc Wheat',
        crop: 'Wheat',
        location: {
            lat: -106.9000,
            lng: 28.4000,
            country: 'MEX',
            countryName: 'Mexico',
            region: 'MEX_Chihuahua_Cuauhtemoc'
        },
        risk: 100.0,
        confidence: 91,
        ndviMean: 0.128,
        dataSource: 'model'
    },
    {
        id: 'bra-BRA_RS_Santa_Rosa-soy',
        name: 'BRA_RS_Santa_Rosa Soy',
        crop: 'Soy',
        location: {
            lat: -54.5000,
            lng: -27.9000,
            country: 'BRA',
            countryName: 'Brazil',
            region: 'BRA_RS_Santa_Rosa'
        },
        risk: 0.0,
        confidence: 88,
        ndviMean: 0.364,
        dataSource: 'model'
    },
    {
        id: 'mex-MEX_Chihuahua_Delicias-wheat',
        name: 'MEX_Chihuahua_Delicias Wheat',
        crop: 'Wheat',
        location: {
            lat: -105.5000,
            lng: 28.2000,
            country: 'MEX',
            countryName: 'Mexico',
            region: 'MEX_Chihuahua_Delicias'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.297,
        dataSource: 'model'
    },
    {
        id: 'bra-BRA_RS_Ijui-soy',
        name: 'BRA_RS_Ijui Soy',
        crop: 'Soy',
        location: {
            lat: -53.9000,
            lng: -28.4000,
            country: 'BRA',
            countryName: 'Brazil',
            region: 'BRA_RS_Ijui'
        },
        risk: 0.0,
        confidence: 88,
        ndviMean: 0.3,
        dataSource: 'model'
    },
    {
        id: 'bra-BRA_RS_Cruz_Alta-soy',
        name: 'BRA_RS_Cruz_Alta Soy',
        crop: 'Soy',
        location: {
            lat: -53.6000,
            lng: -28.6000,
            country: 'BRA',
            countryName: 'Brazil',
            region: 'BRA_RS_Cruz_Alta'
        },
        risk: 0.0,
        confidence: 88,
        ndviMean: 0.294,
        dataSource: 'model'
    },
    {
        id: 'bra-BRA_RS_Erechim-soy',
        name: 'BRA_RS_Erechim Soy',
        crop: 'Soy',
        location: {
            lat: -52.3000,
            lng: -27.6000,
            country: 'BRA',
            countryName: 'Brazil',
            region: 'BRA_RS_Erechim'
        },
        risk: 0.0,
        confidence: 85,
        ndviMean: 0.421,
        dataSource: 'model'
    },
    {
        id: 'bra-BRA_PR_Toledo-soy',
        name: 'BRA_PR_Toledo Soy',
        crop: 'Soy',
        location: {
            lat: -53.7000,
            lng: -24.7000,
            country: 'BRA',
            countryName: 'Brazil',
            region: 'BRA_PR_Toledo'
        },
        risk: 0.0,
        confidence: 88,
        ndviMean: 0.432,
        dataSource: 'model'
    },
    {
        id: 'bra-BRA_PR_Cascavel-soy',
        name: 'BRA_PR_Cascavel Soy',
        crop: 'Soy',
        location: {
            lat: -53.5000,
            lng: -24.9000,
            country: 'BRA',
            countryName: 'Brazil',
            region: 'BRA_PR_Cascavel'
        },
        risk: 0.0,
        confidence: 88,
        ndviMean: 0.452,
        dataSource: 'model'
    },
    {
        id: 'bra-BRA_MT_Primavera-soy',
        name: 'BRA_MT_Primavera Soy',
        crop: 'Soy',
        location: {
            lat: -54.3000,
            lng: -15.5000,
            country: 'BRA',
            countryName: 'Brazil',
            region: 'BRA_MT_Primavera'
        },
        risk: 0.0,
        confidence: 79,
        ndviMean: 0.33,
        dataSource: 'model'
    },
    {
        id: 'bra-BRA_MT_Campo_Novo-soy',
        name: 'BRA_MT_Campo_Novo Soy',
        crop: 'Soy',
        location: {
            lat: -59.8000,
            lng: -13.7000,
            country: 'BRA',
            countryName: 'Brazil',
            region: 'BRA_MT_Campo_Novo'
        },
        risk: 0.0,
        confidence: 79,
        ndviMean: 0.333,
        dataSource: 'model'
    },
    {
        id: 'bra-BRA_PR_Londrina-soy',
        name: 'BRA_PR_Londrina Soy',
        crop: 'Soy',
        location: {
            lat: -51.2000,
            lng: -23.3000,
            country: 'BRA',
            countryName: 'Brazil',
            region: 'BRA_PR_Londrina'
        },
        risk: 100.0,
        confidence: 88,
        ndviMean: 0.129,
        dataSource: 'model'
    },
    {
        id: 'bra-BRA_PR_Maringa-soy',
        name: 'BRA_PR_Maringa Soy',
        crop: 'Soy',
        location: {
            lat: -51.9000,
            lng: -23.4000,
            country: 'BRA',
            countryName: 'Brazil',
            region: 'BRA_PR_Maringa'
        },
        risk: 0.0,
        confidence: 82,
        ndviMean: 0.248,
        dataSource: 'model'
    },
    {
        id: 'bra-BRA_MT_Nova_Mutum-soy',
        name: 'BRA_MT_Nova_Mutum Soy',
        crop: 'Soy',
        location: {
            lat: -56.1000,
            lng: -13.8000,
            country: 'BRA',
            countryName: 'Brazil',
            region: 'BRA_MT_Nova_Mutum'
        },
        risk: 0.0,
        confidence: 82,
        ndviMean: 0.422,
        dataSource: 'model'
    },
    {
        id: 'bra-BRA_MT_Tangara-soy',
        name: 'BRA_MT_Tangara Soy',
        crop: 'Soy',
        location: {
            lat: -57.5000,
            lng: -14.6000,
            country: 'BRA',
            countryName: 'Brazil',
            region: 'BRA_MT_Tangara'
        },
        risk: 0.0,
        confidence: 88,
        ndviMean: 0.251,
        dataSource: 'model'
    },
    {
        id: 'bra-BRA_GO_Itumbiara-soy',
        name: 'BRA_GO_Itumbiara Soy',
        crop: 'Soy',
        location: {
            lat: -49.2000,
            lng: -18.4000,
            country: 'BRA',
            countryName: 'Brazil',
            region: 'BRA_GO_Itumbiara'
        },
        risk: 0.0,
        confidence: 88,
        ndviMean: 0.17,
        dataSource: 'model'
    },
    {
        id: 'bra-BRA_GO_Jatai-soy',
        name: 'BRA_GO_Jatai Soy',
        crop: 'Soy',
        location: {
            lat: -51.7000,
            lng: -17.9000,
            country: 'BRA',
            countryName: 'Brazil',
            region: 'BRA_GO_Jatai'
        },
        risk: 0.0,
        confidence: 88,
        ndviMean: 0.411,
        dataSource: 'model'
    },
    {
        id: 'bra-BRA_MS_Dourados-soy',
        name: 'BRA_MS_Dourados Soy',
        crop: 'Soy',
        location: {
            lat: -54.8000,
            lng: -22.2000,
            country: 'BRA',
            countryName: 'Brazil',
            region: 'BRA_MS_Dourados'
        },
        risk: 0.0,
        confidence: 88,
        ndviMean: 0.319,
        dataSource: 'model'
    },
    {
        id: 'bra-BRA_BA_Barreiras-soy',
        name: 'BRA_BA_Barreiras Soy',
        crop: 'Soy',
        location: {
            lat: -45.0000,
            lng: -12.1000,
            country: 'BRA',
            countryName: 'Brazil',
            region: 'BRA_BA_Barreiras'
        },
        risk: 0.0,
        confidence: 85,
        ndviMean: 0.329,
        dataSource: 'model'
    },
    {
        id: 'bra-BRA_BA_Luis_Eduardo-soy',
        name: 'BRA_BA_Luis_Eduardo Soy',
        crop: 'Soy',
        location: {
            lat: -45.8000,
            lng: -12.1000,
            country: 'BRA',
            countryName: 'Brazil',
            region: 'BRA_BA_Luis_Eduardo'
        },
        risk: 100.0,
        confidence: 85,
        ndviMean: 0.093,
        dataSource: 'model'
    },
    {
        id: 'bra-BRA_MS_Ponta_Pora-soy',
        name: 'BRA_MS_Ponta_Pora Soy',
        crop: 'Soy',
        location: {
            lat: -55.7000,
            lng: -22.5000,
            country: 'BRA',
            countryName: 'Brazil',
            region: 'BRA_MS_Ponta_Pora'
        },
        risk: 0.0,
        confidence: 88,
        ndviMean: 0.439,
        dataSource: 'model'
    },
    {
        id: 'bra-BRA_MS_Maracaju-soy',
        name: 'BRA_MS_Maracaju Soy',
        crop: 'Soy',
        location: {
            lat: -55.2000,
            lng: -21.6000,
            country: 'BRA',
            countryName: 'Brazil',
            region: 'BRA_MS_Maracaju'
        },
        risk: 0.0,
        confidence: 88,
        ndviMean: 0.361,
        dataSource: 'model'
    },
    {
        id: 'bra-BRA_MG_Uberaba-soy',
        name: 'BRA_MG_Uberaba Soy',
        crop: 'Soy',
        location: {
            lat: -47.9000,
            lng: -19.7000,
            country: 'BRA',
            countryName: 'Brazil',
            region: 'BRA_MG_Uberaba'
        },
        risk: 0.0,
        confidence: 88,
        ndviMean: 0.378,
        dataSource: 'model'
    },
    {
        id: 'bra-BRA_MG_Uberlandia-soy',
        name: 'BRA_MG_Uberlandia Soy',
        crop: 'Soy',
        location: {
            lat: -48.3000,
            lng: -18.9000,
            country: 'BRA',
            countryName: 'Brazil',
            region: 'BRA_MG_Uberlandia'
        },
        risk: 0.2,
        confidence: 85,
        ndviMean: 0.155,
        dataSource: 'model'
    },
    {
        id: 'bra-BRA_MG_Patos-soy',
        name: 'BRA_MG_Patos Soy',
        crop: 'Soy',
        location: {
            lat: -46.5000,
            lng: -18.6000,
            country: 'BRA',
            countryName: 'Brazil',
            region: 'BRA_MG_Patos'
        },
        risk: 0.0,
        confidence: 88,
        ndviMean: 0.267,
        dataSource: 'model'
    },
    {
        id: 'chn-CHN_Jilin_Siping-corn',
        name: 'CHN_Jilin_Siping Corn',
        crop: 'Corn',
        location: {
            lat: 124.4000,
            lng: 43.2000,
            country: 'CHN',
            countryName: 'China',
            region: 'CHN_Jilin_Siping'
        },
        risk: 0.1,
        confidence: 82,
        ndviMean: 0.163,
        dataSource: 'model'
    },
    {
        id: 'chn-CHN_Heilongjiang_Jiamusi-soy',
        name: 'CHN_Heilongjiang_Jiamusi Soy',
        crop: 'Soy',
        location: {
            lat: 130.4000,
            lng: 46.8000,
            country: 'CHN',
            countryName: 'China',
            region: 'CHN_Heilongjiang_Jiamusi'
        },
        risk: 0.0,
        confidence: 85,
        ndviMean: 0.235,
        dataSource: 'model'
    },
    {
        id: 'chn-CHN_Heilongjiang_Mudanjiang-soy',
        name: 'CHN_Heilongjiang_Mudanjiang Soy',
        crop: 'Soy',
        location: {
            lat: 129.6000,
            lng: 44.6000,
            country: 'CHN',
            countryName: 'China',
            region: 'CHN_Heilongjiang_Mudanjiang'
        },
        risk: 0.1,
        confidence: 91,
        ndviMean: 0.171,
        dataSource: 'model'
    },
    {
        id: 'chn-CHN_Heilongjiang_Qiqihar-soy',
        name: 'CHN_Heilongjiang_Qiqihar Soy',
        crop: 'Soy',
        location: {
            lat: 124.0000,
            lng: 47.4000,
            country: 'CHN',
            countryName: 'China',
            region: 'CHN_Heilongjiang_Qiqihar'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.32,
        dataSource: 'model'
    },
    {
        id: 'chn-CHN_Jilin_Changchun-corn',
        name: 'CHN_Jilin_Changchun Corn',
        crop: 'Corn',
        location: {
            lat: 125.3000,
            lng: 43.9000,
            country: 'CHN',
            countryName: 'China',
            region: 'CHN_Jilin_Changchun'
        },
        risk: 0.1,
        confidence: 91,
        ndviMean: 0.168,
        dataSource: 'model'
    },
    {
        id: 'chn-CHN_Heilongjiang_Harbin-soy',
        name: 'CHN_Heilongjiang_Harbin Soy',
        crop: 'Soy',
        location: {
            lat: 126.5000,
            lng: 45.8000,
            country: 'CHN',
            countryName: 'China',
            region: 'CHN_Heilongjiang_Harbin'
        },
        risk: 100.0,
        confidence: 91,
        ndviMean: 0.126,
        dataSource: 'model'
    },
    {
        id: 'chn-CHN_Liaoning_Tieling-corn',
        name: 'CHN_Liaoning_Tieling Corn',
        crop: 'Corn',
        location: {
            lat: 123.8000,
            lng: 42.3000,
            country: 'CHN',
            countryName: 'China',
            region: 'CHN_Liaoning_Tieling'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.313,
        dataSource: 'model'
    },
    {
        id: 'chn-CHN_Jilin_Tonghua-corn',
        name: 'CHN_Jilin_Tonghua Corn',
        crop: 'Corn',
        location: {
            lat: 125.9000,
            lng: 41.7000,
            country: 'CHN',
            countryName: 'China',
            region: 'CHN_Jilin_Tonghua'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.31,
        dataSource: 'model'
    },
    {
        id: 'chn-CHN_Liaoning_Shenyang-corn',
        name: 'CHN_Liaoning_Shenyang Corn',
        crop: 'Corn',
        location: {
            lat: 123.4000,
            lng: 41.8000,
            country: 'CHN',
            countryName: 'China',
            region: 'CHN_Liaoning_Shenyang'
        },
        risk: 100.0,
        confidence: 88,
        ndviMean: 0.144,
        dataSource: 'model'
    },
    {
        id: 'chn-CHN_Shandong_Jinan-wheat',
        name: 'CHN_Shandong_Jinan Wheat',
        crop: 'Wheat',
        location: {
            lat: 117.0000,
            lng: 36.7000,
            country: 'CHN',
            countryName: 'China',
            region: 'CHN_Shandong_Jinan'
        },
        risk: 100.0,
        confidence: 88,
        ndviMean: 0.111,
        dataSource: 'model'
    },
    {
        id: 'chn-CHN_Shandong_Weifang-wheat',
        name: 'CHN_Shandong_Weifang Wheat',
        crop: 'Wheat',
        location: {
            lat: 119.1000,
            lng: 36.7000,
            country: 'CHN',
            countryName: 'China',
            region: 'CHN_Shandong_Weifang'
        },
        risk: 0.1,
        confidence: 91,
        ndviMean: 0.187,
        dataSource: 'model'
    },
    {
        id: 'chn-CHN_Henan_Zhengzhou-wheat',
        name: 'CHN_Henan_Zhengzhou Wheat',
        crop: 'Wheat',
        location: {
            lat: 113.7000,
            lng: 34.8000,
            country: 'CHN',
            countryName: 'China',
            region: 'CHN_Henan_Zhengzhou'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.226,
        dataSource: 'model'
    },
    {
        id: 'chn-CHN_Henan_Xinxiang-wheat',
        name: 'CHN_Henan_Xinxiang Wheat',
        crop: 'Wheat',
        location: {
            lat: 113.9000,
            lng: 35.3000,
            country: 'CHN',
            countryName: 'China',
            region: 'CHN_Henan_Xinxiang'
        },
        risk: 100.0,
        confidence: 91,
        ndviMean: 0.121,
        dataSource: 'model'
    },
    {
        id: 'chn-CHN_Hebei_Handan-wheat',
        name: 'CHN_Hebei_Handan Wheat',
        crop: 'Wheat',
        location: {
            lat: 114.5000,
            lng: 36.6000,
            country: 'CHN',
            countryName: 'China',
            region: 'CHN_Hebei_Handan'
        },
        risk: 100.0,
        confidence: 91,
        ndviMean: 0.127,
        dataSource: 'model'
    },
    {
        id: 'chn-CHN_Hebei_Baoding-wheat',
        name: 'CHN_Hebei_Baoding Wheat',
        crop: 'Wheat',
        location: {
            lat: 115.5000,
            lng: 38.9000,
            country: 'CHN',
            countryName: 'China',
            region: 'CHN_Hebei_Baoding'
        },
        risk: 100.0,
        confidence: 91,
        ndviMean: 0.152,
        dataSource: 'model'
    },
    {
        id: 'chn-CHN_Hebei_Shijiazhuang-wheat',
        name: 'CHN_Hebei_Shijiazhuang Wheat',
        crop: 'Wheat',
        location: {
            lat: 114.5000,
            lng: 38.0000,
            country: 'CHN',
            countryName: 'China',
            region: 'CHN_Hebei_Shijiazhuang'
        },
        risk: 0.0,
        confidence: 88,
        ndviMean: 0.227,
        dataSource: 'model'
    },
    {
        id: 'chn-CHN_Shandong_Dezhou-wheat',
        name: 'CHN_Shandong_Dezhou Wheat',
        crop: 'Wheat',
        location: {
            lat: 116.4000,
            lng: 37.4000,
            country: 'CHN',
            countryName: 'China',
            region: 'CHN_Shandong_Dezhou'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.392,
        dataSource: 'model'
    },
    {
        id: 'chn-CHN_Henan_Zhoukou-wheat',
        name: 'CHN_Henan_Zhoukou Wheat',
        crop: 'Wheat',
        location: {
            lat: 114.7000,
            lng: 33.6000,
            country: 'CHN',
            countryName: 'China',
            region: 'CHN_Henan_Zhoukou'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.25,
        dataSource: 'model'
    },
    {
        id: 'chn-CHN_Anhui_Hefei-rice',
        name: 'CHN_Anhui_Hefei Rice',
        crop: 'Rice',
        location: {
            lat: 117.2000,
            lng: 31.8000,
            country: 'CHN',
            countryName: 'China',
            region: 'CHN_Anhui_Hefei'
        },
        risk: 0.0,
        confidence: 82,
        ndviMean: 0.272,
        dataSource: 'model'
    },
    {
        id: 'chn-CHN_Anhui_Fuyang-wheat',
        name: 'CHN_Anhui_Fuyang Wheat',
        crop: 'Wheat',
        location: {
            lat: 115.8000,
            lng: 32.9000,
            country: 'CHN',
            countryName: 'China',
            region: 'CHN_Anhui_Fuyang'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.225,
        dataSource: 'model'
    },
    {
        id: 'chn-CHN_Hubei_Wuhan-rice',
        name: 'CHN_Hubei_Wuhan Rice',
        crop: 'Rice',
        location: {
            lat: 114.3000,
            lng: 30.6000,
            country: 'CHN',
            countryName: 'China',
            region: 'CHN_Hubei_Wuhan'
        },
        risk: 100.0,
        confidence: 85,
        ndviMean: 0.121,
        dataSource: 'model'
    },
    {
        id: 'chn-CHN_Hunan_Yueyang-rice',
        name: 'CHN_Hunan_Yueyang Rice',
        crop: 'Rice',
        location: {
            lat: 113.1000,
            lng: 29.4000,
            country: 'CHN',
            countryName: 'China',
            region: 'CHN_Hunan_Yueyang'
        },
        risk: 100.0,
        confidence: 91,
        ndviMean: 0.027,
        dataSource: 'model'
    },
    {
        id: 'chn-CHN_Jiangsu_Xuzhou-wheat',
        name: 'CHN_Jiangsu_Xuzhou Wheat',
        crop: 'Wheat',
        location: {
            lat: 117.2000,
            lng: 34.3000,
            country: 'CHN',
            countryName: 'China',
            region: 'CHN_Jiangsu_Xuzhou'
        },
        risk: 100.0,
        confidence: 85,
        ndviMean: 0.149,
        dataSource: 'model'
    },
    {
        id: 'chn-CHN_Hubei_Jingzhou-rice',
        name: 'CHN_Hubei_Jingzhou Rice',
        crop: 'Rice',
        location: {
            lat: 112.2000,
            lng: 30.3000,
            country: 'CHN',
            countryName: 'China',
            region: 'CHN_Hubei_Jingzhou'
        },
        risk: 0.0,
        confidence: 85,
        ndviMean: 0.498,
        dataSource: 'model'
    },
    {
        id: 'chn-CHN_Sichuan_Mianyang-rice',
        name: 'CHN_Sichuan_Mianyang Rice',
        crop: 'Rice',
        location: {
            lat: 104.8000,
            lng: 31.5000,
            country: 'CHN',
            countryName: 'China',
            region: 'CHN_Sichuan_Mianyang'
        },
        risk: 0.0,
        confidence: 85,
        ndviMean: 0.33,
        dataSource: 'model'
    },
    {
        id: 'chn-CHN_Jiangsu_Yancheng-rice',
        name: 'CHN_Jiangsu_Yancheng Rice',
        crop: 'Rice',
        location: {
            lat: 120.1000,
            lng: 33.4000,
            country: 'CHN',
            countryName: 'China',
            region: 'CHN_Jiangsu_Yancheng'
        },
        risk: 0.0,
        confidence: 88,
        ndviMean: 0.298,
        dataSource: 'model'
    },
    {
        id: 'chn-CHN_Sichuan_Chengdu-rice',
        name: 'CHN_Sichuan_Chengdu Rice',
        crop: 'Rice',
        location: {
            lat: 104.1000,
            lng: 30.7000,
            country: 'CHN',
            countryName: 'China',
            region: 'CHN_Sichuan_Chengdu'
        },
        risk: 0.5,
        confidence: 85,
        ndviMean: 0.154,
        dataSource: 'model'
    },
    {
        id: 'arg-ARG_BA_Rojas-soy',
        name: 'ARG_BA_Rojas Soy',
        crop: 'Soy',
        location: {
            lat: -60.7000,
            lng: -34.2000,
            country: 'ARG',
            countryName: 'Argentina',
            region: 'ARG_BA_Rojas'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.296,
        dataSource: 'model'
    },
    {
        id: 'arg-ARG_SF_San_Lorenzo-soy',
        name: 'ARG_SF_San_Lorenzo Soy',
        crop: 'Soy',
        location: {
            lat: -60.7000,
            lng: -32.7000,
            country: 'ARG',
            countryName: 'Argentina',
            region: 'ARG_SF_San_Lorenzo'
        },
        risk: 100.0,
        confidence: 88,
        ndviMean: -0.085,
        dataSource: 'model'
    },
    {
        id: 'arg-ARG_BA_San_Nicolas-soy',
        name: 'ARG_BA_San_Nicolas Soy',
        crop: 'Soy',
        location: {
            lat: -60.2000,
            lng: -33.3000,
            country: 'ARG',
            countryName: 'Argentina',
            region: 'ARG_BA_San_Nicolas'
        },
        risk: 100.0,
        confidence: 91,
        ndviMean: -0.126,
        dataSource: 'model'
    },
    {
        id: 'arg-ARG_BA_Trenque-wheat',
        name: 'ARG_BA_Trenque Wheat',
        crop: 'Wheat',
        location: {
            lat: -62.7000,
            lng: -36.0000,
            country: 'ARG',
            countryName: 'Argentina',
            region: 'ARG_BA_Trenque'
        },
        risk: 100.0,
        confidence: 91,
        ndviMean: 0.116,
        dataSource: 'model'
    },
    {
        id: 'arg-ARG_ER_Gualeguay-soy',
        name: 'ARG_ER_Gualeguay Soy',
        crop: 'Soy',
        location: {
            lat: -59.3000,
            lng: -33.1000,
            country: 'ARG',
            countryName: 'Argentina',
            region: 'ARG_ER_Gualeguay'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.412,
        dataSource: 'model'
    },
    {
        id: 'arg-ARG_ER_Nogoya-soy',
        name: 'ARG_ER_Nogoya Soy',
        crop: 'Soy',
        location: {
            lat: -59.8000,
            lng: -32.4000,
            country: 'ARG',
            countryName: 'Argentina',
            region: 'ARG_ER_Nogoya'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.317,
        dataSource: 'model'
    },
    {
        id: 'arg-ARG_SF_Castellanos-soy',
        name: 'ARG_SF_Castellanos Soy',
        crop: 'Soy',
        location: {
            lat: -61.5000,
            lng: -31.3000,
            country: 'ARG',
            countryName: 'Argentina',
            region: 'ARG_SF_Castellanos'
        },
        risk: 0.0,
        confidence: 91,
        ndviMean: 0.225,
        dataSource: 'model'
    },
    {
        id: 'arg-ARG_LP_Realico-wheat',
        name: 'ARG_LP_Realico Wheat',
        crop: 'Wheat',
        location: {
            lat: -64.2000,
            lng: -35.0000,
            country: 'ARG',
            countryName: 'Argentina',
            region: 'ARG_LP_Realico'
        },
        risk: 100.0,
        confidence: 91,
        ndviMean: 0.132,
        dataSource: 'model'
    },
    {
        id: 'arg-ARG_LP_General_Pico-wheat',
        name: 'ARG_LP_General_Pico Wheat',
        crop: 'Wheat',
        location: {
            lat: -63.8000,
            lng: -35.7000,
            country: 'ARG',
            countryName: 'Argentina',
            region: 'ARG_LP_General_Pico'
        },
        risk: 0.1,
        confidence: 88,
        ndviMean: 0.168,
        dataSource: 'model'
    }
];
const topRiskRegions = globalPredictions.sort((a, b)=>b.risk - a.risk).slice(0, 20);
const countrySummary = [
    {
        country: 'SEN',
        countryName: 'Senegal',
        avgRisk: 100.0,
        regions: 3,
        topCrop: 'Groundnut'
    },
    {
        country: 'IRQ',
        countryName: 'Iraq',
        avgRisk: 100.0,
        regions: 2,
        topCrop: 'Wheat'
    },
    {
        country: 'SYR',
        countryName: 'Syria',
        avgRisk: 100.0,
        regions: 2,
        topCrop: 'Wheat'
    },
    {
        country: 'SAU',
        countryName: 'Saudi Arabia',
        avgRisk: 100.0,
        regions: 2,
        topCrop: 'Wheat'
    },
    {
        country: 'ISR',
        countryName: 'Israel',
        avgRisk: 100.0,
        regions: 2,
        topCrop: 'Wheat'
    },
    {
        country: 'TWN',
        countryName: 'Taiwan',
        avgRisk: 100.0,
        regions: 2,
        topCrop: 'Rice'
    },
    {
        country: 'PER',
        countryName: 'Peru',
        avgRisk: 100.0,
        regions: 2,
        topCrop: 'Rice'
    },
    {
        country: 'DOM',
        countryName: 'Dominican Republic',
        avgRisk: 100.0,
        regions: 1,
        topCrop: 'Rice'
    },
    {
        country: 'KHM',
        countryName: 'Cambodia',
        avgRisk: 99.9,
        regions: 3,
        topCrop: 'Rice'
    },
    {
        country: 'PRT',
        countryName: 'Portugal',
        avgRisk: 99.7,
        regions: 1,
        topCrop: 'Wheat'
    },
    {
        country: 'MAR',
        countryName: 'Morocco',
        avgRisk: 75.0,
        regions: 4,
        topCrop: 'Wheat'
    },
    {
        country: 'DZA',
        countryName: 'Algeria',
        avgRisk: 66.7,
        regions: 3,
        topCrop: 'Wheat'
    },
    {
        country: 'SDN',
        countryName: 'Sudan',
        avgRisk: 66.7,
        regions: 3,
        topCrop: 'Sorghum'
    },
    {
        country: 'UZB',
        countryName: 'Uzbekistan',
        avgRisk: 50.1,
        regions: 4,
        topCrop: 'Cotton'
    },
    {
        country: 'MLI',
        countryName: 'Mali',
        avgRisk: 50.0,
        regions: 2,
        topCrop: 'Corn'
    },
    {
        country: 'AGO',
        countryName: 'Angola',
        avgRisk: 50.0,
        regions: 2,
        topCrop: 'Corn'
    },
    {
        country: 'FIN',
        countryName: 'Finland',
        avgRisk: 50.0,
        regions: 2,
        topCrop: 'Wheat'
    },
    {
        country: 'TUR',
        countryName: 'Turkey',
        avgRisk: 50.0,
        regions: 16,
        topCrop: 'Wheat'
    },
    {
        country: 'PAK',
        countryName: 'Pakistan',
        avgRisk: 50.0,
        regions: 16,
        topCrop: 'Wheat'
    },
    {
        country: 'MMR',
        countryName: 'Myanmar',
        avgRisk: 50.0,
        regions: 4,
        topCrop: 'Rice'
    },
    {
        country: 'JPN',
        countryName: 'Japan',
        avgRisk: 50.0,
        regions: 4,
        topCrop: 'Rice'
    },
    {
        country: 'BOL',
        countryName: 'Bolivia',
        avgRisk: 50.0,
        regions: 2,
        topCrop: 'Soy'
    },
    {
        country: 'CUB',
        countryName: 'Cuba',
        avgRisk: 50.0,
        regions: 2,
        topCrop: 'Rice'
    },
    {
        country: 'IND',
        countryName: 'India',
        avgRisk: 47.6,
        regions: 147,
        topCrop: 'Wheat'
    },
    {
        country: 'ARG',
        countryName: 'Argentina',
        avgRisk: 43.8,
        regions: 48,
        topCrop: 'Soy'
    },
    {
        country: 'CHN',
        countryName: 'China',
        avgRisk: 43.4,
        regions: 76,
        topCrop: 'Wheat'
    },
    {
        country: 'CAN',
        countryName: 'Canada',
        avgRisk: 33.3,
        regions: 6,
        topCrop: 'Wheat'
    },
    {
        country: 'ZMB',
        countryName: 'Zambia',
        avgRisk: 33.3,
        regions: 3,
        topCrop: 'Corn'
    },
    {
        country: 'HUN',
        countryName: 'Hungary',
        avgRisk: 33.3,
        regions: 3,
        topCrop: 'Corn'
    },
    {
        country: 'NGA',
        countryName: 'Nigeria',
        avgRisk: 29.4,
        regions: 17,
        topCrop: 'Corn'
    },
    {
        country: 'TZA',
        countryName: 'Tanzania',
        avgRisk: 25.0,
        regions: 4,
        topCrop: 'Corn'
    },
    {
        country: 'IRN',
        countryName: 'Iran',
        avgRisk: 25.0,
        regions: 4,
        topCrop: 'Wheat'
    },
    {
        country: 'PHL',
        countryName: 'Philippines',
        avgRisk: 25.0,
        regions: 4,
        topCrop: 'Rice'
    },
    {
        country: 'ESP',
        countryName: 'Spain',
        avgRisk: 24.9,
        regions: 4,
        topCrop: 'Wheat'
    },
    {
        country: 'AUS',
        countryName: 'Australia',
        avgRisk: 20.0,
        regions: 5,
        topCrop: 'Wheat'
    },
    {
        country: 'RUS',
        countryName: 'Russia',
        avgRisk: 20.0,
        regions: 5,
        topCrop: 'Wheat'
    },
    {
        country: 'EGY',
        countryName: 'Egypt',
        avgRisk: 20.0,
        regions: 15,
        topCrop: 'Wheat'
    },
    {
        country: 'ZAF',
        countryName: 'South Africa',
        avgRisk: 20.0,
        regions: 15,
        topCrop: 'Corn'
    },
    {
        country: 'BGD',
        countryName: 'Bangladesh',
        avgRisk: 20.0,
        regions: 5,
        topCrop: 'Rice'
    },
    {
        country: 'MEX',
        countryName: 'Mexico',
        avgRisk: 18.7,
        regions: 50,
        topCrop: 'Corn'
    },
    {
        country: 'UKR',
        countryName: 'Ukraine',
        avgRisk: 16.7,
        regions: 6,
        topCrop: 'Corn'
    },
    {
        country: 'KEN',
        countryName: 'Kenya',
        avgRisk: 12.5,
        regions: 16,
        topCrop: 'Corn'
    },
    {
        country: 'DEU',
        countryName: 'Germany',
        avgRisk: 6.7,
        regions: 15,
        topCrop: 'Wheat'
    },
    {
        country: 'ETH',
        countryName: 'Ethiopia',
        avgRisk: 5.9,
        regions: 17,
        topCrop: 'Wheat'
    },
    {
        country: 'BRA',
        countryName: 'Brazil',
        avgRisk: 3.2,
        regions: 67,
        topCrop: 'Soy'
    },
    {
        country: 'VNM',
        countryName: 'Vietnam',
        avgRisk: 0.1,
        regions: 2,
        topCrop: 'Rice'
    },
    {
        country: 'GRC',
        countryName: 'Greece',
        avgRisk: 0.1,
        regions: 2,
        topCrop: 'Corn'
    },
    {
        country: 'NLD',
        countryName: 'Netherlands',
        avgRisk: 0.1,
        regions: 2,
        topCrop: 'Wheat'
    },
    {
        country: 'KAZ',
        countryName: 'Kazakhstan',
        avgRisk: 0.1,
        regions: 4,
        topCrop: 'Wheat'
    },
    {
        country: 'MYS',
        countryName: 'Malaysia',
        avgRisk: 0.1,
        regions: 2,
        topCrop: 'Rice'
    },
    {
        country: 'VEN',
        countryName: 'Venezuela',
        avgRisk: 0.1,
        regions: 3,
        topCrop: 'Corn'
    },
    {
        country: 'FRA',
        countryName: 'France',
        avgRisk: 0.0,
        regions: 5,
        topCrop: 'Wheat'
    },
    {
        country: 'IDN',
        countryName: 'Indonesia',
        avgRisk: 0.0,
        regions: 4,
        topCrop: 'Rice'
    },
    {
        country: 'THA',
        countryName: 'Thailand',
        avgRisk: 0.0,
        regions: 3,
        topCrop: 'Rice'
    },
    {
        country: 'UGA',
        countryName: 'Uganda',
        avgRisk: 0.0,
        regions: 3,
        topCrop: 'Corn'
    },
    {
        country: 'ZWE',
        countryName: 'Zimbabwe',
        avgRisk: 0.0,
        regions: 3,
        topCrop: 'Corn'
    },
    {
        country: 'GHA',
        countryName: 'Ghana',
        avgRisk: 0.0,
        regions: 3,
        topCrop: 'Corn'
    },
    {
        country: 'BFA',
        countryName: 'Burkina Faso',
        avgRisk: 0.0,
        regions: 2,
        topCrop: 'Corn'
    },
    {
        country: 'CIV',
        countryName: 'Ivory Coast',
        avgRisk: 0.0,
        regions: 2,
        topCrop: 'Rice'
    },
    {
        country: 'MWI',
        countryName: 'Malawi',
        avgRisk: 0.0,
        regions: 2,
        topCrop: 'Corn'
    },
    {
        country: 'CMR',
        countryName: 'Cameroon',
        avgRisk: 0.0,
        regions: 3,
        topCrop: 'Corn'
    },
    {
        country: 'MOZ',
        countryName: 'Mozambique',
        avgRisk: 0.0,
        regions: 3,
        topCrop: 'Corn'
    },
    {
        country: 'POL',
        countryName: 'Poland',
        avgRisk: 0.0,
        regions: 4,
        topCrop: 'Wheat'
    },
    {
        country: 'ROU',
        countryName: 'Romania',
        avgRisk: 0.0,
        regions: 4,
        topCrop: 'Corn'
    },
    {
        country: 'ITA',
        countryName: 'Italy',
        avgRisk: 0.0,
        regions: 3,
        topCrop: 'Wheat'
    },
    {
        country: 'GBR',
        countryName: 'UK',
        avgRisk: 0.0,
        regions: 3,
        topCrop: 'Wheat'
    },
    {
        country: 'CZE',
        countryName: 'Czech Republic',
        avgRisk: 0.0,
        regions: 2,
        topCrop: 'Corn'
    },
    {
        country: 'SRB',
        countryName: 'Serbia',
        avgRisk: 0.0,
        regions: 2,
        topCrop: 'Wheat'
    },
    {
        country: 'BGR',
        countryName: 'Bulgaria',
        avgRisk: 0.0,
        regions: 2,
        topCrop: 'Wheat'
    },
    {
        country: 'DNK',
        countryName: 'Denmark',
        avgRisk: 0.0,
        regions: 2,
        topCrop: 'Wheat'
    },
    {
        country: 'SWE',
        countryName: 'Sweden',
        avgRisk: 0.0,
        regions: 2,
        topCrop: 'Wheat'
    },
    {
        country: 'AUT',
        countryName: 'Austria',
        avgRisk: 0.0,
        regions: 2,
        topCrop: 'Corn'
    },
    {
        country: 'BEL',
        countryName: 'Belgium',
        avgRisk: 0.0,
        regions: 2,
        topCrop: 'Wheat'
    },
    {
        country: 'NPL',
        countryName: 'Nepal',
        avgRisk: 0.0,
        regions: 2,
        topCrop: 'Rice'
    },
    {
        country: 'LKA',
        countryName: 'Sri Lanka',
        avgRisk: 0.0,
        regions: 2,
        topCrop: 'Rice'
    },
    {
        country: 'KOR',
        countryName: 'South Korea',
        avgRisk: 0.0,
        regions: 3,
        topCrop: 'Rice'
    },
    {
        country: 'PRK',
        countryName: 'North Korea',
        avgRisk: 0.0,
        regions: 2,
        topCrop: 'Rice'
    },
    {
        country: 'PRY',
        countryName: 'Paraguay',
        avgRisk: 0.0,
        regions: 4,
        topCrop: 'Soy'
    },
    {
        country: 'URY',
        countryName: 'Uruguay',
        avgRisk: 0.0,
        regions: 3,
        topCrop: 'Soy'
    },
    {
        country: 'COL',
        countryName: 'Colombia',
        avgRisk: 0.0,
        regions: 3,
        topCrop: 'Rice'
    },
    {
        country: 'ECU',
        countryName: 'Ecuador',
        avgRisk: 0.0,
        regions: 2,
        topCrop: 'Rice'
    },
    {
        country: 'CHL',
        countryName: 'Chile',
        avgRisk: 0.0,
        regions: 3,
        topCrop: 'Wheat'
    },
    {
        country: 'NZL',
        countryName: 'New Zealand',
        avgRisk: 0.0,
        regions: 2,
        topCrop: 'Wheat'
    }
];
}),
"[project]/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/globe.js [app-ssr] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-ssr] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-ssr] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bell.js [app-ssr] (ecmascript) <export default as Bell>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-ssr] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-ssr] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-ssr] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chart-column.js [app-ssr] (ecmascript) <export default as BarChart3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield.js [app-ssr] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/database.js [app-ssr] (ecmascript) <export default as Database>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$KPICard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/KPICard.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TimelineScrubber$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/TimelineScrubber.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TopRiskTable$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/TopRiskTable.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CropSelector$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/CropSelector.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$globalPredictions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/globalPredictions.ts [app-ssr] (ecmascript)");
;
'use client';
;
;
;
;
;
;
;
;
;
;
// Dynamic import with SSR disabled for MapLibre
const GlobalMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(async ()=>{}, {
    loadableGenerated: {
        modules: [
            "[project]/src/components/GlobalMap.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
// Generate top risk table data from real predictions
const topRiskCountries = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$globalPredictions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["countrySummary"].slice(0, 5).map((cs, i)=>({
        rank: i + 1,
        country: cs.countryName,
        region: cs.topCrop + ' regions',
        riskScore: cs.avgRisk,
        trend: cs.avgRisk > 70 ? 'up' : cs.avgRisk > 50 ? 'stable' : 'down',
        crop: cs.topCrop,
        change: Math.round((cs.avgRisk - 50) / 5) // Approximate change
    }));
function HomePage() {
    const [selectedWeek, setSelectedWeek] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [selectedCrop, setSelectedCrop] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('wheat');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-[#0a0a0a] text-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "fixed top-0 left-0 right-0 z-50 glass-panel border-b border-white/10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between px-4 py-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-10 h-10 rounded-lg bg-gradient-to-br from-crop-green to-crop-green-dark flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                                        className: "w-6 h-6 text-white"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 43,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 42,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "text-lg font-bold",
                                            children: "AgriSentinel"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 46,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-gray-400",
                                            children: "Global Crop Risk Monitor"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 47,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 45,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 41,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                            className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 54,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            placeholder: "Search region, country, or coordinates...",
                                            className: "w-80 pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm focus:outline-none focus:border-crop-green/50"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 55,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 53,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CropSelector$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    selected: selectedCrop,
                                    onSelect: setSelectedCrop
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 62,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm hover:bg-white/10 transition",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 67,
                                            columnNumber: 15
                                        }, this),
                                        "2023 Season",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 69,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 64,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 52,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/alerts",
                                    className: "relative p-2 hover:bg-white/10 rounded-lg transition",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__["Bell"], {
                                            className: "w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 76,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "absolute top-1 right-1 w-2 h-2 bg-stress-red rounded-full"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 77,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 75,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 px-3 py-1.5 bg-crop-green/20 border border-crop-green/30 rounded-full",
                                    title: "All data from real Sentinel-2 satellite imagery",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                            className: "w-3 h-3 text-crop-green"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 80,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs text-crop-green font-medium",
                                            children: "Real Satellite Data"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 81,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 79,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 74,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 39,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pt-16 flex",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        className: "fixed left-0 top-16 bottom-0 w-80 glass-panel border-r border-white/10 overflow-y-auto",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4 space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-sm font-semibold text-gray-300",
                                            children: "GLOBAL STATUS"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 94,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs text-gray-500",
                                            children: [
                                                "Updated ",
                                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$globalPredictions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["globalStats"].lastUpdate
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 95,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 93,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-crop-green/10 border border-crop-green/20 rounded-lg p-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 mb-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__["Database"], {
                                                    className: "w-4 h-4 text-crop-green"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 101,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs font-semibold text-crop-green",
                                                    children: "REAL ML PREDICTIONS"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 102,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 100,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-gray-400",
                                            children: [
                                                "Sentinel-2 satellite imagery • XGBoost model • ",
                                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$globalPredictions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["globalStats"].countries,
                                                " countries"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 104,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 99,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-gradient-to-br from-stress-red/20 to-stress-orange/10 border border-stress-red/30 rounded-xl p-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-start justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs text-gray-400 uppercase tracking-wider",
                                                            children: "High Risk Regions"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 113,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-3xl font-bold text-stress-red mt-1",
                                                            children: [
                                                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$globalPredictions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["globalStats"].highRiskPercent,
                                                                "%"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 114,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 112,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-stress-red/20 text-stress-red",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                                            className: "w-3 h-3"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 117,
                                                            columnNumber: 19
                                                        }, this),
                                                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$globalPredictions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["globalStats"].highRiskRegions,
                                                        " regions"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 116,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 111,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-gray-400 mt-2",
                                            children: [
                                                "of ",
                                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$globalPredictions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["globalStats"].totalRegions,
                                                " monitored"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 121,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 110,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$KPICard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            label: "Countries",
                                            value: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$globalPredictions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["globalStats"].countries.toString(),
                                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 129,
                                                columnNumber: 23
                                            }, void 0)
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 126,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$KPICard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            label: "Regions",
                                            value: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$globalPredictions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["globalStats"].totalRegions.toString(),
                                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 134,
                                                columnNumber: 23
                                            }, void 0)
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 131,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$KPICard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            label: "Avg Confidence",
                                            value: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$globalPredictions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["globalStats"].avgConfidence}%`,
                                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 139,
                                                columnNumber: 23
                                            }, void 0),
                                            color: "green"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 136,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$KPICard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            label: "High Risk",
                                            value: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$globalPredictions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["globalStats"].highRiskRegions.toString(),
                                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 145,
                                                columnNumber: 23
                                            }, void 0),
                                            color: "orange"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 142,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 125,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white/5 rounded-xl p-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between mb-3",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs text-gray-400 uppercase tracking-wider",
                                                children: "Risk Distribution"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 153,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 152,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-3 h-3 rounded bg-stress-red"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 157,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs text-gray-300 flex-1",
                                                            children: "High Risk (≥50%)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 158,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs font-medium",
                                                            children: [
                                                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$globalPredictions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["globalStats"].highRiskPercent,
                                                                "%"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 159,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 156,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-3 h-3 rounded bg-stress-yellow"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 162,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs text-gray-300 flex-1",
                                                            children: "Medium (25-50%)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 163,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs font-medium",
                                                            children: [
                                                                Math.round((100 - __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$globalPredictions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["globalStats"].highRiskPercent) * 0.4),
                                                                "%"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 164,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 161,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-3 h-3 rounded bg-crop-green"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 167,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs text-gray-300 flex-1",
                                                            children: "Low (<25%)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 168,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs font-medium",
                                                            children: [
                                                                Math.round((100 - __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$globalPredictions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["globalStats"].highRiskPercent) * 0.6),
                                                                "%"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 169,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 166,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 155,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 151,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between mb-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-sm font-semibold text-gray-300",
                                                    children: "TOP RISK COUNTRIES"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 177,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/regions",
                                                    className: "text-xs text-crop-green hover:underline",
                                                    children: "View all"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 178,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 176,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TopRiskTable$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            regions: topRiskCountries
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 180,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 175,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 91,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 90,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                        className: "ml-80 flex-1 relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-[calc(100vh-64px)]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(GlobalMap, {
                                    selectedCrop: selectedCrop,
                                    weekOffset: selectedWeek
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 188,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 187,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute bottom-6 left-6 right-6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TimelineScrubber$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    value: selectedWeek,
                                    onChange: setSelectedWeek,
                                    weeks: 12
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 196,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 195,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-4 right-4 flex flex-col gap-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/compare",
                                    className: "flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-sm hover:bg-white/20 transition",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 209,
                                            columnNumber: 15
                                        }, this),
                                        "Compare Years"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 205,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 204,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute bottom-24 right-6 glass-panel rounded-lg p-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-gray-400 mb-2",
                                        children: "Risk Level (ML Predicted)"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 216,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-1",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-8 h-3 rounded-sm bg-gradient-to-r from-crop-green via-stress-yellow to-stress-red"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 218,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 217,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between text-[10px] text-gray-500 mt-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Low"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 221,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "High"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 222,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 220,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 215,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 186,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 88,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__c822c58b._.js.map