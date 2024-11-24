import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Display from './display';
import Counter from './counter';


describe('Counter Component', () => {
    test('Counter Default Value must be 0', () => {
        render(<Counter />);
        console.log(screen.debug());
        const counterValue = screen.getByTestId('counter-value');
        expect(counterValue).toHaveTextContent('0');
      });
      
      test('Increment works when button clicked', () => {
        render(<Counter />);
        console.log(screen.debug());
        const counterValue = screen.getByTestId('counter-value');
        const incrementButton = screen.getByTestId('increment-button');
      
        fireEvent.click(incrementButton);
        expect(counterValue).toHaveTextContent('1');
      });
      
      test('Decrement works when button clicked', () => {
        render(<Counter />);
        console.log(screen.debug());
        const counterValue = screen.getByTestId('counter-value');
        const decrementButton = screen.getByTestId('decrement-button');
      
        fireEvent.click(decrementButton);
        expect(counterValue).toHaveTextContent('-1');
      });
      
});
    