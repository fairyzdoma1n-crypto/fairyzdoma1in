import Link from "next/link";
import { PaperGrain } from "@/components/PaperGrain";
import { Sparkle, Squiggle } from "@/components/doodles";

export default function NotFound() {
  return (
    <div className="relative min-h-screen bg-paper text-ink">
      <PaperGrain />

      <main className="mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center px-6 py-20 text-center">
        <div className="relative rotate-2 rounded-sm border border-ink/25 bg-stone/20 px-10 py-12 shadow-[3px_4px_0_rgba(34,32,29,0.1)]">
          <span
            aria-hidden
            className="washi absolute -top-3 right-8 h-6 w-20 rotate-6 bg-rose-dust/70"
          />
          <Sparkle
            size={14}
            className="animate-twinkle absolute left-6 top-6 text-mocha"
          />

          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-mocha">
            error nº 404 · misfiled
          </p>
          <h1 className="font-headline mt-6 text-6xl leading-none sm:text-7xl">
            lost papers
          </h1>
          <Squiggle size={120} className="mx-auto mt-4 text-mocha" />

          <p className="font-body mx-auto mt-6 max-w-sm text-[16px] leading-relaxed text-ink/75">
            whatever you were looking for got filed under the wrong letter,
            eaten by the shredder, or never existed in the first place. the
            archivist sends her apologies.
          </p>

          <Link
            href="/"
            className="font-nav mt-8 inline-block rounded-full border border-ink bg-ink px-6 py-2.5 text-sm lowercase text-paper transition-colors hover:border-mocha hover:bg-mocha"
          >
            back to the index
          </Link>
        </div>
      </main>
    </div>
  );
}
