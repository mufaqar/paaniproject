import Link from 'next/link'
import React from 'react'

const Cta = () => {
    return (
        <section className={`md:py-20 py-16 md:px-0 px-4`}>
            <div className="container mx-auto px-4 bg-navlink md:py-20 py-16 rounded-[50px] md:rounded-[100px]">
                <div className="max-w-[920px] mx-auto text-center flex md:flex-col flex-col gap-5 items-center">
                    <h2 className="md:text-[64px] md:leading-[80px] text-4xl font-bold text-white max-w-[730px]">
                        The Ripple Effect Starts with You

                    </h2>
                    <p className="text-lg font-normal text-white mt-4">
                        As we fight Pakistan’s water crisis, let us utilize our resources to maximize the positive impact we can have on impoverished and underserved communities. Take the first step today with the Paani Project.
                    </p>
                    <div className='flex md:flex-row flex-col gap-6 md:mt-12 mt-8'>
                        <Link href="#" className='primaryBtn hover:!border-white hover:!text-white'>
                            Volunteer
                        </Link>
                        <Link href="#" className='secondryBtn'>
                            Donate Now
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Cta