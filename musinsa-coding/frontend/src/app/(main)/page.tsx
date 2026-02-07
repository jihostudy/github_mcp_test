import { page, sectionDivider } from "./page.css";
import HeroBanner from "@/components/home/HeroBanner";
import CategoryChips from "@/components/home/CategoryChips";
import ProductSection from "@/components/home/ProductSection";
import { getProductsByTag } from "@/data/mock/products";

export default function Home() {
  const recommendProducts = getProductsByTag("recommend");
  const popularProducts = getProductsByTag("popular");
  const newProducts = getProductsByTag("new");

  return (
    <div className={page}>
      <HeroBanner />
      <CategoryChips />
      <div className={sectionDivider} />
      <ProductSection title="추천 상품" products={recommendProducts} />
      <div className={sectionDivider} />
      <ProductSection title="지금 인기있는" products={popularProducts} />
      <div className={sectionDivider} />
      <ProductSection title="신상품" products={newProducts} />
    </div>
  );
}
