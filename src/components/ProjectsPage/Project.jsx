import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";

export default function Projects() {
    return (
        <div className="w-full bg-[#FFFEF2]">
            <div className="max-w-4xl m-auto space-y-5 my-5">
                <h2 className="text-4xl lg:text-7xl font-bold text-center">Our Projects</h2>
                <p className="text-xl text-center">We are committed to eco-friendly design, creating spaces that respect the environment and engage the community. Our sustainable practices benefit both nature and the neighborhoods we serve.</p>
            </div>

            {/* ========= SECTION 1 ========= */}
            <section className="px-5 md:px-10 lg:px-15 xl:px-20 py-10">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-5">

                    {/* LEFT BIG IMAGE (3 columns) */}
                    <div className="relative md:col-span-3">
                        <img
                            src="./images/projects/image-1.png"
                            alt=""
                            className="w-full h-full object-cover rounded-3xl" />

                        {/* Bottom Location Box */}
                        <div className="absolute bottom-0 left-0 w-full px-5 py-4 rounded-b-2xl bg-black/40 backdrop-blur-sm text-white space-y-3">
                            <p className="text-2xl lg:text-[40px]">
                                Anantara Zanzibar Resort and Residences
                            </p>
                            <p className="opacity-90 flex items-center gap-1 text-2xl">
                                <CiLocationOn /> Malibu, CA
                            </p>
                        </div>
                    </div>

                    {/* RIGHT STICKY MAP */}
                    <div className="md:col-span-2 sticky top-20 h-fit z-10">
                        <img
                            src="./images/projects/map-1.png"
                            alt=""
                            className="w-full h-full object-cover rounded-2xl" />
                    </div>
                </div>
            </section>

             {/* ========= SECTION 2 ========= */}
            <section className="px-5 md:px-10 lg:px-15 xl:px-20 py-10 bg-[#B8B8B833]">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-5">

                    {/* LEFT IMAGE */}
                    <div className="relative md:col-span-3">
                        <img
                            src="./images/projects/image-3.png"
                            alt=""
                            className="w-full h-full object-cover rounded-3xl" />

                        <div className="absolute bottom-0 left-0 w-full px-5 py-4 rounded-b-2xl bg-black/40 backdrop-blur-sm text-white space-y-3">
                            <p className="text-2xl lg:text-[40px]">
                                Old Fort Zanzibar
                            </p>
                            <p className="opacity-90 flex items-center gap-1 text-2xl">
                                <CiLocationOn /> Beverly Hills, CA
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========= SECTION 3 ========= */}
            <section className="px-5 md:px-10 lg:px-15 xl:px-20 py-10">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-5">

                    {/* LEFT IMAGE */}
                    <div className="relative md:col-span-3">
                        <img
                            src="./images/projects/image-2.png"
                            alt=""
                            className="w-full h-full object-cover rounded-3xl" />

                        <div className="absolute bottom-0 left-0 w-full px-5 py-4 rounded-b-2xl bg-black/40 backdrop-blur-sm text-white space-y-3">
                            <p className="text-2xl lg:text-[40px]">
                                Old Fort Zanzibar
                            </p>
                            <p className="opacity-90 flex items-center gap-1 text-2xl">
                                <CiLocationOn /> Malibu, CA
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========= SECTION 4 ========= */}
            <section className="px-5 md:px-10 lg:px-15 xl:px-20 py-10 bg-[#B8B8B833]">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-5">

                    {/* LEFT IMAGE */}
                    <div className="relative md:col-span-3">
                        <img
                            src="./images/projects/image-3.png"
                            alt=""
                            className="w-full h-full object-cover rounded-3xl" />

                        <div className="absolute bottom-0 left-0 w-full px-5 py-4 rounded-b-2xl bg-black/40 backdrop-blur-sm text-white space-y-3">
                            <p className="text-2xl lg:text-[40px]">
                                Africa House Garden
                            </p>
                            <p className="opacity-90 flex items-center gap-1 text-2xl">
                                <CiLocationOn /> Malibu, CA
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bottom  */}
            <div className="text-center mt-10">
                <Link to="/moreProjects" >
                    <button className="text-[#F6F6F6] bg-black px-10 py-2 lg:py-4 rounded-md hover:scale-95 transition-all duration-300 shadow-md text-[18px]">
                        View More ↓
                    </button>
                </Link>
            </div>

            <div className="bg-black max-w-[800px] mb-10 mx-auto rounded-xl mt-12 py-8 text-center space-y-4">
                <p className="text-white text-2xl">
                    Learn more about Zanzabir
                </p>

                <Link to="/contact">
                    <button className="bg-[#F6F6F6] hover:bg-[#f6eded] text-black px-10 py-2 lg:py-4 rounded-md hover:scale-95 transition-all duration-300 shadow-md text-[18px]">
                       Learn More →
                    </button>
                </Link>
            </div>

        </div>
    );
}
