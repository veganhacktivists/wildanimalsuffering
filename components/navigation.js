import { useEffect, useState } from "react";
import { Trans, useTranslation } from "react-i18next";
import { MenuIcon } from "~/components/menu-icon";
import { NavigationLink } from "~/components/navigation-link";

// TODO Replace with something more accessible.
export function Navigation() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

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
    <>
      <button className="cursor-pointer" onClick={() => setOpen(true)}>
        <span className="sr-only">{t("navigation.name")}</span>
        <MenuIcon size={35} className="cursor-pointer" />
      </button>

      {open && (
        <nav className="absolute top-0 left-0 h-auto w-full overflow-auto p-5 sm:max-w-sm">
          <div className="flex flex-col overflow-auto rounded-xl bg-white text-menu-front-dark">
            <div className="flex justify-between p-8">
              <div className="font-brand text-2xl uppercase text-menu-front-dark">
                {t("common.name")}
              </div>
              <button
                className="relative h-8 w-8 shrink-0 rounded-full border-2 border-menu-back-dark p-1"
                onClick={() => setOpen(false)}
              >
                <span className="sr-only">{t("navigation.close")}</span>
                <div className="relative h-full w-9/10">
                  <div className="absolute left-1/2 h-full w-1/10 rotate-45 bg-menu-back-dark"></div>
                  <div className="absolute left-1/2 h-full w-1/10 -rotate-45 bg-menu-back-dark"></div>
                </div>
              </button>
            </div>
            <div className="flex flex-col px-8">
              <ul className="flex flex-col space-y-2 ">
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
                <NavigationLink id={t("videos.id")} name={t("videos.name")} />
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
                  Made with love by the{" "}
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
      )}
    </>
  );
}
