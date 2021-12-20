import React from 'react';
import iconUrls from '@src/base/icons'

export const Icon = ({ name }) => (
  <span style={buildStyle(name)}></span>
)

function buildStyle(name){
  const maskImageValue = `url("${iconUrls[name]}")`;
  return {
    maskImage: maskImageValue,
    WebkitMaskImage: maskImageValue
  };
}
