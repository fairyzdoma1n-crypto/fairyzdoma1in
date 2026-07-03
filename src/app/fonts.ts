import localFont from "next/font/local";
import { Inter, Geist_Mono } from "next/font/google";

// Clean, boring body sans — intentional contrast to the loud display fonts below.
export const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

// Monospace, for "internet archive" / terminal-flavored labels and meta text.
export const mono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

// Pilowlava — chunky graffiti/lava-drip display font. Big whimsical headlines.
export const pilowlava = localFont({
  src: "../fonts/pilowlava/Pilowlava-Regular.woff2",
  variable: "--font-pilowlava",
  display: "swap",
});

export const pilowlavaAtome = localFont({
  src: "../fonts/pilowlava/Pilowlava-Atome.woff2",
  variable: "--font-pilowlava-atome",
  display: "swap",
});

// Kaeru Kaeru — blobby, poison-dart-frog-and-woodcut inspired display font.
export const kaerukaeru = localFont({
  src: "../fonts/kaerukaeru/kaerukaeru-Regular.woff2",
  variable: "--font-kaeru",
  display: "swap",
});

// TINY — dot-matrix pixel font, for retro-computing accents (counter, guestbook).
export const tiny = localFont({
  src: "../fonts/tiny/TINY5x3-160.woff2",
  variable: "--font-tiny",
  display: "swap",
});

// Flor de Ruina — five life-cycle stages of the same glyph set, germination to fracture.
export const florGermen = localFont({
  src: "../fonts/flor-de-ruina/FlorDeRuina-Germen.woff2",
  variable: "--font-flor-germen",
  display: "swap",
});

export const florSemilla = localFont({
  src: "../fonts/flor-de-ruina/FlorDeRuina-Semilla.woff2",
  variable: "--font-flor-semilla",
  display: "swap",
});

export const florFlor = localFont({
  src: "../fonts/flor-de-ruina/FlorDeRuina-Flor.woff2",
  variable: "--font-flor-flor",
  display: "swap",
});

export const florRuina = localFont({
  src: "../fonts/flor-de-ruina/FlorDeRuina-Ruina.woff2",
  variable: "--font-flor-ruina",
  display: "swap",
});

export const florFractura = localFont({
  src: "../fonts/flor-de-ruina/FlorDeRuina-Fractura.woff2",
  variable: "--font-flor-fractura",
  display: "swap",
});

// PicNic held back — CUTE license terms not yet confirmed. Not wired into the theme.

export const allFontVariables = [
  inter.variable,
  mono.variable,
  pilowlava.variable,
  pilowlavaAtome.variable,
  kaerukaeru.variable,
  tiny.variable,
  florGermen.variable,
  florSemilla.variable,
  florFlor.variable,
  florRuina.variable,
  florFractura.variable,
].join(" ");
