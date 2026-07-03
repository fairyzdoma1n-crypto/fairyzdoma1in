import { ChromeText } from "@/components/ChromeText";

const bodyTestParagraph =
  "This is what a real paragraph of project description looks like — long enough to judge whether you can actually read it comfortably, not just admire it as a headline.";

export default function StyleGuide() {
  return (
    <main className="min-h-screen bg-paper text-ink px-6 py-16 sm:px-12">
      <div className="mx-auto max-w-4xl space-y-20">
        <header className="space-y-2">
          <p className="font-mono text-xs tracking-widest uppercase text-ink/60">
            internal / not a real page — v4, finalized type system
          </p>
          <h1 className="font-picnic text-5xl sm:text-6xl">style guide</h1>
        </header>

        {/* Finalized type system */}
        <section className="space-y-10">
          <h2 className="font-mono text-sm uppercase tracking-widest text-ink/60">
            Finalized type system
          </h2>

          <div className="space-y-2">
            <p className="font-mono text-xs text-ink/50">
              font-headline — Miss Fajardose — main headline font
            </p>
            <p className="font-headline text-7xl leading-none">arjita</p>
          </div>

          <div className="space-y-2">
            <p className="font-mono text-xs text-ink/50">
              font-picnic — PicNic — display + small accents
            </p>
            <p className="font-picnic text-5xl leading-none">projects &amp; play</p>
          </div>

          <div className="space-y-2">
            <p className="font-mono text-xs text-ink/50">
              font-nav — Kaeru Kaeru — section labels / nav
            </p>
            <p className="font-nav text-3xl leading-none uppercase tracking-wide">
              what&apos;s in my bag
            </p>
          </div>

          <div className="space-y-2 max-w-prose">
            <p className="font-mono text-xs text-ink/50">
              font-body — Flor de Ruina (semilla stage) — main body copy
            </p>
            <p className="font-body text-lg leading-relaxed">{bodyTestParagraph}</p>
          </div>

          <div className="space-y-2 max-w-prose">
            <p className="font-mono text-xs text-ink/50">
              font-sans — Inter — functional UI text (buttons, forms, nav)
            </p>
            <p className="font-sans text-base">Sign the guestbook</p>
          </div>
        </section>

        {/* Flor de Ruina decay accents */}
        <section className="space-y-4 border-t border-ink/10 pt-10">
          <h2 className="font-mono text-sm uppercase tracking-widest text-ink/60">
            Flor de Ruina — rare decay accents (not body copy)
          </h2>
          {[
            { label: "germen", cls: "font-flor-germen" },
            { label: "flor", cls: "font-flor-flor" },
            { label: "ruina", cls: "font-flor-ruina" },
            { label: "fractura", cls: "font-flor-fractura" },
          ].map((f) => (
            <p key={f.label} className={`${f.cls} text-3xl`}>
              {f.label} — a pressed flower, wilting
            </p>
          ))}
        </section>

        {/* Palette */}
        <section className="space-y-4 border-t border-ink/10 pt-10">
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

        {/* Silver accent */}
        <section className="space-y-3 border-t border-ink/10 pt-10">
          <h2 className="font-mono text-sm uppercase tracking-widest text-ink/60">
            Silver accent — small-scale
          </h2>
          <div className="bg-ink rounded-xl px-6 py-4 inline-flex items-center gap-3">
            <ChromeText className="font-picnic text-3xl">arjita</ChromeText>
          </div>
        </section>
      </div>
    </main>
  );
}
