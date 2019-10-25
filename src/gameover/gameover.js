import React from 'react';
import './gameover.css';

const closeHandler = () => {
    window.location.reload();
}

const GameOver = (props) => {
    return (
        <div id='overlay'>
        <div className='gameoverbox'>
            <p id='gameover'>Game Over! Your final score was: {props.score} </p>
            <button onClick={closeHandler}>Close</button>
        </div>

        </div>
    );
}

export default GameOver;