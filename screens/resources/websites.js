import { useTranslation } from "react-i18next";
import { Resource } from "./resource";

import eightyThousandHoursImage from "./images/websites/80000-hours.png";
import animalAdvocacyCareersImage from "./images/websites/animal-advocacy-careers.png";
import animalCharityEvaluatorsImage from "./images/websites/animal-charity-evaluators.png";
import centerForReducingSufferingImage from "./images/websites/center-for-reducing-suffering.png";
import effectiveAltruismImage from "./images/websites/effective-altruism.png";
import reducingSufferingImage from "./images/websites/reducing-suffering.jpg";
import worldAnimalProtectionImage from "./images/websites/world-animal-protection.png";

export function Websites() {
  const { t } = useTranslation();

  return (
    <>
      <Resource
        imageUrl={effectiveAltruismImage.src}
        title={t("resources.websites.effective_altruism.title")}
        links={[
          [
            t("resources.websites.cta.visit"),
            "https://www.effectivealtruism.org/",
          ],
          [
            t("resources.websites.cta.donate"),
            "https://www.givingwhatwecan.org/funds/effective-altruism-funds",
          ],
        ]}
      >
        {t("resources.websites.effective_altruism.description")}
      </Resource>

      <Resource
        imageUrl={reducingSufferingImage.src}
        title={t("resources.websites.reducing_suffering.title")}
        links={[
          [
            t("resources.websites.cta.visit"),
            "https://reducing-suffering.org/",
          ],
          [
            t("resources.websites.cta.donate"),
            "https://reducing-suffering.org/donation-recommendations",
          ],
        ]}
      >
        {t("resources.websites.reducing_suffering.description")}
      </Resource>

      <Resource
        imageUrl={animalCharityEvaluatorsImage.src}
        title={t("resources.websites.animal_charity_evaluators.title")}
        links={[
          [
            t("resources.websites.cta.visit"),
            "https://animalcharityevaluators.org",
          ],
          [
            t("resources.websites.cta.donate"),
            "https://animalcharityevaluators.org/donate",
          ],
        ]}
      >
        {t("resources.websites.animal_charity_evaluators.description")}
      </Resource>

      <Resource
        imageUrl={centerForReducingSufferingImage.src}
        title={t("resources.websites.center_for_reducing_suffering.title")}
        links={[
          [
            t("resources.websites.cta.visit"),
            "https://centerforreducingsuffering.org",
          ],
          [
            t("resources.websites.cta.donate"),
            "https://centerforreducingsuffering.org/donate",
          ],
        ]}
      >
        {t("resources.websites.center_for_reducing_suffering.description")}
      </Resource>

      <Resource
        imageUrl={worldAnimalProtectionImage.src}
        title={t("resources.websites.world_animal_protection.title")}
        links={[
          [
            t("resources.websites.cta.visit"),
            "https://www.worldanimalprotection.us/",
          ],
          [
            t("resources.websites.cta.donate"),
            "https://secure.worldanimalprotection.us/NN8cva8NRkWWp1lwkeePCg2",
          ],
        ]}
      >
        {t("resources.websites.world_animal_protection.description")}
      </Resource>

      <Resource
        imageUrl={animalAdvocacyCareersImage.src}
        title={t("resources.websites.animal_advocacy_careers.title")}
        links={[
          [
            t("resources.websites.cta.visit"),
            "https://www.animaladvocacycareers.org/",
          ],
          [
            t("resources.websites.cta.donate"),
            "https://www.animaladvocacycareers.org/donate",
          ],
        ]}
      >
        {t("resources.websites.animal_advocacy_careers.description")}
      </Resource>

      <Resource
        imageUrl={eightyThousandHoursImage.src}
        title={t("resources.websites.eighty_thousand_hours.title")}
        links={[
          [t("resources.websites.cta.visit"), "https://80000hours.org/"],
          [
            t("resources.websites.cta.donate"),
            "https://80000hours.org/support-us/donate",
          ],
        ]}
      >
        {t("resources.websites.eighty_thousand_hours.description")}
      </Resource>
    </>
  );
}
