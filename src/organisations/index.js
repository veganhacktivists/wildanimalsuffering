import { useContext } from 'react';
import { Context } from '../state';
import './organisations.css';

const Organisations = () => {

	const [state, dispatch] = useContext(Context);
	const { translations, locale } = state;
	const lang = translations[locale];
    
	const imageBasePath = 'images/organisations';
    
	const organisations = [{
		languageKey: 'wild-animal-initiative',
		iconKey: 'wild-animal-initiative'
	}, {
		languageKey: 'animal-ethics',
		iconKey: 'animal-ethics'
	}, {
		languageKey: 'rethinking-priorities',
		iconKey: 'rethinking-priorities'
	}, {
		languageKey: 'rethinking-priorities-2',
		iconKey: 'rethinking-priorities'
	}];

	return (
		<>
			<section id="organisations-screen" className="organisations screen-content">
				<div className="full-screen flex-col w-full h-full">
					<div className="py-16 flex justify-center split-screen flex-col h-screen-50vh w-[35%] text-center items-center">
						<h2>{lang['organsations-title']}</h2>
					</div>
					<div className="split-screen h-screen-50vh w-full flex-row relative justify-around flex-wrap">
                        
						{organisations.map((organisation, index) => {
							return (
								<div className="w-1/2 flex justify-center" key={`${organisation.languageKey}-${index}`}>
									<div className="w-1/2 flex flex-row h-full">
										<div className="flex flex-row p-2">
											<div className={`${organisation.iconKey} aspect-square h-20`}></div>
										</div>
										<hr className='orange' />
										<div className="flex flex-col">
											<h4 className='p-2'>{lang[`${organisation.languageKey}`]}</h4>
											<div className='text-justify p-2'>{lang[`${organisation.languageKey}-description`]}</div>
											<div className="flex flex-row justify-between p-2">
												<span className='badge capitalize brown m-1'>
													{lang['visit-site']}
												</span>
												<span className='badge capitalize sand m-1'>
													{lang['donate']}
												</span>
												<span className='badge capitalize oat m-1'>
													{lang['volunteer']}
												</span>
											</div>
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</section>
		</>
	);

};

export { Organisations };