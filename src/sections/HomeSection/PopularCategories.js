"use client";

import Image from "next/image";

export default function PopularCategories() {
    const categoriesArr = [
        {
            name: 'Fashion',
            photo: '/images/fashion_bag.png'
        },
        {
            name: 'Sports',
            photo: '/images/sneakers.png'
        },
        {
            name: 'Vehicles',
            photo: '/images/tyres.png'
        },
        {
            name: 'Electronics',
            photo: '/images/electronics.png'
        },
        {
            name: 'Gaming',
            photo: '/images/gaming.png'
        }
    ]
    return (
        <>
            <div className="flex w-full flex-col lg:gap-5 md:gap-5 gap-2">
                <div className="flex w-full">
                    <p className="lg:text-xl md:text-xl text-sm lg:text-left md:text-left text-center text-black font-semibold flex flex-grow">
                        EXPLORE POPULAR CATEGORIES
                    </p>
                    <p className="lg:text-base md:text-base text-sm cursor-pointer font-semibold lg:flex md:flex hidden">
                        SEE ALL
                    </p>
                </div>
                <div className="flex w-full lg:gap-7 md:gap-6 gap-2 flex-wrap">
                    {categoriesArr.map((category, index) => (
                        <div className="flex flex-col gap-4 py-6 lg:px-14 md:px-14 px-8 items-center bg-white rounded-lg shadow-sm" key={index}>
                            <span className="lg:h-[110px] h-[100px]">
                                <Image src={category.photo} width={100} height={114} alt={category.name} />
                            </span>
                            <p className="lg:text-base md:text-base text-[13px] font-semibold uppercase text-black">{category.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}