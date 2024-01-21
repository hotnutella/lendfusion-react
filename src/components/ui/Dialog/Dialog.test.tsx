import React from 'react';
import { render } from '@testing-library/react';
import Dialog from './Dialog';

describe('Dialog', () => {
    it('renders without crashing', () => {
        render(
            <Dialog
                open={true}
                title="My Dialog"
                onClose={() => {}}
            >
                Child
            </Dialog>
        );
    });

    it('renders the children', () => {
        const { getByText } = render(
            <Dialog
                open={true}
                title="My Dialog"
                onClose={() => {}}
            >
                Child
            </Dialog>
        );
        expect(getByText('Child')).toBeInTheDocument();
    });

    it('renders the title', () => {
        const { getByText } = render(
            <Dialog
                open={true}
                title="My Dialog"
                onClose={() => {}}
            >
                Child
            </Dialog>
        );
        expect(getByText('My Dialog')).toBeInTheDocument();
    });

    it('does not render when open is false', () => {
        const { queryByText } = render(
            <Dialog
                open={false}
                title="My Dialog"
                onClose={() => {}}
            >
                Child
            </Dialog>
        );
        expect(queryByText('Child')).not.toBeInTheDocument();
    });

    it('calls the onClose handler when the backdrop is clicked', () => {
        const onClose = jest.fn();
        const { getByTestId } = render(
            <Dialog
                open={true}
                title="My Dialog"
                onClose={onClose}
            >
                Child
            </Dialog>
        );
        const backdrop = getByTestId('backdrop');
        backdrop.click();
        expect(onClose).toHaveBeenCalled();
    });

    it('calls the onClose handler when the close button is clicked', () => {
        const onClose = jest.fn();
        const { getByText } = render(
            <Dialog
                open={true}
                title="My Dialog"
                onClose={onClose}
            >
                Child
            </Dialog>
        );
        const closeButton = getByText('X');
        closeButton.click();
        expect(onClose).toHaveBeenCalled();
    });
});
