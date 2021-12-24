import React from 'react';
import { render } from '@testing-library/react';
import { Avatar } from './avatar';

describe('Avatar', () => {
  function mount({ name = '', imageUrl = '' } = {}){
    return render(<Avatar name={name} imageUrl={imageUrl} />);
  }

  it('should have appropriate css class', () => {
    const { container } = mount();
    expect(container.firstChild).toHaveAttribute('class', 'avatar');
  });

  it('should render an image according to the given image url', () => {
    const imageUrl = 'images/rafael-camargo.jpg';
    const { getByAltText } = mount({ name: 'Rafael Camargo', imageUrl });
    expect(getByAltText('Rafael Camargo\'s avatar')).toHaveAttribute('src', imageUrl);
  });
});
