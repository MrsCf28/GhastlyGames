import { useEffect, useState } from 'react';
import { fetchComments } from '../../api';
import CommentCards from './CommentCards';

export default function CommentsSection({ review_id }) {
    const blankComment = {
        comment_id: 0,
        body: '',
        review_id: 0,
        author: '',
        votes: 0,
        created_at: '',
    };
    const [comments, setComments] = useState(blankComment);
    const [isCommentsLoading, setCommentsLoading] = useState(true);

    useEffect(() => {
        setCommentsLoading(true);
        fetchComments(review_id).then(res => {
            setComments(res.comments);
            setCommentsLoading(false);
        });
    }, [review_id]);

    return (
        <section>
            {isCommentsLoading ? (
                <h3>Comments are loading ...</h3>
            ) : (
                <CommentCards comments={comments} />
            )}
        </section>
    );
}
