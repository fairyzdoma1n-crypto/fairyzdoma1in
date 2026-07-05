import Image from "next/image";
import Link from "next/link";
import { BagPortfolio } from "@/components/BagPortfolio";

export const metadata = {
  title: "what's in my bag · arjita",
  description: "my gallery of projects.",
};

export default function BagPage() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-paper text-ink">
      <main className="mx-auto max-w-5xl px-6 py-5">
        <Link
          href="/"
          className="font-mono text-[11px] uppercase tracking-[0.25em] text-ink/50 transition-colors hover:text-mocha"
        >
          ← back to the arjives
        </Link>

        {/* the lettering png carries big transparent margins — the negative
            margins here swallow them so the header stays tight */}
        <header className="text-center">
          <h1>
            <Image
              src="/assets/bag-lettering.png"
              alt="what's in my bag? — hand-lettered"
              width={800}
              height={400}
              priority
              className="mx-auto -mt-12 -mb-16 h-auto w-[min(100%,460px)] sm:-mt-16 sm:-mb-20"
            />
          </h1>
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-ink/55">
            check out my portfolio!
          </p>
        </header>

        <BagPortfolio />
      </main>
    </div>
  );
}
