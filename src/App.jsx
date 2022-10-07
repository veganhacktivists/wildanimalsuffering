import { ContextProvider } from './state';
import { SectionsContainer } from './sections-container';
import { PageNavigator } from './page-navigator';
import { WheelNavigator } from './wheel-navigator';
import { TouchNavigator } from './touch-navigator';
import { BackgroundEffect } from './background-effect';

const App = () => {
	return (
		<>
			<ContextProvider>
				<SectionsContainer />
				<PageNavigator direction="down"/>
				<WheelNavigator />
				<TouchNavigator />
				<BackgroundEffect />
			</ContextProvider>
		</>
	);
};

export { App };
