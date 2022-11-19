import * as RadixDialog from "@radix-ui/react-dialog";
import * as RadixToast from "@radix-ui/react-toast";
import { useState } from "react";
import { CloseIcon } from "../../components/close-icon";
import { CopyIcon } from "../../components/copy-icon";

const CopyLinkSection = () => {
  const [open, setOpen] = useState(false);
  const url = "https://wildanimalsuffering.org";

  return (
    <RadixToast.Provider duration={2000}>
      <div className="relative mx-auto flex max-w-full gap-1 rounded-md bg-menu-back-light p-3">
        <RadixToast.Viewport />
        <span className="truncate">{url}</span>
        <button
          onClick={() => {
            setOpen(true);
            navigator.clipboard.writeText(url);
          }}
        >
          <CopyIcon className="h-5" />
        </button>
      </div>

      <RadixToast.Root
        open={open}
        onOpenChange={setOpen}
        className="absolute inset-x-0 top-0 w-full text-center text-sm text-brown/80 radix-state-closed:animate-pop-down radix-state-open:animate-pop-up"
      >
        <RadixToast.Description>link copied!</RadixToast.Description>
      </RadixToast.Root>
    </RadixToast.Provider>
  );
};

export function RaiseAwarenessDialog({ children }) {
  return (
    <RadixDialog.Root>
      <RadixDialog.Trigger asChild>{children}</RadixDialog.Trigger>
      <RadixDialog.Portal>
        <RadixDialog.Overlay className="fixed inset-0 z-10 flex h-screen w-screen items-center justify-center bg-[#1a3439]/50">
          <RadixDialog.Content className="fixed bottom-0 z-10 max-h-screen w-full overflow-y-auto text-brown radix-state-closed:animate-dialog-hide radix-state-open:animate-dialog-show sm:static sm:max-w-sm">
            <div className="max-h-75 relative m-auto w-full rounded-2xl border-4 border-white bg-white bg-cover px-8 pt-4 pb-8">
              <RadixDialog.Close className="absolute top-4 right-4">
                <CloseIcon className="h-4 w-4" />
              </RadixDialog.Close>
              <div className="flex flex-col space-y-5">
                <RadixDialog.Title className="flex flex-col items-center gap-4 text-center font-brand text-2xl font-bold">
                  <img
                    src="/images/logo-was.svg"
                    alt=""
                    className="mx-auto inline-block h-12"
                  />
                  Share on Social Media
                </RadixDialog.Title>

                <CopyLinkSection />
              </div>
            </div>
          </RadixDialog.Content>
        </RadixDialog.Overlay>
      </RadixDialog.Portal>
    </RadixDialog.Root>
  );
}
