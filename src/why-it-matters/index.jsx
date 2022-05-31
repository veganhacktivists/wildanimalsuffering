import './why-it-matters.css';

const WhyItMatters = () => {

    return (
        <section id="wild-animal-suffering-screen" className="screen-content wild-animal-suffering">
            <div className="h-screen flex flex-col justify-start">
                <div className="birds-01 absolute"></div>
                <div className="birds-02 absolute"></div>
                <div className="h-screen-70vh flex flex-col md:flex-row md:pt-16">
                    <div id="elephant-image-container" className="split-screen flex-col h-screen-50vh">
                        <div className="justify-center md:hidden">
                            <h1 data-translate-id="wild-animal-suffering-header"></h1>
                            <h3 className="orange" data-translate-id="why-it-matters"></h3>
                        </div>
                        <div className="h-full elephants"></div>
                    </div>
                    <div className="split-screen flex-col h-screen-30vh justify-center">
                        <div className="hidden md:block">
                            <h1 data-translate-id="wild-animal-suffering-header"></h1>
                            <h3 className="orange" data-translate-id="why-it-matters"></h3>
                        </div>
                        <div className="subheading flex flex-row pt-4">
                            <div className="pr-4">
                                <p data-translate-id="idealise"></p>
                            </div>
                            <div className="pl-4">
                                <p data-translate-id="relief"></p>
                            </div>
                        </div>
                    </div>
                </div>
        
                <div className="h-screen-10vh p-4 md:p-10">
                    <div className="text-center">
                        <h5 className="pb-4" data-translate-id="it-matters"></h5>
                        <span className="badge capitalize" data-translate-id="begin-learning"></span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export { WhyItMatters };