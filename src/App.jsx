
//Note: If this ever comes from an untrusted source, you have to sanitize the input
import { CommonObjections } from './common-objections';
import { registerMouseHandlers } from './utils';
import { translations } from './utils/translations';

import { EvenWorse } from './even-worse';
import { HowYouCanHelp } from './how-you-can-help';
import { Organisations } from './organisations';
import { OtherResources } from './other-resources';
import { PopulationDynamics } from './population-dynamics';
import { TogetherWeCan } from './together-we-can';
import { VideosYouMightLike } from './videos-you-might-like';
import { WhyItMatters } from './why-it-matters';
import { WildAnimalStats } from './wild-animal-stats';



const App = () => {


    let sectionInViewport = {
        element: null,
        index: null
    };
    let screenIndex = 0;

    const downArrow = document.getElementById("next-section-down");
    const abyssContainer = document.getElementById("abyss-container");

    const screenContentElements = document.querySelectorAll(".screen-content");


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



    const goToUrlHashSection = () => {
        if (!window.location.hash) { return; }
        const screenId = window.location.hash?.substring(1);
        document.getElementById(screenId).scrollIntoView({ behavior: "smooth" });
        updateScreenIndex(screenId);

    };

    const updateScreenIndex = (screenId) => {
        screenIndex = [...screenContentElements].map((e) => e.id).indexOf(screenId);
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
        } else {
            downArrow.classList.remove("hidden");
        }
    };

    const goToNextSection = () => {

        screenIndex = (screenIndex + 1) % screenContentElements.length;
        const nextScreenId = screenContentElements[screenIndex].id;
        document.getElementById(nextScreenId).scrollIntoView({ behavior: "smooth" });

        const location = window.location.toString().split('#')[0];
        history.replaceState(null, null, location + '#' + nextScreenId);
    };

    const init = async () => {
        registerMouseHandlers(screenContentElements);
        loadText();
        goToUrlHashSection();

    };

    init();


    
    return (
        <>
            <div id="up-arrow">
            
            </div>
            <div className="absolute h-screen scrollsnap-y">
                <WhyItMatters />
                <WildAnimalStats />
                <EvenWorse />
                <PopulationDynamics />
                <VideosYouMightLike />
                <CommonObjections />
                <HowYouCanHelp />
                <Organisations />
                <OtherResources />
                <TogetherWeCan />
            </div>
        
            <div className="fixed down-container h-screen-20vh">
                <div className="arrow" onClick={handleDownClick}></div>
            </div>
        </>
    );
};

export { App };
