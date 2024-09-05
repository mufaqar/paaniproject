import FaqBox from '@/components/home/faqBox'
import { FaqsData } from '@/const/faqs'
import React from 'react'

export default function FAQs() {
    return (
        <main>
            <section className="md:py-20 py-16">
                <div className="container max-w-[920px] mx-auto px-4">
                    <div className="max-w-[920px] mx-auto flex md:flex-row flex-col md:gap-12 gap-5 md:items-start justify-between">
                        <div className="max-w-[410px]">
                            <h2 className="md:text-5xl text-3xl font-bold text-primary">
                                Frequently Asked Questions
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
