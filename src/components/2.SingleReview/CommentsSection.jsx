import { useEffect, useState } from 'react';
import { fetchComments } from '../../api';
import CommentCards from './CommentCards';
import ErrorHandler from '../5.ErrorHandling/Error';

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
    const [err, setErr] = useState(null);

    useEffect(() => {
        setCommentsLoading(true);
        setErr(null);
        fetchComments(review_id).then(res => {
            setComments(res.comments);
            setCommentsLoading(false);
        }).catch(err => {
            setErr(err)
        });
    }, [review_id]);

    if (err !== null) {
        return (
            <ErrorHandler
                    code={err.code}
                    msg={err.response.data.msg}
                    status={err.response.status}
                    statusText={err.response.statusText}
                />
        )
    }

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
