import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Descartable from '../components/descataveis/descartaveis';
import PetFood from '../components/racao/racao';
import donationContext from '../context/contextDonation';
import userContext from '../context/contextUser';

export default function RegisterPage() {
  const {
    marmitex,
    changeMarmitex,
    bebida,
    changeBebida,
    sobremesa,
    changeSobremesa,
  } = useContext(donationContext);
  const { donorsList, donorSelected } = useContext(userContext);
  const history = useHistory();
  const [descart, setDescart] = useState(false);
  const [petFood, setPetFood] = useState(false);
  const comeBack = (func) => () => func((s) => !s);
  if (descart) {
    return <Descartable comeBack={ comeBack(setDescart) } />;
  }
  if (petFood) {
    return <PetFood comeBack={ comeBack(setPetFood) } />;
  }
  return (
    <div className="register-page">
      <div>
        <form className="user-form">
          <fieldset>
            {/* input type search */}
            <select name="" id="">
              {donorsList.map(({ nickname: option }) => (
                <option
                  key={ option }
                  value={ option }
                  selected={ donorSelected === option }
                >
                  {option}
                </option>
              ))}
            </select>
          </fieldset>
          <fieldset>
            <button
              type="button"
              onClick={ () => history.push('/register-donor') }
            >
              Cadastrar pessoa doadora
            </button>
          </fieldset>
        </form>
        <div className="donation-items">
          <div className="donation-item">
            <span htmlFor="marmitex">Marmitex:</span>
            <input
              name="marmitex"
              type="number"
              min="0"
              onChange={ changeMarmitex }
              value={ marmitex }
            />
          </div>
          <div className="donation-item">
            <span htmlFor="bebida">Bebida:</span>
            <input
              name="bebida"
              type="number"
              min="0"
              onChange={ changeBebida }
              value={ bebida }
            />
          </div>
          <div className="donation-item">
            <span htmlFor="sobremesa">Sobremesa:</span>
            <input
              name="sobremesa"
              type="number"
              min="0"
              value={ sobremesa }
              onChange={ changeSobremesa }
            />
          </div>
          <div className="donation-others-items">
            <button
              type="button"
              onClick={ () => setDescart((s) => !s) }
            >
              Descartavel
            </button>
            <button type="button" onClick={ () => setPetFood((s) => !s) }>Ração</button>
            <button type="button">Outros</button>
          </div>
        </div>
      </div>
      <div className="back-next-buttons">
        <button type="button" onClick={ () => history.push('/home') }>Back</button>
        <button type="button">Next</button>
      </div>
    </div>
  );
}
