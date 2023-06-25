import { useState } from 'react';
import { IRegisterUser } from '../../../interfaces/auth';
import { InputWithLabel } from './InputWithLabel';
import { Alert, Button, Typography } from '../Shared';
import { registerRequest } from '../../../api/authRequests';

export const Register = () => {
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [formData, setFormData] = useState<IRegisterUser>({
    username: '',
    email: '',
    password: '',
    password_confirmation: '',
  });

  const handleFormData = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await registerRequest(formData);
    console.log(res);
    // setIsAlertOpen(true);
  };

  const handleCloseAlert = () => {
    setIsAlertOpen(false);
  };
  return (
    <>
      <form className="flex flex-col items-center justify-between w-64 h-96" method="POST" onSubmit={onSubmitForm}>
        <Typography text="Register" type="title" />
        <InputWithLabel label="Username:" name="username" value={formData.username} onChange={handleFormData} />
        <InputWithLabel label="Email:" type="email" name="email" value={formData.email} onChange={handleFormData} />
        <InputWithLabel
          label="Password:"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleFormData}
        />
        <InputWithLabel
          label="Confirm Password:"
          type="password"
          name="password_confirmation"
          value={formData.password_confirmation}
          onChange={handleFormData}
        />
        <Button color="primary" text="Sign Up" />
      </form>
      {isAlertOpen && (
        <Alert onConfirm={handleCloseAlert}>
          <Typography text="hellow world" type="subtitle" />
        </Alert>
      )}
    </>
  );
};
