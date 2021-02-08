import { fetchCast } from '../services/API';
import { Component } from 'react';
import CastList from '../components/CastList/CastList';


export default class Cast extends Component {

    state = {
        cast: []
    }

    componentDidMount() {
        fetchCast(this.props.id).then(data => this.setState({ cast: data.cast.slice(0, 6) }))
    }

    render() {
        return (
            <>
                <CastList casts={this.state.cast}></CastList>
            </>
        )
    }
}