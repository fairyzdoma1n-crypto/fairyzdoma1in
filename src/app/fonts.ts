import localFont from "next/font/local";
import {
  Inter,
  Geist_Mono,
  Beau_Rivage,
  Mrs_Saint_Delafield,
  Petit_Formal_Script,
} from "next/font/google";

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

// PicNic — organic serif with contextual ligatures. Big whimsical headlines.
// NOTE: licensed under Velvetyne's CUTE license, not standard OFL — pending your confirmation.
export const picnic = localFont({
  src: "../fonts/picnic/PicNic.woff2",
  variable: "--font-picnic",
  display: "swap",
});

// Kaeru Kaeru — blobby, poison-dart-frog-and-woodcut inspired display font.
// Now doing double duty: display headers and small/retro-accent spots (replacing TINY).
export const kaerukaeru = localFont({
  src: "../fonts/kaerukaeru/kaerukaeru-Regular.woff2",
  variable: "--font-kaeru",
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

// Three cursive candidates for comparison — pick one, the other two get removed.
export const beauRivage = Beau_Rivage({
  variable: "--font-beau-rivage",
  weight: "400",
  subsets: ["latin"],
});

export const mrsSaintDelafield = Mrs_Saint_Delafield({
  variable: "--font-mrs-saint-delafield",
  weight: "400",
  subsets: ["latin"],
});

export const petitFormalScript = Petit_Formal_Script({
  variable: "--font-petit-formal-script",
  weight: "400",
  subsets: ["latin"],
});

export const allFontVariables = [
  inter.variable,
  mono.variable,
  picnic.variable,
  kaerukaeru.variable,
  florGermen.variable,
  florSemilla.variable,
  florFlor.variable,
  florRuina.variable,
  florFractura.variable,
  beauRivage.variable,
  mrsSaintDelafield.variable,
  petitFormalScript.variable,
].join(" ");
