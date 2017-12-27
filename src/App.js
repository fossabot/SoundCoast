import React, { Component } from 'react';
import Navigation from './components/nav/Navigation';
import './styles/css/variables.css'
import './styles/css/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/css/bootstrap.css';

class App extends Component
{
  render()
  {
    return (
      <div className="App">
        <Navigation />
      </div>
    );
  }
}

export default App;
