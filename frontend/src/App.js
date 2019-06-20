import React, { Component } from 'react';
import Home from './components/Home/Home';
import {Route} from 'react-router-dom';
import Header from './components/Layout/Header';

class App extends Component {

  render() {
    return (
      <div>
  			<Header/>
        	<Route path='/' component={Home}/>
      </div>
    );
  }
}

export default App;