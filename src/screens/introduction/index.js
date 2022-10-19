export function Introduction() {
  return (
    <section
      id="introduction"
      className="min-h-screen bg-savanna-md bg-cover bg-center py-24"
    >
      <img
        className="absolute top-0 right-0 m-10 w-20"
        src="/images/logo.svg"
        alt="Logo"
      />

      <div className="mx-auto flex w-full max-w-7xl flex-col px-10">
        <div className="grid grid-cols-2 gap-10">
          <div className="p-12 pr-0">
            <img
              src="/images/introduction/elephants.png"
              alt="The illustration of a mother elephant and her young"
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
            <div className="grid grid-cols-2 gap-10 text-lg text-white">
              <p>
                We tend to idealize nature and the lives of wild animals, but in
                reality, their lives can be really tough.. They have to deal
                with harsh weather conditions, hunger, thirst, disease, violence
                from other animals and more.
              </p>
              <p>
                When we suffer, we seek relief. For animals, their suffering
                doesn&apos;t become any less unpleasant because they live in the
                wild, and pain feels the same for them, regardless of whether or
                not humans are the cause of it.
              </p>
            </div>
          </div>
        </div>
        <div>
          <p className="text-center text-lg font-bold text-white">
            The suffering of wild animals matters. It matters to them, and it
            should matter to us.
          </p>
        </div>
      </div>
    </section>
  );
}
