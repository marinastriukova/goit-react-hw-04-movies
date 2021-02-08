import style from './CastList.module.css';
import defaltImg from'./defalt.jpg';

export default function CastList({ casts }) {
    
    return (
        <>
        <ul className={style.list}>
            {casts.map(cast => {
                const { id, original_name, profile_path } = cast
                return (<li className={style.items} key={id}>
                    <img className={style.img} src={profile_path === null ? defaltImg : `https://image.tmdb.org/t/p/original${profile_path}`} alt="profile" />
                    <p>{original_name}</p>
                </li>)
            }
            )}
        </ul>
        <span className={style.text}>And Others...</span>
        </>
    )

}