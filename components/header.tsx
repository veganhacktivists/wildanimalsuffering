import { resources } from "i18n";
import { Trans, useTranslation } from "react-i18next";
import { Navigation } from "~/components/navigation";
import { Select } from "./select";

type Props = {
  locale?: keyof typeof resources;
};

export function Header({ locale = "en" }: Props) {
  const { t } = useTranslation();

  const onLangChange = (event: React.FormEvent<HTMLSelectElement>) => {
    if (event.target instanceof HTMLSelectElement) {
      const { value } = event.target;
      location.href = value === "en" ? "/" : `/${value}/`;
    }
  };

  return (
    <header className="absolute left-0 z-20 flex w-full items-center gap-8 p-10 text-white">
      <Navigation />

      <Select defaultValue={locale} onChange={onLangChange}>
        <option className="text-black" value="de">
          De
        </option>
        <option className="text-black" value="en">
          En
        </option>
        <option className="text-black" value="es">
          Es
        </option>
        <option className="text-black" value="fr">
          Fr
        </option>
        <option className="text-black" value="id">
          Id
        </option>
        <option className="text-black" value="ja">
          Ja
        </option>
        <option className="text-black" value="lt">
          Lt
        </option>
        <option className="text-black" value="nl">
          Nl
        </option>
      </Select>

      <span className="hidden font-light md:block">
        <Trans i18nKey="header.credits" className="hidden font-light md:block">
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
        className="absolute right-0 top-0 z-20 m-10 hidden w-20 opacity-75 hover:opacity-100 md:block"
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
