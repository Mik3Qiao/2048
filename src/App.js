import React, { Component } from 'react';
import {Animated} from "react-animated-css";
import './App.css';

class App extends Component {

  state = {
    score: 0,
    started: false,
    end: false,
    board: [
      [0,0,0,0],
      [0,0,0,0],
      [0,0,0,0],
      [0,0,0,0]
    ]
  }


  render () {
    return (
      <div className = "mainContent">

        <div className = "score">
          Score: {this.state.score}
        </div>

        <div className = "Board">
          {this.state.board.map( (row)=>{
            return(
              <React.Fragment>
                {row.map(cell =>{
                  const className = "cell" + cell
                  return (
                    <Animated 
                      animationIn="fadeIn" 
                      animationOut="fadeOut" 
                      isVisible={true}
                      className={className}
                    >
                      {cell}
                    </Animated>
                  )
                })}
              </React.Fragment>
            )
          }
          )}
        </div>

      </div>
    )
  }
}

export default App;
