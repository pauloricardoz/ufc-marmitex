import React, { useContext, useState } from 'react';
import donationContext from '../../../context/contextDonation';

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
export default function ItemDescartavel() {
  const { setDisposables } = useContext(donationContext);
  const INITIAL_STATE = { type: items[0], unit: type[0], quantity: '' };
  const [item, setItem] = useState({ ...INITIAL_STATE });
  const handleInput = (e) => {
    const { name, value } = e.target;
    setItem((s) => ({ ...s, [name]: (value) }));
  };
  const handleNumber = (e) => {
    const { name, value } = e.target;
    setItem((s) => ({ ...s, [name]: Number(value) }));
  };
  const handleAdd = () => {
    if (item.quantity === '0' || !item.quantity) return null;
    setDisposables((s) => [...s, item]);
    setItem(INITIAL_STATE);
  };
  return (
    <div className="disposable-item">
      <select
        className="disposable-item-name"
        name="type"
        id=""
        onChange={ handleInput }
        value={ item.type }
      >
        {items.map((itemOption) => (
          <option key={ itemOption } value={ itemOption }>{itemOption}</option>
        ))}
      </select>
      <input
        type="number"
        step="1"
        min="0"
        name="quantity"
        className="disposable-item-quantity"
        onChange={ handleNumber }
        value={ item.quantity }
      />
      <select
        className="disposable-item-unit"
        name="unit"
        id=""
        onChange={ handleInput }
        value={ item.unit }
      >
        {type.map((e) => (
          <option key={ e } value={ e }>{e}</option>
        ))}
      </select>
      <button
        className="disposable-item-buttom"
        type="button"
        onClick={ handleAdd }
      >
        OK
      </button>
    </div>
  );
}
