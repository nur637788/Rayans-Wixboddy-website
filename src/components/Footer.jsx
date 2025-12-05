import React, { useState } from 'react'
import { CiLocationOn } from 'react-icons/ci'
import { FaEnvelope, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { FiPhone } from 'react-icons/fi'
import { Link } from 'react-router-dom'

function Footer() {
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const validateEmail = (email) => {
        return /\S+@\S+\.\S+/.test(email);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateEmail(email)) {
            setMessage("❌ Please enter a valid email.");
            return;
        }
        setMessage("✅ Subscription successful!");
        setEmail("");
    };

    return (
        <div className=' bg-[#0A0A0A] pt-5'>
            <div className="px-5 md:px-10 lg:px-15 xl:px-20 py-5  ">
                <footer className="footer text-base-content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-between gap-5">

                    {/* Logo & Follow */}
                    <nav className='w-60 text-white space-y-3'>
                        <Link to='/'><img src="/images/home/logo.png" alt="" /></Link>
                        <p className=' text-[#E5E5E5]'>
                            Crafting unparalleled luxury experiences through innovative design
                            and meticulous attention to detail.
                        </p>
                        <h3 className='text-xl font-medium text-[#DEDEDE]'>Follow us</h3>
                        <div className='flex gap-4 text-xl text-[#FFFFFF]'>
                            <span className='cursor-pointer hover:scale-105 hover:text-red-200 duration-300'><FaInstagram /></span>
                            <span className='cursor-pointer hover:scale-105 hover:text-red-200 duration-300'><FaEnvelope /></span>
                            <span className='cursor-pointer hover:scale-105 hover:text-red-200 duration-300'><FaWhatsapp /></span>
                        </div>
                    </nav>

                    {/* Quick Links */}
                    <nav className='text-[#E5E5E5] space-y-3'>
                        <h6 className="text-[#E5E5E5] font-medium text-xl">Quick Links</h6>
                        <a className="link link-hover">Projects</a>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">News</a>
                        <a className="link link-hover">Contact</a>
                    </nav>

                    {/* Contact */}
                    <nav className='w-60 text-[#E5E5E5] space-y-3'>
                        <h6 className="text-[#E5E5E5] font-medium text-xl">Contact Us</h6>

                        <div className='flex gap-2 cursor-pointer'>
                            <CiLocationOn className='text-xl' />
                            Office 2008, 20th Floor, Infinity Tower, Dubai, UAE
                        </div>

                        <div className='flex gap-2 cursor-pointer'>
                            <CiLocationOn className='text-2xl' />
                            Building No 869, Malindi Funguni Street, Stone Town, Zanzibar
                        </div>

                        <div className='flex gap-2 items-center'>
                            <FiPhone />
                            <a href="tel:+97145788088">+971 4 578 8088</a>
                        </div>

                        <div className='flex gap-2 items-center'>
                            <FaEnvelope />
                            <a href="mailto:info@infinitydevelopment.ae">info@infinitydevelopment.ae</a>
                        </div>
                    </nav>

                    {/* Newsletter */}
                    <form onSubmit={handleSubmit} className='space-y-3'>
                        <h6 className="text-[#E5E5E5] font-medium text-xl">Newsletter</h6>
                        <fieldset className="w-80">
                            <p className='pb-3 text-[#E5E5E5]'>Stay updated with our latest <br /> projects and news</p>
                            <div className=" relative">
                                <input
                                    type="text"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    placeholder="username@site.com"
                                    className=" w-[307px] px-2 py-3 bg-[#F4EEEC] text-[#0A0A0A] rounded-lg " />
                                <button type='submit' className=" px-4 py-2 bg-[#0A0A0A] absolute top-1  right-4 z-10 rounded-lg">Send</button>
                            </div>
                        </fieldset>

                        {message && (
                            <p className={`mt-2 text-sm ${message.includes("success")
                                ? "text-green-400"
                                : "text-red-400"}`}>
                                {message}
                            </p>
                        )}
                    </form>
                </footer>
            </div>
            <hr className='text-[#acacaa]' />
            <p className='text-[#acacaa] text-center py-4'>© 2021-2025, infinity development. All Rights Reserved.</p>
        </div>
    );
}

export default Footer;
