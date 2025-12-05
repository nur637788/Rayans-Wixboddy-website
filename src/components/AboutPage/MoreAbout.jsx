import React from 'react'
import { Link } from 'react-router-dom'

function MoreAbout() {
    return (
        <div>
            <div className=" bg-[url('/images/about/hero-image.png')] bg-cover bg-center w-screen h-screen">
            </div>
            {/* Our Mission or Our Vision area */}
            <div className='px-5 md:px-10 lg:px-15 xl:px-20 py-15 bg-[#FFFEF2]'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5 space-y-4 relative'>
                    <div className='space-y-28'>
                        <div>
                            <h4 className='text-2xl md:text-[48px] '>Our Vision</h4>
                            <p className=' text-[#637381] text-2xl'>To be the most trusted and innovative real estate developer in the UAE, creating sustainable and iconic developments that enhance communities and set new standards in the industry.</p>
                        </div>
                        <div>
                            <h4 className='text-xl md:text-[48px] mt-10'>Our Mission</h4>
                            <p className='text-[#637381] text-2xl'>To deliver exceptional value to our customers, shareholders, and communities through innovative design, quality construction, and sustainable development practices. We strive to exceed expectations in every project we undertake, fostering long-term relationships built on trust and excellence.</p>
                        </div>
                    </div>
                    <img src="/images/about/image-2.png" alt="" className='' />
                    <div className='bg-black py-7 px-5 absolute -bottom-8 -right-4 rounded-md'>
                        <p className='text-6xl font-semibold text-white '>#1</p>
                        <p className='text-white text-2xl'>Developer in Zanzibar</p>
                    </div>
                </div>
            </div>

            {/* Our Core Values Area */}
            <div className='bg-[#F4F6F8] px-5 md:px-10 lg:px-15 xl:px-20 py-10 mb-10'>
                <div className='pb-10 space-y-1 text-center'>
                    <h4 className='text-2xl md:text-[48px] font-medium'>Our Core Values</h4>
                    <p className='text-2xl text-[#637381]'>The principles that guide every decision we make and every project we undertake.</p>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 text-center'>
                    <div className='bg-white p-5 hover:shadow-sm rounded-md space-y-1'>
                        <img src="/images/about/icon-1.png" alt="" className='m-auto' />
                        <h5 className='text-[32px] font-medium'>Design </h5>
                        <p className='text-2xl text-[#637381]'>We strive for excellence in everything we do, from design and construction to customer service.</p>
                    </div>
                    <div className='bg-white p-5 hover:shadow-sm rounded-md space-y-1'>
                        <img src="/images/about/icon-2.png" alt="" className='m-auto' />
                        <h5 className='text-[32px] font-medium'>Innovation </h5>
                        <p className='text-2xl text-[#637381]'>We embrace new ideas, technologies, and approaches to create cutting-edge developments.</p>
                    </div>
                    <div className='bg-white p-5 hover:shadow-sm rounded-md space-y-1'>
                        <img src="/images/about/icon-3.png" alt="" className='m-auto' />
                        <h5 className='text-[32px] font-medium'>Culture </h5>
                        <p className='text-2xl text-[#637381]'>We conduct business with the highest ethical standards, transparency, and honesty.</p>
                    </div>
                    <div className='bg-white p-5 hover:shadow-sm rounded-md space-y-1'>
                        <img src="/images/about/icon-4.png" alt="" className='m-auto' />
                        <h5 className='text-[32px] font-medium'>Environment </h5>
                        <p className='text-2xl text-[#637381]'>We are committed to environmentally responsible development practices and community well-being.</p>
                    </div>
                </div>
            </div>
            {/* Button */}
            <Link to='/aboutTeam' className='flex items-center justify-center pb-10'>
                <button className='bg-black px-10 py-4 rounded-md text-white  hover:scale-95 transition-all duration-300 cursor-pointer'>Get in touch with Our Team →</button>
            </ Link>
        </div>
    )
}

export default MoreAbout
