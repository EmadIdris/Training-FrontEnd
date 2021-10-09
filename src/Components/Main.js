import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Card from 'react-bootstrap/Card';

class Movies extends Component {
    render() {
        return (
            <>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={this.props.movie.poster} />
                    <Card.Body>
                        <Card.Title>Title: {this.props.movie.movieName}</Card.Title>
                        <Card.Text>popularity: {this.props.movie.popularity}</Card.Text>
                    </Card.Body>
                </Card>
            </>
        );
    }
}
export default Movies;