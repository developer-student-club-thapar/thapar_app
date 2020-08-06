import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import FiberManualRecordRoundedIcon from '@material-ui/icons/FiberManualRecordRounded';
import IconButton from '@material-ui/core/IconButton';
import StarBorderRoundedIcon from '@material-ui/icons/StarBorderRounded';
import LinkIcon from '@material-ui/icons/Link';
import Chip from '@material-ui/core/Chip';
import Tooltip from '@material-ui/core/Tooltip';
import Zoom from '@material-ui/core/Zoom';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 375,
    minHeight: '160px',
    margin: '10px 0px 10px 0px',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  tags: {
    '& > *': {
      margin: theme.spacing(0.5),
      marginLeft: '0px',
      borderRadius: '6px',
      backgroundColor: '#e76f51',
      fontWeight: 'bolder',
      color: 'white',
    },
  },
  iconArea: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconText: {
    fontStyle: 'italic',
    flexGrow: ' 1',
  },
  iconLink: {
    '& > button': {
      outline: 'none',
    },
  },
}));

const LightTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 1)',
    boxShadow: theme.shadows[2],
    borderRadius: '25px',
  },
}))(Tooltip);

const ClassCard = () => {
  const [set, toggle] = useState(false);
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent style={{ paddingBottom: '0px' }}>
        <Box
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Typography variant="h6" component="span">
            UCS-309
          </Typography>
          <Typography
            component="span"
            style={{
              color: '#e63946',
              fontSize: '12px',
              fontWeight: 'bolder',
            }}
          >
            <FiberManualRecordRoundedIcon fontSize="small" />
            LIVE
          </Typography>
        </Box>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Data Structures and Algorithms
        </Typography>
        {/* tags */}
        <Box className={classes.tags}>
          <Chip label="Lab" />
          <Chip label="Tutorial" style={{ backgroundColor: '#e76f51' }} />
        </Box>
      </CardContent>
      <CardActions disableSpacing style={{ padding: '0px 0rem 0px 1rem' }}>
        <Box className={classes.iconArea}>
          <Typography
            className={classes.iconText}
            component="span"
            color="textSecondary"
          >
            8:10-8:50(Monday)
          </Typography>
          <Box className={classes.iconLink}>
            <IconButton
              aria-label="add to favorites"
              onClick={() => toggle(!set)}
            >
              <StarBorderRoundedIcon />
            </IconButton>
            <LightTooltip
              title="https://tiet.zoom.us/my/csed11"
              placement="right"
              interactive
              TransitionComponent={Zoom}
            >
              <IconButton aria-label="Lecture Link">
                <LinkIcon />
              </IconButton>
            </LightTooltip>
          </Box>
        </Box>
      </CardActions>
    </Card>
  );
};

export default ClassCard;
