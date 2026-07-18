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
import { useMemo } from "react";

interface FlipTextProps {
  children: string;
  className?: string;
  /** Flip duration in seconds */
  duration?: number;
  /** Base delay in seconds */
  delay?: number;
  /** Loop continuously (default: true) */
  loop?: boolean;
  /** Trigger on hover instead of auto-looping */
  hover?: boolean;
  /** Split by character instead of word stagger */
  together?: boolean;
  separator?: string;
}

export function FlipText({
  children,
  className = "",
  duration = 2.2,
  delay = 0,
  loop = true,
  hover = false,
  together = false,
  separator = " ",
}: FlipTextProps) {
  const words = useMemo(() => children.split(separator), [children, separator]);
  const totalChars = children.length;

  const getCharIndex = (wordIndex: number, charIndex: number) => {
    let idx = 0;
    for (let i = 0; i < wordIndex; i++) {
      idx += words[i].length + (separator === " " ? 1 : separator.length);
    }
    return idx + charIndex;
  };

  const wrapperClass = [
    "flip-text-wrapper inline-block leading-none",
    hover ? "flip-text-hover" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <span className={wrapperClass} style={{ perspective: "1000px" }}>
      {words.map((word, wi) => (
        <span key={wi} className="word inline-block whitespace-nowrap" style={{ transformStyle: "preserve-3d" }}>
          {word.split("").map((char, ci) => {
            const globalIdx = getCharIndex(wi, ci);
            let charDelay = delay;
            if (!together && !hover) {
              const norm = globalIdx / totalChars;
              charDelay = Math.sin(norm * (Math.PI / 2)) * (duration * 0.25) + delay;
            }
            return (
              <span
                key={ci}
                className="flip-char"
                data-char={char}
                style={
                  {
                    "--flip-duration": hover ? `${duration}s` : `${duration}s`,
                    "--flip-delay": `${charDelay}s`,
                    "--flip-iteration": loop && !hover ? "infinite" : "1",
                    transformStyle: "preserve-3d",
                    display: "inline-block",
                  } as React.CSSProperties
                }
              >
                {char}
              </span>
            );
          })}
          {separator === " " && wi < words.length - 1 && (
            <span className="inline-block">&nbsp;</span>
          )}
        </span>
      ))}
    </span>
  );
}
