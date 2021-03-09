import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Descatable from '../components/descataveis';

const options = ['Pessoa1', 'Pessoa2', 'Pessoa3'];
export default function RegisterPage() {
  const history = useHistory();
  const [descart, setDescart] = useState(false);
  if (descart) {
    return <Descatable descart={setDescart} />;
  }
  return (
    <div className="register-page">
      <div>
        <form className="user-form">
          <fieldset>
            {/* input type search */}
            <select name="" id="">
              {options.map((option) => (
                <option value={option}>{option}</option>
              ))}
            </select>
          </fieldset>
          <fieldset>
            <button>Cadastrar pessoa doadora</button>
          </fieldset>
        </form>
        <div className="donation-items">
          <div className="donation-item">
            <span htmlFor="marmitex">Marmitex:</span>
            <input name="marmitex" type="number" />
          </div>
          <div className="donation-item">
            <span htmlFor="bebida">Bebida:</span>
            <input name="bebida" type="number" />
          </div>
          <div className="donation-item">
            <span htmlFor="sobremesa">Sobremesa:</span>
            <input name="sobremesa" type="number" />
          </div>
          <div className="donation-others-items">
            <button onClick={() => setDescart((s) => !s)}>Descartavel</button>
            <button>Ração</button>
            <button>Outros</button>
          </div>
        </div>
      </div>
      <div className="back-next-buttons">
        <button onClick={() => history.push('/home')}>Back</button>
        <button>Next</button>
      </div>
    </div>
  );
}
