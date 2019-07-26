import React, { useReducer } from 'react';
import { SmurfContext } from '../contexts';

export const StateProvider = ({ initialState, reducer, children }) => {
  return (
    <SmurfContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </SmurfContext.Provider>
  );
};
