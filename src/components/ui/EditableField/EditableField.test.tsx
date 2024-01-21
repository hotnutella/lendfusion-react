import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import EditableField from './EditableField';

const sleep = (timeout: number): Promise<void> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, timeout);
    });
};


describe('EditableField', () => {
    it('renders without crashing', () => {
        render(<EditableField name="test" value="" onChange={() => {}} />);
    });

    it('displays the initial value', () => {
        const initialValue = 'Initial!';
        const { getByText } = render(<EditableField name="test" value={initialValue} onChange={() => {}} />);
        expect(getByText(initialValue)).toBeInTheDocument();
    });

    it('displays the input when clicked', () => {
        const { getByText, getByDisplayValue } = render(<EditableField name="test" value="Click to edit" onChange={() => {}} />);
        fireEvent.click(getByText('Click to edit'));
        expect(getByDisplayValue('Click to edit')).toHaveAttribute('value', 'Click to edit');
    });

    it('calls the onChange handler when the input is changed', () => {
        const onChange = jest.fn();
        const { getByText, getByDisplayValue } = render(<EditableField name="test" value="Click to edit" onChange={onChange} />);
        
        fireEvent.click(getByText('Click to edit'));
        
        const input = getByDisplayValue('Click to edit');
        fireEvent.change(input, { target: { value: 'Changed!'}});
        fireEvent.blur(input);
        
        expect(onChange).toBeCalledWith('test', 'Changed!');
    });

    it('calls the onChange handler when Enter is pressed', async () => {
        const onChange = jest.fn();
        const { getByText, getByDisplayValue } = render(<EditableField name="test" value="Click to edit" onChange={onChange} />);
        
        fireEvent.click(getByText('Click to edit'));
        
        const input = getByDisplayValue('Click to edit');
        fireEvent.change(input, { target: { value: 'Changed!'}});
        fireEvent.keyUp(input, { key: 'Enter', code: 'Enter' });
        
        expect(onChange).toBeCalledWith('test', 'Changed!');
    });

    it('does not call the onChange handler when Esc is pressed', async () => {
        const onChange = jest.fn();
        const { getByText, getByDisplayValue } = render(<EditableField name="test" value="Click to edit" onChange={onChange} />);
        
        fireEvent.click(getByText('Click to edit'));
        
        const input = getByDisplayValue('Click to edit');
        fireEvent.change(input, { target: { value: 'Changed!'}});
        fireEvent.keyUp(input, { key: 'Escape', code: 'Escape' });
        
        expect(onChange).not.toBeCalled();
    });
});
