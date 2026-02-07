import type { Metadata } from "next";
import "@/styles/global.css.ts";

export const metadata: Metadata = {
  title: "Musinsa",
  description: "Musinsa-style shopping mall",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
