import { useContext } from 'react';
import { Context } from '../state';
import { SnowfallEffect } from './snowfall';

const BackgroundEffect = () => {
	const [state] = useContext(Context);

	switch (state.screenId) {
	case 'videos-screen':
		return <SnowfallEffect />;
	}
};

export { BackgroundEffect };
