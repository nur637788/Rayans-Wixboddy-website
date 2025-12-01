import React from 'react'
import Hero from '../components/HomePage/Hero'
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <div className='bg-[url("/images/home/hero.png")] bg-cover bg-center w-screen min-h-screen text-white'>

                <p className='text-4xl font-medium absolute bottom-0 left-20'>DESIGNING <br />
                    SPACES WITH</p>
                <div className='bg-[#FFFFFF4D] max-w-90 rounded p-3 absolute right-10 bottom-0 '>
                    <h2>INTENT + <br /> IMPACT</h2>
                    <p className='text-sm text-[#DFE3E8]'>We create architectural experiences that transcend the ordinary. Each project is a careful balance of form, function, and the human experience.</p>
                    <Link to='/'>
                        <button className='mt-3 bg-black text-sm px-2 py-2 rounded text-white  hover:scale-95 transition-all duration-300 cursor-pointer'>View Our Work →</button>
                    </Link>
                </div>
            </div>



            <Hero />
        </div>
    )
}

export default Home;
