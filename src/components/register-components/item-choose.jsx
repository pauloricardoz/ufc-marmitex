import React from 'react';
import PropTypes from 'prop-types';

export default function ItemChoose(props) {
  const { donation, handlerDonation } = props;
  return (
    <div className="disposable-item">
      <span name="" id="" className="disposable-item-name">
        {donation.type}
      </span>
      <span className="disposable-item-quantity">{donation.quantity}</span>
      <span className="disposable-item-unit">{donation.unit}</span>
      <button
        className="disposable-item-buttom"
        type="button"
        onClick={ () => handlerDonation((s) => s.filter((e) => e !== donation)) }
      >
        X
      </button>
    </div>
  );
}
ItemChoose.propTypes = {
  donation: PropTypes.shape({
    type: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    unit: PropTypes.string.isRequired,
  }).isRequired,
  handlerDonation: PropTypes.func.isRequired,
};
