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
            <div className="flex w-full flex-col gap-5">
                <div className="flex w-full">
                    <p className="lg:text-xl md:text-xl text-base font-semibold flex flex-grow">
                        EXPLORE POPULAR CATEGORIES
                    </p>
                    <p className="lg:text-base md:text-base text-sm cursor-pointer font-semibold flex">
                        SEE ALL
                    </p>
                </div>
                <div className="flex w-full gap-8 flex-wrap">
                    {categoriesArr.map((category, index) => (
                        <div className="flex flex-col gap-4 py-6 px-14 items-center bg-white rounded-lg shadow-sm">
                            <span className="h-[110px]">
                                <Image src={category.photo} width={100} height={114} alt={category.name} />
                            </span>
                            <p className="text-base font-semibold uppercase">{category.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}