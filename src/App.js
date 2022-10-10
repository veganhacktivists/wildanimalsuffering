import { ContextProvider } from "./state";
import { SectionsContainer } from "./components/sections-container";
import { PageNavigator } from "./components/page-navigator";
import { WheelNavigator } from "./components/wheel-navigator";
import { TouchNavigator } from "./components/touch-navigator";
import { BackgroundEffect } from "./components/background-effect";

const App = () => {
  return (
    <>
      <ContextProvider>
        <SectionsContainer />
        {/* <PageNavigator direction="down"/> */}
        {/* <WheelNavigator /> */}
        {/* <TouchNavigator /> */}
        <BackgroundEffect />
      </ContextProvider>
    </>
  );
};

export { App };
