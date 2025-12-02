import React, { useState } from "react";

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
        <div className="px-5 md:px-10 lg:px-15 xl:px-20 py-10">
            <h3>Let’s Build Something Extraordinary</h3>
            <p>Whether you're interested in investment, collaboration, or just learning more — our team is here to support your journey.</p>
            <div className=" bg-[url('/images/home/hero.png')] bg-cover bg-center">
                <div className="hero-content ">

                    <div className="card w-full max-w-md shadow-2xl  bg-gray-400/50 text-white rounded-xl">
                        <div className="px-5 mt-5">
                            <h2 className="text-2xl font-semibold text-center mb-4">
                                Start Your Journey With Infinity
                            </h2>
                            <p className="text-sm text-center">Fill out the form below and our team will be in touch shortly.Whether it's a project inquiry, partnership, or just a question — we’re here for you.</p>
                        </div>
                        <form onSubmit={handleSubmit} className="card-body">
                            {/* Full Name */}
                            <label className=" font-medium">Full Name</label>
                            <input
                                type="text"
                                className="input input-bordered bg-gray-300 text-black w-full"
                                placeholder="Full name"
                                value={formData.fullName}
                                onChange={(e) =>
                                    setFormData({ ...formData, fullName: e.target.value })
                                } />

                            {/* Email */}
                            <label className=" font-medium">Email</label>
                            <input
                                type="email"
                                className="input input-bordered bg-gray-300 text-black w-full"
                                placeholder="Your email"
                                value={formData.email}
                                onChange={(e) =>
                                    setFormData({ ...formData, email: e.target.value })
                                } />

                            {/* Phone */}
                            <label className="font-medium">Phone no.</label>
                            <input
                                type="text"
                                className="input input-bordered bg-gray-300 text-black w-full"
                                placeholder="Phone number"
                                value={formData.phone}
                                onChange={(e) =>
                                    setFormData({ ...formData, phone: e.target.value })
                                } />


                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {/*Project Dropdowns */}
                                <div>
                                    <label className=" font-medium">Select Project</label>
                                    <select
                                        className="select select-bordered bg-gray-300 text-black w-full"
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
                                        className="select select-bordered bg-gray-300 text-black w-full"
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
                            <div className="flex gap-2 ">
                                <input
                                    type="checkbox"
                                    id="checkbox"
                                    checked={formData.agree}
                                    onChange={(e) =>
                                        setFormData({ ...formData, agree: e.target.checked })
                                    } />
                                <label htmlFor="checkbox">I agree to the privacy policy.</label>
                            </div>
                            {/* Button */}
                            <button className="bg-black text-white text-sm px-10 py-2 rounded-md hover:scale-95 transition-all duration-300 cursor-pointer">
                                Sent Message →
                            </button>
                            {/* Messages */}
                            {error && <p className="text-red-500 mt-2 text-center">{error}</p>}
                            {message && <p className="text-green-400 mt-2 text-center">{message}</p>}
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Contact1;
