import React from 'react';
import styles from './Button.module.css';

interface ButtonProps {
    type?: 'button' | 'submit' | 'reset';
    children: string;
    onClick?: () => void;
}

const Button = ({ children, onClick, type }: ButtonProps) => {
    const buttonType = type || 'button';

    const handleClick = () => {
        if (onClick) {
            onClick();
        }
    }

    return (
        <button 
            type={buttonType}
            className={styles.button} 
            onClick={handleClick}
        >
            {children}
        </button>
    );
}

export default Button;