import { useContext } from 'react';
import { Context } from '../state';

import './page-navigator.css';

const PageNavigator = ({ direction }) => {

	if (!(direction === 'down' || direction === 'side')) {
		console.warn('PageNavigator must have a direction of either up or side');
		return null;
	}
	const [state, dispatch] = useContext(Context);

	const isLastAnimalStatScreen =
		state.animalStatsIndex === state.squares?.length - 1;
	const shouldShowDownArrow = (!state.isAnimalStatsScreen || isLastAnimalStatScreen);

	console.log('state=', state);
	console.log('shouldShowDownArrow=', shouldShowDownArrow);

	const handleClick = (event) => {
		console.log('handling...');
		goToNextSection();
	};
    
	const goToNextSection = () => {
		dispatch({ type: direction === 'down' ? 'NEXT_SCREEN' : 'NEXT_ANIMAL_STAT' });
	};
    
	return shouldShowDownArrow || isLastAnimalStatScreen ? (
		<div
			id={`next-section-${direction}`}
			className={
				direction === 'down'
					? 'fixed down-container h-screen-20vh'
					: 'fixed side-container w-screen-10vw'
			}
			onClick={handleClick}
		>
			<div className="arrow"></div>
		</div>
	) : null;
};

export { PageNavigator };
