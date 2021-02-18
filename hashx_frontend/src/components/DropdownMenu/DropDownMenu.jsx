import React, { useContext, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import useOutsideAlerter from '../../hooks/useOutsideAlerter';
import { makeStyles } from '@material-ui/core/styles';
import { AnimatePresence, motion } from 'framer-motion';
import { secondaryColor, textColor } from '../../theme/theme';
import { UserContext } from '../../context/UserProvider';

const useStyles = makeStyles(() => ({
  container: {
    display: (props) => (props.open === true ? 'block' : 'none'),
    visibility: 'none',
    opacity: (props) => (props.open === true ? 1 : 0),
    position: 'fixed',
    top: '5em',
    right: '5em',
    borderRadius: '5px',
    padding: '1rem',
    minWidth: '300px',
    background: `${secondaryColor}`,
    color: `${textColor}`,
    boxShadow: '-6px -6px 16px #fff, 6px 6px 16px #d1cdc7',
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '600px',
  },
  item: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    padding: '1rem',
    wordBreak: 'break-word',
    '&:hover': {
      backgroundColor: 'rgb(211,211,211, 0.4)',
      borderRadius: '5px',
      cursor: 'pointer',
    },
    '& i': {
      paddingRight: '1rem',
      margin: 'auto 0 auto 0',
    },
    '& span': {
      flexGrow: 2,
    },
  },
}));

const DropDownMenu = (props) => {
  const { options, setOpen } = props;
  const classes = useStyles(props);
  const {
    user: { token },
  } = useContext(UserContext);
  const history = useHistory();
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, setOpen);

  const actionHandler = (item) => {
    if (item.text === 'My Profile') {
      history.push('/profile');
    } else if (item.text === 'Logout') {
      localStorage.setItem('isAuthenticated', false);
      history.push('/');
      // ! Add logout query
      //   logout({ variables: { refreshToken: token } });
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        className={classes.container}
        initial={{ translateY: '100%', display: 'none' }}
        animate={
          props.open
            ? { translateY: 0, display: 'block' }
            : { translateY: '100%', display: 'none' }
        }
        exit={{ translateY: '100%', display: 'none' }}
        ref={wrapperRef}
      >
        {options.map((item, index) => (
          <div
            className={classes.item}
            key={index}
            onClick={() => {
              actionHandler(item);
            }}
          >
            {item.icon && <i className={item.icon} />}
            <span>{item.text}</span>
          </div>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};

export default DropDownMenu;
