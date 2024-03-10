import React from 'react';
import { useForm } from 'react-hook-form';

const Form = () => {
  const { register, reset, handleSubmit } = useForm();
  const submit = data => {
    console.log(data);
    reset();
  };
  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
        <label>
          <input
            {...register('name')}
            type="text"
            placeholder="Enter your name"
          />
        </label>
        <label>
          <input
            {...register('email')}
            type="email"
            placeholder="Enter your email"
          />
        </label>
        <label>
          <input
            {...register('password')}
            type="password"
            placeholder="Enter your password"
          />
        </label>
        <button type="submit">GO!</button>
      </form>
    </div>
  );
};

export default Form;
