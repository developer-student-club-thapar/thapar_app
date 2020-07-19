import React, { Fragment } from 'react';
import student from '../assets/student.json';
import Lottie from 'react-lottie';

const Animation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: student,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <Fragment>
      <Lottie
        options={defaultOptions}
        height={500}
        width={500}
        style={{ marginTop: '80px', display: 'block' }}
      />
    </Fragment>
  );
};

export default Animation;
