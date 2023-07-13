import * as RadixDialog from "@radix-ui/react-dialog";
import { useTranslation } from "react-i18next";
import { CloseIcon } from "~/components/close-icon";
import { LogoWas } from "~/components/logo-was";
import { CopyLinkSection } from "./copy-link-section";

export function RaiseAwarenessDialog({ children }) {
  const { t } = useTranslation();

  return (
    <RadixDialog.Root>
      <RadixDialog.Trigger asChild>{children}</RadixDialog.Trigger>
      <RadixDialog.Portal>
        <RadixDialog.Overlay className="fixed inset-0 z-10 flex h-screen w-screen items-center justify-center bg-[#1a3439]/50">
          <RadixDialog.Content className="fixed bottom-0 z-10 max-h-screen w-full overflow-y-auto text-brown radix-state-closed:animate-dialog-hide radix-state-open:animate-dialog-show sm:static sm:max-w-sm">
            <div className="max-h-75 relative m-auto w-full rounded-2xl border-4 border-white bg-white bg-cover px-8 pb-8 pt-4">
              <RadixDialog.Close className="absolute right-4 top-4">
                <CloseIcon className="h-4 w-4" />
              </RadixDialog.Close>
              <div className="flex flex-col space-y-5">
                <RadixDialog.Title className="flex flex-col items-center gap-4 text-center font-brand text-2xl font-bold">
                  <div className="mx-auto inline-block aspect-square h-12">
                    <LogoWas />
                  </div>
                  {t("how_to_help.awareness.share")}
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
