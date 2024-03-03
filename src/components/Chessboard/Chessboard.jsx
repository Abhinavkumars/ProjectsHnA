import { useRef } from 'react';
import Tile from '../Tile/Tile';
import './Chessboard.css';

const HorizontalAxis = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
const VerticalAxis = ['1', '2', '3', '4', '5', '6', '7', '8'];


const Chessboard = () => {
    let board = [];

    const Pieces = [];

    for (let p = 0; p < 2; p++) {
        const type = p === 0 ? 'b' : 'w';
        const y = p === 0 ? 7 : 0;
        Pieces.push({ image: `/images/rook_${type}.png`, x: 0, y });
        Pieces.push({ image: `images/bishop_${type}.png`, x: 2, y });
        Pieces.push({ image: `images/knight_${type}.png`, x: 1, y });
        Pieces.push({ image: `images/queen_${type}.png`, x: 3, y });
        Pieces.push({ image: `images/king_${type}.png`, x: 4, y });
        Pieces.push({ image: `/images/rook_${type}.png`, x: 7, y });
        Pieces.push({ image: `images/bishop_${type}.png`, x: 5, y });
        Pieces.push({ image: `images/knight_${type}.png`, x: 6, y });
    }

    for (let i = 0; i < 8; i++) {
        Pieces.push({ image: "images/pawn_b.png", x: i, y: 6 });
        Pieces.push({ image: "images/pawn_w.png", x: i, y: 1 });
    }

    for (let j = VerticalAxis.length - 1; j >= 0; j--) {
        for (let i = 0; i < HorizontalAxis.length; i++) {
            const number = i + j + 2;
            let image = undefined;
            Pieces.forEach((p) => {
                if (p.x === i && p.y === j) {
                    image = p.image;
                }
            });
            board.push(
                <Tile key={`${HorizontalAxis[i]}${VerticalAxis[j]}`} Number={number} image={image} />
            );
        }
    }
    const chessboardRef = useRef(null);
    let activePiece = null;
function grabPiece(e){
    const element  = e.target;
    if(element.classList.contains("chess-piece")){
        console.log(e.target);
        const x = e.clientX - 50;
        const y = e.clientY - 50;
        element.style.position = "absolute";
        element.style.left = `${x}px`;
        element.style.top = `${y}px`;
        activePiece = element;
    }
}
function movePiece(e) {
    const chessboard = chessboardRef.current;
    if (activePiece && chessboard) {
      const minX = chessboard.offsetLeft - 25;
      const minY = chessboard.offsetTop - 25;
      const maxX = chessboard.offsetLeft + chessboard.clientWidth - 75;
      const maxY = chessboard.offsetTop + chessboard.clientHeight - 75;
      const x = e.clientX - 50;
      const y = e.clientY - 50;
      activePiece.style.position = "absolute";

      //If x is smaller than minimum amount
      if (x < minX) {
        activePiece.style.left = `${minX}px`;
      }
      //If x is bigger than maximum amount
      else if (x > maxX) {
        activePiece.style.left = `${maxX}px`;
      }
      //If x is in the constraints
      else {
        activePiece.style.left = `${x}px`;
      }

      //If y is smaller than minimum amount
      if (y < minY) {
        activePiece.style.top = `${minY}px`;
      }
      //If y is bigger than maximum amount
      else if (y > maxY) {
        activePiece.style.top = `${maxY}px`;
      }
      //If y is in the constraints
      else {
        activePiece.style.top = `${y}px`;
      }
    }
  }
  function dropPiece(e){
    if(activePiece){
        activePiece = null;
    }
}

    return (
        <div 
        onMouseMove={e=>movePiece(e)}
        onMouseDown={e=>grabPiece(e)} 
        onMouseUp={e=>dropPiece(e)} 
        className='Chessboard'
        ref = {chessboardRef}>
            {board}
        </div>
    );
};

export default Chessboard;
