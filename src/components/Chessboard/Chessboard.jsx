
// import { useState } from 'react';
// import PropTypes from 'prop-types';
import Tile from '../Tile/Tile';
import './Chessboard.css';


const HorizontalAxis = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
const VerticalAxis = ['1', '2', '3', '4', '5', '6', '7', '8'];

const Chessboard = () => {
    

    let board = [];

    for (let j = VerticalAxis.length - 1; j >= 0; j--) {
        for (let i = 0; i < HorizontalAxis.length; i++) {
            const number = i + j + 1;
            let image = getImageForPosition(i, j); 
            board.push(
            <Tile key = {`${HorizontalAxis[i]}${VerticalAxis[j]}`} Number = {number} image = {image}/>
            );
        }
    }

    return (
        <div className='Chessboard'>
            {board}
        </div>
    );
};
function getImageForPosition(i, j) {

    const Black_Pieces = {
        'rook' : '/images/rook_b.png',
        'bishop' : 'images/bishop_b.png',
        'knight' : 'images/knight_b.png',
        'queen' : 'images/queen_b.png',
        'king' : 'images/king_b.png',
        'pawn' : '/images/pawn_b.png',
    }
    const White_Pieces = {
        'rook' : '/images/rook_w.png',
        'bishop' : '/images/bishop_w.png',
        'knight' : '/images/knight_w.png',
        'queen' : '/images/queen_w.png',
        'king' : '/images/king_w.png',
        'pawn' : '/images/pawn_w.png',

    }
    if(j === 6){
        return Black_Pieces['pawn']; // pawn 
    }
    if(j === 1){
        return White_Pieces['pawn']; // pawn
    }
    if (j === 7) {
        if (i === 0 || i === 7) {
            return Black_Pieces['rook']; // Rook
        } else if (i === 1 || i === 6) {
            return Black_Pieces['knight']; // Knight
        } else if (i === 2 || i === 5) {
            return Black_Pieces['bishop']; // Bishop
        } else if (i === 3) {
            return Black_Pieces['queen']; // Queen
        } else if (i === 4) {
            return Black_Pieces['king']; // King
        }
    }
    if (j === 0) {
        if (i === 0 || i === 7) {
            return White_Pieces['rook']; // Rook
        } else if (i === 1 || i === 6) {
            return White_Pieces['knight']; // Knight
        } else if (i === 2 || i === 5) {
            return White_Pieces['bishop']; // Bishop
        } else if (i === 3) {
            return White_Pieces['queen']; // Queen
        } else if (i === 4) {
            return White_Pieces['king']; // King
        }
    }
    return undefined;
}
export default Chessboard;

