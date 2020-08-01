import React from 'react';
import AvatarButton from '../Helper/AvatarButton';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import thapar from './thapar.png';
import Grid from '@material-ui/core/Grid';

const VirtualCampus = () => {
  return (
    <TransformWrapper
      defaultScale={2}
      // defaultPositionX={200}
      // defaultPositionY={100}
    >
      {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
        <>
          <div className="tools">
            <AvatarButton
              collapsed
              text="Virtual Campus Tour"
              icon="https://www.svgrepo.com/show/15738/zoom-in.svg"
              onClick={zoomIn}
            />
            <AvatarButton
              collapsed
              text="Virtual Campus Tour"
              icon="https://www.svgrepo.com/show/96945/zoom-out.svg"
              onClick={zoomOut}
            />
            <AvatarButton
              collapsed
              text="Virtual Campus Tour"
              icon="https://www.svgrepo.com/show/188754/scale.svg"
              onClick={resetTransform}
            />
          </div>
          <TransformComponent>
            <img src={thapar} alt="test" />
            <div>Example text</div>
          </TransformComponent>
        </>
      )}
    </TransformWrapper>
  );
};

export default VirtualCampus;
