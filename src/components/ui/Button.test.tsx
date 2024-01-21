import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button', () => {
    it('renders without crashing', () => {
        render(<Button>Click me</Button>);
    });

    it('renders the correct text', () => {
        const buttonText = 'Click me';
        const { getByText } = render(<Button>{buttonText}</Button>);
        expect(getByText(buttonText)).toBeInTheDocument();
    });

    it('calls the onClick handler when clicked', () => {
        const onClick = jest.fn();
        const { getByText } = render(<Button onClick={onClick}>Click me</Button>);
        fireEvent.click(getByText('Click me'));
        expect(onClick).toHaveBeenCalled();
    });

    it('does not call the onClick handler when not provided', () => {
        const { getByText } = render(<Button>Click me</Button>);
        fireEvent.click(getByText('Click me'));
    });
});
