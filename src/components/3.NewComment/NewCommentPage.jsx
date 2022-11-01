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
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        fetchReviewById(review_id).then(res => {
            setReview(res.review);
            setIsLoading(false);
        })
    }, [review_id])

    if (isLoading) return <h3>Items loading ...</h3>;

    return (
        <div className='ReviewAndCommentsPage'>
            <SingleReviewCard review={review}/>
            <NewComment review_id={review_id} />
        </div>
    );
}
