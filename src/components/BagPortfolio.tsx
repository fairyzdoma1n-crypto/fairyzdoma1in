"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

type Project = {
  id: string;
  img: string;
  alt: string;
  title: string;
  blurb: string;
  /* Where the object peeks out of the bag in the packed state. */
  packed: { left: string; top: string; width: number; rotate: number };
};

const projects: Project[] = [
  {
    id: "star",
    img: "/assets/obj-star.png",
    alt: "a chrome star charm",
    title: "project one",
    blurb: "info + details coming soon — this star is holding its spot.",
    packed: { left: "18%", top: "-13%", width: 96, rotate: -14 },
  },
  {
    id: "flower",
    img: "/assets/obj-flower.png",
    alt: "a pressed pink flower",
    title: "project two",
    blurb: "info + details coming soon — this flower is holding its spot.",
    packed: { left: "42%", top: "-17%", width: 110, rotate: 6 },
  },
  {
    id: "clapper",
    img: "/assets/obj-clapper.png",
    alt: "a hand-drawn film clapperboard sticker",
    title: "project three",
    blurb: "info + details coming soon — this clapper is holding its spot.",
    packed: { left: "64%", top: "-11%", width: 92, rotate: 12 },
  },
];

export function BagPortfolio() {
  const [unpacked, setUnpacked] = useState(false);
  const reducedMotion = useReducedMotion();

  const spring = reducedMotion
    ? { duration: 0 }
    : { type: "spring" as const, stiffness: 110, damping: 15, mass: 0.9 };

  return (
    <div className="mt-4">
      {/* the hint line swaps with the state */}
      <p
        aria-live="polite"
        className="text-center font-mono text-[11px] uppercase tracking-[0.25em] text-mocha"
      >
        {unpacked
          ? "click the bag to pack it all back"
          : "click the bag to unpack the portfolio ✧"}
      </p>

      {unpacked ? (
        /* ── unpacked: bag slides left, projects form a grid on the right ── */
        <div className="mt-10 flex flex-col items-center gap-10 md:flex-row md:items-center md:gap-8">
          <motion.button
            layoutId="bag"
            transition={spring}
            onClick={() => setUnpacked(false)}
            aria-label="pack the projects back into the bag"
            className="w-60 shrink-0 cursor-pointer sm:w-72 md:w-80"
          >
            <Image
              src="/assets/bag.png"
              alt="a silver handbag, now empty"
              width={800}
              height={400}
              priority
              className="h-auto w-full"
            />
          </motion.button>

          <div className="grid flex-1 grid-cols-3 gap-4 sm:gap-8">
            {projects.map((p, i) => (
              <div key={p.id} className="flex flex-col items-center text-center">
                <motion.div
                  layoutId={p.id}
                  transition={
                    reducedMotion ? { duration: 0 } : { ...spring, delay: i * 0.07 }
                  }
                  className="w-24 sm:w-32"
                >
                  <Image
                    src={p.img}
                    alt={p.alt}
                    width={400}
                    height={400}
                    className="h-auto w-full drop-shadow-[2px_4px_6px_rgba(34,32,29,0.18)]"
                  />
                </motion.div>
                <AnimatePresence>
                  <motion.div
                    initial={reducedMotion ? false : { opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: reducedMotion ? 0 : 0.35 + i * 0.07 }}
                  >
                    <h3 className="font-nav mt-4 text-xl lowercase">{p.title}</h3>
                    <p className="font-body mt-1 max-w-[24ch] text-sm leading-relaxed text-ink/70">
                      {p.blurb}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      ) : (
        /* ── packed: objects peeking out of the bag ── */
        <div className="mt-16 flex justify-center">
          <button
            onClick={() => setUnpacked(true)}
            aria-label="unpack the bag to see the portfolio"
            className="relative w-72 cursor-pointer sm:w-96"
          >
            {projects.map((p) => (
              <motion.div
                key={p.id}
                layoutId={p.id}
                transition={spring}
                style={{
                  left: p.packed.left,
                  top: p.packed.top,
                  width: p.packed.width,
                  rotate: p.packed.rotate,
                }}
                className="absolute z-0"
              >
                <Image
                  src={p.img}
                  alt={p.alt}
                  width={400}
                  height={400}
                  className="h-auto w-full"
                />
              </motion.div>
            ))}
            <motion.div layoutId="bag" transition={spring} className="relative z-10">
              <Image
                src="/assets/bag.png"
                alt="a silver handbag stuffed with treasures"
                width={800}
                height={400}
                priority
                className="h-auto w-full"
              />
            </motion.div>
          </button>
        </div>
      )}
    </div>
  );
}
