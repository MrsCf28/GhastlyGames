export default function CommentCard({ comment }) {
    return (
        <section className="CommentCard ">
            <p>
                User: <b>{comment.author}</b>, Votes:{' '}
                <b>{comment.votes}</b>
            </p>
            <p>Date: {comment.created_at}</p>
            <p>Comment: {comment.body}</p>
        </section>
    );
}
