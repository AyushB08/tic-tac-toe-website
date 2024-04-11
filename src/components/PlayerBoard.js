import React from 'react'
import { useState } from 'react'
import "./PlayerBoardStyles.css"

let wins = 0
let ties = 0
let losses = 0


function PlayerBoard() {
  const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    
   
  
    function handleClick(index) {
      const newBoard = board.slice();
      if (calculateWinner(newBoard) || newBoard[index]) {
        return;
      }
      newBoard[index] = xIsNext ? 'X' : 'O';
      setBoard(newBoard);
      setXIsNext(!xIsNext);
    };
  
    function renderSquare(index) {
      return (
        <button className="square" onClick={() => handleClick(index)}>
          {board[index]}
        </button>
      );
    };
  
    function resetBoard() {
      setBoard(Array(9).fill(null))
      setXIsNext(true)
    }
  
    const winner = calculateWinner(board);
   
    let status;
    if (winner == "tie") {
      
  
      status = "Tie"
      ties += 1
    } else if (winner) {
      status = "Winner: " + winner;
      if (winner == "X") {
        losses += 1
      } else {
        wins += 1
      }
    } else {
      status = "Next Player: " + (xIsNext ? 'X' : 'O');
    }
  
    const squares = [];
  
    for (let index = 0; index < board.length; index++) {
      const squareElement = (
        <div key={index} className="square-container">
          {renderSquare(index)}
        </div>
      );
      squares.push(squareElement);
    }
    return (
      <div className="player">
        <div className="col-one">
            <div className="stats">
            <p>{wins} Wins</p>
            <p>{ties} Ties</p>
            <p>{losses} Losses</p>
            </div>
            <div className="title">
            <h1>Tic Tac Toe AI</h1>
            </div>
            <div className="status">{status}</div>
            <button className="custom-button" onClick={() => resetBoard()}>
                Play Again
            </button>
        </div>
        <div className="col-two">
            <div className="board">
            {squares}
            </div>
        </div>
    
        
        
      </div>
    );
  
}

function calculateWinner(board) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
  
    for (let i = 0; i < board.length; i++) {
      if (board[i] == null) {
        return null;
      }
    }
    return "tie";
  }


export default PlayerBoard