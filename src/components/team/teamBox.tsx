import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const TeamBox = ({ data }: any) => {
    return (
        <div>
            <div>
                <Image src={data?.img} alt='pic' width={474} height={474} className='mx-auto rounded-2xl' />
            </div>
            <h3 className="md:text-[22px] md:leading-[28px] text-xl font-bold text-primary mt-5">
                {data?.name}
            </h3>
            <p className="text-lg font-normal text-primary mt-1">
                {data?.position}
            </p>
        </div>
    )
}

export default TeamBox