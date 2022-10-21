import React from 'react';

import {colorsData} from '../../data';

import { useSetting } from '../../setting-context';

const ColorSelector = () => {
  const {color, changeColor} = useSetting();

  const handleClick = (item) => {
    changeColor(item.id);
  }

  return (
    <div className="items">
      {colorsData.map(colorItem =>
        <div
          className={colorItem.id === color ? 'item active' : 'item'}
          key={colorItem.id}
          style={{ backgroundColor: colorItem.value}}
          onClick={() => { handleClick(colorItem) }}
          />
      )}
    </div>
  );
}

export default ColorSelector;