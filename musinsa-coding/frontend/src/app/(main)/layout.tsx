import Header from "@/components/layout/Header";
import TabNavigation from "@/components/layout/TabNavigation";
import Footer from "@/components/layout/Footer";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <TabNavigation />
      {children}
      <Footer />
    </>
  );
}
