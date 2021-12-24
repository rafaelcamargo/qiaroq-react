import './logo.styl';
import React from 'react';
import { Icon } from '@src/base/components/icon/icon';

export const Logo = () => (
  <div className="logo">
    <Icon name="cobogo-circle" />
    <Icon name="cobogo-square" />
    <h1 className="logo-title">Qiaroq</h1>
    <p className="logo-subtitle">Front-end architecture experiments</p>
  </div>
);
