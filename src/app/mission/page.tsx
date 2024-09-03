import Banner from '@/components/home/banner'
import Countdown from '@/components/mission/countdown'
import Image from 'next/image'
import React from 'react'

export default function Mission() {
    return (
        <main>
            <Banner
                img="mission-banner.jpeg"
                title="Paani’s Mission"
                content="Our mission is to not only provide temporary relief where we can, but to work toward building permanent solutions against the most complex problems that countries like Pakistan are facing. We strive to combine evidence-based initiatives with cultural competency to ensure that community members feel comfortableand empowered in our presence."
                video="https://www.youtube.com/watch?v=sffISGgvyPc" />
            <section className='py-7 bg-footerBg'>
                <div className='container max-w-[940px] mx-auto px-4'>
                    <h2 className='md:text-[30px] md:leading-normal text-2xl font-bold text-white mb-4'>
                        Our Story
                    </h2>
                    <p className='text-sm font-normal text-white mb-4'>
                        It was a cold and crisp November evening in the basement of the Michigan Union in Ann Arbor. Four Pakistani-American students settled next to the windows to eat fish burgers from the Wendy’s downstairs. The conversation started with gripes about school, but quickly changed direction through a random news article; The International Monetary Fund (IMF) predicts that Pakistan will be one of the most water stressed countries. Fish burgers still half-eaten, this startling fact became a catalyst for frantic research on water accessibility in Pakistan. The conversation shifted from statistics on the crisis to undefined ideas to realistic solutions. That was the day, the seeds for Paani were planted.
                    </p>
                    <p className='text-sm font-normal text-white mb-4'>
                        What started as a hangout to complain about school, shifted into weekly meetings intended to analyze alternative methods to deliver clean water to areas with contamination or without access to water. These meetings with a multi-discipline team resulted in our first solution to supply areas with limited water access; building sustainable wells. To generate the financial capital to build our first well, we purchased and sold donuts to students on their way to class for 3 months. These bake sales turned into deposits. Deposits we used to fund our first well, in rural Sindh.
                    </p>
                    <p className='text-sm font-normal text-white mb-4'>
                        The construction of our first well became the catalyst for continuing change. With motivation from the Prime Minister’s plea for Pakistanis abroad to reinvest in the country, we started a multi-pronged approach toward alleviating the water crisis. To counter a lack of awareness of the water crisis, we built and disseminated a public health sanitation curriculum to ensure that the future generation of Pakistan is inspired to work for this cause. To provide temporary solutions to villages that have no access to clean water, we built over 20,000 wells across high-risk areas throughout Pakistan. To highlight the intersectionality of the water crisis with other societal problems, we secured nearly $1 million in medical supplies that we distributed to hospitals that focus on battling water-borne diseases. To ensure that we utilize the financial capital in our university, we were awarded $5000 from social innovation challenges and were invited to propose our project at their annual showcase.
                    </p>
                    <p className='text-sm font-normal text-white mb-4'>
                        The story of Paani is a story of university students who were inspired to give back to the country that raised their parents by leveraging their resources, their time, and their platform as University of Michigan students. Through grassroots efforts, Paani has grown into a 501(c)(3) non-profit, working closely with student volunteers, both in the United States and abroad to facilitate real, tangible change in Pakistan. The beauty of this project is that our story has only begun. With your help, we can continue to grow and work toward a better future for Pakistan.
                    </p>
                </div>
            </section>
            <section className='py-7 bg-footerBg'>
                <div className='container max-w-[940px] mx-auto px-4'>
                    <Countdown />
                </div>
            </section>
            <section className='py-7 bg-footerBg'>
                <div className='container max-w-[940px] mx-auto px-4'>
                    <h2 className='md:text-[30px] md:leading-normal text-2xl font-bold text-white text-center mb-4'>
                        Our Main Focus
                    </h2>
                    <div className='grid md:grid-cols-4 grid-cols-1 md:gap-12 gap-5 items-center'>
                        <div>
                            <Image
                                src="/images/drop.png"
                                alt="img"
                                width={47}
                                height={64}
                                className="mx-auto w-[47px] h-[64px] object-contain mb-[30px]"
                            />
                            <h2 className="text-lg font-bold text-white text-center mb-1.5">
                                CLEAN WATER
                            </h2>
                            <p className="text-sm font-normal text-white">
                                By constructing water systems based on the need of the community and the parameters of the land, we provide quick access to clean water for those without access.
                            </p>
                        </div>
                        <div>
                            <Image
                                src="/images/heartbeat.png"
                                alt="img"
                                width={47}
                                height={64}
                                className="mx-auto w-[47px] h-[64px] object-contain mb-[30px]"
                            />
                            <h2 className="text-lg font-bold text-white text-center mb-1.5">
                                HEALTH
                            </h2>
                            <p className="text-sm font-normal text-white">
                                In the midst of health crises and growing rates of chronic illnesses in Pakistan, Paani hopes to provide aid for local clinics through donated medical supplies.
                            </p>
                        </div>
                        <div>
                            <Image
                                src="/images/cap.png"
                                alt="img"
                                width={47}
                                height={64}
                                className="mx-auto w-[47px] h-[64px] object-contain mb-[30px]"
                            />
                            <h2 className="text-lg font-bold text-white text-center mb-1.5">
                                EDUCATION
                            </h2>
                            <p className="text-sm font-normal text-white">
                                By educating Pakistani youth, citizens are empowered with the preventative knowledge to make safe sanitation decisions.
                            </p>
                        </div>
                        <div>
                            <Image
                                src="/images/sanitation.png"
                                alt="img"
                                width={47}
                                height={64}
                                className="mx-auto w-[47px] h-[64px] object-contain mb-[30px]"
                            />
                            <h2 className="text-lg font-bold text-white text-center mb-1.5">
                                SANITATION
                            </h2>
                            <p className="text-sm font-normal text-white">
                                Paani is working to instill projects in Pakistan targeted at preventing water-contamination through waste management.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
