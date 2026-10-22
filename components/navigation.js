import * as RadixDialog from "@radix-ui/react-dialog";
import { useEffect, useRef, useState } from "react";
import { Trans, useTranslation } from "react-i18next";
import { MenuIcon } from "~/components/menu-icon";
import { NavigationLink } from "~/components/navigation-link";

export function Navigation() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const triggerRef = useRef(null);

  // Close the menu when clicking on a link.
  useEffect(() => {
    const onHashChange = () => {
      setOpen(false);
    };

    window.addEventListener("hashchange", onHashChange);

    return () => {
      window.removeEventListener("hashchange", onHashChange);
    };
  }, []);

  return (
    <RadixDialog.Root open={open} onOpenChange={setOpen}>
      <RadixDialog.Trigger
        ref={triggerRef}
        className="flex min-h-11 min-w-11 cursor-pointer items-center ltr:mr-auto md:ltr:mr-0 rtl:ml-auto md:rtl:ml-0"
      >
        <span className="sr-only">{t("navigation.name")}</span>
        <MenuIcon size={35} className="cursor-pointer" />
      </RadixDialog.Trigger>

      <RadixDialog.Portal>
        <RadixDialog.Overlay className="fixed inset-0 z-30">
          <RadixDialog.Content
            aria-describedby={undefined}
            onFocusCapture={(event) => {
              if (event.target !== event.currentTarget) {
                event.target.scrollIntoView({
                  block: "nearest",
                  inline: "nearest",
                });
              }
            }}
            onCloseAutoFocus={(event) => {
              event.preventDefault();
              triggerRef.current?.focus({ preventScroll: true });
            }}
            className="absolute top-0 max-h-screen w-full overflow-y-auto p-5 sm:max-w-104 ltr:left-0 rtl:right-0"
          >
            <RadixDialog.Title className="sr-only">
              {t("navigation.name")}
            </RadixDialog.Title>
            <nav>
              <div className="text-menu-front-dark flex flex-col overflow-auto rounded-xl bg-white">
                <div className="flex justify-between p-8">
                  <div className="font-brand text-menu-front-dark text-2xl uppercase">
                    {t("common.name")}
                  </div>
                  <RadixDialog.Close className="border-menu-back-dark relative h-8 w-8 shrink-0 rounded-full border-2 p-1">
                    <span className="sr-only">{t("navigation.close")}</span>
                    <div className="relative h-full w-9/10">
                      <div className="bg-menu-back-dark absolute h-full w-1/10 rotate-45 ltr:left-1/2 rtl:right-1/2"></div>
                      <div className="bg-menu-back-dark absolute h-full w-1/10 -rotate-45 ltr:left-1/2 rtl:right-1/2"></div>
                    </div>
                  </RadixDialog.Close>
                </div>
                <div className="flex flex-col px-8">
                  <ul className="flex flex-col space-y-2">
                    <NavigationLink
                      id={t("introduction.id")}
                      name={t("introduction.name")}
                    />
                    <NavigationLink
                      id={t("scale_of_suffering.id")}
                      name={t("scale_of_suffering.name")}
                    />
                    <NavigationLink
                      id={t("types_of_suffering.id")}
                      name={t("types_of_suffering.name")}
                    />
                    <NavigationLink
                      id={t("population_dynamics.id")}
                      name={t("population_dynamics.name")}
                    />
                    <NavigationLink
                      id={t("proposed_solutions.id")}
                      name={t("proposed_solutions.name")}
                    />
                    <NavigationLink
                      id={t("videos.id")}
                      name={t("videos.name")}
                    />
                    <NavigationLink
                      id={t("common_objections.id")}
                      name={t("common_objections.name")}
                    />
                    <NavigationLink
                      id={t("how_to_help.id")}
                      name={t("how_to_help.name")}
                    />
                    <NavigationLink
                      id={t("organizations.id")}
                      name={t("organizations.name")}
                    />
                    <NavigationLink
                      id={t("resources.id")}
                      name={t("resources.name")}
                    />
                    <NavigationLink
                      id={t("conclusion.id")}
                      name={t("conclusion.name")}
                    />
                  </ul>
                  <div className="mt-8 border-t py-8">
                    <Trans i18nKey="navigation.made_with_love">
                      Made with love by{" "}
                      <a
                        className="whitespace-nowrap underline"
                        href="https://veganhacktivists.org"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Vegan Hacktivists
                      </a>
                      .
                    </Trans>
                  </div>
                </div>
              </div>
            </nav>
          </RadixDialog.Content>
        </RadixDialog.Overlay>
      </RadixDialog.Portal>
    </RadixDialog.Root>
  );
}
