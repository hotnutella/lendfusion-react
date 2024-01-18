import React from 'react';
import styles from './MainContent.module.css';
import Card from './Card';

interface MainContentProps {
    children: React.ReactNode;
}

const MainContent = ({ children }: MainContentProps) => {
    return (
        <div className={styles.main}>
            {children}
        </div>
    );
}

export default MainContent;