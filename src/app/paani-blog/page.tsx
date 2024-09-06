import PostBox from '@/components/blog/postBox'
import PageBanner from '@/components/page-banner'
import Link from 'next/link'
import React from 'react'

export default function Blog() {
    return (
        <main>
            <PageBanner
                title="Paani Blog"
            />
            <section className="py-8 md:px-0 px-4">
                <div className="container mx-auto px-4">
                    <div className="max-w-[920px] mx-auto grid md:grid-cols-3 grid-cols-1 md:gap-10 gap-5">
                        {[0, 1, 2, 3, 4, 5, 6, 7]?.map((item, idx) => {
                            return <PostBox
                                key={idx}
                                data={item} />
                        })}
                    </div>
                </div>
            </section>
        </main>
    )
}
