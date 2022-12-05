import { Resource } from "./resource";

export function Websites() {
  return (
    <>
      <Resource
        thumbnail="/websites/effective-altruism.png"
        title="Effective Altruism"
        links={[
          ["Visit", "https://www.effectivealtruism.org/"],
          [
            "Donate",
            "https://www.givingwhatwecan.org/funds/effective-altruism-funds",
          ],
        ]}
      >
        Effective altruism is a project that aims to find the best ways to help
        others, and put them into practice. It's both a research field, which
        aims to identify the world's most pressing problems and the best
        solutions to them, and a practical community that aims to use those
        findings to do good.
      </Resource>

      <Resource
        thumbnail="/websites/reducing-suffering.jpg"
        title="Reducing Suffering"
        links={[
          ["Visit", "https://reducing-suffering.org/"],
          ["Donate", "https://reducing-suffering.org/donation-recommendations"],
        ]}
      >
        This site contains writings on the topic of reducing suffering,
        including the suffering of non-human animals and far-future beings. Most
        content is by Brian Tomasik, though a few pieces are written by others.
      </Resource>

      <Resource
        thumbnail="/websites/animal-charity-evaluators.png"
        title="Animal Charity Evaluators"
        links={[
          ["Visit", "https://animalcharityevaluators.org"],
          ["Donate", "https://animalcharityevaluators.org/donate"],
        ]}
      >
        Animal Charity Evaluators began in 2012 under the name Effective Animal
        Activism (EAA), as a division of the U.K.-based charity 80,000 Hours—an
        organization dedicated to providing career advice to people who want to
        be highly impactful in their work.
      </Resource>

      <Resource
        thumbnail="/websites/center-for-reducing-suffering.png"
        title="Center For Reducing Suffering"
        links={[
          ["Visit", "https://centerforreducingsuffering.org"],
          ["Donate", "https://centerforreducingsuffering.org/donate"],
        ]}
      >
        The Center for Reducing Suffering (CRS) is a research center that works
        to create a future with less suffering, with a focus on reducing the
        most intense suffering.
      </Resource>

      <Resource
        thumbnail="/websites/world-animal-protection.png"
        title="World Animal Protection"
        links={[
          ["Visit", "https://www.worldanimalprotection.us/"],
          [
            "Donate",
            "https://secure.worldanimalprotection.us/NN8cva8NRkWWp1lwkeePCg2",
          ],
        ]}
      >
        "We protect the world's animals. We always have done, and we always
        will." World Animal Protections is working on the ground with local
        partners for greatest effect, we are active in more than 50 countries.
      </Resource>

      <Resource
        thumbnail="/websites/animal-advocacy-careers.png"
        title="Animal Advocacy Careers"
        links={[
          ["Visit", "https://www.animaladvocacycareers.org/"],
          ["Donate", "https://www.animaladvocacycareers.org/donate"],
        ]}
      >
        Animal Advocacy Careers (AAC) is an organisation that seeks to address
        the career and talent bottlenecks in the animal advocacy movement,
        especially the farmed animal movement. We provide careers services for
        individuals at all levels of experience with animal advocacy.
      </Resource>

      <Resource
        thumbnail="/websites/80000-hours.png"
        title="80000 Hours"
        links={[
          ["Visit", "https://80000hours.org/"],
          ["Donate", "https://80000hours.org/support-us/donate"],
        ]}
      >
        You have about 80,000 working hours in your career: 40 years x 50 weeks
        x 40 hours. If you want to have a positive impact with your life, your
        choice of career is probably your best opportunity to do that. That
        means it's worth thinking hard about how to use this time most
        effectively.
      </Resource>
    </>
  );
}
