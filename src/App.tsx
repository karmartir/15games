import React, {useState} from 'react';
import './App.css';
import Board from "./Board";

const App = () => {
    const initialTiles = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0];

    const [tiles, setTiles] = useState(initialTiles);

    const shuffleTiles = () => {
        const shuffledTiles = [...initialTiles]

        for (let i = shuffledTiles.length -1; i > 0 ; i--) {
            const randomNumber = Math.floor(Math.random() * (i + 1));
            [shuffledTiles[i], shuffledTiles[randomNumber]] = [shuffledTiles[randomNumber], shuffledTiles[i]]
        }
        setTiles(shuffledTiles)
    }

    const handleTileClick = (index: number) => {
        if(isMoveTile(index)) {
            const newTiles = [...tiles];
            const emptyIndex = newTiles.indexOf(0);
            [newTiles[index], newTiles[emptyIndex]] = [newTiles[emptyIndex], newTiles[index]]
            setTiles(newTiles)
            if(isGameComplete(newTiles)) {
                alert('Congratulations, you won!')
            }
        }

    }


    const isMoveTile = (index: number) => {
        const emptyIndex = tiles.indexOf(0);
        const row = Math.floor(emptyIndex /4);

        return(
            (index === emptyIndex +4 && row < 3) || //down
            (index === emptyIndex +1 && index % 4 !== 0) ||  //right
            (index === emptyIndex -4 && row > 0) || //up
            (index === emptyIndex -1 && index % 4 !== 3) //left
        )


    }

    const isGameComplete = (currentTiles: number[]) => {
        for(let i = 0; i < currentTiles.length; i++) {
            if(currentTiles[i] !== i + 1) {
                return false;
            }
        }
        return true;
    }

    return (
        <div className="App">
            <div> <h1>15 puzzle game</h1>
                <button onClick={shuffleTiles}>Shuffle</button>
            </div>

            <Board
                tiles={tiles}
                handleClick={handleTileClick}
            />


        </div>
    );
}

export default App;
