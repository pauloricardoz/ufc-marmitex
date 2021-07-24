import React from 'react';
import PropTypes from 'prop-types';

function DonationItemFood({
  text, type, min, stateHandler, state,
}) {
  return (
    <div className="donation-item">
      <span htmlFor={ text.toLocaleLowerCase() }>
        {text}
        :
      </span>
      <input
        name={ text.toLocaleLowerCase() }
        type={ type }
        min={ min }
        onChange={ stateHandler }
        value={ state }
      />
    </div>
  );
}

export default DonationItemFood;

DonationItemFood.defaultProps = {
  type: 'number',
  min: '0',
};
DonationItemFood.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string,
  min: PropTypes.string,
  stateHandler: PropTypes.func.isRequired,
  state: PropTypes.number.isRequired,
};
