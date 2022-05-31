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

    // const canMovePastWildAnimalStats = (event) => {

    //     const isLastAnimalStatScreen = isLastAnimalStat();
    //     const isFirstAnimalStatScreen = isFirstAnimalStat();
    //     const direction = getDirection(event);

    //     return (isLastAnimalStatScreen && direction === DOWN) || (isFirstAnimalStatScreen && direction === UP);
    // };    

    const handleWheel = (event) => {

        //if is mobile and last of the animal stats isn't loaded, don't load the next screen
        const isDeviceMobile = isMobile();
        const movingPastAnimalStats = canMovePastWildAnimalStats(event);

        if (isDeviceMobile) { return false; }

        if (!movingPastAnimalStats) {
            throttle(updateAnimalStatsOnMouseEvent, 500);
        }
        if (movingPastAnimalStats) {

            event.preventDefault();
            event.stopPropagation();
            throttle(updateAnimalStatsOnMouseEvent, 500);
            return false; // handled by the touchstart event
        }

    };

    const handleTouchStart = (event) => {

        const movingPastAnimalStats = canMovePastWildAnimalStats(event);
        if (!movingPastAnimalStats) {
            event.preventDefault();
            event.stopPropagation();
            return false;
        }

    };

    const handleTouchMove = (event) => {
        //if is mobile and last of the animal stats isn't loaded, load the next animal stat
        const isDeviceMobile = isMobile();
        const movingPastAnimalStats = canMovePastWildAnimalStats(event);

        if (!isDeviceMobile) { return false; }

        if (!movingPastAnimalStats) {
            event.preventDefault();
            event.stopPropagation();
            throttle(updateAnimalStatsOnMouseEvent, 500);
            return false;
        }
        if (movingPastAnimalStats) {
            //reset the screen back to mod-0
            throttle(updateAnimalStatsOnMouseEvent, 2000);
        }

    };
    
    document.querySelector(".animal-stats").addEventListener("wheel", handleWheel, { passive: false });
    document.querySelector(".animal-stats").addEventListener("touchstart", handleTouchStart, { passive: false });
    document.querySelector(".animal-stats").addEventListener("touchmove", handleTouchMove, { passive: false });
};

const registerMouseHandlers = () => {
};


export { registerTouchStart, getDirection, registerMouseHandlers, UP, DOWN };