import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Descartable from '../components/descataveis/descartaveis';
import PetFood from '../components/racao/racao';
import DonationItemFood from '../components/register-components/donationItemFood';
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
          <button
            type="button"
            onClick={ () => history.push('/register-donor') }
          >
            <FontAwesomeIcon icon={ faPlus } />
          </button>
        </form>
        <div className="donation-items">
          <section className="food">
            <DonationItemFood
              text="Marmitex"
              stateHandler={ changeMarmitex }
              state={ marmitex }
            />
            <DonationItemFood
              text="Bebida"
              stateHandler={ changeBebida }
              state={ bebida }
            />
            <DonationItemFood
              text="Sobremesa"
              stateHandler={ changeSobremesa }
              state={ sobremesa }
            />
          </section>

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
