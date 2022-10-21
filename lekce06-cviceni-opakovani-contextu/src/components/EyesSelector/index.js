import React from 'react';

import {eyesData} from '../../data';

import { useSetting } from '../../setting-context';

const EyesSelector = () => {
  const {eyes, changeEyes} = useSetting();

  const handleClick = (item) => {
    changeEyes(item.id);
  }

  return (
    <div className="items">
      {eyesData.map(eyesItem =>
        <img
          className={eyesItem.id === eyes ? 'item active' : 'item'}
          key={eyesItem.id}
          src={eyesItem.image}
          onClick={() => { handleClick(eyesItem) }}
          />
      )}
    </div>
  );
}

export default EyesSelector;