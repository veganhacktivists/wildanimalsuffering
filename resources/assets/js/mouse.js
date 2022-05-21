const UP = -1;
const DOWN = 1;

let yPosStart;
const registerTouchStart = (e) => {
    yPosStart = e.originalEvent?.touches[0]?.clientY;
};

const getDirection = (e) => {
    const yPosEnd = e.originalEvent?.changedTouches[0]?.clientY;
    return yPosEnd - yPosStart ? UP : DOWN;
};

const listenToScrollChanges = () => {
    
};

const registerMouseHandlers = () => {
};


export { registerTouchStart, getDirection, registerMouseHandlers, UP, DOWN };