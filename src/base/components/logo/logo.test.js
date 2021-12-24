import React from 'react';
import { render } from '@testing-library/react';
import { Logo } from './logo';

describe('Logo', () => {
  function mount(){
    return render(<Logo />);
  }

  it('should contain a title', () => {
    const { getByText } = mount();
    expect(getByText('Qiaroq')).toBeInTheDocument();
  });

  it('should contain a subtitle', () => {
    const { getByText } = mount();
    expect(getByText('Front-end architecture experiments')).toBeInTheDocument();
  });

  it('should contain a couple of icons', () => {
    const { getAllByRole } = mount();
    const [firstIcon, secondIcon] = getAllByRole('presentation');
    const attrName = 'data-icon';
    expect(firstIcon).toHaveAttribute(attrName, 'cobogo-circle');
    expect(secondIcon).toHaveAttribute(attrName, 'cobogo-square');
  });
});
