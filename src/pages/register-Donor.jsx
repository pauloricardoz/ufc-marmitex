import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import InputMask from 'react-input-mask';
import userContext from '../context/contextUser';

export default function RegisterDonor() {
  const history = useHistory();
  const { setDonorsList, setDonorSelected } = useContext(userContext);
  const [displayErrors, setDisplayErrors] = useState(false);
  const [data, setData] = useState({ city: 'São Paulo' });
  const [isValid, setIsValid] = useState({
    city: 1,
    name: 0,
    surname: 0,
    address: 0,
    nickname: 0,
    phone: 0,
    distric: 0,
    number: 0,
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    console.log(e.target.checkValidity());
    setIsValid((s) => ({ ...s, [name]: e.target.checkValidity() }));
    setData((s) => ({ ...s, [name]: value }));
  };
  const addDonor = (e) => {
    e.preventDefault();
    if (!Object.values(isValid).every((v) => v)) {
      setDisplayErrors(true);
      return;
    }
    setDonorsList((s) => [...s, data]);
    setDonorSelected(data.nickname);
    setData({ city: 'São Paulo' });
    history.push('/register');
  };
  return (
    <div className="register-donor-page">
      <form className={`user-form ${displayErrors ? 'displayErrors' : ''}`}>
        <label>
          Nome*:
          <input name="name" onChange={handleInput} required />
        </label>
        <label>
          Sobrenome*:
          <input name="surname" onChange={handleInput} required />
        </label>
        <label>
          Apelido*:
          <input name="nickname" onChange={handleInput} required />
        </label>
        <label>
          Telefone*:
          <InputMask
            name="phone"
            mask="(99) 99999-9999"
            maskChar=" "
            placeholder="(xx) xxxxx-xxxx"
            onChange={handleInput}
            required
          />
        </label>
        <label>
          Endereço*:
          <input name="address" onChange={handleInput} required />
        </label>
        <label>
          Bairro*:
          <input name="distric" onChange={handleInput} required />
        </label>
        <label>
          Número*:
          <input name="number" onChange={handleInput} required />
        </label>
        <label>
          Complemento:
          <input name="complement" onChange={handleInput} />
        </label>
        <label>
          Cidade*:
          <input defaultValue="São Paulo" name="city" onChange={handleInput} required />
        </label>
        <span>* campos obrigatórios</span>
        <button onClick={addDonor} type="submit">
          Finalizar
        </button>
      </form>
      <div className="back-next-buttons">
        <button onClick={() => history.push('/home')}>Back</button>
        <button>Next</button>
      </div>
    </div>
  );
}
