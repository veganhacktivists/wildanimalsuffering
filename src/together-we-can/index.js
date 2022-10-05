import { useContext } from 'react';
import { Context } from '../state';

import './together-we-can.css';

const TogetherWeCan = () => {
	const [state, dispatch] = useContext(Context);
	const { translations, locale } = state;
	const lang = translations[locale];

	const credits = [
		'credits-01',
		'credits-02',
		'credits-03',
		'credits-04',
		'credits-05',
		'credits-06',
		'credits-07',
		'credits-08',
	];

	return (
		<>
			<section
				id="together-we-can-screen"
				data-name="Conclusion"
				className="together-we-can screen-content"
			>
				<div className="full-screen flex-col w-full h-full bears justify-between">
					<div className="py-16 pr-10 flex flex-col h-screen-50vh w-[100%] lg:w-[75%] 2xl:w-[50%] self-start">
						<h2>{lang['together-we-can']}</h2>
						<p>{lang['together-we-can-description-01']}</p>
						<br />
						<p>{lang['together-we-can-description-02']}</p>
						<br />
						<h3 className="orange">{lang['thank-you']}.</h3>
					</div>
					<div className="flex flex-row justify-evenly p-5 lighten-strip">
						<div className="flex flex-row">
							<div className="patreon-logo h-full aspect-square"></div>
							<div className="flex-col mx-4">
								<h5>{lang['consider-support']}</h5>
								<div className="text-sm">{lang['free-to-use']}</div>
							</div>
						</div>
						<span className="badge uppercase">{lang['support-us']}</span>
					</div>
					<div className="flex flex-row">
						<h5 className="px-20">{lang['credits-heading']}</h5>
						<div>
							{credits.map((creditKey) => (
								<p key={creditKey}>{lang[creditKey]}</p>
							))}
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export { TogetherWeCan };
