interface IButtonProps {
  text: string;
  onClick?: () => void;
  disabled?: boolean;
  color: 'primary' | 'secondary' | 'danger';
  size?: 'lg' | 'md' | 'sm';
  outline?: boolean;
}

export const Button = ({ text, onClick, disabled = false, color, size = 'md', outline = false }: IButtonProps) => {
  const colors = {
    primary: { fill: 'bg-blue-500 text-white', outlined: 'border border-blue-500 text-blue-500' },
    secondary: { fill: 'bg-green-500 text-white', outlined: 'border border-green-500 text-green-500' },
    danger: { fill: 'bg-red-500 text-white', outlined: 'border border-red-500 text-red-500' },
  };

  const sizes = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
  };

  const selectedClassName = `${outline ? colors[color].outlined : colors[color].fill} ${sizes[size]} px-2 py-1 w-full`;

  return (
    <button className={selectedClassName} onClick={onClick && onClick} disabled={disabled}>
      {text}
    </button>
  );
};
