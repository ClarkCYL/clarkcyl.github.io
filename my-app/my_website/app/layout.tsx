import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Clark | Full-Stack, Mobile & AI Engineer",
  description:
    "Portfolio of Clark, a software engineer based in the Philippines specializing in Next.js, Flutter, Python, and AI/Machine Learning solutions.",
  keywords: [
    "Clark",
    "Full-Stack Developer",
    "Mobile Developer",
    "AI Engineer",
    "Machine Learning",
    "Python",
    "Flask",
    "Java",
    "Flutter",
    "Next.js",
    "React",
    "TypeScript",
    "Philippines",
    "Portfolio",
  ],
  authors: [{ name: "Clark" }],
  creator: "Clark",
  openGraph: {
    title: "Clark | Full-Stack, Mobile & AI Engineer",
    description:
      "Building high-performance web applications, fluid mobile experiences, and practical AI systems.",
    type: "website",
    locale: "en_PH",
  },
  twitter: {
    card: "summary_large_image",
    title: "Clark | Full-Stack, Mobile & AI Engineer",
    description:
      "Building high-performance web applications, fluid mobile experiences, and practical AI systems.",
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
      className={`${plusJakartaSans.variable} ${jetbrainsMono.variable} scroll-smooth dark`}
    >
      <body className="min-h-screen bg-[#07090e] text-[#e2e8f0] font-sans antialiased selection:bg-emerald-500/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
