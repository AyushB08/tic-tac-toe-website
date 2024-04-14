import React from 'react'
import { useState } from 'react'
import "./AIBoardStyles.css"

let wins = 0
let ties = 0
let losses = 0
function AIBoard() {
    const [board, setBoard] = useState([null, null, null, null, null, null, null, null, null]);

    const [xIsNext, setXIsNext] = useState(true);
    const [toggleChecked, setToggleChecked] = useState(false);
    

    function getValueOfBoard(board) {
      if (board[0] === board[1] && board[1] === board[2]) {
          if (board[0] === "O") {
              return -10;
          }
          if (board[0] === "X") {
              return 10;
          }
      }
      if (board[3] === board[4] && board[4] === board[5]) {
          if (board[3] === "O") {
              return -10;
          }
          if (board[3] === "X") {
              return 10;
          }
      }
      if (board[6] === board[7] && board[7] === board[8]) {
          if (board[6] === "O") {
              return -10;
          }
          if (board[6] === "X") {
              return 10;
          }
      }
  
      if (board[0] === board[3] && board[3] === board[6]) {
          if (board[0] === "O") {
              return -10;
          }
          if (board[0] === "X") {
              return 10;
          }
      }
  
      if (board[1] === board[4] && board[4] === board[7]) {
          if (board[1] === "O") {
              return -10;
          }
          if (board[1] === "X") {
              return 10;
          }
      }
  
      if (board[2] === board[5] && board[5] === board[8]) {
          if (board[2] === "O") {
              return -10;
          }
          if (board[2] === "X") {
              return 10;
          }
      }
  
      if (board[0] === board[4] && board[4] === board[8]) {
          if (board[0] === "O") {
              return -10;
          }
          if (board[0] === "X") {
              return 10;
          }
      }
  
      if (board[2] === board[4] && board[4] === board[6]) {
          if (board[2] === "O") {
              return -10;
          }
          if (board[2] === "X") {
              return 10;
          }
      }
  
      return 0;
    }

    function minimax(board, depth, isComputerPlaying, alpha, beta) {
      let value = getValueOfBoard(board);
  
      if (value === 10 || value === -10) {
          return value;
      }
  
      if (!isMovesLeft(board)) {
          return 0;
      }
  
      if (isComputerPlaying) {
          let bestVal = -10;
          for (let i = 0; i < 9; i++) {
              if (board[i] === null) {
                  board[i] = "X";
  
                  bestVal = Math.max(bestVal, minimax(board, depth + 1, !isComputerPlaying, alpha, beta) - depth);
                  board[i] = null;
                  alpha = Math.max(alpha, bestVal);
                  if (beta <= alpha) {
                      break;
                  }
              }
          }
          return bestVal;
      } else {
          let bestVal = 10;
          for (let i = 0; i < 9; i++) {
              if (board[i] === null) {
                  board[i] = "O";
                  bestVal = Math.min(bestVal, minimax(board, depth + 1, !isComputerPlaying, alpha, beta) + depth);
                  board[i] = null;
                  beta = Math.min(beta, bestVal);
                  if (beta <= alpha) {
                      break;
                  }
              }
          }
          return bestVal;
      }
    }
  
    function findBestMove(board) {
        let bestVal = -10;
        let bestMove = 0;
    
        for (let i = 0; i < 9; i++) {
            if (board[i] === null) {
                board[i] = "X";
                let value = minimax(board, 0, false, -1000, 1000);
                board[i] = null;
                if (value > bestVal) {
                    bestMove = i;
                    bestVal = value;
                }
            }
        }
        return bestMove;
    }
  
  
    
    function handleClick(index) {
      const newBoard = board.slice();
      if (calculateWinner(newBoard) || newBoard[index]) {
        console.log("went here")
        return;
      }
      console.log("went below")
      newBoard[index] = "O";
     
      setBoard(newBoard);

      const secondBoard = newBoard.slice();
      let move = findBestMove(secondBoard)

      if (secondBoard[move] === null) {
        
        
        
        secondBoard[move] = "X";
        console.log("MOVES: " + move)
  
        setBoard(secondBoard)
      }
      
      
      
      
    };

    function isMovesLeft(board) {
      for (let i = 0; i < 9; i++) {
          if (board[i] === null) {
              return true;
          }
      }
      return false;
    }
  
  
    function renderSquare(index) {
      return (
        <button className="square" onClick={() => handleClick(index)}>
          {board[index]}
        </button>
      );
    };

    function resetTop() {
      setBoard(Array(9).fill(null));
      setXIsNext(true);
    }

    function resetBottom() {
      setBoard(["X", null, null, null, null, null, null, null, null]);
      setXIsNext(false);
    }
  
    function resetBoard() {
      if (toggleChecked) {
          console.log("x started");
          
          setBoard(["X", null, null, null, null, null, null, null, null]);
          setXIsNext(false);
      } else {
          console.log("o started")
          setBoard(Array(9).fill(null));
          setXIsNext(true);
      }
      
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
      status = "Next Player: " + ('O');
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
      <div className="ai">
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
            
            <button class="button type1" onClick = {resetTop}>
              <span class="btn-txt">You Play First</span>
            </button>
            <button class="button type1" onClick = {resetBottom}>
              <span class="btn-txt">AI Plays First</span>
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
  

export default AIBoard