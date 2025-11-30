import React from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { Link } from 'react-router-dom';

function Project() {
    return (
        <div className='bg-[#FFFEF2] '>

            {/* Title Section */}
            <div className="px-5 md:px-10 lg:px-15 xl:px-20 py-5 text-center">
                <h2 className="font-bold text-3xl md:text-5xl">Our Projects</h2>
                <p className="text-sm mt-2 max-w-2xl m-auto">
                    We are committed to eco-friendly design, creating spaces that respect the environment
                    and engage the community. Our sustainable practices benefit both nature and
                    the neighborhoods we serve.
                </p>
            </div>

            {/* Grid Section 1 */}
            <section className='px-5 md:px-10 lg:px-15 xl:px-20 py-10'>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-5">

                    {/* LEFT BIG IMAGE (3 columns) */}
                    <div className="relative md:col-span-3">
                        <img
                            src="./images/projects/image-1.png"
                            alt=""
                            className="w-full h-full object-cover rounded-3xl" />

                        {/* Bottom Location Box */}
                        <div className="absolute bottom-0 left-0 w-full px-5 py-3 rounded-b-2xl bg-black/40 backdrop-blur-lg text-white">
                            <p className="font-medium text-xl">
                                Anantara Zanzibar Resort and Residences
                            </p>
                            <p className="text-sm opacity-90 flex items-center gap-1 mt-1"><CiLocationOn />Malibu, CA</p>
                        </div>
                    </div>

                    {/* RIGHT MAP (2 columns) */}
                    <div className="md:col-span-2">
                        <img
                            src="./images/projects/map-1.png"
                            alt=""
                            className="w-full h-full object-cover rounded-2xl" />
                    </div>
                </div>
            </section>
            {/* Grid Section 2 */}
            <section className=' bg-gray-100 px-5 md:px-10 lg:px-15 xl:px-20 py-10'>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-5">

                    {/* LEFT BIG IMAGE (3 columns) */}
                    <div className="relative md:col-span-3">
                        <img
                            src="./images/projects/image-1.png"
                            alt=""
                            className="w-full h-full object-cover rounded-3xl" />

                        {/* Bottom Location Box */}
                        <div className="absolute bottom-0 left-0 w-full px-5 py-3 rounded-b-2xl bg-black/40 backdrop-blur-lg text-white">
                            <p className="font-medium text-xl">
                                Infinity Hills
                            </p>
                            <p className="text-sm opacity-90 flex items-center gap-1 mt-1"><CiLocationOn /> Beverly Hills, CA</p>
                        </div>
                    </div>

                    {/* RIGHT MAP (2 columns) */}
                    <div className="md:col-span-2">
                        <img
                            src="./images/projects/map-1.png"
                            alt=""
                            className="w-full h-full object-cover rounded-2xl" />
                    </div>
                </div>
            </section>
            {/* Grid Section 3 */}
            <section className='px-5 md:px-10 lg:px-15 xl:px-20 py-10'>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-5">

                    {/* LEFT BIG IMAGE (3 columns) */}
                    <div className="relative md:col-span-3">
                        <img
                            src="./images/projects/image-1.png"
                            alt=""
                            className="w-full h-full object-cover rounded-3xl" />

                        {/* Bottom Location Box */}
                        <div className="absolute bottom-0 left-0 w-full px-5 py-3 rounded-b-2xl bg-black/40 backdrop-blur-lg text-white">
                            <p className="font-medium text-xl">
                                Old Fort Zanzibar
                            </p>
                            <p className="text-sm opacity-90 flex items-center gap-1 mt-1"><CiLocationOn /> Malibu, CA</p>
                        </div>
                    </div>

                    {/* RIGHT MAP (2 columns) */}
                    <div className="md:col-span-2">
                        <img
                            src="./images/projects/map-1.png"
                            alt=""
                            className="w-full h-full object-cover rounded-2xl" />
                    </div>
                </div>
            </section>
            {/* Grid Section 4 */}
            <section className='bg-gray-100 px-5 md:px-10 lg:px-15 xl:px-20 py-10'>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-5">

                    {/* LEFT BIG IMAGE (3 columns) */}
                    <div className="relative md:col-span-3">
                        <img
                            src="./images/projects/image-1.png"
                            alt=""
                            className="w-full h-full object-cover rounded-3xl" />

                        {/* Bottom Location Box */}
                        <div className="absolute bottom-0 left-0 w-full px-5 py-3 rounded-b-2xl bg-black/40 backdrop-blur-lg text-white">
                            <p className="font-medium text-xl">
                                Africa House Garden
                            </p>
                            <p className="text-sm opacity-90 flex items-center gap-1 mt-1"><CiLocationOn /> Malibu, CA</p>
                        </div>
                    </div>

                    {/* RIGHT MAP (2 columns) */}
                    <div className="md:col-span-2">
                        <img
                            src="./images/projects/map-1.png"
                            alt=""
                            className="w-full h-full object-cover rounded-2xl" />
                    </div>
                </div>
            </section>

            {/* Button */}
            <Link to='' className='flex items-center justify-center py-5'>
                <button className='bg-black text-sm px-10 py-2 rounded-md text-white  hover:scale-95 transition-all duration-300 cursor-pointer'>Veiw More ↓</button>
            </ Link>
            <div className='bg-black max-w-lg m-auto rounded-md my-5'>
                <p className='text-white text-center pt-3'>Learn more about Zanzabir</p>
                <Link to='' className='flex items-center justify-center py-5'>
                    <button className='bg-white text-sm px-10 py-2 rounded-md text-black  hover:scale-95 transition-all duration-300 cursor-pointer'>Learn More →</button>
                </ Link>
            </div>
        </div>
    );
}

export default Project;
