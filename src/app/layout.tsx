import type { Metadata } from "next";
import { Instrument_Serif, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const monoFont = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "DNR Physics | Physics Simplified | Ranganath Dharmavaram",
  description:
    "Concept-based Physics coaching for JEE - ADVANCED, IIT-JEE Main, NEET, BITSAT & Foundation (Class 8-10 CBSE) by Ranganath Dharmavaram. Teaching excellence since 1989 in Nellore.",
  keywords: [
    "DNR Physics",
    "Ranganath Dharmavaram",
    "Physics Specialist Nellore",
    "JEE ADVANCED Physics Coaching Nellore",
    "IIT JEE Physics Coaching Nellore",
    "NEET Physics Coaching",
    "BITSAT Physics",
    "JEE NEET Foundation Class 8 9 10 CBSE",
    "Concept Based Physics",
    "Physics Simplified"
  ],
  authors: [{ name: "Ranganath Dharmavaram" }],
  openGraph: {
    title: "DNR Physics | Physics Simplified by Ranganath Dharmavaram",
    description:
      "Teaching Since 1989 • Simplifying Physics. Focused batches with limited number of students for JEE - ADVANCED, NEET & Foundation.",
    type: "website",
    locale: "en_IN",
    siteName: "DNR Physics",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${dmSans.variable} ${monoFont.variable} scroll-smooth antialiased`}
    >
      <body className="bg-[var(--bg-canvas)] text-[var(--text-main)] font-body selection:bg-[var(--accent-primary)] selection:text-white min-h-screen flex flex-col overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}


