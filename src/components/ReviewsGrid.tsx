import { reviews } from "@/data/reviews";
import ReviewItem from "./ReviewItem";

export default function ReviewsGrid() {

  return (
    <div className="grid lg:grid-cols-3 gap-0.5 lg:mt-30 mt-10">
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
