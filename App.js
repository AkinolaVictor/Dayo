import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import { Provider } from 'react-redux';
import './App.css';
import Renderer from "./renderer";
import store from './store';

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <Provider store={store}>
          <Router>
              <Renderer/>
          </Router>
        </Provider>
      </div>
    )};
}

export default App;
