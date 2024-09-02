import React from 'react'

const ReportBox = ({ title, img }: any) => {
    return (
        <div className={`bg-cover bg-center bg-no-repeat bg-blend-overlay bg-black/50 py-[51px]`}
            style={{ backgroundImage: `url('/images/${img}')` }}>
            <h3 className='md:text-[30px] md:leading-normal text-xl font-bold text-white text-center mb-4'>
                {title}
            </h3>
            <button className='text-base text-white font-semibold bg-transparent px-4 py-2.5 rounded flex w-fit mx-auto border border-white '>
                Download
            </button>
        </div>
    )
}

export default ReportBox