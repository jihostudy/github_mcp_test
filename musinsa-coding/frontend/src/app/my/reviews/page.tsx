import ReviewCard from "@/components/my/ReviewCard";
import EmptyState from "@/components/my/EmptyState";
import { mockReviews } from "@/data/mock/reviews";
import { reviewsPage, reviewCount, countBold, reviewList } from "./page.css";

export default function ReviewsPage() {
  return (
    <div className={reviewsPage}>
      <div className={reviewCount}>
        작성한 리뷰 <span className={countBold}>{mockReviews.length}</span>건
      </div>

      <div className={reviewList}>
        {mockReviews.length > 0 ? (
          mockReviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))
        ) : (
          <EmptyState
            icon="review"
            title="작성한 리뷰가 없습니다"
            description="구매한 상품의 리뷰를 작성해보세요"
          />
        )}
      </div>
    </div>
  );
}
