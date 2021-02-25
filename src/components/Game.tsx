import React, {useState} from "react";
import Board from "./Board";
import "../index.css";
import calculateWinner from "../util.";

const Game:React.FC = () => {
    const [history,setHistory] = useState<Array<{squares: Array<string>}>>(
        [{
            squares: Array(9).fill(null)
        },])
    const [stepNumber,setStepNumber] = useState<number>(0)
    const [xIsNext,setXisNext] = useState<boolean>(true)

    const handleClick = (i:number) => {
        const _history = history.slice(0, stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice()
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = xIsNext ? '✕' : '◯'

        setHistory(_history.concat([{squares: squares}]))
        setStepNumber(history.length)
        setXisNext(!xIsNext)
    }

    const jumpTo = (step:number) => {
        setStepNumber(step)
        setXisNext((step % 2) === 0)
    }

        const current = history[history.length - 1];
        const winner = calculateWinner(current.squares);

        const moves = history.map((step, move) => {
            const desc = move ?
                'Go to move #' + move :
                'Go to game start';
            return (
                <li key={move}>
                    <button onClick={() => jumpTo(move)}>{desc}</button>
                </li>
            );
        });

        let status;
        if (winner) {
            status = 'Winner: ' + winner;
        } else {
            status = 'Next player: ' + (xIsNext ? 'X' : 'O');
        }
        return (
            <div className="game">
                <div className="game-board">
                    <Board
                        squares={current.squares}
                        onClick={(i) => handleClick(i)}
                    />
                </div>
                <div className="game-info">
                    <div>{ status }</div>
                    <ol>{ moves }</ol>
                </div>
            </div>
        );
}

export default Game;
