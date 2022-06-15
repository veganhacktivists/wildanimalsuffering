//Note: If this ever comes from an untrusted source, you have to sanitize the input
import { useContext, useEffect } from 'react';
import { registerMouseHandlers } from './utils';

import { Context, ContextProvider } from './state';
import { SectionsContainer } from './sections-container';
import { PageNavigator } from './page-navigator';

const App = () => {
	console.log('hey...');
	return (
		<>
			<ContextProvider>
				<SectionsContainer />
				<PageNavigator direction="down"/>
			</ContextProvider>
		</>
	);
};

export { App };
