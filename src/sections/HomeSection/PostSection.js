"use client";

import Image from "next/image";

export default function PostSection() {
    return (
        <>
            <div className="flex w-[24%] flex-col h-full gap-3">
                <div className="bg-kuduOrange py-2 px-5 rounded-md flex justify-center">
                    <div className="w-full flex flex-col items-center gap-2">
                        <p className="text-white text-sm text-center capitalize">
                            Ready to sell your products?
                        </p>
                        <Image src={'/images/store.png'} width={50} height={50} alt="store" />
                        <p className="text-white cursor-pointer text-sm text-center">
                            Post a free advert
                        </p>
                    </div>
                </div>
                <div className="flex w-full h-[445px] relative">
                    <Image src={'/images/smart_phone_ad.png'} layout="fill"
                        objectFit="cover"
                        alt="smart_ad"
                    />
                </div>
            </div>
        </>
    )
}