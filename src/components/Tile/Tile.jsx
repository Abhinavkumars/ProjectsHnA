// Tile.jsx
import "./Tile.css"
const Tile = (props) => {
    let number = props.Number;
    let image = props.image ? props.image : null;
    if(number % 2 === 0)  
        return (
            <div className="tile white-tile" ><img src={image} className="chess-piece-image"/></div>
        )
    else{
        return (
            <div className="tile black-tile" ><img src={image} className="chess-piece-image"/></div>
        )
    }
}

export default Tile

