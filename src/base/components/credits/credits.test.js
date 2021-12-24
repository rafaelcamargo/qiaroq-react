import React from 'react';
import { render } from '@testing-library/react';
import { Credits } from './credits';

describe('Credits', () => {
  function mount(){
    return render(<Credits />);
  }

  it('should have appropriate css class', () => {
    const { container } = mount({ name: 'Rafael Camargo' });
    expect(container.firstChild).toHaveAttribute('class', 'credits');
  });

  it('should contain Rafael Camargo avatar', () => {
    const { getByAltText } = mount();
    const avatar = getByAltText('Rafael Camargo\'s avatar');
    expect(avatar).toHaveAttribute('src', 'avatar-rafael-camargo.jpeg');
  });

  it('should contain a caption', () => {
    const { getByText } = mount();
    const link = getByText('Rafael Camargo');
    expect(getByText('Maintained by')).toBeInTheDocument();
    expect(link).toHaveAttribute('href', 'https://rafaelcamargo.com');
  });
});
