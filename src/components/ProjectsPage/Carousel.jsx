import React, { useState } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

function Carousel() {

    // Image List
    const images = [
        "./images/projects/image-1.png",
        "./images/projects/image-2.png",
        "./images/projects/image-3.png",
    ];

    const [index, setIndex] = useState(0);

    const prevSlide = () => {
        setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="bg-[#FFFDF3] py-10 w-full">
            <h2 className="text-center text-3xl md:text-[64px] font-medium py-5">
                A Visual Symphony
            </h2>

            <div className="flex items-center justify-center gap-3 md:gap-8 px-5">

                {/* Left  Image */}
                <div className="relative w-[300px] h-[250] md:h-[350px] lg:h-[470px] rounded-xl overflow-hidden cursor-pointer">
                    <img
                        src={images[(index - 1 + images.length) % images.length]}
                        className="w-full h-full object-cover"
                        alt="" />
                    <button
                        onClick={prevSlide}
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-1 rounded-full shadow">
                        <IoChevronBack size={20} />
                    </button>
                </div>

                {/* Main image */}
                <div className="relative w-full  rounded-xl overflow-hidden ">
                    <img
                        src={images[index]}
                        className="w-full h-full object-cover"
                        alt=""
                    />
                </div>

                {/* Right image */}
                <div className="relative  w-[300px] h-[250] md:h-[350px] lg:h-[470px] rounded-xl overflow-hidden cursor-pointer">
                    <img
                        src={images[(index + 1) % images.length]}
                        className="w-full h-full object-cover"
                        alt="" />
                    <button
                        onClick={nextSlide}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-1 rounded-full shadow">
                        <IoChevronForward size={20} />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Carousel;
