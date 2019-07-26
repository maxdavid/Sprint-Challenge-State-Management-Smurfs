import { useContext } from 'react';
import { SmurfContext } from '../contexts';

export const useStateValue = () => useContext(SmurfContext);
