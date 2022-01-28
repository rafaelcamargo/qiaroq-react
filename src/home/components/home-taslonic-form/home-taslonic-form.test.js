import React from 'react';
import { render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { HomeTaslonicForm } from './home-taslonic-form';

describe('Home React Hook Form', () => {
  async function mount(){
    const result = render(<HomeTaslonicForm />);
    await new Promise(resolve => setTimeout(resolve));
    return result;
  }

  beforeEach(() => {
    console.log = jest.fn();
  });

  it('should contain a title', async () => {
    const { getByText } = await mount();
    expect(getByText('Taslonic Form')).toBeInTheDocument();
  });

  it('should show form errors for invalid fields on form submit', async () => {
    const { getByText, getAllByText } = await mount();
    userEvent.click(getByText('Submit'));
    await waitFor(() => {
      expect(getAllByText('Required')[0]).toBeInTheDocument();
      expect(getAllByText('Required')[1]).toBeInTheDocument();
      expect(console.log).not.toHaveBeenCalled();
    });
  });

  it('should show invalid email error message if an invalid email has been entered on form submit', async () => {
    const { getByText, getByLabelText } = await mount();
    userEvent.type(getByLabelText('Name'), 'Rafael');
    userEvent.type(getByLabelText('Email'), 'rafa');
    await waitFor(() => {
      userEvent.click(getByText('Submit'));
    });
    await waitFor(() => {
      expect(getByText('Enter a valid email')).toBeInTheDocument();
      expect(console.log).not.toHaveBeenCalled();
    });
  });

  it('should submit data if form data has been filled correctly', async () => {
    const name = 'Rafael';
    const email = 'rafael@email.com';
    const { getByText, queryByText, getByLabelText } = await mount();
    userEvent.type(getByLabelText('Name'), name);
    userEvent.type(getByLabelText('Email'), email);
    userEvent.click(getByText('Submit'));
    await waitFor(() => {
      expect(queryByText('Name is required')).not.toBeInTheDocument();
      expect(queryByText('Email is required')).not.toBeInTheDocument();
      expect(queryByText('Enter a valid email')).not.toBeInTheDocument();
      expect(console.log).toHaveBeenCalledWith({ name, email });
    });
  });
});
