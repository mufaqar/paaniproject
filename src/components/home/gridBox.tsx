import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const GridBox = ({ title, img, subtitle, content, btnTxt, link, Cstm_class }: any) => {
    return (
        <div className={`flex flex-col items-center ${Cstm_class}`}>
            <div className='md:w-1/2 w-full'>
                <div className='md:p-10 max-w-[470px]'>
                    <p className='text-lg font-bold text-primary mb-3'>
                        {subtitle}
                    </p>
                    <h2 className="md:text-5xl text-3xl font-bold text-primary mt-5">
                        {title}
                    </h2>
                    <p className='text-lg font-normal text-primary my-5'>
                        {content}
                    </p>
                    <Link href={link} className='primaryBtn inline-flex'>
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