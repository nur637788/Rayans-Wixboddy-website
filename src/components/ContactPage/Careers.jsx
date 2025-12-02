import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Careers() {
    const [openForm, setOpenForm] = useState(false);
    const Apply = [
        {
            id: 1,
            title: "Senior Project Manager",
            time: "Full Time"
        },
        {
            id: 2,
            title: "Director",
            time: "Full Time"
        },
        {
            id: 3,
            title: "Quantity Surveyor",
            time: "Full Time"
        },
        {
            id: 4,
            title: "Interior Designer",
            time: "Full Time"
        },
        {
            id: 5,
            title: "Guest Agent Manager",
            time: "Full Time"
        },
        {
            id: 6,
            title: "Construction Manager",
            time: "Full Time"
        },
        {
            id: 7,
            title: "Architecture Manager",
            time: "Full Time"
        },
        {
            id: 8,
            title: "Site Architect",
            time: "Full Time"
        },
        {
            id: 9,
            title: "Document Controller",
            time: "Full Time"
        },
        {
            id: 10,
            title: "Senior Project Manager  ",
            time: "Full Time"
        },

    ]
    return (
        <section>
            <div className='bg-[url("/images/contact/hero-1.png")] bg-cover bg-center w-screen min-h-screen text-white'>
                {/* <div className='max-w-90 rounded p-3 absolute right-10 bottom-0 '>
                    <h4 className='text-2xl font-medium'>CAREER OPPORTUNITIES AT
                        INFINITY DEVELOPMENT</h4>
                    <p className='text-sm text-[#DFE3E8]'>At Infinity Development, we bring The Art of Elevation to life in every aspect of what we do. <br /> <br />
                        If you share our passion for envisioning the extraordinary and turning it into reality, we welcome you to explore opportunities to become part of the Infinity Development journey, where your talent can help redefine the landscape of tomorrow.</p>
                </div> */}
            </div>
            {/* APPLY NOW AREA */}
            <div className="px-5 md:px-10 lg:px-20 py-14 bg-[#FFFEF2]">
                <h2 className="text-2xl font-bold text-gray-900 text-center">
                    APPLY NOW
                </h2>
                <h3 className="text-xl md:text-3xl font-medium text-gray-700 mt-2 mb-8 text-center">
                    EXPLORE OPPORTUNITIES
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 justify-between gap-5">
                    {Apply.map((apply) => (
                        <div
                            key={apply.id}
                            className="bg-white px-3 md:px-5 py-4 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h4 className="text-lg md:text-xl font-semibold text-gray-900">
                                        {apply.title}</h4>
                                    <p className="text-gray-600 mt-1">{apply.time}</p>
                                </div>
                                <button
                                    onClick={() => setOpenForm(true)}
                                    className="bg-black text-white text-sm px-3 md:px-4 py-2 rounded-md hover:bg-gray-800 active:scale-95 transition-all duration-300 cursor-pointer">
                                    Apply Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/*  Apply Form */}
                {openForm && (
                    <div className="fixed inset-0 py-5 pt-70 bg-gray-300/30  flex items-center justify-center z-50 overflow-y-scroll">
                        <div className="bg-white rounded-xl w-[90%] max-w-md shadow-md">
                            <div className='flex justify-between gap-5 bg-black px-4 py-2 rounded-t-md text-[#637381]'>
                                <div>
                                    <h3 className='text-white pb-1'>Senior Project Manager</h3>
                                    <div className='flex gap-3'>
                                        <p className='text-[10px] '>Zairbar, Abu dhabi</p>
                                        <p className='text-[10px] '>Posted 1 week ago</p>
                                    </div>
                                </div>

                                <div className='w-6 h-6 rounded-full bg-white flex items-center justify-center'>
                                    <button className="text-black text-sm font-black cursor-pointer"
                                        onClick={() => setOpenForm(false)}> ✕ </button>
                                </div>
                            </div>
                            <div className='px-4'>
                                <p className='text-sm text-[#637381] py-3'>We are looking for an experienced Project Manager to lead our product development initiatives. The ideal candidate will have a proven track record in managing cross-functional teams and delivering complex projects on time.</p>
                                <h2 className="text-xl font-semibold text-center py-3">Apply for this position</h2>
                            </div>
                            <form className="space-y-3 p-4">
                                {/* Name */}
                                <label htmlFor="name">Full Name *</label>
                                <input type="text" id='name' required placeholder="Enter your full name" className="border-2 border-gray-400 rounded py-1 px-2 w-full" />
                                {/* Eamil */}
                                <label htmlFor="email">Email address *</label>
                                <input type="email" id='email' placeholder="Enter your email address" className="border-2 border-gray-400 rounded py-1 px-2 w-full" />
                                {/* CV Area */}
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="cv" className="font-medium">Upload CV*</label>
                                    <label htmlFor="cv"
                                        className="border h-24 rounded-lg bg-gray-50 flex flex-col items-center justify-center border-dashed border-gray-400 cursor-pointer hover:bg-gray-100 transition">
                                        <span className="text-sm text-gray-600">
                                            Drop your file here, or <span className="text-blue-600 underline">browse</span>
                                        </span>
                                        <span className="text-xs text-gray-500">(pdf, docx)</span>
                                    </label>
                                    <input type="file" id="cv" required className="hidden" />
                                </div>
                                {/* Cover Latter Area */}
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="cover" className="font-medium">Cover Letter (Optional)</label>
                                    <textarea
                                        id="cover"
                                        className="border-2 border-gray-400 rounded  p-3 h-28 resize-none focus:outline-none focus:ring-1 focus:ring-black text-sm"
                                        maxLength={500} />
                                    <label htmlFor="cover" className="text-xs text-gray-500 text-right">
                                        0/500 characters
                                    </label>
                                </div>
                                {/* Submit button */}
                                <button type='submit' className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition cursor-pointer">
                                    Submit Application
                                </button>
                            </form>

                        </div>
                    </div>
                )}
            </div>

        </section>
    )
}

export default Careers
