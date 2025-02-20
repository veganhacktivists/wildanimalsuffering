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
    <header className="absolute z-20 flex w-full items-center gap-8 p-10 text-white ltr:left-0 rtl:right-0">
      <Navigation />

      <Select defaultValue={locale} onChange={onLangChange}>
        <option className="text-black" value="ar">
          Arabic
        </option>
        <option className="text-black" value="hy">
          Armenian
        </option>
        <option className="text-black" value="zh">
          Chinese
        </option>
        <option className="text-black" value="nl">
          Dutch
        </option>
        <option className="text-black" value="en">
          English
        </option>
        <option className="text-black" value="fr">
          French
        </option>
        <option className="text-black" value="de">
          German
        </option>
        <option className="text-black" value="hi">
          Hindi
        </option>
        <option className="text-black" value="id">
          Indonesian
        </option>
        <option className="text-black" value="it">
          Italian
        </option>
        <option className="text-black" value="ja">
          Japanese
        </option>
        <option className="text-black" value="ko">
          Korean
        </option>
        <option className="text-black" value="lt">
          Lithuanian
        </option>
        <option className="text-black" value="pl">
          Polish
        </option>
        <option className="text-black" value="pt">
          Portuguese
        </option>
        <option className="text-black" value="ru">
          Russian
        </option>
        <option className="text-black" value="es">
          Spanish
        </option>
        <option className="text-black" value="th">
          Thai
        </option>
        <option className="text-black" value="tr">
          Turkish
        </option>
        <option className="text-black" value="vi">
          Vietnamese
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
