import React, { Component } from 'react';
import './App.css';
import {Provider} from 'react-redux';

import Juxtapose from './components/Juxtapose';


import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store ={store}>
      <div className="App">
        <hr />
        <Juxtapose />
      </div>
      </Provider>
    );
  }
}

export default App;
