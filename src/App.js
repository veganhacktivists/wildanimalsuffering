import { BackgroundEffect } from "./components/background-effect";
import { SectionsContainer } from "./components/sections-container";
import { ContextProvider } from "./state";

const App = () => {
  return (
    <>
      {/* @ts-ignore */}
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
