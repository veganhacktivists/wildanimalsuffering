import "./population-dynamics.css";

export function PopulationDynamics() {
  return (
    <section
      id="population-dynamics"
      data-name="Population Dynamics"
      className="population-dynamics screen-content"
    >
      <div className="full-screen h-full w-full flex-col">
        <div className="split-screen h-screen-50vh flex w-full flex-col items-center justify-center py-16 text-center">
          <h1 className="md:w-[75%]">Population Dynamics</h1>
          <p className="md:w-[40%]">
            Wild animals tend to have a lot of children, and for populations to
            remain stable, on average each parent can only have 2 children that
            reach adulthood. This means that most animals die young.
          </p>
        </div>
        <div className="split-screen h-screen-50vh relative w-full flex-col">
          <div className="population-dynamics-duck md:flex-end h-1/2 w-80 md:flex md:w-full md:flex-row"></div>
          <div className="baby-duck-01"></div>
          <div className="baby-duck-02"></div>
          <div className="baby-duck-03"></div>
          <div className="baby-duck-04"></div>
          <div className="baby-duck-05"></div>
          <div className="baby-duck-06"></div>
          <div className="baby-duck-07"></div>
          <div className="baby-duck-08"></div>
          <div className="baby-duck-09"></div>
          <div className="baby-duck-10"></div>
        </div>
      </div>
    </section>
  );
}
