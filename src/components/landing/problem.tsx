"use client";

import { motion } from "framer-motion";
import CountUp from "@/components/reactbits/count-up";
import ShinyText from "@/components/reactbits/shiny-text";

/* ------------------------------------------------------------------ */
/*  "Why JARVIS?" — dark stats-timeline section modelled on the        */
/*  reference: centered eyebrow + heading, two stat clusters up top    */
/*  (the travelling credit card parks in the open center between       */
/*  them), a full-bleed ticker-tape timeline of glowing green pills,   */
/*  and a third stat cluster hanging below the middle pill.            */
/* ------------------------------------------------------------------ */

function Connector({ up = false }: { up?: boolean }) {
  return (
    <div
      className={`flex flex-col items-center ${up ? "flex-col-reverse" : ""}`}
      aria-hidden="true"
    >
      <span className="h-9 w-px bg-gradient-to-b from-volt/60 to-volt/15" />
      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-volt shadow-[0_0_10px_rgba(184,241,77,0.9)]" />
    </div>
  );
}

function TickStrip({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`h-9 min-w-3 flex-1 rounded-[3px] bg-[repeating-linear-gradient(90deg,rgba(184,241,77,0.55)_0px,rgba(184,241,77,0.55)_3px,transparent_3px,transparent_11px)] ${className}`}
    />
  );
}

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay },
});

function Cluster({
  title,
  desc,
  children,
  delay = 0,
}: {
  title: string;
  desc: string;
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.div {...fade(delay)} className="mx-auto max-w-xs text-center">
      <h3 className="text-base font-bold text-white sm:text-lg">{title}</h3>
      <p className="mt-2.5 text-xs leading-relaxed text-zinc-400">{desc}</p>
      <div className="mt-4 font-display text-6xl font-medium tracking-tight text-volt [text-shadow:0_0_36px_rgba(184,241,77,0.35)] sm:text-7xl">
        {children}
      </div>
      <Connector />
    </motion.div>
  );
}

export default function Problem() {
  return (
    <section
      id="problem"
      className="relative flex min-h-[100svh] flex-col overflow-hidden bg-[#050505]"
    >
      {/* faint grid lines */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.028)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.028)_1px,transparent_1px)] bg-[size:76px_76px]"
      />
      {/* green ambience + accent diamonds */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/3 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-volt/[0.07] blur-[140px]"
      />
      <span aria-hidden="true" className="absolute right-[9%] top-[10%] h-3 w-3 rotate-45 border border-volt/25" />
      <span aria-hidden="true" className="absolute left-[6%] top-[46%] h-4 w-4 rotate-45 border border-volt/15" />
      <span aria-hidden="true" className="absolute bottom-[24%] left-[14%] h-2.5 w-2.5 rotate-45 bg-volt/10" />
      <span aria-hidden="true" className="absolute bottom-[16%] right-[7%] h-5 w-5 rotate-45 border border-volt/10" />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col px-5 pt-12 sm:px-8 sm:pt-14">
        {/* header */}
        <div className="text-center">
          <motion.p {...fade()} className="text-xs font-semibold tracking-[0.3em]">
            <ShinyText
              text="· WHY JARVIS?"
              className="font-semibold text-volt/90"
              speed={4}
            />
          </motion.p>
          <motion.h2
            {...fade(0.06)}
            className="mx-auto mt-3 max-w-3xl font-display text-3xl font-semibold tracking-tight text-white sm:text-5xl"
          >
            Three things cost households money. None needs a prediction to fix.
          </motion.h2>
        </div>

        {/* two stat clusters + open center slot for the travelling card */}
        <div className="grid flex-1 items-center gap-8 py-6 lg:grid-cols-[1fr_480px_1fr] lg:gap-4">
          <Cluster
            title="Scam calls you can rehearse before they happen"
            desc="Fake bank-KYC calls, 'digital arrest' video calls, WhatsApp guaranteed-return groups. They work because victims are rushed and alone — so practise them, out loud, in English or हिन्दी."
          >
            <CountUp to={3} duration={2.2} />
          </Cluster>

          {/* open slot — the credit card parks here while this section is in view */}
          <div className="relative hidden min-h-[260px] lg:block" aria-hidden="true" />

          <Cluster
            title="Of 20 years' growth eaten by a 2% fee"
            desc="A 'small' expense ratio compounds into a third of your corpus — and two funds quietly holding the same shares doubles nothing but cost."
            delay={0.1}
          >
            <CountUp to={33} suffix="%" duration={2.2} />
          </Cluster>
        </div>
      </div>

      {/* full-bleed ticker-tape timeline */}
      <motion.div
        {...fade(0.15)}
        className="relative z-10 flex items-center gap-3 sm:gap-5"
      >
        <TickStrip />
        <div className="whitespace-nowrap rounded-2xl border border-volt/30 bg-gradient-to-b from-volt/15 to-volt/[0.04] px-5 py-2.5 text-lg font-bold text-white shadow-[0_0_34px_-10px_rgba(184,241,77,0.6)] sm:px-8 sm:py-3 sm:text-2xl">
          3 scams
        </div>
        <TickStrip />
        <div className="whitespace-nowrap rounded-2xl border border-volt/30 bg-gradient-to-b from-volt/15 to-volt/[0.04] px-5 py-2.5 text-lg font-bold text-white shadow-[0_0_34px_-10px_rgba(184,241,77,0.6)] sm:px-8 sm:py-3 sm:text-2xl">
          33%
        </div>
        <TickStrip />
        <div className="whitespace-nowrap rounded-2xl border border-volt/30 bg-gradient-to-b from-volt/15 to-volt/[0.04] px-5 py-2.5 text-lg font-bold text-white shadow-[0_0_34px_-10px_rgba(184,241,77,0.6)] sm:px-8 sm:py-3 sm:text-2xl">
          0 months
        </div>
        <TickStrip />
      </motion.div>

      {/* third cluster hanging below the middle pill */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-12 pt-5 sm:px-8 sm:pb-14">
        <motion.div {...fade(0.22)} className="mx-auto max-w-md text-center">
          <Connector up />
          <h3 className="mt-3 text-base font-bold text-white sm:text-lg">
            Panic selling, with no safety net
          </h3>
          <p className="mt-2.5 text-xs leading-relaxed text-zinc-400">
            Selling at the bottom of a crash, with no idea how many months of
            cash you actually have. JARVIS replays the crash on your own
            holdings and measures your runway in months.
          </p>
          <div className="mt-4 font-display text-6xl font-medium tracking-tight text-volt [text-shadow:0_0_36px_rgba(184,241,77,0.35)] sm:text-7xl">
            0 months
          </div>
        </motion.div>
      </div>
    </section>
  );
}
