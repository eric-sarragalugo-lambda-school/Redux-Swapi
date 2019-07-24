import {
  FETCH_CHARACTERS_PENDING,
  FETCH_CHARACTERS_SUCCESS,
  FETCH_CHARACTERS_FAILURE,
} from '../actions';

const initialState = {
  characters: [],
  fetching: false,
  error: '',
};

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHARACTERS_PENDING:
      return {
        ...state,
        fetching: true,
        error: '',
      };
    case FETCH_CHARACTERS_SUCCESS:
      return {
        ...state,
        characters: action.payload,
        fetching: false,
      };
    case FETCH_CHARACTERS_FAILURE:
      return {
        ...state,
        fetching: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
