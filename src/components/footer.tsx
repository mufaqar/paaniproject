import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaTwitter } from 'react-icons/fa'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTiktok, FaYoutube } from 'react-icons/fa6'

const Footer = () => {
  return (
    <footer className=''>
      <div className='container mx-auto px-4 bg-white md:py-20 py-16 rounded-[100px]'>
        <div className='max-w-[920px] mx-auto grid md:grid-cols-5 grid-cols-1 md:gap-8 gap-5'>
          <div>
            <h6 className='subTitle md:mb-10 gap-5'>
              OUR IMPACT
            </h6>
            <ul className='flex flex-col gap-6'>
              <li>
                <Link href="#" className='text-base font-normal text-[#495057] hover:text-primary inline-flex'>
                  Wells
                </Link>
              </li>
              <li>
                <Link href="#" className='text-base font-normal text-[#495057] hover:text-primary inline-flex'>
                  Orphan Relief
                </Link>
              </li>
              <li>
                <Link href="#" className='text-base font-normal text-[#495057] hover:text-primary inline-flex'>
                  Disaster Relief
                </Link>
              </li>
              <li>
                <Link href="#" className='text-base font-normal text-[#495057] hover:text-primary inline-flex'>
                  Famine Relief
                </Link>
              </li>
              <li>
                <Link href="#" className='text-base font-normal text-[#495057] hover:text-primary inline-flex'>
                  Ramadan
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h6 className='subTitle md:mb-10 gap-5'>
              ABOUT US
            </h6>
            <ul className='flex flex-col gap-6'>
              <li>
                <Link href="#" className='text-base font-normal text-[#495057] hover:text-primary inline-flex'>
                  Our Mission
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h6 className='subTitle md:mb-10 gap-5'>
              CONTACT US
            </h6>
            <ul className='flex flex-col gap-6'>
              <li>
                <Link href="#" className='text-base font-normal text-[#495057] hover:text-primary inline-flex'>
                  Contact Paani
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h6 className='subTitle md:mb-10 gap-5'>
              DONATE
            </h6>
            <ul className='flex flex-col gap-6'>
              <li>
                <Link href="#" className='text-base font-normal text-[#495057] hover:text-primary inline-flex'>
                  Make a Donation
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h6 className='subTitle md:mb-10 gap-5'>
              GET INVOLVED
            </h6>
            <ul className='flex flex-col gap-6'>
              <li>
                <Link href="#" className='text-base font-normal text-[#495057] hover:text-primary inline-flex'>
                  Launch Campaign
                </Link>
              </li>
              <li>
                <Link href="#" className='text-base font-normal text-[#495057] hover:text-primary inline-flex'>
                  Corporate Match
                </Link>
              </li>
              <li>
                <Link href="#" className='text-base font-normal text-[#495057] hover:text-primary inline-flex'>
                  Donate
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className='max-w-[920px] mx-auto h-[1px] md:mt-20 mt-5 mb-5 bg-primary'></div>
        <div className='max-w-[920px] mx-auto flex items-center gap-5 justify-between'>
          <div className='flex md:flex-row flex-col gap-2.5 items-center '>
            <Link href="/" className='inline-block'>
              <Image src="/images/logo.png" alt='Company logo' width={106} height={43} />
            </Link>
            <p className='text-lg font-normal text-primary'>
              © 2023 Paani. All rights reserved
            </p>
          </div>
          <ul className='flex gap-4 items-center justify-center'>
            <li>
              <Link href="https://www.facebook.com/PaaniProject/" target='_blank' className='text-white inline-flex w-10 h-10 scale-100 hover:scale-90 bg-primary justify-center items-center rounded transition-all duration-300'>
                <FaFacebookF />
              </Link>
            </li>
            <li>
              <Link href="https://twitter.com/PaaniProject" target='_blank' className='text-white inline-flex w-10 h-10 scale-100 hover:scale-90 bg-primary justify-center items-center rounded transition-all duration-300'>
                <FaTwitter />
              </Link>
            </li>
            <li>
              <Link href="https://www.linkedin.com/company/paani/" target='_blank' className='text-white inline-flex w-10 h-10 scale-100 hover:scale-90 bg-primary justify-center items-center rounded transition-all duration-300'>
                <FaLinkedinIn />
              </Link>
            </li>
            <li>
              <Link href="https://instagram.com/paaniproject" target='_blank' className='text-white inline-flex w-10 h-10 scale-100 hover:scale-90 bg-primary justify-center items-center rounded transition-all duration-300'>
                <FaInstagram />
              </Link>
            </li>
            <li>
              <Link href="https://www.youtube.com/@paani7430" target='_blank' className='text-white inline-flex w-10 h-10 scale-100 hover:scale-90 bg-primary justify-center items-center rounded transition-all duration-300'>
                <FaYoutube />
              </Link>
            </li>
            <li>
              <Link href="https://tiktok.com/@paaniproject" target='_blank' className='text-white inline-flex w-10 h-10 scale-100 hover:scale-90 bg-primary justify-center items-center rounded transition-all duration-300'>
                <FaTiktok />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer