import React from 'react';
import { render } from '@testing-library/react';
import { Icon } from './icon';

describe('Icon', () => {
  function mount({ name } = {}){
    return render(
      <Icon name={name} />
    );
  }

  it('should contain a style mask image', () => {
    const { container } = mount({ name: 'flask' });
    expect(container.querySelector('span')).toHaveAttribute('style', 'mask-image: url("flask.svg");');
  });
});
