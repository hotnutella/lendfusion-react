import React from 'react';
import { render } from '@testing-library/react';
import UserListItem from './UserListItem';

describe('UserListItem', () => {
    it('renders user name', () => {
        const { getByText } = render(
            <UserListItem name={'Test User'} />
        );

        const userNameElement = getByText('Test User');
        expect(userNameElement).toBeInTheDocument();
    });

    it('handles onClick', () => {
        const onClick = jest.fn();
        const { getByText } = render(
            <UserListItem name={'Test User'} onClick={onClick} />
        );

        const userNameElement = getByText('Test User');
        userNameElement.click();
        expect(onClick).toHaveBeenCalled();
    });

    it('handles onDelete', () => { 
        const onDelete = jest.fn();
        const { getByText } = render(
            <UserListItem name={'Test User'} onDelete={onDelete} />
        );

        const deleteButton = getByText('Delete');
        deleteButton.click();
        expect(onDelete).toHaveBeenCalled();
    });

    it('does not call onDelete when not provided', () => {
        const { getByText } = render(
            <UserListItem name={'Test User'} />
        );

        const deleteButton = getByText('Delete');
        deleteButton.click();
    });
});
