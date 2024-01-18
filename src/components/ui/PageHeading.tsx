import React from 'react';
import styles from './PageHeading.module.css';

interface PageHeadingProps {
    children: string;
}

const PageHeading = ({ children }: PageHeadingProps) => {
    return (
        <div className={styles.heading}>
            {children}
        </div>
    );
}

export default PageHeading;