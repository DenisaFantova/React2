import React from "react";
import { useSettings } from "../../settings-context";
import './style.css';

const Header = () => {
  const {currency, setCurrency} = useSettings();
  
  const handleSelectCurrency = (e) => {
    setCurrency(e.target.value);
  }

  return (
    <header>
      <div className="brand">
        Hračkorama
      </div>
      <select value={currency} onChange={handleSelectCurrency}>
        <option value="CZK">Kč</option>
        <option value="EUR">€</option>
        <option value="USD">$</option>
      </select>
      <span>
        Košík: 450 kč
      </span>
    </header>
  )
};

export default Header;