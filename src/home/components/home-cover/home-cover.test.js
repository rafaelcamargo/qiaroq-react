import React from 'react';
import { render } from '@testing-library/react';
import { HomeCover } from './home-cover';

describe('Home Cover', () => {
  function mount(){
    return render(<HomeCover />);
  }

  it('should contain a logo', () => {
    const { getByText } = mount();
    expect(getByText('Qiaroq')).toBeInTheDocument();
  });

  it('should contain credits', () => {
    const { getByText } = mount();
    expect(getByText('Maintained by')).toBeInTheDocument();
  });
});
