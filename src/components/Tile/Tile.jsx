// Tile.jsx


import "./Tile.css"
const Tile = (props) => {
    let number = props.Number;
    let image = props.image ? props.image : null;
    if(number % 2 === 0)  
        return (
            <div className="tile black-tile" >
                {image && <div style={{backgroundImage: `url(${image})`}} className="chess-piece"></div>}
            </div>
        )
    else{
        return (
            <div className="tile white-tile" >
                {image && <div style={{backgroundImage: `url(${image})`}} className="chess-piece"></div>}
            </div>
        )
    }
}

export default Tile

