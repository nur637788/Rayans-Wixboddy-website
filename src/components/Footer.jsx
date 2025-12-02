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
        <div className="px-5 md:px-10 lg:px-15 xl:px-20 py-5 bg-black ">
            <footer className="footer text-base-content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-between gap-5">

                {/* Logo & Follow */}
                <nav className='w-60 text-white'>
                    <Link to='/'><img src="/images/home/logo.png" alt="" /></Link>
                    <p className='text-sm text-white'>
                        Crafting unparalleled luxury experiences through innovative design
                        and meticulous attention to detail.
                    </p>
                    <h3 className='text-xl font-medium'>Follow us</h3>
                    <div className='flex gap-4 text-xl'>
                        <span className='cursor-pointer hover:scale-105 hover:text-red-200 duration-300'><FaInstagram /></span>
                        <span className='cursor-pointer hover:scale-105 hover:text-red-200 duration-300'><FaEnvelope /></span>
                        <span className='cursor-pointer hover:scale-105 hover:text-red-200 duration-300'><FaWhatsapp /></span>
                    </div>
                </nav>

                {/* Quick Links */}
                <nav className='text-white'>
                    <h6 className="text-white font-semibold text-xl">Quick Links</h6>
                    <a className="link link-hover">Projects</a>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">News</a>
                    <a className="link link-hover">Contact</a>
                </nav>

                {/* Contact */}
                <nav className='w-60 text-white'>
                    <h6 className="text-white font-semibold text-xl">Contact Us</h6>

                    <div className='flex gap-2'>
                        <CiLocationOn className='text-xl' />
                        Office 2008, 20th Floor, Infinity Tower, Dubai, UAE
                    </div>

                    <div className='flex gap-2'>
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
                <form onSubmit={handleSubmit}>
                    <h6 className="text-white font-semibold text-xl">Newsletter</h6>
                    <fieldset className="w-80">
                        <p className='pb-3 text-white'>Stay updated with our latest projects and news</p>
                        <div className="join">
                            <input
                                type="text"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                placeholder="username@site.com"
                                className="input input-bordered join-item bg-white text-black"
                            />
                            <button type='submit' className="btn btn-primary join-item">Send</button>
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
    );
}

export default Footer;
