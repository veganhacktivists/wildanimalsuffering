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
		header: 'its-not-ours',
		description: 'personally-responsible'
	}, {
		header: 'its-not-ours',
		description: 'personally-responsible'
	}, {
		header: 'its-not-ours',
		description: 'personally-responsible'
	}, {
		header: 'its-not-ours',
		description: 'personally-responsible'
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
				<div className="full-screen flex-col md:w-2/3 h-full">
					<div className="w-2/3 h-full self-center">
						<div className="py-16 flex flex-col text-center items-center">
							<h2> {lang['common-objections']}</h2>
						</div>

						<div className="split-screen-padding flex flex-col space-between items-center">
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
													<span className="brown poppins-font"> {lang['its-not-ours']}</span>
												</h4>
												<span className={`h-3 aspect-2 ${isPanelOpen ? 'arrow-up' : 'arrow-down'}`}></span>
											</div>
											<div className={isPanelOpen ? 'flex' : 'hidden'}>{lang['personally-responsible']}</div>
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
