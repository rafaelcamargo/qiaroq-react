import './home-cover.styl';
import React from 'react';
import { Credits } from '@src/base/components/credits/credits';
import { Logo } from '@src/base/components/logo/logo';

export const HomeCover = () => (
  <div className="home-cover">
    <Logo />
    <div className="home-cover-footer">
      <Credits />
    </div>
  </div>
);
