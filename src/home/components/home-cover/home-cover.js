import './home-cover.styl';
import React from 'react';
import { HomeReactHookForm } from '@src/home/components/home-react-hook-form/home-react-hook-form';
import { HomeTaslonicForm } from '@src/home/components/home-taslonic-form/home-taslonic-form';

export const HomeCover = () => {
  return (
    <div className="home-cover">
      <div className="home-cover-form-container">
        <HomeReactHookForm />
      </div>
      <div className="home-cover-form-container">
        <HomeTaslonicForm />
      </div>
    </div>
  );
};
