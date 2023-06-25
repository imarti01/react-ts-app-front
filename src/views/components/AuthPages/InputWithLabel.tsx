interface IInputWithLabelProps {
  label: string;
  type?: string;
  name: string;
  value: string | number;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export const InputWithLabel = ({ label, type = 'text', name, value, onChange }: IInputWithLabelProps) => {
  return (
    <label className="flex flex-col w-full">
      {label}
      <input className="bg-slate-400 w-full" type={type} name={name} value={value} onChange={onChange} />
    </label>
  );
};
