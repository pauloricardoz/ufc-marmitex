import React from 'react';
import { useHistory } from 'react-router-dom';

export default function LoginPage() {
  const history = useHistory();
  return (
    <div className="login-page">
      <p>Quem é você? (:</p>
      <input type="text" />
      <p>Seu PIN (:</p>
      <input type="password" />
      <button type="button" onClick={() => history.push('/home')}>
        ENTRAR
      </button>
    </div>
  );
}
