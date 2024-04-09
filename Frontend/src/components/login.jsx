/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async () => {
    try {
      const response = await fetch(`http://localhost:3333/User/${id}/tokens`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Email ou senha incorretos");
      }

      const data = await response.json();
      const token = data.token;

      // Armazenar o token em algum lugar seguro, como cookies ou local storage
      // Por razões de segurança, você pode considerar usar cookies com a flag "httpOnly"
      // ou local storage com medidas de segurança adicionais para proteger o token
      // Aqui, estamos apenas armazenando no local storage para fins de exemplo
      localStorage.setItem("token", token);

      // Redirecionar para o dashboard ou outra página após o login
      // window.location.href = "/dashboard";
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
}
