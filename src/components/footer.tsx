import Link from 'next/link'
import React from 'react'
import { FaTwitter } from 'react-icons/fa'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTiktok, FaYoutube } from 'react-icons/fa6'

const Footer = () => {
  return (
    <footer className='bg-footerBg pt-9 pb-5 border-t border-white'>
      <div className='container mx-auto px-4 grid md:grid-cols-3 grid-cols-1 gap-5 mb-9'>
        <div>
          <h6 className='text-lg font-bold text-white text-center mb-2.5'>
            Explore
          </h6>
          <ul className='flex flex-col gap-1 justify-center items-center'>
            <li>
              <Link href="#" className='text-sm font-semibold text-white inline-flex'>
                Overview
              </Link>
            </li>
            <li>
              <Link href="#" className='text-sm font-semibold text-white inline-flex'>
                Projects
              </Link>
            </li>
            <li>
              <Link href="#" className='text-sm font-semibold text-white inline-flex'>
                Journals
              </Link>
            </li>
            <li>
              <Link href="#" className='text-sm font-semibold text-white inline-flex'>
                Media
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h6 className='text-lg font-bold text-white text-center mb-2.5'>
            Get To Know Us
          </h6>
          <ul className='flex flex-col gap-1 justify-center items-center'>
            <li>
              <Link href="#" className='text-sm font-semibold text-white inline-flex'>
                About Paani
              </Link>
            </li>
            <li>
              <Link href="#" className='text-sm font-semibold text-white inline-flex'>
                Meet the Team
              </Link>
            </li>
            <li>
              <Link href="#" className='text-sm font-semibold text-white inline-flex'>
                Blog
              </Link>
            </li>
            <li>
              <Link href="#" className='text-sm font-semibold text-white inline-flex'>
                FAQ
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h6 className='text-lg font-bold text-white text-center mb-2.5'>
            Get Involved
          </h6>
          <ul className='flex flex-col gap-1 justify-center items-center'>
            <li>
              <Link href="#" className='text-sm font-semibold text-white inline-flex'>
                Donate
              </Link>
            </li>
            <li>
              <Link href="#" className='text-sm font-semibold text-white inline-flex'>
                Wells
              </Link>
            </li>
            <li>
              <Link href="#" className='text-sm font-semibold text-white inline-flex'>
                Famine Relief
              </Link>
            </li>
            <li>
              <Link href="#" className='text-sm font-semibold text-white inline-flex'>
                Orphan Relief
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className='container mx-auto px-4'>
        <h6 className='text-[22px] leading-normal font-bold text-white text-center mb-2.5'>
          Connect with us.
        </h6>
        <ul className='flex gap-4 items-center justify-center mb-6'>
          <li>
            <Link href="https://www.facebook.com/PaaniProject/" target='_blank' className='text-primary hover:text-white inline-flex w-8 h-8 bg-transparent hover:bg-primary justify-center items-center rounded'>
              <FaFacebookF />
            </Link>
          </li>
          <li>
            <Link href="https://twitter.com/PaaniProject" target='_blank' className='text-primary hover:text-white inline-flex w-8 h-8 bg-transparent hover:bg-primary justify-center items-center rounded'>
              <FaTwitter />
            </Link>
          </li>
          <li>
            <Link href="https://www.linkedin.com/company/paani/" target='_blank' className='text-primary hover:text-white inline-flex w-8 h-8 bg-transparent hover:bg-primary justify-center items-center rounded'>
              <FaLinkedinIn />
            </Link>
          </li>
          <li>
            <Link href="https://instagram.com/paaniproject" target='_blank' className='text-primary hover:text-white inline-flex w-8 h-8 bg-transparent hover:bg-primary justify-center items-center rounded'>
              <FaInstagram />
            </Link>
          </li>
          <li>
            <Link href="https://www.youtube.com/@paani7430" target='_blank' className='text-primary hover:text-white inline-flex w-8 h-8 bg-transparent hover:bg-primary justify-center items-center rounded'>
              <FaYoutube />
            </Link>
          </li>
          <li>
            <Link href="https://tiktok.com/@paaniproject" target='_blank' className='text-primary hover:text-white inline-flex w-8 h-8 bg-transparent hover:bg-primary justify-center items-center rounded'>
              <FaTiktok />
            </Link>
          </li>
        </ul>
        <p className='text-sm font-semibold text-white text-center'>
          © Copyright 2024 Paani – a 501(c)(3) organization   |   Tax ID 83-2222109   |   ALL RIGHTS RESERVED
        </p>
      </div>
    </footer>
  )
}

export default Footer