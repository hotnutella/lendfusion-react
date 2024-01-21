import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import UserForm from './UserForm';
import { Provider } from 'react-redux';
import { store } from '../../store';
import { act } from 'react-dom/test-utils';

describe('UserForm', () => {
    it('renders without crashing', () => {
        render(
            <Provider store={store}>
                <UserForm onUserAdded={() => { }} />
            </Provider>
        );
    });

    it('handles submitting the form', () => {
        const onUserAdded = jest.fn();
        const { getByText, getByTestId } = render(
            <Provider store={store}>
                <UserForm onUserAdded={onUserAdded} />
            </Provider>
        );
        act(() => {
            fireEvent.change(getByTestId('fullname'), { target: { value: 'Test User' } });
        });
        act(() => {
            fireEvent.change(getByTestId('username'), { target: { value: 'testuser' } });
        });
        act(() => {
            fireEvent.change(getByTestId('email'), { target: { value: 'testuser@test.com' } });
        });
        act(() => {
            fireEvent.click(getByText('Add user'));
        });
        expect(onUserAdded).toBeCalledTimes(1);
    });
});
