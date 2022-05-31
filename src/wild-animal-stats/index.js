import './wild-animal-stats.css';

const WildAnimalStats = () => {

    return (
        <>
            <section id="abyss-container" className="abyss scrollsnap-y flex-col hw-screen">
                <div id="human-population-screen" className="screen-content flex scrollable">
                    <div className="h-screen-50vh md:h-screen md:w-screen-50vw split-screen-padding flex-center">
                        <h1 data-translate-id="human-population"></h1>
    
                        {/* <h1 data-translate-id="human-population-pre"></h1>
                        <h1 className="blue" data-translate-id="human-population"></h1>
                        <h1 data-translate-id="human-population-post"></h1> */}
                    </div>
                    <div className="h-screen-50vh md:h-screen md:w-screen-50vw split-screen-padding flex-center">
                        <div className="human-icon h-1/4 w-1/4"></div>
                    </div>
                </div>
                <div id="animal-stats-screen" className="screen-content scrollable animal-stats flex">
    
                    {/* web: left side; mobile: top */}
                    <div className="h-screen-30vh md:h-screen md:w-screen-50vw flex-center split-screen-padding flex">
    
                        <div className="flex-center flex-col justify-around h-full text-left flex-grow">
                            <div className="domestic-stats-container">
                                <h1 className="" data-translate-id="for-every-human"></h1>
                                <h4 className=" py-4" data-translate-id="thats-a-lot"></h4>
                            </div>
                            <div className="wild-stats-container hidden flex md:justify-between md:flex-col md:w-full md:h-5/6">
                                <div id="humans" className="humans">
                                    <p data-translate-id="in-the-wild"></p>
                                    <p data-translate-id="for-every-human-between"></p>
                                </div>
                                <div id="non-human-animals" className="non-human-animals hidden">
                                    <h4 className="animal-stat blue" data-translate-id="animal-stats-birds"></h4>
                                    <h4 className="animal-stat hidden blue" data-translate-id="animal-stats-wild-mammals"></h4>
                                    <h4 className="animal-stat hidden green" data-translate-id="animal-stats-reptiles"></h4>
                                    <h4 className="animal-stat hidden green" data-translate-id="animal-stats-amphibians"></h4>
                                    <h4 className="animal-stat hidden orange" data-translate-id="animal-stats-fish"></h4>
                                    <h4 className="animal-stat hidden pink" data-translate-id="animal-stats-earthworms"></h4>
                                    <h4 className="animal-stat hidden purple" data-translate-id="animal-stats-terrestrial-arthropods"></h4>
                                </div>
                                <div>
                                    <p data-translate-id="at-any-moment"></p>
                                    <p data-translate-id="vast-majority"></p>
                                    <p data-translate-id="wild-animals"></p>
                                    <p data-translate-id="mind-boggling"></p>
                                    <div className="py-4">
                                        <p data-translate-id="number-of-individuals"></p>
                                        <div className="legend"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
    
                    </div>
                    {/* web: right side; mobile: bottom */}
                    <div className="h-screen-70vh md:h-screen md:w-screen-50vw p-24 flex-center flex-col">
                        <div id="centered-squares">
                        </div>
                    </div>
                </div>
                {/* <div id="vast-majority-screen" className="screen-content scrollable h-screen">
                    <div className="h-screen-50vh text-center justify-start">
                        <p data-translate-id="in-the-wild"></p>
                        <p data-translate-id="for-every-human-between"></p>
                    </div>
                </div> */}
            </section>
        </>
    );

};

export { WildAnimalStats };