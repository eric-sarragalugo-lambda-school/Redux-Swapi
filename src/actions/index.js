import axios from 'axios';

export const FETCH_CHARACTERS_PENDING = 'FETCH_CHARACTERS_PENDING';
export const FETCH_CHARACTERS_SUCCESS = 'FETCH_CHARACTERS_SUCCESS';
export const FETCH_CHARACTERS_FAILURE = 'FETCH_CHARACTERS_FAILURE';

export const fetchCharacters = () => (dispatch) => {
  const request = axios.get(`https://swapi.co/api/people/`);
  request
    .then((response) => {
      dispatch({
        type: FETCH_CHARACTERS_SUCCESS,
        payload: response.data.results,
      });
    })
    .catch((error) => {
      dispatch({
        type: FETCH_CHARACTERS_FAILURE,
        payload: `${error}`,
      });
    });
};
