import * as RadixDialog from "@radix-ui/react-dialog";
import { CloseIcon } from "../../components/close-icon";

export function DialogItem({ id, title, description }) {
  return (
    <RadixDialog.Root>
      <RadixDialog.Trigger className="relative flex w-1/5 cursor-zoom-in flex-col items-center rounded-md border-white bg-white/40">
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
        <RadixDialog.Content className="fixed inset-0 z-10 flex h-screen w-screen flex-col">
          <div className="relative m-auto grid w-full max-w-4xl grid-cols-2 place-items-center rounded-2xl border-4 border-white bg-white bg-sand p-10">
            <RadixDialog.Close className="absolute top-4 right-4">
              <CloseIcon className="h-6 w-6" />
            </RadixDialog.Close>
            <img src={`/images/types-of-suffering/${id}.png`} alt="" />
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
