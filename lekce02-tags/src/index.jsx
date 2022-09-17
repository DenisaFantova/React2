import React, {useState, useEffect} from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

const TagCloud = ({newTag}) => {

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

  useEffect(
    () => {
     console.log(newTag)
     setTags([...tags, newTag])
     console.log(tags)
    },
    [newTag]
  )

  return (
    <>
    <ul className="tag-list">
      {tags.map (tag => <li key={tag}>{tag}</li>) }
    </ul>
    </>
  )

 
}

const App = () => {

  const [newTag, setNewTag] = useState(null)
 
  const handleSubmit = (e) => {
    e.preventDefault()
    setNewTag(e.target.elements.tag.value)
  }

  return (
    <div className="container">
      <TagCloud newTag={newTag}></TagCloud>
      <form onSubmit={handleSubmit}>
        <input type="text" name="tag"/>
        <button>Odeslat</button>
      </form>
    </div>
  );
};

createRoot(
  document.querySelector('#app'),
).render(<App />);
