import { FarmedAnimals } from "./farmed-animals";
import { WildAnimals } from "./wild-animals";

export function ScaleOfSuffering() {
  return (
    <section
      id="scale-of-suffering"
      className="min-h-screen w-full bg-abyss bg-cover bg-fixed"
    >
      <FarmedAnimals />
      <WildAnimals />
    </section>
  );
}
