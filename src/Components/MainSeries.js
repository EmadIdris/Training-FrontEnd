import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Card from 'react-bootstrap/Card';

class Series extends Component {
    render() {
        return (
            <>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={this.props.series.poster} />
                    <Card.Body>
                        <Card.Title>Title: {this.props.series.seriesName}</Card.Title>
                        <Card.Text>popularity: {this.props.series.popularity}</Card.Text>
                    </Card.Body>
                </Card>
            </>
        );
    }
}
export default Series;