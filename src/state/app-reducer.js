import { translations } from "../utils/translations";
import {
  ANIMAL_STATS_SCREEN_INDEX,
  DEFAULT_LANGUAGE_KEY,
  NUMBER_OF_ANIMAL_STAT_SCREENS,
} from "../constants";

const reducer = (state, action) => {
  switch (action.type) {
    case "REGISTER_SCREEN_CONTENT_ELEMENTS":
      return {
        ...state,
        screenId: [...action.payload.screenContentElements].map((e) => e.id)[0],
        screenContentElements: [...action.payload.screenContentElements],
      };

    case "NEXT_SCREEN": {
      const screenIndex = getNextScreenIndex(state);
      const isAnimalStatsScreen = getIsAnimalStatsScreen(screenIndex);

      return {
        ...state,
        screenIndex,
        screenId: state.screenContentElements.map((e) => e.id)[screenIndex],
        isAnimalStatsScreen,
        abyssOverlay: !!state.isAnimalStatsScreen,
        animalStatIndex: 0,
        isForEveryHumanBufferScreen: true,
      };
    }

    case "PREV_SCREEN": {
      const screenIndex = getPrevScreenIndex(state);
      const isAnimalStatsScreen = getIsAnimalStatsScreen(screenIndex);

      return {
        ...state,
        screenIndex,
        screenId: state.screenContentElements.map((e) => e.id)[screenIndex],
        isAnimalStatsScreen,
        abyssOverlay: !!state.isAnimalStatsScreen,
        animalStatIndex: 0,
        isForEveryHumanBufferScreen: true,
      };
    }

    case "NEXT_ANIMAL_STAT": {
      const isCurrentScreenAnimalStatsScreen = getIsAnimalStatsScreen(
        state.screenIndex
      );

      let animalStatIndex = 0;
      if (state.isForEveryHumanBufferScreen) {
        animalStatIndex = 0;
      } else {
        animalStatIndex = isCurrentScreenAnimalStatsScreen
          ? Math.min(
              NUMBER_OF_ANIMAL_STAT_SCREENS - 1,
              state.animalStatIndex + 1
            )
          : 0;
      }
      return {
        ...state,
        isAnimalStatsScreen: true,
        abyssOverlay: true,
        animalStatIndex,
        isForEveryHumanBufferScreen: false,
      };
    }

    case "PREV_ANIMAL_STAT": {
      return {
        ...state,
        isAnimalStatsScreen: true,
        abyssOverlay: true,
        animalStatIndex: Math.max(0, state.animalStatIndex - 1),
        isForEveryHumanBufferScreen: false,
      };
    }

    case "GO_TO_SCREEN_BY_ID": {
      const screenIndex = getScreenIndexById(
        state.screenContentElements,
        action.payload.screenId
      );
      const isAnimalStatsScreen = getIsAnimalStatsScreen(screenIndex);
      return {
        ...state,
        screenIndex,
        screenId: action.payload.screenId,
        isAnimalStatsScreen,
        abyssOverlay: false,
        animalStatIndex: 0,
        isForEveryHumanBufferScreen: true,
      };
    }

    case "DIALOG_OPEN_CHANGE": {
      if (action.payload.isOpen && action.payload?.dialogId) {
        state.openDialogs.add(action.payload.dialogId);
      } else {
        console.log(
          `deleting ${action.payload.dialogId}. state.openDialogs=`,
          state.openDialogs
        );
        state.openDialogs.delete(action.payload.dialogId);
      }
      return {
        ...state,
        openDialogs: new Set(state.openDialogs),
      };
    }

    case "CHANGE_LANGUAGE": {
      if (!translations[action.payload.locale]) {
        console.warn(
          `No translations provided for ${locale}... Defaulting to ${DEFAULT_LANGUAGE_KEY}`
        );
      }
      const locale =
        action.payload.locale && translations[action.payload.locale]
          ? action.payload.locale
          : "en";
      return {
        ...state,
        locale,
      };
    }

    default:
      return state;
  }
};

const getIsAnimalStatsScreen = (screenIndex) => {
  return screenIndex === ANIMAL_STATS_SCREEN_INDEX;
};

const getNextScreenIndex = (state) => {
  const { screenIndex, screenContentElements } = state;

  return Math.min(screenContentElements.length - 1, screenIndex + 1);
};

const getPrevScreenIndex = (state) => {
  const { screenIndex } = state;

  return Math.max(0, screenIndex - 1);
};

const getScreenIndexById = (screenContentElements, screenId) => {
  return screenContentElements.map((e) => e.id).indexOf(screenId);
};

export { reducer };
