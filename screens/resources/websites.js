import { useTranslation } from "react-i18next";
import { Resource } from "./resource";

import eightyThousandHoursImage from "./images/websites/80000-hours.png";
import animalAdvocacyCareersImage from "./images/websites/animal-advocacy-careers.png";
import animalCharityEvaluatorsImage from "./images/websites/animal-charity-evaluators.png";
import centerForReducingSufferingImage from "./images/websites/center-for-reducing-suffering.png";
import effectiveAltruismImage from "./images/websites/effective-altruism.png";
import reducingSufferingImage from "./images/websites/reducing-suffering.jpg";
import worldAnimalProtectionImage from "./images/websites/world-animal-protection.png";

const websites = [
  {
    id: "effective_altruism",
    image: effectiveAltruismImage,
    links: [
      ["resources.websites.cta.visit", "https://www.effectivealtruism.org/"],
      ["resources.websites.cta.donate", "https://funds.effectivealtruism.org/"],
    ],
  },
  {
    id: "reducing_suffering",
    image: reducingSufferingImage,
    links: [
      ["resources.websites.cta.visit", "https://reducing-suffering.org/"],
      [
        "resources.websites.cta.donate",
        "https://reducing-suffering.org/donation-recommendations",
      ],
    ],
  },
  {
    id: "animal_charity_evaluators",
    image: animalCharityEvaluatorsImage,
    links: [
      ["resources.websites.cta.visit", "https://animalcharityevaluators.org"],
      [
        "resources.websites.cta.donate",
        "https://animalcharityevaluators.org/donate",
      ],
    ],
  },
  {
    id: "center_for_reducing_suffering",
    image: centerForReducingSufferingImage,
    links: [
      [
        "resources.websites.cta.visit",
        "https://centerforreducingsuffering.org",
      ],
      [
        "resources.websites.cta.donate",
        "https://centerforreducingsuffering.org/donate",
      ],
    ],
  },
  {
    id: "world_animal_protection",
    image: worldAnimalProtectionImage,
    links: [
      ["resources.websites.cta.visit", "https://www.worldanimalprotection.us/"],
      [
        "resources.websites.cta.donate",
        "https://secure.worldanimalprotection.us/NN8cva8NRkWWp1lwkeePCg2",
      ],
    ],
  },
  {
    id: "animal_advocacy_careers",
    image: animalAdvocacyCareersImage,
    links: [
      [
        "resources.websites.cta.visit",
        "https://www.animaladvocacycareers.org/",
      ],
      [
        "resources.websites.cta.donate",
        "https://www.animaladvocacycareers.org/donate",
      ],
    ],
  },
  {
    id: "eighty_thousand_hours",
    image: eightyThousandHoursImage,
    links: [
      ["resources.websites.cta.visit", "https://80000hours.org/"],
      [
        "resources.websites.cta.donate",
        "https://80000hours.org/support-us/donate",
      ],
    ],
  },
];

export function Websites() {
  const { t } = useTranslation();

  return websites.map(({ id, image, links }) => (
    <Resource
      key={id}
      imageUrl={image.src}
      title={t(`resources.websites.${id}.title`)}
      links={links.map(([label, url]) => [t(label), url])}
    >
      {t(`resources.websites.${id}.description`)}
    </Resource>
  ));
}
