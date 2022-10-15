import React, {useState} from 'react';
import { createRoot } from 'react-dom/client';
import OrderForm from './components/OrderForm';
import Header from './components/Header';
import { LoginContext } from './login-context';

import './style.css';

const App = () => {
  const [login, setLogin] = useState(
    {
      username: 'PanPokusnik',
      email: 'pokusnik.kokosnik@example.com',
    }
  );

  const logout = () => {
    setLogin(null);
  }

  return (
    <LoginContext.Provider value={{login, logout}} logout={logout}>
      <Header />
      <div className="container">
        {
          !login && <OrderForm />
        }
        
      </div>
    </LoginContext.Provider>
  );
};

createRoot(
  document.querySelector('#app'),
).render(<App />);
