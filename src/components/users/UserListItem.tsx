import React from 'react';
import styles from './UserListItem.module.css';

interface UserListItemProps {
    name: string;
    onClick?: () => void;
}

const UserListItem = ({ name, onClick }: UserListItemProps) => {
    return (
        <div className={styles.item} onClick={onClick}>
            {name}
        </div>
    );
}

export default UserListItem;