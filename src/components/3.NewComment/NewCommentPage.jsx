import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviewById } from '../../api';
import NewComment from './NewComment';
import SingleReviewCard from '../2.SingleReview/SingleReviewCard';

export default function NewCommentPage() {
    const { review_id } = useParams();
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
    const [review, setReview] = useState(blankReview);
    const [isReviewLoading, setIsReviewLoading] = useState(true);

    useEffect(() => {
        setIsReviewLoading(true);
        fetchReviewById(review_id).then(res => {
            setReview(res.review);
            setIsReviewLoading(false);
        })
    }, [review_id])

    return (
        <div className='ReviewAndCommentsPage'>
            {isReviewLoading ? (
                <h3>Review is loading ...</h3>
            ) : (
                <SingleReviewCard review={review} />
            )}
            <NewComment review_id={review_id} />
        </div>
    );
}
