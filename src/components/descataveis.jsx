import React, { useState } from 'react';
import { useHistory } from 'react-router';

const items = [
  'Garfos',
  'Garrafinha Alcool Gel',
  'Garrafinha Bebida',
  'Guardanapo',
  'Marmita',
  'Sacola',
  'Sobremesa',
];
const type = ['un', 'pct'];
export default function Descatable({descart}) {
  const [donations, setDonations] = useState([{}]);
  return (
    <div className="register-page-disposable">
      <div>
        <h1>Descartavel</h1>
        {donations.map((donation) => (
          <div className="disposable-item">
            <select name="" id="">
              {items.map((item) => (
                <option value={item}>{item}</option>
              ))}
            </select>
            <input type="number" step="1" min="0" />
            <select name="" id="">
              {type.map((e) => (
                <option value={e}>{e}</option>
              ))}
            </select>
            <button>X</button>
          </div>
        ))}
        <button onClick={() => setDonations((s) => [...s, {}])}>Adicionar</button>
      </div>

      <div className="back-next-buttons">
        <button onClick={() => descart(s=>!s)}>Back</button>
        <button>Next</button>
      </div>
    </div>
  );
}
