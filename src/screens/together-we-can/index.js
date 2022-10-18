import { translations } from "../../utils/translations";
import "./together-we-can.css";

// FIXME Remove translations for now
const lang = translations.en;
const credits = [
  "credits-01",
  "credits-02",
  "credits-03",
  "credits-04",
  "credits-05",
  "credits-06",
  "credits-07",
  "credits-08",
];

export function TogetherWeCan() {
  return (
    <section
      id="together-we-can-screen"
      data-name="Conclusion"
      className="together-we-can screen-content"
    >
      <div className="full-screen bears h-full w-full flex-col justify-between">
        <div className="h-screen-50vh flex w-[100%] flex-col self-start py-16 pr-10 lg:w-[75%] 2xl:w-[50%]">
          <h2>Together, we can make life better for wild animals.</h2>
          <p>
            In recent years, there has been growing moral concern for animals.
            Thankfully, it is now rare to find a person who feels indifferent
            towards animal suffering. We know suffering feels bad to us. But we
            also know that suffering feels bad for a dog or a cat. And we also
            know that suffering feels bad for a pig, a chicken or a fish.
            Suffering feels bad for anyone who feels it, regardless of their
            species or their location. When you put yourselves into the
            perspective of the one who suffers, it doesn&apos;t matter whether
            they are in a house, a farm, or a forest. Their suffering matters.
            It matters to them. And it should matter to us.
          </p>
          <br />
          <p>
            If it matters to you, then we encourage you to join us in our
            mission to make life better for wild animals. There is much to learn
            about the situation of wild animals. This page is just an
            introduction to the issue. In truth, it is very sad that so many
            animals are desperately in need of help right now. But luckily,
            humans like you have the opportunity to make a difference. We hope
            you choose to take it.
          </p>
          <br />
          <h3 className="orange">thank you</h3>
        </div>
        <div className="lighten-strip flex flex-row justify-evenly p-5">
          <div className="flex flex-row">
            <div className="patreon-logo aspect-square h-full"></div>
            <div className="mx-4 flex-col">
              <h5>Please consider supporting our work!</h5>
              <div className="text-sm">
                This website would not be possible without your support. Thank
                you!
              </div>
            </div>
          </div>
          <span className="badge uppercase">Support Us</span>
        </div>
        <div className="flex flex-row">
          <h5 className="px-20">Credits and sources</h5>
          <div>
            {credits.map((creditKey) => (
              <p key={creditKey}>{lang[creditKey]}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
