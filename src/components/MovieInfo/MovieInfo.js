import style from './MovieInfo.module.css';

export default function MovieInfo({ film }) {
    const { title, poster_path, overview, vote_average, genres } = film;
    return (
        <div className={style.wrapper}>
        <div className={style.container}>
            <img className={style.img} src={`https://image.tmdb.org/t/p/original${poster_path}`} alt="poster" />
            <div className={style.info}>
                <h1>{title}</h1>
                <p>User score: {vote_average}</p>
                <h3>Overview:</h3>
                <p>{overview}</p>
                <ul className={style.list} >Genres:
            {genres !== undefined && genres.map(item => {
                    const { id, name } = item;
                    return (
                        <li className={style.items} key={id}>
                            {name}
                        </li>
                    )
                })}
                </ul>
            </div>
            
        </div>
        <div>
            <p>Additional information:</p>
        </div>
        </div>
    )

}