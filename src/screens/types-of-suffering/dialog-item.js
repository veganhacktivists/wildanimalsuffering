import * as RadixDialog from "@radix-ui/react-dialog";
import { CloseIcon } from "../../components/close-icon";

export function DialogItem({ id, title, description }) {
  return (
    <RadixDialog.Root>
      <RadixDialog.Trigger className="relative flex w-3/4 cursor-zoom-in flex-col items-center justify-between rounded-md border-white bg-white/40 sm:w-1/3 lg:w-1/4 xl:w-1/5">
        <div className="flex aspect-video w-full">
          <img
            className="mx-auto h-full bg-center object-contain"
            src={`/images/types-of-suffering/${id}.png`}
            alt=""
          />
        </div>
        <div className="w-full rounded-b-lg bg-[#dad7ce] p-2 text-center">
          {title}
        </div>
      </RadixDialog.Trigger>
      <RadixDialog.Portal>
        <RadixDialog.Overlay className="fixed inset-0 z-10 h-screen w-screen bg-[#1a3439]/50" />
        <RadixDialog.Content className="fixed left-1/2 top-1/2 z-10 w-full max-w-4xl -translate-x-1/2 -translate-y-1/2">
          <div className="max-h-75 relative m-auto grid max-h-screen w-full place-items-center overflow-y-auto rounded-2xl border-4 border-white bg-white bg-sand p-10 md:grid-cols-2">
            <RadixDialog.Close className="fixed top-4 right-4">
              <CloseIcon className="h-6 w-6" />
            </RadixDialog.Close>
            <img
              src={`/images/types-of-suffering/${id}.png`}
              alt=""
              className="w-full max-w-sm"
            />
            <div className="flex flex-col space-y-5">
              <RadixDialog.Title className="font-brand text-2xl font-bold">
                {title}
              </RadixDialog.Title>
              <RadixDialog.Description>{description}</RadixDialog.Description>
            </div>
          </div>
        </RadixDialog.Content>
      </RadixDialog.Portal>
    </RadixDialog.Root>
  );
}
