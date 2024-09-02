import React from 'react';

const Banner = () => {
    return (
        <section className={`md:py-44 pt-24 pb-16 bg-[url('/images/home.webp')] bg-cover bg-center bg-no-repeat bg-blend-overlay bg-black/50 md:mt-[-82px]`}>
            <div className="container mx-auto px-4 flex md:flex-row flex-col gap-5 items-center">
                <div className="text-center md:w-1/2 w-full">
                    <h1 className="md:text-[32px] text-2xl font-bold text-white max-w-[496px] mx-auto">
                        Paani Project
                    </h1>
                    <p className="text-lg font-medium text-white max-w-[496px] mx-auto">
                        Transparent • Fast • Trustworthy
                    </p>
                    <p className="text-sm font-medium text-white max-w-[496px] mx-auto mt-2">
                        A global nonprofit fueled by young volunteers to supply clean water & foster empowerment across Pakistan.
                    </p>
                </div>
                <div className="w-full md:w-1/2">
                    <div className="relative aspect-w-16 aspect-h-9 max-w-[407px] mx-auto">
                        <iframe
                            src="https://www.youtube.com/embed/8pvSZ_JSUhM"
                            title="Paani Project Video"
                            frameBorder="0"
                            className="w-full h-full aspect-video"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
