//Note: If this ever comes from an untrusted source, you have to sanitize the input
import { translations } from './translations';

(() => {

    let animalStatsIndex = 0;
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

    document.addEventListener("click", function () {
        animalStatsIndex = (animalStatsIndex + 1) % squares.length;
        loadAnimalTextStats();
    });

    const loadAnimalTextStats = () => {
        const squareData = squares[animalStatsIndex];
        addSquares(squareData.numberOnASide, squareData.color);
    };

    const init = async () => {

        loadText();
        loadAnimalTextStats();
    };

    init();


})();