import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import useAuth from './hooks/useAuth';

const Login = () => {
  const { auth, setAuth } = useAuth();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    setErrorMessage('');
  }, [username, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'https://random.zkusmo.eu/login',
        {
          username,
          password
        }
      );
      const userInfo = {
        username: response.data.username,
        accessToken: response.data.access_token
      }
      setAuth(userInfo);
      localStorage.setItem('userinfo', JSON.stringify(userInfo))
      console.log(response.data);
    } catch (error) {
      setErrorMessage(error.message)
    }
  }

  return (
    <section>
      <h1>Přihlášení</h1>

      {errorMessage && <p className="error">{errorMessage}</p>}

      {auth?.username && <p>Přihlášený uživatel: <strong>{auth.username}</strong></p>}

      <form onSubmit={handleSubmit}>

        <div className="formField">
          <label htmlFor="username">Jméno</label>
          <input
            type="text"
            id="username"
            autoComplete="off"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="formField">
          <label htmlFor="password">Heslo</label>
          <input
            type="password"
            id="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button>Přihlásit se</button>

      </form>
    </section>
  );
}

export default Login;