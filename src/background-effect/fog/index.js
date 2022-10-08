import './fog.css';

const FogEffect = () => {
	return (
		<div className="fixed w-screen h-screen">
			<div id="foglayer_01" className="fog">
				<div className="image01"></div>
				<div className="image02"></div>
			</div>
			<div id="foglayer_02" className="fog">
				<div className="image01"></div>
				<div className="image02"></div>
			</div>
			<div id="foglayer_03" className="fog">
				<div className="image01"></div>
				<div className="image02"></div>
			</div>
		</div>
	);
};

export { FogEffect };
