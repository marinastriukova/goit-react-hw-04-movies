import { Component } from 'react';
import {fetchTrending} from '../services/API';
import MoviesListItems from '../components/MoviesListItems/MoviesListItems';

export default class HomePage extends Component {

    state = {
        films: []
    }

    componentDidMount() {
        fetchTrending().then(data => this.setState({ films: data.results }))
    }

    render() {
        return <MoviesListItems films={this.state.films}/>
        //  <ul className={style.list}>
        //     {this.state.films.map(popular => {
        //         const { id, popularity, poster_path, title } = popular
        //         return (
        //         <li key={id} className={style.items}>

        //             <img className={style.image} src={`https://image.tmdb.org/t/p/original/${poster_path}`} alt=""></img>
        //             <h2 className={style.title}>{title}</h2>
        //             <p className={style.rating}>Rating: {popularity}</p>

        //         </li>)
        //     })}
        // </ul>
    }
}