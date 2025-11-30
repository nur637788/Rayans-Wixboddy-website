import React from 'react'
import { Link } from 'react-router-dom';

function About() {
    const items = [
        {
            id: 1,
            img: './images/about/man-1.png',
            name: "Ahmed Al Mansouri",
            title: 'Founder & Chairman',
            desc: "With over 25 years of experience in real estate development, Ahmed has led the company from its inception to become one of the UAE's premier developers.",
        },
        {
            id: 2,
            img: './images/about/man-1.png',
            name: "Ahmed Al Mansouri",
            title: 'Founder & Chairman',
            desc: "With over 25 years of experience in real estate development, Ahmed has led the company from its inception to become one of the UAE's premier developers.",
        },
        {
            id: 3,
            img: './images/about/man-1.png',
            name: "Ahmed Al Mansouri",
            title: 'Founder & Chairman',
            desc: "With over 25 years of experience in real estate development, Ahmed has led the company from its inception to become one of the UAE's premier developers.",
        },
        {
            id: 4,
            img: './images/about/man-1.png',
            name: "Ahmed Al Mansouri",
            title: 'Founder & Chairman',
            desc: "With over 25 years of experience in real estate development, Ahmed has led the company from its inception to become one of the UAE's premier developers.",
        },
        {
            id: 5,
            img: './images/about/man-1.png',
            name: "Ahmed Al Mansouri",
            title: 'Founder & Chairman',
            desc: "With over 25 years of experience in real estate development, Ahmed has led the company from its inception to become one of the UAE's premier developers.",
        },
        {
            id: 6,
            img: './images/about/man-1.png',
            name: "Ahmed Al Mansouri",
            title: 'Founder & Chairman',
            desc: "With over 25 years of experience in real estate development, Ahmed has led the company from its inception to become one of the UAE's premier developers.",
        },
        {
            id: 7,
            img: './images/about/man-1.png',
            name: "Ahmed Al Mansouri",
            title: 'Founder & Chairman',
            desc: "With over 25 years of experience in real estate development, Ahmed has led the company from its inception to become one of the UAE's premier developers.",
        },
        {
            id: 8,
            img: './images/about/man-1.png',
            name: "Ahmed Al Mansouri",
            title: 'Founder & Chairman',
            desc: "With over 25 years of experience in real estate development, Ahmed has led the company from its inception to become one of the UAE's premier developers.",
        },
        {
            id: 9,
            img: './images/about/man-1.png',
            name: "Ahmed Al Mansouri",
            title: 'Founder & Chairman',
            desc: "With over 25 years of experience in real estate development, Ahmed has led the company from its inception to become one of the UAE's premier developers.",
        },
        {
            id: 10,
            img: './images/about/man-1.png',
            name: "Ahmed Al Mansouri",
            title: 'Founder & Chairman',
            desc: "With over 25 years of experience in real estate development, Ahmed has led the company from its inception to become one of the UAE's premier developers.",
        },

    ];
    return (
        <div data-aos='zoom-in'>
            <section className='bg-[#FFFEF2] px-5 md:px-10 lg:px-15 xl:px-20 py-10'>
                <div className='space-y-2 mb-10'>
                    <h1 className='text-2xl md:text-4xl font-bold text-center'>Our Leadership Team</h1>
                    <p className='text-center'>Meet the experienced professionals who lead Infinity Development to new heights.</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-5 '>
                    {items.map((p) => (
                        <div key={p.index} className='bg-white shadow-sm rounded-2xl'>
                            <img src={p.img} alt={p.title} className='rounded-t-2xl' />
                            <div className='p-4'>
                                <h2 className='text-[#212B36] text-xl font-bold'>{p.name}</h2>
                                <h5 className='text-[#637381]'>{p.title}</h5>
                                <p className='text-[#919EAB] mt-3'>{p.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
                {/* Button */}
                <Link to='' className='flex items-center justify-center py-5 mt-10'>
                    <button className='bg-black text-sm px-10 py-2 rounded-md text-white  hover:scale-95 transition-all duration-300 cursor-pointer'>Get in touch with Our Team →</button>
                </ Link>
            </section>
        </div>
    )
}

export default About;
