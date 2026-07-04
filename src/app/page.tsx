import Link from "next/link";
import { ArchiveCard } from "@/components/ArchiveCard";
import { PaperGrain } from "@/components/PaperGrain";
import {
  Bow,
  PressedFlower,
  Sparkle,
  Squiggle,
  Starburst,
} from "@/components/doodles";

const folderTabs = [
  { label: "index", href: "/", active: true },
  { label: "projects", href: "/projects", active: false },
  { label: "guestbook", href: "/guestbook", active: false },
];

const collection = [
  {
    href: "/projects",
    catNo: "001",
    title: "projects",
    blurb: "things i've built — code, chaos, and lessons learned the hard way.",
    tape: "rose-dust",
    tilt: -1.6,
  },
  {
    href: "/about",
    catNo: "002",
    title: "about the archivist",
    blurb: "contains one (1) incoming computer science student, catalogued honestly.",
    tape: "stone",
    tilt: 1.2,
  },
  {
    href: "/bag",
    catNo: "003",
    title: "what's in my bag",
    blurb: "a vogue-style inventory of my daily carry, annotated item by item.",
    tape: "mocha",
    tilt: -0.8,
  },
  {
    href: "/lookbook",
    catNo: "004",
    title: "the lookbook",
    blurb: "dress me. every look unlocks a different chapter of the skillset.",
    tape: "stone",
    tilt: 1.8,
  },
  {
    href: "/doodle",
    catNo: "005",
    title: "doodle board",
    blurb: "leave a drawing in the margins. i keep every single one.",
    tape: "rose-dust",
    tilt: -1.2,
  },
  {
    href: "/guestbook",
    catNo: "006",
    title: "guestbook",
    blurb: "sign the archive — your entry gets filed here forever.",
    tape: "mocha",
    tilt: 0.9,
  },
] as const;

export default function Home() {
  return (
    <div className="relative min-h-screen bg-paper text-ink">
      <PaperGrain />

      {/* catalogue rule header */}
      <header className="border-b border-ink/15">
        <p className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3 font-mono text-[10px] uppercase tracking-[0.3em] text-ink/55">
          <span>archive of a.</span>
          <span className="hidden sm:inline">catalogued with care</span>
          <span>est. mmxxvi</span>
        </p>
      </header>

      <main className="mx-auto max-w-5xl px-6 pb-24">
        {/* ── folder hero ─────────────────────────────────── */}
        <section aria-label="introduction" className="mt-14">
          {/* folder tabs */}
          <nav aria-label="folder tabs" className="flex gap-1.5 pl-4">
            {folderTabs.map((tab) => (
              <Link
                key={tab.label}
                href={tab.href}
                aria-current={tab.active ? "page" : undefined}
                className={`font-nav rounded-t-lg border border-b-0 border-ink/20 px-4 py-1.5 text-sm lowercase transition-colors ${
                  tab.active
                    ? "bg-rose-dust/40 text-ink"
                    : "bg-paper text-ink/55 hover:bg-rose-dust/20 hover:text-ink"
                }`}
              >
                {tab.label}
              </Link>
            ))}
          </nav>

          {/* folder body */}
          <div className="deckle-bottom relative rounded-xl rounded-tl-none border border-ink/20 bg-rose-dust/15 px-6 pb-16 pt-12 sm:px-14">
            {/* scattered sparkles */}
            <Sparkle
              size={20}
              className="animate-twinkle absolute right-8 top-8 text-mocha [--float-rotate:12deg]"
            />
            <Sparkle
              size={13}
              className="animate-twinkle absolute right-20 top-16 text-stone [animation-delay:0.9s]"
            />
            <Starburst
              size={44}
              className="animate-floaty absolute -top-5 right-1/3 text-ink/70 [--float-rotate:8deg]"
            />
            <Sparkle
              size={15}
              className="animate-twinkle absolute bottom-12 left-8 text-rose-dust [animation-delay:1.7s] brightness-75"
            />

            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-mocha">
              personal archive · self / dec
            </p>

            <h1 className="font-headline mt-4 pl-1 text-8xl leading-none sm:text-9xl">
              arjita
            </h1>
            <Squiggle size={170} className="mt-2 text-mocha" />

            <p className="font-picnic mt-8 text-2xl leading-snug sm:text-3xl">
              computer science student &amp; keeper of curiosities
            </p>

            <p className="font-body mt-6 max-w-xl text-[17px] leading-relaxed text-ink/80">
              welcome to my little corner of the internet — part portfolio,
              part scrapbook, part filing cabinet that fell in love with a
              diary. everything here was made by hand, catalogued with care,
              and left slightly out of order on purpose.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/projects"
                className="font-nav rounded-full border border-ink bg-ink px-6 py-2.5 text-sm lowercase text-paper transition-transform duration-200 hover:-translate-y-0.5 hover:bg-mocha hover:border-mocha motion-reduce:transition-none"
              >
                browse the collection
              </Link>
              <Link
                href="/doodle"
                className="font-nav rounded-full border border-ink/30 px-6 py-2.5 text-sm lowercase text-ink/80 transition-colors hover:border-mocha hover:text-mocha"
              >
                leave a doodle
              </Link>
            </div>
          </div>
        </section>

        {/* ── the collection ──────────────────────────────── */}
        <section aria-label="the collection" className="mt-24">
          <div className="flex items-baseline justify-between">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-mocha">
                table of contents
              </p>
              <h2 className="font-picnic mt-2 text-4xl sm:text-5xl">
                the collection
              </h2>
            </div>
            <PressedFlower
              size={46}
              className="animate-floaty text-mocha [--float-rotate:-6deg]"
            />
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {collection.map((item) => (
              <ArchiveCard key={item.catNo} {...item} />
            ))}
          </div>
        </section>

        {/* ── pressed flower divider ──────────────────────── */}
        <div
          aria-hidden
          className="mt-24 flex items-center justify-center gap-6 text-mocha"
        >
          <span className="h-px w-16 bg-ink/20" />
          <PressedFlower size={34} className="text-rose-dust brightness-90" />
          <Bow size={52} />
          <PressedFlower size={34} className="text-stone" />
          <span className="h-px w-16 bg-ink/20" />
        </div>

        {/* ── museum tag + ticket stub footer ─────────────── */}
        <footer className="mt-20 flex flex-col items-center gap-10 sm:flex-row sm:items-end sm:justify-between">
          {/* museum object tag, dangling from a string */}
          <div className="flex flex-col items-center">
            <svg
              width="90"
              height="34"
              viewBox="0 0 90 34"
              fill="none"
              aria-hidden
              className="text-ink/50"
            >
              <path
                d="M4 2 C30 26, 60 26, 86 4"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeDasharray="1 4"
                strokeLinecap="round"
              />
              <circle cx="45" cy="21" r="2.6" stroke="currentColor" strokeWidth="1.3" />
            </svg>
            <div className="-rotate-2 rounded-sm border border-ink/25 bg-paper px-5 py-3 text-center shadow-[2px_3px_0_rgba(34,32,29,0.08)]">
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-mocha">
                object nº 000
              </p>
              <p className="font-body mt-1 text-sm text-ink/75">
                this website — the first artifact in the collection
              </p>
            </div>
          </div>

          {/* ticket-stub visitor counter (live counter arrives later) */}
          <div className="rotate-1 border border-dashed border-ink/35 bg-rose-dust/20 px-6 py-4 text-center">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-ink/60">
              admit one
            </p>
            <p className="font-picnic mt-1 text-2xl">visitor nº 000001</p>
            <p className="font-mono mt-1 text-[9px] uppercase tracking-[0.2em] text-ink/40">
              — you, presumably —
            </p>
          </div>
        </footer>

        <p className="mt-16 text-center font-mono text-[10px] uppercase tracking-[0.3em] text-ink/40">
          arjita.ca · handled with cotton gloves
        </p>
      </main>
    </div>
  );
}
