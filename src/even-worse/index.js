import { useContext, useState } from 'react';
import { Context } from '../state';
import { WasDialog, WasDialogTrigger, WasDialogContent } from '../was-dialog';
import { EvenWorseDialogContent } from './even-worse-dialog-content';

import './even-worse.css';

const DialogTrigger = ({dialogKey, onClick}) => {

	const [state, dispatch] = useContext(Context);
	const { translations, locale } = state;
	const lang = translations[locale];

	return (
		<WasDialogTrigger onClick={onClick} key={`dialog-trigger-${dialogKey}`} asChild>
			<div className="suffer-image-container w-full pt-4 flex flex-col">
				<div className={`suffer-image suffer-image-${dialogKey}`}></div>
				<div className="suffer-text p-2 flex-grow">{lang[dialogKey]}</div>
			</div>
		</WasDialogTrigger>
	);
};

const EvenWorse = () => {

	const [state, dispatch] = useContext(Context);
	const { translations, locale } = state;
	const lang = translations[locale];
	const [selectedDialogIndex, setSelectedDialogIndex] = useState(null);
    
	const onDialogTriggerClick = ({selectedIndex}) => {
		setSelectedDialogIndex(selectedIndex);
	};
    
	const dialogBoxKeys = [
		'thirst-and-starvation', 'predation', 'disease-and-parasitism', 'harmful-weather', 'natural-disasters', 'accidents', 'anthropogenic-harms'
	];
	const selectedDialog = dialogBoxKeys[selectedDialogIndex];
    
	const onNavigationClick = ({ direction }) => {
		const increment = direction === 'LEFT' ? -1 : 1;
		const n = dialogBoxKeys.length;
		const newIndex = (((selectedDialogIndex + increment) % n) + n ) % n;
		setSelectedDialogIndex(newIndex);
	};
    
	return (
		<>
			<section id="even-worse-screen" className="screen-content even-worse white">
				<div className="full-screen w-full h-full flex flex-col">
					<div className="split-screen flex-col w-full text-center p-16">
						<h1><span>{lang['even-worse']}</span>:</h1>
					</div>
					<WasDialog dialogId='even-worse'>
						<WasDialogContent>
							<EvenWorseDialogContent onNavigationClick={onNavigationClick} selectedDialog={selectedDialog} />
						</WasDialogContent>
						<div className="split-screen flex-col w-full">
							<div className="flex flex-wrap flex-row justify-center text-center">
								{dialogBoxKeys.map((dialogKey, index) => {
									return (
										<DialogTrigger
											key={dialogKey}
											dialogKey={dialogKey}
											onClick={() => onDialogTriggerClick({selectedIndex: index})}
										/>
									);
								})}
							</div>
						</div>
					</WasDialog>
				</div>
			</section>
		</>
	);

};

export { EvenWorse };