import React from 'react';
import Tile from "./Tile";


interface BoardProps {
    tiles: number[]
}

const Board: React.FC<BoardProps> = ({tiles}) => {

    const renderRow = (rowIndex: number) => {
    return (
        <div className='board-row' key={rowIndex}>
            {tiles.slice(rowIndex * 4, (rowIndex + 1) * 4).map((value, index) => (
                    <Tile
                        key={index}
                        value={value}
                    />
                ))}
        </div>
    );
    }
    return <div className='board'> {[0, 1, 2, 3].map(renderRow)}</div>
};

export default Board;