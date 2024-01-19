import React from 'react';
import Card from './Card';
import styles from './Dialog.module.css';

interface DialogProps {
    open: boolean;
    title: string;
    onClose: () => void;
    children: React.ReactNode;
}

const Dialog: React.FC<DialogProps> = ({ open, title, onClose, children }) => {
    return (
        <>
            {open && (
                <>
                    <div className={styles.backdrop} onClick={onClose}></div>
                    <Card className={styles.dialog}>
                        <div className={styles.header}>
                            <h2>{title}</h2>
                            <button className={styles.close} onClick={onClose}>
                                X
                            </button>
                        </div>
                        <div className={styles.content}>{children}</div>
                    </Card>
                </>
            )}
        </>
    );
};

export default Dialog;
