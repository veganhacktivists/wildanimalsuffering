import { translations } from '../utils/translations';
import {
	ANIMAL_STATS_SCREEN_INDEX,
	DEFAULT_LANGUAGE_KEY,
	NUMBER_OF_ANIMAL_STAT_SCREENS,
} from '../app-constants';

const reducer = (state, action) => {
	switch (action.type) {
	case 'REGISTER_SCREEN_CONTENT_ELEMENTS':
		return {
			...state,
			screenContentElements: [...action.payload.screenContentElements],
		};
	case 'NEXT_SCREEN': {
		const screenIndex = getNextScreenIndex(state);
		const isAnimalStatsScreen = getIsAnimalStatsScreen(screenIndex);
		return {
			...state,
			screenIndex,
			screenId: state.screenContentElements.map((e) => e.id)[screenIndex],
			isAnimalStatsScreen,
			abyssOverlay: state.isAnimalStatsScreen ? true : false,
			animalStatIndex: 0,
			isForEveryHumanBufferScreen: true
		};
	}
	case 'NEXT_ANIMAL_STAT': {
		const isCurrentScreenAnimalStatsScreen = getIsAnimalStatsScreen(state.screenIndex);
		console.log('state.animalStatIndex=', state.animalStatIndex);
		
		let animalStatIndex = 0;
		if (state.isForEveryHumanBufferScreen) {
			animalStatIndex = 0;
		} else {
			animalStatIndex = isCurrentScreenAnimalStatsScreen
				? (state.animalStatIndex + 1) % NUMBER_OF_ANIMAL_STAT_SCREENS
				: 0;
		}
		return {
			...state,
			isAnimalStatsScreen: true,
			abyssOverlay: true,
			animalStatIndex,
			isForEveryHumanBufferScreen: false
		};
	}
	case 'GO_TO_SCREEN_BY_ID': {
		const screenIndex = getScreenIndexById(
			state.screenContentElements,
			action.payload.screenId
		);
		const isAnimalStatsScreen = getIsAnimalStatsScreen(screenIndex);
		return {
			...state,
			screenIndex,
			screenId: action.payload.screenId,
			isAnimalStatsScreen,
			abyssOverlay: false,
			animalStatIndex: 0,
			isForEveryHumanBufferScreen: true
		};
	}
	case 'CHANGE_LANGUAGE': {
		if (!translations[action.payload.locale]) {
			console.warn(
				`No translations provided for ${locale}... Defaulting to ${DEFAULT_LANGUAGE_KEY}`
			);
		}
		const locale = action.payload.locale || 'en';
		return {
			...state,
			locale,
		};
	}
	default:
		return state;
	}
};

const getIsAnimalStatsScreen = (screenIndex) => {
	return screenIndex === ANIMAL_STATS_SCREEN_INDEX;
};

const getNextScreenIndex = (state) => {
	const { screenIndex, screenContentElements } = state;
	const nextScreenIndex = (screenIndex + 1) % screenContentElements.length;
	return nextScreenIndex;
};

const getScreenIndexById = (screenContentElements, screenId) => {
	return screenContentElements.indexOf(screenId);
};

export { reducer };
