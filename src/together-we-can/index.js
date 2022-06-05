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
				<div className="full-screen w-full h-full">
					<div className="split-screen h-screen-50vh mt-10">
						<h2 className="mr-8">{lang['together-we-can']}</h2>
						<br/>
						<p>{lang['together-we-can-p']}</p>
						<br/>
						<h2>{lang['thank-you']}</h2>
					</div>
					<div className="split-screen h-screen-50vh w-full bears">
					</div>
				</div>
			</section>
		</>
	);

};

export { TogetherWeCan };