import { useContext } from 'react';
import { Context } from '../state';

import './other-resources.css';

const OtherResources = () => {

	const [state, dispatch] = useContext(Context);
	const { translations, locale } = state;
	const lang = translations[locale];

	return (
		<>
			<section id="other-resources-screen" className="other-resources screen-content">
				<div className="full-screen w-full h-full">
					<div className="w-2/3 h-full self-center">
						<div className="py-16 flex flex-col text-center items-center">
							<h2> {lang['other-resources']}</h2>
						</div>
                        
						<div className="split-screen-padding flex flex-col space-between items-center">
						</div>
					</div>
				</div>
			</section>
		</>
	);

};

export { OtherResources };