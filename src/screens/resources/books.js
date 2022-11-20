import { Resource } from "./resource";

export function Books() {
  return (
    <>
      <Resource
        thumbnail="books/ethics.jpg"
        containThumbnail
        title="Wild Animal Ethics"
        subtext="Kyle Johannsen"
        links={[
          [
            "Kindle",
            "https://www.amazon.com/Wild-Animal-Ethics-Kyle-Johannsen/dp/0367275708",
          ],
          [
            "Paperback",
            "https://www.amazon.com/Wild-Animal-Ethics-Kyle-Johannsen/dp/0367275708/",
          ],
          [
            "Hardcover",
            "https://www.amazon.com/Wild-Animal-Ethics-Political-Suffering/dp/0367275686/",
          ],
        ]}
      >
        Though many ethicists have the intuition that we should leave nature
        alone, Kyle Johannsen argues that we have a duty to research safe ways
        of providing large-scale assistance to wild animals. Using concepts from
        moral and political philosophy to analyze the issue of wild animal
        suffering (WAS), Johannsen explores how a collective, institutional
        obligation to assist wild animals should be understood.
      </Resource>
      <Resource
        thumbnail="books/making-a-stand.jpg"
        containThumbnail
        title="Making a Stand for Animals"
        subtext="Oscar Horta"
        links={[
          [
            "Kindle",
            "https://www.amazon.com/Making-Stand-Animals-Oscar-Horta-ebook/dp/B0B5BCK5XR/",
          ],
          [
            "Paperback",
            "https://www.amazon.com/Making-Stand-Animals-Oscar-Horta/dp/1032259752/",
          ],
          [
            "Hardcover",
            "https://www.amazon.com/Making-Stand-Animals-Oscar-Horta/dp/1032259779/",
          ],
        ]}
      >
        Engaging and thought-provoking, this book examines how humans see and
        treat other animals and argues that we should extend equal consideration
        and respect to all beings, human and nonhuman alike. Our world is
        plighted by "isms" such as racism and sexism, but we may have overlooked
        a very important one: speciesism.
      </Resource>
      <Resource
        thumbnail="books/saving-animals.jpg"
        containThumbnail
        title="Saving Animals"
        subtext="Elan Abrell"
        links={[
          [
            "Kindle",
            "https://www.amazon.com/Saving-Animals-Multispecies-Ecologies-Rescue-ebook/dp/B08ZSRR6SJ/",
          ],
          [
            "Paperback",
            "https://www.amazon.com/Saving-Animals-Multispecies-Ecologies-Rescue/dp/1517908124/",
          ],
          [
            "Hardcover",
            "https://www.amazon.com/Saving-Animals-Multispecies-Ecologies-Rescue/dp/1517908116/",
          ],
        ]}
      >
        In the past three decades, animal rights advocates have established
        everything from elephant sanctuaries in Africa to shelters that
        rehabilitate animals used in medical testing, to homes for farmed
        animals, abandoned pets, and entertainment animals that have outlived
        their “usefulness.” Saving Animals is the first major ethnography to
        focus on the ethical issues animating the establishment of such places,
        where animals who have been mistreated or destined for slaughter are
        allowed to live out their lives simply being animals.
      </Resource>
      <Resource
        thumbnail="books/saving-ourselves.jpg"
        containThumbnail
        title="Saving Animals, Saving Ourselves"
        subtext="Jeff Sebo"
        links={[
          [
            "Kindle",
            "https://www.amazon.com/Saving-Animals-Ourselves-Pandemics-Catastrophes-ebook/dp/B09RKHL8QB",
          ],
          [
            "Audiobook",
            "https://www.amazon.com/Saving-Animals-Ourselves-Pandemics-Catastrophes/dp/B0B3G9DYFH/",
          ],
          [
            "Hardcover",
            "https://www.amazon.com/Saving-Animals-Ourselves-Pandemics-Catastrophes/dp/0190861010/",
          ],
        ]}
      >
        In 2020, COVID-19, the Australia bushfires, and other global threats
        served as vivid reminders that human and nonhuman fates are increasingly
        linked. Human use of nonhuman animals contributes to pandemics, climate
        change, and other global threats which, in turn, contribute to
        biodiversity loss, ecosystem collapse, and nonhuman suffering.
      </Resource>
      <Resource
        thumbnail="books/wild-souls.jpg"
        containThumbnail
        title="Wild Souls"
        subtext="Emma Marris"
        links={[
          [
            "Kindle",
            "https://www.amazon.com/Wild-Souls-Freedom-Flourishing-Non-Human-ebook/dp/B08WLV5L7X/",
          ],
          [
            "Paperback",
            "https://www.amazon.com/Wild-Souls-Freedom-Flourishing-Non-Human/dp/163557935X/",
          ],
          [
            "Hardcover",
            "https://www.amazon.com/Wild-Souls-Freedom-Flourishing-Non-Human/dp/1635574943/",
          ],
        ]}
      >
        Protecting wild animals and preserving the environment are two ideals so
        seemingly compatible as to be almost inseparable. But in fact, between
        animal welfare and conservation science there exists a space of
        underexamined and unresolved tension: wildness itself. When is it right
        to capture or feed wild animals for the good of their species?
      </Resource>
    </>
  );
}
