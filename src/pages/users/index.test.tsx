import React from 'react';
import { render } from '@testing-library/react';
import UsersPage from './index';
import { Provider } from 'react-redux';
import { store } from '../../store';

describe('UsersPage', () => {
    it('renders without crashing', () => {
        render(
            <Provider store={store}>
                <UsersPage />
            </Provider>
        );
    });

    it('renders the users page', () => {
        const { getByText } = render(
            <Provider store={store}>
                <UsersPage />
            </Provider>
        );
        expect(getByText(/USERS/i)).toBeInTheDocument();
    });
});
