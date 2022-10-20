import React from 'react';
import './style.css';

import {eyesData} from '../../data.js'
import {mouthData} from '../../data.js'
import {colorsData} from '../../data.js'
import { useSetting } from '../../setting-context';

const Emoticon = () => {
	const {eyes, mouth, color} = useSetting();

	return (
		<div className='emoticon' style={{ backgroundColor: colorsData[color].value }}>
			<img className="emoticon__eyes" src={eyesData[eyes].image} />
			<img className="emoticon__mouth" src={mouthData[mouth].image} />
		</div>
	);
}

export default Emoticon;