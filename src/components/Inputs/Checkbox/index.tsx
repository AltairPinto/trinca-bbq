import { Typography } from 'components/Typography';
import { Container } from './styles';
import Image from 'next/image';

interface ICheckBox {
  checked: boolean;
  onClick: () => void;
  title: string;
  error?: boolean;
  helperText?: string;
}

const Checkbox: React.FC<ICheckBox> = ({
  checked,
  onClick,
  title,
  error,
  helperText,
}) => {
  return (
    <>
      <Container>
        <Image
          src={`/icons/icon_${checked ? 'full' : 'empty'}_circle.svg`}
          alt="Confirmation indicator icon"
          width={25}
          height={25}
          loading="lazy"
          onClick={onClick}
          style={{ cursor: 'pointer' }}
        />
        <Typography>{title}</Typography>
      </Container>
      {error && (
        <Typography variant="p" color="error">
          {helperText}
        </Typography>
      )}
    </>
  );
};

export { Checkbox };
