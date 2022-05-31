
//Note: If this ever comes from an untrusted source, you have to sanitize the input
import { registerMouseHandlers } from './utils';

import { translations } from './utils/translations';
import { WhyItMatters } from './why-it-matters';
import { WildAnimalStats } from './wild-animal-stats';


const App = () => {

    let animalStatsIndex = 0;

    let sectionInViewport = {
        element: null,
        index: null
    };
    let screenIndex = 0;

    const downArrow = document.getElementById("next-section-down");
    const sideArrow = document.getElementById("next-section-side");
    const abyssContainer = document.getElementById("abyss-container");

    const screenContentElements = document.querySelectorAll(".screen-content");
    const squares = [
        { key: "farmedAnimals", numberOnASide: 2, color: "blue" },
        { key: "wildBirds", numberOnASide: 5, color: "blue" },
        { key: "wildAnimals", numberOnASide: 10, color: "blue" },
        { key: "reptiles", numberOnASide: 10, color: "green" },
        { key: "amphibians", numberOnASide: 10, color: "green" },
        { key: "fish", numberOnASide: 10, color: "orange" },
        { key: "earthworms", numberOnASide: 30, color: "pink" },
        { key: "arthropods", numberOnASide: 50, color: "purple" },
    ];



    window.addEventListener('load', function () {
        init();
    });

    const init = async () => {

        registerClickHandlers();
        registerMouseHandlers(screenContentElements);
        loadText();
        loadAnimalTextStats();
        goToUrlHashSection();

    };

    const addText = (element, language = "en") => {
        const { translateId } = element.dataset;
        if (!translateId) { console.error('data-translate-id elements must have an attribute value'); return; }
        
        const textToAdd = translations[language][translateId];
        if (!translateId) { console.error(`no translation provided for ${translateId} in ${language}`); return; }

        element.innerHTML = textToAdd;
    };

    const loadText = () => {
        const elementsToTranslate = document.querySelectorAll("[data-translate-id]");
        elementsToTranslate.forEach((element) => {
            addText(element);
        });
    };

    const addSquares = (numberOnASide, color = "blue", icons) => {
        
        const removeChildren = (element) => {

            var child = element.lastElementChild;
            while (child) {
                element.removeChild(child);
                child = element.lastElementChild;
            }
        };

        const squaresContainer = document.getElementById("centered-squares");
        removeChildren(squaresContainer);
        squaresContainer.className = `square-${numberOnASide}s`;
        for (let index = 0; index < numberOnASide * numberOnASide; index++) {
            const element = document.createElement("div");
            element.className = `${color}-square`;
            squaresContainer.appendChild(element);
        }

    };

    const isLastAnimalStat = () => {
        return animalStatsIndex === (squares.length - 1);
    };

    const modAnimalStat = () => {
        animalStatsIndex = (animalStatsIndex + 1) % squares.length;
    };

    const updateAnimalStats = () => {

        const domesticStatsElement = document.querySelector("div.domestic-stats-container");
        const wildStatsElement = document.querySelector("div.wild-stats-container");
        const wildAnimalStatsElements = document.querySelectorAll(".animal-stat");

        //show domesticated; hide wild
        // if (animalStatsIndex === 0) {
        //     wildStatsElement.classList.add("hidden");
        //     domesticStatsElement.classList.remove("hidden");
        // }

        //show wild; hide domesticated; show specific wild
        if (animalStatsIndex !== 0) {
            domesticStatsElement.classList.add("hidden");
            wildStatsElement.classList.remove("hidden");
            wildAnimalStatsElements.forEach((element, i) => {
                // element.classList.add("hidden");
                element.classList.remove("stat-highlight");
                element.classList.remove(squares[animalStatsIndex - 1].color);
            });
            wildAnimalStatsElements[animalStatsIndex - 1].classList.remove("hidden");
            wildAnimalStatsElements[animalStatsIndex - 1].classList.add("stat-highlight");
            wildAnimalStatsElements[animalStatsIndex - 1].classList.add(squares[animalStatsIndex].color);
        }

    };

    const goToUrlHashSection = () => {
        if (!window.location.hash) { return; }
        const screenId = window.location.hash?.substring(1);
        document.getElementById(screenId).scrollIntoView({ behavior: "smooth" });
        updateScreenIndex(screenId);

    };

    const updateScreenIndex = (screenId) => {
        screenIndex = [...screenContentElements].map((e) => e.id).indexOf(screenId);
    };
    
    const updateAnimalStatsOnMouseEvent = () => {

        document.getElementById("non-human-animals").classList.remove("hidden");

        modAnimalStat();
        loadAnimalTextStats();
        updateAnimalStats();
    };

    const loadAnimalTextStats = () => {
        const squareData = squares[animalStatsIndex];
        addSquares(squareData.numberOnASide, squareData.color);
        updateAnimalStats();
    };

    const updateBackgroundOpacity = () => {
        const screen = screenContentElements[screenIndex];
        const isAnimalStatsScreen = screen.id === "animal-stats-screen";
        if (isAnimalStatsScreen) {
            abyssContainer.classList.add("abyss-darkened");
            abyssContainer.classList.remove("abyss");
        } else {
            abyssContainer.classList.remove("abyss-darkened");
            abyssContainer.classList.add("abyss");
        }
        
    };

    const handleDownClick = (event) => {
        goToNextSection();
        updateArrowVisibility();
        updateBackgroundOpacity();
    };

    const updateArrowVisibility = () => {
        const screen = screenContentElements[screenIndex];
        const isLastAnimalStatScreen = isLastAnimalStat();
        const isAnimalStatsScreen = screen.id === "animal-stats-screen";
        if (isAnimalStatsScreen && !isLastAnimalStatScreen) {
            downArrow.classList.add("hidden");
            sideArrow.classList.remove("hidden");
        } else {
            downArrow.classList.remove("hidden");
            sideArrow.classList.add("hidden");
        }
    };

    const goToNextSection = () => {

        screenIndex = (screenIndex + 1) % screenContentElements.length;
        const nextScreenId = screenContentElements[screenIndex].id;
        document.getElementById(nextScreenId).scrollIntoView({ behavior: "smooth" });

        const location = window.location.toString().split('#')[0];
        history.replaceState(null, null, location + '#' + nextScreenId);
    };

    const handleSideClick = () => {
        updateAnimalStatsOnMouseEvent();
        updateArrowVisibility();
        updateBackgroundOpacity();
    };

    const registerArrowClickHandlers = () => {
        document.getElementById("next-section-down").addEventListener("click", handleDownClick);
        document.getElementById("next-section-side").addEventListener("click", handleSideClick);
    };

    const registerClickHandlers = () => {
        registerArrowClickHandlers();
    };


    
    return (
        <>
            <div id="up-arrow">
            
            </div>
            <div className="absolute h-screen scrollsnap-y">
                <WhyItMatters />
                <WildAnimalStats />
                <section id="even-worse-screen" className="screen-content even-worse white">
                    <div className="full-screen w-full h-full flex flex-col">
                        <div className="split-screen flex-col w-full text-center p-16">
                            <h1><span data-translate-id="even-worse"></span>:</h1>
                        </div>
                        <div className="split-screen flex-col w-full">
                            <div className="flex flex-wrap flex-row justify-center text-center">
                                <div className="suffer-image-container w-full pt-4">
                                    <div className="suffer-image suffer-thirst-image"></div>
                                    <div className="suffer-text p-2" data-translate-id="thirst-and-starvation"></div>
                                </div>
                                <div className="suffer-image-container w-full pt-4">
                                    <div className="suffer-image suffer-predation-image"></div>
                                    <div className="suffer-text p-2" data-translate-id="predation"></div>
                                </div>
                                <div className="suffer-image-container w-full pt-4">
                                    <div className="suffer-image suffer-disease-image"></div>
                                    <div className="suffer-text p-2" data-translate-id="disease-and-parasitism"></div>
                                </div>
                                <div className="suffer-image-container w-full pt-4">
                                    <div className="suffer-image suffer-harmful-weather-image"></div>
                                    <div className="suffer-text p-2" data-translate-id="harmful-weather"></div>
                                </div>
                                <div className="suffer-image-container w-full pt-4">
                                    <div className="suffer-image suffer-natural-disasters-image"></div>
                                    <div className="suffer-text p-2" data-translate-id="natural-disasters"></div>
                                </div>
                                <div className="suffer-image-container w-full pt-4">
                                    <div className="suffer-image suffer-accidents-image"></div>
                                    <div className="suffer-text p-2" data-translate-id="accidents"></div>
                                </div>
                                <div className="suffer-image-container w-full pt-4">
                                    <div className="suffer-image suffer-anthropogenic-harms-image"></div>
                                    <div className="suffer-text p-2" data-translate-id="anthropogenic-harms"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="population-dynamics-screen" className="population-dynamics screen-content">
                    <div className="full-screen flex-col w-full h-full">
                        <div className="py-16 flex justify-center split-screen flex-col h-screen-50vh w-full text-center items-center">
                            <h1 className="md:w-[75%]" data-translate-id="population-dynamics"></h1>
                            <p className="md:w-[40%]" data-translate-id="tend-to-have-a-lot-of-children"></p>
                        </div>
                        <div className="split-screen h-screen-50vh w-full flex-col relative">
                            <div className="population-dynamics-duck w-80 h-1/2 md:flex md:flex-row md:flex-end md:w-full"></div>
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
                <section id="videos-screen" className="videos screen-content">
                    <div className="full-screen flex-col w-full h-full">
                        <div className="py-16 flex justify-center split-screen flex-col h-screen-50vh w-full text-center items-center">
                            <h1 data-translate-id="videos-you-might-like"></h1>
                        </div>
                        <div className="split-screen h-screen-50vh w-full flex-col relative">
                            <div className="flex flex-row">
                                <div className="main-video-container split-screen-padding md:w-2/3 flex flex-col justify-center items-center flex-grow-1">
                                    <div className="w-full h-full flex-grow-1">
                                        <iframe className="h-full m-auto" src="https://www.youtube.com/embed/1Dp6gObE9eA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                    </div>
                                    {/* putting padding here to get the width to match that of the video is pretty hacky :( */}
                                    <p className="py-2 text-center" data-translate-id="video-caption"></p>
                                </div>
                                <div className="video-thumbnail-container split-screen-padding md:w-1/3 flex flex-col justify-center flex-grow-0">
                                    <div>
                                        <iframe src="https://www.youtube.com/embed/yMtwbur0ylo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                                    </div>
                                    <div>
                                        <iframe src="https://www.youtube.com/embed/OYJi9zLBjaI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                                    </div>
                                    <div>
                                        <iframe src="https://www.youtube.com/embed/1VYYHLH990A" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="common-objections-screen" className="common-objections screen-content">
                    <div className="full-screen flex-col md:w-2/3 h-full">
                        <div className="w-2/3 h-full self-center">
                            <div className="py-16 flex flex-col text-center items-center">
                                <h2 data-translate-id="common-objections"></h2>
                            </div>
                            
                            <div className="split-screen-padding flex flex-col space-between items-center">
                                <div className="panel-container">
                                    <div className="common-objection panel panel-open">
                                        <h4 className="brown" data-translate-id="its-not-ours"></h4>
                                        <div data-translate-id="personally-responsible"></div>
                                    </div>
                                </div>
                                <div className="panel-container">
                                    <div className="common-objection panel">
                                        <h4 className="brown" data-translate-id="its-not-ours"></h4>
                                        <div data-translate-id="personally-responsible"></div>
                                    </div>
                                </div>
                                <div className="panel-container">
                                    <div className="common-objection panel">
                                        <h4 className="brown" data-translate-id="its-not-ours"></h4>
                                        <div data-translate-id="personally-responsible"></div>
                                    </div>
                                </div>
                                <div className="panel-container">
                                    <div className="common-objection panel">
                                        <h4 className="brown" data-translate-id="its-not-ours"></h4>
                                        <div data-translate-id="personally-responsible"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="how-you-can-help-screen" className="how-you-can-help screen-content">
                    
                    <div className="full-screen flex-col md:w-2/3 h-full">
                        <div className="w-2/3 h-full self-center">
                            <div className="py-16 flex flex-col text-center items-center">
                                <h2 data-translate-id="how-you-can-help"></h2>
                            </div>
                            <div className="split-screen-padding flex flex-col space-between items-center text-center">
                                <div className="flex flex-row space-around flex-grow">
                                    <div className="help-box-container">
                                        <div className="help-box">
                                            <h1>1</h1>
                                            <h4 data-translate-id="raise-awareness"></h4>
                                        </div>
                                    </div>
                                    <div className="help-box-container">
                                        <div className="help-box">
                                            <h1>2</h1>
                                            <h4 data-translate-id="donate-to-charities"></h4>
                                        </div>
                                    </div>
                                    <div className="help-box-container">
                                        <div className="help-box">
                                            <h1>3</h1>
                                            <h4 data-translate-id="become-a-researcher"></h4>
                                        </div>
                                    </div>
                                </div>
                                <p className="p-10" data-translate-id="check-out-this-resource"></p>
                                <span className="badge capitalize" data-translate-id="view-volunteer-opportunities"></span>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="organisations-screen" className="organisations screen-content">
                    <div className="full-screen w-full h-full">
                        <div className="split-screen h-screen-50vh">
                        </div>
                        <div className="split-screen h-screen-50vh w-full">
                        </div>
                    </div>
                </section>
                <section id="other-resources-screen" className="other-resources screen-content">
                    <div className="full-screen w-full h-full">
                        <div className="split-screen h-screen-50vh">
                        </div>
                        <div className="split-screen h-screen-50vh w-full">
                        </div>
                    </div>
                </section>
                <section id="together-we-can-screen" className="together-we-can screen-content">
                    <div className="full-screen w-full h-full">
                        <div className="split-screen h-screen-50vh mt-10">
                            <h2 className="mr-8" data-translate-id="together-we-can"></h2>
                            <br/>
                            <p data-translate-id="together-we-can-p"></p>
                            <br/>
                            <h2 data-translate-id="thank-you"></h2>
                        </div>
                        <div className="split-screen h-screen-50vh w-full bears">
                        </div>
                    </div>
                </section>
            </div>
        
            <div className="fixed side-container w-screen-10vw">
                <div id="next-section-side" className="arrow hidden"></div>
            </div>
        
            <div className="fixed down-container h-screen-20vh">
                <div id="next-section-down" className="arrow"></div>
            </div>
        </>
    );
};

export { App };
