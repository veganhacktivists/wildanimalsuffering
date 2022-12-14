import { Resource } from "./resource";

import eightyThousandHoursImage from "./images/websites/80000-hours.png";
import animalAdvocacyCareersImage from "./images/websites/animal-advocacy-careers.png";
import animalCharityEvaluatorsImage from "./images/websites/animal-charity-evaluators.png";
import centerForReducingSufferingImage from "./images/websites/center-for-reducing-suffering.png";
import effectiveAltruismImage from "./images/websites/effective-altruism.png";
import reducingSufferingImage from "./images/websites/reducing-suffering.jpg";
import worldAnimalProtectionImage from "./images/websites/world-animal-protection.png";

export function Websites() {
  return (
    <>
      <Resource
        imageUrl={effectiveAltruismImage}
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
        others, and put them into practice. It&apos;s both a research field,
        which aims to identify the world&apos;s most pressing problems and the
        best solutions to them, and a practical community that aims to use those
        findings to do good.
      </Resource>

      <Resource
        imageUrl={reducingSufferingImage}
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
        imageUrl={animalCharityEvaluatorsImage}
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
        imageUrl={centerForReducingSufferingImage}
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
        imageUrl={worldAnimalProtectionImage}
        title="World Animal Protection"
        links={[
          ["Visit", "https://www.worldanimalprotection.us/"],
          [
            "Donate",
            "https://secure.worldanimalprotection.us/NN8cva8NRkWWp1lwkeePCg2",
          ],
        ]}
      >
        &quot;We protect the world&apos;s animals. We always have done, and we
        always will.&quot; World Animal Protections is working on the ground
        with local partners for greatest effect, we are active in more than 50
        countries.
      </Resource>

      <Resource
        imageUrl={animalAdvocacyCareersImage}
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
        imageUrl={eightyThousandHoursImage}
        title="80000 Hours"
        links={[
          ["Visit", "https://80000hours.org/"],
          ["Donate", "https://80000hours.org/support-us/donate"],
        ]}
      >
        You have about 80,000 working hours in your career: 40 years x 50 weeks
        x 40 hours. If you want to have a positive impact with your life, your
        choice of career is probably your best opportunity to do that. That
        means it&apos;s worth thinking hard about how to use this time most
        effectively.
      </Resource>
    </>
  );
}
