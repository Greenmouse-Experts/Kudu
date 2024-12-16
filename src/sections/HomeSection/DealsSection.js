"use client";

import Image from "next/legacy/image";
import { useEffect, useState } from "react";

export default function DealsSection() {
    // State to track the current slide index
    const [currentIndex, setCurrentIndex] = useState(0);

    // Sample slides data (URLs for images)
    const slides = [
        "/images/phone-section.png",
        "/images/shoes-banner.jpg",
        "/images/laptop-banner.jpg",
    ];

    // Automatic slide change every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 3000); // 3 seconds
        return () => clearInterval(interval);
    }, [slides.length]);

    return (
        <>
            <div className="relative w-full md:h-[465px] xl:h-[577px] overflow-hidden">
                {/* Carousel Wrapper */}
                <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className={`w-full flex-shrink-0 rounded-md h-full relative transition-transform duration-1000 ease-in-out transform ${currentIndex === index ? 'scale-100' : 'scale-80'
                                }`}
                        >
                            <Image src={slide}
                                width={900}
                                height={577}
                                alt={`Slide ${index + 1}`}
                                className="rounded-md"
                                style={{ width: '100%', height: '100%' }}
                            />
                        </div>
                    ))}
                </div>

            </div>
        </>
    )
}