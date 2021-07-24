import React, { useState } from 'react';
import PropTypes from 'prop-types';
import donationContext from '../context/contextDonation';

export default function DonationProvider({ children }) {
  const [disposables, setDisposables] = useState([]);
  const [racaos, setRacaos] = useState([]);
  const [marmitex, setMarmitex] = useState(0);
  const changeMarmitex = (e) => setMarmitex(e.target.value);
  const [bebida, setBebida] = useState(0);
  const changeBebida = (e) => setBebida(e.target.value);
  const [sobremesa, setSobremesa] = useState(0);
  const changeSobremesa = (e) => setSobremesa(e.target.value);
  const context = {
    disposables,
    setDisposables,
    racaos,
    setRacaos,
    marmitex,
    changeMarmitex,
    bebida,
    changeBebida,
    sobremesa,
    changeSobremesa,
  };
  return (
    <donationContext.Provider value={ context }>
      {children}
    </donationContext.Provider>);
}
DonationProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
