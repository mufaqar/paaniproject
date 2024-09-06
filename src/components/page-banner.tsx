import React from 'react';

const PageBanner = ({ title, subtitle, content, video }: any) => {
    return (
        <section className="md:py-20 py-10">
            <div className="container max-w-[920px] mx-auto px-4">
                <div className="max-w-[920px] mx-auto flex md:flex-row flex-col md:gap-12 gap-5 md:items-start justify-between">
                    <div className="max-w-[410px]">
                        {subtitle && <h3 className="subTitle">
                            {subtitle}
                        </h3>}
                        {title && <h1 className="md:text-5xl text-3xl font-bold text-primary mt-5">
                            {title}
                        </h1>}
                    </div>
                    {content && <div className="max-w-[410px]">
                        <p className="text-lg font-normal text-primary">
                            {content}
                        </p>
                    </div>}
                </div>
            </div>
        </section>
    );
};

export default PageBanner;
