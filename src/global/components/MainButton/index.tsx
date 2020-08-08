import React from 'react';
import './style.css';

interface MainButtonProps {
    label: string,
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void,
}

const MainButton:React.FC<MainButtonProps> = (props) => {
    return (
        <div className="main-button">
            <button onClick={props.onClick} >{props.label}</button>
        </div>
    );
}

export default MainButton;

