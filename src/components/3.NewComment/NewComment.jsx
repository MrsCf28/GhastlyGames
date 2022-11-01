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
        console.log(newComment)
        console.log(event)
        console.log(event.target, "<<target")
        event.preventDefault();
        setNewComment(newComment)
        postComment(newComment, review_id, username).then(res => {
            console.log("added comment");
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
                    <label htmlFor='yourComment'>Comment:</label>
                    <input type='text' value={newComment} onChange={handleCommentChange} disabled={disabled}></input>
                    <label htmlFor='submit'></label>
                    <button type='submit' disabled={disabled}>Submit</button>
                </form>
            </section>}
            { disabled && <section>
                <p>Your comment has been submitted!</p>
                <button onClick={handleClick}>Add another comment</button>
                </section>}
        </section>
    )

}