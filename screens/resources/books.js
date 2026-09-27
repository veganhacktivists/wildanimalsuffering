import { useTranslation } from "react-i18next";
import { Resource } from "./resource";

import ethicsImage from "./images/books/ethics.jpg";
import makingAStandImage from "./images/books/making-a-stand.jpg";
import savingAnimalsImage from "./images/books/saving-animals.jpg";
import savingOurselvesImage from "./images/books/saving-ourselves.jpg";
import ufawImage from "./images/books/ufaw.jpg";
import wildSoulsImage from "./images/books/wild-souls.jpg";

const books = [
  {
    id: "ethics",
    image: ethicsImage,
    author: "Kyle Johannsen",
    links: [
      [
        "resources.books.kind.kindle",
        "https://www.amazon.com/Wild-Animal-Ethics-Kyle-Johannsen/dp/0367275708",
      ],
      [
        "resources.books.kind.paperback",
        "https://www.amazon.com/Wild-Animal-Ethics-Kyle-Johannsen/dp/0367275708/",
      ],
      [
        "resources.books.kind.hardcover",
        "https://www.amazon.com/Wild-Animal-Ethics-Political-Suffering/dp/0367275686/",
      ],
    ],
  },
  {
    id: "making_a_stand",
    image: makingAStandImage,
    author: "Oscar Horta",
    links: [
      [
        "resources.books.kind.kindle",
        "https://www.amazon.com/Making-Stand-Animals-Oscar-Horta-ebook/dp/B0B5BCK5XR/",
      ],
      [
        "resources.books.kind.paperback",
        "https://www.amazon.com/Making-Stand-Animals-Oscar-Horta/dp/1032259752/",
      ],
      [
        "resources.books.kind.hardcover",
        "https://www.amazon.com/Making-Stand-Animals-Oscar-Horta/dp/1032259779/",
      ],
    ],
  },
  {
    id: "saving_animals",
    image: savingAnimalsImage,
    author: "Elan Abrell",
    links: [
      [
        "resources.books.kind.kindle",
        "https://www.amazon.com/Saving-Animals-Multispecies-Ecologies-Rescue-ebook/dp/B08ZSRR6SJ/",
      ],
      [
        "resources.books.kind.paperback",
        "https://www.amazon.com/Saving-Animals-Multispecies-Ecologies-Rescue/dp/1517908124/",
      ],
      [
        "resources.books.kind.hardcover",
        "https://www.amazon.com/Saving-Animals-Multispecies-Ecologies-Rescue/dp/1517908116/",
      ],
    ],
  },
  {
    id: "saving_ourselves",
    image: savingOurselvesImage,
    author: "Jeff Sebo",
    links: [
      [
        "resources.books.kind.kindle",
        "https://www.amazon.com/Saving-Animals-Ourselves-Pandemics-Catastrophes-ebook/dp/B09RKHL8QB",
      ],
      [
        "resources.books.kind.audiobook",
        "https://www.amazon.com/Saving-Animals-Ourselves-Pandemics-Catastrophes/dp/B0B3G9DYFH/",
      ],
      [
        "resources.books.kind.hardcover",
        "https://www.amazon.com/Saving-Animals-Ourselves-Pandemics-Catastrophes/dp/0190861010/",
      ],
    ],
  },
  {
    id: "wild_souls",
    image: wildSoulsImage,
    author: "Emma Marris",
    links: [
      [
        "resources.books.kind.kindle",
        "https://www.amazon.com/Wild-Souls-Freedom-Flourishing-Non-Human-ebook/dp/B08WLV5L7X/",
      ],
      [
        "resources.books.kind.paperback",
        "https://www.amazon.com/Wild-Souls-Freedom-Flourishing-Non-Human/dp/163557935X/",
      ],
      [
        "resources.books.kind.hardcover",
        "https://www.amazon.com/Wild-Souls-Freedom-Flourishing-Non-Human/dp/1635574943/",
      ],
    ],
  },
  {
    id: "ufaw",
    image: ufawImage,
    author: "Neville G. Gregory",
    links: [
      [
        "resources.books.kind.kindle",
        "https://www.amazon.com/Physiology-Behaviour-Animal-Suffering-Welfare-ebook/dp/B000VHVXKI/",
      ],
      [
        "resources.books.kind.paperback",
        "https://www.amazon.com/Physiology-Behaviour-Suffering-Neville-Gregory/dp/0632064684/",
      ],
      [
        "resources.books.kind.digital",
        "https://www.amazon.co.uk/Physiology-Behaviour-Suffering-Neville-Gregory/dp/0470752491/",
      ],
    ],
  },
];

export function Books() {
  const { t } = useTranslation();

  return books.map(({ id, image, author, links }) => (
    <Resource
      key={id}
      imageUrl={image.src}
      containThumbnail
      title={t(`resources.books.${id}.title`)}
      subtext={author}
      links={links.map(([label, url]) => [t(label), url])}
    >
      {t(`resources.books.${id}.description`)}
    </Resource>
  ));
}
