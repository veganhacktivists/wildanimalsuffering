import { useContext, useState } from 'react';
import { PageNavigator } from '../page-navigator';
import { Context } from '../state';

import './wild-animal-stats.css';

const WildAnimalStats = () => {
	const [state] = useContext(Context);
	const { translations, locale, animalStatIndex } = state;
	const lang = translations[locale];

	const { abyssOverlay } = state;
	const [showHumans] = useState(true);
    
	const stats = [
		{ key: 'farmedAnimals', numberOnASide: 2, color: 'blue'},
		{
			key: 'wildBirds',
			numberOnASide: 5,
			color: 'blue',
			languageKey: 'animal-stats-birds',
		},
		{
			key: 'wildAnimals',
			numberOnASide: 10,
			color: 'blue',
			languageKey: 'animal-stats-wild-mammals',
		},
		{
			key: 'reptiles',
			numberOnASide: 10,
			color: 'green',
			languageKey: 'animal-stats-reptiles',
		},
		{
			key: 'amphibians',
			numberOnASide: 10,
			color: 'green',
			languageKey: 'animal-stats-amphibians',
		},
		{
			key: 'fish',
			numberOnASide: 10,
			color: 'orange',
			languageKey: 'animal-stats-fish',
		},
		{
			key: 'earthworms',
			numberOnASide: 30,
			color: 'pink',
			languageKey: 'animal-stats-earthworms',
		},
		{
			key: 'arthropods',
			numberOnASide: 50,
			color: 'purple',
			languageKey: 'animal-stats-arthropods',
		},
	];
	const squareData = stats[animalStatIndex];
    
	const Squares = ({ numberOnASide, color = 'blue' }) => {
		const numberOfSquares = Math.pow(numberOnASide, 2);
		return (
			<div id='centered-squares' className={`square-${numberOnASide}s`}>
				{Array.from(Array(numberOfSquares).keys()).map((i) => {
					return (
						<div
							key={`square-${i}`}
							className={`${color}-square`}
						></div>
					);
				})}
			</div>
		);
	};
    
	const StatsContainer = () => {
		return stats.filter((statItem, index) => animalStatIndex >= index)
			.map((statItem, index) => {
				return (
					<h4
						key={`animal-stat-${statItem.key}`}
						className={`animal-stat ${statItem.color} ${
							animalStatIndex === index ? 'stat-highlight' : ''
						}`}
						dangerouslySetInnerHTML={{
							__html: lang[statItem.languageKey],
						}}>
					</h4>
				);
			});
	};

	return (
		<>
			<section
				id="abyss-container"
				className={`${
					abyssOverlay ? 'abyss-darkened' : 'abyss'
				} scrollsnap-y flex-col hw-screen overflow-hidden`}
			>
				<div
					id="animal-stats-screen"
					className="screen-content scrollable animal-stats flex"
				>
					{/* web: left side; mobile: top */}
					<div className="h-screen-30vh md:h-screen md:w-screen-50vw flex-center split-screen-padding flex">
						<div className="flex-center flex-col justify-around h-full text-left flex-grow">
							{animalStatIndex === 0 ? (
								<div className="domestic-stats-container">
									<h1
										dangerouslySetInnerHTML={{
											__html: lang['for-every-human'],
										}}
									></h1>
									<h4 className=" py-4">{lang['thats-a-lot']}</h4>
								</div>
							) : null}
							{animalStatIndex !== 0 ? (
								<div className="wild-stats-container flex md:justify-between md:flex-col md:w-full md:h-5/6">
									{showHumans ? (
										<div id="humans" className="humans">
											<p>{lang['in-the-wild']}</p>
											<p>{lang['for-every-human-between']}</p>
										</div>
									) : null}
									{showHumans ? (
										<div className="non-human-animals">
											<StatsContainer />
										</div>
									) : null}
									<div>
										<p>{lang['at-any-moment']}</p>
										<p>{lang['vast-majority']}</p>
										<p>{lang['wild-animals']}</p>
										<p>{lang['mind-boggling']}</p>
										<div className="py-4">
											<p>{lang['number-of-individuals']}</p>
											<div className="legend"></div>
										</div>
									</div>
								</div>
							) : null}
						</div>
					</div>
					{/* web: right side; mobile: bottom */}
					<div className="h-screen-70vh md:h-screen md:w-screen-50vw p-24 flex-center flex-col">
						<Squares
							numberOnASide={squareData.numberOnASide}
							color={squareData.color}
						/>
					</div>
				</div>
				<PageNavigator direction="side" />
			</section>
		</>
	);
};

export { WildAnimalStats };
