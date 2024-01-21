import React from 'react';
import { render, screen } from '@testing-library/react';
import UserDeletePrompt from './UserDeletePrompt';

describe('UserDeletePrompt', () => {
    it('renders the delete prompt', () => {
        render(
            <UserDeletePrompt
                open={true}
                onCancel={() => {}}
                onClose={() => {}}
                onDelete={() => {}} />
        );
        const deletePrompt = screen.getByText('Are you sure you want to delete this user?');
        expect(deletePrompt).toBeInTheDocument();
    });

    it('renders the delete button', () => {
        render(
            <UserDeletePrompt
                open={true}
                onCancel={() => {}}
                onClose={() => {}}
                onDelete={() => {}} />
        );
        const deleteButton = screen.getByText('Delete');
        expect(deleteButton).toBeInTheDocument();
    });

    it('renders the cancel button', () => {
        render(
            <UserDeletePrompt
                open={true}
                onCancel={() => {}}
                onClose={() => {}}
                onDelete={() => {}} />
        );
        const cancelButton = screen.getByText('Cancel');
        expect(cancelButton).toBeInTheDocument();
    });

    it('calls the onCancel handler when the cancel button is clicked', () => {
        const onCancel = jest.fn();
        render(
            <UserDeletePrompt
                open={true}
                onCancel={onCancel}
                onClose={() => {}}
                onDelete={() => {}} />
        );
        const cancelButton = screen.getByText('Cancel');
        cancelButton.click();
        expect(onCancel).toHaveBeenCalled();
    });

    it('calls the onClose handler when the backdrop is clicked', () => {
        const onClose = jest.fn();
        render(
            <UserDeletePrompt
                open={true}
                onCancel={() => {}}
                onClose={onClose}
                onDelete={() => {}} />
        );
        const backdrop = screen.getByTestId('backdrop');
        backdrop.click();
        expect(onClose).toHaveBeenCalled();
    });

    it('calls the onDelete handler when the delete button is clicked', () => {
        const onDelete = jest.fn();
        render(
            <UserDeletePrompt
                open={true}
                onCancel={() => {}}
                onClose={() => {}}
                onDelete={onDelete} />
        );
        const deleteButton = screen.getByText('Delete');
        deleteButton.click();
        expect(onDelete).toHaveBeenCalled();
    });
});
