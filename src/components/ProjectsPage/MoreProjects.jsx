import React from 'react'
import Carousel from './Carousel'

function MoreProjects() {
    const items = [
        {
            id: 1,
            title: "JUNGLE TRAIL",
            img: "/images/projects/icon-1.png"
        },
        {
            id: 2,
            title: "OUTSIDE CINEMA",
            img: "/images/projects/icon-2.png"
        },
        {
            id: 3,
            title: "OUTDOOR GYM",
            img: "/images/projects/icon-3.png"
        },
        {
            id: 4,
            title: "OUTDOOR GYM",
            img: "/images/projects/icon-4.png"
        },
        {
            id: 5,
            title: "KIDS PLAY AREA",
            img: "/images/projects/icon-5.png"
        },
        {
            id: 6,
            title: "BARBECUE AREA",
            img: "/images/projects/icon-6.png"
        },
        {
            id: 7,
            title: "PICNIC LAWN",
            img: "/images/projects/icon-7.png"
        },
        {
            id: 8,
            title: "JUNGLE TRAIL",
            img: "/images/projects/icon-8.png"
        },
    ]
    return (
        <div>
            <div className='bg-[url("/images/projects/hero.png")] bg-cover bg-center w-screen  text-white'>
                <p className='text-white font-semibold text-[48px] flex items-center justify-center h-screen px-5 text-center'>Anantara Zanzibar Resort and Residences</p>
            </div>
            <section className='bg-[#FFFEF2] px-5 md:px-10 lg:px-15 xl:px-20 py-10'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                    <div>
                        <h2 className='text-2xl lg:text-[64px] font-medium pb-2'>About the Project</h2>
                        <p className='text-xl'>Infinity Aquamont by Infinity Development redefines coastal luxury in the heart of Downtown Umm Al Quwain. Nestled along an impressive 11-kilometer stretch of shoreline—featuring 7 kilometers of untouched beaches and thoughtfully designed beach parks—this exclusive waterfront community offers a rare blend of tranquility, spaciousness, and refined living.
                            Discover beautifully designed 1- and 2-bedroom seaside residences, as well as spacious 3-bedroom duplexes, each crafted to reflect the essence of oceanfront life. From the gentle rhythm of the waves to the ever-changing play of natural light, every home invites a deep connection to the sea.

                        </p>
                    </div>
                    <img src="/images/projects/image-2.png" alt="" className='hover:scale-105 transition-all duration-500' />
                </div>
            </section>

            <Carousel />
            <section className='bg-[#B8B8B833] px-5 md:px-10 lg:px-15 xl:px-20 py-10'>
                <h2 className='text-2xl lg:text-[64px] font-medium pb-10 text-center'>Floor Plan</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-5'>
                    <div className='space-y-4'>
                        <h3 className='text-[48px]'>1 Bedroom Apartment  (Type D)</h3>
                        <p className='text-2xl'><b>UNIT:</b> 1 BEDROOM + 1 POWDER ROOM + BALCONY</p>
                        <p className='text-2xl'><b>SUITE:</b> 494.49 SQ.FT</p>
                        <p className='text-2xl'><b>BALCONY:</b> 90.22 SQ.FT</p>
                        <p className='text-2xl'><b>TOTAL:</b> 580.22 SQ.FT</p>
                    </div>
                    <img src="/images/projects/image-4.png" alt="" className='hover:scale-105 transition-all duration-500' />
                </div >
            </section >

            <section className='bg-[#FFFEF2] px-5 md:px-10 lg:px-15 xl:px-20 py-10'>
                <h2 className='text-[48px] font-medium text-center pb-5'>Curated Luxury Amenities, Crafted for Elevated Living</h2>
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                    {
                        items.map((item) => (
                            <div key={item.id} className='bg-[#B8B8B833] py-15 rounded-md hover:shadow-sm'>
                                <img src={item.img} alt="" className='m-auto hover:scale-105 transition-all duration-500' />
                                <p className='text-center text-[32px] pt-3'>{item.title}</p>
                            </div>
                        ))
                    }
                </div>
            </section>
            <section className='bg-[#B8B8B833] px-5 md:px-10 lg:px-15 xl:px-20 py-10'>
                <h2 className='text-[48px] font-medium text-center pb-5'>Project Locations</h2>
                <img src="/images/projects/map-2.png" alt="" className='rounded-md' />
            </section>
            <section className='px-5 md:px-10 lg:px-15 xl:px-20 py-10'>
                <h3 className='text-[48px] font-medium text-center pb-5'>Island Living , Nearby Essentials</h3>
                <div className='bg-[#B8B8B833] p-4 flex flex-wrap gap-3 justify-evenly m-auto rounded-lg pb-5'>
                    <div className='text-center'>
                        <img src="/images/projects/dubai.png" alt="" className='h-35 w-35 rounded-full m-auto' />
                        <h5 className='text-[48px] font-medium'>DUBAI</h5>
                        <p className='text-2xl font-medium text-gray-400'>40 MINS</p>
                    </div>
                    <div className='text-center'>
                        <img src="/images/projects/dubai.png" alt="" className='h-35 w-35 rounded-full m-auto' />
                        <h5 className='text-[48px] font-medium'>DUBAI</h5>
                        <p className='text-2xl font-medium text-gray-400'>40 MINS</p>
                    </div>
                    <div className='text-center'>
                        <img src="/images/projects/dubai.png" alt="" className='h-35 w-35 rounded-full m-auto' />
                        <h5 className='text-[48px] font-medium'>DUBAI</h5>
                        <p className='text-2xl font-medium text-gray-400'>40 MINS</p>
                    </div>
                </div>
            </section>

        </div >
    )
}

export default MoreProjects
