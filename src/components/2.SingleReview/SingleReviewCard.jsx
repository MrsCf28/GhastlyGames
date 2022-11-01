import { useState } from 'react';
import { updateReviewVotesById } from '../../api';
import '../../styling/ReviewCards.css';

export default function SingleReviewCard({ review }) {
    const [votes, setVotes] = useState(review.votes);
    const [err, setErr] = useState(null);

    function handleClick() {
        setVotes(votes + 1);
        setErr(null);
        updateReviewVotesById(review.review_id).catch(err => {
            setVotes(votes - 1);
            setErr('Something went wrong, please try again');
        });
    }

    return (
        <section className="reviewCard">
            <h3>{review.title}</h3>
            <p>Designer: {review.designer}</p>
            <p>Category: {review.category}</p>
            <p>Review Author: {review.owner}</p>
            <img
                className="reviewImage"
                src={review.review_img_url}
                alt={`representing ${review.title}`}
            ></img>
            <div className="votesLine">
                <p className='noOfVotes'>Votes: {votes}</p>
                <button className="voteButton" onClick={handleClick}>
                    👍 vote
                </button>
            </div>
            {err !== null && <p>{err}</p>}
            <p>
                Review: <i>{review.review_body}...</i>
            </p>
        </section>
    );
}
