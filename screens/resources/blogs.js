import { useTranslation } from "react-i18next";
import { Resource } from "./resource";

import humanityImpactImage from "./images/blogs/humanity-impact.jpg";
import importanceImage from "./images/blogs/importance.jpg";
import potentialSolutionsImage from "./images/blogs/potential-solutions.jpg";
import relevanceImage from "./images/blogs/relevance.jpg";
import waysToReduceImage from "./images/blogs/ways-to-reduce.jpg";
import whyItMattersImage from "./images/blogs/why-it-matters.jpg";
import wildFrontierImage from "./images/blogs/wild-frontier.webp";
import wildfiresImage from "./images/blogs/wildfires.jpg";

export function Blogs() {
  const { t } = useTranslation();

  return (
    <>
      <Resource
        imageUrl={waysToReduceImage.src}
        title={t("resources.blogs.ways_to_reduce.title")}
        links={[
          [
            t("resources.blogs.cta"),
            "https://givingcompass.org/article/ways-to-reduce-wild-animal-suffering/",
          ],
        ]}
      >
        {t("resources.blogs.ways_to_reduce.description")}
      </Resource>
      <Resource
        imageUrl={potentialSolutionsImage.src}
        title={t("resources.blogs.potential_solutions.title")}
        links={[
          [
            t("resources.blogs.cta"),
            "https://faunalytics.org/wild-animal-suffering-potential-solutions-from-crispr/",
          ],
        ]}
      >
        {t("resources.blogs.potential_solutions.description")}
      </Resource>
      <Resource
        imageUrl={relevanceImage.src}
        title={t("resources.blogs.relevance.title")}
        links={[
          [
            t("resources.blogs.cta"),
            "https://centerforreducingsuffering.org/sentience-politics-series-introduction/the-relevance-of-wild-animal-suffering/",
          ],
        ]}
      >
        {t("resources.blogs.relevance.description")}
      </Resource>
      <Resource
        imageUrl={humanityImpactImage.src}
        title={t("resources.blogs.humanity_impact.title")}
        links={[
          [
            t("resources.blogs.cta"),
            "https://effectivethesis.org/humanitys-impact-wild-animal-suffering/",
          ],
        ]}
      >
        {t("resources.blogs.humanity_impact.description")}
      </Resource>
      <Resource
        imageUrl={importanceImage.src}
        title={t("resources.blogs.importance.title")}
        links={[
          [
            t("resources.blogs.cta"),
            "https://longtermrisk.org/the-importance-of-wild-animal-suffering/",
          ],
        ]}
      >
        {t("resources.blogs.importance.description")}
      </Resource>
      <Resource
        imageUrl={whyItMattersImage.src}
        title={t("resources.blogs.why_it_matters.title")}
        links={[
          [
            t("resources.blogs.cta"),
            "https://www.animal-ethics.org/wild-animal-suffering-matters/",
          ],
        ]}
      >
        {t("resources.blogs.why_it_matters.description")}
      </Resource>
      <Resource
        imageUrl={wildfiresImage.src}
        title={t("resources.blogs.wildfires.title")}
        links={[
          [
            t("resources.blogs.cta"),
            "https://faunalytics.org/wildfires-and-animal-protection-towards-better-intervention-strategies/",
          ],
        ]}
      >
        {t("resources.blogs.wildfires.description")}
      </Resource>
      <Resource
        imageUrl={wildFrontierImage.src}
        title={t("resources.blogs.wild_frontier.title")}
        links={[
          [
            t("resources.blogs.cta"),
            "https://www.vox.com/the-highlight/22325435/animal-welfare-wild-animals-movement",
          ],
        ]}
      >
        {t("resources.blogs.wild_frontier.description")}
      </Resource>
    </>
  );
}
