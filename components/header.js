import { Trans, useTranslation } from "react-i18next";
import { Navigation } from "~/components/navigation";

export function Header() {
  const { t } = useTranslation();

  return (
    <header className="absolute left-0 z-20 flex w-full items-center gap-8 p-10 text-gray md:text-white">
      <Navigation />

      <span className="hidden font-light md:block">
        <Trans
          t={t}
          i18nKey="header.credits"
          className="hidden font-light md:block"
        >
          Illustrations by{" "}
          <a
            className="font-normal underline"
            href="https://katerodman.com/"
            target="_blank"
            rel="noreferrer"
          >
            Kate Rodman
          </a>
        </Trans>
      </span>

      <a
        className="absolute top-0 right-0 z-20 m-10 hidden w-20 opacity-75 hover:opacity-100 md:block"
        href="https://veganhacktivists.org"
        target="_blank"
        rel="noreferrer"
      >
        <img
          width={80}
          height={80}
          src="/images/logo-vh.svg"
          alt={t("common.logo.alt")}
        />
      </a>
    </header>
  );
}
