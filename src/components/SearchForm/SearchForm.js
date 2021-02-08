import {Component} from 'react';
import style from './SearchForm.module.css'

export default class MoviesPage extends Component {
    state = {
        name: ''
    }

    handleSearchChange = (e)=>{
        this.setState({name: e.target.value.toLowerCase()})
    }

    handleSubmit=(event)=>{
        event.preventDefault();

        this.props.onSubmit(this.state.name);
    }


    render() {
        return (<form className={style.searchForm} onSubmit={this.handleSubmit}>
            <input
            className={style.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
            onChange={this.handleSearchChange}>
            </input>
            <button type='submit' className={style.button}>Search</button>

        </form>)
    }
}