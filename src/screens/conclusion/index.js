import "./conclusion.css";

export function Conclusion() {
  return (
    <section id="conclusion" className="together-we-can">
      <div className="full-screen bears h-full w-full flex-col justify-between">
        <div className="h-screen-50vh py-30 flex w-[100%] flex-col pt-36 pl-28 text-white lg:w-[75%] 2xl:w-[50%]">
          <h2 className="mb-4 text-[56px]">
            Together, we can make life better for wild animals.
          </h2>
          <p className="font-lg font-sans">
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
          <p className="font-lg font-sans">
            If it matters to you, then we encourage you to join us in our
            mission to make life better for wild animals. There is much to learn
            about the situation of wild animals. This page is just an
            introduction to the issue. In truth, it is very sad that so many
            animals are desperately in need of help right now. But luckily,
            humans like you have the opportunity to make a difference. We hope
            you choose to take it.
          </p>
          <br />
          <h3 className="mt-10 text-[40px] uppercase text-primary">
            thank you
          </h3>
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
            <p>
              Mauris convallis arcu amet, sollicitudin gravida gravida platea.
            </p>
            <p>
              Velit rhoncus pellentesque feugiat aenean tincidunt. Diam
              tincidunt aliquet mauris lorem.
            </p>
            <p>
              Egestas scelerisque ac risus. Neque nibh tellus elementum
              vulputate auctor
            </p>
            <p>Arcu amet, sollicitudin gravida gravida platea.</p>
            <p>Rrhoncus pellentesque feugiat aenean tincidunt</p>
            <p>
              Diam tincidunt aliquet mauris lorem egestas scelerisque ac risus
            </p>
            <p>Neque nibh tellus elementum vulputate auctor.</p>
            <p>
              Mauris convallis arcu amet, sollicitudin gravida gravida platea.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
