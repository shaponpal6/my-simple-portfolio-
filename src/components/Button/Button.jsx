import React from 'react';
import './Button.css';

const Button = (props) => {
    const { text, faIcon, active } = props;
    return (
        <button className={`Button ${active}`}>
            <p className="Button__text">{text}</p>
            <i className={faIcon}/>
        </button>
    );
}

export default Button;
