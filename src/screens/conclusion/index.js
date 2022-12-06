import { HealthcareIcon } from "../../components/healthcare-icon";

function ordinal(n) {
  // Get the last digit of the number
  const lastDigit = n % 10;

  // Check if the number is between 11 and 13, which require the "th" suffix
  if (n >= 11 && n <= 13) {
    return n + "th";
  }

  // Check the last digit of the number and return the appropriate suffix
  switch (lastDigit) {
    case 1:
      return n + "st";
    case 2:
      return n + "nd";
    case 3:
      return n + "rd";
    default:
      return n + "th";
  }
}

export function Conclusion() {
  // URL of the visitor data
  const dataUrl = "https://wildanimalsuffering-stats.vercel.app/stats";

  // Use the fetch() function to retrieve the data from the URL
  fetch(dataUrl)
    // Parse the response as JSON
    .then((response) => response.json())
    // Destructure the "visitors" value from the first item in the data array
    .then(([{ visitors }]) => {
      // Get the HTML element with the id "visitors-count"
      const element = document.getElementById("visitors-count");

      // Set the element's innerHTML to the value of "visitors"
      element.innerHTML = ordinal(visitors);
    });

  return (
    <section
      id="conclusion"
      className="relative min-h-screen bg-woods bg-cover md:bg-woods-md md:bg-center"
    >
      <div className="mx-auto max-w-7xl px-10">
        <img
          className="not-sr-only absolute right-32 top-52 max-w-lg lg:w-full"
          src="/images/conclusion/momma.png"
          alt="Mother bear"
        />

        <img
          className="not-sr-only absolute right-1/4 top-[600px] max-w-lg lg:w-full"
          src="/images/conclusion/pups.png"
          alt="Bear pups"
        />
        <div className="py-30 relative flex max-w-3xl flex-col pt-36 text-white">
          <h2 className="mb-4 font-brand text-5xl leading-relaxed">
            Together, we can make life better for wild animals.
          </h2>
          <p className="font-lg">
            In recent years, there has been growing moral concern for animals.
            Thankfully, it is now rare to find a person who feels indifferent
            towards animal suffering. We know suffering feels bad to us. But we
            also know that suffering feels bad for a dog or a cat. And we also
            know that suffering feels bad for a pig, a chicken or a fish.
            Suffering feels bad for anyone who feels it, regardless of their
            species or their location. When you put yourselves into the
            perspective of the one who suffers, it doesn't matter whether they
            are in a house, a farm, or a forest. Their suffering matters. It
            matters to them. And it should matter to us.
          </p>
          <br />
          <p className="font-lg z-10">
            If it matters to you, then we encourage you to join us in our
            mission to make life better for wild animals. There is much to learn
            about the situation of wild animals. This page is just an
            introduction to the issue. In truth, it is very sad that so many
            animals are desperately in need of help right now. But luckily,
            humans like you have the opportunity to make a difference. We hope
            you choose to take it.
          </p>
          <br />
          <h3 className="z-10 mt-10 font-brand text-4xl text-primary">
            Thank you.
          </h3>
        </div>
      </div>

      <div className="relative mt-24 flex flex-row justify-evenly bg-white bg-opacity-10 py-10">
        <div className="mx-auto w-full max-w-7xl px-10">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex flex-col items-center gap-6 md:flex-row">
              <HealthcareIcon className="my-auto" />
              <div className="text-center md:text-left">
                <h4 className="mb-4 text-xl font-bold text-white md:mb-4">
                  Please consider supporting our work!
                </h4>
                <span className="text-md font-light text-white">
                  This website would not be possible without your support. Thank
                  you!
                </span>
              </div>
            </div>
            <a
              href="https://veganhacktivists.org/support"
              target="_blank"
              rel="noreferrer"
              className="self-center whitespace-nowrap rounded-full bg-primary px-5 py-1 text-xl font-medium md:text-lg"
            >
              Support Us
            </a>
          </div>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl p-10">
        <div className="grid grid-cols-4 gap-10 text-white">
          <div className="col-span-4 flex flex-col gap-2 md:col-span-3 lg:flex-row lg:gap-10">
            <h4 className="w-48 whitespace-nowrap text-lg font-bold">
              Special thanks
            </h4>
            <p className="flex-1 leading-relaxed">
              To our friends and advisors from{" "}
              <a
                className="underline"
                href="https://www.animal-ethics.org/rescuing-trapped-animals/"
                rel="noreferrer"
                target="_blank"
              >
                Wild Animal Initiative
              </a>
              ,{" "}
              <a
                className="underline"
                href="https://www.animal-ethics.org/rescuing-trapped-animals/"
                rel="noreferrer"
                target="_blank"
              >
                Animal Ethics
              </a>{" "}
              and{" "}
              <a
                className="underline"
                href="https://www.animal-ethics.org/rescuing-trapped-animals/"
                rel="noreferrer"
                target="_blank"
              >
                Rethink Priorities
              </a>
              . Special thanks to{" "}
              <a
                className="underline"
                href="https://www.youtube.com/@HumaneHancock"
                rel="noreferrer"
                target="_blank"
              >
                Jack Hancock
              </a>{" "}
              for written content and{" "}
              <a
                className="underline"
                href="https://katerodman.com/"
                rel="noreferrer"
                target="_blank"
              >
                Kate Rodman
              </a>{" "}
              for the wonderful illustrations. This website would not have been
              possible without everyone's dedication and support!
            </p>
          </div>

          <div className="hidden md:block">
            <a
              href="https://veganhacktivists.org/"
              rel="noreferrer"
              target="_blank"
            >
              <img
                className="ml-auto max-h-32"
                src="/images/conclusion/vh-logo.png"
                alt="Vegan Hacktivists logo"
              />
            </a>
          </div>

          <div className="col-span-4 flex flex-col gap-2 md:col-span-3 lg:flex-row lg:gap-10">
            <h4 className="w-48 text-lg font-bold">Credits and sources</h4>
            <ol className="flex-1 list-inside list-decimal leading-relaxed">
              <li>
                <a
                  className="underline"
                  href="https://reducing-suffering.org/how-many-wild-animals-are-there"
                  rel="noreferrer"
                  target="_blank"
                >
                  How many wild animals are there?
                </a>
              </li>
              <li>
                <a
                  className="underline"
                  href="https://www.animal-ethics.org/malnutrition-thirst-wild-animals/"
                  rel="noreferrer"
                  target="_blank"
                >
                  Malnutrition, hunger and thirst in wild animals
                </a>
              </li>
              <li>
                <a
                  className="underline"
                  href="https://forum.effectivealtruism.org/posts/8qmQr7kiEYFhX9eTR/what-is-wild-animal-suffering"
                  rel="noreferrer"
                  target="_blank"
                >
                  What is wild animal suffering?
                </a>
              </li>
              <li>
                <a
                  className="underline"
                  href="https://www.animal-ethics.org/weather-conditions-nonhuman-animals/"
                  rel="noreferrer"
                  target="_blank"
                >
                  Weather conditions and nonhuman animals
                </a>
              </li>
              <li>
                <a
                  className="underline"
                  href="https://www.animal-ethics.org/rescuing-trapped-animals/"
                  rel="noreferrer"
                  target="_blank"
                >
                  Rescuing trapped and injured animals
                </a>
              </li>
              <li>
                <a
                  className="underline"
                  href="https://www.animal-ethics.org/interspecific-conflict/"
                  rel="noreferrer"
                  target="_blank"
                >
                  Antagonism in nature: Interspecific conflict
                </a>
              </li>
              <li>
                <a
                  className="underline"
                  href="https://www.animal-ethics.org/diseases-nature/"
                  rel="noreferrer"
                  target="_blank"
                >
                  Diseases in nature
                </a>
              </li>
              <li>
                <a
                  className="underline"
                  href="https://www.animal-ethics.org/animals-natural-disasters/"
                  rel="noreferrer"
                  target="_blank"
                >
                  Animals in natural disasters
                </a>
              </li>
              <li>
                <a
                  className="underline"
                  href="https://www.animal-ethics.org/population-dynamics-animal-suffering/"
                  rel="noreferrer"
                  target="_blank"
                >
                  Population dynamics and animal suffering
                </a>
              </li>
              <li>
                <a
                  className="underline"
                  href="https://longtermrisk.org/the-importance-of-wild-animal-suffering/"
                  rel="noreferrer"
                  target="_blank"
                >
                  The Importance of Wild-Animal Suffering
                </a>
              </li>
              <li>
                <a
                  className="underline"
                  href="https://reducing-suffering.org/efforts-to-help-wild-animals-should-be-effective-not-idealistic/"
                  rel="noreferrer"
                  target="_blank"
                >
                  Efforts to Help Wild Animals Should Be Effective
                </a>
              </li>
              <li>
                <a
                  className="underline"
                  href="https://reducing-suffering.org/"
                  rel="noreferrer"
                  target="_blank"
                >
                  Essays on Reducing Suffering
                </a>
              </li>
              <li>
                <a
                  className="underline"
                  href="https://longtermrisk.org/the-importance-of-wild-animal-suffering/"
                  rel="noreferrer"
                  target="_blank"
                >
                  The Importance of Wild-Animal Suffering
                </a>
              </li>
              <li>
                <a
                  className="underline"
                  href="https://reducing-suffering.org/why-vegans-should-care-about-suffering-in-nature/"
                  rel="noreferrer"
                  target="_blank"
                >
                  Why Vegans Should Care about Suffering in Nature
                </a>
              </li>
              <li>
                <a
                  className="underline"
                  href="https://handwiki.org/wiki/Philosophy:Wild_animal_suffering"
                  rel="noreferrer"
                  target="_blank"
                >
                  Wild Animal Suffering on HandWiki
                </a>
              </li>
              <li>
                <a
                  className="underline"
                  href="https://stijnbruers.wordpress.com/2022/10/21/wild-animal-suffering-infographic/"
                  rel="noreferrer"
                  target="_blank"
                >
                  Wild Animal Suffering Infographic (by Stijn Bruers)
                </a>
              </li>
            </ol>
          </div>
          <div className="col-span-4 flex flex-col gap-2 md:col-span-3 lg:flex-row lg:gap-10">
            <h4 className="w-48 whitespace-nowrap text-lg font-bold">
              Thank you!
            </h4>
            <p className="flex-1 leading-relaxed">
              You're our <span id="visitors-count"></span> visitor, thanks for
              reading!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
