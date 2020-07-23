import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { UserContext } from '../context/UserProvider';

function RouteWrapper({
  component: Component,
  isPrivate,
  isRestricted,
  isPrivateNew,
  ...rest
}) {
  const { user } = useContext(UserContext);
  const { newUser } = user;
  let isAuthenticated = localStorage.getItem('isAuthenticated');

  isAuthenticated = isAuthenticated || false;

  if (isPrivate && !isAuthenticated) {
    return <Redirect to="/" />;
  } else if (isPrivate && isAuthenticated && newUser === true) {
    return <Redirect to="/studentdetailform" />;
  } else if (isPrivateNew && newUser === false) {
    return <Redirect to="/dashboard" />;
  } else if (isPrivateNew && !isAuthenticated) {
    return <Redirect to="/" />;
  } else if (isRestricted && isAuthenticated && newUser === false) {
    return <Redirect to="/dashboard" />;
  } else if (isRestricted && isAuthenticated && newUser === true) {
    return <Redirect to="/studentdetailform" />;
  }

  /**
   * If not included on both previous cases, redirect user to the desired route.
   */
  return <Route {...rest} component={Component} />;
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  isRestricted: PropTypes.bool,
  isPrivateNew: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
  isRestricted: false,
  isPrivateNew: false,
};

export default RouteWrapper;
