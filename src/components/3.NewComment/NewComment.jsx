import { useState } from 'react';
import { postComment } from '../../api';

export default function NewComment({ review_id }) {
    const username = 'grumpy19'
    const [newComment, setNewComment] = useState("");
    const [disabled, setDisabled] = useState(false)

    function handleCommentChange(event) {
        setNewComment(event.target.value)
    }

    function handleCommentSubmit(event) {
        event.preventDefault();
        setNewComment(newComment)
        postComment(newComment, review_id, username).then(res => {
            setNewComment("")
            setDisabled(true)
            event.target.reset();
        })   
    }

    function handleClick() {
        setDisabled(false);
    }

    return (
        <section id='NewCommentContainer'>
            { !disabled && <section id='NewComment'>
                <form className='newCommentForm' onSubmit={handleCommentSubmit}>
                    <label id='commentLabel' htmlFor='yourComment'>Comment:</label>
                    <br />
                    <textarea name='text' id='commentBox' value={newComment} onChange={handleCommentChange} disabled={disabled}></textarea>
                    <br />
                    <label htmlFor='submit'></label>
                    <button className='commentsButtons' id='submitComment' type='submit' disabled={disabled}>Submit</button>
                </form>
            </section>}
            { disabled && <section>
                <p>Your comment has been submitted!</p>
                <button className='commentsButtons' onClick={handleClick}>Add another comment</button>
                </section>}
        </section>
    )

}