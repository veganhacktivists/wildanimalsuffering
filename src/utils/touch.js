const TOUCH_SCROLL_THRESHOLD = 10;

const getTouchScrollDirection = (startX, endX, startY, endY) => {
	if (Math.abs(endX - startX) > Math.abs(endY - startY)) {
		if (endX > startX + TOUCH_SCROLL_THRESHOLD) {
			return 'left';
		}
		if (endX < startX - TOUCH_SCROLL_THRESHOLD) {
			return 'right';
		}
	} else {
		if (endY > startY + TOUCH_SCROLL_THRESHOLD) {
			return 'up';
		}
		if (endY < startY - TOUCH_SCROLL_THRESHOLD) {
			return 'down';
		}
	}

	return null;
};

export { getTouchScrollDirection };
