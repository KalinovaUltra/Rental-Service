import { Review } from "../../types/reviews"; 
import { ReviewItem } from "../review_item/review_item"; 
import { JSX } from "react";

type ReviewsListProps = {
  reviews: Review[];
}

function ReviewsList({ reviews }: ReviewsListProps): JSX.Element {
  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
        Reviews &middot; <span className="reviews__amount">{reviews.length}</span>
      </h2>
      <ul className="reviews__list">
        {reviews.map((review) => (
          <ReviewItem key={review.id} review={review} />
        ))}
      </ul>
    </section>
  );
}

export { ReviewsList };