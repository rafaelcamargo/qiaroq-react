import React from 'react';
import { render } from '@testing-library/react';
import { HomeCover } from './home-cover';

describe('Home Cover', () => {
  function mount(){
    return render(<HomeCover />);
  }

  it('should contain a React Hook Form', async () => {
    const { getByText } = mount();
    expect(getByText('React Hook Form')).toBeInTheDocument();
  });

  it('should contain a Taslonic Form', async () => {
    const { getByText } = mount();
    expect(getByText('Taslonic Form')).toBeInTheDocument();
  });
});
