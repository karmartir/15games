import React from 'react';

interface TileProps{
    value: number
}

const Tile: React.FC<TileProps> = ({value}) => {
    const isEmpty = value === 0;

    return (
        <div className='tile' >
           <span className='tile-text'>
               {isEmpty ? '' : value}
           </span>
        </div>
    );
};

export default Tile;