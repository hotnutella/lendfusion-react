import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SearchBox from './SearchBox';

describe('SearchBox', () => {
    it('renders without crashing', () => {
        render(<SearchBox onSearch={() => {}} />);
    });

    it('renders the search text', () => {
        const { getByPlaceholderText } = render(<SearchBox onSearch={() => {}} />);
        expect(getByPlaceholderText('Search...')).toBeInTheDocument();
    });

    it('calls the onSearch handler when the search text changes', () => {
        const onSearch = jest.fn();
        const { getByPlaceholderText } = render(<SearchBox onSearch={onSearch} />);
        fireEvent.change(getByPlaceholderText('Search...'), { target: { value: 'test' } });
        expect(onSearch).toHaveBeenCalledWith('test');
    });
});
