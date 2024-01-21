import React from 'react';
import { fireEvent, getByTestId, render, waitFor } from '@testing-library/react';
import UserDetails from './UserDetails';
import { Provider } from 'react-redux';
import { store } from '../../store';
import { act } from 'react-dom/test-utils';

describe('UserDetails', () => {
    it('renders without crashing', () => {
        render(
            <Provider store={store}>
                <UserDetails id={1} onBackClick={() => { }} />
            </Provider>
        );
    });

    it('renders the user details', () => {
        const { getByText } = render(
            <Provider store={store}>
                <UserDetails id={1} onBackClick={() => { }} />
            </Provider>
        );
        waitFor(() => expect(getByText('Mocked User')).toBeInTheDocument());
    });

    it('handles the back button click', () => {
        const onBackClick = jest.fn();
        const { getByText } = render(
            <Provider store={store}>
                <UserDetails id={1} onBackClick={onBackClick} />
            </Provider>
        );
        getByText('Back to users').click();
        expect(onBackClick).toHaveBeenCalled();
    });

    it('handles address changes', async () => {
        const { getByText, getByTestId } = render(
            <Provider store={store}>
                <UserDetails id={1} onBackClick={() => { }} />
            </Provider>
        );

        await waitFor(() => expect(getByText(/Mocked Street/i)).toBeInTheDocument());
        act(() => {
            fireEvent.click(getByText(/Mocked Street/i));
        });

        await waitFor(() => expect(getByTestId('address-input')).toBeInTheDocument());
        act(() => {
            fireEvent.change(getByTestId('address-input'), { target: { value: 'New Street' } });
            fireEvent.blur(getByTestId('address-input'));
        });

        expect(getByText(/New Street/i)).toBeInTheDocument();
    });

    it('handles company changes', async () => {
        const { getByText, getByTestId } = render(
            <Provider store={store}>
                <UserDetails id={1} onBackClick={() => { }} />
            </Provider>
        );

        await waitFor(() => expect(getByText(/Mocked Company/i)).toBeInTheDocument());
        act(() => {
            fireEvent.click(getByText(/Mocked Company/i));
        });

        await waitFor(() => expect(getByTestId('company-input')).toBeInTheDocument());
        act(() => {
            fireEvent.change(getByTestId('company-input'), { target: { value: 'New Company' } });
            fireEvent.blur(getByTestId('company-input'));
        });

        expect(getByText(/New Company/i)).toBeInTheDocument();
    });

    it('handles email changes', async () => {
        const { getByText, getByTestId } = render(
            <Provider store={store}>
                <UserDetails id={1} onBackClick={() => { }} />
            </Provider>
        );

        await waitFor(() => expect(getByText(/mockeduser@test.com/i)).toBeInTheDocument());
        act(() => {
            fireEvent.click(getByText(/mockeduser@test.com/i));
        });

        await waitFor(() => expect(getByTestId('email-input')).toBeInTheDocument());
        act(() => {
            fireEvent.change(getByTestId('email-input'), { target: { value: 'new.email@test.com' } });
            fireEvent.blur(getByTestId('email-input'));
        });

        expect(getByText(/new.email@test.com/i)).toBeInTheDocument();
    });
});
