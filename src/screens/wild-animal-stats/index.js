import { useState } from "react";
import "./wild-animal-stats.css";

// FIXME Display animal stats in correct order.
const animalStatIndex = 0;

const WildAnimalStats = () => {
  const [showHumans] = useState(true);

  const stats = [
    { key: "farmedAnimals", numberOnASide: 2, color: "blue" },
    {
      key: "wildBirds",
      numberOnASide: 5,
      color: "blue",
    },
    {
      key: "wildAnimals",
      numberOnASide: 10,
      color: "blue",
    },
    {
      key: "reptiles",
      numberOnASide: 10,
      color: "green",
    },
    {
      key: "amphibians",
      numberOnASide: 10,
      color: "green",
    },
    {
      key: "fish",
      numberOnASide: 10,
      color: "orange",
    },
    {
      key: "earthworms",
      numberOnASide: 30,
      color: "pink",
    },
    {
      key: "arthropods",
      numberOnASide: 50,
      color: "purple",
    },
  ];
  const squareData = stats[animalStatIndex];

  const Squares = ({ numberOnASide, color = "blue" }) => {
    const numberOfSquares = Math.pow(numberOnASide, 2);
    return (
      <div id="centered-squares" className={`square-${numberOnASide}s`}>
        {Array.from(Array(numberOfSquares).keys()).map((i) => {
          return <div key={`square-${i}`} className={`${color}-square`}></div>;
        })}
      </div>
    );
  };

  return (
    <>
      <section
        id="abyss-container"
        className="abyss scrollsnap-y hw-screen flex-col overflow-hidden"
      >
        <div
          id="animal-stats-screen"
          className="screen-content scrollable animal-stats flex"
        >
          {/* web: left side; mobile: top */}
          <div className="h-screen-30vh md:w-screen-50vw flex-center split-screen-padding flex md:h-screen">
            <div className="flex-center h-full flex-grow flex-col justify-around text-left">
              {animalStatIndex === 0 ? (
                <div className="domestic-stats-container">
                  <h1>
                    For every human, there are roughly{" "}
                    <span className="blue">3-4 farmed animals</span> being
                    farmed at any given moment.
                  </h1>
                  <h4 className=" py-4">That&apos;s a lot, right?</h4>
                </div>
              ) : null}
              {animalStatIndex !== 0 ? (
                <div className="wild-stats-container flex md:h-5/6 md:w-full md:flex-col md:justify-between">
                  {showHumans ? (
                    <div id="humans" className="humans">
                      <p>However... in the wild,</p>
                      <p>
                        For every human, there are roughly{" "}
                        <span className="blue">3-4 farmed animals</span> being
                        farmed at any given moment.
                      </p>
                    </div>
                  ) : null}
                  <div>
                    <p>...in existence at any moment</p>
                    <p>This means that the vast majority of individuals are</p>
                    <p>wild animals</p>
                    <p>The scale is truly mind boggling.</p>
                    <div className="py-4">
                      <p>Number of individuals</p>
                      <div className="legend"></div>
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
          {/* web: right side; mobile: bottom */}
          <div className="h-screen-70vh md:w-screen-50vw flex-center flex-col p-24 md:h-screen">
            <Squares
              numberOnASide={squareData.numberOnASide}
              color={squareData.color}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export { WildAnimalStats };
