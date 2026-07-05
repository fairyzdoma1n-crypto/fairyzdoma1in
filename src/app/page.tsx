import Image from "next/image";
import Link from "next/link";
import { DoodleWidget } from "@/components/DoodleWidget";
import { PaperGrain } from "@/components/PaperGrain";
import { PressedFlower, Sparkle } from "@/components/doodles";

const socials = [
  { label: "instagram", href: "#", note: "add your url" },
  { label: "linkedin", href: "#", note: "add your url" },
  { label: "github", href: "https://github.com/fairyzdoma1n-crypto", note: "" },
];

/* The "Arjives" nav — five pressed flowers, each opening a page. SVG
   flowers stand in until Arjita's five real pressed-flower assets arrive. */
const arjives = [
  { href: "/bag", label: "portfolio", tint: "text-rose-dust brightness-75" },
  { href: "/about", label: "about", tint: "text-mocha" },
  { href: "/lookbook", label: "lookbook", tint: "text-stone" },
  { href: "/guestbook", label: "guestbook", tint: "text-ink/60" },
  { href: "/doodle", label: "doodles", tint: "text-rose-dust" },
];

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-paper text-ink">
      <PaperGrain />

      <header className="border-b border-ink/15">
        <p className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3 font-mono text-[10px] uppercase tracking-[0.3em] text-ink/55">
          <span>arjita.ca</span>
          <span className="hidden sm:inline">the arjives · est. mmxxvi</span>
          <span>self / dec</span>
        </p>
      </header>

      <main className="mx-auto grid max-w-6xl gap-x-10 gap-y-16 px-6 pb-20 pt-10 lg:grid-cols-12">
        {/* ── left: lettering, photo, intro ─────────────── */}
        <section aria-label="introduction" className="lg:col-span-6">
          <h1 className="relative z-10 -mb-10 sm:-mb-14">
            <Image
              src="/assets/arjita-lettering.png"
              alt="arjita — hand-lettered in looping calligraphy"
              width={800}
              height={400}
              priority
              className="h-auto w-[min(100%,480px)]"
            />
          </h1>

          <div className="flex items-start gap-6">
            <Image
              src="/assets/arjita-standing.png"
              alt="arjita standing with her sticker-covered laptop in hand"
              width={1080}
              height={1920}
              priority
              className="w-44 shrink-0 sm:w-56 lg:w-64"
            />

            <div className="pt-20 sm:pt-24">
              <p className="font-body text-[17px] leading-relaxed text-ink/85">
                hey! i&apos;m arjita — logician by trade, storyteller by
                nature.
              </p>
              <p className="font-body mt-3 text-[15px] leading-relaxed text-ink/60">
                incoming computer science student, chronic doodler, and the
                archivist of everything you&apos;re about to see. (more of my
                story soon — this line is holding the door open.)
              </p>

              <ul className="mt-8 flex gap-8" aria-label="social links">
                {socials.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      className="group flex flex-col items-center gap-1.5"
                      {...(s.href.startsWith("http")
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                    >
                      <Sparkle
                        size={18}
                        className="text-mocha transition-transform group-hover:rotate-45 group-hover:scale-125"
                      />
                      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/60 transition-colors group-hover:text-mocha">
                        {s.label}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── right: doodle board + the arjives ─────────── */}
        <section
          aria-label="doodle board and navigation"
          className="flex flex-col gap-16 lg:col-span-6"
        >
          <div className="lg:ml-auto lg:w-[26rem]">
            <DoodleWidget />
          </div>

          <nav aria-label="the arjives" className="mt-auto text-center">
            <h2 className="font-picnic text-3xl">view the arjives!</h2>
            <ul className="mt-6 flex items-end justify-center gap-5 sm:gap-7">
              {arjives.map((a) => (
                <li key={a.label}>
                  <Link href={a.href} className="group flex flex-col items-center gap-2">
                    <PressedFlower
                      size={52}
                      className={`${a.tint} transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-110`}
                    />
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/60 transition-colors group-hover:text-mocha">
                      {a.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-4 font-mono text-[9px] uppercase tracking-[0.2em] text-ink/35">
              each flower opens a drawer of the archive
            </p>
          </nav>
        </section>
      </main>

      <footer className="border-t border-ink/10 py-6 text-center font-mono text-[10px] uppercase tracking-[0.3em] text-ink/40">
        arjita.ca · handled with cotton gloves
      </footer>
    </div>
  );
}
