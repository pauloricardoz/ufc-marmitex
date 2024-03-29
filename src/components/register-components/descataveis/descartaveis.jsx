import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import donationContext from '../../../context/contextDonation';
import ItemDescartavel from './item-descartavel';
import ItemChoose from '../item-choose';

export default function Descartable({ comeBack }) {
  const { disposables, setDisposables } = useContext(donationContext);
  return (
    <div className="register-page-disposable">
      <div>
        <h1>Descartavel</h1>
        {disposables.map((donation) => (
          <ItemChoose
            key={ `${donation.type}${donation.quantity}` }
            handlerDonation={ setDisposables }
            donation={ donation }
          />
        ))}
        <ItemDescartavel />
      </div>

      <div className="back-next-buttons">
        <button type="button" onClick={ comeBack }>Back</button>
        {/* <button>Next</button> */}
      </div>
    </div>
  );
}
Descartable.propTypes = {
  comeBack: PropTypes.func.isRequired,
};
