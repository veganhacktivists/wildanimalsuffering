import Rainfall from 'react-rain-animation';

import 'react-rain-animation/lib/style.css';
import './rainfall.css';

const RainfallEffect = () => {
	return (
		<>
			<div
				style={{
					position: 'fixed',
					width: '100vw',
					height: '100vh',
				}}
			>
				<Rainfall numDrops="75" />
			</div>
		</>
	);
};

export { RainfallEffect };
