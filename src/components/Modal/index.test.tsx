import { screen, fireEvent } from '@testing-library/react';
import { render } from 'utils/testUtils';
import { Modal } from '.';

describe('<Modal />', () => {
  it('does not render when isOpen is false', () => {
    render(
      <Modal isOpen={false} onClose={() => {}}>
        Modal Content
      </Modal>,
    );
    expect(screen.queryByText('Modal Content')).not.toBeInTheDocument();
  });

  it('renders correctly when isOpen is true', () => {
    render(
      <Modal isOpen={true} onClose={() => {}}>
        Modal Content
      </Modal>,
    );
    expect(screen.getByText('Modal Content')).toBeInTheDocument();
  });

  it('handles onClose event when modal container is clicked', () => {
    const handleClose = jest.fn();
    render(
      <Modal isOpen={true} onClose={handleClose}>
        Modal Content
      </Modal>,
    );
    fireEvent.click(screen.getByText('Modal Content').parentNode!);
    expect(handleClose).toHaveBeenCalledTimes(1);
  });
});
