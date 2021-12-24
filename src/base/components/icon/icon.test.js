import React from 'react';
import { render } from '@testing-library/react';
import { Icon } from './icon';

describe('Icon', () => {
  function mount({ name } = {}){
    return render(
      <Icon name={name} />
    );
  }

  it('should have appropriate css classes if icon has been found', () => {
    const name = 'cobogo-circle';
    const { getByRole } = mount({ name });
    const iconElement = getByRole('presentation');
    expect(iconElement).toHaveAttribute('class', `icon icon-${name}`);
  });

  it('should have no more than the base css class if icon has not been found', () => {
    const name = 'tree';
    const { getByRole } = mount({ name });
    const iconElement = getByRole('presentation');
    expect(iconElement).toHaveAttribute('class', 'icon');
  });

  it('should contain a style mask image', () => {
    const name = 'cobogo-square';
    const { getByRole } = mount({ name });
    const iconElement = getByRole('presentation');
    expect(iconElement).toHaveAttribute('style', `mask-image: url("${name}.svg");`);
  });

  it('should not contain style if icon has not been found', () => {
    const name = 'tree';
    const { getByRole } = mount({ name });
    const iconElement = getByRole('presentation');
    expect(iconElement).not.toHaveAttribute('style');
  });

  it('should contain custom attribute for icon name', () => {
    const name = 'cobogo-square';
    const { getByRole } = mount({ name });
    const iconElement = getByRole('presentation');
    expect(iconElement).toHaveAttribute('data-icon', name);
  });

  it('should not contain custom attribute for icon name if it has not been found', () => {
    const name = 'tree';
    const { getByRole } = mount({ name });
    const iconElement = getByRole('presentation');
    expect(iconElement).not.toHaveAttribute('data-icon');
  });
});
