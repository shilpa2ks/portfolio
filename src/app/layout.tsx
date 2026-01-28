import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Shilpa Kundumattathil Sivarajan | Full Stack Software Engineer",
  description:
    "Full Stack Software Engineer with 14+ years of experience in React, Next.js, TypeScript, Material UI, GraphQL, and Java. Based in Perth, Australia.",
  keywords: [
    "Frontend Developer",
    "Full Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "GraphQL",
    "Java",
    "Software Engineer",
    "Perth",
  ],
  authors: [{ name: "Shilpa Kundumattathil Sivarajan" }],
  openGraph: {
    title:
      "Shilpa Kundumattathil Sivarajan | Frontend Developer | Full Stack Software Developer",
    description:
      "Full Stack Software Engineer(frontend heavy) with 14+ years of experience in React, Next.js, TypeScript, Material UI, GraphQL, and Java.",
    type: "website",
    locale: "en_AU",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Shilpa Kundumattathil Sivarajan | Frontend Developer | Full Stack Software Developer",
    description:
      "Full Stack Software Engineer(frontend heavy) with 14+ years of experience in React, Next.js, TypeScript, Material UI, GraphQL, and Java.",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
