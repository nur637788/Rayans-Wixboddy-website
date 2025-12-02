import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Header() {
    const [open, setOpen] = useState(false);

    return (
        <header className="py-3  bg-black text-white">
            <div className=" mx-auto flex items-center justify-center gap-10">

                {/* Left Links (Desktop Only) */}
                <div className="hidden md:flex gap-5">
                    <NavLink
                        to="/"
                        className={({ isActive }) => (isActive ? "underline underline-offset-6 font-medium" : "text-gray-300")}>
                        Home
                    </NavLink>

                    <NavLink
                        to="/projects"
                        className={({ isActive }) => (isActive ? "underline underline-offset-6 font-medium" : "text-gray-300")}>
                        Our Projects
                    </NavLink>

                    <NavLink
                        to="/massage"
                        className={({ isActive }) => (isActive ? "underline underline-offset-6 font-medium" : "text-gray-300")}>
                        Chairman's Massage
                    </NavLink>
                </div>

                {/* LOGO */}
                <Link to='/'> <img src="./images/home/logo.png" alt="" /></Link>
                <button
                    className="md:hidden text-2xl text-end"
                    onClick={() => setOpen(!open)}>
                    {open ? <X /> : <Menu />}
                </button>



                {/* Right Links (Desktop Only) */}
                <div className="hidden md:flex gap-5">
                    <NavLink
                        to="/infinityF"
                        className={({ isActive }) => (isActive ? "underline underline-offset-6 font-medium" : "text-gray-300")}>
                        Infinity Foundation
                    </NavLink>

                    <NavLink
                        to="/news"
                        className={({ isActive }) => (isActive ? "underline underline-offset-6 font-medium" : "text-gray-300")}>
                        News
                    </NavLink>

                    <NavLink
                        to="/about"
                        className={({ isActive }) => (isActive ? "underline underline-offset-6 font-medium" : "text-gray-300")}>
                        About Us
                    </NavLink>

                    <NavLink
                        to="/contact"
                        className={({ isActive }) => (isActive ? "underline underline-offset-6 font-medium" : "text-gray-300")}>
                        Contact Us
                    </NavLink>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {open && (
                <div className="md:hidden shadow-md p-5 flex flex-col text-start gap-4">

                    <NavLink to="/" onClick={() => setOpen(false)}>Home</NavLink>
                    <NavLink to="/projects" onClick={() => setOpen(false)}>Our Projects</NavLink>
                    <NavLink to="/massage" onClick={() => setOpen(false)}>Chairman's Massage</NavLink>
                    <NavLink to="/infinityF" onClick={() => setOpen(false)}>Infinity Foundation</NavLink>
                    <NavLink to="/news" onClick={() => setOpen(false)}>News</NavLink>
                    <NavLink to="/about" onClick={() => setOpen(false)}>About Us</NavLink>
                    <NavLink to="/contact" onClick={() => setOpen(false)}>Contact Us</NavLink>

                </div>
            )}
        </header>
    );
}

export default Header;
