import './videos-you-might-like.css';

const VideosYouMightLike = () => {

    return (
        <>
            <section id="videos-screen" className="videos screen-content">
                <div className="full-screen flex-col w-full h-full">
                    <div className="py-16 flex justify-center split-screen flex-col h-screen-50vh w-full text-center items-center">
                        <h1 data-translate-id="videos-you-might-like"></h1>
                    </div>
                    <div className="split-screen h-screen-50vh w-full flex-col relative">
                        <div className="flex flex-row">
                            <div className="main-video-container split-screen-padding md:w-2/3 flex flex-col justify-center items-center flex-grow-1">
                                <div className="w-full h-full flex-grow-1">
                                    <iframe className="h-full m-auto" src="https://www.youtube.com/embed/1Dp6gObE9eA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                </div>
                                {/* putting padding here to get the width to match that of the video is pretty hacky :( */}
                                <p className="py-2 text-center" data-translate-id="video-caption"></p>
                            </div>
                            <div className="video-thumbnail-container split-screen-padding md:w-1/3 flex flex-col justify-center flex-grow-0">
                                <div>
                                    <iframe src="https://www.youtube.com/embed/yMtwbur0ylo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                                </div>
                                <div>
                                    <iframe src="https://www.youtube.com/embed/OYJi9zLBjaI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                                </div>
                                <div>
                                    <iframe src="https://www.youtube.com/embed/1VYYHLH990A" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );

};

export { VideosYouMightLike };