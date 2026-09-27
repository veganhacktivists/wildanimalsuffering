import { resources } from "i18n";
import { Trans, useTranslation } from "react-i18next";
import { Navigation } from "~/components/navigation";
import { Select } from "./select";

type Props = {
  locale?: keyof typeof resources;
};

const languages = [
  ["ar", "Arabic"],
  ["hy", "Armenian"],
  ["zh", "Chinese"],
  ["nl", "Dutch"],
  ["en", "English"],
  ["fr", "French"],
  ["de", "German"],
  ["hi", "Hindi"],
  ["id", "Indonesian"],
  ["it", "Italian"],
  ["ja", "Japanese"],
  ["ko", "Korean"],
  ["lt", "Lithuanian"],
  ["pl", "Polish"],
  ["pt", "Portuguese"],
  ["ru", "Russian"],
  ["es", "Spanish"],
  ["th", "Thai"],
  ["tr", "Turkish"],
  ["vi", "Vietnamese"],
];

export function Header({ locale = "en" }: Props) {
  const { t } = useTranslation();

  const onLangChange = (event: React.FormEvent<HTMLSelectElement>) => {
    if (event.target instanceof HTMLSelectElement) {
      const { value } = event.target;

      // Otherwise the English page takes this for a first visit and sends
      // the visitor back to their browser's language.
      try {
        localStorage.setItem("language-detected", "true");
      } catch {}

      location.href = value === "en" ? "/" : `/${value}/`;
    }
  };

  return (
    <header className="absolute z-20 flex w-full items-center gap-8 p-10 text-white ltr:left-0 rtl:right-0">
      <Navigation />

      <Select defaultValue={locale} onChange={onLangChange}>
        {languages.map(([value, name]) => (
          <option key={value} className="text-black" value={value}>
            {name}
          </option>
        ))}
      </Select>

      <span className="hidden font-light md:block">
        <Trans i18nKey="header.credits" className="hidden font-light md:block">
          Illustrations by{" "}
          <a
            className="font-normal underline"
            href="https://violetstudios.org"
            target="_blank"
            rel="noreferrer"
          >
            Violet Studios
          </a>
        </Trans>
      </span>

      <a
        className="absolute top-0 z-20 m-10 hidden w-20 opacity-75 hover:opacity-100 ltr:right-0 rtl:left-0 md:block"
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
