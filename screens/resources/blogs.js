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
  return (
    <>
      <Resource
        imageUrl={waysToReduceImage}
        title="Ways To Reduce Wild Animal Suffering"
        links={[
          [
            "Read",
            "https://givingcompass.org/article/ways-to-reduce-wild-animal-suffering/",
          ],
        ]}
      >
        If we hope to help the approximately trillions of vertebrates and
        quintillions of invertebrates in the wild, we need to be prepared for a
        long, uphill path to success. Wild animal suffering (WAS) is not just
        contentious; it&apos;s also extremely complex.
      </Resource>
      <Resource
        imageUrl={potentialSolutionsImage}
        title="Wild Animal Suffering: Potential Solutions From CRISPR"
        links={[
          [
            "Read",
            "https://faunalytics.org/wild-animal-suffering-potential-solutions-from-crispr/",
          ],
        ]}
      >
        Most animal activists have no problem with intervention in nature in
        order to prevent or reduce harm caused by humans. Breeding programs to
        help species&apos; recovery from poaching or habitat loss, for example,
        are relatively uncontroversial practices.
      </Resource>
      <Resource
        imageUrl={relevanceImage}
        title="The Relevance of Wild Animal Suffering"
        links={[
          [
            "Read",
            "https://centerforreducingsuffering.org/sentience-politics-series-introduction/the-relevance-of-wild-animal-suffering/",
          ],
        ]}
      >
        Society has become increasingly aware of the suffering that nonhuman
        animals experience at the hands of humans. Many are aware of the
        shocking realities of factory farming, or have seen terrible videos and
        images of animals being neglected and abused.
      </Resource>
      <Resource
        imageUrl={humanityImpactImage}
        title="Humanity's Impact on Wild-Animal Suffering"
        links={[
          [
            "Read",
            "https://effectivethesis.org/humanitys-impact-wild-animal-suffering/",
          ],
        ]}
      >
        There is a chance that right now many trillions or quintillions of wild
        animals are experiencing lives that include terrible suffering. For many
        animals the threat of predation is nearly constant, which, in more
        brutal terms, is the prospect of experiencing the horror and pain of
        being eaten alive.
      </Resource>
      <Resource
        imageUrl={importanceImage}
        title="The Importance of Wild-Animal Suffering"
        links={[
          [
            "Read",
            "https://longtermrisk.org/the-importance-of-wild-animal-suffering/",
          ],
        ]}
      >
        The number of wild animals vastly exceeds that of animals on factory
        farms, in laboratories, or kept as pets. Therefore, animal advocates
        should consider focusing their efforts to raise concern about the
        suffering that occurs in the natural environment.
      </Resource>
      <Resource
        imageUrl={whyItMattersImage}
        title="Why wild animal suffering matters"
        links={[
          [
            "Read",
            "https://www.animal-ethics.org/wild-animal-suffering-matters/",
          ],
        ]}
      >
        Many people have a rosy view of the wild. Some think nonhuman animals
        live in some kind of paradise in the wild. However, animals living in
        nature have lives that are far from idyllic, and most of them have to
        deal with the reality of constant threat of tremendous suffering.
      </Resource>
      <Resource
        imageUrl={wildfiresImage}
        title="Wildfires And Animal Protection: Towards Better Intervention Strategies"
        links={[
          [
            "Read",
            "https://faunalytics.org/wildfires-and-animal-protection-towards-better-intervention-strategies/",
          ],
        ]}
      >
        Beyond the human suffering caused by fires, they also impact countless
        wild animals by causing distress, injuries, and a wide range of
        physiological and behavioral changes.
      </Resource>
      <Resource
        imageUrl={wildFrontierImage}
        title="The Wild Frontier of Animal Welfare"
        links={[
          [
            "Read",
            "https://www.vox.com/the-highlight/22325435/animal-welfare-wild-animals-movement",
          ],
        ]}
      >
        The most emotionally difficult moment in Mal Graham&apos;s life was when
        five snakes in her lab died. They had started a doctoral program
        studying jumping and flying snakes. There are several species of snakes
        that not only live in trees but can leap from one to the next.
      </Resource>
    </>
  );
}
