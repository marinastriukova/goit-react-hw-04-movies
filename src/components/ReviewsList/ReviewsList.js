import style from './ReviewsList.module.css';

export default function ReviewsList({ reviews }) {
    return (
        <ul>
            {reviews.map(review => {
                const { content, id, author } = review;
                return <li key={id} >
                    <p className={style.author}>{author}</p>
                    <span className={style.content}>{content}</span>
                </li>
            })}
            {reviews.length === 0 && <span className={style.undefined}>Nothing found</span>}
        </ul>
    )
}