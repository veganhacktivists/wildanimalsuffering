import { reducer } from './app-reducer';

describe('state defaults', () => {

	const dummyState = {
		name: 'bob'
	};
	test('should return the existing state when an unrecognised action is passed in', () => {
		const action = { type: 'DUMMY_ACTION' };
		expect(reducer(dummyState, action)).toEqual({ ...dummyState });
	});
});

describe('sections', () => {
	test('should be dynamically registered into the state', () => {
		const dummyState = {};
		const action = {
			type: 'REGISTER_SCREEN_CONTENT_ELEMENTS',
			payload: {
				screenContentElements: [{ screenIndex: 0 }, { screenIndex: 1 }, { screenIndex: 2 }, { screenIndex: 3 }]
			}
		};
		expect(reducer(dummyState, action))
			.toEqual({
				...dummyState,
				screenId: action.payload.screenContentElements.map((e) => e.id)[0],
				screenContentElements: action.payload.screenContentElements
			});
	});
	test('should be able to move between screens', () => {
		const dummyState = {
			screenIndex: 0,
			screenContentElements: [{ screenIndex: 0 }, { screenIndex: 1 }, { screenIndex: 2 }, { screenIndex: 3 }],
			isAnimalStatsScreen: false,
		};
		const nextScreenIndex = 1;
		const action = {
			type: 'NEXT_SCREEN'
		};
		expect(reducer(dummyState, action))
			.toEqual({
				...dummyState,
				screenIndex: nextScreenIndex,
				screenId: dummyState.screenContentElements.map((e) => e.id)[nextScreenIndex],
				isAnimalStatsScreen: false,
				abyssOverlay: false,
				animalStatIndex: 0,
				isForEveryHumanBufferScreen: true
            
			});
	});
	describe('animal stats navigation', () => {
		test('for every human, when false, should stay on the screenIndex but increment animalStatIndex', () => {
			const dummyState = {
				screenIndex: 2,
				isAnimalStatsScreen: false,
				animalStatIndex: 1,
				isForEveryHumanBufferScreen: false
			};
			const nextScreenIndex = 1;
			const action = {
				type: 'NEXT_ANIMAL_STAT'
			};
			expect(reducer(dummyState, action))
				.toEqual({
					...dummyState,
					isAnimalStatsScreen: true,
					animalStatIndex: 2,
					isForEveryHumanBufferScreen: false,
					abyssOverlay: true
				});
		});
		test('for every human should reset animalStatIndex to zero', () => {
			const dummyState = {
				screenIndex: 2,
				isAnimalStatsScreen: false,
				animalStatIndex: 1,
				isForEveryHumanBufferScreen: true
			};
			const nextScreenIndex = 1;
			const action = {
				type: 'NEXT_ANIMAL_STAT'
			};
			expect(reducer(dummyState, action))
				.toEqual({
					...dummyState,
					isAnimalStatsScreen: true,
					animalStatIndex: 0,
					isForEveryHumanBufferScreen: false,
					abyssOverlay: true
				});
		});
		test('for every human, when false, should reset the screenIndex to zero if it\'s not the animal stats screen', () => {
			const dummyState = {
				screenIndex: 3,
				isAnimalStatsScreen: false,
				animalStatIndex: 1,
				isForEveryHumanBufferScreen: false
			};
			const nextScreenIndex = 1;
			const action = {
				type: 'NEXT_ANIMAL_STAT'
			};
			expect(reducer(dummyState, action))
				.toEqual({
					...dummyState,
					isAnimalStatsScreen: true,
					animalStatIndex: 0,
					isForEveryHumanBufferScreen: false,
					abyssOverlay: true
				});
		});
	});
	test('should be able to go to a screen by the screen Id', () => {
		const dummyState = {
			screenContentElements: [{id: 100, screenIndex: 0 }, {id: 0, screenIndex: 1 }, {id: 8, screenIndex: 2 }, {id: 1, screenIndex: 3 }]
		};
		const action = {
			type: 'GO_TO_SCREEN_BY_ID',
			payload: { screenId: 8 }
		};
		expect(reducer(dummyState, action))
			.toEqual({
				...dummyState,
				screenIndex: 2,
				screenId: action.payload.screenId,
				isAnimalStatsScreen: true,
				abyssOverlay: false,
				animalStatIndex: 0,
				isForEveryHumanBufferScreen: true
			});
	});
});

describe('dialog', () => {
	test('should be able to open a dialog', () => {
		const dummyState = {
			openDialogs: new Set()
		};
		const action = {
			type: 'DIALOG_OPEN_CHANGE',
			payload: { isOpen: true, dialogId: 'my-dialog' }
		};
		const updatedState = reducer(dummyState, action);
		expect(updatedState.openDialogs.size)
			.toEqual(1);
        
		//the DIALOG_OPEN_CHANGE action should be idempotent as long as you pass in the same dialogId
		expect(reducer(updatedState, action).openDialogs.size)
			.toEqual(1);
	});
	test('should be able to close a dialog', () => {
		const dummyState = {
			openDialogs: new Set(['my-dialog', 'another-dialog', 'a-third-dialog'])
		};
		const action = {
			type: 'DIALOG_OPEN_CHANGE',
			payload: { dialogId: 'another-dialog' }
		};
		const updatedState = reducer(dummyState, action);
		expect(updatedState.openDialogs.size)
			.toEqual(2);
	});

});

describe('language translations', () => {

	test('should be able to select a language', () => {
		const dummyState = {};
		const action = {
			type: 'CHANGE_LANGUAGE',
			payload: { locale: 'en' }
		};
		expect(reducer(dummyState, action))
			.toEqual({
				...dummyState,
				locale: action.payload.locale,
			});
	});

	test('should default to english', () => {
		const dummyState = {};
		const action = {
			type: 'CHANGE_LANGUAGE',
			payload: { locale: 'xx' }
		};
		expect(reducer(dummyState, action))
			.toEqual({
				...dummyState,
				locale: 'en',
			});
	});
});
