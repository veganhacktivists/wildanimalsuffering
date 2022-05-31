import './population-dynamics.css';

const PopulationDynamics = () => {

    return (
        <>
            <section id="population-dynamics-screen" className="population-dynamics screen-content">
                <div className="full-screen flex-col w-full h-full">
                    <div className="py-16 flex justify-center split-screen flex-col h-screen-50vh w-full text-center items-center">
                        <h1 className="md:w-[75%]" data-translate-id="population-dynamics"></h1>
                        <p className="md:w-[40%]" data-translate-id="tend-to-have-a-lot-of-children"></p>
                    </div>
                    <div className="split-screen h-screen-50vh w-full flex-col relative">
                        <div className="population-dynamics-duck w-80 h-1/2 md:flex md:flex-row md:flex-end md:w-full"></div>
                        <div className="baby-duck-01"></div>
                        <div className="baby-duck-02"></div>
                        <div className="baby-duck-03"></div>
                        <div className="baby-duck-04"></div>
                        <div className="baby-duck-05"></div>
                        <div className="baby-duck-06"></div>
                        <div className="baby-duck-07"></div>
                        <div className="baby-duck-08"></div>
                        <div className="baby-duck-09"></div>
                        <div className="baby-duck-10"></div>
                    </div>
                </div>
            </section>
        </>
    );

};

export { PopulationDynamics };