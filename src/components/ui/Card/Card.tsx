import React from 'react';
import styles from './Card.module.css';

interface CardProps {
    className?: string;
    children: React.ReactNode;
}

const Card = ({ children, className }: CardProps) => {
    const classes = `${className} ${styles.card}`;
    return (
        <div className={classes}>
            {children}
        </div>
    );
}

export default Card;