// Cell.js
import React from 'react';

const Cell = ({ value, status, isActive }) => {
    return (
        <div
            className={`cell ${status} ${value !== '' ? 'filled' : ''} ${isActive ? 'active' : ''}`}
        >
            {value}
        </div>
    );
};

export default Cell;
