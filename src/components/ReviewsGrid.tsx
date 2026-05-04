import { reviews } from "@/data/reviews";
import ReviewItem from "./ReviewItem";

export default function ReviewsGrid() {

  return (
    <div className="grid grid-cols-3 gap-0.5 mt-30">
      {reviews.map((review, i) => (
        
        <ReviewItem
          key={i}
          review={review}
          i={i}
        />

      ))}
    </div>
  );
}
