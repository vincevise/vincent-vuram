import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/ui-components/navbar";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vuram Vincent | Front End Developer",
  description:
    "Portfolio of Vincent Vuram, a passionate Frontend Developer specializing in React.js. Showcasing professional experience, projects, and contact information.",
  keywords: [
    "Frontend Developer",
    "React.js Developer",
    "Next.js Developer",
    "JavaScript Developer",
    "Vincent Vuram Portfolio",
  ],
  authors: [{ name: "Vincent Vuram" }],
  creator: "Vincent Vuram",
  metadataBase: new URL("https://your-domain.com"),

  // Favicon
  icons: {
    icon: "/dp2.png",
    shortcut: "/dp2.png",
    apple: "/dp2.png",
  },

  openGraph: {
    title: "Vuram Vincent | Front End Developer",
    description:
      "Explore the portfolio of Vincent Vuram — skilled in React, Next.js, UI/UX, and modern web development.",
    url: "https://your-domain.com",
    siteName: "Vincent Vuram Portfolio",
    images: [
      {
        url: "/dp1.png", // create one later
        width: 1200,
        height: 630,
        alt: "Vincent Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Vuram Vincent | Front End Developer",
    description:
      "React & Next.js developer portfolio of Vincent Vuram.",
    images: ["/og-image.png"],
    creator: "@yourTwitterHandle",
  },

  // Basic SEO
  category: "portfolio",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  // Theme color for mobile browsers
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/png" href="/dp2.png" sizes="32x32" />
        <link rel="icon" href="/dp2.png" sizes="64x64" />
        <link rel="shortcut icon" href="/dp2.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>

      <body
        className={`antialiased ${inter.className}`}
        style={{
          backgroundColor: "white",
          backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,0,0,0.1) 1px, transparent 1px)`,
          backgroundSize: `50px 50px`,
        }}
      >
        <Navbar />

        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
