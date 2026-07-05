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
          catch the pointer so the rest of the page stays drawable */}
      <main className="pointer-events-none relative z-10 mx-auto min-h-screen max-w-6xl px-6 pb-10">
        {/* ── hero: photo left, lettering overlapping, blurb right ── */}
        <section aria-label="introduction" className="flex pt-4">
          <Image
            src="/assets/arjita-standing.png"
            alt="arjita standing with her sticker-covered laptop in hand"
            width={1080}
            height={1920}
            priority
            className="relative z-[1] mt-12 w-48 shrink-0 sm:w-60 lg:w-80"
          />

          <div className="-ml-24 min-w-0 flex-1 sm:-ml-32 lg:-ml-48">
            <h1>
              <Image
                src="/assets/arjita-lettering.png"
                alt="arjita — hand-lettered in looping calligraphy"
                width={800}
                height={400}
                priority
                className="relative z-[2] h-auto w-[min(100%,620px)]"
              />
            </h1>

            <div className="-mt-4 ml-24 max-w-md sm:ml-32 lg:-mt-10 lg:ml-48">
              <p className="font-body text-[16px] leading-relaxed text-ink/85">
                hey! i&apos;m arjita — logician by trade, storyteller by
                nature.
              </p>
              <p className="font-body mt-2 text-[14px] leading-relaxed text-ink/60">
                incoming computer science student, chronic doodler, and the
                archivist of everything you&apos;re about to see.
              </p>

              <ul className="mt-6 flex gap-7" aria-label="social links">
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
                        size={20}
                        className="text-mocha transition-transform group-hover:-rotate-12 group-hover:scale-110"
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
