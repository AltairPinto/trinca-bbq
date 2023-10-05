import { screen, fireEvent } from '@testing-library/react';
import { render } from 'utils/testUtils';
import { Card } from '.';
import theme from 'themes';

describe('<Card />', () => {
  it('renders children content', () => {
    render(<Card onClick={() => {}}>Test content</Card>);
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  it('handles onClick event', () => {
    const handleClick = jest.fn();
    render(<Card onClick={handleClick}>Click me</Card>);
    fireEvent.click(screen.getByText('Click me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('applies the correct styles', () => {
    const customStyles = {
      backgroundColor: theme.colors.error,
    };
    render(
      <Card onClick={() => {}} style={customStyles}>
        Styled content
      </Card>,
    );
    expect(screen.getByText('Styled content')).toHaveStyle(
      `background-color: ${theme.colors.error}`,
    );
  });
});
