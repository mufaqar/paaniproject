import React from 'react';

const Banner = ({ title, subtitle, content, video }: any) => {
    return (
        <section className={`md:py-20 py-16`}>
            <div className="container mx-auto px-4">
                <div className="max-w-[920px] mx-auto flex md:flex-row flex-col gap-5 items-center">
                    <div className='md:w-2/3 w-full'>
                        {subtitle && <p className="subTitle">
                            {subtitle}
                        </p>
                        }
                        {title && <h1 className="md:text-[64px] md:leading-[80px] text-5xl font-bold text-primary max-w-[730px]">
                            {title}
                        </h1>}
                        {content && <p className="text-lg font-normal text-primary mt-4">
                            {content}
                        </p>
                        }
                    </div>
                    {video &&
                        <div className='md:w-1/3 w-full'>
                            <iframe src={video}
                                title="Paani Project Video" frameBorder="0"
                                className="w-full h-full aspect-video"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen></iframe>
                        </div>}
                </div>
            </div>
        </section>
    );
};

export default Banner;
