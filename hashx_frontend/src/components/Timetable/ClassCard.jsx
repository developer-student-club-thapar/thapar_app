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
import SvgIcon from '@material-ui/core/SvgIcon';

function ZoomIcon(props) {
  return (
    <SvgIcon {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
        width="24px"
        height="24px"
      >
        <circle cx="24" cy="24" r="20" fill="#2196f3" />
        <path
          fill="#fff"
          d="M29,31H14c-1.657,0-3-1.343-3-3V17h15c1.657,0,3,1.343,3,3V31z"
        />
        <polygon fill="#fff" points="37,31 31,27 31,21 37,17" />
      </svg>
    </SvgIcon>
  );
}
const useStyles = makeStyles((theme) => ({
  root: {
    '&:hover': {
      transform: 'scale(1.1)',
      'box-shadow': '6.6px 6.6px 17.6px #d1cdc7',
    },
    transition: 'transform .2s',
    minWidth: 275,
    minHeight: '70px',
    minHeight: '135px',
    maxHeight: '135px',
    margin: '10px 0px 10px 0px',
    borderLeft: '10px solid pink',
    'box-shadow': '-6px -6px 16px #fff, 6px 6px 16px #d1cdc7',
    // 'border-radius': '20px',
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

const ClassCard = ({ item }) => {
  const [set, toggle] = useState(false);
  const classes = useStyles();
  if (item) {
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
              {item.node.course.code}
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
            noWrap
          >
            {item.node.course.name}
          </Typography>
          {/* tags */}
          {/* <Box className={classes.tags}>
          <Chip label="Lab" />
          <Chip label="Tutorial" style={{ backgroundColor: '#e76f51' }} />
        </Box> */}
        </CardContent>
        <CardActions disableSpacing style={{ padding: '0px 0rem 0px 1rem' }}>
          <Box className={classes.iconArea}>
            <Typography
              className={classes.iconText}
              component="span"
              color="textSecondary"
            >
              {item.node.period.edges[0].node.startTime}-
              {item.node.period.edges[0].node.endTime}
            </Typography>
            <Box className={classes.iconLink}>
              <IconButton
                aria-label="add to favorites"
                onClick={() => toggle(!set)}
              >
                <StarBorderRoundedIcon />
              </IconButton>
              <LightTooltip
                title={item.node.meetingURL}
                placement="right"
                interactive
                TransitionComponent={Zoom}
              >
                <IconButton aria-label="Lecture Link">
                  <ZoomIcon
                    onClick={() => {
                      window.open(`${item.node.meetingURL}`);
                    }}
                  />
                </IconButton>
              </LightTooltip>
            </Box>
          </Box>
        </CardActions>
      </Card>
    );
  } else return <div></div>;
};

export default ClassCard;
