import { useContext } from 'react';
import { Context } from '../state';

import './page-navigator.css';

const PageNavigator = ({ direction }) => {
	const [state, dispatch] = useContext(Context);

	const isLastAnimalStatScreen =
		state.animalStatsIndex === state.squares?.length - 1;
	const isDownArrowHidden =
		state.isAnimalStatsScreen && !isLastAnimalStatScreen;

	console.log('state=', state);

	const handleDownClick = (event) => {
		console.log('handling...');
		goToNextSection();
	};

	const goToNextSection = () => {
		dispatch({ type: 'NEXT_SCREEN' });
	};

	return isDownArrowHidden ? null : (
		<div
			id='next-section-down'
			className='fixed down-container h-screen-20vh'
			onClick={handleDownClick}
		>
			<div className='arrow'></div>
		</div>
	);
};

export { PageNavigator };
