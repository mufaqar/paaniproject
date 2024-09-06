import TeamBox from '@/components/team/teamBox'
import React from 'react'
import { TeamData } from '@/const/team'
import PageBanner from '@/components/page-banner'

export default function Team() {
    return (
        <main>
            <PageBanner
                title="Meet the Team"
                content="Our work would be impossible without the dedicated volunteers who work tirelessly to make our vision of a world without water scarcity a reality." />
            <section className="py-8">
                <div className="container mx-auto px-4 ">
                    <div className="max-w-[920px] mx-auto grid md:grid-cols-3 grid-cols-1 md:gap-16 gap-5">
                        {TeamData?.map((item, idx) => (
                            <TeamBox key={idx} data={item} />
                        ))}
                    </div>
                </div>
            </section>
            <section className="py-8 md:px-0 px-4">
                <div className="container mx-auto px-4 bg-secondryBg md:py-20 py-16 rounded-[50px] md:rounded-[100px]">
                    <div className="max-w-[920px] mx-auto">
                        <h2 className="md:text-5xl text-3xl font-bold text-primary text-center">
                            The Movement
                        </h2>
                        <p className="text-lg font-normal text-primary text-center mt-4">
                            We are the children of immigrants, who left their beloved homeland in hopes for better opportunities for their children. Although Paani started as a nonprofit dedicated to giving back to those from disenfranchised communities in Pakistan, it has evolved into a movement. A movement that hopes to inspire others to invest their time and resources into creating a better future. Paani aims to ingrain this responsibility of community service in children of diaspora. We all can work today for a better tomorrow.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    )
}
