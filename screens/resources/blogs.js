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

const blogs = [
  {
    id: "ways_to_reduce",
    image: waysToReduceImage,
    links: [
      [
        "resources.blogs.cta",
        "https://givingcompass.org/article/ways-to-reduce-wild-animal-suffering/",
      ],
    ],
  },
  {
    id: "potential_solutions",
    image: potentialSolutionsImage,
    links: [
      [
        "resources.blogs.cta",
        "https://faunalytics.org/wild-animal-suffering-potential-solutions-from-crispr/",
      ],
    ],
  },
  {
    id: "relevance",
    image: relevanceImage,
    links: [
      [
        "resources.blogs.cta",
        "https://centerforreducingsuffering.org/sentience-politics-series-introduction/the-relevance-of-wild-animal-suffering/",
      ],
    ],
  },
  {
    id: "humanity_impact",
    image: humanityImpactImage,
    links: [
      [
        "resources.blogs.cta",
        "https://web.archive.org/web/20180319171619/http://effectivethesis.com/humanitys-impact-wild-animal-suffering/",
      ],
    ],
  },
  {
    id: "importance",
    image: importanceImage,
    links: [
      [
        "resources.blogs.cta",
        "https://longtermrisk.org/the-importance-of-wild-animal-suffering/",
      ],
    ],
  },
  {
    id: "why_it_matters",
    image: whyItMattersImage,
    links: [
      [
        "resources.blogs.cta",
        "https://www.animal-ethics.org/wild-animal-suffering-matters/",
      ],
    ],
  },
  {
    id: "wildfires",
    image: wildfiresImage,
    links: [
      [
        "resources.blogs.cta",
        "https://faunalytics.org/wildfires-and-animal-protection-towards-better-intervention-strategies/",
      ],
    ],
  },
  {
    id: "wild_frontier",
    image: wildFrontierImage,
    links: [
      [
        "resources.blogs.cta",
        "https://www.vox.com/the-highlight/22325435/animal-welfare-wild-animals-movement",
      ],
    ],
  },
];

export function Blogs() {
  const { t } = useTranslation();

  return blogs.map(({ id, image, links }) => (
    <Resource
      key={id}
      imageUrl={image.src}
      title={t(`resources.blogs.${id}.title`)}
      links={links.map(([label, url]) => [t(label), url])}
    >
      {t(`resources.blogs.${id}.description`)}
    </Resource>
  ));
}
