import React, { useState } from 'react';
import { Form, Field, Input, Button } from '@glorious/taslonic/react';

export const HomeTaslonicForm = () => {
  const [data, setData] = useState({});
  const validEmailRegex = new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]+$/, 'i');
  const emailValidations = [{ isValid: value => validEmailRegex.test(value), errorMessage: 'Enter a valid email'}];
  const handleFieldChange = ({ target: { name, value } }) => setData(prevData => ({ ...prevData, [name]: value }));
  const onSubmit = () => console.log(data);

  return (
    <div>
      <h2>Taslonic Form</h2>
      <Form onSubmit={onSubmit}>
        <Field label="Name">
          <Input name="name" value={data.name} onChange={handleFieldChange} required />
        </Field>
        <Field label="Email">
          <Input name="email" value={data.email} validations={emailValidations} onChange={handleFieldChange} required />
        </Field>
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
};
