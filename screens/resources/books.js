import { useTranslation } from "react-i18next";
import { Resource } from "./resource";

import ethicsImage from "./images/books/ethics.jpg";
import makingAStandImage from "./images/books/making-a-stand.jpg";
import savingAnimalsImage from "./images/books/saving-animals.jpg";
import savingOurselvesImage from "./images/books/saving-ourselves.jpg";
import ufawImage from "./images/books/ufaw.jpg";
import wildSoulsImage from "./images/books/wild-souls.jpg";

export function Books() {
  const { t } = useTranslation();

  return (
    <>
      <Resource
        imageUrl={ethicsImage.src}
        containThumbnail
        title={t("resources.books.ethics.title")}
        subtext="Kyle Johannsen"
        links={[
          [
            t("resources.books.kind.kindle"),
            "https://www.amazon.com/Wild-Animal-Ethics-Kyle-Johannsen/dp/0367275708",
          ],
          [
            t("resources.books.kind.paperback"),
            "https://www.amazon.com/Wild-Animal-Ethics-Kyle-Johannsen/dp/0367275708/",
          ],
          [
            t("resources.books.kind.hardcover"),
            "https://www.amazon.com/Wild-Animal-Ethics-Political-Suffering/dp/0367275686/",
          ],
        ]}
      >
        {t("resources.books.ethics.description")}
      </Resource>
      <Resource
        imageUrl={makingAStandImage.src}
        containThumbnail
        title={t("resources.books.making_a_stand.title")}
        subtext="Oscar Horta"
        links={[
          [
            t("resources.books.kind.kindle"),
            "https://www.amazon.com/Making-Stand-Animals-Oscar-Horta-ebook/dp/B0B5BCK5XR/",
          ],
          [
            t("resources.books.kind.paperback"),
            "https://www.amazon.com/Making-Stand-Animals-Oscar-Horta/dp/1032259752/",
          ],
          [
            t("resources.books.kind.hardcover"),
            "https://www.amazon.com/Making-Stand-Animals-Oscar-Horta/dp/1032259779/",
          ],
        ]}
      >
        {t("resources.books.making_a_stand.description")}
      </Resource>
      <Resource
        imageUrl={savingAnimalsImage.src}
        containThumbnail
        title={t("resources.books.saving_animals.title")}
        subtext="Elan Abrell"
        links={[
          [
            t("resources.books.kind.kindle"),
            "https://www.amazon.com/Saving-Animals-Multispecies-Ecologies-Rescue-ebook/dp/B08ZSRR6SJ/",
          ],
          [
            t("resources.books.kind.paperback"),
            "https://www.amazon.com/Saving-Animals-Multispecies-Ecologies-Rescue/dp/1517908124/",
          ],
          [
            t("resources.books.kind.hardcover"),
            "https://www.amazon.com/Saving-Animals-Multispecies-Ecologies-Rescue/dp/1517908116/",
          ],
        ]}
      >
        {t("resources.books.saving_animals.description")}
      </Resource>
      <Resource
        imageUrl={savingOurselvesImage.src}
        containThumbnail
        title={t("resources.books.saving_ourselves.title")}
        subtext="Jeff Sebo"
        links={[
          [
            t("resources.books.kind.kindle"),
            "https://www.amazon.com/Saving-Animals-Ourselves-Pandemics-Catastrophes-ebook/dp/B09RKHL8QB",
          ],
          [
            "Audiobook",
            "https://www.amazon.com/Saving-Animals-Ourselves-Pandemics-Catastrophes/dp/B0B3G9DYFH/",
          ],
          [
            t("resources.books.kind.hardcover"),
            "https://www.amazon.com/Saving-Animals-Ourselves-Pandemics-Catastrophes/dp/0190861010/",
          ],
        ]}
      >
        {t("resources.books.saving_ourselves.description")}
      </Resource>
      <Resource
        imageUrl={wildSoulsImage.src}
        containThumbnail
        title={t("resources.books.wild_souls.title")}
        subtext="Emma Marris"
        links={[
          [
            t("resources.books.kind.kindle"),
            "https://www.amazon.com/Wild-Souls-Freedom-Flourishing-Non-Human-ebook/dp/B08WLV5L7X/",
          ],
          [
            t("resources.books.kind.paperback"),
            "https://www.amazon.com/Wild-Souls-Freedom-Flourishing-Non-Human/dp/163557935X/",
          ],
          [
            t("resources.books.kind.hardcover"),
            "https://www.amazon.com/Wild-Souls-Freedom-Flourishing-Non-Human/dp/1635574943/",
          ],
        ]}
      >
        {t("resources.books.wild_souls.description")}
      </Resource>
      <Resource
        imageUrl={ufawImage.src}
        containThumbnail
        title={t("resources.books.ufaw.title")}
        subtext="Neville G. Gregory"
        links={[
          [
            t("resources.books.kind.kindle"),
            "https://www.amazon.com/Physiology-Behaviour-Animal-Suffering-Welfare-ebook/dp/B000VHVXKI/",
          ],
          [
            t("resources.books.kind.paperback"),
            "https://www.amazon.com/Physiology-Behaviour-Suffering-Neville-Gregory/dp/0632064684/",
          ],
          [
            t("resources.books.kind.digital"),
            "https://www.amazon.co.uk/Physiology-Behaviour-Suffering-Neville-Gregory/dp/0470752491/",
          ],
        ]}
      >
        {t("resources.books.ufaw.description")}
      </Resource>
    </>
  );
}
