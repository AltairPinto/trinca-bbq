import { variantMapping } from './styles';

type VariantType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'span' | 'p' | 'label';

export interface TypographyProps {
  children?: React.ReactNode;
  variant?: VariantType;
  color?: string;
  selected?: boolean;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const Typography = ({
  children = null,
  variant,
  color = '',
  ...rest
}: TypographyProps) => {
  const Component: React.ComponentType<TypographyProps> =
    variantMapping[variant || 'p'];

  return (
    <Component color={color} {...rest}>
      {children}
    </Component>
  );
};

export { Typography };
