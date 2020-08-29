/* eslint-disable linebreak-style */
import config from '../config';

const URL_CATEGORIAS = `${config.URL_BACKEND_MAIN}/categorias`

function getAll() {
  return fetch(`${URL_CATEGORIAS}`)
    .then(async (serverAnswer) => {
      if (serverAnswer.ok) {
        const answer = await serverAnswer.json();
        return answer;
      }

      throw new Error('Unable to upload data');
    });
}

function getAllWithVideos() {
  return fetch(`${URL_CATEGORIAS}?_embed=videos`)
    .then(async (serverAnswer) => {
      if (serverAnswer.ok) {
        const answer = await serverAnswer.json();
        return answer;
      }

      throw new Error('Unable to upload data');
    });
}

export default {
  getAllWithVideos,
  getAll,
};
