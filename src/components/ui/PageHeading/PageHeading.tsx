import React from 'react';
import styles from './PageHeading.module.css';
import SearchBox from '../SearchBox/SearchBox';

interface PageHeadingProps {
    title: string;
    addButton?: React.ReactNode;
    onSearch: (text: string) => void;
}

const PageHeading = (props: PageHeadingProps) => {
    return (
        <div className={styles.heading}>
            <div className={styles.left}>
                <span>{props.title}</span>
                {props.addButton}
            </div>
            <div className={styles.right}>
                <SearchBox onSearch={props.onSearch} />
            </div>
        </div>
    );
}

export default PageHeading;