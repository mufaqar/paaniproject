import React from 'react';

const Banner = ({ title, subtitle, content, links }: any) => {
    return (
        <section className={`md:py-20 py-16`}>
            <div className="container mx-auto px-4">
                <div className="max-w-[920px] mx-auto text-center flex md:flex-col flex-col gap-5 items-center">
                    {title && <h1 className="subTitle">
                        {title}
                    </h1>
                    }
                    {subtitle && <p className="md:text-[64px] md:leading-[80px] text-5xl font-bold text-primary max-w-[730px]">
                        {subtitle}
                    </p>}
                    {content && <p className="text-sm font-medium text-primary mt-2">
                        {content}
                    </p>
                    }
                    {links &&
                        <div className='flex md:flex-row flex-col gap-6 md:mt-12 mt-8'>
                            {links}
                        </div>}
                </div>
            </div>
        </section>
    );
};

export default Banner;
