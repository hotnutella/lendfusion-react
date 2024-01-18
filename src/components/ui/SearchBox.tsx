import React from 'react';
import styles from './SearchBox.module.css';

interface SearchBoxProps {
    onSearch: (text: string) => void;
}

const SearchBox = ({ onSearch }: SearchBoxProps) => {
    const [searchText, setSearchText] = React.useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(event.target.value);
        onSearch(event.target.value);
    }

    return (
        <input 
            className={styles.search} 
            type="text" 
            value={searchText}
            onChange={handleChange}
            placeholder="Search..." />
    );
}

export default SearchBox;