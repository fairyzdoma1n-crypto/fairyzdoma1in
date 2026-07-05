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

      {/* content floats above the drawing surface; only links catch the
          pointer so the open right side of the screen stays drawable */}
      <main className="pointer-events-none relative z-10 min-h-screen">
        <section
          aria-label="introduction"
          className="relative flex min-h-screen items-start pt-[2vh] pl-1 sm:pl-2"
        >
          {/* standing photo — large, hugging the left edge, feet near bottom */}
          <Image
            src="/assets/arjita-standing.png"
            alt="arjita standing with her sticker-covered laptop in hand"
            width={1080}
            height={1920}
            priority
            className="relative z-[2] h-[90vh] max-h-[880px] w-auto shrink-0"
          />

          {/* blurb + socials — tucked under the lettering, beside her laptop */}
          <div className="relative z-[3] ml-2 max-w-[19rem] self-start pt-[34vh] sm:ml-4">
            <p className="font-body text-[16px] leading-snug text-ink/85">
              hey! i&apos;m arjita — logician by trade, storyteller by nature.
            </p>
            <p className="font-body mt-2 text-[14px] leading-snug text-ink/60">
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

          {/* lettering — behind the photo, capping her head */}
          <h1 className="absolute left-[2%] top-[3vh] z-[1] w-[min(38%,380px)]">
            <Image
              src="/assets/arjita-lettering.png"
              alt="arjita — hand-lettered in looping calligraphy"
              width={800}
              height={400}
              priority
              className="h-auto w-full"
            />
          </h1>

          {/* the arjives — bottom-right, in the same body font as the rest */}
          <nav
            aria-label="the arjives"
            className="absolute bottom-8 right-6 z-[3] text-right"
          >
            <h2 className="font-body text-2xl text-ink">View the Arjives!</h2>
            <ul className="mt-4 flex items-end justify-end gap-5">
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
            <p className="font-body mt-3 text-sm text-ink/50">
              each flower opens a drawer of the archive
            </p>
          </nav>
        </section>
      </main>
    </div>
  );
}
