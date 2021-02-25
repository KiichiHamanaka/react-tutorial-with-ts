import React from "react";
import {SquareProps} from '../types/type'


const Square:React.FC<SquareProps> = ({value,onClick}) => {
        return (
            <button className="square" onClick={onClick}>
                {value}
            </button>
        );
}

export default Square;
