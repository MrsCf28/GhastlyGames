import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviewById } from '../../api';
import SingleReviewCard from './SingleReviewCard';
import CommentsSection from './CommentsSection';
import NewComment from '../3.NewComment/NewComment';
import '../../styling/CommentsSection.css'

export default function SingleReview() {
    const { review_id } = useParams();
    const blankReview = [
        {
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
        },
    ];
    const [review, setReview] = useState(blankReview);
    const [isReviewLoading, setIsReviewLoading] = useState(true);
    const [showComments, setShowComments] = useState(true);

    useEffect(() => {
        setIsReviewLoading(true);
        fetchReviewById(review_id).then(res => {
            setReview(res.review);
            setIsReviewLoading(false);
        });
    }, [review_id]);

    function handleClick() {
        setShowComments(current => !current);
    }

    return (
        <div className="ReviewAndCommentsPage">
            {isReviewLoading ? (
                <h3>Review is loading ...</h3>
            ) : (
                <SingleReviewCard review={review} />
            )}
            {showComments && (
                <section className='CommentsContainer'>
                    <button className='commentsButtons' onClick={handleClick}>
                        Add new comment
                    </button>
                    <CommentsSection review_id={review_id} />
                </section>
            )}
            {!showComments && (
                <section className='CommentsContainer'>
                    <button className='commentsButtons' id='back' onClick={handleClick}>
                        Back to comments
                    </button>
                    <NewComment review_id={review_id} />
                </section>
            )}
        </div>
    );
}
