"use client";

import { motion } from "framer-motion";
import {
  BadgeCheck,
  CircleAlert,
  FileText,
  Gauge,
  ScrollText,
  ArrowUpRight,
} from "lucide-react";
import TiltedCard from "@/components/reactbits/tilted-card";
import ShinyText from "@/components/reactbits/shiny-text";

const PROMISES = [
  {
    icon: FileText,
    title: "The model never writes a number",
    desc: "Figures come from calculators you can read; the text comes from templates. The model may only pick which tool to run.",
  },
  {
    icon: Gauge,
    title: "Unsure means ask, not guess",
    desc: "Below the confidence threshold, JARVIS offers three suggestions instead of inventing an answer.",
  },
  {
    icon: BadgeCheck,
    title: "Every number is a door",
    desc: "Tap any figure to see the arithmetic behind it, in plain English or हिन्दी — no data-science degree required.",
  },
  {
    icon: ScrollText,
    title: "Hash-chained and testable",
    desc: "A tamper-evident audit ledger, a time machine, and 385 passing tests with honest numbers published.",
  },
];

const POSITIVES = [
  "Expense ratios below category median on 6 of 8 holdings",
  "No duplicate shares across your two equity funds",
  "Emergency fund covers 7 months of expenses",
  "Tax shield found ₹18,400 of harvestable losses",
];

const RISKS = [
  "2008 crash replay: −34% drawdown on current mix",
  "One fund charges 1.8% — ₹2.1L drag over 20 years",
];

function ScoreRing() {
  const r = 58;
  const c = 2 * Math.PI * r;
  return (
    <div className="relative h-36 w-36 shrink-0">
      <svg viewBox="0 0 140 140" className="h-full w-full -rotate-90">
        <circle
          cx="70"
          cy="70"
          r={r}
          fill="none"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="10"
        />
        <motion.circle
          cx="70"
          cy="70"
          r={r}
          fill="none"
          stroke="#b8f14d"
          strokeWidth="10"
          strokeLinecap="round"
          strokeDasharray={c}
          initial={{ strokeDashoffset: c }}
          whileInView={{ strokeDashoffset: c * (1 - 0.86) }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <p className="text-4xl font-black tracking-tight text-white">86</p>
        <p className="text-[10px] font-semibold tracking-[0.18em] text-zinc-500">
          / 100
        </p>
      </div>
    </div>
  );
}

function DashboardMock() {
  return (
    <div className="relative">
      {/* orange ambience behind panel */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-8 rounded-[48px] bg-orange-500/20 blur-[70px]"
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative"
      >
        <TiltedCard
          rotateAmplitude={5}
          glareOpacity={0.1}
          className="overflow-hidden rounded-3xl"
        >
          <div className="relative overflow-hidden rounded-3xl border border-white/12 bg-[#141619] shadow-2xl shadow-black/70">
        {/* window chrome */}
        <div className="flex items-center gap-2 border-b border-white/8 px-5 py-3.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          <p className="ml-3 text-xs font-medium text-zinc-500">
            JARVIS · Portfolio X-Ray
          </p>
          <span className="ml-auto rounded-full bg-volt/15 px-2.5 py-1 text-[10px] font-bold text-volt">
            GLASS BOX
          </span>
        </div>

        <div className="p-5 sm:p-6">
          {/* borrower header */}
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
            <ScoreRing />
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2.5">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-volt to-volt-deep text-xs font-bold text-[#101502]">
                  RP
                </span>
                <div>
                  <p className="text-sm font-bold text-white">Retirement Portfolio</p>
                  <p className="text-[11px] text-zinc-500">
                    8 stocks · 2 funds · ₹18,40,000
                  </p>
                </div>
              </div>
              <div className="mt-3.5 flex flex-wrap gap-1.5">
                {["Fees checked", "Overlap scanned", "Crash replayed"].map(
                  (chip) => (
                    <span
                      key={chip}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[10px] font-medium text-zinc-300"
                    >
                      {chip}
                    </span>
                  ),
                )}
                <span className="rounded-full bg-volt px-2.5 py-1 text-[10px] font-bold text-[#101502]">
                  HEALTHY
                </span>
              </div>
            </div>
          </div>

          {/* signals */}
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
              <p className="text-[10px] font-bold tracking-[0.2em] text-volt">
                WHAT IS WORKING
              </p>
              <ul className="mt-3 space-y-2.5">
                {POSITIVES.map((s) => (
                  <li key={s} className="flex items-start gap-2">
                    <BadgeCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-volt" />
                    <span className="text-[11px] leading-relaxed text-zinc-300">
                      {s}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
              <p className="text-[10px] font-bold tracking-[0.2em] text-amber-400">
                WHAT TO FIX
              </p>
              <ul className="mt-3 space-y-2.5">
                {RISKS.map((s) => (
                  <li key={s} className="flex items-start gap-2">
                    <CircleAlert className="mt-0.5 h-3.5 w-3.5 shrink-0 text-amber-400" />
                    <span className="text-[11px] leading-relaxed text-zinc-300">
                      {s}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 rounded-xl bg-white/[0.04] px-3 py-2 text-[10px] leading-relaxed text-zinc-400">
                Why this matters: a 1.8% fee is not small. Over 20 years it
                compounds into roughly a third of your growth.
              </p>
            </div>
          </div>

          {/* recommendation footer */}
          <div className="mt-5 flex flex-col gap-3 rounded-2xl border border-volt/20 bg-volt/[0.06] p-4 sm:flex-row sm:items-center">
            <div className="flex-1">
              <p className="text-[10px] font-bold tracking-[0.2em] text-volt">
                BIGGEST WIN AVAILABLE · COMPUTED, NOT GUESSED
              </p>
              <p className="mt-1 text-sm font-bold text-white">
                Switch one fund · save ₹2,10,000 over 20 years
              </p>
              <p className="mt-0.5 text-[11px] text-zinc-400">
                Same exposure, lower expense ratio — the arithmetic is on the
                next screen.
              </p>
            </div>
            <button className="group flex items-center justify-center gap-1.5 rounded-full bg-volt px-5 py-2.5 text-xs font-bold text-[#101502] transition hover:bg-volt-soft">
              Show the arithmetic
              <ArrowUpRight className="h-3.5 w-3.5 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </button>
          </div>
        </div>
          </div>
        </TiltedCard>
      </motion.div>
    </div>
  );
}

/* ------------------------------------------------------------------ */

export default function Explainable() {
  return (
    <section
      id="explainable"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-coal"
    >
      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:gap-12 xl:grid-cols-[minmax(0,1fr)_300px_minmax(0,1.15fr)] xl:gap-8">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-bold tracking-[0.3em]"
          >
            <ShinyText
              text="GLASS-BOX BY DESIGN"
              className="font-bold text-orange-400/85"
              speed={4}
            />
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.06 }}
            className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl"
          >
            Every number
            <br />
            comes with{" "}
            <span className="bg-gradient-to-b from-orange-300 to-orange-600 bg-clip-text text-transparent">
              its arithmetic.
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mt-5 text-sm leading-relaxed text-zinc-400 sm:text-base"
          >
            JARVIS never asks you to trust the algorithm. The risk engine does
            not import a language model, and the model is never allowed to
            produce a figure — it may only pick which calculator to run. Tap any
            number and the working opens up. If you can&apos;t see why, it
            doesn&apos;t ship.
          </motion.p>

          <div className="mt-7 grid grid-cols-2 gap-x-4 gap-y-5">
            {PROMISES.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.06 }}
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-orange-500/25 bg-orange-500/10 text-orange-400">
                  <p.icon className="h-4 w-4" />
                </div>
                <h3 className="mt-2.5 text-[13px] font-bold leading-snug text-white">{p.title}</h3>
                <p className="mt-1 text-[11px] leading-relaxed text-zinc-400">
                  {p.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* center: designed parking slot for the travelling card (xl+) */}
        <div
          className="relative hidden min-h-[420px] xl:block"
          aria-hidden="true"
        >
          <div className="absolute inset-x-6 inset-y-24 rounded-full bg-volt/[0.07] blur-[70px]" />
        </div>

        <DashboardMock />
      </div>
    </section>
  );
}
