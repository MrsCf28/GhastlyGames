import { useEffect, useState } from 'react';
import { fetchReviews } from '../api';
import ReviewCard from './ReviewCards';
import '../styling/SearchBar.css'

export default function Home() {
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
        fetchReviews().then(res => {
            setReviews(res.reviews);
            setIsLoading(false);
        });
    }, []);

    if (isLoading) return <h3>Items loading ...</h3>;

    return (
        <div id="HomePage">
            <section className="FilterAndSort">
                <div id='filter'>Categories</div>
                <div id='sort'>Sort By</div>
            </section>
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
        </div>
    );
}
