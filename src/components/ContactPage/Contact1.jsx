import React, { useState } from "react";
import { Link } from "react-router-dom";

function Contact1() {

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        project: "",
        budget: "",
        agree: false,
    });

    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);
    const validatePhone = (num) => /^[0-9]{10,15}$/.test(num);

    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");
        setMessage("");

        // Validation
        if (!formData.fullName) return setError("Full Name is required!");
        if (!validateEmail(formData.email)) return setError("Invalid Email Address!");
        if (!validatePhone(formData.phone)) return setError("Phone number must be 10–15 digits!");
        if (!formData.project) return setError("Please select a project!");
        if (!formData.budget) return setError("Please select your budget!");
        if (!formData.agree) return setError("You must agree to the privacy policy!");

        // Success Massage
        setMessage("✅ Your message has been submitted successfully!");
        setFormData({
            fullName: "",
            email: "",
            phone: "",
            project: "",
            budget: "",
            agree: false,
        });
    };

    return (
        <div className="px-5 md:px-10 lg:px-15 xl:px-20 py-10 mt-25">
            <div className="flex justify-between gap-4">
                <h3 className="text-3xl lg:text-[64px] font-bold w-3xl">Let’s Build Something Extraordinary</h3>
                <Link to='/careers'>
                    <button className='bg-black px-10 py-4 mt-5 rounded-md text-white  hover:scale-95 transition-all duration-300 cursor-pointer'>Get Career's →</button>
                </ Link>
            </div>
            <p className="text-2xl text-[#56606E] pb-3 pt-3">Whether you're interested in investment, collaboration, or just learning more — our team is here to support your journey.</p>
            <div className=" bg-[url('/images/contact/hero-2.png')] 
              rounded-md h-[1024px] xl:h-full">
                <div className=" h-screen flex flex-wrap gap-5 justify-between items-end py-5 mx-5 lg:mx-10 pb-10">
                    <div className="p-5 w-fit h-fit max-w-xl shadow-2xl bg-gray-400/50 text-white rounded-xl">
                    <h1 className="text-2xl lg:text-[32px] font-medium">Contact information</h1>
                    <p className="text-base lg:text-2xl">800-80008</p>
                    <p className="text-base lg:text-2xl">+971 4 578 8088</p>
                    <p className="text-2xl lg:text-[32px]">Email</p>
                    <a className="text-base lg:text-2xl" href="mailto:inquiries@infinitydevelopments.ae">inquiries@infinity.ae</a>
                    </div>

                    <div className="card w-full h-fit max-w-xl shadow-2xl  bg-gray-400/50 text-white rounded-xl">
                        <div className="px-5 mt-5">
                            <h2 className="text-2xl lg:text-4xl font-medium text-center mb-3">
                                Start Your Journey With Infinity
                            </h2>
                            <p className="text-sm lg:text-[18px] text-center">Fill out the form below and our team will be in touch shortly.Whether it's a project inquiry, partnership, or just a question — we’re here for you.</p>
                        </div>
                        <form onSubmit={handleSubmit} className="card-body ">
                            {/* Full Name */}
                            <label className=" font-medium pt-4">Full Name</label>
                            <input
                                type="text"
                                className="input input-bordered bg-gray-400 border border-[#F9FAFB]  w-full text-[#DFE3E8]"
                                placeholder="Full name"
                                required
                                value={formData.fullName}
                                onChange={(e) =>
                                    setFormData({ ...formData, fullName: e.target.value })
                                } />

                            {/* Email */}
                            <label className=" font-medium mt-4">Email</label>
                            <input
                                type="email"
                                className="input input-bordered bg-gray-400 border border-[#F9FAFB]  w-full text-[#DFE3E8]"
                                placeholder="Your email"
                                required
                                value={formData.email}
                                onChange={(e) =>
                                    setFormData({ ...formData, email: e.target.value })
                                } />

                            {/* Phone */}
                            <label className="font-medium mt-4">Phone no.</label>
                            <input
                                type="text"
                                className="input input-bordered bg-gray-400 border border-[#F9FAFB]  w-full text-[#DFE3E8]"
                                placeholder="Phone number"
                                required
                                value={formData.phone}
                                onChange={(e) =>
                                    setFormData({ ...formData, phone: e.target.value })
                                } />


                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
                                {/*Project Dropdowns */}
                                <div>
                                    <label className=" font-medium">Select Project</label>
                                    <select
                                        className="select select-bordered bg-gray-400 border border-[#F9FAFB] text-[#DFE3E8]  w-full"
                                        value={formData.project}
                                        onChange={(e) =>
                                            setFormData({ ...formData, project: e.target.value })
                                        }>
                                        <option value="">Project</option>
                                        <option value="project-1">Project 1</option>
                                        <option value="project-2">Project 2</option>
                                        <option value="project-3">Project 3</option>
                                    </select>
                                </div>
                                {/* Budget Dropdowns */}
                                <div>
                                    <label className="font-medium">Select Unit Type</label>
                                    <select
                                        className="select select-bordered bg-gray-400 border border-[#F9FAFB] text-[#DFE3E8]  w-full"
                                        value={formData.budget}
                                        onChange={(e) =>
                                            setFormData({ ...formData, budget: e.target.value })
                                        }>
                                        <option value="">Unit type</option>
                                        <option value="low">$5k – $10k</option>
                                        <option value="medium">$10k – $50k</option>
                                        <option value="high">$50k+</option>
                                    </select>
                                </div>
                            </div>

                            {/* Checkbox */}
                            <div className="flex gap-2 mt-4">
                                <input
                                    type="checkbox"
                                    id="checkbox"
                                    required
                                    checked={formData.agree}
                                    onChange={(e) =>
                                        setFormData({ ...formData, agree: e.target.checked })
                                    } />
                                <label htmlFor="checkbox">I agree to the privacy policy.</label>
                            </div>
                            {/* Button */}
                            <button className="bg-[#0A0A0A] mt-5 text-white px-6 py-4 rounded-md hover:scale-95 transition-all duration-300 cursor-pointer max-w-md m-auto">
                                Sent Message →
                            </button>
                            {/* Messages */}
                            {/* {error && <p className="text-red-500 mt-2 text-center">{error}</p>} */}
                            {message && <p className="text-green-400 mt-2 text-center">{message}</p>}
                        </form>
                    </div>

                </div>
            </div>
            {/* Map Area */}
            <div>
                <h3 className="text-3xl lg:text-[48px] font-medium text-center py-8">Our Office</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-1 border rounded-md p-4">
                        <h4 className="text-xl lg:text-[32px] font-medium">Dubai Office</h4>
                        <p className="text-2xl text-[#919EAB]">Office 2008, 20th Floor, Infinity Tower, Dubai, UAE</p>
                        <img src="/images/contact/map-1.png" alt="" className="rounded-md" />
                        <Link to=''>
                            <button className='bg-black px-4 py-3 mt-5 rounded-md text-white  hover:scale-95 transition-all duration-300 cursor-pointer'>Get Directions →</button>
                        </ Link>
                    </div>
                    <div className="space-y-1 border rounded-md p-4">
                        <h4 className="text-xl lg:text-[32px] font-medium">Zanzibar Office</h4>
                        <p className="text-2xl text-[#919EAB]">Building No 869, Malindi Funguni Street, Stone Town, Zanzibar</p>
                        <img src="/images/contact/map-1.png" alt="" className="rounded-md" />
                        <Link to=''>
                            <button className='bg-black px-4 py-3 mt-5 rounded-md text-white  hover:scale-95 transition-all duration-300 cursor-pointer'>Get Directions →</button>
                        </ Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact1;
