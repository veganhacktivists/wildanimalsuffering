import { motion } from "framer-motion";
import { Accordion, AccordionItem } from "~/components/accordion";
import {
  BackgroundEffect,
  useBackgroundEffect,
} from "~/components/background-effect";

export function CommonObjections() {
  const { screenRef, effectOpacity } = useBackgroundEffect();

  return (
    <section
      id="common-objections"
      className="relative flex min-h-screen bg-sand bg-cover bg-top py-24"
      ref={screenRef}
    >
      <div className="absolute bottom-0 h-full w-full bg-hedgehog bg-right-bottom bg-no-repeat xl:bg-contain" />

      <motion.div
        style={{ opacity: effectOpacity }}
        className="absolute inset-0 z-10"
      >
        <BackgroundEffect type="rain" />
      </motion.div>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col space-y-10 px-10">
        <h2 className="text-center font-brand text-4xl text-white">
          Common Objections to Helping Wild Animals
        </h2>

        <Accordion defaultValue="its-not-ours">
          <AccordionItem
            value="its-not-ours"
            index="01"
            label="It's not our responsibility"
            content="Some people argue that we are not responsible for the suffering of wild animals because we did not cause it. However, the reason to help animals is because they need our help. If we believe that it is our moral responsibility to help the most vulnerable members of society, regardless of whether or not we caused their suffering, then we should extend that same compassion to wild animals as well."
          />
          <AccordionItem
            value="we-will-make-it-worse"
            index="02"
            label="We will make things worse/ecosystems are too complex!"
            content="Some may  argue that intervening in nature to reduce animal suffering is likely to make things worse because ecosystems are complex and we don't fully understand them. However, despite the complexity of the human body and limitations of our understanding, we are still performing research and intervening based on careful consideration of the potential risks and benefits. While more research is needed on the potential impact of intervention, it is premature to conclude that any possible intervention will make things worse and we should approach the issue with an open mind and willingness to learn and adapt as we gain more knowledge and experience. "
          />
          <AccordionItem
            value="nothing-we-can-do"
            index="03"
            label="There is nothing we can do!"
            content="This is simply not true. There are already people who provide aid to sick, injured, or orphaned animals in need. And while it may be difficult to help wild animals on a larger scale, it is too early to conclude that we are unable to make things better for them. Due to the lack of research and attention on this issue, there is not enough evidence to say for certain that any attempt to help wild animals will inevitably fail. Even if large-scale intervention is currently impossible, we cannot predict what will be possible in the future."
          />
          <AccordionItem
            value="cannot-consent"
            index="04"
            label="But isn't wild animal suffering natural?"
            content="Yes, it's true that something being natural does not necessarily mean it is good. For example, smallpox was a natural occurrence, but it was ultimately a good thing that it was eradicated. The field of wild animal welfare challenges the common misconception that natural equals good. In fact, this may even be a reason to work on the issue: advocating for the welfare of wild animals may help us make moral progress by expanding our moral circle and potentially setting a precedent for addressing issues of digital sentience in the future."
          />
          <AccordionItem
            value="too-big-of-a-problem"
            index="05"
            label="Wild animal suffering is too big of a problem to solve!"
            content="Not being able to fully eliminate a problem is not a reason for why we should not make attempts at doing so. After all, despite the fact that suffering is an inevitable part of life, we still strive to make the lives of humans better through medical treatment, social support, and other interventions. Similarly, while the scale of wild animal suffering may be vast, implementing even small-scale interventions can make a significant difference to the individual animals we help. It is true that we may not be able to help every wild animal, but that does not diminish the value of helping those we can."
          />
          <AccordionItem
            value="factory-farming-first"
            index="06"
            label="We should deal with factory farming first!"
            content="While it is understandable that many animal advocates focus primarily on farmed animal suffering due to the greater tractability of the issue, it is still important to be aware of the issue of wild animal suffering due to the potential impact of our current and future actions. For example, rewilding programs often do not take into account the well-being of the individual animals they create or the potential to increase suffering through the development and spread of ecosystems containing wild animals to other environments."
          />
        </Accordion>
      </div>
    </section>
  );
}
