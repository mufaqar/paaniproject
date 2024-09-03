import TeamBox from '@/components/team/teamBox'
import React from 'react'
import { TeamData } from '@/const/team'

export default function Team() {
    return (
        <main>
            <section className='md:mt-[-82px] pt-24 pb-16 bg-footerBg'>
                <div className='container max-w-[1070px] mx-auto px-4'>
                    <h2 className='md:text-[30px] md:leading-normal text-2xl font-bold text-white text-center mb-4'>
                        Meet the Team
                    </h2>
                    <p className='text-lg font-normal text-white text-center mb-4'>
                        Our work would be impossible without the dedicated volunteers who work tirelessly to make our vision of a world without water scarcity a reality.
                    </p>
                </div>
                <div className='container max-w-[1070px] mx-auto px-4 grid md:grid-cols-3 grid-cols-1 md:gap-12 gap-5 items-center justify-center mt-6'>
                    {TeamData?.map((item, idx) => (
                        <TeamBox key={idx} data={item} />
                    ))}
                </div>
            </section>
            <section className={`md:py-10 pt-5 pb-5 bg-footerBg`}>
                <div className='container max-w-[600px] mx-auto px-4'>
                    <h2 className='text-lg font-bold text-white text-center mb-5'>
                        The Movement
                    </h2>
                    <p className='text-sm font-normal text-white'>
                        We are the children of immigrants, who left their beloved homeland in hopes for better opportunities for their children. Although Paani started as a nonprofit dedicated to giving back to those from disenfranchised communities in Pakistan, it has evolved into a movement. A movement that hopes to inspire others to invest their time and resources into creating a better future. Paani aims to ingrain this responsibility of community service in children of diaspora. We all can work today for a better tomorrow.
                    </p>
                </div>
            </section>
        </main>
    )
}
