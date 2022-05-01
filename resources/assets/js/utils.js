import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../../../tailwind.config.js';


// assumes tailwind md is the only breakpoint
const isMobile = () => {
    const fullConfig = resolveConfig(tailwindConfig);
    return window.innerWidth < parseInt(fullConfig.theme.screens.md);
};

// https://www.javascripttutorial.net/dom/css/check-if-an-element-is-visible-in-the-viewport/
const isInViewport = (el) => {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)

    );
};
// Lodash's throttle function wasn't working. This does exactly what I want it to.
// https://webdesign.tutsplus.com/tutorials/javascript-debounce-and-throttle--cms-36783
let throttlePause;
 
const throttle = (callback, time) => {
  //don't run the function if throttlePause is true
  if (throttlePause) return;
 
  //set throttlePause to true after the if condition. This allows the function to be run once
  throttlePause = true;
   
  //setTimeout runs the callback within the specified time
  setTimeout(() => {
    callback();
     
    //throttlePause is set to false once the function has been called, allowing the throttle function to loop
    throttlePause = false;
  }, time);
};

export { isInViewport, isMobile, throttle };