import React from 'react';

interface TileProps{
    value: number
    onClick: () => void;
}

const Tile: React.FC<TileProps> = ({value, onClick}) => {
    const isEmpty = value === 0;

    return (
        <div onClick={() => {if(!isEmpty){onClick()}}}
             className='tile'
        >
           <span className='tile-text'>
               {isEmpty ? '' : value}
           </span>
        </div>
    );
};

export default Tile;