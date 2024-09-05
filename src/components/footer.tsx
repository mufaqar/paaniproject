import Link from 'next/link'
import React from 'react'
import { FaTwitter } from 'react-icons/fa'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTiktok, FaYoutube } from 'react-icons/fa6'

const Footer = () => {
  return (
    <footer className='md:px-0 px-4'>
      <div className='container mx-auto px-4 bg-white md:py-20 py-16 rounded-[50px] md:rounded-[100px]'>
        <div className='max-w-[920px] mx-auto grid md:grid-cols-4 grid-cols-1 md:gap-8 gap-5'>
          <div>
            <h6 className='subTitle md:mb-10 mb-5 gap-5'>
              Explore
            </h6>
            <ul className='flex flex-col gap-6'>
              <li>
                <Link href="#" className='text-base font-normal text-[#495057] hover:text-primary inline-flex'>
                  Overview
                </Link>
              </li>
              <li>
                <Link href="#" className='text-base font-normal text-[#495057] hover:text-primary inline-flex'>
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#" className='text-base font-normal text-[#495057] hover:text-primary inline-flex'>
                  Journals
                </Link>
              </li>
              <li>
                <Link href="#" className='text-base font-normal text-[#495057] hover:text-primary inline-flex'>
                  Famine ReliefMedia
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h6 className='subTitle md:mb-10 mb-5 gap-5'>
              Get To Know Us
            </h6>
            <ul className='flex flex-col gap-6'>
              <li>
                <Link href="#" className='text-base font-normal text-[#495057] hover:text-primary inline-flex'>
                  About Paani
                </Link>
              </li>
              <li>
                <Link href="#" className='text-base font-normal text-[#495057] hover:text-primary inline-flex'>
                  Meet the Team
                </Link>
              </li>
              <li>
                <Link href="#" className='text-base font-normal text-[#495057] hover:text-primary inline-flex'>
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className='text-base font-normal text-[#495057] hover:text-primary inline-flex'>
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h6 className='subTitle md:mb-10 mb-5 gap-5'>
              Get Involved
            </h6>
            <ul className='flex flex-col gap-6'>
              <li>
                <Link href="#" className='text-base font-normal text-[#495057] hover:text-primary inline-flex'>
                  Donate
                </Link>
              </li>
              <li>
                <Link href="#" className='text-base font-normal text-[#495057] hover:text-primary inline-flex'>
                  Wells
                </Link>
              </li>
              <li>
                <Link href="#" className='text-base font-normal text-[#495057] hover:text-primary inline-flex'>
                  Famine Relief
                </Link>
              </li>
              <li>
                <Link href="#" className='text-base font-normal text-[#495057] hover:text-primary inline-flex'>
                  Orphan Relief
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h6 className='subTitle md:mb-10 mb-5 gap-5'>
              Connect with us.
            </h6>
            <ul className='flex gap-2 md:items-center md:justify-center'>
              <li>
                <Link href="https://www.facebook.com/PaaniProject/" target='_blank' className='text-white inline-flex w-8 h-8 scale-100 hover:scale-90 bg-primary justify-center items-center rounded transition-all duration-300'>
                  <FaFacebookF />
                </Link>
              </li>
              <li>
                <Link href="https://twitter.com/PaaniProject" target='_blank' className='text-white inline-flex w-8 h-8 scale-100 hover:scale-90 bg-primary justify-center items-center rounded transition-all duration-300'>
                  <FaTwitter />
                </Link>
              </li>
              <li>
                <Link href="https://www.linkedin.com/company/paani/" target='_blank' className='text-white inline-flex w-8 h-8 scale-100 hover:scale-90 bg-primary justify-center items-center rounded transition-all duration-300'>
                  <FaLinkedinIn />
                </Link>
              </li>
              <li>
                <Link href="https://instagram.com/paaniproject" target='_blank' className='text-white inline-flex w-8 h-8 scale-100 hover:scale-90 bg-primary justify-center items-center rounded transition-all duration-300'>
                  <FaInstagram />
                </Link>
              </li>
              <li>
                <Link href="https://www.youtube.com/@paani7430" target='_blank' className='text-white inline-flex w-8 h-8 scale-100 hover:scale-90 bg-primary justify-center items-center rounded transition-all duration-300'>
                  <FaYoutube />
                </Link>
              </li>
              <li>
                <Link href="https://tiktok.com/@paaniproject" target='_blank' className='text-white inline-flex w-8 h-8 scale-100 hover:scale-90 bg-primary justify-center items-center rounded transition-all duration-300'>
                  <FaTiktok />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className='max-w-[920px] mx-auto h-[1px] md:mt-20 mt-5 mb-5 bg-primary'></div>
        <div className='max-w-[920px] mx-auto flex items-center gap-4 justify-center'>
          <div className=''>
            <p className='text-lg font-normal text-primary'>
              © Copyright 2024 Paani – a 501(c)(3) organization   |   Tax ID 83-2222109   |   ALL RIGHTS RESERVED
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer