import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
 state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`https://swapi.co/api/people/1/`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }

  render() {
    return (
      <ul>
        { this.state.persons.map(person => <li>{person.birth_year}</li>)}
      </ul>
    )
  }
}

export default App;
