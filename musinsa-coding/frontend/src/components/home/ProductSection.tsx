import type { Product } from "@/types";
import ProductCard from "@/components/common/ProductCard";
import {
  section,
  sectionHeader,
  sectionTitle,
  moreLink,
  moreArrow,
  productGrid,
} from "./ProductSection.css";

interface Props {
  title: string;
  products: Product[];
}

export default function ProductSection({ title, products }: Props) {
  return (
    <section className={section}>
      <div className={sectionHeader}>
        <h2 className={sectionTitle}>{title}</h2>
        <a className={moreLink} href="#">
          더보기
          <svg
            className={moreArrow}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </a>
      </div>
      <div className={productGrid}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
