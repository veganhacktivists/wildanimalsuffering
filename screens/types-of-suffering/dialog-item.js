import * as RadixDialog from "@radix-ui/react-dialog";
import { useTranslation } from "react-i18next";
import { CloseIcon } from "~/components/close-icon";
import { ExpandIcon } from "~/components/expand-icon";

export function DialogItem({ imageUrl, title, description, link }) {
  const { t } = useTranslation();

  return (
    <RadixDialog.Root>
      <RadixDialog.Trigger className="group relative flex w-3/4 cursor-zoom-in flex-col items-center justify-between rounded-md border-white bg-white/40 transition-all duration-300 hover:scale-105 hover:bg-white/60 hover:shadow-glow sm:w-1/3 lg:w-1/4 xl:w-1/5">
        <div className="flex aspect-video w-full">
          <ExpandIcon className="absolute top-4 h-5 w-5 transition-all duration-300 group-hover:scale-110 group-hover:text-primary ltr:right-4 rtl:left-4" />
          <img
            className="mx-auto h-full bg-center object-contain transition-transform duration-300 group-hover:scale-105"
            src={imageUrl}
            alt=""
          />
        </div>
        <div className="w-full rounded-b-lg bg-[#dad7ce] p-2 text-center transition-colors duration-300 group-hover:bg-primary-lighter">
          {title}
        </div>
      </RadixDialog.Trigger>
      <RadixDialog.Portal>
        <RadixDialog.Overlay className="fixed inset-0 z-10 flex h-screen w-screen items-center justify-center bg-[#1a3439]/50 radix-state-open:animate-[fade-in_200ms_ease-out] radix-state-closed:animate-[fade-out_200ms_ease-in]">
          <RadixDialog.Content className="fixed bottom-0 z-10 max-h-screen w-full max-w-4xl overflow-y-auto radix-state-open:animate-[dialog-slide-up_300ms_ease-out] radix-state-closed:animate-[dialog-slide-down_200ms_ease-in] md:static md:radix-state-open:animate-[dialog-scale-in_300ms_ease-out] md:radix-state-closed:animate-[dialog-scale-out_200ms_ease-in]">
            <div className="max-h-75 relative m-auto grid w-full place-items-center rounded-2xl border-4 border-white bg-white bg-sand bg-cover p-10 shadow-2xl md:grid-cols-2">
              <RadixDialog.Close className="absolute top-4 rounded-full p-1 transition-all duration-200 hover:bg-white/20 hover:scale-110 ltr:right-4 rtl:left-4">
                <CloseIcon className="h-6 w-6 transition-colors duration-200 hover:text-primary" />
              </RadixDialog.Close>
              <img 
                src={imageUrl} 
                alt="" 
                className="w-full max-w-sm animate-[image-float_300ms_ease-out_100ms_both]" 
              />
              <div className="flex flex-col space-y-5">
                <RadixDialog.Title className="font-brand text-2xl font-bold">
                  {title}
                </RadixDialog.Title>
                <RadixDialog.Description>{description}</RadixDialog.Description>
                <div>
                  <a
                    href={link}
                    className="inline-block rounded-full bg-primary px-14 py-1 text-lg font-medium transition-all duration-300 hover:scale-105 hover:bg-primary-light hover:shadow-lg"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {t("types_of_suffering.dialog_learn_more")}
                  </a>
                </div>
                <div>
                  <RadixDialog.Close className="underline transition-colors duration-200 hover:text-primary md:hidden">
                    {t("types_of_suffering.dialog_go_back")}
                  </RadixDialog.Close>
                </div>
              </div>
            </div>
          </RadixDialog.Content>
        </RadixDialog.Overlay>
      </RadixDialog.Portal>
    </RadixDialog.Root>
  );
}
