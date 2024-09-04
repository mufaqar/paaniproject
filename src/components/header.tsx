"use client";
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { NavLinks } from "@/const/navlinks";
import { FaBars, FaChevronDown } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';

const Header = () => {
    const [menu, setMenu] = useState(false);
    const [dropdown, setDropdown] = useState(null);

    const handleDropdown = (id: any) => {
        setDropdown(dropdown === id ? null : id); // Toggle the dropdown
    };

    return (
        <header className='py-4 relative z-50'>
            <div className='container mx-auto px-4 flex flex-row gap-5 items-center justify-between'>
                <div>
                    <Link href="/" className='inline-block'>
                        <Image src="/images/logo.png" alt='Company logo' width={106} height={43} />
                    </Link>
                </div>
                <nav>
                    <button onClick={() => setMenu(!menu)} className='md:hidden block text-black py-1.5 px-4'>
                        {menu ? <AiOutlineClose size={24} /> : <FaBars size={24} />}
                    </button>
                    <ul
                        className={`flex md:flex-row flex-col md:gap-11 gap-5 md:items-center md:static absolute transition-all duration-700 md:h-fit md:w-fit md:p-0 p-5 h-screen w-3/4 md:bg-transparent bg-white ${menu ? "top-20 left-0" : "-left-[200%]"} `}
                    >
                        {NavLinks.map((item, idx) => (
                            <li key={idx} className=''>
                                <Link href={item?.link || "#"} className='text-xl text-navlink hover:text-primary hover:font-semibold font-normal inline-block items-center gap-1.5 relative transition-all duration-300'>
                                    {item?.title}
                                </Link>
                                {/* {item?.subMenu && (
                                    <FaChevronDown
                                        className={`text-white cursor-pointer inline ml-1.5 ${dropdown === item.id && "transform rotate-180"}`}
                                        onMouseEnter={() => handleDropdown(item.id)}
                                        aria-label="Toggle submenu"
                                    />
                                )} */}
                                {/* {item?.subMenu && (
                                    <ul
                                    onMouseLeave={() => handleDropdown(null)}
                                        className={`md:absolute static md:bg-white md:shadow-md bg-black md:text-black text-white transition-all duration-300 ${dropdown === item.id ? 'flex flex-col md:gap-0 gap-5 md:top-20 md:pt-8 md:pb-8 pt-5' : 'hidden'
                                            }`}
                                    >
                                        {item.subMenu.map((subItem, subIdx) => (
                                            <li key={`${subItem.title}-${subIdx}`} className=''>
                                                <Link href={subItem.link || "#"} className='text-base md:px-8 md:py-2.5 hover:bg-gray-100 font-semibold inline-flex md:w-full'>
                                                    {subItem.title}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>)} */}
                            </li>
                        ))}
                        <li>
                            <Link href="#" className='primaryBtn'>
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
