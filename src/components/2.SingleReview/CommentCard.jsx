export default function CommentCard({comment}) {
    return (
        <section className="CommentCard ">
            <p>
                User: {comment.author}, Votes: {comment.votes}
            </p>
            <p>Date: {comment.created_at}</p>
            <p>Comment: {comment.body}</p>
        </section>
    );
}
