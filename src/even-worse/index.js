import { useContext } from 'react';
import { Context } from '../state';

import './even-worse.css';

const EvenWorse = () => {

	const [state, dispatch] = useContext(Context);
	const { translations, locale } = state;
	const lang = translations[locale];

	return (
		<>
			<section id="even-worse-screen" className="screen-content even-worse white">
				<div className="full-screen w-full h-full flex flex-col">
					<div className="split-screen flex-col w-full text-center p-16">
						<h1><span>{lang['even-worse']}</span>:</h1>
					</div>
					<div className="split-screen flex-col w-full">
						<div className="flex flex-wrap flex-row justify-center text-center">
							<div className="suffer-image-container w-full pt-4">
								<div className="suffer-image suffer-thirst-image"></div>
								<div className="suffer-text p-2">{lang['thirst-and-starvation']}</div>
							</div>
							<div className="suffer-image-container w-full pt-4">
								<div className="suffer-image suffer-predation-image"></div>
								<div className="suffer-text p-2">{lang['predation']}</div>
							</div>
							<div className="suffer-image-container w-full pt-4">
								<div className="suffer-image suffer-disease-image"></div>
								<div className="suffer-text p-2">{lang['disease-and-parasitism']}</div>
							</div>
							<div className="suffer-image-container w-full pt-4">
								<div className="suffer-image suffer-harmful-weather-image"></div>
								<div className="suffer-text p-2">{lang['harmful-weather']}</div>
							</div>
							<div className="suffer-image-container w-full pt-4">
								<div className="suffer-image suffer-natural-disasters-image"></div>
								<div className="suffer-text p-2">{lang['natural-disasters']}</div>
							</div>
							<div className="suffer-image-container w-full pt-4">
								<div className="suffer-image suffer-accidents-image"></div>
								<div className="suffer-text p-2">{lang['accidents']}</div>
							</div>
							<div className="suffer-image-container w-full pt-4">
								<div className="suffer-image suffer-anthropogenic-harms-image"></div>
								<div className="suffer-text p-2">{lang['anthropogenic-harms']}</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);

};

export { EvenWorse };