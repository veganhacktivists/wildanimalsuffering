import { useContext, useState } from 'react';
import { Context } from '../state';
import { WasDialog, WasDialogTrigger, WasDialogContent } from '../was-dialog';
import { EvenWorseDialogContent } from './even-worse-dialog-content';

import './even-worse.css';

const EvenWorse = () => {

	const [state, dispatch] = useContext(Context);
	const { translations, locale } = state;
	const lang = translations[locale];
	const [selectedDialog, setSelectedDialog] = useState(null);
    
	const onDialogTriggerClick = (triggerId) => {
		setSelectedDialog(triggerId);
	};
    
	console.log('state=', state);
    
	return (
		<>
			<section id="even-worse-screen" className="screen-content even-worse white">
				<div className="full-screen w-full h-full flex flex-col">
					<div className="split-screen flex-col w-full text-center p-16">
						<h1><span>{lang['even-worse']}</span>:</h1>
					</div>
					<WasDialog dialogId='even-worse'>
						<WasDialogContent>
							<EvenWorseDialogContent selectedDialog={selectedDialog} />
						</WasDialogContent>
						<div className="split-screen flex-col w-full">
							<div className="flex flex-wrap flex-row justify-center text-center">
								<WasDialogTrigger asChild onClick={() => onDialogTriggerClick('thirst-and-starvation')}>
									<div className="suffer-image-container w-full pt-4">
										<div className="suffer-image suffer-thirst-image"></div>
										<div className="suffer-text p-2">{lang['thirst-and-starvation']}</div>
									</div>
								</WasDialogTrigger>
								<WasDialogTrigger asChild selector="predation">
									<div className="suffer-image-container w-full pt-4">
										<div className="suffer-image suffer-predation-image"></div>
										<div className="suffer-text p-2">{lang['predation']}</div>
									</div>
								</WasDialogTrigger>
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
					</WasDialog>
				</div>
			</section>
		</>
	);

};

export { EvenWorse };