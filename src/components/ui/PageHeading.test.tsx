import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import PageHeading from './PageHeading';

describe('PageHeading', () => {
    it('renders the heading text', () => {
        const headingText = 'Welcome to the Page';
        render(<PageHeading title={headingText} onSearch={() => {}} />);
        const headingElement = screen.getByText(headingText);
        expect(headingElement).toBeInTheDocument();
    });

    it('renders the add button', () => {
        const addButton = <button>Add</button>;
        render(<PageHeading title="Page Title" addButton={addButton} onSearch={() => {}} />);
        const addButtonElement = screen.getByRole('button', { name: /add/i });
        expect(addButtonElement).toBeInTheDocument();
    });

    it('calls the onSearch function with the input text', () => {
        const onSearchMock = jest.fn();
        render(<PageHeading title="Page Title" onSearch={onSearchMock} />);
        const searchInput = screen.getByRole('textbox');
        const searchText = 'Search Text';
        userEvent.type(searchInput, searchText);
        expect(onSearchMock).toHaveBeenCalledWith(searchText);
    });
});
