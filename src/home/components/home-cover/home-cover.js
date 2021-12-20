import React from 'react';
import { Icon } from '@src/base/components/icon/icon';
import labMachineImageUrl from '@src/home/images/lab-machine.png';

export const HomeCover = () => {
  return (
    <>
      <Icon name="flask" />
      <img alt="laboratory machine" src={labMachineImageUrl} />
    </>
  );
};
