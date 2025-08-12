import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Accordion, AccordionItem } from "~/components/accordion";
import {
  BackgroundEffect,
  useBackgroundEffect,
} from "~/components/background-effect";

export function CommonObjections() {
  const { t } = useTranslation();
  const { screenRef, effectOpacity } = useBackgroundEffect();

  return (
    <section
      id={t("common_objections.id")}
      className="relative flex min-h-screen bg-sand bg-cover bg-top py-24"
      ref={screenRef}
    >
      <div className="absolute bottom-0 h-full w-full bg-hedgehog bg-right-bottom bg-no-repeat xl:bg-contain" />

      <motion.div
        style={{ opacity: effectOpacity }}
        className="absolute inset-0 z-10"
      >
        <BackgroundEffect type="rain" />
      </motion.div>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col space-y-10 px-10">
        <h2 className="text-center font-brand text-4xl text-white">
          {t("common_objections.heading")}
        </h2>

        <Accordion defaultValue={t("common_objections.its_not_ours.id")}>
          <AccordionItem
            value={t("common_objections.its_not_ours.id")}
            index="01"
            label={t("common_objections.its_not_ours.label")}
            content={t("common_objections.its_not_ours.content")}
          />
          <AccordionItem
            value={t("common_objections.we_will_make_it_worse.id")}
            index="02"
            label={t("common_objections.we_will_make_it_worse.label")}
            content={t("common_objections.we_will_make_it_worse.content")}
          />
          <AccordionItem
            value={t("common_objections.nothing_we_can_do.id")}
            index="03"
            label={t("common_objections.nothing_we_can_do.label")}
            content={t("common_objections.nothing_we_can_do.content")}
          />
          <AccordionItem
            value={t("common_objections.cannot_consent.id")}
            index="04"
            label={t("common_objections.cannot_consent.label")}
            content={t("common_objections.cannot_consent.content")}
          />
          <AccordionItem
            value={t("common_objections.too_big_of_a_problem.id")}
            index="05"
            label={t("common_objections.too_big_of_a_problem.label")}
            content={t("common_objections.too_big_of_a_problem.content")}
          />
          <AccordionItem
            value={t("common_objections.factory_farming_first.id")}
            index="06"
            label={t("common_objections.factory_farming_first.label")}
            content={t("common_objections.factory_farming_first.content")}
          />
          <AccordionItem
            value={t("common_objections.resources_better_spent_on_humans.id")}
            index="07"
            label={t("common_objections.resources_better_spent_on_humans.label")}
            content={t("common_objections.resources_better_spent_on_humans.content")}
          />
          <AccordionItem
            value={t("common_objections.cant_know_whats_good.id")}
            index="08"
            label={t("common_objections.cant_know_whats_good.label")}
            content={t("common_objections.cant_know_whats_good.content")}
          />
          <AccordionItem
            value={t("common_objections.unintended_consequences.id")}
            index="09"
            label={t("common_objections.unintended_consequences.label")}
            content={t("common_objections.unintended_consequences.content")}
          />
          <AccordionItem
            value={t("common_objections.playing_god.id")}
            index="10"
            label={t("common_objections.playing_god.label")}
            content={t("common_objections.playing_god.content")}
          />
        </Accordion>
      </div>
    </section>
  );
}
