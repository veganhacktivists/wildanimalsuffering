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
		languageKey: 'wild-animal-initiative',
		iconKey: 'wild-animal-initiative'
	}, {
		languageKey: 'wild-animal-initiative',
		iconKey: 'wild-animal-initiative'
	}, {
		languageKey: 'wild-animal-initiative',
		iconKey: 'wild-animal-initiative'
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
								<div className="w-1/2" key={`${organisation.languageKey}-${index}`}>
									<div className="w-1/2 flex flex-col">
										<div className="flex flex-row h-full">
											<div className={`${organisation.iconKey} aspect-square h-20`}></div>
											<hr className='orange' />
											<div>{lang[`${organisation.languageKey}-description`]}</div>
										</div>
										<div>
											<span className='badge capitalize brown'>
												{lang['visit-site']}
											</span>
											<span className='badge capitalize sand'>
												{lang['donate']}
											</span>
											<span className='badge capitalize oat'>
												{lang['volunteer']}
											</span>
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