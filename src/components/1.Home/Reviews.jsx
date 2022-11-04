import { useEffect, useState } from 'react';
import ReviewCard from './ReviewCards';
import { fetchReviews } from '../../api';
import ErrorHandler from '../5.ErrorHandling/Error';

export default function Reviews(params) {
    const blankReview = {
        review_id: 0,
        title: '',
        category: '',
        designer: '',
        owner: '',
        review_body: '',
        review_img_url: '',
        created_at: '',
        votes: 0,
        comment_count: 0,
    };

    const [reviews, setReviews] = useState(blankReview);
    const [isLoading, setIsLoading] = useState(true);
    const [err, setErr] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        setErr(null);
        fetchReviews(params)
            .then(res => {
                setReviews(res.reviews);
                setIsLoading(false);
            })
            .catch(err => {
                setIsLoading(false);
                setErr(err);
            });
    }, [params]);

    if (isLoading) return <h3>Reviews loading ...</h3>;

    if (err !== null) {
        return (
            <ErrorHandler
                code={err.code}
                msg={err.response.data.msg}
                status={err.response.status}
                statusText={err.response.statusText}
            />
        );
    }

    return (
        <section className="ReviewCardsContainer">
            {reviews.map(review => {
                return (
                    <ReviewCard
                        key={`${review.review_id}_Review`}
                        review={review}
                    />
                );
            })}
        </section>
    );
}
