import React from "react";
import Board from "./Board";

function calculateWinner(squares) {
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
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default class Game extends React.Component {
  constructor() {
    super();
    this.state = {
      history: [
        {
          squares: new Array(9).fill(null),
        },
      ],
      stepNumber: 0,
      xlsNext: true,
    };
    this.handleClick = this.handleClick.bind(this);
    this.resetState = this.resetState.bind(this);
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) return;

    squares[i] = this.state.xlsNext ? "X" : "O";
    this.setState(() => ({
      history: [...history, { squares }],
      stepNumber: history.length,
      xlsNext: !this.state.xlsNext,
    }));
  }

  jumpTo(step) {
    this.setState(() => ({
      stepNumber: step,
      xlsNext: step % 2 === 0,
    }));
  }

  resetState() {
    this.setState(() => ({
      history: [
        {
          squares: new Array(9).fill(null),
        },
      ],
      stepNumber: 0,
      xlsNext: !this.state.xlsNext,
    }));
  }

  render() {
    const { history, stepNumber } = this.state;
    const current = history[stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((_, move) => (
      <li key={move}>
        <button
          onClick={move === 0 ? this.resetState : this.jumpTo.bind(this, move)}
        >
          {move ? `Go to move # ${move}` : "Go to game start"}
        </button>
      </li>
    ));

    const status = winner
      ? `Winner: ${winner}`
      : `Next player: ${this.state.xlsNext ? "X" : "O"}`;

    return (
      <div className="game">
        <div className="game-board">
          <Board squares={current.squares} onClick={this.handleClick} />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}
