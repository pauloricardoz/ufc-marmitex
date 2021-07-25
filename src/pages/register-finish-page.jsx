import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import donationContext from '../context/contextDonation';
import userContext from '../context/contextUser';

const createAdd = (callback, item) => () => callback((s) => {
  const temp = s.find((e) => e === item);
  temp.quantity += 1;
  return [
    ...s,
  ];
});

const createRemove = (callback, item) => () => callback((s) => {
  const temp = s.find((e) => e === item);
  temp.quantity -= 1;
  return temp.quantity > 0 ? [
    ...s,
  ] : s.filter((e) => e !== item);
});

function RegisterPageFinish() {
  const {
    marmitex,
    setMarmitex,
    bebida,
    setBebida,
    sobremesa,
    setSobremesa,
    disposables,
    setDisposables,
    racaos,
    setRacaos,
  } = useContext(donationContext);
  const { donorSelected, setDonorSelected,
  } = useContext(userContext);
  const [disableNext, setDisableNext] = useState(true);

  useEffect(() => {
    if (donorSelected === '') setDonorSelected({ nickname: 'Anônimo' });
    // eslint-disable-next-line
  }, []);
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
  const history = useHistory();

  const foodDonations = [
    { type: 'marmitex', quantity: marmitex, handleChange: setMarmitex },
    { type: 'bebida', quantity: bebida, handleChange: setBebida },
    { type: 'sobremesa', quantity: sobremesa, handleChange: setSobremesa },
  ];
  return (
    <div className="register-finish-page">
      <div>
        <h1>
          Resumo:
        </h1>
        <h2>
          Pessoa doadora:
          {' '}
          {donorSelected.nickname}
        </h2>
        {' '}
        {}
        <ul className="resume-items">
          {foodDonations.filter(({ quantity }) => quantity)
            .map(({ type, quantity, unit = '', handleChange }) => (
              <li key={ type } className="resume-item">
                {type}
                <div className="resume-item-quantity">
                  <FontAwesomeIcon
                    icon={ faMinus }
                    onClick={ () => handleChange((s) => (s > 0 ? s - 1 : 0)) }
                  />
                  {quantity}
                  {' '}
                  {unit}
                  <FontAwesomeIcon
                    icon={ faPlus }
                    onClick={ () => handleChange((s) => s + 1) }
                  />
                </div>
              </li>))}
          {disposables.map((disposable) => {
            const { type, quantity, unit } = disposable;
            const handleAdd = createAdd(setDisposables, disposable);
            const handleRemove = createRemove(setDisposables, disposable);

            return (
              <li key={ type } className="resume-item">
                {type}
                <div className="resume-item-quantity">
                  <FontAwesomeIcon icon={ faMinus } onClick={ handleRemove } />
                  {quantity}
                  {' '}
                  {unit}
                  <FontAwesomeIcon icon={ faPlus } onClick={ handleAdd } />
                </div>
              </li>
            );
          })}
          {racaos.map((racao) => {
            const { type, quantity, unit } = racao;
            const handleAdd = createAdd(setRacaos, racao);
            const handleRemove = createRemove(setRacaos, racao);
            return (
              <li key={ type } className="resume-item">
                {type}
                <div className="resume-item-quantity">
                  <FontAwesomeIcon icon={ faMinus } onClick={ handleRemove } />
                  {quantity}
                  {' '}
                  {unit}
                  <FontAwesomeIcon icon={ faPlus } onClick={ handleAdd } />
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="back-next-buttons">
        <button type="button" onClick={ () => history.goBack() }>Back</button>
        <button
          type="button"
          disabled={ disableNext }
        >
          Concluir
        </button>
      </div>
    </div>
  );
}

export default RegisterPageFinish;
