import { useContext } from 'react';
import { Context } from '../state';

import './why-it-matters.css';

const WhyItMatters = () => {

	const [state, dispatch] = useContext(Context);
	const { translations, locale } = state;
	const lang = translations[locale];

	return (
		<section id="wild-animal-suffering-screen" className="screen-content wild-animal-suffering">
			<div className="h-screen flex flex-col justify-start">
				<div className="birds-01 absolute"></div>
				<div className="birds-02 absolute"></div>
				<div className="h-screen-70vh flex flex-col md:flex-row md:pt-16">
					<div id="elephant-image-container" className="split-screen flex-col h-screen-50vh">
						<div className="justify-center md:hidden">
							<h1>{lang['wild-animal-suffering-header']}</h1>
							<h3 className="orange">{lang['why-it-matters']}</h3>
						</div>
						<div className="h-full elephants"></div>
					</div>
					<div className="split-screen flex-col h-screen-30vh justify-center">
						<div className="hidden md:block">
							<h1>{lang['wild-animal-suffering-header']}</h1>
							<h3 className="orange">{lang['why-it-matters']}</h3>
						</div>
						<div className="subheading flex flex-row pt-4">
							<div className="pr-4">
								<p>{lang['idealise']}</p>
							</div>
							<div className="pl-4">
								<p>{lang['relief']}</p>
							</div>
						</div>
					</div>
				</div>
        
				<div className="h-screen-10vh p-4 md:p-10">
					<div className="text-center">
						<h5 className="pb-4">{lang['it-matters']}</h5>
						<span className="badge capitalize">{lang['begin-learning']}</span>
					</div>
				</div>
			</div>
		</section>
	);
};

export { WhyItMatters };