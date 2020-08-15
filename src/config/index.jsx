/* eslint-disable linebreak-style */
const URL_BACKEND_MAIN = window.location.hostname.includes('localhost')
  ? 'http://localhost:8080'
  : 'https://fiflix.herokuapp.com';

export default {
  URL_BACKEND_MAIN,
};
