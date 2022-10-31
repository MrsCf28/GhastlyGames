import { useEffect, useState } from 'react';
import ReviewCard from './ReviewCards';
import { fetchReviews } from '../../api';

export default function Reviews({category}) {
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

    useEffect(() => {
        setIsLoading(true);
        fetchReviews(category).then(res => {
            setReviews(res.reviews);
            setIsLoading(false);
        });
    }, [category]);

    if (isLoading) return <h3>Items loading ...</h3>;

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
    )
}