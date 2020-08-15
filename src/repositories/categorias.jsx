/* eslint-disable linebreak-style */
import config from '../config';

const URL_CATEGORIAS = `${config.URL_BACKEND_MAIN}/categorias`

function getAllWithVideos() {
  fetch(URL_CATEGORIAS)
    .then(async (serverAnswer) => {
      const answer = await serverAnswer.json();

      return answer;
    });
}

export default {
  getAllWithVideos,
};
