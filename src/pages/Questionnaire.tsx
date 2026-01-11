import { useEffect } from "react";
import { motion } from "framer-motion";

export default function Questionnaire() {
  // Load Tally widget
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "YOUR_SCRIPT_URL";
    script.async = true;
    document.body.appendChild(script);
  
    return () => {
      script.remove();
    };
  }, []);

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-white dark:bg-black text-slate-900 dark:text-white">
      {/* Animated aura background */}
      <motion.div
        className="absolute inset-0 -z-10 blur-3xl opacity-60"
        animate={{
          background: [
            "radial-gradient(circle at 20% 20%, #ffb199, transparent 50%), radial-gradient(circle at 80% 80%, #7ee8fa, transparent 50%)",
            "radial-gradient(circle at 30% 70%, #fbd786, transparent 50%), radial-gradient(circle at 80% 30%, #c6ffdd, transparent 50%)",
            "radial-gradient(circle at 50% 50%, #ff9a9e, transparent 50%), radial-gradient(circle at 80% 80%, #fad0c4, transparent 50%)",
          ],
        }}
        transition={{ duration: 12, repeat: Infinity, repeatType: "mirror" }}
      />

      {/* Intro section */}
      <div className="max-w-3xl mx-auto pt-28 pb-16 px-6 text-center space-y-6">
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-sky-500 via-pink-400 to-amber-400 bg-clip-text text-transparent"
        >
          Let’s Design Your AI System
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-lg text-slate-600 dark:text-slate-300 max-w-xl mx-auto"
        >
          Answer a few questions so we can customize your automation plan before
          your 30-minute system review.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => {
            const el = document.getElementById("tally-frame");
            el?.scrollIntoView({ behavior: "smooth" });
          }}
          className="relative inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-orange-500 via-sky-500 to-emerald-500 text-white font-semibold shadow-lg hover:shadow-xl transition"
        >
          Start Now
        </motion.button>
      </div>

      {/* Embedded Tally form */}
      <motion.div
        id="tally-frame"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="relative w-full h-[90vh]"
      >
        <iframe
          data-tally-src="https://tally.so/r/A72YoB?transparentBackground=1"
          className="absolute inset-0 w-full h-full border-0 rounded-t-3xl shadow-2xl"
          title="Creo Novai System Questionnaire"
        />
      </motion.div>
    </div>
  );
}