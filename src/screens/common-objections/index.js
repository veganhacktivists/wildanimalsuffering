import { motion, useMotionValue } from "framer-motion";
import { useEffect, useRef } from "react";
import { Accordion, AccordionItem } from "../../components/accordion";
import { BackgroundEffect } from "../../components/background-effect";

function buildThresholdList(numSteps) {
  return Array.from({ length: numSteps }).map((_, idx) => (1 / numSteps) * idx);
}

export function CommonObjections() {
  const ref = useRef(null);
  const rainOpacity = useMotionValue(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([{ rootBounds, boundingClientRect, intersectionRatio }]) => {
        const ratio = 1 - rootBounds.height / boundingClientRect.height;

        rainOpacity.set(
          (intersectionRatio - 0.5) * 2 + intersectionRatio * ratio
        );
      },
      { threshold: buildThresholdList(100) }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="common-objections"
      className="relative flex min-h-screen bg-sand bg-cover bg-top py-24"
      ref={ref}
    >
      <div className="absolute bottom-0 h-full w-full bg-hedgehog bg-right-bottom bg-no-repeat xl:bg-contain" />

      <motion.div
        style={{ opacity: rainOpacity }}
        className="absolute inset-0 z-10"
      >
        <BackgroundEffect type="common-objections-screen" />
      </motion.div>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col space-y-10 px-10">
        <h2 className="text-center font-brand text-4xl text-white">
          Common objections to helping wild animals
        </h2>

        <Accordion defaultValue="its-not-ours">
          <AccordionItem
            value="its-not-ours"
            index="01"
            label="It's not our responsibility"
            content="People sometimes argue that we are not responsible for the suffering of wild animals, because we are not causing it. However, the reason to help them is that they need our help, not because we caused their situation. We already agree that we should help humans suffering from diseases like malaria and natural disasters like earthquakes. If we think we should help humans in those cases, despite the fact that we did not cause their suffering, then it seems speciesist to argue that we should ignore wild animal suffering."
          />
          <AccordionItem
            value="we-will-make-it-worse"
            index="02"
            label="We will make things worse/ecosystems are too complex!"
            content="Some people might say that “any intervention in nature to reduce suffering is bound to make things worse, since ecosystems are complex, and since there is much that we don't understand about ecosystems.” But a similar argument could be made about intervening in the human body. The human body is complex, and very interconnected, and we are far away from fully understanding it. But we intervene anyway—not willy-nilly of course, but based on careful theorizing and experiments, while we balance risk and reward. While we need more research on the lives of wild animals and the ways in which we might be able to help them, it would be premature to conclude with certainty that any possible intervention will inevitably make things worse."
          />
          <AccordionItem
            value="nothing-we-can-do"
            index="03"
            label="There is nothing we can do!"
            content="Some people claim that there is nothing that can be done to help wild animals. However, some people are already helping wild animals. For example, some people provide aid to sick, injured, or orphaned animals in need. In terms of interventions to help wild animals on a larger scale, it seems far too premature to conclude that we are unable to make things better for wild animals. Since this issue has been academically neglected, there simply isn't enough evidence to conclude with certainty that any attempt to help wild animals will inevitably fail. Even if helping wild animals on a large scale is impossible today, we don't know what will be possible in the future."
          />
          <AccordionItem
            value="cannot-consent"
            index="04"
            label="They cannot consent and we should not violate their autonomy!"
            content="It is true that animals can't consent to being helped, but they also can't consent to starving, or from slowly dying of thirst, or from slowly being eaten alive by parasites. Whenever someone doesn't have the capacity to give consent, be it a child, someone who is intellectually disabled, or a non-human animal, we take actions that are presumably in their best interest. This is why we treat our pets for infections and we vaccinate our children against diseases. If someone argues that we shouldn't try to help wild animals because they can't consent, they're going to find it very difficult to hold that position consistently."
          />
          <AccordionItem
            value="too-big-of-a-problem"
            index="05"
            label="Wild animal suffering is too big of a problem! We'll never eliminate all suffering in nature!"
            content="Some people argue that we're never going to eliminate suffering in the wild, and therefore we should leave it alone and focus on problems we can solve. Perhaps we'll never entirely eliminate suffering in human beings either, but does that mean that we shouldn't work towards making the lives of human beings better? Does it stop being worthwhile to treat people for cancer because human suffering is inevitable? Of course, the scale of wild animal suffering is enormous, but even implementing small-scale interventions can help at least some non-human animals in significant ways. Some may argue that there are so many individuals living in the wild that we can't make a difference, but it makes a difference to the ones we help."
          />
          <AccordionItem
            value="factory-farming-first"
            index="06"
            label="We should deal with factory farming first!"
            content="We are sympathetic to the view that most animal advocates should focus most of their attention on farmed animal suffering due to wild animal suffering being less tractable in comparison. However, even if you decide to focus on farmed animal suffering, it is still worthwhile to be aware of the issue of wild animal suffering. One reason for this is because we also need to consider how current and future human actions may worsen the problem of wild animal suffering. For example, it is not uncommon for animal advocates to promote rewilding. Currently, rewilding programmes do not consider the well-being of the individuals that they create, which may actually lead to more animal suffering. In the future, humans may cause astronomically more suffering by spreading ecosystems full of wild animals to additional planets or by creating simulations that contain digital minds. To learn more about the ways in which humans may cause more animal suffering, check out the YouTube video, 'How a Vegan World Might Contain More Suffering'."
          />
        </Accordion>
      </div>
    </section>
  );
}
