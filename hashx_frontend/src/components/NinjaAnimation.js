import React, { Fragment } from 'react';
import ninja from '../assets/ninja.json';
import Lottie from 'react-lottie';

const NinjaAnimation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: ninja,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <>
      <Lottie
        options={defaultOptions}
        height={500}
        width={500}
        style={{ marginTop: '80px', display: 'block' }}
      />
    </>
  );
};

export default NinjaAnimation;
