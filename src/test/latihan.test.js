import { render, screen, fireEvent } from '@testing-library/react';
import { Counter, Greeting, AlertButton } from './latihan';
import '@testing-library/jest-dom';
import React from 'react';

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
  
  test('Reset the count using reset button', () => {
    render(<Counter />);
    console.log(screen.debug());
    const counterValue = screen.getByTestId('counter-value');
    const incrementButton = screen.getByTestId('increment-button');
    const resetButton = screen.getByTestId('reset-button');
  
    fireEvent.click(incrementButton);
    fireEvent.click(resetButton);
    expect(counterValue).toHaveTextContent('0');
  });
  
  test('Greeting component displays user name', () => {
    render(<Greeting name="Nama Anda" />);
    const greeting = screen.getByTestId('greeting');
    expect(greeting).toHaveTextContent('Hello, Nama Anda');
  });

  test('Triggers alert with correct message when clicked', () => {
    window.alert = jest.fn(); // Mock fungsi alert
    render(<AlertButton message="Test Alert" />);
    const alertButton = screen.getByTestId('alert-button');
  
    fireEvent.click(alertButton);
    expect(window.alert).toHaveBeenCalledWith('Test Alert');
  });
  