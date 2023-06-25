import { Button } from '..';

interface IAlertProps {
  children: React.ReactNode;
  size?: 'lg' | 'md' | 'sm';
  onConfirm: () => void;
}

export const Alert = ({ children, size = 'md', onConfirm }: IAlertProps) => {
  const sizes = {
    lg: 'max-w-3xl',
    md: 'max-w-lg',
    sm: 'max-w-sm',
  };

  const selectedClassname = `${sizes[size]} bg-slate-500 w-full h-full max-h-28 flex flex-col items-center justify-around`;

  return (
    <div className="w-screen h-screen backdrop-blur-sm flex items-center justify-center fixed top-0">
      <section className={selectedClassname}>
        {children}
        <div className="w-1/6">
          <Button color="secondary" text="OK" onClick={onConfirm} />
        </div>
      </section>
    </div>
  );
};
