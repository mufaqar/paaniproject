import GridBox from '@/components/home/gridBox'
import React from 'react'

export default function Zakaat() {
    return (
        <main>
            <section className="md:py-20 py-10">
                <div className="container max-w-[920px] mx-auto px-4">
                    <div className="max-w-[920px] mx-auto flex md:flex-row flex-col md:gap-12 gap-5 md:items-start justify-between">
                        <div className="max-w-[410px]">
                            <h3 className="subTitle">
                                Join Paani this Ramadan
                            </h3>
                            <h2 className="md:text-5xl text-3xl font-bold text-primary mt-5">
                                Zakaat
                            </h2>
                        </div>
                        <div className="max-w-[410px]">
                            <p className="text-lg font-normal text-primary">
                                Paani is a non-profit organization dedicated to supplying clean water, food, health supplies, education, and sanitization facilities among deserving people. This Ramzan, your zakat, and sadaqah donations can help us share food and provide clean water for the hungry and needy. So join us in this holy month to move forward in our mission to make a difference in society.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-8 md:px-0 px-4">
                <div className="flex flex-col [&>*:nth-child(odd)]:md:flex-row [&>*:nth-child(even)]:md:flex-row-reverse [&>*:nth-child(even)]:bg-white">
                    {PostsData?.map((item, idx) => {
                        return <GridBox
                        key={idx}
                            img={item?.img}
                            title={item?.title}
                            content={item?.content}
                        />
                    })}
                </div>
            </section>
        </main>
    )
}

const PostsData = [
    {
        img: "/images/zakaat/1.png",
        title: "Ramzan Zakat Donations – Lifelines for The Need",
        content: "Your zakah donations help us in delivering Ramadan food packs to the neediest and deserving people facing troubles. The relief programs of Ramadan donation help the most impoverished communities and bring joy and smiles to their faces. Small efforts and contributions make significant changes and differences. Do not take too long to decide and make the contribution you are worthy of as timely support and donation is sometimes the difference between life and death for the patients suffering or the needy waiting for food. For these people, your donations, zakat, and Saqadah are their lifelines. You will get heartfelt and sincere prayers of gratitude from them which will make a lot good in your life as well.",
    },
    {
        img: "/images/zakaat/2.jpg",
        title: "Islamic Fasting – Realizing Pain of The Hungry",
        content: "The Islamic fasting month of Ramzan is a way to understand and experience the feeling of the hungry and needy people when Muslims are fasting for a month. From every sunrise to sunset, the Muslims fast, also termed as sawm, not eating and drinking anything allows them to experience the condition of the poor. Paani Project, which is already working on providing clean water, food, and primary health necessities for all, is even more motivated and enthusiastic this month. The people donating to the needy get more realization and understanding of the needs of the people in trouble. The cause of welfare organizations and forums is appreciated more.",
    },
    {
        img: "/images/zakaat/3.jpg",
        title: "Fight the War Against Covid Crisis",
        content: "The coronavirus pandemic has increased the difficulties of many families suffering from hunger and disease. Closures and lockdowns of industries and businesses have to lead to unemployment, and the people are working on daily wages are getting difficult to feed their families even once daily. This Ramzan brings us the message to feel and understand the struggle and pain of the poor and come together as humanity. We have to stand united in this hour of need and uplift the living of the needy.",
    },
    {
        img: "/images/zakaat/4.jpg",
        title: "Earn Sadaqa Jariya",
        content: "You can earn the benefits of Saqadah Jariya by donating to the development of drinking water plants and hand pumps in the remote area where drinking water is scarce. There is a strong belief that as long as the people or any living thing, including animals and plants, benefit from that water, it will benefit you as well. Indeed it is a business of profit in every way. Spiritually and physically, you earn a lot—a lot more than you have invested. Donate as much as you can in this holy month of Ramazan in the form of zakat, sadaqah, Ramazan donation, or a general donation to support and help your brothers, sisters, children, and elders in need which are your family according to the relationship of humanity.",
    },
]