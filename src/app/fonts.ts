import localFont from "next/font/local";
import { Inter, Geist_Mono, Miss_Fajardose } from "next/font/google";

// Clean, boring UI/functional sans — buttons, forms, dense text.
export const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

// Monospace, for "internet archive" / terminal-flavored labels and meta text.
export const mono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

// Miss Fajardose — dramatic flourished calligraphy. Main headline font.
export const missFajardose = Miss_Fajardose({
  variable: "--font-miss-fajardose",
  weight: "400",
  subsets: ["latin"],
});

// PicNic — organic serif with contextual ligatures. Display + small accents.
// Licensed under Velvetyne's CUTE license — confirmed cleared for use.
export const picnic = localFont({
  src: "../fonts/picnic/PicNic.woff2",
  variable: "--font-picnic",
  display: "swap",
});

// Kaeru Kaeru — blobby, poison-dart-frog-and-woodcut inspired display font.
// Section labels / nav.
export const kaerukaeru = localFont({
  src: "../fonts/kaerukaeru/kaerukaeru-Regular.woff2",
  variable: "--font-kaeru",
  display: "swap",
});

// Flor de Ruina — five life-cycle stages of the same glyph set, germination
// to fracture. "semilla" is the main body-copy stage (best legibility); the
// other four are reserved for rare decay-themed accent moments.
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

export const allFontVariables = [
  inter.variable,
  mono.variable,
  missFajardose.variable,
  picnic.variable,
  kaerukaeru.variable,
  florGermen.variable,
  florSemilla.variable,
  florFlor.variable,
  florRuina.variable,
  florFractura.variable,
].join(" ");
