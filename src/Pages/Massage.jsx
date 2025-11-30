
import React from 'react'
import { FaLinkedin } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

function Massage() {
    return (
        <section className='bg-[#FFFEF2] px-5 md:px-10 lg:px-15 xl:px-20 py-10'>
            <h2 className='text-3xl font-bold underline underline-offset-8 text-center pb-10'>Founders Message</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 justify-between text-xl py-5 md:py-10'>
                <div className='space-y-3 text-gray-600 '>
                    <h4 className='font-semibold text-[#637381] text-xl'>Dear Friends and Partners,</h4>
                    <p>At Infinity Developments, East Africa is more than a region of opportunity — it is a place where culture, beauty, and potential converge. Our commitment here runs deep, driven by a vision to create transformative developments that reflect the richness of the land and the promise of its future.</p>
                    <p>From luxury beachfront resorts to integrated residential and commercial communities, our work spans some of East Africa’s most dynamic landscapes. Within this portfolio, we are also privileged to contribute to select projects in and around UNESCO heritage zones — where thoughtful design meets cultural preservation.</p>
                    <p>As we expand our presence across the region, our focus remains on delivering developments that are meaningful, sustainable, and of the highest standard. This would not be possible without the continued trust and support of our team, partners, and stakeholders.</p>
                    <p>Thank you for being part of our journey. Together, we are not only shaping communities — we are helping to play our part in shaping the future of East Africa.</p>
                    <p>Warm regards,</p>

                    <div className=''>
                        <h2 className='text-3xl font-semibold'>Samuel Saba</h2>
                        <p>Chairman, Infinity Developments</p>
                        <div className='flex gap-10 mt-5'>
                            <p className='flex gap-2 items-center cursor-pointer border-b-2 hover:translate-x-1 hover:scale-105 duration-300'><FaLinkedin />LinedIn →</p>
                            <p className='flex gap-2 items-center cursor-pointer border-b-2 hover:translate-x-1 hover:scale-105 duration-300'><FaXTwitter />Twitter →</p>
                        </div>

                    </div>
                </div>

                <div className=''>
                    <img src="./images/news/massage.png" alt="" className='rounded-2xl w-full h-fit m-auto' />
                    <h2 className='italic text-4xl md:text-6xl font-bold mt-5 py-2'>Samuel Saba</h2>
                    <p className='text-gray-600'>Chairman</p>
                    <p className='text-gray-600'>Infinity Developments</p>
                </div>
            </div>
        </section>
    )
}

export default Massage
