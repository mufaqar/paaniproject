import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const GridBox = ({ title, img, subtitle, content, btnTxt, link, Cstm_class }: any) => {
    return (
        <div className={`flex flex-col items-center ${Cstm_class}`}>
            <div className='md:w-1/2 w-full'>
                <div className='md:p-10 max-w-[470px]'>
                    <p className='text-sm font-bold text-white mb-3'>
                        {subtitle}
                    </p>
                    <h2 className="md:text-[26px] md:leading-normal text-2xl font-bold text-white">
                        {title}
                    </h2>
                    <p className='text-sm font-normal text-white my-5'>
                        {content}
                    </p>
                    <Link href={link} className='text-base text-white font-semibold bg-primary px-4 py-2.5 rounded inline-flex'>
                        {btnTxt}
                    </Link>
                </div>
            </div>
            <div className='md:w-1/2 w-full'>
                <Image src={img} alt="img" width={1024} height={682} />
            </div>
        </div>
    )
}

export default GridBox