import { ActionButton } from "./action-button";
import { RaiseAwarenessDialog } from "./raise-awareness-dialog";

import miceImage from "./images/mice.png";
import { Trans, useTranslation } from "react-i18next";

export function HowToHelp() {
  const { t } = useTranslation();

  return (
    <section
      id={t("how_to_help.id")}
      className="relative flex min-h-screen items-center bg-forest bg-cover bg-top py-14 lg:py-24"
    >
      <div className="absolute bottom-0 h-64 w-full bg-ant-hill bg-cover bg-right-bottom bg-no-repeat md:h-full md:bg-contain" />
      <div className="relative mx-auto flex w-full max-w-7xl flex-col space-y-14 px-10">
        <h2 className="text-center font-brand text-3xl text-white lg:text-4xl">
          {t("how_to_help.heading")}
        </h2>

        <div className="mx-auto grid gap-12 text-white md:grid-cols-3 lg:gap-16">
          <RaiseAwarenessDialog>
            <ActionButton
              as="button"
              step={1}
              subtitle={t("how_to_help.awareness.subtitle")}
            >
              {t("how_to_help.awareness.title")}
            </ActionButton>
          </RaiseAwarenessDialog>
          <ActionButton
            as="a"
            href="https://animalcharityevaluators.org/donation-advice/recommended-charities"
            target="_blank"
            step={2}
            rel="noreferrer"
            subtitle={t("how_to_help.donate.subtitle")}
          >
            {t("how_to_help.donate.title")}
          </ActionButton>
          <ActionButton
            as="a"
            href="https://www.wildanimalinitiative.org/subscribe"
            target="_blank"
            step={3}
            rel="noreferrer"
            subtitle={t("how_to_help.newsletter.subtitle")}
          >
            {t("how_to_help.newsletter.title")}
          </ActionButton>
        </div>

        <div className="mx-auto max-w-xl space-y-14 text-center lg:max-w-2xl">
          <p className="leading-relaxed text-white">
            <Trans
              i18nKey="how_to_help.description"
              components={{
                "community-link": (
                  <a
                    href="https://www.wildanimalinitiative.org/services"
                    target="_blank"
                    className="underline"
                    rel="noreferrer"
                  />
                ),
                "grants-link": (
                  <a
                    href="https://www.wildanimalinitiative.org/grants"
                    target="_blank"
                    className="underline"
                    rel="noreferrer"
                  />
                ),
                "starter-guide-link": (
                  <a
                    href="/wai-starter-guide.pdf"
                    target="_blank"
                    className="underline"
                  />
                ),
              }}
            />
          </p>

          <a
            href="https://www.wildanimalinitiative.org/services"
            className="inline-block rounded-xl bg-primary px-5 py-1 text-lg font-medium"
            target="_blank"
            rel="noreferrer"
          >
            {t("how_to_help.more_opportunities")}
          </a>
        </div>
      </div>

      <img
        className="not-sr-only pointer-events-none absolute bottom-12 left-12 hidden max-h-96 w-[20vw] lg:block"
        src={miceImage.src}
        alt=""
      />
    </section>
  );
}
