import { useState } from 'react';
import donationContext from '../context/contextDonation';

export default function DonationProvider({ children }) {
  const [disposables, setDisposables] = useState([]);
  const [racaos, setRacaos] = useState([]);
  const context = { disposables, setDisposables, racaos, setRacaos };
  return <donationContext.Provider value={context}>{children}</donationContext.Provider>;
}
