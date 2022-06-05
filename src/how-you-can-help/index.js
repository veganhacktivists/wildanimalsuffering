import { useContext } from 'react';
import { Context } from '../state';

import './how-you-can-help.css';

const HowYouCanHelp = () => {

	const [state, dispatch] = useContext(Context);
	const { translations, locale } = state;
	const lang = translations[locale];

	return (
		<>
			<section id="how-you-can-help-screen" className="how-you-can-help screen-content">    
				<div className="full-screen flex-col md:w-2/3 h-full">
					<div className="w-2/3 h-full self-center">
						<div className="py-16 flex flex-col text-center items-center">
							<h2>{lang['how-you-can-help']}</h2>
						</div>
						<div className="split-screen-padding flex flex-col space-between items-center text-center">
							<div className="flex flex-row space-around flex-grow">
								<div className="help-box-container">
									<div className="help-box">
										<h1>1</h1>
										<h4>{lang['raise-awareness']}</h4>
									</div>
								</div>
								<div className="help-box-container">
									<div className="help-box">
										<h1>2</h1>
										<h4>{lang['donate-to-charities']}</h4>
									</div>
								</div>
								<div className="help-box-container">
									<div className="help-box">
										<h1>3</h1>
										<h4>{lang['become-a-researcher']}</h4>
									</div>
								</div>
							</div>
							<p className="p-10">{lang['check-out-this-resource']}</p>
							<span className="badge capitalize">{lang['view-volunteer-opportunities']}</span>
						</div>
					</div>
				</div>
			</section>
		</>
	);

};

export { HowYouCanHelp };