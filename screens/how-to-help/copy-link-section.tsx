import * as RadixToast from "@radix-ui/react-toast";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { CopyIcon } from "~/components/copy-icon";

export function CopyLinkSection() {
  const { t } = useTranslation();
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
        <RadixToast.Description>
          {t("how_to_help.awareness.link_copied")}
        </RadixToast.Description>
      </RadixToast.Root>
    </RadixToast.Provider>
  );
}
