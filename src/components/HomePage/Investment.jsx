import React from 'react'
import { Link } from 'react-router-dom'

function Investment() {
    return (
        <section className='bg-[#FFFEF2] px-5 md:px-10 lg:px-15 xl:px-20 py-10'>
            <div className='pb-10 space-y-2'>
                <h2 className='text-3xl md:text-5xl font-medium'>Investment Opportunities</h2>
                <p className='text-sm max-w-xl text-[#0A0A0A]'>Unlock unparalleled potential with Infinity's prime investment opportunities. From exquisite resort developments to dynamic residential projects, we offer ventures designed with significant returns and lasting impact.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Card 1 */}
                <div className="relative rounded-2xl overflow-hidden bg-cover bg-center h-[350px] md:h-[420px] lg:h-[480px]"
                    style={{ backgroundImage: 'url("/images/home/image-9.png")' }}>

                    {/* Bottom Overlay */}
                    <div className="absolute bottom-5 left-5 right-5 rounded-md bg-gray-300/30 backdrop-blur-sm  px-5 py-4 text-white">
                        <p className='text-sm text-gray-200'>Luxury Hospitality</p>
                        <h3 className='text-xl font-medium'>Anantara Zanzibar <br />
                            Resort & Residences</h3>
                        <p className="text-sm text-gray-200">
                            Redefining luxury hospitality in Africa with world-class amenities, pristine beachfront
                            location, and exceptional investment potential.
                        </p>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="relative rounded-2xl overflow-hidden bg-cover bg-center h-[350px] md:h-[420px] lg:h-[480px]"
                    style={{ backgroundImage: 'url("/images/home/image-10.png")' }}>

                    {/* Bottom Overlay */}
                    <div className="absolute bottom-5 left-5 right-5 rounded-md bg-gray-300/30 backdrop-blur-sm  px-5 py-4 text-white">
                        <p className='text-sm text-gray-200'>Mixed-Use Development</p>
                        <h3 className='text-xl font-medium'>Infinity Hills <br />
                            Residential & Commercial</h3>
                        <p className="text-sm text-gray-200">
                            A dynamic development combining premium residential living with commercial
                            spaces, designed for modern lifestyles and strong returns.
                        </p>
                    </div>
                </div>

            </div>
            <div className='bg-black text-white rounded-md'>
                <div className='grid grid-cols-1 md:grid-cols-3 items-center pt-5 px-10 my-5 text-center gap-5'>
                    <div>
                        <h3 className='text-4xl font-semibold'>$450M+</h3>
                        <p className='text-[#C4CDD5] text-sm'>Gross Development Value</p>
                    </div>
                    <div>
                        <h3 className='text-4xl font-semibold'>14+</h3>
                        <p className='text-[#C4CDD5] text-sm'>Active Projects</p>
                    </div>
                    <div>
                        <h3 className='text-4xl font-semibold'>98%</h3>
                        <p className='text-[#C4CDD5] text-sm'>Client Satisfaction</p>
                    </div>
                </div>

                <div className='flex flex-col text-center'>
                    <p>Join us on the path to prosperity. Contact us today to explore these unique opportunities.</p>
                    <Link to='' className='flex items-center justify-center py-5'>
                        <button className='bg-white text-sm px-10 py-2 rounded-md text-black  hover:scale-95 transition-all duration-300 cursor-pointer'>Contact Us →</button>
                    </ Link>
                </div>
            </div>
            {/* Button */}
            <div className='bg-black max-w-lg m-auto rounded-md my-5 mt-10'>
                <p className='text-white text-center pt-3'>Ready to create something extraordinary?</p>
                <Link to='' className='flex items-center justify-center py-5'>
                    <button className='bg-white text-sm px-10 py-2 rounded-md text-black  hover:scale-95 transition-all duration-300 cursor-pointer'>Get In Touch →</button>
                </ Link>
            </div>
        </section>
    )
}

export default Investment
