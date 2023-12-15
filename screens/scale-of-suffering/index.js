import { useTranslation } from "react-i18next";
import { FarmedAnimals } from "./farmed-animals";
import { FarmedAnimalsMobile } from "./farmed-animals-mobile";
import { WildAnimals } from "./wild-animals";
import { WildAnimalsMobile } from "./wild-animals-mobile";
import abyssImage from "./images/abyss.jpg";

export function ScaleOfSuffering() {
  const { t } = useTranslation();

  return (
    <section
      id={t("scale_of_suffering.id")}
      className="relative min-h-screen w-full"
    >
      <img
        src={abyssImage.src}
        alt=""
        className="fixed inset-0 -z-10 block min-h-screen w-full object-cover"
      />
      <div className="relative">
        <div className="lg:hidden">
          <FarmedAnimalsMobile />
        </div>
        <div className="lg:hidden">
          <WildAnimalsMobile />
        </div>
        <div className="hidden lg:block">
          <FarmedAnimals />
        </div>
        <div className="hidden lg:block">
          <WildAnimals />
        </div>
      </div>
    </section>
  );
}
