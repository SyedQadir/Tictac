import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Box from './Box/Box';

class App extends Component{

    state = {
        boxState : [
          {'0':''},{'0':''},{'0':''},
          {'0':''},{'0':''},{'0':''},
          {'0':''},{'0':''},{'0':''}
        ]
    }
     

     render=() =>{
         return (
            <div className="App">
              <header className="App-header">
                {this.state.boxState.map(person => {
                  return <Box />
                })
                }
                
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                  Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn React
                </a>
              </header>
            </div>
          );
        
    }
}

export default App;
