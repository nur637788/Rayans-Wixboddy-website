import React from 'react'
import { Link } from 'react-router-dom';

function News() {
    const items = [
        {
            id: 1,
            img: "./images/news/image-1.png",
            date: "Jun 15, 2025",
            time: "12 min Read",
            title: 'New green energy policies boost investment in solar power',
        },
        {
            id: 2,
            img: "./images/news/image-2.png",
            date: "Jun 15, 2025",
            time: "12 min Read",
            title: 'New green energy policies boost investment in solar power',
        },
        {
            id: 3,
            img: "./images/news/image-1.png",
            date: "Jun 15, 2025",
            time: "12 min Read",
            title: 'New green energy policies boost investment in solar power',
        },
        {
            id: 4,
            img: "./images/news/image-2.png",
            date: "Jun 15, 2025",
            time: "12 min Read",
            title: 'New green energy policies boost investment in solar power',
        },
        {
            id: 5,
            img: "./images/news/image-1.png",
            date: "Jun 15, 2025",
            time: "12 min Read",
            title: 'New green energy policies boost investment in solar power',
        },
        {
            id: 6,
            img: "./images/news/image-2.png",
            date: "Jun 15, 2025",
            time: "12 min Read",
            title: 'New green energy policies boost investment in solar power',
        },

    ];
    return (
        <div data-aos='zoom-in' >
            <section className='bg-[#FFFEF2] px-5 md:px-10 lg:px-15 xl:px-20 py-10'>
                <div className='space-y-2 mb-10'>
                    <div className='flex justify-between items-center gap-5'>
                        <h1 className='text-3xl md:text-4xl font-bold'>News</h1>
                        <Link to='/newsDetails'>
                            <button className='bg-black text-sm px-4 py-2 rounded-md text-white  hover:scale-95 transition-all duration-300 cursor-pointer '>View All Blog →</button>
                        </Link>
                    </div>
                    <div className='flex justify-between items-center gap-5'>
                        <p className='text-[#637381] max-w-3xl text-sm'>Tips for a Successful Blog: To thrive, focus on your niche and engage your audience with valuable content. Consistency matters, so stick to a posting schedule. Promote your posts on social media to expand your reach and boost interaction!</p>

                    </div>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3  gap-5 '>
                    {items.map((p) => (
                        <div key={p.id} className=''>
                            <img src={p.img} alt={p.title} className='rounded-md' />
                            <div className='space-y-3 py-3'>
                                <div className='flex gap-4 space-x-4 text-sm'>
                                    <b>BLOG </b>
                                    <li className='text-gray-600'>{p.date}</li>
                                    <li className='uppercase text-gray-600'>{p.time}</li>
                                </div>
                                <h5 className=' text-2xl font-medium'>{p.title}</h5>
                                <Link to='/newsDetails'>
                                    <button className='bg-black text-sm px-2 py-1 rounded-md text-white  hover:scale-95 transition-all duration-300 cursor-pointer'>Read Post →</button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default News;
