import Rainfall from 'react-rain-animation';

import 'react-rain-animation/lib/style.css';
import './rainfall.css';

const RainfallEffect = () => {
	return (
		<div className="fixed w-screen h-screen">
			<Rainfall numDrops="75" />
		</div>
	);
};

export { RainfallEffect };
