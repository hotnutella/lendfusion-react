import React from 'react';
import styles from './UserListItem.module.css';

interface UserListItemProps {
    name: string;
    onClick?: () => void;
    onDelete?: () => void;
}

const UserListItem = ({ name, onClick, onDelete }: UserListItemProps) => {

    const handleDeleteLink = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.stopPropagation();
        if (onDelete) {
            onDelete();
        }
    }

    return (
        <div className={styles.item} onClick={onClick}>
            <div>
                {name}
            </div>
            <div>
                <a href="#" onClick={handleDeleteLink}>Delete</a>
            </div>
        </div>
    );
}

export default UserListItem;