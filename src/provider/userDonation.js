import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import userContext from '../context/contextUser';

export default function UserProvider({ children }) {
  const [donorsList, setDonorsList] = useState([]);
  const [donorSelected, setDonorSelected] = useState('');
  useEffect(() => {
    setDonorsList([
      { nickname: 'Pessoa1' },
      { nickname: 'Pessoa2' },
      { nickname: 'Pessoa3' },
    ]);
  }, []);

  const context = {
    donorsList,
    setDonorsList,
    donorSelected,
    setDonorSelected,
  };
  return <userContext.Provider value={ context }>{children}</userContext.Provider>;
}

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
