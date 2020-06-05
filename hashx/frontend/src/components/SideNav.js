import React, { Fragment } from 'react';
import '../styles/SideNav.css';
import { Link } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import Flip from 'react-reveal/Flip';
import Paper from '@material-ui/core/Paper';
import Zoom from 'react-reveal/Zoom';

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(9),
    height: theme.spacing(9),
  },
}));

const SideNav = () => {
  const classes = useStyles();
  return (
    <>
      <div id="mySidebar" className="sidebar">
        <div className="heading">
          <span>
            <i className="material-icons">supervisor_account</i>
            <span className="icon-text1">Thapar App</span>
          </span>
        </div>
        <br />
        <br />
        <Link to="/home">
          <span>
            <i className="material-icons">home</i>
            <span className="icon-text">Home</span>
          </span>
        </Link>
        <br />
        <Link to="/courses">
          <span>
            <i className="material-icons">library_books</i>
            <span className="icon-text">Courses</span>
          </span>
        </Link>
        <br />
        <Link to="/">
          <span>
            <i className="material-icons">monetization_on</i>
            <span className="icon-text">clients</span>
          </span>
        </Link>
        <br />
        <Link to="/">
          <span>
            <i className="material-icons">email</i>
            <span className="icon-text">contact</span>
          </span>
        </Link>
      </div>
      <div className="sidebarRight">
        <Avatar
          alt="Lorem Ipsum"
          src="https://picsum.photos/seed/picsum/200/300"
          className={classes.large}
          style={{ margin: 'auto' }}
        />
        <br />
        <Flip left cascade>
          <h2 style={{ textAlign: 'center', fontWeight: 'bold' }}>
            Lorem Ipsum
          </h2>
        </Flip>
        <br />
        <Zoom top>
          <Paper
            elevation={0}
            style={{
              height: '160px',
              backgroundColor: '#EFE8FC',
              color: '#4C1AAF',
              borderRadius: '16px',
              width: '240px',
              margin: 'auto',
            }}
          >
            <h3 style={{ textAlign: 'center', fontWeight: 'bold' }}>
              Roll no: 101915211
            </h3>
            <h3 style={{ textAlign: 'center', fontWeight: 'bold' }}>
              Branch: BE ENC
            </h3>
            <h3 style={{ textAlign: 'center', fontWeight: 'bold' }}>
              Year: 1st year
            </h3>
            <h3 style={{ textAlign: 'center', fontWeight: 'bold' }}>
              Batch: K4
            </h3>
          </Paper>
        </Zoom>
      </div>
    </>
  );
};
export default SideNav;
