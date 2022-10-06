import { useContext, useEffect } from 'react';
import { Context } from '../state';
import { canGoDown, canGoLeft, canGoRight, canGoUp } from '../state/navigation';
import { getTouchScrollDirection } from '../utils/touch';

const TouchNavigator = () => {
	const [state, dispatch] = useContext(Context);

	useEffect(() => {
		let startX = null;
		let startY = null;

		const onTouchStart = (e) => {
			startX = e.changedTouches[0].pageX;
			startY = e.changedTouches[0].pageY;
		};

		const onTouchEnd = (e) => {
			const endX = e.changedTouches[0].pageX;
			const endY = e.changedTouches[0].pageY;

			const scrollDirection = getTouchScrollDirection(startX, endX, startY, endY);

			switch (scrollDirection) {
			case 'left':
				if (canGoLeft(state)) {
					dispatch({ type: 'PREV_ANIMAL_STAT' });
				}
				break;
			case 'right':
				if (canGoRight(state)) {
					dispatch({ type: 'NEXT_ANIMAL_STAT' });
				}
				break;
			case 'up':
				if (canGoUp(state)) {
					dispatch({ type: 'PREV_SCREEN' });
				}
				break;
			case 'down':
				if (canGoDown(state)) {
					dispatch({ type: 'NEXT_SCREEN' });
				}
				break;
			}
		};

		window.addEventListener('touchstart', onTouchStart);
		window.addEventListener('touchend', onTouchEnd);

		return () => {
			window.removeEventListener('touchstart', onTouchStart);
			window.removeEventListener('touchend', onTouchEnd);
		};
	});
};

export { TouchNavigator };
