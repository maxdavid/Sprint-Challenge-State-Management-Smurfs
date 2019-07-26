import axios from 'axios';

export const FETCH_SMURFS_START = 'FETCH_SMURFS_START';
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS';
export const FETCH_ERROR = 'FETCH_ERROR';

export const ADD_SMURF_START = 'ADD_SMURF_START';
export const ADD_SMURF_SUCCESS = 'ADD_SMURF_SUCCESS';
export const ADD_ERROR = 'ADD_ERROR';

export const EDIT_SMURF_START = 'EDIT_SMURF_START';
export const EDIT_SMURF_SUCCESS = 'EDIT_SMURF_SUCCESS';
export const EDIT_ERROR = 'EDIT_ERROR';

export const DELETE_SMURF_START = 'DELETE_SMURF_START';
export const DELETE_SMURF_SUCCESS = 'DELETE_SMURF_SUCCESS';
export const DELETE_ERROR = 'DELETE_ERROR';

export const fetchSmurfs = () => dispatch => {
  dispatch({
    type: FETCH_SMURFS_START
  });
  axios
    .get('http://localhost:3333/smurfs')
    .then(res => {
      console.log('response:', res);
      dispatch({
        type: FETCH_SMURFS_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({ type: FETCH_ERROR, error: err });
    });
};

export const addSmurf = smurf => dispatch => {
  dispatch({
    type: ADD_SMURF_START
  });
  axios
    .post('http://localhost:3333/smurfs', smurf)
    .then(res => {
      console.log('response:', res);
      dispatch({
        type: ADD_SMURF_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({ type: ADD_ERROR, error: err });
    });
};

export const deleteSmurf = smurfid => dispatch => {
  dispatch({
    type: DELETE_SMURF_START
  });
  axios
    .delete(`http://localhost:3333/smurfs/${smurfid}`)
    .then(res => {
      console.log('response:', res);
      dispatch({
        type: DELETE_SMURF_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({ type: DELETE_ERROR, error: err });
    });
};

export const editSmurf = smurf => dispatch => {
  dispatch({
    type: EDIT_SMURF_START
  });
  axios
    .put(`http://localhost:3333/smurfs/${smurf.id}`, smurf)
    .then(res => {
      console.log('response:', res);
      dispatch({
        type: EDIT_SMURF_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({ type: EDIT_ERROR, error: err });
    });
};
/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/
