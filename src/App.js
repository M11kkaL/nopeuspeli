import React, {Component} from 'react';
import './App.css';
import Circle from './circle/circle';
import GameOver from './gameover/gameover';


const getRndInteger = (min, max) => {
  return Math.floor(Math.random() * (max-min + 1)) +min;
}

class App extends Component {
  state = {
    score: 0,
    current: 0,
    showGameOver: false
  };

  pace = 1500;
  timer = undefined;

  next = () => {
    let nextActive = undefined;

    do {
      nextActive = getRndInteger(1, 8);
    } while (nextActive === this.state.current);

    this.setState({
      current:nextActive,
    });

    this.pace *=0.97;
    this.timer = setTimeout(this.next.bind(this), this.pace);

    console.log(this.state.current);
    
  }

  clickHandler = (btnId) =>{

    if (this.state.current !== btnId) {
      this.endHandler();
      return;
    } 

    this.setState({
        score: this.state.score + 1
      })
  }

  startHandler = () => {
    this.next();
  }
  endHandler = () => {
    clearTimeout(this.timer);
    
    this.setState({
      showGameOver: true
    })
  }

  render(){
  return (
    <div className="App">
      <h1>Nopeuspeli</h1>
      <p>Your score is: {this.state.score}</p>
      <div className='container'>
      <div className='wrapper'>
      <Circle 
      buttonColor='#69013B'
      active={this.state.current === 1}
      click={() => this.clickHandler(1)
      }/>
      <Circle 
      buttonColor='#69013B'
      active={this.state.current === 2}
      click={() => this.clickHandler(2)}/>
      <Circle 
      buttonColor='#69013B'
      active={this.state.current === 3}
      click={() => this.clickHandler(3)}/>
      <Circle 
      buttonColor='#69013B'
      active={this.state.current === 4}
      click={() => this.clickHandler(4)}/>
      <Circle 
      buttonColor='#69013B'
      active={this.state.current === 5}
      click={() => this.clickHandler(5)
      }/>
      <Circle 
      buttonColor='#69013B'
      active={this.state.current === 6}
      click={() => this.clickHandler(6)}/>
      <Circle 
      buttonColor='#69013B'
      active={this.state.current === 7}
      click={() => this.clickHandler(7)}/>
      <Circle 
      buttonColor='#69013B'
      active={this.state.current === 8}
      click={() => this.clickHandler(8)}/>
      </div>
      </div>
      <div className='buttons'>
        <button onClick={this.startHandler}>Start Game</button>
        <button onClick={this.endHandler}>End Game</button>
      </div>

      {this.state.showGameOver && <GameOver score={this.state.score}/>}
    </div>
  );
  }
}

export default App;
