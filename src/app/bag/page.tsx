import Image from "next/image";
import Link from "next/link";
import { BagPortfolio } from "@/components/BagPortfolio";

export const metadata = {
  title: "what's in my bag · arjita",
  description: "arjita's portfolio, unpacked one object at a time.",
};

export default function BagPage() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-paper text-ink">
      <main className="mx-auto max-w-5xl px-6 py-10">
        <Link
          href="/"
          className="font-mono text-[11px] uppercase tracking-[0.25em] text-ink/50 transition-colors hover:text-mocha"
        >
          ← back to the arjives
        </Link>

        <header className="mt-8 text-center">
          <h1>
            <Image
              src="/assets/bag-lettering.png"
              alt="what's in my bag? — hand-lettered"
              width={800}
              height={400}
              priority
              className="mx-auto h-auto w-[min(100%,520px)]"
            />
          </h1>
          <p className="-mt-6 font-mono text-[11px] uppercase tracking-[0.3em] text-ink/55 sm:-mt-10">
            check out my portfolio!
          </p>
        </header>

        <BagPortfolio />
      </main>
    </div>
  );
}
