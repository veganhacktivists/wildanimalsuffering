import { useTranslation } from "react-i18next";
import { Resource } from "./resource";

import eightyThousandHoursImage from "./images/podcasts/80000-hours.png";
import knowingAnimalsImage from "./images/podcasts/knowing-animals.jpg";
import philosophyImage from "./images/podcasts/philosophy.png";
import theRealityCheckImage from "./images/podcasts/the-reality-check.jpg";
import wildnessImage from "./images/podcasts/wildness.jpg";

const podcasts = [
  {
    id: "knowing_animals",
    image: knowingAnimalsImage,
    links: [
      [
        "resources.podcasts.cta",
        "https://podcasts.apple.com/ie/podcast/episode-162-reducing-wild-animal-suffering-with-kyle/id997543452?i=1000513889611",
      ],
    ],
  },
  {
    id: "wildness",
    image: wildnessImage,
    links: [
      [
        "resources.podcasts.cta",
        "https://www.wildanimalinitiative.org/podcast",
      ],
    ],
  },
  {
    id: "the_reality_check",
    image: theRealityCheckImage,
    links: [
      ["resources.podcasts.cta", "https://www.youtube.com/watch?v=ra1l7SDzvBY"],
    ],
  },
  {
    id: "eighty_thousand_hours",
    image: eightyThousandHoursImage,
    links: [
      [
        "resources.podcasts.cta",
        "https://80000hours.org/podcast/episodes/persis-eskander-wild-animal-welfare/",
      ],
    ],
  },
  {
    id: "philosophy",
    image: philosophyImage,
    links: [
      [
        "resources.podcasts.cta",
        "https://podcasts.apple.com/no/podcast/kyle-johannsen-wild-animal-ethics-moral-political-problem/id426208821?i=1000504944783",
      ],
    ],
  },
];

export function Podcasts() {
  const { t } = useTranslation();

  return podcasts.map(({ id, image, links }) => (
    <Resource
      key={id}
      imageUrl={image.src}
      title={t(`resources.podcasts.${id}.title`)}
      links={links.map(([label, url]) => [t(label), url])}
    >
      {t(`resources.podcasts.${id}.description`)}
    </Resource>
  ));
}
