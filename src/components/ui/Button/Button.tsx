import React from 'react';
import styles from './Button.module.css';

interface ButtonProps {
    type?: 'button' | 'submit' | 'reset';
    variant?: 'primary' | 'secondary';
    children: string;
    onClick?: () => void;
}

const Button = ({ children, onClick, type, variant }: ButtonProps) => {
    const buttonType = type || 'button';
    const buttonVariant = variant || 'primary';

    const className = `${styles.button} ${styles[buttonVariant]}`;

    const handleClick = () => {
        if (onClick) {
            onClick();
        }
    }

    return (
        <button 
            type={buttonType}
            className={className} 
            onClick={handleClick}
        >
            {children}
        </button>
    );
}

export default Button;