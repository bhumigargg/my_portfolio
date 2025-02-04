import type { Metadata } from "next";
import localfont from "next/font/local";
import "./globals.css";

const handwritten = localfont({
  src: [{
    path:"./fonts/HandwrittenOrigi.ttf",
    weight:'400'
  },
  ],
  variable:"--font-handwritten",
});

export const metadata: Metadata = {
  title: "Bhumi's Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${handwritten.variable}`}>
        {children}
      </body>
    </html>
  );
}
