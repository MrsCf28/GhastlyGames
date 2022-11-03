import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';

export default function CommentCard({ comment }) {
    const { user } = useContext(UserContext);

    function handleDeleteClick() {}

    return (
        <section className="CommentCard ">
            <div className="commentTopLine">
                <p>
                    User: <b>{comment.author}</b>, Votes:{' '}
                    <b>{comment.votes}</b>
                </p>
                {user.signedIn && user.name === comment.author && (
                    <button
                        id="deleteComment"
                        onClick={handleDeleteClick}
                    >
                        Delete
                    </button>
                )}
            </div>
            <p>Date: {comment.created_at}</p>
            <p>Comment: {comment.body}</p>
        </section>
    );
}
