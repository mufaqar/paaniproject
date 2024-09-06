import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const PostBox = ({ data }: any) => {
    return (
        <div className="flex flex-col gap-5">
            <div>
                <Image src="/images/blog/1.jpg" alt="img" width={400} height={250} className="w-full h-full object-cover" />
            </div>
            <h3 className="md:text-[22px] md:leading-[28px] text-xl font-bold text-primary">
                Donate Your Qurbani / Udhiyah for Pakistan
            </h3>
            <p className='text-lg font-normal text-primary'>
                The Paani Project -Qurbani Online Donations Spread the joy: Give Qurbani with the Paani Project and reach the people who need it the most this Eid ul Adha. After reaching millions of people with clean drinking water with your generosity, we aim to...
            </p>
            <Link href="#" className="text-lg font-normal text-primary underline hover:no-underline transition-all duration-300 inline-block w-fit">
                Read more
            </Link>
        </div>
    )
}

export default PostBox