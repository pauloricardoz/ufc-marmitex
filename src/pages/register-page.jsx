import React, { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Descartable from '../components/register-components/descataveis/descartaveis';
import PetFood from '../components/register-components/racao/racao';
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
    disposables,
    racaos,
  } = useContext(donationContext);
  const { donorsList, donorSelected, setDonorSelected } = useContext(userContext);
  const history = useHistory();
  const [descart, setDescart] = useState(false);
  const [petFood, setPetFood] = useState(false);
  const [loading, setLoading] = useState(true);
  const [disableNext, setDisableNext] = useState(true);
  useEffect(() => {
    // API Request HERE to set donorsList
    if (!donorSelected.nickname && donorsList[0]) {
      setDonorSelected({ nickname: donorsList[0].nickname });
    } else {
      setDonorSelected({ nickname: 'Anônimo' });
    }
    // eslint-disable-next-line
  }, []);
  useEffect(() => {
    if (donorsList.length) {
      setLoading(false);
      setDonorSelected({ nickname: donorsList[0].nickname });
    }
    // eslint-disable-next-line
  }, [donorsList]);
  useEffect(() => {
    if (!(marmitex
      || bebida
      || sobremesa
      || (disposables.every(({ quantity }) => quantity) && disposables.length)
      || (racaos.every(({ quantity }) => quantity) && racaos.length))
    ) {
      setDisableNext(true);
    } else {
      setDisableNext(false);
    }
  }, [marmitex, bebida, sobremesa, disposables, racaos]);
  if (loading) return <h1>Carregando...</h1>;
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
          <select
            name=""
            id=""
            defaultValue={ donorSelected }
            onChange={ (e) => setDonorSelected(e.target.value) }
          >
            {donorsList.map(({ nickname: option }) => (
              <option
                key={ option }
                value={ option }
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
            <button type="button" disabled>Outros</button>
          </div>
        </div>
      </div>
      <div className="back-next-buttons">
        <button type="button" onClick={ () => history.push('/home') }>Back</button>
        <button
          type="button"
          onClick={ () => history.push('/register-finish') }
          disabled={ disableNext }
        >
          Next
        </button>
      </div>
    </div>
  );
}
