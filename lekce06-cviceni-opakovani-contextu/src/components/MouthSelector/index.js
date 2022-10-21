import React from 'react';

import {mouthData} from '../../data';

import { useSetting } from '../../setting-context';

const MouthSelector = () => {
  const {mouth, changeMouth} = useSetting();

  const handleClick = (item) => {
    changeMouth(item.id);
  }

  return (
    <div className="items">
      {mouthData.map(mouthItem =>
        <img
          className={mouthItem.id === mouth  ? 'item active' : 'item'}
          key={mouthItem.id}
          src={mouthItem.image}
          onClick={() => { handleClick(mouthItem) }}
          />
      )}
    </div>
  );
}

export default MouthSelector;