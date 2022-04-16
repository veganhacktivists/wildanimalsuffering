//Note: If this ever comes from an untrusted source, you have to sanitize the input
import { translations } from './translations';

(() => {

    console.log('test...');

    const addText = (element, language = "en") => {
        const { translateId } = element.dataset;
        if (!translateId) { console.error('data-translate-id elements must have an attribute value'); return; }
        
        const textToAdd = translations[language][translateId];
        if (!translateId) { console.error(`no translation provided for ${translateId} in ${language}`); return; }

        element.innerHTML = textToAdd;
    };

    const loadText = () => {
        console.log('translations=', translations);
        const elementsToTranslate = document.querySelectorAll("[data-translate-id]");
        console.log('elementsToTranslate = ', elementsToTranslate);
        elementsToTranslate.forEach((element) => {
            addText(element);
        });
    };



    const init = () => {
        loadText();
    };

    init();


})();