import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";

type Props = Readonly<{ children: React.ReactNode }>;

export const metadata: Metadata = { title: "rafleh" };

const font = Inter({ weight: ["400", "500", "600", "700", "800"] });

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className={clsx(font.className)}>{children}</body>
    </html>
  );
}
