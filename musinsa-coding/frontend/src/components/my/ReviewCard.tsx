import type { UserReview } from "@/types";
import {
  reviewCard,
  productRow,
  productThumb,
  productInfo,
  productBrand,
  productName,
  starRow,
  star,
  starFilled,
  starEmpty,
  reviewContent,
  reviewDate,
  reviewActions,
  actionButton,
} from "./ReviewCard.css";

interface Props {
  review: UserReview;
}

function formatDate(dateStr: string): string {
  const d = new Date(dateStr);
  return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, "0")}.${String(d.getDate()).padStart(2, "0")}`;
}

export default function ReviewCard({ review }: Props) {
  return (
    <article className={reviewCard}>
      <div className={productRow}>
        <img
          className={productThumb}
          src={review.productThumbnail}
          alt={review.productName}
        />
        <div className={productInfo}>
          <div className={productBrand}>{review.productBrand}</div>
          <div className={productName}>{review.productName}</div>
        </div>
      </div>

      <div className={starRow}>
        {[1, 2, 3, 4, 5].map((n) => (
          <svg
            key={n}
            className={`${star} ${n <= review.rating ? starFilled : starEmpty}`}
            viewBox="0 0 24 24"
            fill={n <= review.rating ? "currentColor" : "none"}
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
          </svg>
        ))}
      </div>

      <p className={reviewContent}>{review.content}</p>
      <div className={reviewDate}>{formatDate(review.createdAt)}</div>

      <div className={reviewActions}>
        <button type="button" className={actionButton}>
          수정
        </button>
        <button type="button" className={actionButton}>
          삭제
        </button>
      </div>
    </article>
  );
}
