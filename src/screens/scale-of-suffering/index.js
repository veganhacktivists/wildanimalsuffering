import { FarmedAnimals } from "./farmed-animals";
import { FarmedAnimalsMobile } from "./farmed-animals-mobile";
import { WildAnimals } from "./wild-animals";
import { WildAnimalsMobile } from "./wild-animals-mobile";

export function ScaleOfSuffering() {
  return (
    <section
      id="scale-of-suffering"
      className="min-h-screen w-full bg-abyss bg-cover bg-fixed"
    >
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
    </section>
  );
}
