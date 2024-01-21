import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import SearchBox from './SearchBox';

describe('SearchBox', () => {
    it('renders without crashing', async () => {
        await act(async () => {
            render(<SearchBox onSearch={() => { }} />);
        });
    });

    it('renders the search text', async () => {
        let getByPlaceholderText: any;
        await act(async () => {
            const getters = render(<SearchBox onSearch={() => { }} />);
            getByPlaceholderText = getters.getByPlaceholderText;
        });
        expect(getByPlaceholderText('Search...')).toBeInTheDocument();
    });

    it('calls the onSearch handler when the search text changes', async () => {
        const onSearch = jest.fn();
        let getByPlaceholderText: any;
        await act(async () => {
            const getters = render(<SearchBox onSearch={onSearch} />);
            getByPlaceholderText = getters.getByPlaceholderText;
        });
        await act(async () => {
            fireEvent.change(getByPlaceholderText('Search...'), { target: { value: 'test' } });
        });
        expect(onSearch).toHaveBeenCalledWith('test');
    });
});
