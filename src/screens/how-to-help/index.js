import { ActionButton } from "./action-button";
import { RaiseAwarenessDialog } from "./raise-awareness-dialog";

export function HowToHelp() {
  return (
    <section
      id="how-to-help"
      className="relative flex min-h-screen items-center bg-forest bg-cover bg-top py-14 lg:py-24"
    >
      <div className="absolute bottom-0 h-full max-h-64 w-full bg-ant-hill bg-cover bg-right-bottom bg-no-repeat md:max-h-max md:bg-contain" />
      <div className="relative mx-auto flex w-full max-w-7xl flex-col space-y-14 px-10">
        <h2 className="text-center font-brand text-3xl text-white lg:text-4xl">
          How can you help?
        </h2>

        <div className="mx-auto grid gap-12 text-white md:grid-cols-3 lg:gap-16">
          <RaiseAwarenessDialog>
            <ActionButton as="button" step={1}>
              Raise awareness
            </ActionButton>
          </RaiseAwarenessDialog>
          <ActionButton
            as="a"
            href="https://animalcharityevaluators.org/donation-advice/recommended-charities"
            target="_blank"
            step={2}
            rel="noreferrer"
          >
            Donate to charities
          </ActionButton>
          <ActionButton
            as="a"
            href="https://mailchi.mp/fd3604316389/waw-starter-kit"
            target="_blank"
            step={3}
            rel="noreferrer"
          >
            Starter kit signup
          </ActionButton>
        </div>

        <div className="mx-auto max-w-xl space-y-14 text-center lg:max-w-2xl">
          <p className="leading-relaxed text-white">
            In addition to the above, you can find career opportunies, get
            career advice, and join a community{" "}
            <a
              href="https://www.wildanimalinitiative.org/services"
              target="_blank"
              className="underline"
            >
              here
            </a>
            . Are you a researcher?{" "}
            <a
              href="https://www.wildanimalinitiative.org/grants"
              target="_blank"
              className="underline"
            >
              Apply for a grant!
            </a>
          </p>

          <a
            href="https://www.wildanimalinitiative.org/services"
            className="inline-block rounded-xl bg-primary px-5 py-1"
            target="_blank"
          >
            View more opportunities
          </a>
        </div>
      </div>

      <img
        className="not-sr-only pointer-events-none absolute left-12 bottom-12 hidden max-h-96 w-[20vw] lg:block"
        src="/images/how-to-help/mice.png"
        alt=""
      />
    </section>
  );
}
