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
  // * grab the authentication boolean from the context. If not present, grab from local storage
  const auth = localStorage.getItem('isAuthenticated');

  // * Redirection rules
  if (isPrivate && auth === 'false') {
    return <Redirect to="/" />;
  } else if (isRestricted && auth === 'true') {
    return <Redirect to="/dashboard" />;
  }

  /**
   * If not included on both previous cases, redirect user to the desired route.
   */
  return <Route {...rest} component={Component} />;
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  isRestricted: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
  isRestricted: false,
  isPrivateNew: false,
};

export default RouteWrapper;
