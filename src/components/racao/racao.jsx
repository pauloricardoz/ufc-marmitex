import React, { useContext } from 'react';
import donationContext from '../../context/contextDonation';
import ItemRacao from './item-racao';
import ItemRacaoChoose from './item-racao-choose';

export default function PetFood({ comeBack }) {
  const { racaos, setRacaos } = useContext(donationContext);
  return (
    <div className="register-page-disposable">
      <div>
        <h1>Descartavel</h1>
        {racaos.map((racao) => (
          <ItemRacaoChoose key={ racao } donation={ racao } />
        ))}
        <ItemRacao />
      </div>

      <div className="back-next-buttons">
        <button onClick={ comeBack }>Back</button>
        {/* <button>Next</button> */}
      </div>
    </div>
  );
}
