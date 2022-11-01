import CommentCard from './CommentCard';

export default function CommentCards({comments}) {
    return (
        <section className="CommentCardsContainer">
            {comments.map(comment => {
                return (
                    <CommentCard
                        key={`${comment.comment_id}_Comment`}
                        comment={comment}
                    />
                );
            })}
        </section>
    );
}
