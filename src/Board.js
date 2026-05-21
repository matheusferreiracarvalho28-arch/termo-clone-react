// Board.js
import React from 'react';
import Row from './Row';

const Board = ({ cells, cellsStatus, currentRow, currentCell }) => {
    return (
        <div className="board">
            {cells.map((row, rowIndex) => (
                <Row
                    key={rowIndex}
                    cells={row}
                    cellsStatus={cellsStatus[rowIndex]}
                    currentRow={currentRow}
                    currentCell={currentCell}
                    rowIndex={rowIndex}
                />
            ))}
        </div>
    );
};

export default Board;
