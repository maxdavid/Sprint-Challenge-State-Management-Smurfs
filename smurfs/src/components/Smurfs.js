import React, { useEffect } from 'react';
import { fetchSmurfs, deleteSmurf } from '../actions';
import { useStateValue } from '../hooks';

import Smurf from './Smurf';
import './App.scss';

const Smurfs = () => {
  const [{ smurfs, fetching, error }, dispatch] = useStateValue();

  useEffect(() => {
    fetchSmurfs(dispatch);
  }, []);

  if (fetching) return <h1>Loading...</h1>;
  if (error) return <h1 style={{ color: 'red' }}>{error}</h1>;
  return (
    <div className='Smurfs'>
      {smurfs.map(smurf => {
        return (
          <Smurf
            name={smurf.name}
            id={smurf.id}
            age={smurf.age}
            height={smurf.height}
            key={smurf.id}
            onClick={() => deleteSmurf(smurf.id)}
          />
        );
      })}
    </div>
  );
};

export default Smurfs;

// Smurf.defaultProps = {
//   smurfs: []
// };

// const mapStateToProps = state => {
//   return {
//     smurfs: state.smurfs
//   };
// };

// export default connect(
//   mapStateToProps,
//   { editSmurf, deleteSmurf }
// )(Smurfs);
