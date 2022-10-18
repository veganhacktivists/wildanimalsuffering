import * as RadixDialog from "@radix-ui/react-dialog";
import { forwardRef } from "react";

// FIXME Clean up classnames and onOpenChange method.
export function Dialog({ children, ...props }) {
  return (
    <RadixDialog.Root {...props} onOpenChange={() => {}}>
      <RadixDialog.Overlay className="fixed inset-0 h-screen w-screen bg-[#1a3439]/5" />
      {children}
    </RadixDialog.Root>
  );
}

// FIXME Typescript errors and clean up styling.
export const DialogContent = forwardRef(
  // @ts-ignore
  ({ children, ...props }, forwardedRef) => (
    <RadixDialog.Content
      className="fixed z-10 flex flex-col items-center justify-between self-center overflow-hidden rounded-2xl border-2 bg-clip-padding"
      ref={forwardedRef}
      {...props}
    >
      <RadixDialog.Close asChild className="absolute top-4 right-4 h-4 w-4">
        <span className="h-4 w-4 bg-logo"></span>
      </RadixDialog.Close>
      {children}
    </RadixDialog.Content>
  )
);
DialogContent.displayName = "DialogContent";

export const DialogTrigger = RadixDialog.Trigger;
export const DialogClose = RadixDialog.Close;
