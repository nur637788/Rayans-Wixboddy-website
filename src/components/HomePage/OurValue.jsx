import React from 'react'

function OurValue() {
    return (
        <div className='bg-[#080801] text-white'>
            <div className=' px-5 md:px-10 lg:px-15 xl:px-20 py-10 max-w-md md:max-w-5xl m-auto'>
                <div className='pb-10 space-y-2'>
                    <h2 className='text-3xl md:text-6xl text-center'>Our Values Drive Excellence</h2>
                    <p className='text-sm max-w-xl m-auto text-[#919EAB]'>Three fundamental values shape every project we undertake. From cultural preservation to
                        community building, these principles guide our approach to creating meaningful spaces.</p>
                </div>
                {/* grid item-1 */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5 m-auto py-5'>
                    <div className='flex gap-8'>
                        <p className='text-5xl md:text-7xl font-medium'>01</p>
                        <img src="./images/home/image-5.png" alt="" className='w-60 md:w-80 object-cover rounded-2xl' />
                    </div>
                    <div className='w-80'>
                        <h3 className='text-2xl md:text-4xl font-medium pb-5'>Cultural
                            Preservation</h3>
                        <p className='text-sm text-[#919EAB]'>Where history breathes, Infinity builds with care. In Zanzibar's Stone
                            Town, a UNESCO World Heritage Site, we've learned that true progress
                            honors the past. We preserve the soul of a place—its culture, artistry, and rhythm.</p>
                    </div>
                </div>
                {/* grid item-2 */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5 m-auto py-5'>
                    <div className='flex gap-8'>
                        <p className='text-5xl md:text-7xl font-medium'>02</p>
                        <div className='w-80'>
                            <h3 className='text-2xl md:text-4xl font-medium pb-5'>Innovation Forward</h3>
                            <p className='text-sm text-[#919EAB]'>Innovation serves as Infinity's beating heart—our core. We pioneer by
                                introducing a blend of global brands and innovative ideas to existing
                                landscapes, empowering local people and their economies.</p>
                        </div>
                    </div>
                    <img src="./images/home/image-6.png" alt="" className='w-60 md:w-80 object-cover rounded-2xl' />

                </div>
                {/* grid item-3 */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5 m-auto py-5'>
                    <div className='flex gap-8'>
                        <p className='text-5xl md:text-7xl font-medium'>03</p>
                        <img src="./images/home/image-7.png" alt="" className='w-60 md:w-80 object-cover rounded-2xl' />
                    </div>
                    <div className='w-80'>
                        <h3 className='text-2xl md:text-4xl font-medium pb-5'>Community
                            First</h3>
                        <p className='text-sm text-[#919EAB]'>Unity is the foundation of Infinity. We consciously plan, design, and build to facilitate experiences that forge a deep sense of place. Whether on remote islands or in grand cities, our ultimate mission is to ensure thriving communities for all.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurValue

