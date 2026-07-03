export default function StyleGuide() {
  return (
    <main className="min-h-screen bg-cream text-ink px-6 py-16 sm:px-12">
      <div className="mx-auto max-w-4xl space-y-20">
        <header className="space-y-2">
          <p className="font-mono text-xs tracking-widest uppercase text-ink/60">
            internal / not a real page
          </p>
          <h1 className="font-pilowlava text-5xl sm:text-6xl">
            style guide
          </h1>
        </header>

        {/* Color palette */}
        <section className="space-y-4">
          <h2 className="font-mono text-sm uppercase tracking-widest text-ink/60">
            Palette
          </h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-5">
            {[
              { name: "cream", cls: "bg-cream border border-ink/10", hex: "#FAF6EC" },
              { name: "ink", cls: "bg-ink", hex: "#1B1B1F" },
              { name: "lime", cls: "bg-lime", hex: "#CFFF3D" },
              { name: "rose", cls: "bg-rose", hex: "#F6C6D6" },
              { name: "rose-deep", cls: "bg-rose-deep", hex: "#E893AC" },
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
          <div className="inline-block px-4 py-3 bg-ink rounded">
            <p className="font-mono text-xl font-bold text-chrome">
              chrome text effect — for special accents
            </p>
          </div>
        </section>

        {/* Pilowlava */}
        <section className="space-y-3 border-t border-ink/10 pt-10">
          <h2 className="font-mono text-sm uppercase tracking-widest text-ink/60">
            Pilowlava — headline display
          </h2>
          <p className="font-pilowlava text-6xl leading-none">
            hi, i&apos;m arjita
          </p>
          <p className="font-pilowlava-atome text-4xl leading-none text-rose-deep">
            atome variant (glitchier)
          </p>
        </section>

        {/* Kaeru Kaeru */}
        <section className="space-y-3 border-t border-ink/10 pt-10">
          <h2 className="font-mono text-sm uppercase tracking-widest text-ink/60">
            Kaeru Kaeru — blobby / organic display
          </h2>
          <p className="font-kaeru text-6xl leading-none">
            projects &amp; play
          </p>
          <p className="font-kaeru text-2xl leading-tight text-ink/70">
            abcdefghijklm nopqrstuvwxyz 0123456789
          </p>
        </section>

        {/* Flor de Ruina lifecycle */}
        <section className="space-y-3 border-t border-ink/10 pt-10">
          <h2 className="font-mono text-sm uppercase tracking-widest text-ink/60">
            Flor de Ruina — five life-cycle stages
          </h2>
          <div className="space-y-2">
            <p className="font-flor-germen text-4xl leading-tight">germen — welcome</p>
            <p className="font-flor-semilla text-4xl leading-tight">semilla — welcome</p>
            <p className="font-flor-flor text-4xl leading-tight">flor — welcome</p>
            <p className="font-flor-ruina text-4xl leading-tight">ruina — welcome</p>
            <p className="font-flor-fractura text-4xl leading-tight">fractura — welcome</p>
          </div>
        </section>

        {/* TINY */}
        <section className="space-y-3 border-t border-ink/10 pt-10">
          <h2 className="font-mono text-sm uppercase tracking-widest text-ink/60">
            TINY — pixel / retro accents
          </h2>
          <p className="font-tiny text-3xl leading-none">
            visitors: 004201
          </p>
        </section>

        {/* Body copy */}
        <section className="space-y-3 border-t border-ink/10 pt-10">
          <h2 className="font-mono text-sm uppercase tracking-widest text-ink/60">
            Inter — body copy
          </h2>
          <p className="max-w-prose text-lg leading-relaxed">
            This is what regular paragraph text looks like. It should stay
            calm and easy to read even while the headers around it are loud,
            blobby, and a little unhinged — the contrast is the point.
          </p>
        </section>
      </div>
    </main>
  );
}
