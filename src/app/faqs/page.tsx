import FaqBox from '@/components/home/faqBox'
import PageBanner from '@/components/page-banner'
import { FaqsData } from '@/const/faqs'
import React from 'react'

export default function FAQs() {
    return (
        <main>
            <PageBanner
                title="Frequently Asked Questions"
                content="For questions, comments, or concerns, please contact us." />
            <section className="py-8">
                <div className="container max-w-[920px] mx-auto px-4">
                    <div className="max-w-[920px] mx-auto flex flex-col gap-7">
                        {FaqsData?.map((item, idx) => {
                            return <FaqBox key={idx} data={item} />
                        })}
                    </div>
                </div>
            </section>
        </main>
    )
}
