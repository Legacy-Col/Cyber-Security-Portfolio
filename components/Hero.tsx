"use client";

import Link from "next/link";
import { motion, useReducedMotion, Variants } from "framer-motion";

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const container: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.12,
        delayChildren: shouldReduceMotion ? 0 : 0.1,
      },
    },
  };

  const item: Variants = {
    hidden: shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: shouldReduceMotion ? 0 : 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="mx-auto max-w-5xl px-6 py-20 sm:py-28"
    >
      <motion.p variants={item} className="mb-4 font-mono text-sm text-amber">
        Junior SOC Analyst — Lagos, Nigeria
      </motion.p>
      <motion.h1
        variants={item}
        className="max-w-2xl text-4xl font-semibold leading-tight text-ink sm:text-5xl"
      >
        I find what&apos;s hiding in the logs before it becomes the incident
        report.
      </motion.h1>
      <motion.p variants={item} className="mt-6 max-w-content text-lg text-muted">
        I build detection labs, write intrusion signatures, and track threat
        actors — then document the whole process so the reasoning is as
        visible as the result.
      </motion.p>
      <motion.div variants={item} className="mt-8 flex gap-4">
        <Link
          href="/projects"
          className="rounded-sm bg-signal px-5 py-2.5 text-sm font-medium text-bg transition-opacity hover:opacity-90"
        >
          View projects
        </Link>
        <Link
          href="/#contact"
          className="rounded-sm border border-border px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-panel"
        >
          Get in touch
        </Link>
      </motion.div>
    </motion.div>
  );
}