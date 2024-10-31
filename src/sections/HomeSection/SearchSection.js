"use client";

import DropdownMenu from "@/components/DropdownMenu";
import Image from "next/image";
import { useState } from "react";

export default function SearchSection() {
    const arrCategories = [
        "Vehicles", "Phones & Tablet", "Electronics", "Health & Beauty", "Home and Office", "Properties", "Fashion",
        "Sports", "Pets", "Services", "Computing", "Baby Products", "Gaming"
    ];

    const [selectedCategory, setCategory] = useState("All Catgeories");
    const [selectedUseType, setType] = useState("Use Types");

    return (
        <div className="relative w-full lg:min-h-[500px] md:min-h-[400px] h-[200px] lg:py-10 md:py-10 py-4 lg:mt-10 md:mt-10 mt-14 bg-black">
            <Image
                src="/images/shoppingBag.png"
                alt="Background image"
                layout="fill"
                objectFit="cover"
                className="opacity-70"
            />

            {/* Overlay */}
            <div className="absolute inset-0 flex flex-col items-center gap-6 justify-center px-4">
                {/* Heading */}
                <p className="text-white text-base sm:text-3xl md:text-4xl lg:text-4xl font-bold lg:flex flex md:mb-6 text-center">
                    Search Any Item, Anytime!
                </p>

                {/* Search Bar */}
                <div className="flex w-full sm:w-10/12 md:w-7/12 relative justify-center">
                    <span className="absolute lg:block md:block hidden" style={{ top: '-85%', right: '-15%' }}>
                        <Image
                            src="/images/kudu-circle.gif"
                            alt="Animated gif"
                            width={300}
                            height={300}
                            unoptimized
                        />
                    </span>
                    <div className="flex w-full flex-col gap-5 z-0">
                        <div className="flex items-center bg-white rounded-lg overflow-hidden shadow-lg w-full">
                            <input
                                type="text"
                                className="md:w-3/5 w-full px-4 py-2 rounded-lg md:px-6 md:py-4 outline-none text-[13px] md:text-lg text-gray-700"
                                placeholder="Find anything on Kudu..."
                                style={{ fontSize: '13px' }}
                            />
                            <div className="!absolute md:flex hidden right-3 gap-3 w-2/5 justify-end">
                                <div className="w-full flex">
                                    <DropdownMenu buttonLabel={selectedCategory} color={'#000'} btnClass="inline-flex justify-center w-full px-4 h-full py-3 gap-3 rounded-md font-medium bg-gray-300">
                                        {arrCategories.map((category, index) => (
                                            <span className="block px-4 py-2 text-sm text-gray-700 cursor-pointer" onClick={() => setCategory(category)} key={index}>
                                                {category}
                                            </span>
                                        ))}
                                    </DropdownMenu>
                                </div>
                                <div className="flex w-full">
                                    <DropdownMenu buttonLabel={selectedUseType} color={'#FFF'} btnClass="inline-flex justify-center text-white w-full px-4 h-full py-3 gap-3 rounded-md font-medium bg-kuduOrangeFade">
                                            <span className="block px-4 py-2 text-sm text-gray-700 cursor-pointer">
                                                Brand New
                                        </span> 
                                        <span className="block px-4 py-2 text-sm text-gray-700 cursor-pointer">
                                            Refurbished
                                        </span> 
                                        <span className="block px-4 py-2 text-sm text-gray-700 cursor-pointer">
                                            Used
                                        </span> 
                                    </DropdownMenu>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center w-full">
                            <button className="bg-orange-500 text-white text-base px-4 py-2 lg:w-1/5 md:w-1/5 w-1/3 md:px-6 md:py-3 rounded-md hover:bg-orange-600 transition duration-300">
                                Search
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}