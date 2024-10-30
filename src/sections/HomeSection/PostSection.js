"use client";

import Image from "next/image";

export default function PostSection() {
    return (
        <>
            <div className="lg:flex md:hidden sm:hidden w-[20%] flex-col gap-1">
                <div className="bg-kuduOrange py-2 px-5 rounded-md flex justify-center">
                    <div className="w-full flex flex-col items-center gap-2">
                        <p className="text-white text-sm text-center capitalize">
                            Ready to sell your products?
                        </p>
                        <Image src={'/images/store.png'} width={40} height={40} alt="store" />
                        <p className="text-white cursor-pointer text-sm text-center">
                            Post a free advert
                        </p>
                    </div>
                </div>
                <div className="flex w-full h-[327px] relative">
                    <Image src={'/images/smart_phone_ad.png'} width={300} height={100}
                        style={{ height: '100%', width: '100%', objectFit: 'cover'}}
                        alt="smart_ad"
                    />
                </div>
            </div>
        </>
    )
}