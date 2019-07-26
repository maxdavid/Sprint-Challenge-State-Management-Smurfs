import {
  FETCH_SMURFS_START,
  FETCH_SMURFS_SUCCESS,
  FETCH_ERROR,
  ADD_SMURF_START,
  ADD_SMURF_SUCCESS,
  ADD_ERROR,
  DELETE_SMURF_START,
  DELETE_SMURF_SUCCESS,
  DELETE_ERROR,
  EDIT_SMURF_START,
  EDIT_SMURF_SUCCESS,
  EDIT_ERROR
} from '../actions';

export const initialState = {
  smurfs: [],
  fetching: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  activeSmurf: null,
  error: null
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SMURFS_START:
      return { ...state, fetching: true, error: '' };
    case FETCH_SMURFS_SUCCESS:
      const totalSmurfs = [...state.smurfs, ...action.payload];
      const uniqueSmurfs = Array.from(new Set(totalSmurfs.map(a => a.id))).map(
        id => {
          return totalSmurfs.find(a => a.id === id);
        }
      );
      return {
        ...state,
        fetching: false,
        smurfs: uniqueSmurfs,
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
    case DELETE_SMURF_START:
      return {
        ...state,
        deletingSmurf: true,
        error: ''
      };
    case DELETE_SMURF_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        deletingSmurf: false
      };
    case DELETE_ERROR:
      return {
        ...state,
        deletingSmurf: false,
        error: action.payload
      };
    case EDIT_SMURF_START:
      return {
        ...state,
        updatingSmurf: true,
        activeSmurf: action.payload,
        error: ''
      };
    case EDIT_SMURF_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        activeSmurf: null,
        updatingSmurf: false
      };
    case EDIT_ERROR:
      return {
        ...state,
        updatingSmurf: false,
        activeSmurf: null,
        error: action.payload
      };
    default:
      return state;
  }
};
