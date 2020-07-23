import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const data = [
  {
    title: 'Resources',
    text:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae, dicta.',
    icon: '1.svg',
  },
  {
    title: 'Dashboard',
    text:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae, dicta.',
    icon: '2.svg',
  },
  {
    title: 'Engage',
    text:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae, dicta.',
    icon: '3.svg',
  },
  {
    title: 'Growth',
    text:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae, dicta.',
    icon: '4.svg',
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: '-webkit-center',
    maxWidth: 290,
    background: 'transparent',
  },
  media: {
    width: 50,
    height: 50,
  },
  title: {
    padding: theme.spacing(2),
  },
}));

const CardList = () => {
  const classes = useStyles();
  return (
    <>
      {data.map((element, index) => {
        return (
          <Grid
            item
            key={index}
            xs={6}
            md={3}
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <Card className={classes.root} key={index} elevation={0}>
              <CardMedia
                className={classes.media}
                image={require('../../assets/Landing-page-list/' +
                  element.icon)}
              />
              <CardContent style={{ textAlign: 'center' }}>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h2"
                  className={classes.title}
                >
                  {element.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  style={{ textAlign: 'justify' }}
                >
                  {element.text}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        );
      })}
    </>
  );
};

export default CardList;
