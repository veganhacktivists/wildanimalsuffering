import './even-worse-dialog-content.css';

const EvenWorseDialogContent = ({selectedDialog}) => {

	return (
		<div className='even-worse-dialog-content'>
			<p>{selectedDialog}</p>
		</div>
	);
};

export { EvenWorseDialogContent };