import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import { Theme } from '@material-ui/core';

export const ButtonStyles = (theme) => {
  return {
    root: ({ collapsed }) => ({
      minWidth: collapsed ? 56 : 64,
      minHeight: collapsed ? 56 : 48,
      backgroundColor: theme.palette.common.white,
      padding: `8px ${collapsed ? '8px' : '24px'} 8px ${
        collapsed ? '8px' : '16px'
      }`,
      borderRadius: 40,
      boxShadow:
        '0 1px 2px 0 rgba(60,64,67,0.302), 0 1px 3px 1px rgba(60,64,67,0.149)',
      '&:hover': {
        boxShadow:
          '0 1px 3px 0 rgba(60,64,67,0.302), 0 4px 8px 3px rgba(60,64,67,0.149)',
        backgroundColor: '#fafafb',
      },
      '&:active': {
        backgroundColor: '#f1f3f4',
      },
    }),
    label: {
      fontFamily:
        "'Google Sans', Roboto,RobotoDraft,Helvetica,Arial,sans-serif",
      color: '#3c4043',
      textTransform: 'none',
      fontWeight: 500,
    },
    img: {
      width: 32,
      height: 32,
    },
    startIcon: ({ collapsed }) => ({
      margin: collapsed ? 0 : '',
    }),
  };
};
// style object which would be converted to makeStyle

const useStyles = makeStyles(ButtonStyles, { name: 'AvatarButton' });
const AvatarButton = ({ collapsed, text, icon, ...props }) => {
  const classes = useStyles({ collapsed });
  const { img: imgClassName, ...buttonClasses } = classes;
  return (
    <Button
      disableRipple
      {...props}
      classes={buttonClasses}
      style={{ outline: 'none' }}
      startIcon={<Avatar className={imgClassName} src={icon} />}
    >
      {!collapsed && `${text}`}
    </Button>
  );
};

export default AvatarButton;
