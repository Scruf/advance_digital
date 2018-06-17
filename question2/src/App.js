import React, { Component } from 'react';
import './App.css';

import Column from './Column';
class App extends Component {
  render() {
    return (
     	<div className="container">
        	<div className="row">
        		<Column count={1}/>
        		<Column count={2}/>
        	</div>
        </div>
     
    );
  }
}

export default App;
