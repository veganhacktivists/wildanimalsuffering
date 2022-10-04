import {useContext} from 'react';
import {Context} from '../state';

const HumanPopulation = () => {
	const [state] = useContext(Context);
	const { translations, locale } = state;
	const lang = translations[locale];

	const { abyssOverlay } = state;

	return (
		<>
			<section
				id="abyss-container"
				className={`${
					abyssOverlay ? 'abyss-darkened' : 'abyss'
				} scrollsnap-y flex-col hw-screen`}
			>
				<div
					id="human-population-screen"
					className="screen-content flex scrollable"
				>
					<div className="h-screen-50vh md:h-screen md:w-screen-50vw split-screen-padding flex-center">
						<h1
							dangerouslySetInnerHTML={{
								__html: lang['human-population'],
							}}
						></h1>
					</div>
					<div className="h-screen-50vh md:h-screen md:w-screen-50vw split-screen-padding flex-center">
						<div className="human-icon h-1/4 w-1/4"></div>
					</div>
				</div>
			</section>
		</>
	);
};

export { HumanPopulation };
