import { ChromeText } from "@/components/ChromeText";

export default function StyleGuide() {
  return (
    <main className="min-h-screen bg-paper text-ink px-6 py-16 sm:px-12">
      <div className="mx-auto max-w-4xl space-y-20">
        <header className="space-y-2">
          <p className="font-mono text-xs tracking-widest uppercase text-ink/60">
            internal / not a real page — v2, french-archive direction
          </p>
          <h1 className="font-picnic text-5xl sm:text-6xl">style guide</h1>
        </header>

        {/* Color palette */}
        <section className="space-y-4">
          <h2 className="font-mono text-sm uppercase tracking-widest text-ink/60">
            Palette
          </h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-5">
            {[
              { name: "paper", cls: "bg-paper border border-ink/10", hex: "#F1EBE1" },
              { name: "ink", cls: "bg-ink", hex: "#22201D" },
              { name: "mocha", cls: "bg-mocha", hex: "#8A7362" },
              { name: "rose-dust", cls: "bg-rose-dust", hex: "#D9BDB6" },
              { name: "stone", cls: "bg-stone", hex: "#ADA69C" },
            ].map((c) => (
              <div key={c.name} className="space-y-2">
                <div className={`h-20 w-full rounded-xl ${c.cls}`} />
                <p className="font-mono text-xs">
                  {c.name}
                  <br />
                  {c.hex}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Silver accent, used small now */}
        <section className="space-y-3 border-t border-ink/10 pt-10">
          <h2 className="font-mono text-sm uppercase tracking-widest text-ink/60">
            Silver accent — small-scale jewelry use, not full headlines
          </h2>
          <div className="bg-ink rounded-xl px-6 py-4 inline-flex items-center gap-3">
            <ChromeText className="font-picnic text-3xl">arjita</ChromeText>
          </div>
          <p className="max-w-prose text-sm text-ink/60">
            Same two-layer gradient + sheen technique as before, now reserved
            for small badges/labels/clasp-like moments instead of hero
            headlines. A literal pearl-dot lettering effect (like the
            &ldquo;self&rdquo; in your Ciclo Archive reference) is possible as
            a future build if you want that exact look for one specific spot.
          </p>
        </section>

        {/* PicNic */}
        <section className="space-y-3 border-t border-ink/10 pt-10">
          <h2 className="font-mono text-sm uppercase tracking-widest text-ink/60">
            PicNic — headline display{" "}
            <span className="text-mocha">(pending license confirmation)</span>
          </h2>
          <p className="font-picnic text-6xl leading-none">hi, i&apos;m arjita</p>
        </section>

        {/* Kaeru Kaeru */}
        <section className="space-y-3 border-t border-ink/10 pt-10">
          <h2 className="font-mono text-sm uppercase tracking-widest text-ink/60">
            Kaeru Kaeru — display + small accents
          </h2>
          <p className="font-kaeru text-6xl leading-none">projects &amp; play</p>
        </section>

        {/* Cursive candidates */}
        <section className="space-y-6 border-t border-ink/10 pt-10">
          <h2 className="font-mono text-sm uppercase tracking-widest text-ink/60">
            Cursive candidates — pick one
          </h2>
          <div className="space-y-1">
            <p className="font-mono text-xs text-ink/50">Beau Rivage</p>
            <p style={{ fontFamily: "var(--font-beau-rivage)" }} className="text-5xl">
              still with you
            </p>
          </div>
          <div className="space-y-1">
            <p className="font-mono text-xs text-ink/50">Mrs Saint Delafield</p>
            <p
              style={{ fontFamily: "var(--font-mrs-saint-delafield)" }}
              className="text-5xl"
            >
              still with you
            </p>
          </div>
          <div className="space-y-1">
            <p className="font-mono text-xs text-ink/50">Petit Formal Script</p>
            <p
              style={{ fontFamily: "var(--font-petit-formal-script)" }}
              className="text-5xl"
            >
              still with you
            </p>
          </div>
        </section>

        {/* Flor de Ruina — status check */}
        <section className="space-y-3 border-t border-ink/10 pt-10">
          <h2 className="font-mono text-sm uppercase tracking-widest text-ink/60">
            Flor de Ruina —{" "}
            <span className="text-mocha">still wanted, or retire it?</span>
          </h2>
          <div className="space-y-2">
            <p className="font-flor-germen text-4xl leading-tight">germen — welcome</p>
            <p className="font-flor-fractura text-4xl leading-tight">fractura — welcome</p>
          </div>
          <p className="max-w-prose text-sm text-ink/60">
            This one leans pixel/brutalist-glitch, which was more the old
            direction. It could still work as a rare &ldquo;decay&rdquo;
            moment (e.g. a pressed flower wilting) — or we drop it entirely.
          </p>
        </section>

        {/* Body copy */}
        <section className="space-y-3 border-t border-ink/10 pt-10">
          <h2 className="font-mono text-sm uppercase tracking-widest text-ink/60">
            Inter — body copy
          </h2>
          <p className="max-w-prose text-lg leading-relaxed">
            This is what regular paragraph text looks like — calm, warm,
            easy to read against the paper background.
          </p>
        </section>
      </div>
    </main>
  );
}
