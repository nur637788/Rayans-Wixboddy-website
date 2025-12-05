import React from "react";

function OurValue() {
    return (
        <div className="bg-[#080801] text-white">
            <div className="max-w-[1640px] m-auto px-5 md:px-10 lg:px-15 xl:px-20 py-10">

                {/* Heading */}
                <div className="text-center pb-16 space-y-4">
                    <h2 className="text-3xl md:text-6xl font-semibold leading-tight">
                        Our Values Drive Excellence
                    </h2>
                    <p className="text-sm md:text-base text-[#919EAB] max-w-2xl mx-auto leading-relaxed">
                        Three fundamental values shape every project we undertake. From
                        cultural preservation to community building, these principles guide
                        our approach to creating meaningful spaces.
                    </p>
                </div>

                {/* Item 1 */}
                <div className="flex flex-wrap justify-center gap-5 pb-20">
                    <div className="flex items-start gap-10">
                        <p className="text-6xl lg:text-9xl">01</p>
                        <img
                            src="./images/home/image-5.png"
                            alt="Cultural Preservation"
                            className=" rounded-2xl object-cover shadow-md hover:scale-105 transition-all duration-500"
                        />
                    </div>

                    <div className="max-w-lg">
                        <h3 className="text-3xl md:text-5xl font-medium pb-4">
                            Cultural <br /> Preservation
                        </h3>
                        <p className="text-sm md:text-[18px] text-[#919EAB] leading-relaxed">
                            Where history breathes, Infinity builds with care. In Zanzibar's
                            Stone Town, a UNESCO World Heritage Site, we've learned that true
                            progress honors the past. We preserve the soul of a place—its
                            culture, artistry, and rhythm.
                        </p>
                    </div>
                </div>

                {/* Item 2 */}
                <div className="flex flex-wrap gap-5 justify-center pb-20">
                    <div className="flex items-start gap-10">
                        <p className="text-6xl lg:text-9xl">02</p>

                        <div className="max-w-xl">
                            <h3 className="text-3xl md:text-5xl font-medium pb-4">
                                Innovation <br /> Forward
                            </h3>
                            <p className="text-sm md:text-[18px] text-[#919EAB] leading-relaxed">
                                Innovation serves as Infinity's beating heart—our core. We
                                pioneer by introducing a blend of global brands and innovative
                                ideas to existing landscapes, empowering local people and their
                                economies.
                            </p>
                        </div>
                    </div>

                    <img
                        src="./images/home/image-6.png"
                        alt="Innovation Forward"
                        className=" rounded-2xl object-cover shadow-md hover:scale-105 transition-all duration-500 "/>
                </div>

                {/* Item 3 */}
                <div className="flex flex-wrap gap-5 justify-center pb-10">
                    <div className="flex items-start  gap-10">
                        <p className="text-6xl lg:text-9xl">03</p>
                        <img
                            src="./images/home/image-7.png"
                            alt="Community First"
                            className=" rounded-2xl object-cover shadow-md hover:scale-105 transition-all duration-500"
                        />
                    </div>

                    <div className="max-w-xl">
                        <h3 className="text-3xl md:text-5xl font-medium pb-4">
                            Community <br /> First
                        </h3>
                        <p className="text-sm md:text-[18px] text-[#919EAB] leading-relaxed">
                            Unity is the foundation of Infinity. We consciously plan, design,
                            and build to facilitate experiences that forge a deep sense of
                            place. Whether on remote islands or in grand cities, our ultimate
                            mission is to ensure thriving communities for all.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default OurValue;
