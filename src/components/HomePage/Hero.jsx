import React from "react";

const FeaturedWorks = () => {
    const data = [
        {
            category: "CUSTOM BUILD",
            title: "Anantara Zanzibar Resort and Residences",
            location: "Malibu, CA",
            image: "/images/home/image-1.png",
            size: "large"
        },
        {
            category: "RENOVATION",
            title: "Old Fort Zanzibar",
            location: "Zanzibar, TZ",
            image: "/images/home/image-2.png",
            size: "medium"
        },
        {
            category: "RENOVATION",
            title: "Infinity Hills",
            location: "Beverly Hills, CA",
            image: "/images/home/image-3.png",
            size: "small"
        },
        {
            category: "RESIDENTIAL",
            title: "Africa House Garden",
            location: "Manhattan Beach, CA",
            image: "/images/home/image-4.png",
            size: "medium"
        }
    ];

    return (
        <div className="bg-[#FFFEF2] px-5 md:px-10 lg:px-20 py-16">

            {/* Heading Section */}
            <div className="flex items-start justify-between mb-10">
                <div>
                    <h2 className="text-4xl md:text-5xl font-bold">Featured Works</h2>
                    <p className="text-gray-600 mt-3 max-w-xl">
                        We are committed to eco-friendly design, creating spaces that respect
                        the environment and engage the community. Our sustainable practices
                        benefit both nature and the neighborhoods we serve.
                    </p>
                </div>

                <button className="hidden md:block bg-black text-white px-5 py-2 rounded-md hover:bg-black/80 transition">
                    View Our Work →
                </button>
            </div>

            {/* Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                {/* Left Large Image */}
                <div className="md:col-span-2">
                    <FeatureCard item={data[0]} />
                </div>

                {/* Right Top Medium */}
                <FeatureCard item={data[1]} />

                {/* Left Bottom Small */}
                <FeatureCard item={data[2]} />

                {/* Right Bottom Medium */}
                <div className="md:col-span-2">
                    <FeatureCard item={data[3]} />
                </div>
            </div>
        </div>
    );
};

const FeatureCard = ({ item }) => {
    return (
        <div className="w-full">
            <div className="overflow-hidden rounded-2xl shadow-sm">
                <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-[260px] md:h-[350px] lg:h-[380px] object-cover hover:scale-105 transition-all duration-500"/>
            </div>

            <p className="text-xs font-semibold text-gray-500 mt-3 tracking-widest">
                {item.category}
            </p>

            <h3 className="text-xl md:text-2xl font-bold mt-1">{item.title}</h3>
            <p className="text-sm text-gray-600">{item.location}</p>
        </div>
    );
};

export default FeaturedWorks;
