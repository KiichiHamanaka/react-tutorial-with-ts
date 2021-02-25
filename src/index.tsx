import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Game from './components/Game'

// ========================================

ReactDOM.render(
    <Game history={[{squares: Array(9).fill('')}]} xIsNext={true} stepNumber={0}/>,
    document.getElementById('root')
);
