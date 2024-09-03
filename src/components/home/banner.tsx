import React from 'react';

const Banner = ({ title, img, subtitle, content,video }: any) => {
    return (
        <section className={`md:py-44 pt-24 pb-16 bg-cover bg-center bg-no-repeat bg-blend-overlay bg-black/50 md:mt-[-82px]`}
            style={{ backgroundImage: `url('/images/${img}')` }}>
            <div className="container mx-auto px-4 flex md:flex-row flex-col gap-5 items-center">
                <div className="text-center md:w-1/2 w-full">
                    {title && <h1 className="md:text-[32px] text-2xl font-bold text-white max-w-[496px] mx-auto">
                        {title}
                    </h1>
                    }
                     {subtitle &&<p className="text-lg font-medium text-white max-w-[496px] mx-auto">
                        {subtitle}
                    </p>}
                    {content && <p className="text-sm font-medium text-white max-w-[496px] mx-auto mt-2">
                        {content}
                    </p>
                    }
                </div>
                <div className="w-full md:w-1/2">
                    <div className="relative aspect-w-16 aspect-h-9 max-w-[407px] mx-auto">
                        <iframe
                            src={video}
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
