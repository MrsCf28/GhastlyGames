import '../../styling/ReviewCards.css'

export default function SingleReviewCard({review}) {
    return(
        <section className='reviewCard'>
            <h3>{review.title}</h3>
            <p>Designer: {review.designer}</p>
            <p>Category: {review.category}</p>
            <p>Review Author: {review.owner}</p>
            <img className='reviewImage' src={review.review_img_url} alt={`representing ${review.title}`}></img>
            <p>Votes: {review.votes}</p>
            <p>Review: <i>{review.review_body}...</i></p>
            <button className='voteButton'>👍 vote</button>
        </section>
    )
}