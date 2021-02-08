import { Component } from 'react';
// import style from './MoviesPage.module.css'
import SearchForm from '../components/SearchForm/SearchForm';
import {fetchSearchMovies} from '../services/API';
import MoviesListItems from '../components/MoviesListItems/MoviesListItems';

export default class MoviesPage extends Component {
    state = {
        name: '',
        films: []
    }
  
    componentDidUpdate(prevProps, prevState){

        if(prevState.name !== this.state.name){
            fetchSearchMovies(this.state.name).then(data=>{
                this.setState({films: data.results});
            })
        }
        
    }

    handleFormSubmit = name => {
        this.setState({name})
    }

    render() {
        return (
            <>
            <SearchForm onSubmit={this.handleFormSubmit}></SearchForm>
            <MoviesListItems films={this.state.films}></MoviesListItems>
            </>
        )
    }
}