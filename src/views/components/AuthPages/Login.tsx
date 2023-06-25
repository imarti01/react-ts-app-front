import { useState } from 'react';
import { ILoginUser } from '../../../interfaces/auth';
import { InputWithLabel } from './InputWithLabel';
import { Button, Typography, Alert } from '../Shared';

export const Login = () => {
  const [isAlertOpen, setIsAlertOpen] = useState(false);

  const [formData, setFormData] = useState<ILoginUser>({ email: '', password: '' });

  const handleFormData = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsAlertOpen(true);
  };

  const handleCloseAlert = () => {
    setIsAlertOpen(false);
  };
  return (
    <>
      <form className="flex flex-col items-center justify-between w-64 h-96" onSubmit={onSubmitForm}>
        <Typography text="Login" type="title" />
        <InputWithLabel label="Email:" type="email" name="email" value={formData.email} onChange={handleFormData} />
        <InputWithLabel
          label="Password:"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleFormData}
        />
        <Button text="Sign In" color="primary" outline />
      </form>
      {isAlertOpen && (
        <Alert onConfirm={handleCloseAlert}>
          <Typography text="hello world" type="subtitle" />
        </Alert>
      )}
    </>
  );
};
