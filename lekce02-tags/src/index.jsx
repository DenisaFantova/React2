import React, {useState} from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

const TagCloud = () => {
  const [tags, setTags] = useState([
    'Workout Gear',
    'Digital Art',
    'Replacement',
    'Aria',
    'Fitness',
    'Wireless',
    'iWatch',
    'Hike',
    'Sportsband',
    'Active',
    'Medical',
    'Free',
    'Setup',
    'Goal',
    'Black',
    'Activity',
    'Dolor'
  ])
}

const App = () => {
  return (
    <div className="container">
      <form>
        <input type="text" />
        <button>Odeslat</button>
      </form>
    </div>
  );
};

createRoot(
  document.querySelector('#app'),
).render(<App />);
