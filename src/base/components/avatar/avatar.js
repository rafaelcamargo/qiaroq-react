import './avatar.styl';
import React from 'react';

export const Avatar = ({ name, imageUrl }) => (
  <div className="avatar">
    <img alt={`${name}'s avatar`} src={imageUrl} />
  </div>
);
