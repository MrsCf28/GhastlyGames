import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviewById } from '../../api';
import SingleReviewCard from './SingleReviewCard';
import CommentCards from './CommentCards';
import { fetchComments } from '../../api';

export default function SingleReview() {
    const { review_id } = useParams();
    const blankReview = [{
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
    }];
    const blankComment = {
        comment_id: 0,
        body: '',
        review_id: 0,
        author: '',
        votes: 0,
        created_at: '',
    };
    const [review, setReview] = useState(blankReview);
    const [isReviewLoading, setIsReviewLoading] = useState(true);
    const [comments, setComments] = useState(blankComment);
    const [isCommentsLoading, setCommentsLoading] = useState(true);

    useEffect(() => {
        setIsReviewLoading(true);
        fetchReviewById(review_id).then(res => {
            setReview(res.review);
            setIsReviewLoading(false);
        });
    }, [review_id]);

    useEffect(() => {
        setCommentsLoading(true);
        fetchComments(review_id).then(res => {
            setComments(res.comments);
            setCommentsLoading(false);
        });
    }, [review_id]);

    return (
        <div className="ReviewAndCommentsPage">
            {isReviewLoading ? (
                <h3>Review is loading ...</h3>
            ) : (
                <SingleReviewCard review={review} />
            )}
            {isCommentsLoading ? (
                <h3>Comments are loading ...</h3>
            ) : (
                <CommentCards comments={comments} />
            )}
        </div>
    );
}
