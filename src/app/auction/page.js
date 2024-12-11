"use client";

import Header from "@/components/Header";
import Image from "next/image";
import ProductConditions from "./layouts/productConditions";
import ProductsSection from "./layouts/productsSection";
import Footer from "@/components/Footer";

export default function AuctionPage() {
    return (
        <>
            <div className="w-full flex flex-col h-full bg-kuduLightBlue">
                <Header module='home' />
                <div className="w-full flex flex-col h-full gap-10 bg-kuduLightBlue h-full">
                    <div className="relative w-full lg:min-h-[500px] md:min-h-[400px] h-[185px] z-50 lg:py-10 md:py-10 mt-1">
                        <Image
                            src="/images/auction_frame.png"
                            alt="Background image"
                            layout="fill"
                            objectFit="contain"
                        />
                    </div>
                    <div className="w-full flex flex-col xl:px-80 lg:pl-44 lg:pr-36 md:px-4 px-5 py-3 md:py-0 lg:gap-10 md:gap-8 gap-5 bg-kuduLightBlue h-full">
                        <div className="w-full flex">
                            <ProductConditions />
                        </div>
                        <div className="w-full flex mt-3 mb-10">
                            <ProductsSection />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}