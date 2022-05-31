import './how-you-can-help.css';

const HowYouCanHelp = () => {

    return (
        <>
            <section id="how-you-can-help-screen" className="how-you-can-help screen-content">    
                <div className="full-screen flex-col md:w-2/3 h-full">
                    <div className="w-2/3 h-full self-center">
                        <div className="py-16 flex flex-col text-center items-center">
                            <h2 data-translate-id="how-you-can-help"></h2>
                        </div>
                        <div className="split-screen-padding flex flex-col space-between items-center text-center">
                            <div className="flex flex-row space-around flex-grow">
                                <div className="help-box-container">
                                    <div className="help-box">
                                        <h1>1</h1>
                                        <h4 data-translate-id="raise-awareness"></h4>
                                    </div>
                                </div>
                                <div className="help-box-container">
                                    <div className="help-box">
                                        <h1>2</h1>
                                        <h4 data-translate-id="donate-to-charities"></h4>
                                    </div>
                                </div>
                                <div className="help-box-container">
                                    <div className="help-box">
                                        <h1>3</h1>
                                        <h4 data-translate-id="become-a-researcher"></h4>
                                    </div>
                                </div>
                            </div>
                            <p className="p-10" data-translate-id="check-out-this-resource"></p>
                            <span className="badge capitalize" data-translate-id="view-volunteer-opportunities"></span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );

};

export { HowYouCanHelp };