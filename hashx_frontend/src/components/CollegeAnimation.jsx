import React from 'react';
import animation from '../assets/education2.json';
import Lottie from 'react-lottie';

const CollegeAnimation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation,
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

export default CollegeAnimation;
