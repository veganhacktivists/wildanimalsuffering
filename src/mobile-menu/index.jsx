import { useContext, useState } from 'react';
import { Context } from '../state';

import './mobile-menu.css';

const MobileMenu = () => {
	const [open, setOpen] = useState(false);
	const [state, dispatch] = useContext(Context);
	const { translations, locale } = state;
	const lang = translations[locale];

	function navigate(screenId) {
		setOpen(false);
		dispatch({ type: 'GO_TO_SCREEN_BY_ID', payload: { screenId } });
	}

	if (open) {
		return (
			<div
				className="md:hidden fixed h-screen w-screen bg-white z-40 text-menu-front-dark overflow-scroll"
				onWheel={(e) => e.stopPropagation()}
				onTouchEnd={(e) => e.stopPropagation()}
			>
				<div className="flex justify-between p-16">
					<div className="text-menu-front-dark uppercase text-8xl font-brand">
						Wild Animal Suffering
					</div>
					<button
						className="rounded-full border-2 border-menu-back-dark p-2 w-20 h-20 relative flex-shrink-0"
						onClick={() => setOpen(false)}
					>
						<div className="close-icon w-full h-full relative">
							<div className="bg-menu-back-dark absolute left-1/2 h-full w-1.5 rotate-45"></div>
							<div className="bg-menu-back-dark absolute left-1/2 h-full w-1.5 -rotate-45"></div>
						</div>
					</button>
				</div>
				<div className="flex flex-col justify-start px-16">
					{state.screenContentElements?.map(
						(element, index) =>
							element.dataset.name && (
								<button
									className={`relative text-left text-menu-front-light text-7xl p-16 hover:bg-menu-back-light ${
										element.id == state.screenId && 'bg-menu-back-light'
									}`}
									key={index}
									onClick={() => navigate(element.id)}
								>
									{element.id == state.screenId && (
										<div className="absolute bg-menu-front-dark top-10 right-10 w-10 h-10 rounded-full"></div>
									)}
									{element.dataset.name}
								</button>
							)
					)}
				</div>
				<div className="border-t border-bg-menu-back-light mt-16">
					<div className="bg-logo invert bg-contain bg-no-repeat bg-center h-48 my-14"></div>
					<div className="text-8xl text-menu-back-dark text-center">
						Social media icons here
					</div>
				</div>
			</div>
		);
	} else {
		return (
			<button
				className="md:hidden fixed top-0 left-0 z-40 p-10"
				onClick={() => setOpen(true)}
			>
				<div className="h-1.5 w-14 bg-white rounded-full"></div>
				<div className="h-1.5 w-14 bg-white rounded-full my-3"></div>
				<div className="h-1.5 w-14 bg-white rounded-full"></div>
			</button>
		);
	}
};

export { MobileMenu };
