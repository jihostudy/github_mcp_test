import { mockCategories } from "@/data/mock/categories";
import { wrapper, grid, chipItem, chipIcon, chipLabel } from "./CategoryChips.css";

export default function CategoryChips() {
  return (
    <section className={wrapper}>
      <div className={grid}>
        {mockCategories.map((cat) => (
          <div key={cat.id} className={chipItem}>
            <div className={chipIcon}>{cat.iconLabel}</div>
            <span className={chipLabel}>{cat.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
