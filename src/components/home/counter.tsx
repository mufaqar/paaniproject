import Image from 'next/image'
import React from 'react'

const Counter = ({value, title,icon}:any) => {
    return (
        <div>
            <Image src={icon} alt='img' width={71} height={91} className='mx-auto w-[71px] h-[91px] object-contain' />
            <h2 className='md:text-[50px] md:leading-normal text-3xl font-bold text-primary text-center mb-4'>
                {value}
            </h2>
            <p className='text-lg font-bold text-white text-center'>
               {title}
            </p>
        </div>
    )
}

export default Counter