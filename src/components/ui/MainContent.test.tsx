import React from 'react';
import { render } from '@testing-library/react';
import MainContent from './MainContent';

describe('MainContent', () => {
    it('renders without crashing', () => {
        render(<MainContent>Child</MainContent>);
    });

    it('renders the children', () => {
        const { getByText } = render(<MainContent>Child</MainContent>);
        expect(getByText('Child')).toBeInTheDocument();
    });
});
