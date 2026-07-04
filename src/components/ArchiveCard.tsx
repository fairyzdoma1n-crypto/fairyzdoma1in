import Link from "next/link";

const tapeColors: Record<string, string> = {
  "rose-dust": "bg-rose-dust/80",
  stone: "bg-stone/80",
  mocha: "bg-mocha/60",
};

export type ArchiveCardProps = {
  href: string;
  catNo: string;
  title: string;
  blurb: string;
  tape: "rose-dust" | "stone" | "mocha";
  /* Resting rotation in degrees; card straightens on hover. */
  tilt: number;
};

export function ArchiveCard({ href, catNo, title, blurb, tape, tilt }: ArchiveCardProps) {
  return (
    <Link
      href={href}
      style={{ rotate: `${tilt}deg` }}
      className="group relative block rounded-sm border border-ink/15 bg-paper px-6 pb-6 pt-8
                 shadow-[2px_3px_0_rgba(34,32,29,0.08)] transition-all duration-300 ease-out
                 hover:-translate-y-1.5 hover:rotate-0 hover:shadow-[4px_8px_18px_rgba(34,32,29,0.18)]
                 focus-visible:-translate-y-1.5 focus-visible:rotate-0 focus-visible:outline-2
                 focus-visible:outline-offset-4 focus-visible:outline-mocha motion-reduce:transition-none"
    >
      {/* washi tape holding the card down */}
      <span
        aria-hidden
        className={`washi absolute -top-3 left-1/2 h-6 w-24 -translate-x-1/2 -rotate-3 ${tapeColors[tape]}`}
      />

      <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-mocha">
        cat. nº {catNo}
      </p>
      <h3 className="font-nav mt-2 text-2xl lowercase leading-tight">{title}</h3>
      <p className="font-body mt-3 text-[15px] leading-relaxed text-ink/75">{blurb}</p>

      <span className="font-mono mt-4 inline-block text-[11px] uppercase tracking-[0.2em] text-ink/50 transition-colors group-hover:text-mocha">
        open file →
      </span>
    </Link>
  );
}
