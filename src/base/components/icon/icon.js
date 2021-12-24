import './icon.styl';
import React from 'react';
import iconUrls from '@src/base/icons'

export const Icon = ({ name }) => (
  <span
    className={buildClassName(name)}
    style={buildStyle(name)}
    data-icon={buildIconAttribute(name)}
    role="presentation"
  >
  </span>
)

function buildClassName(name){
  const baseClass = 'icon';
  return buildIconImageUrl(name) ? `${baseClass} icon-${name}` : baseClass;
}

function buildStyle(name){
  const maskImageUrl = buildIconImageUrl(name);
  return maskImageUrl ? { maskImage: maskImageUrl, WebkitMaskImage: maskImageUrl } : {};
}

function buildIconImageUrl(name){
  const url = iconUrls[name];
  if(url) return `url("${url}")`;
}

function buildIconAttribute(name){
  if (buildIconImageUrl(name)) return name;
}
