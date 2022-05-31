import './together-we-can.css';

const TogetherWeCan = () => {

    return (
        <>
            <section id="together-we-can-screen" className="together-we-can screen-content">
                <div className="full-screen w-full h-full">
                    <div className="split-screen h-screen-50vh mt-10">
                        <h2 className="mr-8" data-translate-id="together-we-can"></h2>
                        <br/>
                        <p data-translate-id="together-we-can-p"></p>
                        <br/>
                        <h2 data-translate-id="thank-you"></h2>
                    </div>
                    <div className="split-screen h-screen-50vh w-full bears">
                    </div>
                </div>
            </section>
        </>
    );

};

export { TogetherWeCan };