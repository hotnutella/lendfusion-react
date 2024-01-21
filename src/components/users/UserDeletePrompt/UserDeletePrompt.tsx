import React from 'react';
import Dialog from '../../ui/Dialog/Dialog';
import Button from '../../ui/Button/Button';
import styles from './UserDeletePrompt.module.css';

interface UserDeletePromptProps {
    open: boolean;
    onClose: () => void;
    onDelete: () => void;
    onCancel: () => void;
}

const UserDeletePrompt = (props: UserDeletePromptProps) => {
    return (
        <Dialog title="Delete user" open={props.open} onClose={props.onClose}>
            <span className={styles.question}>Are you sure you want to delete this user?</span>
            <div className={styles.actions}>
                <Button onClick={props.onDelete}>
                    Delete
                </Button>
                <Button onClick={props.onCancel} variant="secondary">
                    Cancel
                </Button>
            </div>
        </Dialog>
    );
}

export default UserDeletePrompt;