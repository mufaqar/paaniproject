import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const GridBox = ({ title, img, subtitle, content, btnTxt, link }: any) => {
    return (
        <div className={`flex flex-col items-stretch md:gap-0 gap-10`}>
            <div className='md:w-1/2 w-full'>
                <div className='md:p-10 py-5'>
                    {subtitle && <p className='text-lg font-bold text-primary mb-3'>
                        {subtitle}
                    </p>}
                    {title && <h2 className="md:text-5xl text-3xl font-bold text-primary mt-5">
                        {title}
                    </h2>}
                    {content && <p className='text-lg font-normal text-primary my-5'>
                        {content}
                    </p>}
                    {link && <Link href={link} className='primaryBtn inline-flex'>
                        {btnTxt}
                    </Link>
                    }
                </div>
            </div>
            <div className='md:w-1/2 w-full'>
                <Image src={img} alt="img" width={1024} height={682} className='object-cover w-full h-full' />
            </div>
        </div>
    )
}

export default GridBox