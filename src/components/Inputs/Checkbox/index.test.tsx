import { screen, fireEvent } from '@testing-library/react';
import { render } from 'utils/testUtils';
import { Checkbox } from '.';

describe('<Checkbox />', () => {
  it('renders title content', () => {
    render(
      <Checkbox title="Test Checkbox" checked={false} onClick={() => {}} />,
    );
    expect(screen.getByText('Test Checkbox')).toBeInTheDocument();
  });

  it('renders correct image based on checked state', () => {
    render(
      <Checkbox title="Test Checkbox" checked={true} onClick={() => {}} />,
    );
    const img = screen.getByAltText('Confirmation indicator full icon');
    expect(img).toHaveAttribute('src', '/icons/icon_full_circle.svg');

    render(
      <Checkbox title="Test Checkbox" checked={false} onClick={() => {}} />,
    );
    const img2 = screen.getByAltText('Confirmation indicator empty icon');
    expect(img2).toHaveAttribute('src', '/icons/icon_empty_circle.svg');
  });

  it('handles onClick event', () => {
    const handleClick = jest.fn();
    render(
      <Checkbox title="Test Checkbox" checked={false} onClick={handleClick} />,
    );
    const img = screen.getByAltText('Confirmation indicator empty icon');
    fireEvent.click(img);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('displays error message when error prop is true', () => {
    render(
      <Checkbox
        title="Test Checkbox"
        checked={false}
        onClick={() => {}}
        error
        helperText="Error message"
      />,
    );
    expect(screen.getByText('Error message')).toBeInTheDocument();
  });
});
