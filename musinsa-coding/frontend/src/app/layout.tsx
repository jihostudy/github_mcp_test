import type { Metadata } from "next";
import "@/styles/global.css.ts";
import Header from "@/components/layout/Header";
import TabNavigation from "@/components/layout/TabNavigation";
import Footer from "@/components/layout/Footer";

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
      <body>
        <Header />
        <TabNavigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
