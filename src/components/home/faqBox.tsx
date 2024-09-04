"use client"
import React, { useState } from 'react'
import { FaChevronRight } from 'react-icons/fa'

const FaqBox = ({ data }: any) => {
    const [openId, setOpenId] = useState<number | null>(null); 

    const handleToggle = (id: number) => {
      setOpenId((prevId) => (prevId === id ? null : id)); 
    };

    return (
        <div className={`bg-white p-10 shadow-sm rounded-3xl border-2 transition-all duration-300 ${openId === data.id ? "border-primary" : "border-white"}`}>
            <div className="flex items-center gap-5 justify-between">
                <h5 className="md:text-2xl text-xl font-bold text-primary">
                    {data?.ques}
                </h5>
                <button onClick={() => handleToggle(data?.id)} className="w-14 h-14 bg-primary rounded-full flex items-center justify-center text-lg text-white">
                    <FaChevronRight className={`transform transition-all duration-300 ${openId === data.id ? "rotate-90" : "rotate-0"}`} />
                </button>
            </div>
            <p className={`text-lg font-normal text-primary mt-5 transition-all duration-300 ${openId === data.id ? "block" : "hidden"}`}>
                {data?.ans}
            </p>
        </div>
    )
}

export default FaqBox