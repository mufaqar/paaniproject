import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const MediaPost = ({ data }: any) => {
    return (
        <div className="flex md:flex-row flex-col gap-8 items-center md:py-10 py-5">
            <div>
                <Image src="/images/media/1.jpg" alt="img" width={1400} height={1050} className="w-full h-full object-cover" />
            </div>
            <div>
                <h3 className="md:text-[22px] md:leading-[28px] text-xl font-bold text-primary">
                    Kyrie Irving makes clean water in drought-ridden Pakistani village a reality
                </h3>
                <p className='text-lg font-normal text-primary my-4'>
                    Irving’s generosity will help over 1,000 villagers, providing access to clean and accessible drinking water that can also help with farming In addition, the plant will provide electrical power for lighting and fans at local schools and mosques and help a small farm. The lighting can help kids study at night, and of course, avoid the snakes.h
                </p>
                <Link href="#" className="text-lg font-normal text-primary underline hover:no-underline transition-all duration-300 inline-block w-fit">
                    Read more
                </Link>
            </div>
        </div>
    )
}

export default MediaPost