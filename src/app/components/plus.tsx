import React from 'react';

export const AddSheetIcon: React.FC<{ width: string; height: string }> = ({ width, height }) => {
    return (
        <svg
            viewBox="0 0 24 24"
            width={width}
            height={height}
        >
            <path d="M17,11H13V7a1,1,0,0,0-1-1h0a1,1,0,0,0-1,1v4H7a1,1,0,0,0-1,1H6a1,1,0,0,0,1,1h4v4a1,1,0,0,0,1,1h0a1,1,0,0,0,1-1V13h4a1,1,0,0,0,1-1h0A1,1,0,0,0,17,11Z" />
        </svg>
    );
};
