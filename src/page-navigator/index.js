import { useContext } from 'react';
import { Context } from '../state';
import { NUMBER_OF_ANIMAL_STAT_SCREENS } from '../app-constants';

import './page-navigator.css';

const PageNavigator = ({ direction }) => {

	if (!(direction === 'down' || direction === 'side')) {
		console.warn('PageNavigator must have a direction of either up or side');
		return null;
	}
	const [state, dispatch] = useContext(Context);
	const { isAnimalStatsScreen } = state;
	const isLastAnimalStatScreen =
		state.animalStatIndex === (NUMBER_OF_ANIMAL_STAT_SCREENS - 1);
	const shouldShowDownArrow = (!state.isAnimalStatsScreen || isLastAnimalStatScreen);

	const handleClick = (event) => {
		goToNextSection();
	};
    
	const goToNextSection = () => {
		dispatch({ type: direction === 'down' ? 'NEXT_SCREEN' : 'NEXT_ANIMAL_STAT' });
	};
    
	const showDown = (direction === 'down' && shouldShowDownArrow);
	const showSide = direction === 'side' && isAnimalStatsScreen && !isLastAnimalStatScreen;
    
	console.log('isLastAnimalStatScreen=', isLastAnimalStatScreen);
	console.log('showSide=', showSide);
    
	return showDown || showSide ? (
		<div
			id={`next-section-${direction}`}
			className={
				direction === 'down'
					? 'fixed down-container h-screen-20vh'
					: 'fixed side-container w-screen-5vw'
			}
			onClick={handleClick}
		>
			<div className="arrow"></div>
		</div>
	) : null;
};

export { PageNavigator };
