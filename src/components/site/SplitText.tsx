import { motion, type Variants } from "framer-motion";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.03 } },
};
const child: Variants = {
  hidden: { y: "110%", opacity: 0 },
  show: { y: "0%", opacity: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

export function SplitText({
  text,
  className = "",
  as: Tag = "span",
  delay = 0,
}: {
  text: string;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
  delay?: number;
}) {
  const words = text.split(" ");
  return (
    <Tag className={className}>
      <motion.span
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        transition={{ delayChildren: delay }}
        className="inline"
      >
        {words.map((w, i) => (
          <span key={i} className="inline-block overflow-hidden align-baseline pr-[0.25em] pb-[0.08em]">
            <motion.span variants={child} className="inline-block will-change-transform">
              {w}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}