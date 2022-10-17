import "./how-you-can-help.css";

const HowYouCanHelp = () => {
  return (
    <>
      <section
        id="how-you-can-help-screen"
        data-name="How You Can Help"
        className="how-you-can-help screen-content"
      >
        <div className="full-screen h-full flex-col md:w-2/3">
          <div className="h-full w-2/3 self-center">
            <div className="flex flex-col items-center py-16 text-center">
              <h2>how can you help?</h2>
            </div>
            <div className="split-screen-padding space-between flex flex-col items-center text-center">
              <div className="space-around flex flex-grow flex-row">
                <div className="help-box-container">
                  <div className="help-box">
                    <h1>1</h1>
                    <h4>RAISE AWARENESS</h4>
                  </div>
                </div>
                <div className="help-box-container">
                  <div className="help-box">
                    <h1>2</h1>
                    <h4>DONATE TO CHARITIES</h4>
                  </div>
                </div>
                <div className="help-box-container">
                  <div className="help-box">
                    <h1>3</h1>
                    <h4>STARTER KIT SIGNUP</h4>
                  </div>
                </div>
              </div>
              <p className="p-10">
                In addition to the three items above, you can find potential
                career opportunies here. Are you a researcher? Apply for a
                grant!
              </p>
              <span className="badge capitalize">
                view volunteer opportunities
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export { HowYouCanHelp };
