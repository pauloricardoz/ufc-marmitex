import React, { useState } from 'react';
import PropTypes from 'prop-types';
import donationContext from '../context/contextDonation';

export default function DonationProvider({ children }) {
  const [disposables, setDisposables] = useState([]);
  const [racaos, setRacaos] = useState([]);
  const [marmitex, setMarmitex] = useState(0);
  const changeMarmitex = (e) => setMarmitex(Number(e.target.value));
  const [bebida, setBebida] = useState(0);
  const changeBebida = (e) => setBebida(Number(e.target.value));
  const [sobremesa, setSobremesa] = useState(0);
  const changeSobremesa = (e) => setSobremesa(Number(e.target.value));
  const context = {
    disposables,
    setDisposables,
    racaos,
    setRacaos,
    marmitex,
    setMarmitex,
    changeMarmitex,
    bebida,
    setBebida,
    changeBebida,
    sobremesa,
    setSobremesa,
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
