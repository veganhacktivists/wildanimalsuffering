import { Trans, useTranslation } from "react-i18next";
import { DialogItem } from "./dialog-item";

import accidentsImage from "./images/accidents.png";
import anthropogenicHarmsImage from "./images/anthropogenic-harms.png";
import diseaseAndParasitismImage from "./images/disease-and-parasitism.png";
import harmfulWeatherConditionsImage from "./images/harmful-weather-conditions.png";
import naturalDisastersImage from "./images/natural-disasters.png";
import predationImage from "./images/predation.png";
import thirstAndStarvationImage from "./images/thirst-and-starvation.png";

export function TypesOfSuffering() {
  const { t } = useTranslation();

  return (
    <section
      id={t("types_of_suffering.id")}
      className="relative flex min-h-screen items-center bg-sand bg-cover bg-center py-24"
    >
      <div className="absolute bottom-0 h-full w-full bg-deer bg-left-bottom bg-no-repeat xl:bg-contain" />

      <div className="mx-auto flex w-full max-w-7xl flex-col space-y-10 px-10">
        <h2 className="flex flex-col text-center font-brand text-4xl text-white">
          <Trans i18nKey="types_of_suffering.heading">
            <span>Even Worse,</span>
            <span>Wild Animals Suffer in Terrible Ways:</span>
          </Trans>
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          <DialogItem
            imageUrl={thirstAndStarvationImage.src}
            title={t("types_of_suffering.thirst_and_starvation.title")}
            description={t(
              "types_of_suffering.thirst_and_starvation.description",
            )}
            link="https://www.animal-ethics.org/malnutrition-thirst-wild-animals/"
          />
          <DialogItem
            imageUrl={predationImage.src}
            title={t("types_of_suffering.predation.title")}
            description={t("types_of_suffering.predation.description")}
            link="https://www.animal-ethics.org/interspecific-conflict/"
          />
          <DialogItem
            imageUrl={diseaseAndParasitismImage.src}
            title={t("types_of_suffering.disease_and_parasitism.title")}
            description={t(
              "types_of_suffering.disease_and_parasitism.description",
            )}
            link="https://www.animal-ethics.org/diseases-nature/"
          />
          <DialogItem
            imageUrl={harmfulWeatherConditionsImage.src}
            title={t("types_of_suffering.harmful_weather_conditions.title")}
            description={t(
              "types_of_suffering.harmful_weather_conditions.description",
            )}
            link="https://www.animal-ethics.org/weather-conditions-nonhuman-animals/"
          />
          <DialogItem
            imageUrl={naturalDisastersImage.src}
            title={t("types_of_suffering.natural_disasters.title")}
            description={t("types_of_suffering.natural_disasters.description")}
            link="https://www.animal-ethics.org/animals-natural-disasters/"
          />
          <DialogItem
            imageUrl={accidentsImage.src}
            title={t("types_of_suffering.accidents.title")}
            description={t("types_of_suffering.accidents.description")}
            link="https://www.animal-ethics.org/rescuing-trapped-animals/"
          />
          <DialogItem
            imageUrl={anthropogenicHarmsImage.src}
            title={t("types_of_suffering.anthropogenic_harms.title")}
            description={t(
              "types_of_suffering.anthropogenic_harms.description",
            )}
            link="https://forum.effectivealtruism.org/posts/8qmQr7kiEYFhX9eTR/what-is-wild-animal-suffering"
          />
        </div>
        <p className="z-10 text-center text-white">
          {t("types_of_suffering.hint")}
        </p>
      </div>
    </section>
  );
}
