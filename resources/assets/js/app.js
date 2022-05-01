//Note: If this ever comes from an untrusted source, you have to sanitize the input
import { translations } from './translations';
import { isInViewport, isMobile, throttle } from './utils';

const UP = -1;
const DOWN = 1;

(() => {

    let animalStatsIndex = 0;
    let sectionInViewport = {
        element: null,
        index: null
    };
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
        for (let index = 0; index < numberOnASide*numberOnASide; index++) {
            const element = document.createElement("div");
            element.className = `${color}-square`;
            squaresContainer.appendChild(element);
        }

    };

    const isLastAnimalStat = () => {
        return animalStatsIndex === (squares.length - 2);
    };

    // document.querySelector(".animal-stats").addEventListener("click", function () {
    //     modAnimalStat();
    // });

    const modAnimalStat = () => {
        animalStatsIndex = (animalStatsIndex+1) % squares.length;
        console.log('modAnimalStats - animalStatsIndex=', animalStatsIndex);
    };

    const updateAnimalStats = () => {

        const animalStatsElements = document.querySelectorAll("p.animal-stat");
        animalStatsElements.forEach((element) => {
            element.classList.add("hidden");
        });
        animalStatsElements[animalStatsIndex].classList.remove("hidden");
    };

    const isAnimalStatScreen = () => {
        return sectionInViewport?.element?.className?.includes('animal-stats');
    };

    document.querySelector(".animal-stats").addEventListener("wheel", function (event, delta) {

        //if is mobile and last of the animal stats isn't loaded, don't load the next screen
        const isDeviceMobile = isMobile();
        const isLastAnimalStatScreen = isLastAnimalStat();
        const direction = delta > 0 ? UP: DOWN;

        console.log('wheel - isDeviceMobile=', isDeviceMobile);
        console.log('wheel - isLastAnimalStatScreen=', isLastAnimalStatScreen);


        if (!isLastAnimalStatScreen) {

            event.preventDefault();
            event.stopPropagation();
            updateAnimalStatsOnMouseEvent();
            // throttle(updateAnimalStatsOnMouseEvent, 500, {leading: false});
            return false; // handled by the touchstart event
        }



    }, { passive: false });

    document.querySelector(".animal-stats").addEventListener("touchstart", function (event) {
        console.log('touchstart...');
        //if is mobile and last of the animal stats isn't loaded, load the next animal stat
        const isDeviceMobile = isMobile();
        const isLastAnimalStatScreen = isLastAnimalStat();

        if (isDeviceMobile && !isLastAnimalStatScreen) {
            
            event.preventDefault();
            event.stopPropagation();
            throttle(() => {
                updateAnimalStatsOnMouseEvent(event);
            }, 500);
            return false;
        }

    }, { passive: false });
    
    
    const updateAnimalStatsOnMouseEvent = (event) => {

        throttle(modAnimalStat, 500);
        // modAnimalStat();
        loadAnimalTextStats();
        updateSectionInViewport();
        updateAnimalStats();
        updatePageIndicatorDots();
    };

    const updateSectionInViewport = () => {
        const sectionElements = document.querySelectorAll("section");
        const index = [...sectionElements].findIndex((sectionElement, index) => {
            return isInViewport(sectionElement);
        });
        sectionInViewport = {
            index,
            element: sectionElements[index]
        };
    };

    const updatePageIndicatorDots = () => {

        const pageIndicatorDots = document.querySelectorAll(".page-indicator-dot");
        pageIndicatorDots.forEach((dotElement, i) => {
            dotElement.className = `page-indicator-dot ${sectionInViewport.index === i ? 'filled' : ''}`;
        });
    };

    const loadAnimalTextStats = () => {
        const squareData = squares[animalStatsIndex];
        addSquares(squareData.numberOnASide, squareData.color);
        updateAnimalStats();
    };

    const init = async () => {

        loadText();
        loadAnimalTextStats();
    };

    init();


})();