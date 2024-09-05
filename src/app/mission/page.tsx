import Banner from '@/components/home/banner'
import Countdown from '@/components/mission/countdown'
import { FocusData } from '@/const/relief'
import Image from 'next/image'
import React from 'react'

export default function Mission() {
    return (
        <main>
            <Banner
                subtitle="WATER FOR ALL"
                title="Paani’s Mission"
                content="Our mission is to not only provide temporary relief where we can, but to work toward building permanent solutions against the most complex problems that countries like Pakistan are facing. We strive to combine evidence-based initiatives with cultural competency to ensure that community members feel comfortableand empowered in our presence."
                video="https://www.youtube.com/embed/sffISGgvyPc?si=t4jy68_Mq1NRqaOA" />
            <section className="py-8 md:px-0 px-4">
                <div className="container mx-auto px-4 bg-white md:py-20 py-16 rounded-[50px] md:rounded-[100px]">
                    <div className="max-w-[920px] mx-auto">
                        <h2 className="md:text-5xl text-3xl font-bold text-primary text-center">
                            Our Story
                        </h2>
                        <p className="text-lg font-normal text-primary mt-4">
                            It was a cold and crisp November evening in the basement of the Michigan Union in Ann Arbor. Four Pakistani-American students settled next to the windows to eat fish burgers from the Wendy’s downstairs. The conversation started with gripes about school, but quickly changed direction through a random news article; The International Monetary Fund (IMF) predicts that Pakistan will be one of the most water stressed countries. Fish burgers still half-eaten, this startling fact became a catalyst for frantic research on water accessibility in Pakistan. The conversation shifted from statistics on the crisis to undefined ideas to realistic solutions. That was the day, the seeds for Paani were planted.
                        </p>
                        <p className="text-lg font-normal text-primary mt-4">
                            What started as a hangout to complain about school, shifted into weekly meetings intended to analyze alternative methods to deliver clean water to areas with contamination or without access to water. These meetings with a multi-discipline team resulted in our first solution to supply areas with limited water access; building sustainable wells. To generate the financial capital to build our first well, we purchased and sold donuts to students on their way to class for 3 months. These bake sales turned into deposits. Deposits we used to fund our first well, in rural Sindh.
                        </p>
                        <p className="text-lg font-normal text-primary mt-4">
                            The construction of our first well became the catalyst for continuing change. With motivation from the Prime Minister’s plea for Pakistanis abroad to reinvest in the country, we started a multi-pronged approach toward alleviating the water crisis. To counter a lack of awareness of the water crisis, we built and disseminated a public health sanitation curriculum to ensure that the future generation of Pakistan is inspired to work for this cause. To provide temporary solutions to villages that have no access to clean water, we built over 20,000 wells across high-risk areas throughout Pakistan. To highlight the intersectionality of the water crisis with other societal problems, we secured nearly $1 million in medical supplies that we distributed to hospitals that focus on battling water-borne diseases. To ensure that we utilize the financial capital in our university, we were awarded $5000 from social innovation challenges and were invited to propose our project at their annual showcase.
                        </p>
                        <p className="text-lg font-normal text-primary mt-4">
                            The story of Paani is a story of university students who were inspired to give back to the country that raised their parents by leveraging their resources, their time, and their platform as University of Michigan students. Through grassroots efforts, Paani has grown into a 501(c)(3) non-profit, working closely with student volunteers, both in the United States and abroad to facilitate real, tangible change in Pakistan. The beauty of this project is that our story has only begun. With your help, we can continue to grow and work toward a better future for Pakistan.
                        </p>
                    </div>
                </div>
            </section>
            <section className="py-8 md:px-0 px-4">
                <div className="container mx-auto px-4 bg-navlink md:py-20 py-16 rounded-[50px] md:rounded-[100px]">
                    <div className="max-w-[920px] mx-auto flex md:flex-row flex-col md:gap-12 gap-5 items-start justify-between">
                        <div className="max-w-[410px]">
                            <h2 className="md:text-5xl text-3xl font-bold text-white mt-5">
                                Water Crisis is Ticking
                            </h2>
                        </div>
                        <div className="max-w-[410px]">
                            <p className="text-lg font-normal text-white">
                                According to the Pakistan Council of Research in Water Resources, Pakistan is predicted, by 2025 to reach extreme water shortages. This is compounded with the fact that in present-day, only 1 in 5 people have access to clean drinking water. The other 80% of people are forced to resort to digesting water that has been contaminated with a mixture of sewage and pesticides. The water crisis isn’t something that’s going to improve until you step in.
                            </p>
                        </div>
                    </div>
                    <div className="max-w-[920px] mx-auto md:mt-16 mt-9 grid md:grid-cols-1 grid-cols-1 md:gap-12 gap-5">
                        <Countdown />
                    </div>
                </div>
            </section>
            <section className="py-8 md:px-0 px-4">
                <div className="container mx-auto px-4 bg-secondryBg md:py-20 py-16 rounded-[50px] md:rounded-[100px]">
                    <div className="max-w-[920px] mx-auto">
                        <h2 className="md:text-5xl text-3xl font-bold text-primary text-center">
                            Our Main Focus
                        </h2>
                    </div>
                    <div className="max-w-[920px] mx-auto grid md:grid-cols-4 grid-cols-1 md:gap-12 gap-5 md:mt-16 mt-9">
                        {FocusData?.map((item, idx) => {
                            return <div key={idx} className="flex flex-col gap-5">
                                <div>
                                    <Image src={item?.img} alt="img" width={60} height={60} className="w-[80px] h-[80px] bg-primary rounded object-contain object-center" />
                                </div>
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
        </main>
    )
}
