"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { NavLinks } from "@/const/navlinks";
import { FaBars, FaChevronDown } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';

const Header = () => {
    const [menu, setMenu] = useState(false)
    return (
        <header className='py-4 md:bg-black bg-black'>
            <div className='container mx-auto px-4 flex flex-row gap-5 items-center justify-between'>
                <div>
                    <Link href="/" className='inline-block'>
                        <Image src="/images/logo.png" alt='Company logo' width={106} height={43} />
                    </Link>
                </div>
                <nav>
                    <button onClick={() => setMenu(!menu)} className='md:hidden block text-white py-1.5 px-4'>
                        {!menu === true ? <FaBars size={24} /> : <AiOutlineClose size={24} />}
                    </button>
                    <ul className={`flex md:flex-row flex-col gap-5 md:items-center md:bg-transparent bg-black md:static absolute transition-all duration-700 md:h-fit md:w-fit md:p-0 p-5 h-screen w-3/4 ${menu === true ? "top-20 left-0 " : "-left-[200%] "}`}>
                        {NavLinks.map((item, idx) => (
                            <li key={idx} className='inline-flex items-center gap-1.5 md:w-fit w-full justify-between'>
                                <Link href={item?.link || "#"} className='text-base text-white hover:text-white/70 font-semibold inline-flex'>
                                    {item?.title}
                                </Link>
                                {item?.subMenu && <FaChevronDown className='text-white' />}
                            </li>
                        ))}
                        <li>
                            <Link href="#" className='text-base text-white font-semibold bg-primary px-4 py-2.5 rounded inline-flex'>
                                Donate
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
