import { variantMapping } from './styles';

type VariantType =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'button'
  | 'link'
  | 'p1'
  | 'p2'
  | 'p3'
  | 'overline'
  | 'tag';

export interface TypographyProps {
  children?: React.ReactNode;
  variant?: VariantType;
  color?: string;
  className?: string;
  truncate?: boolean;
  strikethrough?: boolean;
  selected?: boolean;
}

const Typography = ({
  children = null,
  variant,
  color = '',
  className = '',
  truncate = false,
  strikethrough = false,
  ...rest
}: TypographyProps) => {
  const Component = variantMapping[variant || 'p1'];

  return (
    <Component
      color={color}
      className={className}
      strikethrough={strikethrough}
      truncate={truncate}
      {...rest}
    >
      {children}
    </Component>
  );
};

export { Typography };
