import {
  ANIMAL_STATS_SCREEN_INDEX,
  NUMBER_OF_ANIMAL_STAT_SCREENS,
} from "../constants";

const canGoUp = (state) => state.screenIndex > 0;
const canGoDown = (state) =>
  state.screenIndex < state.screenContentElements.length - 1 &&
  (state.screenIndex !== ANIMAL_STATS_SCREEN_INDEX ||
    state.animalStatIndex === NUMBER_OF_ANIMAL_STAT_SCREENS - 1);
const canGoLeft = (state) =>
  state.screenIndex === ANIMAL_STATS_SCREEN_INDEX && state.animalStatIndex > 0;
const canGoRight = (state) =>
  state.screenIndex === ANIMAL_STATS_SCREEN_INDEX &&
  state.animalStatIndex < NUMBER_OF_ANIMAL_STAT_SCREENS - 1;

export { canGoUp, canGoDown, canGoLeft, canGoRight };
