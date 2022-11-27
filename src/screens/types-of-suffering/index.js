import { DialogItem } from "./dialog-item";

export function TypesOfSuffering() {
  return (
    <section
      id="types-of-suffering"
      className="flex min-h-screen items-center bg-sand bg-cover bg-center py-24"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col space-y-10 px-10">
        <h2 className="flex flex-col text-center font-brand text-4xl text-white">
          <span>Even Worse,</span>
          <span>Wild Animals Suffer in Terrible Ways:</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          <DialogItem
            id="thirst-and-starvation"
            title="Thirst & starvation"
            description="Animals in the wild are suffering from starvation and dehydration, and it is easy to underestimate this problem. For instance, if an animal is on the verge of starving to death, they will be more susceptible to being caught by predators. We might think that predation is why the animal died, when the root cause of that happening was actually weakness or more risky behaviours due to starvation. When we consider the reproductive strategies and population dynamics of wild animals, it seems that the problem of resource scarcity is likely to be a significant source of suffering."
            link="https://www.animal-ethics.org/malnutrition-thirst-wild-animals/"
          />
          <DialogItem
            id="predation"
            title="Predation"
            description="Animals who are preyed upon are killed and eaten in varied ways. Some predators routinely eat the animals alive. Some animals, such as herons and some species of snakes, swallow their prey whole and digest them alive. It’s difficult to estimate the suffering undergone by animals while they are being hunted and killed. It’s important to note that as well as feeling pain when attacked, prey animals may experience psychological distress from living in fear of predators."
            link="https://www.animal-ethics.org/interspecific-conflict/"
          />
          <DialogItem
            id="disease-and-parasitism"
            title="Disease & parasitism"
            description="There are so many diseases that affect nonhuman animals in nature that they cannot all be listed here. Some of them are illnesses humans can suffer from too, like flu, pneumonia, tuberculosis, cholera, ebola, anthrax, E. coli, salmonella, diphtheria, and rabies. Cancer is also common in both land and marine animals. Some populations of whales suffer from cancer at similar rates to humans. Other common diseases that can infect animals living in the wild are distemper, chronic wasting disease, African swine fever, worms, and a variety of fungal infections. Parasite infestations are also common, and are more prevalent and severe in animals whose immune systems are weakened by other factors, such as infectious disease, weather, malnutrition, bodily changes, or stress due to antagonistic relationships with other animals."
            link="https://www.animal-ethics.org/diseases-nature/"
          />
          <DialogItem
            id="harmful-weather-conditions"
            title="Weather conditions"
            description="Weather, especially temperature, plays a major role in influencing whether animals can survive and be healthy in certain habitats. Fluctuations in temperatures in certain regions can result in the deaths of entire populations. Many animals suffer due to changes in temperature. They may be fine during part of the year but experience great discomfort and hardship during a particularly hot summer or cold winter. In temperate areas - such as large parts of North America, Europe, and Asia - there can be big differences between the minimum and maximum temperatures during the summer and the winter. Animals who don’t hibernate or become dormant in cold weather have to endure large variations in temperature. This may weaken their immune systems and make them more susceptible to illness."
            link="https://www.animal-ethics.org/weather-conditions-nonhuman-animals/"
          />
          <DialogItem
            id="natural-disasters"
            title="Natural disasters"
            description="Animals living in the wild are particularly vulnerable in natural disasters. Earthquakes, hurricanes, volcanic eruptions, tsunamis, and forest fires can have devastating consequences. Many animals die, drowned or buried alive by dirt, ash, lava, or snow; crushed to death in collapsed or burnt burrows; smashed against trees and rocks, or pelted by hailstones. Others sustain major injuries, including cuts and abrasions to the eyes, wings and gills; respiratory and digestive disorders, eroded teeth; malnutrition; and poisoning from contaminated food and water. Strong volcanic eruptions and fires can temporarily change regional weather, cooling or heating the air, changing winds, or causing rain."
            link="https://www.animal-ethics.org/animals-natural-disasters/"
          />
          <DialogItem
            id="accidents"
            title="Accidents"
            description="Animals often suffer accidents and injuries in the wild. They may be injured by predators or in intraspecific conflicts over territory or mating; burned by wildfires or frozen by sudden frosts; trapped by difficult terrain such as mud ponds or frozen lakes, and face painful, lingering deaths; or they might simply have an accident in the normal course of living their lives, just as humans do. Unlike humans, though, animals in the wild rarely have effective help available to them when they endure accidents or injuries. They find themselves almost helpless against stronger animals, extreme weather conditions, and natural traps. Nevertheless, humans do sometimes manage to rescue injured or trapped animals, even in difficult circumstances."
            link="https://www.animal-ethics.org/rescuing-trapped-animals/"
          />
          <DialogItem
            id="anthropogenic-harms"
            title="Anthropogenic harms"
            description="Anthropogenic harms are harms caused by human beings that are the direct result of specific actions, either intentional or unintentional. Examples of intentional direct harm are fishing and hunting. Another example is the intentional eradication of certain animals. This may be for economic reasons, such as when they are killed because of their negative impact on agriculture. It can also be for conservationist purposes, as when animals are killed because of their impact on other species. Examples of unintentional direct harm are when animals are injured or killed by harvesting machines or being run over by vehicles. Indirectly anthropogenic harms include harms that result from human action but are not the direct result of concrete actions."
            link="https://forum.effectivealtruism.org/posts/8qmQr7kiEYFhX9eTR/what-is-wild-animal-suffering"
          />
        </div>
        <p className="text-center text-white">
          Click on an item above to learn more.
        </p>
      </div>
    </section>
  );
}
