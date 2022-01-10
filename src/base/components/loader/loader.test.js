import React from 'react';
import { render } from '@testing-library/react';
import { Loader } from './loader';

describe('Loader', () => {
  function mount(){
    return render(<Loader />);
  }

  it('should contain a message', () => {
    const { getByText } = mount();
    expect(getByText('Loading...')).toBeInTheDocument();
  });
});
