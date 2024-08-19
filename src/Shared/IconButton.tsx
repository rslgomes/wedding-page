import { ButtonHTMLAttributes, FC, ReactElement } from 'react';

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactElement;
}

const IconButton: FC<IconButtonProps> = ({
  icon,
  className = '',
  ...props
}) => {
  return (
    <button className={`text-primary-500 ${className}`} {...props}>
      {icon}
    </button>
  );
};

export default IconButton;
