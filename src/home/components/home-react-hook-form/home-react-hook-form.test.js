import React from 'react';
import { render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { HomeReactHookForm } from './home-react-hook-form';

describe('Home React Hook Form', () => {
  function mount(){
    return render(<HomeReactHookForm />);
  }

  beforeEach(() => {
    console.log = jest.fn();
  });

  it('should contain a title', () => {
    const { getByText } = mount();
    expect(getByText('React Hook Form')).toBeInTheDocument();
  });

  it('should show form errors for invalid fields on form submit', async () => {
    const { getByText, getAllByText } = mount();
    userEvent.click(getByText('Submit'));
    await waitFor(() => {
      expect(getAllByText('Required')[0]).toBeInTheDocument();
      expect(getAllByText('Required')[1]).toBeInTheDocument();
      expect(console.log).not.toHaveBeenCalled();
    });
  });

  it('should show invalid email error message if an invalid email has been entered on form submit', async () => {
    const { getByText, getByLabelText } = mount();
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
    const { getByText, queryByText, getByLabelText } = mount();
    userEvent.type(getByLabelText('Name'), name);
    userEvent.type(getByLabelText('Email'), email);
    userEvent.click(getByText('Submit'));
    await waitFor(() => {
      expect(queryByText('Required')).not.toBeInTheDocument();
      expect(queryByText('Enter a valid email')).not.toBeInTheDocument();
      expect(console.log).toHaveBeenCalledWith({ name, email });
    });
  });
});
