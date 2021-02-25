import React from "react";
import Board from "./Board";
import "../index.css";
import {GameProps} from "../types/type";
import calculateWinner from "../util.";

class Game extends React.Component<GameProps,GameProps> {
    constructor(props:GameProps) {
        super(props);
        this.state = {
            history: [
                {
                    squares: Array(9).fill('')
                }
            ],
            stepNumber: this.state.history.length,
            xIsNext: true,
        };
    }
    handleClick(i:number) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1)
        const current = history[this.state.stepNumber];
        const squares = [...current.squares]
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? '✕' : '◯'
        console.log(this.state)
        this.setState({
            history: history.concat([{
                squares: squares,
            }]),
            xIsNext: !this.state.xIsNext,
        });
    }

    jumpTo(step:number) {
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2) === 0,
        });
    }


    render() {
        const history = this.state.history;
        const current = history[history.length - 1];
        const winner = calculateWinner(current.squares);

        const moves = history.map((step, move) => {
            const desc = move ?
                'Go to move #' + move :
                'Go to game start';
            return (
                <li key={move}>
                    <button onClick={() => this.jumpTo(move)}>{desc}</button>
                </li>
            );
        });

        let status;
        if (winner) {
            status = 'Winner: ' + winner;
        } else {
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }
        return (
            <div className="game">
                <div className="game-board">
                    <Board
                        squares={current.squares}
                        onClick={(i) => this.handleClick(i)}
                        xIsNext={this.state.xIsNext}
                    />
                </div>
                <div className="game-info">
                    <div>{ status }</div>
                    <ol>{ moves }</ol>
                </div>
            </div>
        );
    }
}

export default Game;
