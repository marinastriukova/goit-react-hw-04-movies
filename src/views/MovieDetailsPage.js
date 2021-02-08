import { Component, lazy} from "react";
import {Route, Link} from 'react-router-dom';
import { fetchMovieDetailsPage } from '../services/API';
import MovieInfo from '../components/MovieInfo/MovieInfo';
// import Cast from './Cast';
// import Reviews from './Reviews';

const Cast=lazy(()=>import('./Cast'));
const  Reviews=lazy(()=>import('./Reviews'));

export default class MovieDetailsPage extends Component {

    state = {
        film: {}
    }

    componentDidMount() {
        fetchMovieDetailsPage(this.props.match.params.movieId).then(data => this.setState({ film: data }))
    }

    render() {
        
        return (
        <>
            <MovieInfo film={this.state.film}></MovieInfo>                   
            <Link to={`${this.props.match.url}/cast`}>Cast</Link>
            <Link to={`${this.props.match.url}/reviews`}>Reviews</Link>
           
            <Route path={`${this.props.match.url}/cast`} render={props => <Cast {...props} id={this.props.match.params.movieId}/>}
            />
            <Route path={`${this.props.match.url}/reviews`} render={props => <Reviews {...props} id={this.props.match.params.movieId}/>}
            />
            
        </>
        )
   
    }
}

