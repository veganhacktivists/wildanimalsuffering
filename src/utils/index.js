import { registerTouchStart, getDirection, registerMouseHandlers, UP, DOWN } from './mouse';
import { isInViewport, isMobile } from './screen';

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

// https://www.freecodecamp.org/news/javascript-debounce-example/
const debounce = (func, timeout = 500) => {
	let timer;
	return (...args) => {
		clearTimeout(timer);
		timer = setTimeout(() => { func.apply(this, args); }, timeout);
	};
};

const pad = (n, size) => {
	let num = n.toString();
	while (num.length < size) {
		num = '0' + num;
	}
	return num;
};

export {
	pad,
	registerTouchStart, getDirection, registerMouseHandlers, UP, DOWN,
	isInViewport, isMobile, throttle, debounce
};