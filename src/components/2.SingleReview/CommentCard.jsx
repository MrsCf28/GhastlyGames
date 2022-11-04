import { useContext, useState } from 'react';
import { deleteComment } from '../../api';
import { UserContext } from '../../context/UserContext';

export default function CommentCard({ comment }) {
    const { user } = useContext(UserContext);
    const [err, setErr] = useState(null);
    const [commentDeleted, setCommentDeleted] = useState(false);
    const [nowDeleted, setNowDeleted] = useState(false);

    let date = comment.created_at.slice(0,10);
    const year = date.slice(0,4)
    const month = date.slice(5,7)
    const day = date.slice(8,10)
    
    date = `${day}/${month}/${year}`

    function handleDeleteClick() {
        setCommentDeleted(true);
        setErr(null);
        deleteComment(comment.comment_id)
            .then(() => {
                setNowDeleted(true);
            })
            .catch(err => {
                setCommentDeleted(false);
                setErr('Something went wrong, please try again');
            });
    }

    return (
        <section className="CommentCard ">
            {err !== null && <p>{err}</p>}
            {!commentDeleted && (
                <>
                    <div className="commentTopLine">
                        <p>
                            User: <b>{comment.author}</b>, Votes:{' '}
                            <b>{comment.votes}</b>
                        </p>
                        {user.signedIn &&
                            user.name === comment.author && (
                                <button
                                    id="deleteComment"
                                    onClick={handleDeleteClick}
                                >
                                    Delete
                                </button>
                            )}
                    </div>
                    <p>Date: {date}</p>
                    <p>Comment: {comment.body}</p>
                </>
            )}
            {commentDeleted &&
                (!nowDeleted ? (
                    <p>Your comment is being deleted, please wait</p>
                ) : (
                    <p>Your comment has been deleted</p>
                ))}
        </section>
    );
}
