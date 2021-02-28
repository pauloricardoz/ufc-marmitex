import React from "react";

export default function LoginPage() {
  return (
    <div className="login-page">
      <p>Quem é você? (:</p>
      <input type="text" />
      <p>Seu PIN (:</p>
      <input type="password" />
      <button type="button">ENTRAR</button>
    </div>
  );
}
