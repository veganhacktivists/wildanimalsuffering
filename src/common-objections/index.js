import './common-objections.css';

const CommonObjections = () => {

    return (
        <>
            <section id="common-objections-screen" className="common-objections screen-content">
                <div className="full-screen flex-col md:w-2/3 h-full">
                    <div className="w-2/3 h-full self-center">
                        <div className="py-16 flex flex-col text-center items-center">
                            <h2 data-translate-id="common-objections"></h2>
                        </div>
                        
                        <div className="split-screen-padding flex flex-col space-between items-center">
                            <div className="panel-container">
                                <div className="common-objection panel panel-open">
                                    <h4 className="brown" data-translate-id="its-not-ours"></h4>
                                    <div data-translate-id="personally-responsible"></div>
                                </div>
                            </div>
                            <div className="panel-container">
                                <div className="common-objection panel">
                                    <h4 className="brown" data-translate-id="its-not-ours"></h4>
                                    <div data-translate-id="personally-responsible"></div>
                                </div>
                            </div>
                            <div className="panel-container">
                                <div className="common-objection panel">
                                    <h4 className="brown" data-translate-id="its-not-ours"></h4>
                                    <div data-translate-id="personally-responsible"></div>
                                </div>
                            </div>
                            <div className="panel-container">
                                <div className="common-objection panel">
                                    <h4 className="brown" data-translate-id="its-not-ours"></h4>
                                    <div data-translate-id="personally-responsible"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );

};

export { CommonObjections };