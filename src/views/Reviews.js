import { fetchReviews } from '../services/API';
import { Component } from 'react';
import ReviewsList from '../components/ReviewsList/ReviewsList';

export default class Reviews extends Component {

    state = {
        reviews: []
    }

    componentDidMount() {
        fetchReviews(this.props.id).then(data => this.setState({ reviews: data.results }))
    }

    render() {
        return <ReviewsList reviews={this.state.reviews}></ReviewsList>
}
}