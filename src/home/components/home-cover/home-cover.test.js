import React from 'react';
import { render } from '@testing-library/react';
import { HomeCover } from './home-cover';

describe('Home Cover', () => {
  it('should contain an image', () => {
    const { getByAltText } = render(<HomeCover />);
    const image = getByAltText('laboratory machine');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'lab-machine.png');
  })
})
