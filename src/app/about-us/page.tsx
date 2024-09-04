import Banner from '@/components/home/banner'
import FaqBox from '@/components/home/faqBox'
import { FaqsData } from '@/const/faqs'
import { FocusData } from '@/const/relief'
import Link from 'next/link'
import React from 'react'

export default function About_Us() {
    return (
        <main>
            <Banner
                subtitle="WATER FOR ALL"
                title="Our Mission"
                content="Our mission is to not only provide temporary relief where we can, but to work towards building permanent solutions against the most complex problems"
            />
            <section className="py-8">
                <div className="container mx-auto px-4 bg-secondryBg md:py-20 py-16 rounded-[100px]">
                    <div className="max-w-[920px] mx-auto">
                        <h2 className="md:text-5xl text-3xl font-bold text-primary text-center">
                            Our Focus
                        </h2>
                    </div>
                    <div className="max-w-[920px] mx-auto grid md:grid-cols-4 grid-cols-1 md:gap-16 gap-5 md:mt-16 mt-9">
                        {FocusData?.map((item, idx) => {
                            return <div key={idx} className="flex flex-col gap-5">
                                <h3 className="md:text-[22px] md:leading-[28px] text-xl font-bold text-primary">
                                    {item?.title}
                                </h3>
                                <p className="text-lg font-normal text-primary">
                                    {item?.content}
                                </p>
                            </div>
                        })}
                    </div>
                </div>
            </section>
            <section className="md:py-20 py-16">
                <div className="container max-w-[920px] mx-auto px-4">
                    <div className="max-w-[920px] mx-auto flex md:flex-row flex-col md:gap-12 gap-5 items-center justify-between">
                        <div className="max-w-[410px]">
                            <h3 className="subTitle">
                                FREQUENTLY ASKED QUESTIONS
                            </h3>
                            <h2 className="md:text-5xl text-3xl font-bold text-primary mt-5">
                                Find out more about Paani.
                            </h2>
                        </div>
                        <div className="max-w-[410px]">
                            <p className="text-lg font-normal text-primary">
                                For questions, comments, or concerns, please contact us.
                            </p>
                        </div>
                    </div>
                    <div className="max-w-[920px] mx-auto md:mt-16 mt-9 flex flex-col gap-7">
                        {FaqsData?.map((item, idx) => {
                            return <FaqBox key={idx} data={item} />
                        })}
                    </div>
                </div>
            </section>
        </main>
    )
}
