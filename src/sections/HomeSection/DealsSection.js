"use client";

import Image from "next/image";

export default function DealsSection() {
    return (
        <>
            <div className="w-full flex gap-3">
                <div className="w-full h-full relative">
                    <Image src={'/images/phone-section.png'}
                        width={900}
                        height={1200}
                        alt="phone_slider"                        
                    />
                </div>
            </div>
        </>
    )
}