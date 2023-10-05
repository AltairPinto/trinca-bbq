import { screen, fireEvent } from '@testing-library/react';
import { render } from 'utils/testUtils';
import theme from 'themes';
import { Button } from '.';

describe('<Button />', () => {
  it('renders children content', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('handles onClick event', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    fireEvent.click(screen.getByText('Click me'));
    expect(handleClick);
  });

  it('does not fire onClick event when disabled', () => {
    const handleClick = jest.fn();
    render(
      <Button onClick={handleClick} disabled>
        Click me
      </Button>,
    );
    fireEvent.click(screen.getByText('Click me'));
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('applies the correct color from theme', () => {
    render(
      <Button style={{ backgroundColor: theme.colors.black }}>Click me</Button>,
    );
    expect(screen.getByText('Click me')).toHaveStyle(
      `background-color: ${theme.colors.black}`,
    );
  });
});
