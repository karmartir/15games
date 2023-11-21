import React, {useState} from 'react';
import './App.css';
import Board from "./Board";

const App = () => {
    const initialTiles = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0];

    const [tiles, setTiles] = useState(initialTiles);

    return (
        <div className="App">
            <h1>15 puzzle game</h1>
            <Board
                tiles={tiles}
            />
        </div>
    );
}

export default App;
