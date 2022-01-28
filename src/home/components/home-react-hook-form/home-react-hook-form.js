import React from 'react';
import { useForm } from 'react-hook-form';

// eslint-disable-next-line
export const HomeReactHookForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const validEmailRegex = new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]+$/, 'i');
  const onSubmit = formData => console.log(formData);

  return (
    <div>
      <h2>React Hook Form</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">Name</label>
        <input id="name" {...register('name', { required: true })} />
        {errors.name?.type === 'required' && <span>Required</span>}
        <label htmlFor="email">Email</label>
        <input id="email" {...register('email', { required: true, validate: value => validEmailRegex.test(value) })} />
        {errors.email?.type === 'required' && <span>Required</span>}
        {errors.email?.type === 'validate' && <span>Enter a valid email</span>}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
