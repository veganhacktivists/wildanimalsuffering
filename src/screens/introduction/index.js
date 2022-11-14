export function Introduction() {
  return (
    <section
      id="introduction"
      className="flex min-h-screen items-end bg-black bg-savanna bg-[length:100%] bg-[center_-100px] bg-no-repeat lg:items-center lg:bg-savanna-md lg:bg-cover lg:bg-center"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col lg:gap-20 xl:gap-0">
        <div className="grid lg:grid-cols-2">
          <div className="mx-auto pl-6 pt-12 lg:p-12 lg:pr-0">
            <img
              src="/images/introduction/elephants.png"
              alt="The illustration of a mother elephant and her young"
              className="mx-auto w-3/4 md:w-1/2 lg:w-full"
            />
          </div>
          <div className="flex flex-col space-y-10 pt-12">
            <h1 className="flex max-w-md flex-col space-y-4 font-brand">
              <span className="text-6xl leading-none text-white">
                Wild Animal Suffering
              </span>
              <span className="text-3xl text-primary">
                ...and why it matters
              </span>
            </h1>
            <div className="grid grid-cols-2 gap-10 font-sans text-lg font-light text-white">
              <p>
                We tend to idealize nature and the lives of wild animals, but in
                reality, their lives can be really tough..{" "}
                <span className="font-medium">
                  They have to deal with harsh weather conditions, hunger,
                  thirst, disease, violence from other animals and more.
                </span>
              </p>
              <p>
                When we suffer, we seek relief. For animals, their suffering
                doesn&apos;t become any less unpleasant because they live in the
                wild, and pain feels the same for them, regardless of whether or
                not{" "}
                <span className="font-medium">humans are the cause of it.</span>
              </p>
            </div>
          </div>
        </div>
        <div className="mt-14">
          <p className="text-center text-lg font-bold text-white">
            The suffering of wild animals matters. It matters to them, and it
            should matter to us.
          </p>
        </div>
      </div>
    </section>
  );
}
