import { useContext } from 'react';
import { Context } from '../state';
import { RainfallEffect } from './rainfall';
import { SnowfallEffect } from './snowfall';

const BackgroundEffect = () => {
	const [state] = useContext(Context);

	switch (state.screenId) {
	case 'even-worse-screen':
		return <RainfallEffect />;
	case 'videos-screen':
		return <SnowfallEffect />;
	}

};

export { BackgroundEffect };
