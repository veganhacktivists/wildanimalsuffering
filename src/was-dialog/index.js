import { useContext, useState, forwardRef } from 'react';
import { Root, Overlay, Content, Close, Trigger } from '@radix-ui/react-dialog';

import { Context } from '../state';
import './was-dialog.scss';


const WasDialog = ({ children, ...props }) => {

	const [state, dispatch] = useContext(Context);
	const { dialogId } = props;


	const wasDialogOnOpenChange = (isOpen) => {
		dispatch({ type: 'DIALOG_OPEN_CHANGE', payload: {isOpen, dialogId} });        
	};

	return (
		<Root {...props} onOpenChange={wasDialogOnOpenChange}>
			<Overlay className='was-overlay' />
			{children}
		</Root>
	);
};
const WasDialogContent = forwardRef(
	({ children, ...props }, forwardedRef) => (
		<Content className="was-dialog-content" {...props} ref={forwardedRef}>
			{children}
			<Close>
				x
			</Close>
		</Content>
	)
);

WasDialogContent.displayName = 'WasDialogContent';

const WasDialogTrigger = Trigger;
const WasDialogClose = Close;

export { WasDialog, WasDialogTrigger, WasDialogContent, WasDialogClose };