"use client";

import { useState } from "react";

export default function ProductConditions() {
    const conditionsArr = [
        {
            name: 'Popular Auctions',
            id: 'allProducts'
        },
        {
            name: "Today's Selections",
            id: 'brandProducts'
        },
        {
            name: 'Live Auctions',
            id: 'refurbishedProducts'
        },
        {
            name: 'Auction Calendar',
            id: 'usedProducts'
        },
    ]

    const [activeCondition, setActiveCondition] = useState('allProducts');

    return (
        <>
            <div className="flex w-full flex-col lg:gap-5 md:gap-5 gap-2">
                <div className="flex w-full">
                    <p className="lg:text-lg md:text-lg text-xs lg:text-left md:text-left text-center text-black font-semibold flex flex-grow">
                        SORT BY
                    </p>
                    <p className="md:text-sm text-xs cursor-pointer font-semibold underline text-kuduOrange flex">
                        View all Categories
                    </p>
                </div>
                <div className="grid w-full lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-4">
                    {conditionsArr.map((condition, index) => (
                        <div onClick={() => setActiveCondition(condition.id)}
                            className={`flex flex-col gap-4 lg:py-6 py-4 justify-center lg:px-10 md:px-10 px-4 items-center cursor-pointer rounded-lg shadow-sm
                            ${activeCondition === condition.id ? 'bg-kuduOrange text-white' : 'bg-white text-black'}`}
                            key={index}
                        >
                            <p className="lg:text-sm md:text-sm text-[12px] font-[500]">
                                {condition.name}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </>
    )
}