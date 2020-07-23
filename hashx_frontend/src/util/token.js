export const setAccessToken = (a) => {
  localStorage.setItem('accessToken', a);
};
export const setRefreshToken = (r) => {
  localStorage.setItem('refreshToken', r);
};
export const getAccessToken = () => {
  if (localStorage.getItem('accessToken') !== null) {
    return localStorage.getItem('accessToken');
  }
  localStorage.setItem('accessToken', '');
};
export const getRefreshToken = () => {
  return localStorage.getItem('refreshToken');
};
