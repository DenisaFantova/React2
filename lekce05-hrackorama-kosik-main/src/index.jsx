import React, {useState} from 'react';
import { createRoot } from 'react-dom/client';
import Banner from './components/Banner';
import Cart from './components/Cart';
import Header from './components/Header';
import { SettingsContext } from './settings-context';
import './style.css';

const App = () => {
  const [settings, setSettings] = useState({
    currency: 'CZK',
  });

  const setCurrency = (newCarrency) => {
    setSettings({currency: newCarrency})
  }

  return (
    <SettingsContext.Provider value={{...settings, setCurrency}}>
      <div className="container">
        <Header />
        <Banner />
        <Cart />
      </div>
    </SettingsContext.Provider>
  );
};

createRoot(
  document.querySelector('#app'),
).render(<App />);
