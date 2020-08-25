import React from 'react';
import Tour from '../components/VirtualCampus/VirtualCampus';

const VirtualCampus = (props) => {
  return (
    <>
      <Tour navigate={props} />
    </>
  );
};

export default VirtualCampus;
