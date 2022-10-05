import { useContext } from 'react';
import { Context } from '../state';

import './common-objections.css';

const CommonObjections = () => {
	const [state, dispatch] = useContext(Context);
	const { translations, locale } = state;
	const lang = translations[locale];

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
							<div className="panel-container">
								<div className="common-objection panel panel-open">
									<h4 className="brown"> {lang['its-not-ours']}</h4>
									<div> {lang['personally-responsible']}</div>
								</div>
							</div>
							<div className="panel-container">
								<div className="common-objection panel">
									<h4 className="brown"> {lang['its-not-ours']}</h4>
									<div> {lang['personally-responsible']}</div>
								</div>
							</div>
							<div className="panel-container">
								<div className="common-objection panel">
									<h4 className="brown"> {lang['its-not-ours']}</h4>
									<div> {lang['personally-responsible']}</div>
								</div>
							</div>
							<div className="panel-container">
								<div className="common-objection panel">
									<h4 className="brown"> {lang['its-not-ours']}</h4>
									<div> {lang['personally-responsible']}</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export { CommonObjections };
