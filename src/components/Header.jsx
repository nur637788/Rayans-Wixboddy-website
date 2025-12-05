import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Header() {
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState("en");

    return (
        <header className="py-8 bg-[#0A0A0A]/40 backdrop-blur-2xl text-[#FFFFFF] fixed top-0 right-0 left-0 z-50">
            <div className=" mx-auto flex items-center justify-center gap-14 text-base">

                {/* Left Desktop menu */}
                <div className="hidden lg:flex gap-5">
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

                {/* logo */}
                    <Link to='/'> <img src="./images/home/logo.png" alt="" /></Link>
                    <button
                        className="lg:hidden text-2xl text-end"
                        onClick={() => setOpen(!open)}>
                        {open ? <X /> : <Menu />}
                    </button>

                {/* Right Desktop menu */}
                <div className="hidden lg:flex gap-5">
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
                    {/* Language Buttons */}
                    <div className="flex gap-2 border rounded-lg ">
                        <button
                            onClick={() => setActive("en")}
                            className={`px-4 py-1 rounded-lg transition 
                    ${active === "en" ? "bg-[#0D0D0D] text-[#F9FAFB]" : "text-[#F9FAFB]"}`}>
                            En
                        </button>

                        <button
                            onClick={() => setActive("ar")}
                            className={`px-3 py-1 rounded-lg transition 
                    ${active === "ar" ? "bg-[#0D0D0D] text-[#F9FAFB]" : "text-[#F9FAFB]"}`}>
                            العربية
                        </button>
                    </div>

                </div>
            </div>

            {/* Mobile menu Dropdown */}
            {open && (
                <div className="lg:hidden shadow-md p-5 flex flex-col text-start gap-4">

                    <NavLink to="/" onClick={() => setOpen(false)}>Home</NavLink>
                    <NavLink to="/projects" onClick={() => setOpen(false)}>Our Projects</NavLink>
                    <NavLink to="/massage" onClick={() => setOpen(false)}>Chairman's Massage</NavLink>
                    <NavLink to="/infinityF" onClick={() => setOpen(false)}>Infinity Foundation</NavLink>
                    <NavLink to="/news" onClick={() => setOpen(false)}>News</NavLink>
                    <NavLink to="/about" onClick={() => setOpen(false)}>About Us</NavLink>
                    <NavLink to="/contact" onClick={() => setOpen(false)}>Contact Us</NavLink>
                    {/* Language Buttons */}
                    <div className="flex gap-2 border rounded-lg w-fit ">
                        <button
                            onClick={() => setActive("en")}
                            className={`px-4 py-1 rounded-lg transition 
                    ${active === "en" ? "bg-[#0D0D0D] text-[#F9FAFB]" : "text-[#F9FAFB]"}`}>
                            En
                        </button>

                        <button
                            onClick={() => setActive("ar")}
                            className={`px-3 py-1 rounded-lg transition 
                    ${active === "ar" ? "bg-[#0D0D0D] text-[#F9FAFB]" : "text-[#F9FAFB]"}`}>
                            العربية
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
}

export default Header;
