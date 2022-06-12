import { useContext } from 'react';
import { Context } from '../state';

import './together-we-can.css';

const TogetherWeCan = () => {

	const [state, dispatch] = useContext(Context);
	const { translations, locale } = state;
	const lang = translations[locale];

	return (
		<>
			<section id="together-we-can-screen" className="together-we-can screen-content">
				<div className="full-screen flex-col w-full h-full">
					<div className="py-16 pr-10 flex flex-col h-screen-50vh w-[50%] self-start">
						<h2>{lang['together-we-can']}</h2>
						<p>{lang['together-we-can-description-01']}</p>
						<br />
						<p>{lang['together-we-can-description-02']}</p>
						<br />
						<h3 className='orange'>{lang['thank-you']}.</h3>
					</div>
				</div>
			</section>
		</>
	);

};

export { TogetherWeCan };