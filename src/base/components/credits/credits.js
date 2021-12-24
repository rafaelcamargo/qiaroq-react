import './credits.styl';
import React from 'react';
import avatarImageUrl from '@src/base/images/avatar-rafael-camargo.jpeg';
import { Avatar } from '@src/base/components/avatar/avatar';

export const Credits = () => (
  <div className="credits">
    <Avatar name="Rafael Camargo" imageUrl={avatarImageUrl} />
    Maintained by <a href="https://rafaelcamargo.com" target="_blank" rel="noopener noreferrer">Rafael Camargo</a>
  </div>
);
