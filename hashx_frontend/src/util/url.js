export const getApiUrl = () => {
  if (process.env.NODE_ENV === 'production') {
    return process.env.REACT_APP_URL_PRODUCTION;
  } else if (process.env.NODE_ENV === 'development') {
    return process.env.REACT_APP_URL_DEVELOPMENT;
  }
};
