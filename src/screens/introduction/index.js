export function Introduction() {
  return (
    <section
      id="introduction"
      className="bg flex min-h-screen items-end bg-black bg-savanna bg-[length:100%] bg-[center_-100px] bg-no-repeat lg:items-center lg:bg-savanna-md lg:bg-cover lg:bg-center"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col lg:gap-20 xl:gap-0">
        <div className="grid lg:grid-cols-2">
          <div className="mx-auto p-6 pt-12 pr-0 pb-0 lg:p-12 lg:pr-0">
            <img
              src="/images/introduction/elephants.png"
              alt="The illustration of a mother elephant and her young"
              className="mx-auto w-3/4 md:w-1/2 lg:w-full"
            />
          </div>
          <div className="bg-gradient-to-b from-transparent via-black to-black lg:bg-none lg:pt-12">
            <div className="flex flex-col space-y-10 px-10 py-10 lg:py-0">
              <h1 className="flex flex-col space-y-4 text-center font-brand lg:max-w-md lg:text-left">
                <span className="text-5xl leading-none text-white lg:text-6xl">
                  Wild Animal Suffering
                </span>
                <span className="text-2xl text-primary lg:text-3xl">
                  ...and why it matters
                </span>
              </h1>
              <div className="grid gap-10 text-lg text-white md:grid-cols-2">
                <p>
                  We tend to idealize nature and the lives of wild animals, but
                  in reality, their lives can be really tough.. They have to
                  deal with harsh weather conditions, hunger, thirst, disease,
                  violence from other animals and more.
                </p>
                <p>
                  When we suffer, we seek relief. For animals, their suffering
                  doesn&apos;t become any less unpleasant because they live in
                  the wild, and pain feels the same for them, regardless of
                  whether or not humans are the cause of it.
                </p>
              </div>
            </div>
          </div>
        </div>
        <p className="bg-black px-10 pb-10 text-center text-lg font-bold text-white lg:bg-transparent">
          The suffering of wild animals matters. It matters to them, and it
          should matter to us.
        </p>
      </div>
    </section>
  );
}
