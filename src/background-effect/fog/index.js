import './fog.css';

const FogEffect = () => {
	return (
		<>
			<div
				style={{
					position: 'fixed',
					width: '100vw',
					height: '100vh',
				}}
			>
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
		</>
	);
};

export { FogEffect };
