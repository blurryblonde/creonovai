// src/App.tsx
import React, { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  ChevronLeft,
  LineChart,
  Lock,
  Moon,
  PhoneCall,
  Play,
  Shield,
  Sparkles,
  Star,
  Sun,
  Workflow,
  Zap,
} from "lucide-react";

type Page = "home" | "demo" | "review";

const CALENDLY = "https://calendly.com/creonovai/30min";
const TALLY = "https://tally.so/r/A72YoB?transparentBackground=1";

export default function App() {
  const [page, setPage] = useState<Page>("home");
  const [dark, setDark] = useState(true);

  // Theme toggle (adds/removes 'dark' on <html>)
  useEffect(() => {
    const root = document.documentElement;
    if (dark) root.classList.add("dark");
    else root.classList.remove("dark");
  }, [dark]);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  return (
    <div className="min-h-screen relative overflow-hidden bg-white text-slate-950 dark:bg-[#070A12] dark:text-slate-50">
      <GlobalStyles />
      <LavaAura />

      {/* Top Nav */}
      <div className="relative z-10">
        <nav className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
          <button
            onClick={() => setPage("home")}
            className="group flex items-center gap-3"
            aria-label="Go home"
          >
            <LogoMark />
            <div className="text-left">
              <div className="tracking-[0.28em] text-xs opacity-80">CREO NOVAI</div>
              <div className="text-sm font-semibold leading-tight">AI Strategy Architect</div>
              <div className="text-xs opacity-70 leading-tight">
                Creating new intelligence systems for modern businesses
              </div>
            </div>
          </button>

          <div className="hidden md:flex items-center gap-3">
            <GhostPill onClick={() => setPage("demo")} icon={<Play className="h-4 w-4" />}>
              See the Demo
            </GhostPill>
            <MagneticButton
              onClick={() => setPage("review")}
              className="bg-black text-white dark:bg-white dark:text-black"
            >
              Apply for a System Review <ArrowRight className="h-4 w-4" />
            </MagneticButton>

            <button
              onClick={() => setDark((v) => !v)}
              className="ml-2 rounded-full border border-white/25 dark:border-white/10 bg-white/70 dark:bg-white/10 backdrop-blur px-3 py-2 text-sm shadow-sm hover:shadow transition"
              aria-label="Toggle dark mode"
            >
              <span className="inline-flex items-center gap-2">
                {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                <span className="hidden sm:inline">{dark ? "Light" : "Dark"}</span>
              </span>
            </button>
          </div>

          {/* Mobile */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setDark((v) => !v)}
              className="rounded-full border border-white/25 dark:border-white/10 bg-white/70 dark:bg-white/10 backdrop-blur px-3 py-2 text-sm shadow-sm"
              aria-label="Toggle dark mode"
            >
              {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <MagneticButton
              onClick={() => setPage("review")}
              className="bg-black text-white dark:bg-white dark:text-black"
            >
              Apply <ArrowRight className="h-4 w-4" />
            </MagneticButton>
          </div>
        </nav>
      </div>

      {/* Pages (no router) */}
      <AnimatePresence mode="wait">
        {page === "home" && (
          <motion.main
            key="home"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.45 }}
            className="relative z-10"
          >
            <HomePage onDemo={() => setPage("demo")} onReview={() => setPage("review")} />
          </motion.main>
        )}

        {page === "demo" && (
          <motion.main
            key="demo"
            initial={{ opacity: 0, x: 14 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -14 }}
            transition={{ duration: 0.45 }}
            className="relative z-10"
          >
            <DemoPage onBack={() => setPage("home")} onReview={() => setPage("review")} />
          </motion.main>
        )}

        {page === "review" && (
          <motion.main
            key="review"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.45 }}
            className="relative z-10"
          >
            <SystemReviewPage onBack={() => setPage("home")} />
          </motion.main>
        )}
      </AnimatePresence>

      <footer className="relative z-10 border-t border-white/25 dark:border-white/10 bg-white/45 dark:bg-white/[0.05] backdrop-blur">
        <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <LogoMark small />
            <div className="text-sm tracking-[0.25em] opacity-80">CREO NOVAI</div>
          </div>
          <div className="text-sm opacity-80 text-slate-800 dark:text-slate-200">
            Creating new intelligence systems for modern businesses
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ---------------------------------------------
   HOME PAGE
--------------------------------------------- */
function HomePage({ onDemo, onReview }: { onDemo: () => void; onReview: () => void }) {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 pt-10 pb-8">
        <div className="flex flex-col gap-6">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="inline-flex w-fit items-center gap-2 rounded-full border border-white/35 dark:border-white/12 bg-white/70 dark:bg-white/[0.08] backdrop-blur px-3 py-1.5 text-xs shadow-sm"
          >
            <Sparkles className="h-4 w-4" />
            Boutique AI Systems — built to convert & compound
            <span className="ml-2 inline-flex items-center gap-1 opacity-70">
              <Lock className="h-3.5 w-3.5" /> limited slots
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05, duration: 0.65 }}
            className="text-5xl md:text-6xl font-semibold leading-[1.02]"
          >
            Create systems that{" "}
            <span className="bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
              run your business
            </span>
            .
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.6 }}
            className="max-w-2xl text-lg text-slate-800/90 dark:text-slate-100/85"
          >
            We design and implement automated revenue + ops systems that capture demand, qualify leads,
            follow up instantly, and report ROI in a clean executive dashboard — without hiring more people.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.18, duration: 0.6 }}
            className="flex flex-wrap gap-3 items-center"
          >
            <MagneticButton onClick={onReview} className="bg-black text-white dark:bg-white dark:text-black">
              Apply for a System Review <ArrowRight className="h-4 w-4" />
            </MagneticButton>
            <GhostPill onClick={onDemo} icon={<Play className="h-4 w-4" />}>
              See a Demo
            </GhostPill>
            <a href={CALENDLY} target="_blank" rel="noreferrer" className="text-sm underline opacity-80 hover:opacity-100">
              or skip to Calendly
            </a>
          </motion.div>
        </div>
      </section>

      {/* Marquee intrigue */}
      <MarqueeLine />

      {/* Dashboard Preview */}
      <section className="mx-auto max-w-7xl px-6 pb-10 pt-6">
        <DashboardPreview onReview={onReview} onDemo={onDemo} />
      </section>

      {/* Conversion spine */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="grid lg:grid-cols-3 gap-6">
          <GlassCard className="lg:col-span-2">
            <div className="flex items-start gap-3">
              <div className="mt-0.5">
                <Shield className="h-5 w-5 opacity-90" />
              </div>
              <div>
                <div className="text-sm uppercase tracking-wider opacity-70">Positioning</div>
                <h2 className="text-2xl font-semibold mt-1">
                  We don’t “build automations.” We architect{" "}
                  <span className="bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
                    profit systems
                  </span>
                  .
                </h2>
                <p className="mt-2 text-slate-800/85 dark:text-slate-100/80">
                  Operators come to us when missed calls, slow follow-up, and messy pipelines become expensive.
                  We diagnose leverage points, rebuild the flow, and keep it compounding.
                </p>

                <div className="mt-4 grid md:grid-cols-3 gap-3">
                  <MiniOutcome icon={<Zap className="h-4 w-4" />} title="Speed-to-lead" copy="Instant responses + smart routing." />
                  <MiniOutcome icon={<PhoneCall className="h-4 w-4" />} title="Calls captured" copy="AI assistant handles & logs outcomes." />
                  <MiniOutcome icon={<LineChart className="h-4 w-4" />} title="ROI visibility" copy="Metrics executives actually read." />
                </div>
              </div>
            </div>
          </GlassCard>

          <GlassCard>
            <div className="text-sm uppercase tracking-wider opacity-70">Best for</div>
            <h3 className="mt-1 text-xl font-semibold">High-intent operators</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-800/85 dark:text-slate-100/80">
              {[
                "Local services (med spa, dental, home services)",
                "Agencies & studios (inbound + scheduling)",
                "Consultants & creators (offer + funnel + follow-up)",
                "Boutique brands (appointments, launches, DTC)",
              ].map((x) => (
                <li key={x} className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 mt-0.5 opacity-90" />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5">
              <MagneticButton onClick={onReview} className="w-full bg-black text-white dark:bg-white dark:text-black">
                Apply for a System Review <ArrowRight className="h-4 w-4" />
              </MagneticButton>
              <div className="mt-2 text-xs opacity-75 text-center">We accept a small number of engagements.</div>
            </div>
          </GlassCard>
        </div>

        {/* Offer depth */}
        <div className="mt-10 grid lg:grid-cols-3 gap-6">
          <GlassCard className="lg:col-span-2">
            <div className="text-sm uppercase tracking-wider opacity-70">What we can plug in</div>
            <h3 className="mt-1 text-2xl font-semibold">A modular interface — you choose what’s installed.</h3>
            <p className="mt-2 text-slate-800/85 dark:text-slate-100/80">
              Your dashboard stays clean. Under the hood: systems that feel alive — responding, routing,
              logging, and reporting automatically.
            </p>

            <div className="mt-5 grid md:grid-cols-2 gap-4">
              <OfferCard
                icon={<Workflow className="h-5 w-5" />}
                title="Pipeline + CRM"
                copy="Normalize leads, dedupe, tag, route, and update records automatically."
              />
              <OfferCard
                icon={<PhoneCall className="h-5 w-5" />}
                title="AI Voice + Follow-up"
                copy="Answer calls, qualify intent, send summaries, schedule next steps."
              />
              <OfferCard icon={<Zap className="h-5 w-5" />} title="Funnels + Capture" copy="Landing pages, forms, lead magnets, booking flows, instant replies." />
              <OfferCard icon={<LineChart className="h-5 w-5" />} title="Analytics + Executive View" copy="Conversion, response time, outcomes, booked value, ROI snapshots." />
            </div>
          </GlassCard>

          <GlassCard>
            <div className="text-sm uppercase tracking-wider opacity-70">How it works</div>
            <h3 className="mt-1 text-xl font-semibold">Audit → Build → Operate</h3>
            <div className="mt-4 space-y-3 text-sm text-slate-800/85 dark:text-slate-100/80">
              <StepLine n="01" title="System Review" copy="Map leaks + highest ROI wins." />
              <StepLine n="02" title="Build Sprint" copy="Implement + test end-to-end." />
              <StepLine n="03" title="Operate" copy="Monitor + iterate for conversion." />
            </div>

            <div className="mt-5">
              <GhostPill onClick={onDemo} icon={<Play className="h-4 w-4" />}>
                Watch the demo narrative
              </GhostPill>
            </div>
          </GlassCard>
        </div>

        {/* Testimonials */}
        <div className="mt-12">
          <div className="flex items-end justify-between gap-3 flex-wrap">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/35 dark:border-white/12 bg-white/70 dark:bg-white/[0.08] backdrop-blur px-3 py-1.5 text-xs shadow-sm">
                Early Client Feedback
              </div>
              <h3 className="mt-3 text-3xl font-semibold">Proof it works</h3>
              <p className="mt-1 text-slate-800/85 dark:text-slate-100/80">
                Clean systems. Faster response. Better follow-through.
              </p>
            </div>

            <MagneticButton onClick={onReview} className="bg-black text-white dark:bg-white dark:text-black">
              Book a Free System Review <ArrowRight className="h-4 w-4" />
            </MagneticButton>
          </div>

          <div className="mt-6 grid md:grid-cols-3 gap-4">
            <TestimonialCard
              quote="Setup was fast, communication was clear, and the AI agent worked exactly as expected."
              name="Jasmine K."
              role="Founder, Wellness Studio"
            />
            <TestimonialCard
              quote="We were missing calls and losing leads. Now we get summaries instantly and can follow up properly."
              name="Marco D."
              role="Operator, Home Services"
            />
            <TestimonialCard
              quote="Professional, smooth setup — and it immediately took pressure off our team."
              name="Avery S."
              role="Director, Boutique Agency"
            />
          </div>

          <div className="mt-8 rounded-3xl border border-white/35 dark:border-white/12 bg-white/70 dark:bg-white/[0.08] backdrop-blur p-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <div className="text-xl font-semibold">Want your calls handled automatically?</div>
              <div className="text-slate-800/85 dark:text-slate-100/80">
                Apply for a System Review — we’ll map your highest ROI wins and give you the blueprint.
              </div>
            </div>
            <MagneticButton onClick={onReview} className="bg-black text-white dark:bg-white dark:text-black">
              Apply for a System Review <ArrowRight className="h-4 w-4" />
            </MagneticButton>
          </div>
        </div>
      </section>
    </>
  );
}

/* ---------------------------------------------
   DEMO PAGE
--------------------------------------------- */
function DemoPage({ onBack, onReview }: { onBack: () => void; onReview: () => void }) {
  return (
    <div className="mx-auto max-w-7xl px-6 pt-10 pb-16">
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <GhostPill onClick={onBack} icon={<ChevronLeft className="h-4 w-4" />}>
          Back
        </GhostPill>
        <MagneticButton onClick={onReview} className="bg-black text-white dark:bg-white dark:text-black">
          Apply for a System Review <ArrowRight className="h-4 w-4" />
        </MagneticButton>
      </div>

      <div className="mt-6 grid lg:grid-cols-2 gap-6 items-start">
        <GlassCard className="p-7">
          <div className="text-sm uppercase tracking-wider opacity-70">Demo narrative</div>
          <h1 className="mt-2 text-4xl font-semibold leading-tight">
            This is what your operation looks like{" "}
            <span className="bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
              after
            </span>{" "}
            Creo Novai.
          </h1>
          <p className="mt-3 text-slate-800/85 dark:text-slate-100/80">
            Not a tool. A living system. Intake flows in, qualification happens, outcomes get logged,
            and leadership sees performance instantly.
          </p>

          <div className="mt-6 space-y-3">
            <SceneRow
              icon={<Zap className="h-5 w-5" />}
              title="Scene 1 — Intake turns into intent"
              copy="A lead calls, submits a form, or DMs. The system captures, tags, and routes based on priority."
            />
            <SceneRow
              icon={<PhoneCall className="h-5 w-5" />}
              title="Scene 2 — The assistant handles it"
              copy="Voice answers calls, qualifies, sends a summary, and schedules next steps — instantly."
            />
            <SceneRow
              icon={<LineChart className="h-5 w-5" />}
              title="Scene 3 — ROI becomes visible"
              copy="Leadership sees response time, booked value, conversion, and next actions without asking."
            />
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <MagneticButton onClick={onReview} className="bg-black text-white dark:bg-white dark:text-black">
              Apply for a System Review <ArrowRight className="h-4 w-4" />
            </MagneticButton>
            <a className="text-sm underline opacity-80 hover:opacity-100" href={CALENDLY} target="_blank" rel="noreferrer">
              or skip to Calendly
            </a>
          </div>
        </GlassCard>

        <GlassCard className="p-0 overflow-hidden">
          <div className="p-6 border-b border-white/25 dark:border-white/10 flex items-center justify-between">
            <div>
              <div className="text-sm font-semibold">Live-feel preview</div>
              <div className="text-xs opacity-75">Executive view + agent status</div>
            </div>
            <div className="inline-flex items-center gap-2 text-xs rounded-full border border-white/30 dark:border-white/12 bg-white/70 dark:bg-white/[0.08] px-3 py-1.5 backdrop-blur">
              <span className="inline-block h-2 w-2 rounded-full bg-sky-400 animate-pulse" />
              system online
            </div>
          </div>

          <div className="p-6 space-y-4">
            <div className="grid grid-cols-3 gap-3">
              <Metric label="New inquiries" value="26" accent="blue" />
              <Metric label="Booked value" value="$18.4k" accent="blue" />
              <Metric label="Response time" value="38s" accent="blue" />
            </div>

            <div className="rounded-2xl border border-white/25 dark:border-white/10 bg-white/70 dark:bg-white/[0.08] backdrop-blur p-4">
              <div className="text-xs uppercase tracking-wider opacity-70">Assistant summary</div>
              <div className="mt-2 text-sm text-slate-800/85 dark:text-slate-100/80">
                “Captured 9 high-intent leads, routed 4 to priority, booked 2 calls, and sent 6 follow-ups.”
              </div>
              <div className="mt-3">
              <Waveform
  slow
  text="Today I captured 14 inquiries, qualified 6, booked 3 calls, and sent follow-ups with summaries."
/>
              </div>
            </div>

            <div className="rounded-2xl border border-white/25 dark:border-white/10 bg-white/70 dark:bg-white/[0.08] backdrop-blur p-4">
              <div className="text-xs uppercase tracking-wider opacity-70">Call outcome snapshot</div>
              <div className="mt-3 space-y-2 text-sm text-slate-900/80 dark:text-slate-100/80">
                {[
                  ["Qualified", "Requested pricing + timeline"],
                  ["Booked", "Scheduled consult for Monday"],
                  ["Follow-up", "Sent recap + next steps"],
                ].map(([a, b]) => (
                  <div key={a} className="flex items-center justify-between gap-3">
                    <div className="inline-flex items-center gap-2">
                      <span className="inline-block h-2 w-2 rounded-full bg-sky-400" />
                      <span className="font-medium">{a}</span>
                    </div>
                    <div className="opacity-75 text-right">{b}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-white/25 dark:border-white/10 bg-white/70 dark:bg-white/[0.08] backdrop-blur p-4">
              <div className="text-xs uppercase tracking-wider opacity-70">Behind the scenes</div>
              <p className="mt-2 text-sm text-slate-800/85 dark:text-slate-100/80">
                Intake → normalization → routing → voice follow-up → CRM updates → analytics. Modular. Measurable.
              </p>
            </div>
          </div>
        </GlassCard>
      </div>
    </div>
  );
}

/* ---------------------------------------------
   SYSTEM REVIEW PAGE (Tally embed + Calendly backup)
--------------------------------------------- */
function SystemReviewPage({ onBack }: { onBack: () => void }) {
  return (
    <div className="mx-auto max-w-7xl px-6 pt-10 pb-10">
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <GhostPill onClick={onBack} icon={<ChevronLeft className="h-4 w-4" />}>
          Back
        </GhostPill>

        <div className="flex items-center gap-3">
          <a href={CALENDLY} target="_blank" rel="noreferrer" className="text-sm underline opacity-80 hover:opacity-100">
            Skip to Calendly
          </a>
          <MagneticButton onClick={() => window.open(CALENDLY, "_blank")} className="bg-black text-white dark:bg-white dark:text-black">
            Book on Calendly <ArrowRight className="h-4 w-4" />
          </MagneticButton>
        </div>
      </div>

      <div className="mt-6 grid lg:grid-cols-3 gap-6 items-start">
        <GlassCard className="lg:col-span-1 p-6">
          <div className="text-sm uppercase tracking-wider opacity-70">System Review</div>
          <h1 className="mt-2 text-3xl font-semibold leading-tight">Apply to work with Creo Novai</h1>
          <p className="mt-2 text-slate-800/85 dark:text-slate-100/80">
            Answer a few questions so we can diagnose leaks, prioritize ROI wins, and confirm fit.
          </p>

          <div className="mt-4 space-y-3 text-sm text-slate-800/85 dark:text-slate-100/80">
            <StepLine n="01" title="Submit application" copy="Takes ~2 minutes." />
            <StepLine n="02" title="We review" copy="We look for leverage + fit." />
            <StepLine n="03" title="Book the call" copy="Then you’ll schedule via Calendly." />
          </div>

          <div className="mt-5 rounded-2xl border border-white/25 dark:border-white/10 bg-white/70 dark:bg-white/[0.08] backdrop-blur p-4">
            <div className="text-xs uppercase tracking-wider opacity-70">Note</div>
            <div className="mt-2 text-sm text-slate-800/85 dark:text-slate-100/80">
              If the embed doesn’t load for any reason, use the Calendly link above.
            </div>
          </div>
        </GlassCard>

        <GlassCard className="lg:col-span-2 p-0 overflow-hidden">
          <div className="p-4 border-b border-white/25 dark:border-white/10 flex items-center justify-between">
            <div>
              <div className="text-sm font-semibold">Application</div>
              <div className="text-xs opacity-75">Secure embed</div>
            </div>
            <div className="inline-flex items-center gap-2 text-xs rounded-full border border-white/30 dark:border-white/12 bg-white/70 dark:bg-white/[0.08] px-3 py-1.5 backdrop-blur">
              <Lock className="h-3.5 w-3.5" />
              private
            </div>
          </div>

          <div className="relative w-full" style={{ height: "78vh" }}>
            <iframe
              title="Creo Novai System Review Application"
              className="absolute inset-0 w-full h-full"
              src={TALLY}
              frameBorder={0}
              marginHeight={0}
              marginWidth={0}
              allow="clipboard-write"
            />
          </div>
        </GlassCard>
      </div>
    </div>
  );
}

/* ---------------------------------------------
   DASHBOARD (blue left panel + tech HUD details)
--------------------------------------------- */
function DashboardPreview({ onReview, onDemo }: { onReview: () => void; onDemo: () => void }) {
  return (
    <div className="relative">
      <div className="grid lg:grid-cols-5 gap-6 items-stretch">
        {/* LEFT - make it blue */}
        <div className="lg:col-span-2">
          <GlassCard className="p-6 relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
              <div className="hud-grid absolute inset-0 opacity-50 dark:opacity-60" />
              <div
                className="absolute -top-24 -left-24 h-80 w-80 rounded-full blur-3xl opacity-60"
                style={{
                  background:
                    "radial-gradient(closest-side, rgba(56,189,248,0.42), rgba(56,189,248,0) 70%)",
                }}
              />
              <div
                className="absolute bottom-[-7rem] right-[-6rem] h-80 w-80 rounded-full blur-3xl opacity-50"
                style={{
                  background:
                    "radial-gradient(closest-side, rgba(99,102,241,0.35), rgba(99,102,241,0) 70%)",
                }}
              />
            </div>

            <div className="relative">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="text-xs uppercase tracking-wider opacity-70">Executive Dashboard</div>
                  <div className="mt-1 text-2xl font-semibold">System Status</div>
                  <div className="mt-2 text-sm text-slate-800/85 dark:text-slate-100/80">
                    A clean surface — with a high-powered engine underneath.
                  </div>
                </div>
                <div className="inline-flex items-center gap-2 text-xs rounded-full border border-white/30 dark:border-white/12 bg-white/70 dark:bg-white/[0.08] px-3 py-1.5 backdrop-blur">
                  <span className="inline-block h-2 w-2 rounded-full bg-sky-400 animate-pulse" />
                  Live
                </div>
              </div>

              <div className="mt-5 rounded-2xl border border-white/25 dark:border-white/10 bg-white/70 dark:bg-white/[0.08] backdrop-blur p-4">
                <div className="text-xs uppercase tracking-wider opacity-70">AI Assistant</div>
                <div className="mt-2 text-sm text-slate-800/85 dark:text-slate-100/80">
                  “Today I captured 14 inquiries, qualified 6, booked 3 calls, and sent follow-ups with summaries.”
                </div>
                <div className="mt-3">
                <Waveform slow blue text="Today I captured 14 inquiries, qualified 6, booked 3 calls, and sent follow-ups with summaries."
/>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  <TinyAction>View summaries</TinyAction>
                  <TinyAction>Approve follow-ups</TinyAction>
                  <TinyAction>Send recap</TinyAction>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap items-center gap-3">
                <MagneticButton onClick={onReview} className="bg-black text-white dark:bg-white dark:text-black">
                  Apply for a System Review <ArrowRight className="h-4 w-4" />
                </MagneticButton>
                <GhostPill onClick={onDemo} icon={<Play className="h-4 w-4" />}>
                  See demo narrative
                </GhostPill>
              </div>
            </div>
          </GlassCard>
        </div>

        {/* RIGHT */}
        <GlassCard className="lg:col-span-3 p-0 overflow-hidden">
          <div className="p-5 border-b border-white/25 dark:border-white/10 flex items-center justify-between">
            <div>
              <div className="text-sm font-semibold">Performance</div>
              <div className="text-xs opacity-75">Signals, outcomes, and throughput</div>
            </div>
            <div className="hidden sm:flex items-center gap-2 text-xs">
              <Badge>Intake</Badge>
              <Badge>Voice</Badge>
              <Badge>Routing</Badge>
              <Badge>Analytics</Badge>
            </div>
          </div>

          <div className="p-5 grid md:grid-cols-3 gap-4">
            <Metric label="New inquiries" value="18" />
            <Metric label="Booked value" value="$42.6k" />
            <Metric label="Calls handled" value="27" />

            <div className="md:col-span-2 rounded-2xl border border-white/25 dark:border-white/10 bg-white/70 dark:bg-white/[0.08] backdrop-blur p-4 relative overflow-hidden">
              <div className="hud-grid absolute inset-0 opacity-35 dark:opacity-50 pointer-events-none" />
              <div className="text-xs uppercase tracking-wider opacity-70 relative">Flow</div>
              <div className="mt-2 text-sm text-slate-800/85 dark:text-slate-100/80 relative">
                Demand moves through your system like current through veins — always tracked.
              </div>

            <div className="rounded-2xl border border-white/25 dark:border-white/10 bg-white/70 dark:bg-white/[0.08] backdrop-blur p-4">
              <div className="text-xs uppercase tracking-wider opacity-70">Top outcomes</div>
              <div className="mt-3 space-y-2 text-sm text-slate-900/80 dark:text-slate-100/80">
                {[
                  ["Qualified", "6"],
                  ["Booked", "3"],
                  ["Follow-up", "9"],
                  ["Closed-won", "1"],
                ].map(([k, v]) => (
                  <div key={k} className="flex items-center justify-between">
                    <span className="opacity-85">{k}</span>
                    <span className="font-semibold">{v}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="md:col-span-3 rounded-2xl border border-white/25 dark:border-white/10 bg-white/70 dark:bg-white/[0.08] backdrop-blur p-4">
              <div className="text-xs uppercase tracking-wider opacity-70">Recent summaries</div>
              <div className="mt-3 grid md:grid-cols-3 gap-3 text-sm">
                <SummaryCard title="Inbound call" copy="Qualified. Requested pricing + timeline. Sent recap + booking link." />
                <SummaryCard title="Form submission" copy="High intent. Routed to priority. Follow-up sequence started." />
                <SummaryCard title="DM inquiry" copy="Captured. Tagged. Auto-response sent. Awaiting reply." />
              </div>
            </div>
          </div>
          </div>
        </GlassCard>
      </div>
    </div>
  );
}

/* ---------------------------------------------
   GLOBAL STYLES + BACKGROUND (slower, readable dark mode)
--------------------------------------------- */
function GlobalStyles() {
  return (
    <style>{`
      :root {
        --x: 50vw;
        --y: 30vh;
      }

      .cursor-glow {
        pointer-events: none;
        position: fixed;
        inset: 0;
        z-index: 0;
        background: radial-gradient(600px 600px at var(--x) var(--y),
          rgba(56,189,248,0.14),
          rgba(99,102,241,0.10),
          transparent 60%);
        transition: opacity 220ms ease;
        opacity: 0.85;
        mix-blend-mode: soft-light;
      }
      .dark .cursor-glow {
        background: radial-gradient(680px 680px at var(--x) var(--y),
          rgba(56,189,248,0.18),
          rgba(167,139,250,0.10),
          transparent 60%);
        opacity: 0.9;
      }

      @keyframes marquee {
        0% { transform: translateX(0%); }
        100% { transform: translateX(-50%); }
      }

      @keyframes floaty {
        0% { transform: translate3d(0,0,0); }
        50% { transform: translate3d(0,-10px,0); }
        100% { transform: translate3d(0,0,0); }
      }

      @keyframes hue {
        0% { filter: hue-rotate(0deg) saturate(120%); }
        50% { filter: hue-rotate(140deg) saturate(135%); }
        100% { filter: hue-rotate(280deg) saturate(120%); }
      }

      @keyframes pan {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }

      .lava {
        background-size: 240% 240%;
        animation: pan 26s ease-in-out infinite, hue 40s linear infinite;
      }

      .floaty { animation: floaty 10s ease-in-out infinite; }
      .floaty2 { animation: floaty 14s ease-in-out infinite; }
      .floaty3 { animation: floaty 16s ease-in-out infinite; }

      .hud-grid {
        background-image:
          linear-gradient(to right, rgba(56,189,248,0.10) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(56,189,248,0.10) 1px, transparent 1px);
        background-size: 44px 44px;
        mask-image: radial-gradient(closest-side, rgba(0,0,0,0.8), transparent 80%);
      }
    `}</style>
  );
}

function LavaAura() {
  // Cursor glow
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      document.documentElement.style.setProperty("--x", `${e.clientX}px`);
      document.documentElement.style.setProperty("--y", `${e.clientY}px`);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  // Slight parallax depth
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const spx = useSpring(px, { stiffness: 80, damping: 20, mass: 0.8 });
  const spy = useSpring(py, { stiffness: 80, damping: 20, mass: 0.8 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      px.set((e.clientX - cx) * 0.015);
      py.set((e.clientY - cy) * 0.015);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [px, py]);

  // Animated nodes appearing briefly on load
  const nodes = useMemo(() => {
    const n = 18;
    return new Array(n).fill(0).map((_, i) => ({
      id: `n-${i}`,
      top: Math.random() * 90 + 5,
      left: Math.random() * 90 + 5,
      size: Math.random() * 6 + 3,
      delay: Math.random() * 0.9,
    }));
  }, []);
  const [showNodes, setShowNodes] = useState(true);
  useEffect(() => {
    const t = window.setTimeout(() => setShowNodes(false), 2800);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <>
      <div className="cursor-glow" />
      <motion.div style={{ x: spx, y: spy }} className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Lava blobs (slower, elegant) */}
        <div
          className="absolute -top-48 -left-48 h-[36rem] w-[36rem] rounded-full blur-3xl opacity-60 lava floaty"
          style={{
            background:
              "radial-gradient(closest-side, rgba(56,189,248,0.48), rgba(56,189,248,0) 70%), conic-gradient(from 0deg, rgba(56,189,248,0.40), rgba(99,102,241,0.34), rgba(167,139,250,0.30), rgba(56,189,248,0.40))",
          }}
        />
        <div
          className="absolute top-[8%] -right-52 h-[44rem] w-[44rem] rounded-full blur-3xl opacity-55 lava floaty2"
          style={{
            background:
              "radial-gradient(closest-side, rgba(167,139,250,0.38), rgba(167,139,250,0) 70%), conic-gradient(from 90deg, rgba(99,102,241,0.34), rgba(56,189,248,0.30), rgba(244,114,182,0.20), rgba(99,102,241,0.34))",
          }}
        />
        <div
          className="absolute -bottom-56 left-[18%] h-[40rem] w-[40rem] rounded-full blur-3xl opacity-50 lava floaty3"
          style={{
            background:
              "radial-gradient(closest-side, rgba(244,114,182,0.26), rgba(244,114,182,0) 70%), conic-gradient(from 210deg, rgba(56,189,248,0.30), rgba(244,114,182,0.22), rgba(167,139,250,0.28), rgba(56,189,248,0.30))",
          }}
        />

        {/* Nodes burst */}
        <AnimatePresence>
          {showNodes &&
            nodes.map((n) => (
              <motion.div
                key={n.id}
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: [0, 1, 0], scale: [0.6, 1.1, 0.9] }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.9, delay: n.delay, ease: "easeInOut" }}
                className="absolute rounded-full"
                style={{
                  top: `${n.top}%`,
                  left: `${n.left}%`,
                  width: n.size,
                  height: n.size,
                  background: "rgba(56,189,248,0.75)",
                  boxShadow: "0 0 18px rgba(56,189,248,0.45)",
                }}
              />
            ))}
        </AnimatePresence>
      </motion.div>
    </>
  );
}

/* ---------------------------------------------
   LOGO (flower-of-life rotating, north star fixed)
--------------------------------------------- */
function LogoMark({ small }: { small?: boolean }) {
  return (
    <motion.div
      className={[
        "relative rounded-full border border-white/35 dark:border-white/12",
        "bg-white/55 dark:bg-white/[0.06] backdrop-blur",
        "shadow-[0_18px_50px_rgba(0,0,0,0.10)] dark:shadow-[0_18px_55px_rgba(0,0,0,0.45)]",
        "transition",
        small ? "h-9 w-9" : "h-12 w-12",
      ].join(" ")}
      whileHover={{
        scale: 1.02,
        boxShadow: "0 0 0 1px rgba(56,189,248,0.30), 0 18px 55px rgba(56,189,248,0.18)",
      }}
    >
      <div className="absolute inset-0 rounded-full overflow-hidden">
        <LogoEmblem />
      </div>
    </motion.div>
  );
}

function LogoEmblem() {
  // Outer flower wheel rotates slowly; star stays fixed.
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <defs>
        <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="rgba(56,189,248,0.95)" />
          <stop offset="0.55" stopColor="rgba(99,102,241,0.85)" />
          <stop offset="1" stopColor="rgba(167,139,250,0.85)" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="1.2" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <motion.g
        filter="url(#glow)"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: "50px 50px" }}
        opacity={0.95}
      >
        {/* Flower-of-life style circles */}
        {flowerCircles().map((c, i) => (
          <circle
            key={i}
            cx={c.cx}
            cy={c.cy}
            r={c.r}
            fill="none"
            stroke="url(#g1)"
            strokeWidth="1.25"
            opacity={0.75}
          />
        ))}
        {/* Outer ring */}
        <circle cx="50" cy="50" r="44" fill="none" stroke="url(#g1)" strokeWidth="1.35" opacity="0.55" />
      </motion.g>

      {/* Center North Star (fixed, does not rotate) */}
      <g filter="url(#glow)">
        <path
          d={northStarPath()}
          fill="none"
          stroke="url(#g1)"
          strokeWidth="1.6"
          strokeLinejoin="round"
          opacity={0.95}
        />
      </g>
    </svg>
  );
}

function flowerCircles() {
  // 7-circle flower-of-life base + 6 ring circles
  const r = 16;
  const center = { x: 50, y: 50 };
  const pts = [
    center,
    { x: 50, y: 50 - r },
    { x: 50 + r * Math.sin(Math.PI / 3), y: 50 - r * Math.cos(Math.PI / 3) },
    { x: 50 + r * Math.sin(Math.PI / 3), y: 50 + r * Math.cos(Math.PI / 3) },
    { x: 50, y: 50 + r },
    { x: 50 - r * Math.sin(Math.PI / 3), y: 50 + r * Math.cos(Math.PI / 3) },
    { x: 50 - r * Math.sin(Math.PI / 3), y: 50 - r * Math.cos(Math.PI / 3) },
  ];

  // expand ring a bit for denser look
  const ringR = 26;
  const ringPts = new Array(6).fill(0).map((_, i) => {
    const a = (i * Math.PI) / 3;
    return { x: center.x + ringR * Math.cos(a), y: center.y + ringR * Math.sin(a) };
  });

  const circles = [...pts, ...ringPts].map((p) => ({ cx: p.x, cy: p.y, r }));
  return circles;
}

function northStarPath() {
  // A crisp 8-point star with inner geometry
  // Designed to feel like your reference: sharp points, symmetric, elegant.
  const cx = 50;
  const cy = 50;
  const R = 20; // outer
  const r = 8; // inner

  const pts: Array<{ x: number; y: number }> = [];
  for (let i = 0; i < 16; i++) {
    const ang = (-Math.PI / 2) + (i * Math.PI) / 8;
    const rad = i % 2 === 0 ? R : r;
    pts.push({ x: cx + rad * Math.cos(ang), y: cy + rad * Math.sin(ang) });
  }

  // polyline closed
  const d = pts.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x.toFixed(2)} ${p.y.toFixed(2)}`).join(" ") + " Z";

  // inner cross-lines (subtle)
  const inner = [
    `M ${cx} ${cy - 14} L ${cx} ${cy + 14}`,
    `M ${cx - 14} ${cy} L ${cx + 14} ${cy}`,
    `M ${cx - 10} ${cy - 10} L ${cx + 10} ${cy + 10}`,
    `M ${cx + 10} ${cy - 10} L ${cx - 10} ${cy + 10}`,
  ].join(" ");

  return `${d} ${inner}`;
}

/* ---------------------------------------------
   CTA BUTTONS
--------------------------------------------- */
function MagneticButton({
  children,
  onClick,
  className = "",
}: {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}) {
  const ref = useRef<HTMLButtonElement | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 240, damping: 22, mass: 0.7 });
  const sy = useSpring(y, { stiffness: 240, damping: 22, mass: 0.7 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const dx = e.clientX - (r.left + r.width / 2);
      const dy = e.clientY - (r.top + r.height / 2);
      x.set(dx * 0.14);
      y.set(dy * 0.14);
    };
    const onLeave = () => {
      x.set(0);
      y.set(0);
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [x, y]);

  return (
    <motion.button
      ref={ref}
      style={{ x: sx, y: sy }}
      onClick={onClick}
      className={
        "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 font-medium shadow-lg hover:shadow-xl transition " +
        className
      }
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
    >
      {children}
    </motion.button>
  );
}

function GhostPill({
  children,
  onClick,
  icon,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  icon?: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className="inline-flex items-center gap-2 rounded-full border border-white/35 dark:border-white/12 bg-white/70 dark:bg-white/[0.08] backdrop-blur px-4 py-2 text-sm shadow-sm hover:shadow transition"
    >
      {icon}
      {children}
    </button>
  );
}

/* ---------------------------------------------
   CARDS (more translucent in dark mode + readable)
--------------------------------------------- */
function GlassCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={[
        "rounded-3xl border border-white/30 dark:border-white/10",
        "bg-white/60 dark:bg-white/[0.06] backdrop-blur-xl",
        "shadow-[0_18px_55px_rgba(0,0,0,0.10)] dark:shadow-[0_18px_55px_rgba(0,0,0,0.45)]",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}

/* ---------------------------------------------
   SMALL UI
--------------------------------------------- */
function MarqueeLine() {
  const text =
    "SELECTIVE ENGAGEMENTS • SYSTEMS THAT CONVERT • CALLS CAPTURED • SPEED-TO-LEAD • CLEAN PIPELINES • EXECUTIVE VISIBILITY • ";
  return (
    <div className="relative z-10 border-y border-white/25 dark:border-white/10 bg-white/45 dark:bg-white/[0.05] backdrop-blur overflow-hidden">
      <div className="whitespace-nowrap flex">
        <div className="py-3 text-xs tracking-[0.35em] opacity-80 animate-[marquee_26s_linear_infinite]">
          {text.repeat(3)}
        </div>
        <div className="py-3 text-xs tracking-[0.35em] opacity-80 animate-[marquee_26s_linear_infinite]">
          {text.repeat(3)}
        </div>
      </div>
    </div>
  );
}

function Metric({ label, value, accent }: { label: string; value: string; accent?: "blue" }) {
  const glow =
    accent === "blue"
      ? "shadow-[0_0_0_1px_rgba(56,189,248,0.20),0_18px_55px_rgba(56,189,248,0.12)]"
      : "";
  return (
    <div className={`rounded-2xl border border-white/25 dark:border-white/10 bg-white/70 dark:bg-white/[0.08] backdrop-blur p-4 ${glow}`}>
      <div className="text-xs uppercase tracking-wider opacity-70">{label}</div>
      <div className="mt-2 text-3xl font-semibold">{value}</div>
    </div>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/25 dark:border-white/10 bg-white/70 dark:bg-white/[0.08] px-3 py-1 backdrop-blur">
      {children}
    </span>
  );
}

function TinyAction({ children }: { children: React.ReactNode }) {
  return (
    <button className="text-xs rounded-full border border-white/25 dark:border-white/10 bg-white/70 dark:bg-white/[0.08] px-3 py-1.5 backdrop-blur hover:shadow transition">
      {children}
    </button>
  );
}

function SummaryCard({ title, copy }: { title: string; copy: string }) {
  return (
    <div className="rounded-2xl border border-white/25 dark:border-white/10 bg-white/60 dark:bg-white/[0.06] backdrop-blur p-4">
      <div className="text-sm font-semibold">{title}</div>
      <div className="mt-1 text-sm text-slate-800/85 dark:text-slate-100/80">{copy}</div>
    </div>
  );
}

/* ---------------------------------------------
   VISUALS
--------------------------------------------- */
function Waveform({
  slow,
  blue,
  text,
}: {
  slow?: boolean;
  blue?: boolean;
  text?: string;
}) {
  const say =
    text ??
    "Today I captured 14 inquiries, qualified 6, booked 3 calls, and sent follow-ups with summaries.";

  // fewer, chunkier bars feels more like the ChatGPT call capsule
  const bars = useMemo(() => new Array(16).fill(0).map((_, i) => i), []);
  const duration = slow ? 6.4 : 5.0;

  const gradient = blue
    ? "linear-gradient(90deg, rgba(56,189,248,0.85), rgba(99,102,241,0.78), rgba(167,139,250,0.70))"
    : "linear-gradient(90deg, rgba(255,106,61,0.80), rgba(255,184,77,0.72), rgba(244,114,182,0.62))";

  // Build a “speech envelope” from the sentence:
  const frames = useMemo(() => {
    const tokens = say
      .replace(/\s+/g, " ")
      .trim()
      .split(/(\,|\.)|\s+/)
      .filter((t) => t && t.trim().length);

    const segments: Array<{ energy: number; len: number }> = [];
    const clamp = (n: number, a: number, b: number) => Math.max(a, Math.min(b, n));

    const wordEnergy = (w: string) => {
      let h = 0;
      for (let i = 0; i < w.length; i++) h = (h * 31 + w.charCodeAt(i)) >>> 0;
      const base = 0.55 + ((h % 100) / 100) * 0.45; // 0.55..1.0
      const emph =
        /(\d)/.test(w) || /(captured|qualified|booked|follow)/i.test(w) ? 1.15 : 1.0;
      return clamp(base * emph, 0.35, 1.25);
    };

    tokens.forEach((t) => {
      const tok = t.trim();
      if (tok === ",") return segments.push({ energy: 0.08, len: 6 }); // pause
      if (tok === ".") return segments.push({ energy: 0.05, len: 12 }); // longer pause
      segments.push({ energy: wordEnergy(tok), len: 10 }); // word burst
    });

    const env: number[] = [];
    segments.forEach((s) => {
      for (let i = 0; i < s.len; i++) {
        const tt = s.len <= 1 ? 1 : i / (s.len - 1);
        const shape = Math.sin(Math.PI * tt); // 0→1→0
        env.push(s.energy * (0.25 + 0.75 * shape));
      }
    });

    const max = Math.max(...env, 1);
    return env.map((v) => v / max); // 0..1
  }, [say]);

  const heightsForBar = (barIndex: number) => {
    const baseMin = 4;
    const baseMax = 20;

    const keyframes: number[] = [];
    for (let i = 0; i < frames.length; i++) {
      const idx = (i + barIndex * 2) % frames.length;
      const a = frames[idx];

      // subtle deterministic wobble (keeps it alive but still “speech-like”)
      const wobble = 0.92 + (((barIndex * 19 + i * 11) % 10) / 50); // ~0.92..1.12
      keyframes.push(baseMin + (baseMax - baseMin) * a * wobble);
    }
    return keyframes;
  };

  return (
    <div className="relative">
      {/* Capsule */}
      <div className="relative h-10 rounded-full overflow-hidden border border-white/25 dark:border-white/10 bg-white/55 dark:bg-white/[0.06] backdrop-blur">
        {/* Soft animated glow blob (ChatGPT-ish vibe) */}
        <motion.div
          className="absolute inset-0 opacity-70"
          style={{
            background: gradient,
            filter: "blur(14px)",
          }}
          animate={{ x: ["-25%", "25%", "-25%"] }}
          transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Inner dim layer so text around stays readable */}
        <div className="absolute inset-0 bg-white/30 dark:bg-black/25" />

        {/* Bars */}
        <div className="relative h-full px-3 flex items-center gap-1.5">
          {bars.map((i) => (
            <motion.div
              key={i}
              className="w-[3px] rounded-full"
              style={{
                background: "rgba(255,255,255,0.75)",
                opacity: 0.9,
              }}
              animate={{ height: heightsForBar(i) }}
              transition={{
                duration,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}

          {/* Center “dot” pulse */}
          <motion.div
            className="ml-1 h-2.5 w-2.5 rounded-full"
            style={{
              background: "rgba(255,255,255,0.8)",
              boxShadow: "0 0 18px rgba(255,255,255,0.25)",
            }}
            animate={{ scale: [1, 1.22, 1] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </div>
    </div>
  );
}

/* ---------------------------------------------
   COPY BLOCKS
--------------------------------------------- */
function MiniOutcome({ icon, title, copy }: { icon: React.ReactNode; title: string; copy: string }) {
  return (
    <div className="rounded-2xl border border-white/25 dark:border-white/10 bg-white/70 dark:bg-white/[0.08] backdrop-blur p-4">
      <div className="flex items-center gap-2 text-sm font-semibold">
        {icon}
        {title}
      </div>
      <div className="mt-1 text-sm text-slate-800/85 dark:text-slate-100/80">{copy}</div>
    </div>
  );
}

function OfferCard({ icon, title, copy }: { icon: React.ReactNode; title: string; copy: string }) {
  return (
    <div className="rounded-2xl border border-white/25 dark:border-white/10 bg-white/60 dark:bg-white/[0.06] backdrop-blur p-4">
      <div className="flex items-start gap-3">
        <div className="mt-0.5 opacity-90">{icon}</div>
        <div>
          <div className="text-sm font-semibold">{title}</div>
          <div className="mt-1 text-sm text-slate-800/85 dark:text-slate-100/80">{copy}</div>
        </div>
      </div>
    </div>
  );
}

function StepLine({ n, title, copy }: { n: string; title: string; copy: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/25 dark:border-white/10 bg-white/70 dark:bg-white/[0.08] text-xs font-semibold">
        {n}
      </div>
      <div>
        <div className="font-semibold">{title}</div>
        <div className="text-sm text-slate-800/85 dark:text-slate-100/80">{copy}</div>
      </div>
    </div>
  );
}

function SceneRow({ icon, title, copy }: { icon: React.ReactNode; title: string; copy: string }) {
  return (
    <div className="rounded-2xl border border-white/25 dark:border-white/10 bg-white/60 dark:bg-white/[0.06] backdrop-blur p-4">
      <div className="flex items-start gap-3">
        <div className="mt-0.5 opacity-90">{icon}</div>
        <div>
          <div className="font-semibold">{title}</div>
          <div className="text-sm text-slate-800/85 dark:text-slate-100/80 mt-1">{copy}</div>
        </div>
      </div>
    </div>
  );
}

function TestimonialCard({ quote, name, role }: { quote: string; name: string; role: string }) {
  return (
    <div className="rounded-3xl border border-white/25 dark:border-white/10 bg-white/60 dark:bg-white/[0.06] backdrop-blur p-6">
      <div className="flex items-center gap-1 opacity-80">
        {new Array(5).fill(0).map((_, i) => (
          <Star key={i} className="h-4 w-4" />
        ))}
      </div>
      <div className="mt-3 text-sm leading-relaxed text-slate-900/85 dark:text-slate-100/85">“{quote}”</div>
      <div className="mt-4 text-sm font-semibold">{name}</div>
      <div className="text-xs opacity-80">{role}</div>
    </div>
  );
}