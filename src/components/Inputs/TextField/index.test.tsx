import { screen, fireEvent } from '@testing-library/react';
import { render } from 'utils/testUtils';
import { TextField } from '.';

describe('<TextField />', () => {
  it('renders label content', () => {
    render(<TextField label="Test" />);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  it('renders input and can be focused', () => {
    render(<TextField placeholder="Test" />);
    const input = screen.getByPlaceholderText('Test');
    fireEvent.focus(input);
    expect(document.activeElement).toBeInTheDocument();
  });
});
