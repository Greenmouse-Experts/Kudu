"use client";

import Image from 'next/image';

const PhonesBanner = () => {
    return (
        <>
            <div className="flex flex-col md:flex-row items-center justify-between relative w-full h-auto md:h-64">
                {/* Background section with split colors */}
                <div className="flex flex-col md:flex-row w-full h-full">
                    {/* Left background color (Peach) */}
                    <div className="bg-kuduSkyBlue w-full md:w-[65%] p-6 md:h-full lg:h-full h-[500px]"></div>

                    {/* Right background color (Orange) */}
                    <div className="w-full md:w-[35%] py-5 h-full" style={{ backgroundColor: "rgba(100, 158, 255, 1)" }}></div>
                </div>

                {/* Content section with text, button, and images */}
                <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-between p-6">
                    {/* Left text and button section */}
                    <div className="flex flex-col justify-center max-w-full md:max-w-xs gap-4 text-center md:text-left mb-6 md:mb-0 z-10">
                        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
                            Upgrade to the best of the digital age
                        </h2>
                        <button className="mx-auto md:mx-0 px-4 py-2 text-black w-2/5 md:w-auto border border-black hover:bg-black hover:text-white transition duration-300 ease-in-out">
                            SHOP TECH <span className="ml-2">→</span>
                        </button>
                    </div>

                    {/* Right image section with shoes */}
                    <div className="relative flex flex-col md:flex-row items-center justify-center h-full w-full md:w-auto z-10">
                        <Image
                            src={'/images/game_console.png'}
                            alt="Sneakers"
                            width={150}
                            height={150}
                            className="w-1/2 md:w-1/2 object-contain relative md:mb-0"
                        />
                        <Image
                            src={'/images/phone_pack.png'}
                            alt="Corporate Shoe"
                            width={150}
                            height={150}
                            className="w-1/2 md:w-1/2 object-contain relative md:ml-5 mb-4 md:mb-0"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default PhonesBanner;
