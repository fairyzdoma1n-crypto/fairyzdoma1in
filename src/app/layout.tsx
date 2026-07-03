import type { Metadata } from "next";
import { allFontVariables } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "arjita",
  description: "Personal portfolio of Arjita",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${allFontVariables} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
