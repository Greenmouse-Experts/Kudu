"use client";

import Image from "next/image";

export default function DealsSection() {
    return (
        <>
            <div className="w-full flex flex-col gap-3">
                <div className="w-full h-[370px] relative">
                    <Image src={'/images/phone_section.png'} layout="fill"
                        objectFit="cover"
                        alt="phone_slider" />
                </div>
                <div className="w-full flex gap-4 p-4 bg-white rounded-md shadow-sm">
                    <div className="w-full flex p-4 bg-kuduOrange500 hover:bg-black rounded-md justify-center">
                        <div className="w-full flex items-center flex-col gap-4">
                            <Image src={'/images/television_3Dmodel.png'} width={100} height={100} alt="tv3D_model" />
                            <span className="py-2 px-4 flex justify-center rounded-full bg-white">
                                <p className="text-sm font-semibold">Smart Deals</p>
                            </span>
                        </div>
                    </div>
                    <div className="w-full flex p-4 bg-kuduOrange500 hover:bg-black rounded-md justify-center">
                        <div className="w-full flex items-center flex-col gap-4">
                            <Image src={'/images/discount_gift.png'} width={100} height={100} alt="discount_model" />
                            <span className="py-2 px-4 flex justify-center rounded-full bg-white">
                                <p className="text-sm font-semibold">Discount %</p>
                            </span>
                        </div>
                    </div>
                    <div className="w-full flex p-4 bg-kuduOrange500 hover:bg-black rounded-md justify-center">
                        <div className="w-full flex items-center flex-col gap-4">
                            <Image src={'/images/clock_3D.png'} width={100} height={100} alt="clock_model" />
                            <span className="py-2 px-4 flex justify-center rounded-full bg-white">
                                <p className="text-sm font-semibold">Flash Sales</p>
                            </span>
                        </div>
                    </div>
                    <div className="w-full flex p-4 bg-kuduOrange500 hover:bg-black rounded-md justify-center">
                        <div className="w-full flex items-center flex-col gap-4">
                            <Image src={'/images/sales_bonus_3D.png'} width={100} height={100} alt="tv3D_model" />
                            <span className="py-2 px-4 flex justify-center rounded-full bg-white">
                                <p className="text-sm font-semibold">Gift Items</p>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}