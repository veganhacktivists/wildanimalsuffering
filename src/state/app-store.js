import { createContext, useReducer } from 'react';
import { reducer } from './app-reducer';
import { translations } from '../utils/translations';

const initialState = {
	inMenu: false,
	screenIndex: 0,
	animalStatIndex: 0,
	abyssOverlay: false,
	locale: 'en',
	translations,
	openDialogs: new Set(),
};

export const Context = createContext(initialState);
const ContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);
	return (
		<Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
	);
};

export { ContextProvider };
