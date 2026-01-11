import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import React from "react";
import { Activity, Brain, FileText, PhoneCall, ArrowRight } from "lucide-react";

const QUESTIONNAIRE = "https://tally.so/r/A72YoB";

export default function Demo() {
  const logs = [
    "Inbound signal detected",
    "Caller intent analyzed",
    "Lead classified: High intent",
    "Summary generated",
    "Follow-up action queued",
    "CRM updated",
  ];

  const [logIndex, setLogIndex] = useState(0);

  useEffect(() => {
    const i = setInterval(() => {
      setLogIndex((prev) => (prev + 1) % logs.length);
    }, 1600);
    return () => clearInterval(i);
  }, [logs.length]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white">
      <BackgroundFlow />

      <header className="relative z-10 max-w-6xl mx-auto px-6 py-10">
        <h1 className="text-4xl md:text-5xl font-semibold">
          Live System Demonstration
        </h1>
        <p className="mt-4 text-slate-300 max-w-2xl">
          You’re viewing a simulated instance of a Creo Novai intelligence
          system — the type of activity your business would see in real time.
        </p>
      </header>

      <main className="relative z-10 max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8 pb-28">
        <div className="rounded-3xl border border-white/20 bg-white/5 backdrop-blur-xl p-6">
          <Agent />
        </div>

        <div className="md:col-span-2 rounded-3xl border border-white/20 bg-white/5 backdrop-blur-xl p-6">
          <div className="flex items-center gap-2 text-sm opacity-70 mb-4">
            <Activity size={16} />
            Live System Activity
          </div>

          <div className="font-mono text-sm space-y-2">
            {logs.slice(0, logIndex + 1).map((log, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
              >
                • {log}
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <section className="relative z-10 text-center pb-24 px-6">
        <h2 className="text-3xl font-semibold">
          Want a system like this running for you?
        </h2>
        <p className="mt-4 text-slate-300">
          Start with a short intake so we can design the right architecture.
        </p>

        <motion.a
          href={QUESTIONNAIRE}
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.97 }}
          className="inline-flex items-center gap-2 mt-8 px-8 py-4 rounded-full bg-gradient-to-r from-amber-400 via-sky-400 to-emerald-400 text-black font-semibold shadow-xl"
        >
          Begin System Design <ArrowRight size={16} />
        </motion.a>
      </section>
    </div>
  );
}

function Agent() {
  const thoughts = [
    "Listening…",
    "Analyzing intent…",
    "Generating response…",
    "Decision logged.",
  ];
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % thoughts.length), 2200);
    return () => clearInterval(t);
  }, [thoughts.length]);

  return (
    <div>
      <div className="flex items-center gap-3 mb-4">
        <motion.div
          animate={{ scale: [1, 1.12, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="h-10 w-10 rounded-full bg-gradient-to-tr from-sky-400 to-emerald-400 shadow-lg"
        />
        <div className="text-sm uppercase tracking-[0.35em] opacity-70">
          Executive AI
        </div>
      </div>

      <motion.div
        key={thoughts[i]}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="text-slate-200"
      >
        {thoughts[i]}
      </motion.div>

      <div className="mt-6 space-y-3 text-sm opacity-80">
        <Row icon={<PhoneCall size={14} />} text="Calls handled automatically" />
        <Row icon={<FileText size={14} />} text="Summaries generated instantly" />
        <Row icon={<Brain size={14} />} text="Decisions logged to memory" />
      </div>
    </div>
  );
}

function Row({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-2 text-slate-300">
      {icon}
      {text}
    </div>
  );
}

function BackgroundFlow() {
  return (
    <motion.div
      className="absolute inset-0"
      animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
      transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
      style={{
        background:
          "radial-gradient(circle at 20% 20%, rgba(255,140,60,0.22), transparent 45%), radial-gradient(circle at 80% 70%, rgba(80,160,255,0.22), transparent 45%), radial-gradient(circle at 50% 55%, rgba(100,255,200,0.18), transparent 55%)",
        backgroundSize: "200% 200%",
      }}
    />
  );
}