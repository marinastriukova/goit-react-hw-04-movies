import style from './MoviesListItems.module.css';
import {Link} from 'react-router-dom';

export default function MoviesListItems({ films }) {

    return (
        <ul className={style.list}>
            {films.map(popular => {
                const { id, popularity, poster_path, title } = popular
                return (
                    <li key={id} className={style.items}>
                        <Link to={`/movies/${id}`} className={style.link}>
                            <img className={style.image} src={`https://image.tmdb.org/t/p/original${poster_path}`} alt=""></img>
                            <h2 className={style.title}>{title}</h2>
                            <p className={style.rating}>Rating: {popularity}</p>
                        </Link>
                    </li>)
            })}
        </ul>
    )
}