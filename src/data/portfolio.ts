// ─────────────────────────────────────────────────────────────
// VIDEO_SOURCES — drop your Google Drive / CDN URLs into `src`.
//
// Google Drive direct-stream format:
//   https://drive.google.com/uc?export=download&id=<FILE_ID>
// (make sure the file is set to "Anyone with the link — Viewer")
//
// Or use a CDN endpoint that returns a raw .mp4 (Bunny, Cloudflare Stream,
// Mux public playback, etc.).
// ─────────────────────────────────────────────────────────────

import p1 from "@/assets/poster-1.jpg";
import p2 from "@/assets/poster-2.jpg";
import p3 from "@/assets/poster-3.jpg";
import p4 from "@/assets/poster-4.jpg";
import p5 from "@/assets/poster-5.jpg";
import p6 from "@/assets/poster-6.jpg";
import p7 from "@/assets/poster-7.jpg";
import p8 from "@/assets/poster-8.jpg";

export type Category = "Retail" | "Real Estate" | "Commercials" | "UGC";

export interface VideoSource {
  id: string;
  title: string;
  client: string;
  category: Category;
  poster: string;
  /** Direct .mp4 URL — leave "" until you plug your Drive/CDN link. */
  src: string;
  metric: string;
}

export const VIDEO_SOURCES: VideoSource[] = [
  { id: "01", title: "Neon Step",       client: "Aurel Footwear", category: "Retail",      poster: p1, src: "", metric: "3.2M views" },
  { id: "02", title: "Golden Hour",     client: "Havenhouse",     category: "Real Estate", poster: p2, src: "", metric: "42 leads / week" },
  { id: "03", title: "First Touch",     client: "Lume Skincare",  category: "UGC",         poster: p3, src: "", metric: "6.4% CTR" },
  { id: "04", title: "Afterhours",      client: "Ripcurrent",     category: "Commercials", poster: p4, src: "", metric: "1.8M reach" },
  { id: "05", title: "Slow Pour",       client: "Ember Coffee",   category: "UGC",         poster: p5, src: "", metric: "540K views" },
  { id: "06", title: "Cold Movement",   client: "Nord Timepieces",category: "Commercials", poster: p6, src: "", metric: "9.1× ROAS" },
  { id: "07", title: "Above The Line",  client: "Villa Cascade",  category: "Real Estate", poster: p7, src: "", metric: "Sold in 11 days" },
  { id: "08", title: "Threshold",       client: "Kore Athletics", category: "Commercials", poster: p8, src: "", metric: "4.7% CTR" },
];