// @ts-ignore
import arrowsDown from "../../../assets/images/arrows-down.svg";
import "./why-it-matters.css";

const WhyItMatters = () => {
  return (
    <section
      id="wild-animal-suffering-screen"
      data-name="Introduction"
      className="screen-content wild-animal-suffering"
    >
      <div className="flex h-screen flex-col justify-start">
        <div className="birds-01 absolute"></div>
        <div className="birds-02 absolute"></div>
        <div className="absolute top-0 right-0 mt-9 mr-9 hidden aspect-square h-36 bg-logo bg-contain bg-no-repeat invert md:block md:h-32"></div>
        <div className="mb-28 h-56 w-56 self-center bg-logo bg-contain bg-center bg-no-repeat md:hidden"></div>
        <div className="h-screen-70vh flex flex-col-reverse md:flex-row md:pt-16">
          <div
            id="elephant-image-container"
            className="split-screen md:h-screen-50vh h-36 w-full flex-col md:w-auto"
          >
            <div className="elephants h-full"></div>
          </div>
          <div className="split-screen h-screen-30vh flex-col justify-center">
            <div className="font-brand font-bold uppercase">
              <div className="text-9xl md:text-7xl">Wild Animal Suffering</div>
              <div className="orange my-20 text-7xl md:my-0 md:text-3xl">
                ...and why it matters
              </div>
            </div>
            <div className="subheading flex flex-col rounded-xl bg-black/50 p-10 text-4xl font-light md:flex-row md:bg-transparent md:p-0 md:pt-4 md:text-base">
              <div className="mb-20 md:mb-0 md:pr-4">
                <div className="bg-orange mb-5 h-8 w-8 rounded-full md:mb-2 md:h-3 md:w-3"></div>
                <div>
                  We tend to idealize nature and the lives of wild animals, but
                  in reality, their lives can be really tough. They have to deal
                  with harsh weather conditions, hunger, thirst, disease,
                  violence from other animals and more.
                </div>
              </div>
              <div className="md:pl-4">
                <div className="border-orange mb-5 h-8 w-8 rounded-full border md:mb-2 md:h-3 md:w-3"></div>
                <div>
                  When we suffer, we seek relief. For animals, their suffering
                  doesn&apos;t become any less pleasant because they live in the
                  wild, and pain feels the same for them, regardless of whether
                  or not humans are the cause of it. The suffering of wild
                  animals matters. It matters to them, and it should matter to
                  us.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-screen-10vh -mt-48 p-4 md:mt-0 md:p-10">
          <div className="text-center">
            <h5 className="px-20 pb-8 text-5xl md:text-base">
              The suffering of wild animals matters. It matters to them, and it
              should matter to us.
            </h5>
            <span className="badge uppercase">Scroll Down to Begin</span>
            <img className="mx-auto mt-10 h-[50px]" src={arrowsDown} />
          </div>
        </div>
      </div>
    </section>
  );
};

export { WhyItMatters };
