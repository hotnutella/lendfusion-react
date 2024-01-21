import React from 'react';
import { render } from '@testing-library/react';
import Card from './Card';

describe('Card component', () => {
    it('renders without crashing', () => {
        render(<Card>Child</Card>);
    });

    it('renders the children', () => {
        const { getByText } = render(<Card>Child</Card>);
        expect(getByText('Child')).toBeInTheDocument();
    });

    it('renders the className', () => {
        const { getByText } = render(<Card className="test">Child</Card>);
        expect(getByText('Child')).toHaveClass('test');
    });
});
