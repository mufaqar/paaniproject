import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const TeamBox = ({ data }: any) => {
    return (
        <div>
            <div>
                <Image src={data?.img} alt='pic' width={474} height={474} className='mx-auto' />
            </div>
            <Link href="#" className='text-base font-bold text-white text-center flex w-fit mx-auto mt-5'>
                {data?.name}
            </Link>
        </div>
    )
}

export default TeamBox