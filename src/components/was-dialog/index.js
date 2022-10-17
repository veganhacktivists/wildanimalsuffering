import { Close, Content, Overlay, Root, Trigger } from "@radix-ui/react-dialog";
import { forwardRef, useContext } from "react";

import { Context } from "../../state";
import "./was-dialog.css";

const WasDialog = ({ children, ...props }) => {
  const [dispatch] = useContext(Context);
  const { dialogId } = props;

  const wasDialogOnOpenChange = (isOpen) => {
    dispatch({ type: "DIALOG_OPEN_CHANGE", payload: { isOpen, dialogId } });
  };

  return (
    <Root {...props} onOpenChange={wasDialogOnOpenChange}>
      <Overlay className="was-overlay" />
      {children}
    </Root>
  );
};
const WasDialogContent = forwardRef(({ children, ...props }, forwardedRef) => (
  <Content className="was-dialog-content" {...props} ref={forwardedRef}>
    <Close asChild className="absolute top-4 right-4 h-4 w-4">
      <span className="h-4 w-4 bg-logo"></span>
    </Close>
    {children}
  </Content>
));

WasDialogContent.displayName = "WasDialogContent";

const WasDialogTrigger = Trigger;
const WasDialogClose = Close;

export { WasDialog, WasDialogTrigger, WasDialogContent, WasDialogClose };
