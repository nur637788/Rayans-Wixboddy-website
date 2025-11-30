
import React from 'react'
import { Link } from 'react-router-dom'

function NewsDetails() {
    const items = [
        {
            id: 1,
            img: "./images/news/image-1.png",
            date: "Jun 15, 2025",
            time: "12 min Read",
            title: 'New green energy policies boost investment in solar power',
        },
        {
            id: 2,
            img: "./images/news/image-2.png",
            date: "Jun 15, 2025",
            time: "12 min Read",
            title: 'New green energy policies boost investment in solar power',
        },
    ]
    return (
        <section className='bg-[#FFFEF2] px-5 md:px-10 lg:px-15 xl:px-20 py-5'>
            <div>
                <h2 className='text-2xl md:text-4xl font-medium py-5'>A Second Home in Dubai: Why Investors Are Turning to Luxury Properties</h2>
                <img src="./images/news/news-hero.png" alt="" className='object-cover w-full'/>
                <div className='flex items-center gap-4 space-x-4 mt-3'>
                    <b>ARTICLES </b>
                    <li className='text-gray-600 text-[10px] md:text-sm'>May 29, 2025</li>
                    <li className='uppercase text-gray-600 text-[10px] md:text-sm'>12 MIN READ</li>
                </div>
                <p className='text-[#637381] py-5'>Unguja. The Revolutionary Government of Zanzibar (SMZ) has secured Sh9 billion for the extensive renovation of dilapidated buildings within Stone Town for the fiscal year 2024/25. The funds have been sponsored by Infinity Group, a real Estate development firm that is also in charge of the renovation of the Old Fort</p>
                <div className='text-[#637381] space-y-4'>
                    <h3 className='text-2xl text-black'>1. Sustainability and Eco-Friendly Living</h3>
                    <p>Additionally, through the BIG Z project funded by the World Bank (WB), the government is completing major infrastructure reforms to the road networks and public spaces to enhance the status of the historical city for Zanzibar’s development, particularly in the tourism sector. President Mwinyi instructed the Stone Town Authority to take immediate action to cover all open drains in the town to ensure a safe environment free from diseases and accidents, while also improving the town’s overall appearance. He also promised that the government will continue collaborating with various stakeholders to carry out extensive renovations of Stone Town’s buildings, including a major revitalization of public spaces and gardens.
                        He commended the Ministry of Tourism and Antiquities and the Stone Town Authority for their innovation and expanded efforts in celebrating the day, noting that these celebrations underscore the importance of the town’s continued presence in the world’s heritage sites.</p>

                    <h3 className='text-2xl text-black'>2. Sustainability and Eco-Friendly Living</h3>
                    <p>In addition to this, the government is seeking further funding from various stakeholders to ensure adequate resources to assist citizens in improving these buildings which are believed to be over 194 years old. President of Zanzibar, Dr. Hussein Mwinyi, made the announcement on the evening of December 2, 2024, during the Stone Town Day celebrations at Forodhani, Unguja.
                        “Despite the significant progress made by the Stone Town Authority, the government is determined to step up efforts to improve the condition of this town, which is not only a world heritage site but also a mirror of the nation and the heart of the tourism sector, which is the main pillar of Zanzibar’s economy,” he stated. The President added that the government is currently in the final stages of a feasibility study for a project to underground all infrastructure related to electricity, communications, and water within the town to restore the appearance and character of its historic buildings.</p>

                    <h3 className='text-2xl text-black'>3. Sustainability and Eco-Friendly Living</h3>
                    <p>“The successes I see today shed light on how we can continue to develop Stone Town here in Zanzibar,” he said. On the topic of the digital system, President Mwinyi praised the initiative, which helps curb revenue loss and reduce bureaucracy. He urged the responsible authorities to ensure that the system operates efficiently. Speaking about the challenges faced by residents of Stone Town, he assured that the government would engage with them to find ways of alleviating these costs. He urged the residents to continue protecting their town to ensure its survival for another 100 years, emphasizing that the government’s reforms are not intended to replace the town but to ensure its enduring legacy. President Mwinyi also assured that the government would continue addressing any challenges faced by the residents of Stone Town. Earlier, Ali Said Bakar, Director-General of the Stone Town Preservation and Development Authority, highlighted that the town has become an attractive destination for investors.
                        He mentioned that the government of Oman had contributed over $25 million (approximately 66.25 billion Tanzanian Shillings) to restore the Beit el-Ajaib building to its former glory. The building, a historic landmark, collapsed in December 2020, tragically killing two people.</p>

                    <h3 className='text-2xl text-black'>4. Sustainability and Eco-Friendly Living</h3>
                    <p>UNESCO representative Michael Toto emphasized the importance of Stone Town Day, noting that UNESCO was pleased to participate in the celebrations, as preservation is vital for the growth of cultural heritage. He pledged continued collaboration to find the best strategies to protect the town for the benefit of current and future generations and assured UNESCO’s ongoing support in partnership with the government. On his part, the Executive Secretary of the National Commission for UNESCO in Tanzania, Professor Hamisi Malebo, underscored the significance of preserving the town’s cultural heritage, which holds international recognition, adding that Stone Town stands apart from other cities worldwide. “The preservation of Stone Town is ongoing, unlike many other cities around the world that are now in ruins,” he said. Ahmed Saleh Mbarouk, a resident of Stone Town, praised the government for its efforts to preserve and develop the area, though he noted some challenges. He pointed out that residents are now charged parking fees, a practice that did not exist before or after the Revolution, and requested the government remove this tax.
                        Regarding the digital system, Seif Said Seif, Director of the Government Portal, stated that the system developed by the Stone Town Preservation and Development Authority is based on modern technology. He explained that this system will enable the town to carry out its operations digitally, streamlining services and reducing bureaucracy.</p>
                    <p>
                        Source: <Link className='underline'>The Citizen</Link>
                    </p>
                </div>
            </div>
            <div className='my-10'>
                <div className='flex justify-between items-center'>
                    <h2 className='text-2xl md:text-4xl'>Related Articles</h2>
                    <Link to='/news'>
                        <button className='bg-black text-sm px-2 py-2 rounded text-white  hover:scale-95 transition-all duration-300 cursor-pointer'>View All Blog →</button>
                    </Link>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-5'>
                    {items.map((p) => (
                        <div key={p.id} className=''>
                            <img src={p.img} alt={p.title} className='rounded-md object-cover w-full' />
                            <div className='space-y-3 py-3'>
                                <div className='flex gap-4 space-x-4 text-sm'>
                                    <b>BLOG </b>
                                    <li className='text-gray-600'>{p.date}</li>
                                    <li className='uppercase text-gray-600'>{p.time}</li>
                                </div>
                                <h5 className=' text-2xl font-medium'>{p.title}</h5>
                                <button className='bg-black text-sm px-2 py-1 rounded-md text-white  hover:scale-95 transition-all duration-300 cursor-pointer'>Read Post →</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default NewsDetails
