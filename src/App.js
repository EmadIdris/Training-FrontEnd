import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button'
import Movie from "./Components/Main";
import Form from 'react-bootstrap/Form'
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Series from './Components/MainSeries';
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: [],
      series:[],
      showData:false,
      search:''
    };

    let url = `${process.env.REACT_APP_SERVER}/movies`;
    axios.get(url).then((newData) => {
      this.setState({
        movie: newData.data,
      });
    });
  }
  searchForSeries = (event)=>{
    event.preventDefault();
    this.setState({
      search:event.target.s.value
    })
    let url = `${process.env.REACT_APP_SERVER}/series?search=${this.state.search}`
    axios.get(url).then(searchData =>{
      this.setState({
        series:searchData.data,
        showData:true
      })
    })
  }

  render() {
    return (
      <>
        <h1>Welcome in MyPage</h1>
        <div style={{ display: "flex" , flexWrap:'wrap', justifyContent:'space-between' }}>
          {this.state.movie.map((item, i) => {
            return <Movie key={i} movie={item} />;
          })}
        </div>
        <br />
        <Form onSubmit={this.searchForSeries}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Movie Name</Form.Label>
            <Form.Control name="s" type="text" placeholder="Enter Movie Name" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Search
          </Button>
        </Form>

        {this.state.showData &&
          this.state.series.map((item,idx)=>{
            return <Series series={item} key={idx}/>
          })
        }
      </>
    );
  }
}
export default App;
