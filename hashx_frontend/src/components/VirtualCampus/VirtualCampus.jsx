import React from 'react';
import AvatarButton from '../Helper/AvatarButton';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import thapar from './thapar.png';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  main: {
    padding: '10px 50px',
  },
  btnContainer: {
    marginBottom: '30px',
  },
  btn: {
    marginLeft: '20px',
  },
  image: {
    borderRadius: '20px',
    boxShadow: '-6px -6px 16px #fff, 6px 6px 16px #d1cdc7',
    overflow: 'hidden',
  },
}));

const VirtualCampus = ({ navigate }) => {
  const classes = useStyles();
  return (
    <TransformWrapper
      defaultScale={1}
      defaultPositionX={150}
      defaultPositionY={100}
    >
      {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
        <Grid container className={classes.main}>
          <Grid item xs={false} lg={1} />
          <Grid item xs={12} lg={10}>
            <Grid container direction="column">
              <Grid container direction="row">
                <Grid item xs={2}>
                  <AvatarButton
                    collapsed
                    text="Virtual Campus Tour"
                    icon="https://www.svgrepo.com/show/108566/back.svg"
                    onClick={() => navigate.history.goBack()}
                    className={classes.btn}
                  />
                </Grid>
                <Grid item xs={4} lg={7} />
                <Grid item xs={6} lg={3} className={classes.btnContainer}>
                  <AvatarButton
                    collapsed
                    text="Virtual Campus Tour"
                    icon="https://www.svgrepo.com/show/15738/zoom-in.svg"
                    onClick={zoomIn}
                    className={classes.btn}
                  />
                  <AvatarButton
                    collapsed
                    text="Virtual Campus Tour"
                    icon="https://www.svgrepo.com/show/96945/zoom-out.svg"
                    onClick={zoomOut}
                    className={classes.btn}
                  />
                  <AvatarButton
                    collapsed
                    text="Virtual Campus Tour"
                    icon="https://www.svgrepo.com/show/188754/scale.svg"
                    onClick={resetTransform}
                    className={classes.btn}
                  />
                </Grid>
              </Grid>
              <Grid item xs={12} className={classes.image}>
                <TransformComponent>
                  <img src={thapar} height={500} width="100%" alt="test" />
                </TransformComponent>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={false} lg={1} />
        </Grid>
      )}
    </TransformWrapper>
  );
};

export default VirtualCampus;
