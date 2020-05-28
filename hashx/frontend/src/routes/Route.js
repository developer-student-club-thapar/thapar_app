import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

function RouteWrapper({
  component: Component,
  isPrivate,
  isRestricted,
  auth: { isAuthenticated, id, token },
  ...rest
}) {
  /**
   * Redirect user to SignIn page if he tries to access a private route
   * without authentication.
   */
  if (isPrivate && !isAuthenticated) {
    return <Redirect to="/" />;
  }

  /**
   * Redirect user to Main page if he tries to access a non private route
   * (SignIn or SignUp) after being authenticated.
   */
  if (isRestricted && isAuthenticated && id && token === null) {
    return <Redirect to="/studentdetailform" />;
  }

  /**
   * If not included on both previous cases, redirect user to the desired route.
   */
  return <Route {...rest} component={Component} />;
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(RouteWrapper);
