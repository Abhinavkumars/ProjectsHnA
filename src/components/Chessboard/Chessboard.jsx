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

    return (
        <div className='Chessboard'>
            {board}
        </div>
    );
};

export default Chessboard;
