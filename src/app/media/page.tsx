import MediaPost from '@/components/mediapost'
import PageBanner from '@/components/page-banner'
import React from 'react'

export default function Media() {
    return (
        <main>
            <PageBanner
                title="Paani in the News"
            />
            <section className="py-8 md:px-0 px-4">
                <div className="container mx-auto px-4">
                    <div className="max-w-[920px] mx-auto flex flex-col divide-y divide-primary">
                        {[0, 1, 2, 3, 4, 5, 6, 7]?.map((item, idx) => {
                            return <MediaPost
                                key={idx}
                                data={item} />
                        })}
                    </div>
                </div>
            </section>
        </main>
    )
}
