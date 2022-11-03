import { useState, useContext } from 'react';
import { postComment } from '../../api';
import { UserContext } from '../../context/UserContext';

export default function NewComment({ review_id }) {
    const { user } = useContext(UserContext);
    const [newComment, setNewComment] = useState('');
    const [disabled, setDisabled] = useState(false);

    function handleCommentChange(event) {
        setNewComment(event.target.value);
    }

    function handleCommentSubmit(event) {
        event.preventDefault();
        if (newComment !== '') {
            postComment(newComment, review_id, user.name).then(res => {
                setNewComment('');
                setDisabled(true);
                event.target.reset();
            });
        }
    }

    function handleClick() {
        setDisabled(false);
    }

    return (
        <section id="NewCommentContainer">
            {!disabled && user.signedIn && (
                <section id="NewComment">
                    <form
                        className="newCommentForm"
                        onSubmit={handleCommentSubmit}
                    >
                        <label
                            id="commentLabel"
                            htmlFor="yourComment"
                        >
                            Comment:
                        </label>
                        <br />
                        <textarea
                            name="text"
                            id="commentBox"
                            value={newComment}
                            onChange={handleCommentChange}
                            disabled={disabled}
                        ></textarea>
                        <br />
                        <label htmlFor="submit"></label>
                        <button
                            className="commentsButtons"
                            id="submitComment"
                            type="submit"
                            disabled={disabled}
                        >
                            Submit
                        </button>
                    </form>
                </section>
            )}
            {disabled && user.signedIn && (
                <section>
                    <p>Your comment has been submitted!</p>
                    <button
                        className="commentsButtons"
                        onClick={handleClick}
                    >
                        Add another comment
                    </button>
                </section>
            )}
            {!user.signedIn && <section>
                <p>Please sign in to leave a comment</p>
                </section>}
        </section>
    );
}
