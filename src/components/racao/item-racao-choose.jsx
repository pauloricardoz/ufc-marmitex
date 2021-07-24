import React, { useContext } from 'react';
import donationContext from '../../context/contextDonation';

export default function ItemRacaoChoose(props) {
  const { donation } = props;
  const { setRacaos } = useContext(donationContext);
  return (
    <div className="disposable-item">
      <span name="" id="">
        {donation.type}
      </span>
      <span>{donation.quantity}</span>
      <span>{donation.unit}</span>
      <button onClick={ () => setRacaos((s) => s.filter((e) => e !== donation)) }>
        X
      </button>
    </div>
  );
}
