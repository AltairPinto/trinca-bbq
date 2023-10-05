import { screen } from '@testing-library/react';
import { render } from 'utils/testUtils';
import { Typography } from '.';

describe('Typography component', () => {
  it('renders children content', () => {
    render(<Typography>Test content</Typography>);
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  it('renders correct element based on variant', () => {
    render(<Typography variant="h1">Heading 1</Typography>);
    expect(screen.getByText('Heading 1').tagName).toBe('H1');

    render(<Typography variant="h2">Heading 2</Typography>);
    expect(screen.getByText('Heading 2').tagName).toBe('H2');
  });
});
