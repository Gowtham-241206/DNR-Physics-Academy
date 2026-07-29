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
    "Concept-based Physics coaching for IIT-JEE Main, JEE Advanced, NEET & BITSAT by Ranganath Dharmavaram. 36+ years of teaching excellence since 1988 in Nellore.",
  keywords: [
    "DNR Physics",
    "Ranganath Dharmavaram",
    "Physics Specialist Nellore",
    "IIT JEE Physics Coaching Nellore",
    "NEET Physics Coaching",
    "BITSAT Physics",
    "Concept Based Physics",
    "Physics Simplified"
  ],
  authors: [{ name: "Ranganath Dharmavaram" }],
  openGraph: {
    title: "DNR Physics | Physics Simplified by Ranganath Dharmavaram",
    description:
      "36+ Years of Simplifying Physics. Dedicated small batch coaching for IIT-JEE, NEET & BITSAT.",
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
      <body className="bg-[var(--bg-canvas)] text-[var(--text-main)] font-body selection:bg-[var(--accent-primary)] selection:text-white min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}


