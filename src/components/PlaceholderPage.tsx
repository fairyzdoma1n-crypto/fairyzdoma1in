import Link from "next/link";
import { PressedFlower, Sparkle } from "@/components/doodles";

export function PlaceholderPage({
  catNo,
  title,
  note,
}: {
  catNo: string;
  title: string;
  note: string;
}) {
  return (
    <div className="relative min-h-screen bg-paper text-ink">
      <main className="mx-auto flex min-h-screen max-w-3xl flex-col justify-center px-6 py-20">
        <Link
          href="/"
          className="font-mono text-[11px] uppercase tracking-[0.25em] text-ink/50 transition-colors hover:text-mocha"
        >
          ← return to index
        </Link>

        <div className="relative mt-10 -rotate-1 rounded-sm border border-ink/20 bg-rose-dust/15 px-8 py-12 shadow-[3px_4px_0_rgba(34,32,29,0.08)] sm:px-12">
          <span
            aria-hidden
            className="washi absolute -top-3 left-10 h-6 w-24 -rotate-6 bg-stone/70"
          />
          <Sparkle
            size={16}
            className="animate-twinkle absolute right-8 top-8 text-mocha"
          />

          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-mocha">
            cat. nº {catNo} · status: in cataloguing
          </p>
          <h1 className="font-picnic mt-4 text-5xl leading-tight sm:text-6xl">
            {title}
          </h1>
          <p className="font-body mt-6 max-w-md text-[17px] leading-relaxed text-ink/75">
            {note}
          </p>

          <div className="mt-10 flex items-center gap-3 text-stone">
            <PressedFlower size={30} />
            <p className="font-mono text-[10px] uppercase tracking-[0.25em]">
              the archivist is working on this file
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
