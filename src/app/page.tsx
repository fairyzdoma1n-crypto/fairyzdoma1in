import Image from "next/image";
import Link from "next/link";
import { DoodleLayer } from "@/components/DoodleLayer";
import { PressedFlower } from "@/components/doodles";

const socials = [
  { label: "instagram", href: "#" },
  { label: "linkedin", href: "#" },
  { label: "github", href: "https://github.com/fairyzdoma1n-crypto" },
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
      <DoodleLayer />

      {/* content floats above the drawing surface; only links and buttons
          catch the pointer so the rest of the page stays drawable. the
          whole intro cluster hugs the left edge — the open right side of
          the screen is the visitor's drawing space. */}
      <main className="pointer-events-none relative z-10 min-h-screen px-2 pb-10">
        {/* ── hero: photo in front, lettering tucked behind ── */}
        <section aria-label="introduction" className="relative max-w-xl">
          <h1 className="absolute left-16 top-1 z-[1] sm:left-24">
            <Image
              src="/assets/arjita-lettering.png"
              alt="arjita — hand-lettered in looping calligraphy"
              width={800}
              height={400}
              priority
              className="h-auto w-[260px] sm:w-[360px]"
            />
          </h1>

          <div className="flex pt-12 sm:pt-14">
            <Image
              src="/assets/arjita-standing.png"
              alt="arjita standing with her sticker-covered laptop in hand"
              width={1080}
              height={1920}
              priority
              className="relative z-[2] w-44 shrink-0 sm:w-56"
            />

            <div className="mt-28 max-w-xs sm:mt-36">
              <p className="font-body text-[15px] leading-snug text-ink/85">
                hey! i&apos;m arjita — logician by trade, storyteller by
                nature.
              </p>
              <p className="font-body mt-2 text-[13px] leading-snug text-ink/60">
                incoming computer science student, chronic doodler, and the
                archivist of everything you&apos;re about to see.
              </p>

              <ul className="mt-5 flex gap-6" aria-label="social links">
                {socials.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      className="group pointer-events-auto flex flex-col items-center gap-1"
                      {...(s.href.startsWith("http")
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                    >
                      <PressedFlower
                        size={18}
                        className="text-mocha transition-transform group-hover:-rotate-12 group-hover:scale-110"
                      />
                      <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-ink/60 transition-colors group-hover:text-mocha">
                        {s.label}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── the arjives: bottom-right, like the reference ── */}
        <nav
          aria-label="the arjives"
          className="pt-16 text-center lg:absolute lg:bottom-10 lg:right-10 lg:pt-0"
        >
          <h2 className="font-sans text-lg font-semibold tracking-tight">
            View the Arjives!
          </h2>
          <ul className="mt-4 flex items-end justify-center gap-4 sm:gap-6">
            {arjives.map((a) => (
              <li key={a.label}>
                <Link
                  href={a.href}
                  className="group pointer-events-auto flex flex-col items-center gap-2"
                >
                  <PressedFlower
                    size={48}
                    className={`${a.tint} transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-110`}
                  />
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/60 transition-colors group-hover:text-mocha">
                    {a.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-3 font-mono text-[9px] uppercase tracking-[0.2em] text-ink/35">
            each flower opens a drawer of the archive
          </p>
        </nav>
      </main>
    </div>
  );
}
