import React, { useContext } from 'react';
import donationContext from '../../context/contextDonation';

export default function ItemDescartavelChoose(props) {
  const { donation } = props;
  const { setDisposables } = useContext(donationContext);
  return (
    <div className="disposable-item">
      <span name="" id="">
        {donation.type}
      </span>
      <span>{donation.quantity}</span>
      <span>{donation.unit}</span>
      <button
        type="button"
        onClick={ () => setDisposables((s) => s.filter((e) => e !== donation)) }
      >
        X
      </button>
    </div>
  );
}
