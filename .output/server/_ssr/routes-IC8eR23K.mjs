import { a as __toESM } from "../_runtime.mjs";
import { a as performance_default, i as AnimatePresence, n as useMotionValue, r as motion, t as useSpring } from "../_libs/framer-motion.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-IC8eR23K.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Preloader() {
	const [pct, setPct] = (0, import_react.useState)(0);
	const [done, setDone] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		let raf = 0;
		const start = performance_default.now();
		const dur = 1200;
		const tick = (t) => {
			const p = Math.min(1, (t - start) / dur);
			setPct(Math.round(p * 100));
			if (p < 1) raf = requestAnimationFrame(tick);
			else setTimeout(() => setDone(true), 200);
		};
		raf = requestAnimationFrame(tick);
		return () => cancelAnimationFrame(raf);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: !done && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		initial: { clipPath: "inset(0 0 0 0)" },
		exit: { clipPath: "inset(0 0 100% 0)" },
		transition: {
			duration: .8,
			ease: [
				.85,
				0,
				.15,
				1
			]
		},
		className: "fixed inset-0 z-[1000] flex items-end justify-between px-8 pb-8",
		style: { background: "#111111" },
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "uppercase leading-none tracking-tighter",
				style: {
					fontFamily: "Impact, 'Haettenschweiler', 'Arial Narrow Bold', sans-serif",
					fontSize: "clamp(5rem, 18vw, 14rem)",
					lineHeight: .85,
					color: "#F5F5F5"
				},
				children: ["SAM", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					style: { color: "#FF3333" },
					children: "."
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col items-end gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-mono text-[10px] uppercase tracking-[0.22em] text-[#888888]",
					children: "initializing"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					style: {
						fontFamily: "Impact, 'Haettenschweiler', 'Arial Narrow Bold', sans-serif",
						fontSize: "3rem",
						lineHeight: 1,
						color: "#F5F5F5"
					},
					children: String(pct).padStart(3, "0")
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-x-8 bottom-6 h-px",
				style: { background: "rgba(245,245,245,0.1)" },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					className: "h-full",
					style: { background: "#FF3333" },
					animate: { width: `${pct}%` },
					transition: { ease: "linear" }
				})
			})
		]
	}) });
}
function CustomCursor() {
	const [enabled, setEnabled] = (0, import_react.useState)(false);
	const [hover, setHover] = (0, import_react.useState)(false);
	const x = useMotionValue(-100);
	const y = useMotionValue(-100);
	const sx = useSpring(x, {
		stiffness: 400,
		damping: 40,
		mass: .4
	});
	const sy = useSpring(y, {
		stiffness: 400,
		damping: 40,
		mass: .4
	});
	(0, import_react.useEffect)(() => {
		const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
		const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		if (!canHover || reduced) return;
		setEnabled(true);
		document.documentElement.style.cursor = "none";
		const move = (e) => {
			x.set(e.clientX);
			y.set(e.clientY);
		};
		const over = (e) => {
			const t = e.target;
			setHover(!!t?.closest("a,button,[data-cursor='hover'],input,textarea,select,label"));
		};
		window.addEventListener("pointermove", move);
		window.addEventListener("mouseover", over);
		return () => {
			window.removeEventListener("pointermove", move);
			window.removeEventListener("mouseover", over);
			document.documentElement.style.cursor = "";
		};
	}, [x, y]);
	if (!enabled) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		style: {
			x: sx,
			y: sy
		},
		className: "pointer-events-none fixed left-0 top-0 z-[999] -translate-x-1/2 -translate-y-1/2",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			animate: {
				scale: hover ? 2.2 : 1,
				opacity: hover ? .6 : 1
			},
			transition: {
				type: "spring",
				stiffness: 260,
				damping: 22
			},
			className: "h-8 w-8 rounded-full border border-primary/70 mix-blend-difference"
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		style: {
			x,
			y
		},
		className: "pointer-events-none fixed left-0 top-0 z-[999] h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary"
	})] });
}
function Logo({ className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `flex items-center gap-2 ${className}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: "/logo.png",
			alt: "SO Digital Marketing Agency Logo",
			className: "h-7 w-auto object-contain"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "font-display text-[19px] leading-none tracking-tight",
			children: [
				"Sam",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-primary",
					children: "."
				}),
				"Creattive"
			]
		})]
	});
}
function MagneticButton({ children, href, onClick, variant = "primary", className = "", strength = .35 }) {
	const ref = (0, import_react.useRef)(null);
	const x = useSpring(useMotionValue(0), {
		stiffness: 200,
		damping: 15,
		mass: .4
	});
	const y = useSpring(useMotionValue(0), {
		stiffness: 200,
		damping: 15,
		mass: .4
	});
	const handleMove = (e) => {
		const el = ref.current;
		if (!el) return;
		const r = el.getBoundingClientRect();
		x.set((e.clientX - (r.left + r.width / 2)) * strength);
		y.set((e.clientY - (r.top + r.height / 2)) * strength);
	};
	const reset = () => {
		x.set(0);
		y.set(0);
	};
	const base = "group relative inline-flex items-center gap-2 px-7 py-3.5 font-mono text-[11px] uppercase tracking-[0.22em] transition-all will-change-transform select-none";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(href ? motion.a : motion.button, {
		ref,
		href,
		onClick,
		onMouseMove: handleMove,
		onMouseLeave: reset,
		style: {
			x,
			y,
			...variant === "primary" ? {
				background: "#FF3333",
				color: "#F5F5F5",
				border: "1px solid #FF3333",
				borderRadius: 0
			} : {
				background: "transparent",
				color: "#F5F5F5",
				border: "1px solid rgba(245,245,245,0.2)",
				borderRadius: 0
			}
		},
		className: `${base} ${className}`,
		onMouseEnter: (e) => {
			if (variant === "primary") {
				e.currentTarget.style.background = "transparent";
				e.currentTarget.style.color = "#FF3333";
			} else {
				e.currentTarget.style.background = "rgba(245,245,245,0.05)";
				e.currentTarget.style.borderColor = "rgba(245,245,245,0.4)";
			}
		},
		onMouseLeaveCapture: (e) => {
			if (variant === "primary") {
				e.currentTarget.style.background = "#FF3333";
				e.currentTarget.style.color = "#F5F5F5";
			} else {
				e.currentTarget.style.background = "transparent";
				e.currentTarget.style.borderColor = "rgba(245,245,245,0.2)";
			}
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
			style: {
				x,
				y
			},
			className: "pointer-events-none flex items-center gap-2",
			children
		})
	});
}
/**
* FlipText — adapted from Vengence UI (vengenceui.com/components/flip-text)
*
* Uses CSS custom properties + the `flipChar` keyframe defined in styles.css.
* No framer-motion dependency.
*
* Two modes:
*  - loop=true  → continuous flip animation (default)
*  - hover=true → flip triggers on parent element hover (loop is ignored)
*/
function FlipText({ children, className = "", duration = 2.2, delay = 0, loop = true, hover = false, together = false, separator = " " }) {
	const words = (0, import_react.useMemo)(() => children.split(separator), [children, separator]);
	const totalChars = children.length;
	const getCharIndex = (wordIndex, charIndex) => {
		let idx = 0;
		for (let i = 0; i < wordIndex; i++) idx += words[i].length + (separator === " " ? 1 : separator.length);
		return idx + charIndex;
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: [
			"flip-text-wrapper inline-block leading-none",
			hover ? "flip-text-hover" : "",
			className
		].filter(Boolean).join(" "),
		style: { perspective: "1000px" },
		children: words.map((word, wi) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "word inline-block whitespace-nowrap",
			style: { transformStyle: "preserve-3d" },
			children: [word.split("").map((char, ci) => {
				const globalIdx = getCharIndex(wi, ci);
				let charDelay = delay;
				if (!together && !hover) {
					const norm = globalIdx / totalChars;
					charDelay = Math.sin(norm * (Math.PI / 2)) * (duration * .25) + delay;
				}
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "flip-char",
					"data-char": char,
					style: {
						"--flip-duration": hover ? `${duration}s` : `${duration}s`,
						"--flip-delay": `${charDelay}s`,
						"--flip-iteration": loop && !hover ? "infinite" : "1",
						transformStyle: "preserve-3d",
						display: "inline-block"
					},
					children: char
				}, ci);
			}), separator === " " && wi < words.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "inline-block",
				children: "\xA0"
			})]
		}, wi))
	});
}
var links = [
	{
		href: "#work",
		label: "Work"
	},
	{
		href: "#services",
		label: "Services"
	},
	{
		href: "#process",
		label: "Process"
	},
	{
		href: "#contact",
		label: "Contact"
	}
];
function FlipLink({ href, children, index }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		href,
		className: "group relative font-mono text-[11px] uppercase tracking-[0.22em] transition-colors",
		style: {
			color: "#888888",
			textDecoration: "none"
		},
		onMouseEnter: (e) => e.currentTarget.style.color = "#F5F5F5",
		onMouseLeave: (e) => e.currentTarget.style.color = "#888888",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "mr-1.5 font-mono text-[9px] opacity-0 group-hover:opacity-100 transition-opacity",
			style: { color: "#FF3333" },
			children: [String(index + 1).padStart(2, "0"), "."]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FlipText, {
			hover: true,
			loop: false,
			duration: .4,
			together: false,
			children
		})]
	});
}
function Nav() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 20);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: `fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "py-2" : "py-4"}`,
		style: {
			borderBottom: scrolled ? "1px solid rgba(245,245,245,0.08)" : "1px solid transparent",
			background: scrolled ? "rgba(17,17,17,0.95)" : "transparent",
			backdropFilter: scrolled ? "blur(12px)" : "none"
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#top",
					style: { textDecoration: "none" },
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-10 md:flex",
					children: links.map((l, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FlipLink, {
						href: l.href,
						index: i,
						children: l.label
					}, l.href))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "hidden md:block",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MagneticButton, {
						href: "#contact",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FlipText, {
							hover: true,
							loop: false,
							duration: .35,
							together: false,
							children: "Book a Call"
						})
					})
				})
			]
		})
	});
}
/**
* MobileNav — bottom-docked tab bar (Instagram-style)
* Only renders on mobile (hidden on md+).
* Tracks active section via IntersectionObserver.
* Safe-area aware for iPhone home indicator.
*/
var TABS = [
	{
		id: "top",
		href: "#top",
		label: "Home",
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			width: "20",
			height: "20",
			viewBox: "0 0 24 24",
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "1.8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M3 12L12 3l9 9" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M9 21V12h6v9" })]
		})
	},
	{
		id: "work",
		href: "#work",
		label: "Work",
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			width: "20",
			height: "20",
			viewBox: "0 0 24 24",
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "1.8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "3",
					y: "3",
					width: "7",
					height: "7"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "14",
					y: "3",
					width: "7",
					height: "7"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "3",
					y: "14",
					width: "7",
					height: "7"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "14",
					y: "14",
					width: "7",
					height: "7"
				})
			]
		})
	},
	{
		id: "services",
		href: "#services",
		label: "Packages",
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			width: "20",
			height: "20",
			viewBox: "0 0 24 24",
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "1.8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M20 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" })]
		})
	},
	{
		id: "process",
		href: "#process",
		label: "Calendar",
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			width: "20",
			height: "20",
			viewBox: "0 0 24 24",
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "1.8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "3",
				y: "4",
				width: "18",
				height: "18",
				rx: "2"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M16 2v4M8 2v4M3 10h18" })]
		})
	},
	{
		id: "contact",
		href: "#contact",
		label: "Book",
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			width: "20",
			height: "20",
			viewBox: "0 0 24 24",
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "1.8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "12",
				cy: "12",
				r: "10"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 8v4l3 3" })]
		})
	}
];
var SECTION_IDS = [
	"top",
	"work",
	"services",
	"process",
	"contact"
];
function MobileNav() {
	const [active, setActive] = (0, import_react.useState)("top");
	(0, import_react.useEffect)(() => {
		const observers = [];
		SECTION_IDS.forEach((id) => {
			const el = document.getElementById(id);
			if (!el) return;
			const obs = new IntersectionObserver(([entry]) => {
				if (entry.isIntersecting) setActive(id);
			}, {
				threshold: .3,
				rootMargin: "-10% 0px -60% 0px"
			});
			obs.observe(el);
			observers.push(obs);
		});
		return () => observers.forEach((o) => o.disconnect());
	}, []);
	const handleTap = (href) => {
		const id = href.replace("#", "");
		setActive(id);
		const el = document.getElementById(id);
		if (el) el.scrollIntoView({ behavior: "smooth" });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
		className: "md:hidden",
		"aria-label": "Mobile navigation",
		style: {
			position: "fixed",
			bottom: 0,
			left: 0,
			right: 0,
			zIndex: 60,
			background: "rgba(17,17,17,0.97)",
			borderTop: "1px solid rgba(245,245,245,0.1)",
			backdropFilter: "blur(16px) saturate(120%)",
			paddingBottom: "env(safe-area-inset-bottom, 0px)"
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			style: {
				display: "flex",
				alignItems: "stretch",
				height: 56
			},
			children: TABS.map((tab) => {
				const isActive = active === tab.id;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => handleTap(tab.href),
					"aria-label": tab.label,
					"aria-current": isActive ? "page" : void 0,
					style: {
						flex: 1,
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "center",
						gap: 3,
						background: "transparent",
						border: "none",
						cursor: "pointer",
						padding: "6px 0",
						position: "relative",
						WebkitTapHighlightColor: "transparent",
						transition: "opacity 0.15s"
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							style: {
								position: "absolute",
								top: 0,
								left: "50%",
								transform: "translateX(-50%)",
								width: isActive ? 20 : 0,
								height: 2,
								background: "#FF3333",
								transition: "width 0.25s cubic-bezier(0.4,0,0.2,1)"
							},
							"aria-hidden": true
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							style: {
								color: isActive ? "#FF3333" : "#555555",
								transition: "color 0.2s, transform 0.2s",
								transform: isActive ? "scale(1.1)" : "scale(1)",
								display: "flex"
							},
							children: tab.icon
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							style: {
								fontFamily: "JetBrains Mono, IBM Plex Mono, monospace",
								fontSize: 9,
								letterSpacing: "0.12em",
								textTransform: "uppercase",
								color: isActive ? "#FF3333" : "#444444",
								transition: "color 0.2s",
								lineHeight: 1
							},
							children: tab.label
						})
					]
				}, tab.id);
			})
		})
	});
}
function ViewfinderCorner({ pos }) {
	const base = {
		position: "absolute",
		width: 28,
		height: 28,
		borderColor: "#FF3333",
		borderStyle: "solid",
		zIndex: 20,
		pointerEvents: "none"
	};
	const positions = {
		tl: {
			top: 10,
			left: 10,
			borderWidth: "2px 0 0 2px"
		},
		tr: {
			top: 10,
			right: 10,
			borderWidth: "2px 2px 0 0"
		},
		bl: {
			bottom: 10,
			left: 10,
			borderWidth: "0 0 2px 2px"
		},
		br: {
			bottom: 10,
			right: 10,
			borderWidth: "0 2px 2px 0"
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		style: {
			...base,
			...positions[pos]
		},
		"aria-hidden": true
	});
}
function RecBadge() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "absolute top-4 left-4 z-20 flex items-center gap-1.5 pointer-events-none",
		"aria-hidden": true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "h-2 w-2 rounded-full bg-[#FF3333]",
			style: { animation: "blink 1.2s step-start infinite" }
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "font-mono text-[10px] uppercase tracking-[0.22em] text-[#FF3333]",
			children: "REC"
		})]
	});
}
function FocusPeakOverlay() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "absolute inset-0 z-10 pointer-events-none",
		"aria-hidden": true,
		style: { background: "linear-gradient(180deg, rgba(0,0,0,0.3) 0%, transparent 30%, transparent 70%, rgba(0,0,0,0.5) 100%)" }
	});
}
function ScanlineOverlay() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "absolute inset-0 z-10 pointer-events-none overflow-hidden",
		"aria-hidden": true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: {
			position: "absolute",
			top: 0,
			left: 0,
			right: 0,
			height: "120px",
			background: "linear-gradient(180deg, transparent 0%, rgba(255,51,51,0.04) 50%, transparent 100%)",
			animation: "scanline 4s linear infinite"
		} }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: {
			position: "absolute",
			inset: 0,
			backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.08) 2px, rgba(0,0,0,0.08) 4px)",
			pointerEvents: "none"
		} })]
	});
}
function ViewfinderMeta() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute bottom-4 left-4 z-20 pointer-events-none",
			"aria-hidden": true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "font-mono text-[9px] uppercase tracking-[0.18em] text-[#F5F5F5]/70 leading-relaxed",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: "4K · 24FPS · S-LOG3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-[#D4FF00]",
					children: "AF ◉ LOCKED"
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute bottom-4 right-4 z-20 pointer-events-none text-right",
			"aria-hidden": true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "font-mono text-[9px] uppercase tracking-[0.18em] text-[#F5F5F5]/70 leading-relaxed",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: "ISO 800" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: "1/50s F2.8" })]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute top-4 right-4 z-20 pointer-events-none",
			"aria-hidden": true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "font-mono text-[9px] tracking-[0.12em] text-[#F5F5F5]/50",
				children: "00:00:04:12"
			})
		})
	] });
}
function IGReelViewfinder() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		initial: {
			opacity: 0,
			scale: .95
		},
		animate: {
			opacity: 1,
			scale: 1
		},
		transition: {
			duration: .9,
			ease: [
				.22,
				1,
				.36,
				1
			],
			delay: .3
		},
		className: "relative w-full mx-auto",
		style: { maxWidth: "min(320px, 85vw)" },
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative overflow-hidden",
			style: {
				aspectRatio: "9/16",
				background: "#0a0a0a",
				border: "1px solid rgba(255,51,51,0.25)",
				boxShadow: "0 0 0 1px rgba(255,51,51,0.08), 0 24px 80px rgba(0,0,0,0.8), inset 0 0 60px rgba(0,0,0,0.4)"
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
					src: "https://www.instagram.com/reel/Da5N8NwyPGe/embed/",
					title: "Sam Creattive — agency explainer reel",
					allow: "autoplay; encrypted-media",
					allowFullScreen: true,
					loading: "lazy",
					style: {
						position: "absolute",
						inset: 0,
						width: "100%",
						height: "100%",
						border: "none",
						background: "#111",
						transform: "scale(1.08)",
						transformOrigin: "center center"
					}
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FocusPeakOverlay, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScanlineOverlay, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RecBadge, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ViewfinderMeta, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ViewfinderCorner, { pos: "tl" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ViewfinderCorner, { pos: "tr" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ViewfinderCorner, { pos: "bl" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ViewfinderCorner, { pos: "br" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0 z-20 flex items-center justify-center pointer-events-none",
					"aria-hidden": true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						style: {
							position: "relative",
							width: 24,
							height: 24
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: {
								position: "absolute",
								top: "50%",
								left: 0,
								right: 0,
								height: 1,
								background: "rgba(255,51,51,0.45)",
								transform: "translateY(-50%)"
							} }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: {
								position: "absolute",
								left: "50%",
								top: 0,
								bottom: 0,
								width: 1,
								background: "rgba(255,51,51,0.45)",
								transform: "translateX(-50%)"
							} }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: {
								position: "absolute",
								top: "50%",
								left: "50%",
								width: 4,
								height: 4,
								background: "#FF3333",
								borderRadius: "50%",
								transform: "translate(-50%,-50%)"
							} })
						]
					})
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-3 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.22em] text-[#888888]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "@sam.creattive" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-[#FF3333]",
				children: "▶ AUTOPLAY"
			})]
		})]
	});
}
var STATS = [
	{
		k: "30",
		v: "Reels/mo"
	},
	{
		k: "48H",
		v: "Turnaround"
	},
	{
		k: "4K",
		v: "Every shoot"
	}
];
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "top",
		className: "relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24",
		style: { background: "#111111" },
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute inset-0",
				"aria-hidden": true,
				style: { background: "radial-gradient(ellipse 70% 50% at 70% 50%, rgba(255,51,51,0.06) 0%, transparent 70%)" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-0 inset-x-0 h-px bg-[rgba(245,245,245,0.06)]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 8
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .5,
							delay: .05
						},
						className: "mb-8 inline-flex items-center gap-2 border border-[rgba(255,51,51,0.3)] px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-[#888888]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "h-1.5 w-1.5 rounded-full bg-[#FF3333]",
							style: { animation: "blink 1.2s step-start infinite" }
						}), "NOW BOOKING · 15K–20K INR / MONTH"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h1, {
						initial: {
							opacity: 0,
							y: 20
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .6,
							delay: .1
						},
						style: {
							fontFamily: "Impact, 'Haettenschweiler', 'Arial Narrow Bold', sans-serif",
							fontSize: "clamp(4rem, 10vw, 8.5rem)",
							lineHeight: .9,
							letterSpacing: "-0.02em",
							color: "#F5F5F5",
							textTransform: "uppercase"
						},
						children: [
							"WE DON'T",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								style: {
									color: "#FF3333",
									WebkitTextStroke: "1px #FF3333"
								},
								children: "GUESS."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"WE SHOOT."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.p, {
						initial: {
							opacity: 0,
							y: 12
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .6,
							delay: .35
						},
						className: "mt-8 max-w-lg font-mono text-[13px] leading-[1.8] text-[#888888]",
						children: [
							"30 Reels. 0 Empty Days.",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[#D4FF00]",
								children: "48-Hour Turnaround."
							}),
							" ",
							"We are a ground-and-pound short-form studio building your brand's visual identity, one 4K frame at a time."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						initial: {
							opacity: 0,
							y: 12
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .6,
							delay: .55
						},
						className: "mt-10",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MagneticButton, {
							href: "#services",
							children: "View Our Packages →"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						initial: { opacity: 0 },
						animate: { opacity: 1 },
						transition: {
							duration: .6,
							delay: .75
						},
						className: "mt-14 grid grid-cols-3 gap-6 border-t border-[rgba(245,245,245,0.08)] pt-6",
						children: STATS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							style: {
								fontFamily: "Impact, 'Haettenschweiler', 'Arial Narrow Bold', sans-serif",
								fontSize: "clamp(2rem, 4vw, 3rem)",
								lineHeight: 1,
								color: "#FF3333"
							},
							children: s.k
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-[#888888]",
							children: s.v
						})] }, s.k))
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex justify-center lg:justify-end",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IGReelViewfinder, {})
				})]
			})
		]
	});
}
var items = [
	"PREMIERE PRO",
	"DAVINCI RESOLVE",
	"AFTER EFFECTS",
	"META ADS",
	"TIKTOK ADS",
	"YOUTUBE SHORTS",
	"SORA AI",
	"CINEMA 4D",
	"4K SHOOTS",
	"DAILY POSTS",
	"48H TURNAROUND",
	"30 REELS/MONTH"
];
function Marquee() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		"aria-hidden": true,
		className: "relative overflow-hidden py-4",
		style: {
			borderTop: "1px solid rgba(255,51,51,0.25)",
			borderBottom: "1px solid rgba(255,51,51,0.25)",
			background: "rgba(26,26,26,0.6)"
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative overflow-hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex w-max gap-14 pr-14 font-mono text-[11px] uppercase tracking-[0.28em]",
					style: { animation: "marquee 30s linear infinite" },
					children: [...items, ...items].map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "flex items-center gap-14 whitespace-nowrap",
						style: { color: i % 3 === 0 ? "#FF3333" : "#888888" },
						children: [t, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							"aria-hidden": true,
							style: {
								display: "inline-block",
								width: 4,
								height: 4,
								background: "#FF3333",
								borderRadius: "50%",
								opacity: .6
							}
						})]
					}, i))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "pointer-events-none absolute inset-y-0 left-0 w-16",
					style: { background: "linear-gradient(to right, #111111, transparent)" }
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "pointer-events-none absolute inset-y-0 right-0 w-16",
					style: { background: "linear-gradient(to left, #111111, transparent)" }
				})
			]
		})
	});
}
function SectionLabel({ index, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.28em]",
		style: { color: "#888888" },
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				style: { color: "#FF3333" },
				children: ["//", index ? ` ${index}` : ""]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				"aria-hidden": true,
				className: "h-px flex-1",
				style: { background: "linear-gradient(to right, rgba(255,51,51,0.3), transparent)" }
			})
		]
	});
}
function DeliverableRow({ label, value, accent = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-start justify-between gap-4 border-b py-3",
		style: { borderColor: "rgba(245,245,245,0.07)" },
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "font-mono text-[11px] uppercase tracking-[0.16em] shrink-0",
			style: { color: "#888888" },
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "font-mono text-[12px] text-right leading-relaxed",
			style: { color: accent ? "#D4FF00" : "#F5F5F5" },
			children: value
		})]
	});
}
function PackageCard({ tier, name, price, tagline, deliverables, highlight, badge }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		whileHover: { y: -6 },
		transition: {
			type: "spring",
			stiffness: 280,
			damping: 22
		},
		className: "relative flex flex-col",
		style: {
			background: highlight ? "rgba(255,51,51,0.06)" : "#1a1a1a",
			border: highlight ? "1px solid rgba(255,51,51,0.45)" : "1px solid rgba(245,245,245,0.08)"
		},
		children: [
			badge && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute right-0 top-0 font-mono text-[9px] uppercase tracking-[0.22em] px-3 py-1",
				style: {
					background: "#D4FF00",
					color: "#111111"
				},
				children: badge
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "p-7 pb-0",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mb-5 font-mono text-[10px] uppercase tracking-[0.26em]",
						style: { color: "#888888" },
						children: tier
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "uppercase leading-[1] mb-2",
						style: {
							fontFamily: "Impact, 'Haettenschweiler', 'Arial Narrow Bold', sans-serif",
							fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
							letterSpacing: "-0.01em",
							color: "#F5F5F5"
						},
						children: name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mb-1",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "leading-none",
							style: {
								fontFamily: "Impact, 'Haettenschweiler', 'Arial Narrow Bold', sans-serif",
								fontSize: "clamp(3rem, 5vw, 4rem)",
								letterSpacing: "-0.02em",
								color: highlight ? "#FF3333" : "#F5F5F5"
							},
							children: price
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mb-6 font-mono text-[10px] uppercase tracking-[0.18em]",
						style: { color: "#888888" },
						children: "per month · 30-day rolling · no lock-in"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-6 font-mono text-[12px] leading-[1.8]",
						style: { color: "#888888" },
						children: tagline
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "px-7 pb-7",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-3 font-mono text-[9px] uppercase tracking-[0.28em]",
					style: { color: "#FF3333" },
					children: "// What you actually get"
				}), deliverables.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DeliverableRow, {
					label: d.label,
					value: d.value,
					accent: d.accent
				}, d.label))]
			})
		]
	});
}
var PACKAGE_15K = {
	tier: "01 · The Growth Engine",
	name: "15K GROWTH ENGINE",
	price: "₹15,000",
	tagline: "Built for retail shops, F&B brands, and service businesses ready to build a daily social presence. We come to your site every 4th day and capture everything worth showing.",
	highlight: false,
	deliverables: [
		{
			label: "Monthly Reels",
			value: "30 Reels — Edited, Captioned, Posted",
			accent: true
		},
		{
			label: "Static Posts",
			value: "7–8 Static / Carousel Posts"
		},
		{
			label: "Daily Stories",
			value: "1–2 Stories per day"
		},
		{
			label: "Shoot Cadence",
			value: "On-site 4K shoot every 4th day",
			accent: true
		},
		{
			label: "Platforms",
			value: "Instagram + YouTube Shorts"
		},
		{
			label: "Turnaround",
			value: "48-Hour rough-cut delivery",
			accent: true
		},
		{
			label: "Strategy",
			value: "Monthly content calendar included"
		},
		{
			label: "Reporting",
			value: "Weekly reach + engagement report"
		}
	]
};
var PACKAGE_20K = {
	tier: "02 · The Premium Build",
	name: "20K PREMIUM BUILD",
	price: "₹20,000",
	tagline: "For brands where aesthetics are everything — fashion labels, F&B, real estate. Lower frequency, maximum production value. Every frame is art-directed.",
	highlight: true,
	badge: "FULL PRODUCTION",
	deliverables: [
		{
			label: "Catalogue Shoots",
			value: "Full product + lifestyle catalogues",
			accent: true
		},
		{
			label: "Model Sourcing",
			value: "We handle casting + coordination"
		},
		{
			label: "Long-form Content",
			value: "Brand films, explainers, reels series",
			accent: true
		},
		{
			label: "Static Posts",
			value: "12–15 art-directed statics"
		},
		{
			label: "Shoot Cadence",
			value: "Bi-weekly concept shoots",
			accent: true
		},
		{
			label: "Production Value",
			value: "Styled sets, lighting design, props"
		},
		{
			label: "Turnaround",
			value: "48H rough-cut + revision cycle",
			accent: true
		},
		{
			label: "Reporting",
			value: "Bi-weekly performance + creative brief"
		}
	]
};
function ServicesBento() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "services",
		className: "relative py-16 sm:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, { children: "Services / Packages" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-col justify-between gap-6 md:flex-row md:items-end",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "uppercase",
						style: {
							fontFamily: "Impact, 'Haettenschweiler', 'Arial Narrow Bold', sans-serif",
							fontSize: "clamp(3.5rem, 9vw, 7rem)",
							lineHeight: .88,
							letterSpacing: "-0.02em",
							color: "#F5F5F5"
						},
						children: [
							"THE",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								style: { color: "#FF3333" },
								children: "PLAYBOOK."
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "max-w-xs font-mono text-[12px] leading-[1.8]",
						style: { color: "#888888" },
						children: "Two offers. Two budgets. Zero vague promises. Pick your play — we deliver the exact line items listed below. Every month. On time."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-12 grid grid-cols-1 gap-px md:grid-cols-2",
					style: { background: "rgba(245,245,245,0.06)" },
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PackageCard, { ...PACKAGE_15K }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PackageCard, { ...PACKAGE_20K })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 border-l-2 pl-5 py-3",
					style: { borderColor: "#FF3333" },
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-mono text-[12px] leading-[1.7]",
						style: { color: "#888888" },
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								style: { color: "#D4FF00" },
								children: ">"
							}),
							" ",
							"Custom scopes available upon briefing. If your brand needs something that doesn't fit either box, tell us. We'll build the brief together."
						]
					})
				})
			]
		})
	});
}
var CALENDAR = [
	{
		day: 1,
		type: "REEL+SHOOT",
		label: "Shop Open / B-roll"
	},
	{
		day: 2,
		type: "REEL",
		label: "Product Close-up"
	},
	{
		day: 3,
		type: "STATIC",
		label: "Offer Post"
	},
	{
		day: 4,
		type: "REEL+SHOOT",
		label: "Process / Making-of"
	},
	{
		day: 5,
		type: "TRENDING",
		label: "Hook Reel"
	},
	{
		day: 6,
		type: "STATIC",
		label: "Testimonial Card"
	},
	{
		day: 7,
		type: "REEL",
		label: "FAQ Breakdown"
	},
	{
		day: 8,
		type: "REEL+SHOOT",
		label: "Raw Aesthetic"
	},
	{
		day: 9,
		type: "STATIC",
		label: "Product Feature"
	},
	{
		day: 10,
		type: "TRENDING",
		label: "Trend Riff"
	},
	{
		day: 11,
		type: "REEL",
		label: "Brand Story Cut"
	},
	{
		day: 12,
		type: "REEL+SHOOT",
		label: "Team / Behind Scenes"
	},
	{
		day: 13,
		type: "STATIC",
		label: "Before / After"
	},
	{
		day: 14,
		type: "COLLAB",
		label: "Collab / Stitch"
	},
	{
		day: 15,
		type: "REEL",
		label: "Top 3 List"
	},
	{
		day: 16,
		type: "REEL+SHOOT",
		label: "New Arrival Reveal"
	},
	{
		day: 17,
		type: "STATIC",
		label: "Quote / Value Card"
	},
	{
		day: 18,
		type: "TRENDING",
		label: "Audio Trend Reel"
	},
	{
		day: 19,
		type: "REEL",
		label: "Informative Breakdown"
	},
	{
		day: 20,
		type: "REEL+SHOOT",
		label: "Shop Atmosphere"
	},
	{
		day: 21,
		type: "STATIC",
		label: "Milestone / Gratitude"
	},
	{
		day: 22,
		type: "REEL",
		label: "Customer Reaction"
	},
	{
		day: 23,
		type: "COLLAB",
		label: "UGC Repost / Stitch"
	},
	{
		day: 24,
		type: "REEL+SHOOT",
		label: "Detail / Texture B-roll"
	},
	{
		day: 25,
		type: "TRENDING",
		label: "Challenge Reel"
	},
	{
		day: 26,
		type: "STATIC",
		label: "End-of-Month Offer"
	},
	{
		day: 27,
		type: "REEL",
		label: "Tutorial / How-to"
	},
	{
		day: 28,
		type: "REEL+SHOOT",
		label: "Month Recap Reel"
	},
	{
		day: 29,
		type: "STATIC",
		label: "Next Month Teaser"
	},
	{
		day: 30,
		type: "REEL",
		label: "Win Highlight / Analytics"
	}
];
var TYPE_STYLES = {
	"REEL+SHOOT": {
		bg: "rgba(255,51,51,0.18)",
		color: "#FF3333",
		label: "SHOOT + REEL"
	},
	"REEL": {
		bg: "rgba(245,245,245,0.08)",
		color: "#F5F5F5",
		label: "REEL"
	},
	"STATIC": {
		bg: "rgba(212,255,0,0.08)",
		color: "#D4FF00",
		label: "STATIC"
	},
	"STORY": {
		bg: "rgba(245,245,245,0.05)",
		color: "#888888",
		label: "STORY"
	},
	"TRENDING": {
		bg: "rgba(255,51,51,0.10)",
		color: "#FF8888",
		label: "TRENDING"
	},
	"COLLAB": {
		bg: "rgba(212,255,0,0.05)",
		color: "#aad400",
		label: "COLLAB"
	},
	"REST": {
		bg: "transparent",
		color: "#444444",
		label: "REST"
	}
};
function CalCell({ day }) {
	const style = TYPE_STYLES[day.type];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative flex flex-col justify-between p-2 transition-all duration-150 hover:brightness-125",
		style: {
			background: style.bg,
			border: "1px solid rgba(245,245,245,0.05)",
			minHeight: 70,
			cursor: "default"
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "font-mono text-[9px] leading-none",
			style: { color: day.type === "REEL+SHOOT" ? "#FF3333" : "#555555" },
			children: [String(day.day).padStart(2, "0"), day.type === "REEL+SHOOT" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "ml-1 font-mono text-[8px] uppercase",
				style: { color: "#FF3333" },
				children: "● SHOOT"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "font-mono text-[8px] uppercase tracking-[0.12em] mb-0.5",
			style: { color: style.color },
			children: style.label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "font-mono text-[8px] leading-tight",
			style: { color: "#888888" },
			children: day.label
		})] })]
	});
}
function LegendItem({ type }) {
	const s = TYPE_STYLES[type];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: {
			width: 10,
			height: 10,
			background: s.bg,
			border: `1px solid ${s.color}`,
			flexShrink: 0
		} }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "font-mono text-[9px] uppercase tracking-[0.18em]",
			style: { color: s.color },
			children: s.label
		})]
	});
}
function Process() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "process",
		className: "relative py-16 sm:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, { children: "Process / Content Calendar" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 flex flex-col justify-between gap-6 md:flex-row md:items-end",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "uppercase",
						style: {
							fontFamily: "Impact, 'Haettenschweiler', 'Arial Narrow Bold', sans-serif",
							fontSize: "clamp(3.5rem, 9vw, 7rem)",
							lineHeight: .88,
							letterSpacing: "-0.02em",
							color: "#F5F5F5"
						},
						children: [
							"THE 30-DAY",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								style: { color: "#FF3333" },
								children: "ASSAULT."
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-8 max-w-3xl font-mono text-[13px] leading-[1.9]",
					style: { color: "#888888" },
					children: [
						"We don't just shoot and ghost. We build a",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							style: { color: "#F5F5F5" },
							children: "living content calendar"
						}),
						" mixing informative breakdowns, product B-rolls, raw shop aesthetics, and trending patterns. Every reel has a purpose — a hook type, a content category, a goal. We test, we analyze the reach, and we",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							style: { color: "#D4FF00" },
							children: "double down on what wins."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-wrap gap-4 border-b pb-8",
					style: { borderColor: "rgba(245,245,245,0.08)" },
					children: [[
						"REEL+SHOOT",
						"REEL",
						"STATIC",
						"TRENDING",
						"COLLAB"
					].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LegendItem, { type: t }, t)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "ml-auto font-mono text-[9px] uppercase tracking-[0.18em]",
						style: { color: "#888888" },
						children: "● = On-site 4K shoot day"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0 hide-scrollbar",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						style: {
							display: "grid",
							gridTemplateColumns: "repeat(6, minmax(100px, 1fr))",
							gap: "2px",
							minWidth: 620
						},
						children: CALENDAR.map((day) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalCell, { day }, day.day))
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 grid grid-cols-1 gap-px sm:grid-cols-3",
					style: { background: "rgba(245,245,245,0.06)" },
					children: [
						{
							k: "7–8",
							v: "Shoot days / month",
							accent: true
						},
						{
							k: "30",
							v: "Posts delivered",
							accent: false
						},
						{
							k: "100%",
							v: "Calendar pre-approved by you",
							accent: false
						}
					].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-5 p-6",
						style: { background: "#111111" },
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							style: {
								fontFamily: "Impact, 'Haettenschweiler', 'Arial Narrow Bold', sans-serif",
								fontSize: "2.5rem",
								lineHeight: 1,
								color: s.accent ? "#FF3333" : "#F5F5F5"
							},
							children: s.k
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-[11px] uppercase tracking-[0.18em]",
							style: { color: "#888888" },
							children: s.v
						})]
					}, s.k))
				})
			]
		})
	});
}
/**
* MagneticCarousel
*
* Horizontally draggable carousel that:
* - Snaps strictly to the center of the viewport on drag-end
* - Uses framer-motion drag + spring physics for magnetic snap feel
* - Expands as a fullscreen overlay when triggered
* - Each card can contain an iframe embed (IG/YouTube Short)
*/
var CARD_WIDTH = 280;
var CARD_GAP = 16;
var CARD_STRIDE = 296;
function clamp(value, min, max) {
	return Math.min(Math.max(value, min), max);
}
function CarouselCard({ item, isCenter }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		animate: {
			scale: isCenter ? 1 : .88,
			opacity: isCenter ? 1 : .55
		},
		transition: {
			type: "spring",
			stiffness: 260,
			damping: 28
		},
		style: {
			width: CARD_WIDTH,
			flexShrink: 0,
			aspectRatio: "9/16",
			position: "relative",
			background: "#0a0a0a",
			border: isCenter ? "1px solid rgba(255,51,51,0.5)" : "1px solid rgba(245,245,245,0.08)",
			overflow: "hidden"
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
			src: item.embedUrl,
			title: item.title,
			allow: "autoplay; encrypted-media",
			allowFullScreen: true,
			loading: "lazy",
			style: {
				position: "absolute",
				inset: 0,
				width: "100%",
				height: "100%",
				border: "none",
				background: "#111"
			}
		}), isCenter && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: [
			{
				top: 8,
				left: 8,
				border: "2px 0 0 2px"
			},
			{
				top: 8,
				right: 8,
				border: "2px 2px 0 0"
			},
			{
				bottom: 8,
				left: 8,
				border: "0 0 2px 2px"
			},
			{
				bottom: 8,
				right: 8,
				border: "0 2px 2px 0"
			}
		].map((corner, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			"aria-hidden": true,
			style: {
				position: "absolute",
				width: 18,
				height: 18,
				borderColor: "#FF3333",
				borderStyle: "solid",
				borderWidth: corner.border,
				zIndex: 10,
				pointerEvents: "none",
				...Object.fromEntries(Object.entries(corner).filter(([k]) => [
					"top",
					"left",
					"right",
					"bottom"
				].includes(k)))
			}
		}, i)) })]
	});
}
function MagneticCarousel({ items, onClose, initialIndex = 0 }) {
	const [activeIndex, setActiveIndex] = (0, import_react.useState)(initialIndex);
	const containerRef = (0, import_react.useRef)(null);
	const x = useMotionValue(0);
	const springX = useSpring(x, {
		stiffness: 300,
		damping: 35,
		mass: .8
	});
	const getOffsetForIndex = (0, import_react.useCallback)((index) => {
		const vw = window.innerWidth;
		return -(index * CARD_STRIDE) + vw / 2 - CARD_WIDTH / 2;
	}, []);
	(0, import_react.useEffect)(() => {
		x.set(getOffsetForIndex(initialIndex));
	}, [
		initialIndex,
		x,
		getOffsetForIndex
	]);
	const snapToIndex = (0, import_react.useCallback)((index) => {
		const clamped = clamp(index, 0, items.length - 1);
		setActiveIndex(clamped);
		x.set(getOffsetForIndex(clamped));
	}, [
		items.length,
		x,
		getOffsetForIndex
	]);
	const handleDragEnd = (0, import_react.useCallback)(() => {
		const currentX = x.get();
		const rawIndex = (window.innerWidth / 2 - CARD_WIDTH / 2 - currentX) / CARD_STRIDE;
		snapToIndex(Math.round(rawIndex));
	}, [x, snapToIndex]);
	(0, import_react.useEffect)(() => {
		const onKey = (e) => {
			if (e.key === "ArrowRight") snapToIndex(activeIndex + 1);
			if (e.key === "ArrowLeft") snapToIndex(activeIndex - 1);
			if (e.key === "Escape") onClose();
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [
		activeIndex,
		snapToIndex,
		onClose
	]);
	const totalWidth = items.length * CARD_STRIDE;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: { opacity: 0 },
		transition: { duration: .35 },
		style: {
			position: "fixed",
			inset: 0,
			zIndex: 90,
			background: "rgba(17,17,17,0.97)",
			display: "flex",
			flexDirection: "column",
			alignItems: "center",
			justifyContent: "center",
			backdropFilter: "blur(8px)"
		},
		onClick: (e) => {
			if (e.target === e.currentTarget) onClose();
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				style: {
					position: "absolute",
					top: 0,
					left: 0,
					right: 0,
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
					padding: "20px 24px",
					borderBottom: "1px solid rgba(245,245,245,0.08)"
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					style: {
						fontFamily: "JetBrains Mono, IBM Plex Mono, monospace",
						fontSize: 11,
						letterSpacing: "0.22em",
						textTransform: "uppercase",
						color: "#888888"
					},
					children: [
						activeIndex + 1,
						" / ",
						items.length,
						" —",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							style: { color: "#FF3333" },
							children: "DRAG TO EXPLORE"
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: onClose,
					"aria-label": "Close carousel",
					style: {
						background: "transparent",
						border: "1px solid rgba(245,245,245,0.15)",
						color: "#F5F5F5",
						padding: "8px 14px",
						fontFamily: "JetBrains Mono, monospace",
						fontSize: 10,
						letterSpacing: "0.2em",
						textTransform: "uppercase",
						cursor: "pointer",
						display: "flex",
						alignItems: "center",
						gap: 8
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
						width: "12",
						height: "12",
						viewBox: "0 0 24 24",
						fill: "none",
						stroke: "currentColor",
						strokeWidth: "2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M6 6l12 12M6 18L18 6" })
					}), "Close"]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				ref: containerRef,
				style: {
					width: "100vw",
					overflow: "hidden",
					cursor: "grab",
					userSelect: "none"
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					drag: "x",
					dragElastic: .08,
					dragConstraints: {
						left: getOffsetForIndex(items.length - 1) - 40,
						right: getOffsetForIndex(0) + 40
					},
					onDragEnd: handleDragEnd,
					style: {
						x: springX,
						display: "flex",
						gap: CARD_GAP,
						width: totalWidth,
						alignItems: "center",
						height: "72vh",
						paddingLeft: 0
					},
					whileDrag: { cursor: "grabbing" },
					children: items.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CarouselCard, {
						item,
						isCenter: i === activeIndex
					}, item.id))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				style: {
					position: "absolute",
					bottom: 32,
					display: "flex",
					alignItems: "center",
					gap: 16
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => snapToIndex(activeIndex - 1),
						disabled: activeIndex === 0,
						"aria-label": "Previous",
						style: {
							background: "transparent",
							border: "1px solid rgba(245,245,245,0.15)",
							color: activeIndex === 0 ? "#444" : "#F5F5F5",
							width: 44,
							height: 44,
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							cursor: activeIndex === 0 ? "not-allowed" : "pointer",
							transition: "border-color 0.2s"
						},
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
							width: "16",
							height: "16",
							viewBox: "0 0 24 24",
							fill: "none",
							stroke: "currentColor",
							strokeWidth: "2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M15 18l-6-6 6-6" })
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						style: {
							display: "flex",
							gap: 6
						},
						children: items.map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => snapToIndex(i),
							"aria-label": `Go to ${i + 1}`,
							style: {
								width: i === activeIndex ? 24 : 6,
								height: 6,
								background: i === activeIndex ? "#FF3333" : "rgba(245,245,245,0.2)",
								border: "none",
								cursor: "pointer",
								transition: "width 0.3s, background 0.3s",
								padding: 0
							}
						}, i))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => snapToIndex(activeIndex + 1),
						disabled: activeIndex === items.length - 1,
						"aria-label": "Next",
						style: {
							background: "transparent",
							border: "1px solid rgba(245,245,245,0.15)",
							color: activeIndex === items.length - 1 ? "#444" : "#F5F5F5",
							width: 44,
							height: 44,
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							cursor: activeIndex === items.length - 1 ? "not-allowed" : "pointer"
						},
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
							width: "16",
							height: "16",
							viewBox: "0 0 24 24",
							fill: "none",
							stroke: "currentColor",
							strokeWidth: "2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M9 18l6-6-6-6" })
						})
					})
				]
			})
		]
	}, "carousel-overlay") });
}
var GENRES = [
	{
		id: "retail",
		label: "[RETAIL]",
		description: "Shop aesthetics, new arrivals, B-roll, product reveals.",
		count: "6 reels",
		items: [
			{
				id: "retail-1",
				title: "Retail Reel 1",
				embedUrl: "https://www.instagram.com/reel/Da5N8NwyPGe/embed/"
			},
			{
				id: "retail-2",
				title: "Retail Reel 2",
				embedUrl: "https://www.instagram.com/reel/Da5N8NwyPGe/embed/"
			},
			{
				id: "retail-3",
				title: "Retail Reel 3",
				embedUrl: "https://www.instagram.com/reel/Da5N8NwyPGe/embed/"
			},
			{
				id: "retail-4",
				title: "Retail Reel 4",
				embedUrl: "https://www.instagram.com/reel/Da5N8NwyPGe/embed/"
			},
			{
				id: "retail-5",
				title: "Retail Reel 5",
				embedUrl: "https://www.instagram.com/reel/Da5N8NwyPGe/embed/"
			},
			{
				id: "retail-6",
				title: "Retail Reel 6",
				embedUrl: "https://www.instagram.com/reel/Da5N8NwyPGe/embed/"
			}
		]
	},
	{
		id: "fnb",
		label: "[F&B]",
		description: "Food styling, kitchen process, sensory close-ups.",
		count: "5 reels",
		items: [
			{
				id: "fnb-1",
				title: "F&B Reel 1",
				embedUrl: "https://www.instagram.com/reel/Da5N8NwyPGe/embed/"
			},
			{
				id: "fnb-2",
				title: "F&B Reel 2",
				embedUrl: "https://www.instagram.com/reel/Da5N8NwyPGe/embed/"
			},
			{
				id: "fnb-3",
				title: "F&B Reel 3",
				embedUrl: "https://www.instagram.com/reel/Da5N8NwyPGe/embed/"
			},
			{
				id: "fnb-4",
				title: "F&B Reel 4",
				embedUrl: "https://www.instagram.com/reel/Da5N8NwyPGe/embed/"
			},
			{
				id: "fnb-5",
				title: "F&B Reel 5",
				embedUrl: "https://www.instagram.com/reel/Da5N8NwyPGe/embed/"
			}
		]
	},
	{
		id: "fashion",
		label: "[FASHION]",
		description: "Model shoots, catalogue stills, lookbooks, transitions.",
		count: "6 reels",
		items: [
			{
				id: "fashion-1",
				title: "Fashion Reel 1",
				embedUrl: "https://www.instagram.com/reel/Da5N8NwyPGe/embed/"
			},
			{
				id: "fashion-2",
				title: "Fashion Reel 2",
				embedUrl: "https://www.instagram.com/reel/Da5N8NwyPGe/embed/"
			},
			{
				id: "fashion-3",
				title: "Fashion Reel 3",
				embedUrl: "https://www.instagram.com/reel/Da5N8NwyPGe/embed/"
			},
			{
				id: "fashion-4",
				title: "Fashion Reel 4",
				embedUrl: "https://www.instagram.com/reel/Da5N8NwyPGe/embed/"
			},
			{
				id: "fashion-5",
				title: "Fashion Reel 5",
				embedUrl: "https://www.instagram.com/reel/Da5N8NwyPGe/embed/"
			},
			{
				id: "fashion-6",
				title: "Fashion Reel 6",
				embedUrl: "https://www.instagram.com/reel/Da5N8NwyPGe/embed/"
			}
		]
	},
	{
		id: "realestate",
		label: "[REAL ESTATE]",
		description: "Property walkthroughs, architectural B-roll, drone cuts.",
		count: "5 reels",
		items: [
			{
				id: "re-1",
				title: "Real Estate Reel 1",
				embedUrl: "https://www.instagram.com/reel/Da5N8NwyPGe/embed/"
			},
			{
				id: "re-2",
				title: "Real Estate Reel 2",
				embedUrl: "https://www.instagram.com/reel/Da5N8NwyPGe/embed/"
			},
			{
				id: "re-3",
				title: "Real Estate Reel 3",
				embedUrl: "https://www.instagram.com/reel/Da5N8NwyPGe/embed/"
			},
			{
				id: "re-4",
				title: "Real Estate Reel 4",
				embedUrl: "https://www.instagram.com/reel/Da5N8NwyPGe/embed/"
			},
			{
				id: "re-5",
				title: "Real Estate Reel 5",
				embedUrl: "https://www.instagram.com/reel/Da5N8NwyPGe/embed/"
			}
		]
	}
];
function GenreBlock({ genre, onOpen }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		className: "group relative overflow-hidden",
		style: {
			background: "#1a1a1a",
			border: "1px solid rgba(245,245,245,0.08)",
			cursor: "pointer"
		},
		whileHover: { borderColor: "rgba(255,51,51,0.4)" },
		transition: { duration: .2 },
		onClick: () => onOpen(genre),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "p-7 pb-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "uppercase",
					style: {
						fontFamily: "Impact, 'Haettenschweiler', 'Arial Narrow Bold', sans-serif",
						fontSize: "clamp(2rem, 5vw, 3.5rem)",
						lineHeight: .9,
						letterSpacing: "-0.01em",
						color: "#F5F5F5",
						transition: "color 0.2s"
					},
					children: genre.label
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 font-mono text-[11px] leading-[1.7]",
					style: { color: "#888888" },
					children: genre.description
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between px-7 py-4 border-t",
				style: { borderColor: "rgba(245,245,245,0.08)" },
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-mono text-[10px] uppercase tracking-[0.22em]",
					style: { color: "#888888" },
					children: genre.count
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] transition-colors",
					style: { color: "#FF3333" },
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "opacity-0 group-hover:opacity-100 transition-opacity",
						children: "Click to expand"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
						width: "16",
						height: "16",
						viewBox: "0 0 24 24",
						fill: "none",
						stroke: "currentColor",
						strokeWidth: "2",
						className: "translate-x-0 group-hover:translate-x-1 transition-transform",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M5 12h14M13 5l7 7-7 7" })
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-300",
				style: { background: "#FF3333" },
				"aria-hidden": true
			})
		]
	});
}
function Portfolio() {
	const [openGenre, setOpenGenre] = (0, import_react.useState)(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "work",
		className: "relative py-16 sm:py-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, { children: "Selected Work" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-col justify-between gap-6 md:flex-row md:items-end",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "uppercase",
						style: {
							fontFamily: "Impact, 'Haettenschweiler', 'Arial Narrow Bold', sans-serif",
							fontSize: "clamp(3.5rem, 9vw, 7rem)",
							lineHeight: .88,
							letterSpacing: "-0.02em",
							color: "#F5F5F5"
						},
						children: [
							"FRAMES THAT",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								style: { color: "#FF3333" },
								children: "PAID RENT."
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "max-w-xs font-mono text-[12px] leading-[1.8]",
						style: { color: "#888888" },
						children: "Click any genre block to expand the full reel library for that category. Drag to navigate. Snap to view."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid grid-cols-1 gap-px sm:grid-cols-2",
					style: { background: "rgba(245,245,245,0.06)" },
					children: GENRES.map((genre) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GenreBlock, {
						genre,
						onOpen: setOpenGenre
					}, genre.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.22em]",
					style: { color: "#888888" },
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						style: { color: "#FF3333" },
						children: "//"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
						"Replace embed URLs in",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
							style: { color: "#D4FF00" },
							children: "Portfolio.tsx"
						}),
						" with your actual IG reel or YouTube Short URLs to populate the carousel."
					] })]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: openGenre && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MagneticCarousel, {
			items: openGenre.items,
			onClose: () => setOpenGenre(null),
			initialIndex: 0
		}, openGenre.id) })]
	});
}
var stats = [
	{
		k: "30",
		unit: "REELS",
		v: "Per Month. Every Month.",
		d: "We don't do content sprints. We build a machine. 30 edited, posted, and captioned reels — or you don't pay.",
		accent: true
	},
	{
		k: "48H",
		unit: "",
		v: "Rough-Cut Turnaround",
		d: "Shoot wraps. 48 hours later, your first edit is in your DMs. No 2-week wait.",
		accent: false
	},
	{
		k: "4K",
		unit: "EVERY",
		v: "Single Shoot",
		d: "Sony FX3/FX6 with cinema glass. Not a phone. Not a mirrorless from 2019.",
		accent: false
	},
	{
		k: "0",
		unit: "",
		v: "Empty Days",
		d: "Daily posting is a hard guarantee. No weekends off, no 'we'll catch up tomorrow'.",
		accent: true
	}
];
function Results() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative py-16 sm:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, { children: "The Numbers" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-col justify-between gap-6 md:flex-row md:items-end",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "uppercase",
						style: {
							fontFamily: "Impact, 'Haettenschweiler', 'Arial Narrow Bold', sans-serif",
							fontSize: "clamp(3rem, 7vw, 5.5rem)",
							lineHeight: .9,
							letterSpacing: "-0.02em",
							color: "#F5F5F5"
						},
						children: [
							"NUMBERS THAT",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								style: { color: "#FF3333" },
								children: "DON'T LIE."
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "max-w-sm font-mono text-[12px] leading-[1.8] text-[#888888]",
						children: "We built every guarantee from the ground up. These are contractual, not marketing copy."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-14 grid grid-cols-1 gap-px sm:grid-cols-2 lg:grid-cols-4",
					style: { background: "rgba(245,245,245,0.06)" },
					children: stats.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative p-7 flex flex-col",
						style: { background: s.accent ? "rgba(255,51,51,0.05)" : "#111111" },
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-auto",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-end gap-2 mb-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										style: {
											fontFamily: "Impact, 'Haettenschweiler', 'Arial Narrow Bold', sans-serif",
											fontSize: "clamp(3.5rem, 7vw, 5rem)",
											lineHeight: 1,
											letterSpacing: "-0.02em",
											color: s.accent ? "#FF3333" : "#F5F5F5"
										},
										children: s.k
									}), s.unit && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mb-2 font-mono text-[11px] uppercase tracking-[0.18em]",
										style: { color: s.accent ? "#FF3333" : "#888888" },
										children: s.unit
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-mono text-[11px] uppercase tracking-[0.2em] text-[#F5F5F5] mb-3",
									children: s.v
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-mono text-[11px] leading-[1.7] text-[#888888]",
									children: s.d
								})
							]
						})
					}, s.k))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
					className: "mt-4 p-8 sm:p-10",
					style: {
						background: "rgba(26,26,26,1)",
						border: "1px solid rgba(245,245,245,0.08)",
						borderRadius: 0
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							style: {
								fontFamily: "Impact, 'Haettenschweiler', 'Arial Narrow Bold', sans-serif",
								fontSize: "clamp(2rem, 4vw, 3.5rem)",
								lineHeight: 1,
								color: "#FF3333"
							},
							children: "“"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", {
							className: "mt-4 font-mono text-[14px] leading-[1.8] text-[#F5F5F5] max-w-3xl",
							children: "Sam's team don't shoot ads — they engineer scroll-stoppers. Our Instagram went from 800 to 12,000 followers in 60 days. Every single reel was on time. Every single one was 4K. This isn't an agency, it's a production machine."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
							className: "mt-8 flex items-center gap-4 border-t pt-6",
							style: { borderColor: "rgba(245,245,245,0.08)" },
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-10 w-10 rounded-full",
								style: { background: "linear-gradient(135deg, #FF3333 0%, #880000 100%)" }
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-mono text-[12px] text-[#F5F5F5]",
								children: "Riya Mehta"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-mono text-[10px] uppercase tracking-[0.2em] text-[#888888]",
								children: "Founder · Bloom Skincare Co."
							})] })]
						})
					]
				})
			]
		})
	});
}
var WEB3FORMS_ACCESS_KEY = "REPLACE_WITH_YOUR_WEB3FORMS_KEY";
var WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
var PLAY_OPTIONS = [
	{
		value: "15k",
		label: "15K Growth Engine",
		price: "₹15,000/mo"
	},
	{
		value: "20k",
		label: "20K Premium Build",
		price: "₹20,000/mo"
	},
	{
		value: "custom",
		label: "Custom Build",
		price: "Let's talk"
	}
];
function TicketField({ id, label, sublabel, type = "text", required = true, placeholder = "", value, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "border-b",
		style: { borderColor: "rgba(245,245,245,0.08)" },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-1 px-4 py-4 sm:flex-row sm:items-start sm:gap-4 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "sm:w-44 sm:shrink-0 sm:pt-0.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-mono text-[10px] uppercase tracking-[0.22em]",
					style: { color: "#FF3333" },
					children: label
				}), sublabel && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-0.5 font-mono text-[9px] leading-relaxed",
					style: { color: "#555555" },
					children: sublabel
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				id,
				name: id,
				type,
				required,
				placeholder,
				value,
				onChange: (e) => onChange(e.target.value),
				className: "flex-1 bg-transparent font-mono text-[13px] outline-none placeholder:text-[#333333] transition-colors",
				style: { color: "#F5F5F5" },
				onFocus: (e) => {
					const row = e.currentTarget.closest("div.border-b");
					if (row) row.style.borderColor = "rgba(255,51,51,0.4)";
				},
				onBlur: (e) => {
					const row = e.currentTarget.closest("div.border-b");
					if (row) row.style.borderColor = "rgba(245,245,245,0.08)";
				}
			})]
		})
	});
}
function PlaySelector({ value, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "border-b",
		style: { borderColor: "rgba(245,245,245,0.08)" },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "px-4 py-4 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-3 font-mono text-[10px] uppercase tracking-[0.22em]",
				style: { color: "#FF3333" },
				children: ["Select Your Play", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "ml-2 font-mono text-[9px]",
					style: { color: "#555555" },
					children: "(required)"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-col gap-2 sm:flex-row sm:flex-wrap",
				children: PLAY_OPTIONS.map((opt) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => onChange(opt.value),
					className: "flex items-center justify-between px-4 py-3 transition-all sm:flex-col sm:items-start",
					style: {
						background: value === opt.value ? "rgba(255,51,51,0.12)" : "transparent",
						border: value === opt.value ? "1px solid #FF3333" : "1px solid rgba(245,245,245,0.12)",
						width: "100%"
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-mono text-[11px] uppercase tracking-[0.16em]",
						style: { color: value === opt.value ? "#F5F5F5" : "#888888" },
						children: opt.label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-mono text-[10px] sm:mt-1",
						style: { color: value === opt.value ? "#FF3333" : "#444444" },
						children: opt.price
					})]
				}, opt.value))
			})]
		})
	});
}
function BottleneckField({ value, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "border-b",
		style: { borderColor: "rgba(245,245,245,0.08)" },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "px-4 py-4 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-2 font-mono text-[10px] uppercase tracking-[0.22em]",
					style: { color: "#FF3333" },
					children: "Biggest bottleneck right now?"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-2 font-mono text-[9px]",
					style: { color: "#555555" },
					children: "No views? No time to shoot? No strategy? Tell us in one line."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					id: "bottleneck",
					name: "bottleneck",
					type: "text",
					required: true,
					placeholder: "e.g. We post but nothing gets views...",
					value,
					onChange: (e) => onChange(e.target.value),
					className: "w-full bg-transparent font-mono text-[13px] outline-none placeholder:text-[#333333]",
					style: { color: "#F5F5F5" }
				})
			]
		})
	});
}
function Contact() {
	const [name, setName] = (0, import_react.useState)("");
	const [instagram, setInstagram] = (0, import_react.useState)("");
	const [play, setPlay] = (0, import_react.useState)("");
	const [bottleneck, setBottleneck] = (0, import_react.useState)("");
	const [state, setState] = (0, import_react.useState)("idle");
	const [error, setError] = (0, import_react.useState)("");
	const onSubmit = async (e) => {
		e.preventDefault();
		if (!play) return;
		setState("sending");
		setError("");
		const selectedPlay = PLAY_OPTIONS.find((p) => p.value === play);
		const fd = new FormData(e.currentTarget);
		fd.append("access_key", WEB3FORMS_ACCESS_KEY);
		fd.append("subject", `New booking [${selectedPlay?.label}] — Sam Creattive`);
		fd.append("from_name", "Sam Creattive Site");
		fd.append("play", selectedPlay?.label ?? play);
		try {
			const json = await (await fetch(WEB3FORMS_ENDPOINT, {
				method: "POST",
				body: fd
			})).json();
			if (json.success) {
				setState("ok");
				e.currentTarget.reset();
				setName("");
				setInstagram("");
				setPlay("");
				setBottleneck("");
			} else {
				setState("err");
				setError(json.message ?? "Something went wrong.");
			}
		} catch (err) {
			setState("err");
			setError(err instanceof Error ? err.message : "Network error");
		}
	};
	const selectedPlay = PLAY_OPTIONS.find((p) => p.value === play);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "contact",
		className: "relative py-16 sm:py-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "pointer-events-none absolute inset-x-0 top-0 h-px",
			style: { background: "linear-gradient(to right, transparent, #FF3333, transparent)" }
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto max-w-6xl px-4 sm:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, { children: "Book Your Slot" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-col justify-between gap-6 md:flex-row md:items-end",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "uppercase",
						style: {
							fontFamily: "Impact, 'Haettenschweiler', 'Arial Narrow Bold', sans-serif",
							fontSize: "clamp(3.5rem, 9vw, 7rem)",
							lineHeight: .88,
							letterSpacing: "-0.02em",
							color: "#F5F5F5"
						},
						children: [
							"READY TO",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								style: { color: "#FF3333" },
								children: "SHOOT?"
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "max-w-xs font-mono text-[12px] leading-[1.8]",
						style: { color: "#888888" },
						children: "4 client max. 2 slots currently open. Fill the order ticket — we'll audit your Instagram before the call so we hit the ground running."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-12 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.4fr]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "mailto:hello@samcreatives.co",
								className: "group inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.18em] transition-colors",
								style: { color: "#888888" },
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "group-hover:text-[#FF3333] transition-colors",
									children: "hello@samcreatives.co"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
									width: "12",
									height: "12",
									viewBox: "0 0 24 24",
									fill: "none",
									stroke: "currentColor",
									strokeWidth: "2",
									className: "transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M7 17L17 7M9 7h8v8" })
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
								className: "grid grid-cols-2 gap-6 border-t pt-8",
								style: { borderColor: "rgba(245,245,245,0.08)" },
								children: [
									{
										k: "Location",
										v: "India · Remote-first"
									},
									{
										k: "Response",
										v: "Within 24 hours"
									},
									{
										k: "Contracts",
										v: "30-day rolling"
									},
									{
										k: "Slots Left",
										v: "2 of 4 open",
										accent: true
									}
								].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "font-mono text-[10px] uppercase tracking-[0.2em]",
									style: { color: "#888888" },
									children: item.k
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "mt-1.5 font-mono text-[12px]",
									style: { color: item.accent ? "#FF3333" : "#F5F5F5" },
									children: item.v
								})] }, item.k))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "https://instagram.com/sam.creattive",
								target: "_blank",
								rel: "noreferrer",
								className: "inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] transition-colors",
								style: { color: "#888888" },
								onMouseEnter: (e) => e.currentTarget.style.color = "#F5F5F5",
								onMouseLeave: (e) => e.currentTarget.style.color = "#888888",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
									width: "14",
									height: "14",
									viewBox: "0 0 24 24",
									fill: "none",
									stroke: "currentColor",
									strokeWidth: "1.8",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
											x: "2",
											y: "2",
											width: "20",
											height: "20",
											rx: "5"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
											cx: "12",
											cy: "12",
											r: "4"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
											cx: "17.5",
											cy: "6.5",
											r: "1.5",
											fill: "currentColor",
											stroke: "none"
										})
									]
								}), "@sam.creattive"]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between px-4 py-3 sm:px-6",
						style: { background: "#FF3333" },
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-[11px] uppercase tracking-[0.22em]",
							style: { color: "#F5F5F5" },
							children: "// ORDER TICKET"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-[10px]",
							style: { color: "rgba(245,245,245,0.7)" },
							children: selectedPlay ? selectedPlay.price : "Pick your play below ↓"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit,
						style: {
							background: "#1a1a1a",
							border: "1px solid rgba(245,245,245,0.08)",
							borderTop: "none"
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "checkbox",
								name: "botcheck",
								className: "hidden",
								tabIndex: -1,
								autoComplete: "off"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TicketField, {
								id: "name",
								label: "Name / Shop Name",
								sublabel: "Your name or your business name",
								placeholder: "e.g. Rahul / The Denim Co.",
								value: name,
								onChange: setName
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TicketField, {
								id: "instagram",
								label: "Instagram Handle",
								sublabel: "We audit your profile before the call",
								placeholder: "@yourhandle",
								value: instagram,
								onChange: setInstagram
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlaySelector, {
								value: play,
								onChange: setPlay
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BottleneckField, {
								value: bottleneck,
								onChange: setBottleneck
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col gap-3 px-4 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6",
								style: { borderTop: "1px solid rgba(245,245,245,0.08)" },
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-[9px] uppercase tracking-[0.18em]",
									style: { color: "#444444" },
									children: "No lock-in · 30-day rolling"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "submit",
									disabled: state === "sending" || !play,
									className: "inline-flex items-center justify-center gap-2 px-7 py-3.5 font-mono text-[11px] uppercase tracking-[0.22em] transition-all disabled:opacity-50 disabled:cursor-not-allowed",
									style: {
										background: "#FF3333",
										color: "#F5F5F5",
										border: "1px solid #FF3333"
									},
									onMouseEnter: (e) => {
										if (state !== "sending" && play) {
											e.currentTarget.style.background = "transparent";
											e.currentTarget.style.color = "#FF3333";
										}
									},
									onMouseLeave: (e) => {
										e.currentTarget.style.background = "#FF3333";
										e.currentTarget.style.color = "#F5F5F5";
									},
									children: state === "sending" ? "Sending…" : "Place Order →"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AnimatePresence, { children: [state === "ok" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
								initial: {
									opacity: 0,
									y: 8
								},
								animate: {
									opacity: 1,
									y: 0
								},
								exit: { opacity: 0 },
								className: "mx-6 mb-5 font-mono text-[12px] p-4",
								style: {
									border: "1px solid rgba(212,255,0,0.4)",
									background: "rgba(212,255,0,0.06)",
									color: "#D4FF00"
								},
								children: "✓ Order placed. We'll audit your IG and DM you within 24 hours."
							}), state === "err" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								initial: {
									opacity: 0,
									y: 8
								},
								animate: {
									opacity: 1,
									y: 0
								},
								exit: { opacity: 0 },
								className: "mx-6 mb-5 font-mono text-[12px] p-4",
								style: {
									border: "1px solid rgba(255,51,51,0.4)",
									background: "rgba(255,51,51,0.06)",
									color: "#FF3333"
								},
								children: ["✗ ", error || "Couldn't send — please email us directly."]
							})] })
						]
					})] })]
				})
			]
		})]
	});
}
var socials = [
	{
		label: "Instagram",
		href: "https://instagram.com/sam.creattive"
	},
	{
		label: "YouTube",
		href: "https://youtube.com"
	},
	{
		label: "TikTok",
		href: "https://tiktok.com"
	},
	{
		label: "LinkedIn",
		href: "https://linkedin.com"
	}
];
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "relative pt-16 pb-8 md:pb-8",
		style: { borderTop: "1px solid rgba(245,245,245,0.08)" },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col justify-between gap-14 md:flex-row",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-xs",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 font-mono text-[11px] leading-[1.8] text-[#888888]",
								children: "Ground-and-pound short-form studio. 4K every 4 days. 30 reels a month. 48-hour turnaround. No excuses, no empty days."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "mailto:hello@samcreatives.co",
								className: "group mt-8 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-[#888888] transition-colors hover:text-[#FF3333]",
								children: ["hello@samcreatives.co", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
									width: "12",
									height: "12",
									viewBox: "0 0 24 24",
									fill: "none",
									stroke: "currentColor",
									strokeWidth: "2",
									className: "transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M7 17L17 7M9 7h8v8" })
								})]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-2 gap-8 sm:grid-cols-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mb-4 font-mono text-[10px] uppercase tracking-[0.22em] text-[#FF3333]",
								children: "Studio"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "space-y-3",
								children: [
									"Work",
									"Services",
									"Process",
									"Contact"
								].map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: `#${l.toLowerCase()}`,
									className: "font-mono text-[11px] uppercase tracking-[0.18em] text-[#888888] transition-colors hover:text-[#F5F5F5]",
									children: l
								}) }, l))
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mb-4 font-mono text-[10px] uppercase tracking-[0.22em] text-[#FF3333]",
								children: "Follow"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "space-y-3",
								children: socials.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: s.href,
									target: "_blank",
									rel: "noreferrer",
									className: "font-mono text-[11px] uppercase tracking-[0.18em] text-[#888888] transition-colors hover:text-[#F5F5F5]",
									children: s.label
								}) }, s.label))
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mb-4 font-mono text-[10px] uppercase tracking-[0.22em] text-[#FF3333]",
								children: "Booking"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
								className: "space-y-3 font-mono text-[11px] uppercase tracking-[0.14em]",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
										className: "text-[#F5F5F5]",
										children: "2 Slots Open"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
										className: "text-[#888888]",
										children: "₹15K–₹20K / mo"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
										className: "text-[#888888]",
										children: "30-Day Rolling"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
										className: "text-[#888888]",
										children: "Reply < 24H"
									})
								]
							})] })
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-12 flex flex-col items-start justify-between gap-4 border-t pt-6 font-mono text-[10px] uppercase tracking-[0.22em] text-[#888888] sm:flex-row",
					style: { borderColor: "rgba(245,245,245,0.08)" },
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
						"© ",
						(/* @__PURE__ */ new Date()).getFullYear(),
						" Sam Creattive · All rights reserved"
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "4K · 48H · 30 REELS · 0 EXCUSES" })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 select-none uppercase",
					style: {
						fontFamily: "Impact, 'Haettenschweiler', 'Arial Narrow Bold', sans-serif",
						fontSize: "clamp(4rem, 20vw, 18rem)",
						lineHeight: .85,
						letterSpacing: "-0.03em",
						color: "rgba(245,245,245,0.04)"
					},
					children: "SAM"
				})
			]
		})
	});
}
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative min-h-screen bg-background text-foreground noise",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Preloader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CustomCursor, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "pb-20 md:pb-0",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Marquee, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServicesBento, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Process, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portfolio, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Results, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileNav, {})
		]
	});
}
//#endregion
export { Index as component };
