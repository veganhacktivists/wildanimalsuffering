import { useContext, useState } from 'react';
import { Context } from '../state';
import { pad } from '../utils';

import './common-objections.css';

const CommonObjections = () => {
	const [state, dispatch] = useContext(Context);
	const { translations, locale } = state;
	const lang = translations[locale];
	const [panelsOpen, setPanelsOpen] = useState([true, false, false, false]);
    
	const panels = [{
		header: 'its-not-ours'
	}, {
		header: 'we-will-make-it-worse'
	}, {
		header: 'nothing-we-can-do'
	}, {
		header: 'cannot-consent'
	}, {
		header: 'too-big-of-a-problem'
	}, {
		header: 'factory-farming-first'
	}];
    
	const handlePanelClick = (index) => {
		let panelsState = [...panelsOpen];
		panelsState[index] = !panelsState[index];
		setPanelsOpen(panelsState);
	};

	return (
		<>
			<section
				id="common-objections-screen"
				data-name="FAQs"
				className="common-objections screen-content"
			>
				<div className="full-screen flex-col md:w-9/12 h-full">
					<div className="w-9/12 h-full self-center">
						<div className="py-16 flex flex-col text-center items-center">
							<h2> {lang['common-objections']}</h2>
						</div>

						<div className="split-screen-padding flex flex-col space-between items-center pr-8 h-screen-60vh overflow-y-auto inline-scroll">
							{panels.map((panel, index) => {
								const isPanelOpen = panelsOpen[index];
								const numeric = pad(index + 1, 2);
								return (
									<div key={`${panel.header}-${index}`} className="panel-container">
										<div className={`common-objection panel ${isPanelOpen ? 'panel-open' : ''}`}>
											<div className="flex heading items-center justify-between"
												onClick={() => handlePanelClick(index)}>
												<h4>
													<span className="brown the-bold-font pr-4">{numeric}</span>
													<span className="brown poppins-font"> {lang[panel.header]}</span>
												</h4>
												<span className={`h-3 aspect-2 ${isPanelOpen ? 'arrow-up' : 'arrow-down'}`}></span>
											</div>
											<div className={isPanelOpen ? 'flex' : 'hidden'}>{lang[`${panel.header}-description`]}</div>
										</div>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export { CommonObjections };
