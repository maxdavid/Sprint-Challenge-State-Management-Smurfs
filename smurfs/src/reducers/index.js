import {
  FETCH_SMURFS_START,
  FETCH_SMURFS_SUCCESS,
  FETCH_ERROR,
  ADD_SMURF_START,
  ADD_SMURF_SUCCESS,
  ADD_ERROR
} from '../actions';

const initialState = {
  smurfs: [],
  fetching: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SMURFS_START:
      return { ...state, fetching: true, error: '' };
    case FETCH_SMURFS_SUCCESS:
      return {
        ...state,
        fetching: false,
        smurfs: [...state.smurfs, ...action.payload],
        error: ''
      };
    case FETCH_ERROR:
      console.log(action.error);
      return { ...state, error: action.error };
    case ADD_SMURF_START:
      return {
        ...state,
        addingSmurf: true,
        error: ''
      };
    case ADD_SMURF_SUCCESS:
      return {
        ...state,
        addingSmurf: false,
        error: ''
      };
    case ADD_ERROR:
      return {
        ...state,
        addingSmurf: false,
        error: action.payload
      };
    default:
      return state;
  }
};
