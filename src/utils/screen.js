import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config.js";

// Note: 'isMobile'  might not always work well  - for instance, when resizing the browser, or
// going from portrait to landscape.
const isMobile = () => {
  // const fullConfig = resolveConfig(tailwindConfig);
  // return window.innerWidth < parseInt(fullConfig.theme.screens.md);
};

// const getNextScreenContentElement = (currentElement, screenContentElements) => {

//     const currentIndex = [...screenContentElements].findIndex((sectionElement, index) => {
//         return (sectionElement === currentElement);
//     });

//     if (currentIndex === screenContentElements.length) { return currentIndex; }

//     return screenContentElements[currentIndex + 1];

// };

// https://www.javascripttutorial.net/dom/css/check-if-an-element-is-visible-in-the-viewport/
const isInViewport = (el) => {
  // const rect = el.getBoundingClientRect();
  // return (
  // 	rect.top >= 0 &&
  //     rect.left >= 0 &&
  //     rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
  //     rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  // );
};

export { isMobile, isInViewport };
