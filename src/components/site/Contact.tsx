import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionLabel } from "./SectionLabel";
import { SplitText } from "./SplitText";

// ─────────────────────────────────────────────────────────────
// Web3Forms — free static form backend, no server required.
//   1. Grab your access key at https://web3forms.com (free)
//   2. Replace the string below.
//   3. Submissions land in the Gmail you registered.
// ─────────────────────────────────────────────────────────────
const WEB3FORMS_ACCESS_KEY = "REPLACE_WITH_YOUR_WEB3FORMS_KEY";
const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

type Mode = "demo" | "service";

function Field({ id, label, type = "text", required = true, textarea = false }: { id: string; label: string; type?: string; required?: boolean; textarea?: boolean }) {
  const [val, setVal] = useState("");
  const filled = val.length > 0;
  const cls = "peer w-full border-b border-border bg-transparent pb-2 pt-6 text-[15px] text-foreground outline-none transition-colors focus:border-primary";
  return (
    <label htmlFor={id} className="relative block">
      <span className={`pointer-events-none absolute left-0 origin-left font-mono text-[11px] uppercase tracking-[0.18em] transition-all ${filled ? "top-1 scale-90 text-primary" : "top-6 text-muted-foreground"} peer-focus:top-1 peer-focus:scale-90 peer-focus:text-primary`}>{label}</span>
      {textarea ? (
        <textarea id={id} name={id} required={required} rows={3} value={val} onChange={(e) => setVal(e.target.value)} className={cls} />
      ) : (
        <input id={id} name={id} type={type} required={required} value={val} onChange={(e) => setVal(e.target.value)} className={cls} />
      )}
    </label>
  );
}

export function Contact() {
  const [mode, setMode] = useState<Mode>("service");
  const [state, setState] = useState<"idle" | "sending" | "ok" | "err">("idle");
  const [error, setError] = useState("");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setState("sending"); setError("");
    const fd = new FormData(e.currentTarget);
    fd.append("access_key", WEB3FORMS_ACCESS_KEY);
    fd.append("subject", `${mode === "demo" ? "Demo request" : "Service booking"} — Sam Creatives`);
    fd.append("from_name", "Sam Creatives Site");
    fd.append("intent", mode);
    try {
      const res = await fetch(WEB3FORMS_ENDPOINT, { method: "POST", body: fd });
      const json = await res.json();
      if (json.success) { setState("ok"); e.currentTarget.reset(); }
      else { setState("err"); setError(json.message ?? "Something went wrong."); }
    } catch (err) {
      setState("err");
      setError(err instanceof Error ? err.message : "Network error");
    }
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 flex justify-center">
        <div className="h-[500px] w-[900px] accent-glow opacity-20 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <SectionLabel>Start something</SectionLabel>
        <h2 className="mt-6 font-display text-5xl leading-[0.95] tracking-tight sm:text-7xl">
          <SplitText text="Let's put your brand" />
          <br />
          <SplitText text="on the timeline." className="italic text-primary" />
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-8 text-sm text-muted-foreground">
            <p className="max-w-md text-[15px] leading-relaxed text-foreground/85">
              Booking Q3 — response within one business day. Prefer email?
            </p>
            <a href="mailto:hello@samcreatives.co" className="group inline-flex items-center gap-3 font-display text-2xl text-foreground underline decoration-primary/50 decoration-2 underline-offset-8 transition-colors hover:text-primary sm:text-3xl">
              hello@samcreatives.co
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"><path d="M7 17L17 7M9 7h8v8"/></svg>
            </a>
            <dl className="grid grid-cols-2 gap-6 border-t border-border pt-8">
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Studio</dt>
                <dd className="mt-2 text-sm text-foreground">Remote-first · Global</dd>
              </div>
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Response</dt>
                <dd className="mt-2 text-sm text-foreground">Within 24 hours</dd>
              </div>
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Ideal budget</dt>
                <dd className="mt-2 text-sm text-foreground">$5k+ per engagement</dd>
              </div>
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Q3 slots</dt>
                <dd className="mt-2 text-sm text-primary">3 remaining</dd>
              </div>
            </dl>
          </div>

          <div className="glass rounded-3xl p-6 sm:p-8">
            <div className="mb-8 inline-flex rounded-full border border-border p-1 text-[11px] uppercase tracking-[0.18em]">
              {(["service", "demo"] as Mode[]).map((m) => (
                <button
                  key={m}
                  type="button"
                  onClick={() => setMode(m)}
                  className={`relative rounded-full px-4 py-2 font-mono transition-colors ${mode === m ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}
                >
                  {mode === m && (
                    <motion.span layoutId="mode-pill" className="absolute inset-0 rounded-full bg-primary" transition={{ type: "spring", stiffness: 300, damping: 26 }} />
                  )}
                  <span className="relative">{m === "service" ? "Book a service" : "Request a demo"}</span>
                </button>
              ))}
            </div>

            <form onSubmit={onSubmit} className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <Field id="name" label="Your name" />
              <Field id="email" label="Email" type="email" />
              <Field id="brand" label="Brand / Company" />
              <Field id="budget" label={mode === "demo" ? "Interested tier" : "Budget range"} required={false} />
              <div className="sm:col-span-2">
                <Field id="message" label={mode === "demo" ? "What would you like to see?" : "Tell us about the project"} textarea />
              </div>
              {/* honeypot */}
              <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

              <div className="mt-2 flex flex-wrap items-center justify-between gap-4 sm:col-span-2">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  Delivered to inbox via Web3Forms
                </p>
                <button
                  type="submit"
                  disabled={state === "sending"}
                  className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 font-mono text-[12px] uppercase tracking-[0.18em] text-primary-foreground transition-all hover:bg-primary/90 disabled:opacity-70"
                >
                  {state === "sending" ? "Sending…" : mode === "demo" ? "Request demo" : "Send inquiry"}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform group-hover:translate-x-0.5"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
                </button>
              </div>

              <AnimatePresence>
                {state === "ok" && (
                  <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="rounded-2xl border border-primary/40 bg-primary/10 p-4 text-sm text-foreground sm:col-span-2">
                    Sent. We'll be in your inbox within one business day.
                  </motion.div>
                )}
                {state === "err" && (
                  <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="rounded-2xl border border-destructive/40 bg-destructive/10 p-4 text-sm text-foreground sm:col-span-2">
                    Couldn't send: {error || "please try again or email directly."}
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}