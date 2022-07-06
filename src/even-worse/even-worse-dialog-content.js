import { useContext } from 'react';
import { Context } from '../state';

import './even-worse-dialog-content.css';

const EvenWorseDialogContent = ({ selectedDialog, onNavigationClick }) => {

	const [state, dispatch] = useContext(Context);
	const { translations, locale } = state;
	const lang = translations[locale];
    
	const handleNavigationClick = ({ direction }) => {
		onNavigationClick({ direction });
	};

	return (
		<>
			<div className='even-worse-dialog-content flex flex-grow flex-row'>
				<div className={`w-1/2 suffer-image-${selectedDialog}`}></div>
				<div className="w-1/2 flex flex-col dark-gray self-center">
					<h2>{lang[selectedDialog]}</h2>
					<p className="py-8" dangerouslySetInnerHTML={{
						__html: lang[`${selectedDialog}-description`],
					}}></p>
					<div className="dialog-navigator w-full flex flex-row justify-between">
						<div
							id="next-dialog-left"
							className="w-screen-5vw"
							onClick={() => {handleNavigationClick({direction: 'LEFT'});}}
						>
							<div className="arrow"></div>
						</div>
						<div
							id="next-dialog-right"
							className="w-screen-5vw"
							onClick={() => {handleNavigationClick({direction: 'RIGHT'});}}
						>
							<div className="arrow"></div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export { EvenWorseDialogContent };