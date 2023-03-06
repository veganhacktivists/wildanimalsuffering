import { useTranslation } from "react-i18next";
import { Resource } from "./resource";

import eightyThousandHoursImage from "./images/podcasts/80000-hours.png";
import knowingAnimalsImage from "./images/podcasts/knowing-animals.jpg";
import philosophyImage from "./images/podcasts/philosophy.png";
import theRealityCheckImage from "./images/podcasts/the-reality-check.jpg";
import wildnessImage from "./images/podcasts/wildness.jpg";

export function Podcasts() {
  const { t } = useTranslation();

  return (
    <>
      <Resource
        imageUrl={knowingAnimalsImage.src}
        title={t("resources.podcasts.knowing_animals.title")}
        links={[
          [
            t("resources.podcasts.cta"),
            "https://podcasts.apple.com/ie/podcast/episode-162-reducing-wild-animal-suffering-with-kyle/id997543452?i=1000513889611",
          ],
        ]}
      >
        {t("resources.podcasts.knowing_animals.description")}
      </Resource>

      <Resource
        imageUrl={wildnessImage.src}
        title={t("resources.podcasts.wildness.title")}
        links={[
          [
            t("resources.podcasts.cta"),
            "https://www.wildanimalinitiative.org/podcast",
          ],
        ]}
      >
        {t("resources.podcasts.wildness.description")}
      </Resource>

      <Resource
        imageUrl={theRealityCheckImage.src}
        title={t("resources.podcasts.the_reality_check.title")}
        links={[
          [
            t("resources.podcasts.cta"),
            "https://www.youtube.com/watch?v=ra1l7SDzvBY",
          ],
        ]}
      >
        {t("resources.podcasts.the_reality_check.description")}
      </Resource>

      <Resource
        imageUrl={eightyThousandHoursImage.src}
        title={t("resources.podcasts.eighty_thousand_hours.title")}
        links={[
          [
            t("resources.podcasts.cta"),
            "https://80000hours.org/podcast/episodes/persis-eskander-wild-animal-welfare/",
          ],
        ]}
      >
        {t("resources.podcasts.eighty_thousand_hours.description")}
      </Resource>

      <Resource
        imageUrl={philosophyImage.src}
        title={t("resources.podcasts.philosophy.title")}
        links={[
          [
            t("resources.podcasts.cta"),
            "https://podcasts.apple.com/no/podcast/kyle-johannsen-wild-animal-ethics-moral-political-problem/id426208821?i=1000504944783",
          ],
        ]}
      >
        {t("resources.podcasts.philosophy.description")}
      </Resource>
    </>
  );
}
