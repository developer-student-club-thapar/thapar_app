import React from 'react';
import rocket from '../assets/rocket.json';
import Lottie from 'react-lottie';

const RocketAnimation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: rocket,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <>
      <Lottie
        options={defaultOptions}
        height={800}
        width={500}
        style={{ marginTop: '100px', display: 'block' }}
      />
    </>
  );
};

export default RocketAnimation;
