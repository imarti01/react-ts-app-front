interface ITypographyProps {
  text: string;
  type: 'title' | 'subtitle' | 'p1' | 'p2' | 'p3';
  color?: 'primary' | 'secondary' | 'danger' | 'info';
}

export const Typography = ({ text, type, color = 'primary' }: ITypographyProps) => {
  const colors = {
    primary: 'text-gray-700',
    secondary: 'text-green-700',
    danger: 'text-red-700',
    info: 'text-blue-700',
  };

  const textSizes = {
    title: 'text-3xl',
    subtitle: 'text-xl',
    p1: 'text-lg',
    p2: 'text-base',
    p3: 'text-sm',
  };

  const selectedClassname = `${colors[color]} ${textSizes[type]}`;

  switch (type) {
    case 'title':
      return <h1 className={selectedClassname}>{text}</h1>;
    case 'subtitle':
      return <h2 className={selectedClassname}>{text}</h2>;
    case 'p1':
    case 'p2':
    case 'p3':
      return <p className={selectedClassname}>{text}</p>;
  }
};
