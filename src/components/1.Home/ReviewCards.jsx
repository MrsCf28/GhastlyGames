import { Link } from 'react-router-dom'
import '../../styling/ReviewCards.css'

export default function ReviewCard({review}) {
    let date = review.created_at.slice(0,10);
    const year = date.slice(0,4)
    const month = date.slice(5,7)
    const day = date.slice(8,10)
    
    date = `${day}/${month}/${year}`

    return(
        <Link to={`/reviews/${review.review_id}`}><section className='reviewCard'>
            <h4>{review.title}</h4>
            <div className='reviewDiv'>
            <p>Category: {review.category}</p>
            <p>Votes: {review.votes}</p>
            </div>
            <div className='reviewDiv'>
            <p>Date: {date}</p>
            <p>Comments: {review.comment_count}</p>
            </div>
            <p>Author: {review.owner}</p>
            <p>Review: <i>{review.review_body.slice(0, 30)}...</i></p>
        </section>
        </Link>
    )
}