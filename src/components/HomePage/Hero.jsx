import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
    const data = [
        {
            category: "CUSTOM BUILD",
            title: "Anantara Zanzibar Resort and Residences",
            location: "Malibu, CA",
            image: "/images/home/image-1.png",
            size: "large"
        },
        {
            category: "RENOVATION",
            title: "Old Fort Zanzibar",
            location: "Zanzibar, TZ",
            image: "/images/home/image-2.png",
            size: "medium"
        },
        {
            category: "RENOVATION",
            title: "Infinity Hills",
            location: "Beverly Hills, CA",
            image: "/images/home/image-3.png",
            size: "small"
        },
        {
            category: "RESIDENTIAL",
            title: "Africa House Garden",
            location: "Manhattan Beach, CA",
            image: "/images/home/image-4.png",
            size: "medium"
        }
    ];

    return (
        <div className="bg-[#FFFEF2] px-5 md:px-10 lg:px-15 xl:px-20 py-10  ">

            {/* Heading Section */}
            <div className="flex items-start justify-between mb-10  m-auto">
                <div>
                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold">Featured Works</h2>
                    <p className="text-[#637381] text-[18px] mt-3 max-w-xl">
                        We are committed to eco-friendly design, creating spaces that respect
                        the environment and engage the community. Our sustainable practices
                        benefit both nature and the neighborhoods we serve.
                    </p>
                </div>

                <Link to='/projects'>
                    <button className='mt-3 bg-[#0A0A0A] hover:bg-[#000000] text-sm lg:text-base px-8 py-4 rounded-lg text-white  hover:scale-95 transition-all duration-300 cursor-pointer'>
                        View Our Work →
                    </button>
                </Link>
            </div>
            <div className="flex flex-wrap justify-between  gap-5 ">
                {
                    data.map((item) => (
                        <div className="">
                            <div className="overflow-hidden  ">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className=" hover:scale-105 transition-all duration-500 rounded-lg "/>
                            </div>

                            <p className=" font-semibold text-[#637381] mt-3 tracking-widest">
                                {item.category}
                            </p>

                            <h3 className="text-xl lg:text-3xl font-medium mt-1">{item.title}</h3>
                            <p className="text-xl text-[#637381]">{item.location}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};


export default Hero