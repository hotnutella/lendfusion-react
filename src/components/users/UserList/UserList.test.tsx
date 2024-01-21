import React from 'react';
import { render, waitFor } from '@testing-library/react';
import UserList from './UserList';
import { Provider } from 'react-redux';
import { store } from '../../../store';

describe('UserList', () => {
    it('renders without crashing', () => {
        render(
            <Provider store={store}>
                <UserList
                    searchQuery=""
                    onUserSelection={() => {}}
                    onUserDelete={() => {}} />
            </Provider>
        );
    });

    it('renders the users', async () => {
        const { getByText } = render(
            <Provider store={store}>
                <UserList
                    searchQuery=""
                    onUserSelection={() => {}}
                    onUserDelete={() => {}} />
            </Provider>
        );

        await waitFor(() =>
            expect(getByText('Mocked User 1')).toBeInTheDocument()
        );
    });

    it('handles the user selection', async () => {
        const onUserSelection = jest.fn();
        const { getByText } = render(
            <Provider store={store}>
                <UserList
                    searchQuery=""
                    onUserSelection={onUserSelection}
                    onUserDelete={() => {}} />
            </Provider>
        );

        await waitFor(() => getByText('Mocked User 1').click());
        expect(onUserSelection).toHaveBeenCalledWith(1);
    });

    it('handles the user deletion', async () => {
        const onUserDelete = jest.fn();
        const { getAllByText } = render(
            <Provider store={store}>
                <UserList
                    searchQuery=""
                    onUserSelection={() => {}}
                    onUserDelete={onUserDelete} />
            </Provider>
        );

        await waitFor(() => getAllByText('Delete')[0].click());
        expect(onUserDelete).toHaveBeenCalledWith(1);
    });
});
