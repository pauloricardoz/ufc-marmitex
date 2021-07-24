import React, { useContext, useState } from 'react';
import donationContext from '../../context/contextDonation';

const items = ['Cachorro', 'Gato'];
const type = ['porção', '5Kg', '10kg', '25kg'];
export default function ItemRacao() {
  const { setRacaos } = useContext(donationContext);
  const INITIAL_STATE = { type: items[0], unit: type[0], quantity: '' };
  const [item, setItem] = useState({ ...INITIAL_STATE });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setItem((s) => ({ ...s, [name]: value }));
  };

  const handleAdd = () => {
    if (item.quantity === '0' || !item.quantity) return null;
    setRacaos((s) => [...s, item]);
    setItem(INITIAL_STATE);
  };

  return (
    <div className="disposable-item">
      <select name="type" id="" onChange={ handleInput } value={ item.type }>
        {items.map((itemOption) => (
          <option key={ itemOption } value={ itemOption }>{itemOption}</option>
        ))}
      </select>
      <input
        type="number"
        step="1"
        min="0"
        name="quantity"
        onChange={ handleInput }
        value={ item.quantity }
      />
      <select name="unit" id="" onChange={ handleInput } value={ item.unit }>
        {type.map((e) => (
          <option key={ e } value={ e }>{e}</option>
        ))}
      </select>
      <button type="button" onClick={ handleAdd }>OK</button>
    </div>
  );
}
