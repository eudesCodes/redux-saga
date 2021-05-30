/* eslint-disable no-undef */
/* eslint-disable react/display-name */
import * as React from 'react';

type TButton = {
    children: React.ReactNode;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
};

export default ({ children, onClick }: TButton): JSX.Element => {
    return (
        <button
            className="bg-transparent text-blue-700 py-2 px-4 border border-blue-500 rounded"
            onClick={onClick}
        >
            {children}
        </button>
    );
};
