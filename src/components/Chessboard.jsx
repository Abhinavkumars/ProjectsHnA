import React from 'react';
// import { useState } from 'react';

import './Chessboard.css';


const HorizontalAxis = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
const VerticalAxis = ['1', '2', '3', '4', '5', '6', '7', '8'];

const Chessboard = () => {
    

    let board = [];

    for (let j = VerticalAxis.length - 1; j >= 0; j--) {
        for (let i = 0; i < HorizontalAxis.length; i++) {
            const number = i + j + 1;
            if(number % 2 === 0) {
            board.push(
                <div key ={`${HorizontalAxis[i]}${VerticalAxis[j]}`} className="tile white-tile">[{HorizontalAxis[i]}{VerticalAxis[j]}] </div>
                );
            } else {
             board.push(
                <div key ={`${HorizontalAxis[i]}${VerticalAxis[j]}`} className="tile black-tile">[{HorizontalAxis[i]}{VerticalAxis[j]}] </div>

                );
            }
        }
    }

    return (
        <div className='Chessboard'>
            {board}
        </div>
    );
};

export default Chessboard;
