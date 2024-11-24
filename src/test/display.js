import Display from './display';

test('Display has correct value', () => {
  render(<Display value={5} />);
  const displayValue = screen.getByTestId('display-value');
  expect(displayValue).toHaveTextContent('Value: 5');
});
  