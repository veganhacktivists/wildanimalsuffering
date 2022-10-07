import { useContext } from 'react';
import { Context } from '../state';

import { FallingLeavesEffect } from './falling-leaves';
import { FogEffect } from './fog';
import { RainfallEffect } from './rainfall';
import { SnowfallEffect } from './snowfall';

const BackgroundEffect = () => {
	const [state] = useContext(Context);

	switch (state.screenId) {
	case undefined:
	case 'wild-animal-suffering-screen':
		return <FogEffect />;
	case 'even-worse-screen':
		return <RainfallEffect />;
	case 'videos-screen':
		return <SnowfallEffect />;
	case 'common-objections-screen':
		return <FallingLeavesEffect />;
	}

};

export { BackgroundEffect };
