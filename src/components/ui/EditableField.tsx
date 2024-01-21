import React, { useEffect } from 'react';
import styles from './EditableField.module.css';

interface EditableFieldProps {
    name: string;
    value: string;
    onChange: (name: string, value: string) => void;
}

const EditableField = (props: EditableFieldProps) => {
    const [isEditing, setIsEditing] = React.useState(false);
    const [value, setValue] = React.useState(props.value);

    const ref = React.useRef<HTMLInputElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
        event.stopPropagation();
        setIsEditing(true);
    }

    const handleBlur = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.onChange(props.name, event.target.value);
        setIsEditing(false);
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    }

    const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            props.onChange(props.name, value);
            setIsEditing(false);
        }
    }

    useEffect(() => {
        if (isEditing) {
            ref.current?.focus();
        }
    }, [isEditing]);

    return (
        <>
            {!isEditing && (
                <span className={styles.clickable} onClick={handleClick}>{props.value}</span>
            )}
            {isEditing && (
                <input 
                    ref={ref}
                    type="text" 
                    value={value} 
                    data-testid={`${props.name}-input`}
                    onBlur={handleBlur} 
                    onChange={handleChange}
                    onKeyUp={handleKeyUp} />
            )}
        </>
    );
}

export default EditableField;