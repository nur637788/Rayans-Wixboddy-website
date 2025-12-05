import React from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/HomePage/Hero'
import OurValue from '../components/HomePage/OurValue'
import Investment from '../components/HomePage/Investment'

function Home() {
    return (
        <div className="w-full overflow-hidden">
            <div
                className='relative bg-[url("/images/home/hero.png")] bg-cover bg-center w-full min-h-screen text-white'>

                <p className='hidden lg:block text-7xl xl:text-8xl font-semibold leading-tight absolute bottom-14 left-16 tracking-wide'>
                    DESIGNING <br /> SPACES WITH
                </p>

                <div className='absolute right-8 bottom-10 lg:right-14 lg:bottom-14 bg-white/30 backdrop-blur-xl  max-w-sm lg:max-w-lg py-4 px-4 rounded-2xl shadow-lg border border-white/20'>

                    <h2 className='text-2xl lg:text-4xl font-semibold leading-snug'>
                        INTENT + <br /> IMPACT
                    </h2>

                    <p className='text-sm lg:text-base mt-3 text-[#DFE3E8] leading-relaxed'>
                        We create architectural experiences that transcend the ordinary. Each project
                        is a careful balance of form, function, and the human experience.
                    </p>

                    <Link to="/projects">
                        <button className='mt-4 bg-[#0A0A0A] hover:bg-black  
                                           px-8 py-4 rounded-lg transition-all duration-300 hover:scale-95 cursor-pointer'>
                            View Our Work →
                        </button>
                    </Link>
                </div>
            </div>

            {/* Sections */}
            <Hero />
            <OurValue />
            <Investment />
        </div>
    )
}

export default Home
