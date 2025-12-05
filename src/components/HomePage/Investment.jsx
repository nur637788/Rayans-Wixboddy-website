import React from "react";
import { Link } from "react-router-dom";

function Investment() {
    return (
        <section className="bg-[#FFFEF2] px-5 md:px-10 lg:px-15 xl:px-20 py-10">
            {/* Heading */}
            <div className="pb-14 space-y-4 max-w-4xl">
                <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold leading-tight">
                    Investment Opportunities
                </h2>
                <p className="text-base lg:text-[18px] text-[#0A0A0A] leading-relaxed">
                    Unlock unparalleled potential with Infinity's prime investment
                    opportunities. From exquisite resort developments to dynamic
                    residential projects, we offer ventures designed with significant
                    returns and lasting impact.
                </p>
            </div>

            {/* Investment Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Card 1 */}
                <div
                    className="relative rounded-2xl overflow-hidden bg-cover bg-center h-[360px] md:h-[420px] lg:h-[480px] shadow-lg"
                    style={{ backgroundImage: 'url("/images/home/image-9.png")' }}>
                    <div className="absolute bottom-6 left-6 right-6 rounded-lg bg-black/35 backdrop-blur-md px-6 py-5 text-white space-y-1.5">
                        <p className="text-xs font-medium text-gray-200">Luxury Hospitality</p>
                        <h3 className="text-lg md:text-2xl font-medium leading-snug">
                            Anantara Zanzibar <br /> Resort & Residences
                        </h3>
                        <p className="text-sm text-gray-200 leading-relaxed">
                            Redefining luxury hospitality in Africa with world-class
                            amenities, pristine beachfront location, and exceptional
                            investment potential.
                        </p>
                    </div>
                </div>

                {/* Card 2 */}
                <div
                    className="relative rounded-2xl overflow-hidden bg-cover bg-center h-[360px] md:h-[420px] lg:h-[480px] shadow-lg"
                    style={{ backgroundImage: 'url("/images/home/image-10.png")' }}>
                    <div className="absolute bottom-6 left-6 right-6 rounded-lg bg-black/35 backdrop-blur-md px-6 py-5 text-white space-y-1.5">
                        <p className="text-xs font-medium text-gray-200">
                            Mixed-Use Development
                        </p>
                        <h3 className="text-lg md:text-2xl font-medium leading-snug">
                            Infinity Hills <br /> Residential & Commercial
                        </h3>
                        <p className="text-sm text-gray-200 leading-relaxed">
                            A dynamic development combining premium residential living with
                            commercial spaces, designed for modern lifestyles and strong
                            returns.
                        </p>
                    </div>
                </div>
            </div>

            {/* Stats Section */}
            <div className="bg-[#0A0A0A] text-white rounded-xl mt-14">
                <div className="grid grid-cols-1 md:grid-cols-3 text-center gap-10 py-10 px-6 md:px-12">
                    <div>
                        <h3 className="text-5xl font-semibold">$450M+</h3>
                        <p className="text-[#C4CDD5] mt-1">
                            Gross Development Value
                        </p>
                    </div>

                    <div>
                        <h3 className="text-5xl font-semibold">14+</h3>
                        <p className="text-[#C4CDD5] mt-1">Active Projects</p>
                    </div>

                    <div>
                        <h3 className="text-5xl font-semibold">98%</h3>
                        <p className="text-[#C4CDD5] mt-1">Client Satisfaction</p>
                    </div>
                </div>

                {/* Contact Button */}
                <div className="text-center space-y-3 pb-10">
                    <p className="text-[18px]">
                        Join us on the path to prosperity. Contact us today to explore these
                        unique opportunities.
                    </p>

                    <Link to="/contact">
                        <button className="bg-[#F6F6F6] hover:bg-[#f6eded]   text-[#0A0A0A] px-10 py-2 lg:py-4 rounded-md hover:scale-95 transition-all duration-300 shadow-md text-[18px]">
                            Contact Us →
                        </button>
                    </Link>
                </div>
            </div>

            {/* Bottom CTA */}
            <div className="bg-[#0A0A0A] max-w-[800px] mx-auto rounded-xl mt-12 py-8 text-center space-y-4">
                <p className="text-white text-2xl">
                    Ready to create something extraordinary?
                </p>

                <Link to="/contact">
                    <button className="bg-[#F6F6F6] hover:bg-[#f6eded] text-[#0A0A0A] px-8 py-2 lg:py-4 rounded-md hover:scale-95 transition-all duration-300 shadow-md text-[18px]">
                        Get In Touch →
                    </button>
                </Link>
            </div>
        </section>
    );
}

export default Investment;
