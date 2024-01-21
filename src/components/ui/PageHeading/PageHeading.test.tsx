import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import PageHeading from './PageHeading';
import { act } from 'react-dom/test-utils';

describe('PageHeading', () => {
    it('renders the heading text', () => {
        const headingText = 'Page Title';
        render(<PageHeading title={headingText} onSearch={() => { }} />);
        const headingElement = screen.getByText(headingText);
        expect(headingElement).toBeInTheDocument();
    });

    it('renders the add button', () => {
        const addButton = <button>Add</button>;
        render(<PageHeading title="Page Title" addButton={addButton} onSearch={() => { }} />);
        const addButtonElement = screen.getByRole('button', { name: /add/i });
        expect(addButtonElement).toBeInTheDocument();
    });

    it('calls the onSearch function with the input text', () => {
        const onSearch = jest.fn();
        let getByPlaceholderText: any;
        act(() => {
            const getters = render(<PageHeading title="Page Title" onSearch={onSearch} />);
            getByPlaceholderText = getters.getByPlaceholderText;
        });
        act(() => {
            fireEvent.change(getByPlaceholderText('Search...'), { target: { value: 'test' } });
        });
        expect(onSearch).toHaveBeenCalledWith('test');
    });
});
