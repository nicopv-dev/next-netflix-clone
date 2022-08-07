import Image from 'next/image'
import { Review } from '../types'
import { getImageUrl } from '../utils/requests'

interface IMovieReviewsProps {
  reviews: Review[]
}

export default function MovieReviews({ reviews }: IMovieReviewsProps) {
  console.log(reviews)

  return (
    <section className="flex flex-col gap-2">
      <h4 className="text-white">Reviews</h4>
      <div className="flex flex-col gap-6">
        {reviews.slice(0, 2).map((review, index) => (
          <ReviewItem key={index} review={review} />
        ))}
      </div>
    </section>
  )
}

const ReviewItem = ({ review }: { review: Review }) => {
  const findImage = (): string => {
    if (review.author_details.avatar_path) {
      if (review.author_details.avatar_path.includes('https')) {
        return review.author_details.avatar_path.replace('/', '')
      } else {
        return `https://www.gravatar.com/avatar${review.author_details.avatar_path}`
      }
    }

    return 'https://previews.123rf.com/images/kritchanut/kritchanut1406/kritchanut140600093/29213195-male-silhouette-avatar-profile-picture.jpg'
  }

  return (
    <div className="flex items-center gap-4 rounded-lg bg-netflix p-4 shadow-lg">
      <div className="flex flex-col items-center">
        <Image
          src={findImage()}
          alt={review.author_details.name}
          width={100}
          height={100}
          className="rounded-full"
        />
        <h5 className="text-base font-medium text-white">{review.author}</h5>
        <p className="text-sm font-light text-white">
          {review.author_details.username}
        </p>
      </div>
      <div>
        <p className="text-white line-clamp-4">{review.content}</p>
      </div>
    </div>
  )
}
