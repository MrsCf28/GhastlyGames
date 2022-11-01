import { Link } from 'react-router-dom'
import '../../styling/ReviewCards.css'

export default function ReviewCard({review}) {
    return(
        <Link to={`/reviews/${review.review_id}`}><section className='reviewCard'>
            <h4>{review.title}</h4>
            <p>Category: {review.category}</p>
            <p>Author: {review.owner}</p>
            <p>Review: <i>{review.review_body.slice(0, 30)}...</i></p>
        </section>
        </Link>
    )
}