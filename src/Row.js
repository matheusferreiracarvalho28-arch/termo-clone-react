// Row.js
import React from 'react';
import Cell from './Cell';

const Row = ({ cells, cellsStatus, currentRow, currentCell, rowIndex }) => {
    return (
        <div className="row" data-row={rowIndex}>
            {cells.map((cell, cellIndex) => (
                <Cell
                    key={cellIndex}
                    value={cell}
                    status={cellsStatus[cellIndex]}
                    isActive={rowIndex === currentRow && cellIndex === currentCell}
                />
            ))}
        </div>
    );
};

export default Row;
