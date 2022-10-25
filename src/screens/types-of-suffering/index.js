import { DialogItem } from "./dialog-item";

export function TypesOfSuffering() {
  return (
    <section
      id="types-of-suffering"
      className="min-h-screen bg-sand bg-cover bg-center py-24"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col space-y-10 px-10">
        <h2 className="flex flex-col text-center font-brand text-4xl text-white">
          <span>Even worse,</span>
          <span>wild animals suffer in terrible ways:</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          <DialogItem
            id="thirst-and-starvation"
            title="Thirst & starvation"
            description="Starvation is a common cause of death for animals who survive to old age. Food scarcity is worsened by the simultaneous occurrence of hunger and predation. Thirst is another major contributor to high mortality rates in wild animals. The combination of thirst and starvation accelerates the process of dehydration that culminates in death. Many animals who live in arid conditions continue to eat as a survival strategy because there are some fluids in food. This allows animals to remain alive for longer. Without the availability of water directly or indirectly through food, many animals do not survive harsh climates."
          />
          <DialogItem
            id="predation"
            title="Predation"
            description="In nature, the ecosystemic relations in which one organism benefits by causing harm to another are called “antagonistic relationships.” Antagonistic relationships arise because organisms have conflicting interests. For example, a tick might have an interest in feeding off the blood of a deer because this provides nourishment to the tick and thereby benefits him. This conflicts with the interests of the deer because part of her energy is siphoned off to feed the tick, and this can harm her by weakening her physical condition. The main examples of antagonistic relations are those in which one organism nourishes themself by harming another organism, in particular by parasitism or predation."
          />
          <DialogItem
            id="disease-and-parasitism"
            title="Disease & parasitism"
            description="There are so many diseases that affect nonhuman animals in nature that they cannot all be listed here. Some of them are illnesses humans can suffer from too, like flu, pneumonia, tuberculosis, cholera, ebola, anthrax, E. coli, salmonella, diphtheria, and rabies. Cancer is also common in both land and marine animals. Some populations of whales suffer from cancer at similar rates to humans. Other common diseases that can infect animals living in the wild are distemper, chronic wasting disease, African swine fever, worms, and a variety of fungal infections. Parasite infestations are also common, and are more prevalent and severe in animals whose immune systems are weakened by other factors, such as infectious disease, weather, malnutrition, bodily changes, or stress due to antagonistic relationships with other animals."
          />
          <DialogItem
            id="harmful-weather-conditions"
            title="Harmful weather conditions"
            description="Weather, especially temperature, plays a major role in influencing whether animals can survive and be healthy in certain habitats. Fluctuations in temperatures in certain regions can result in the deaths of entire populations. Many animals suffer due to changes in temperature. They may be fine during part of the year but experience great discomfort and hardship during a particularly hot summer or cold winter. In temperate areas - such as large parts of North America, Europe, and Asia - there can be big differences between the minimum and maximum temperatures during the summer and the winter. Animals who don’t hibernate or become dormant in cold weather have to endure large variations in temperature. This may weaken their immune systems and make them more susceptible to illness."
          />
          <DialogItem
            id="natural-disasters"
            title="Natural disasters"
            description="Animals living in the wild are particularly vulnerable in natural disasters. Earthquakes, hurricanes, volcanic eruptions, tsunamis, and forest fires can have devastating consequences. Many animals die, drowned or buried alive by dirt, ash, lava, or snow; crushed to death in collapsed or burnt burrows; smashed against trees and rocks, or pelted by hailstones. Others sustain major injuries, including cuts and abrasions to the eyes, wings and gills; respiratory and digestive disorders, eroded teeth; malnutrition; and poisoning from contaminated food and water. Strong volcanic eruptions and fires can temporarily change regional weather, cooling or heating the air, changing winds, or causing rain. Volcanoes, storms, and floods can kill marine animals directly, or cause long-term problems by depositing debris and affecting the temperature and salinity of water. All of this contributes to health problems for marine animals, while changing the circulation of water, which further affects nutrient availability and water temperature."
          />
          <DialogItem
            id="accidents"
            title="Accidents"
            description="Animals often suffer accidents and injuries in the wild. They may be injured by predators or in intraspecific conflicts over territory or mating; burned by wildfires or frozen by sudden frosts; trapped by difficult terrain such as mud ponds or frozen lakes, and face painful, lingering deaths; or they might simply have an accident in the normal course of living their lives, just as humans do. Unlike humans, though, animals in the wild rarely have effective help available to them when they endure accidents or injuries. They find themselves almost helpless against stronger animals, extreme weather conditions, and natural traps. Nevertheless, humans do sometimes manage to rescue injured or trapped animals, even in difficult circumstances."
          />
          <DialogItem
            id="anthropogenic-harms"
            title="Anthropogenic harms"
            description="Anthropogenic harms are harms caused by human beings that are the direct result of specific actions, either intentional or unintentional. Examples of intentional direct harm are fishing and hunting. Another example is the intentional eradication of certain animals. This may be for economic reasons, such as when they are killed because of their negative impact on agriculture. It can also be for conservationist purposes, as when animals are killed because of their impact on other species. Examples of unintentional direct harm are when animals are injured or killed by harvesting machines or being run over by vehicles. Indirectly anthropogenic harms include harms that result from human action but are not the direct result of concrete actions."
          />
        </div>
        <p className="text-center font-brand text-xl font-bold uppercase text-white">
          Click on an item above to learn more.
        </p>
      </div>
    </section>
  );
}
