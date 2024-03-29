import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import donationContext from '../../../context/contextDonation';
import ItemRacao from './item-racao';
import ItemChoose from '../item-choose';

export default function PetFood({ comeBack }) {
  const { racaos, setRacaos } = useContext(donationContext);
  return (
    <div className="register-page-disposable">
      <div>
        <h1>Descartavel</h1>
        {racaos.map((racao) => (
          <ItemChoose
            key={ `${racao.type}${racao.quantity}` }
            handlerDonation={ setRacaos }
            donation={ racao }
          />

        ))}
        <ItemRacao />
      </div>

      <div className="back-next-buttons">
        <button type="button" onClick={ comeBack }>Back</button>
        {/* <button>Next</button> */}
      </div>
    </div>
  );
}
PetFood.propTypes = {
  comeBack: PropTypes.func.isRequired,
};
