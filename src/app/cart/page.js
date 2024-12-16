"use client";

import Header from "@/components/Header";
import CartBlock from "./layouts/cartsBlock";
import CartSummary from "./layouts/cartSummary";
import RecentViewedProducts from "@/components/RecentViewedProducts";
import Footer from "@/components/Footer";

export default function Cart() {
    return (
        <>
            <div className="w-full flex flex-col h-full bg-kuduLightBlue">
                <Header module='home' />
                <div className="w-full flex flex-col xl:px-80 lg:pl-44 lg:pr-36 md:px-4 px-3 md:py-0 lg:gap-10 md:gap-8 gap-5 bg-kuduLightBlue h-full">
                    <div className="w-full flex md:flex-row flex-col gap-10 items-start md:mt-24 mt-20">
                        <div className="md:w-[68%] w-full flex"><CartBlock /></div>
                        <div className="md:w-[32%] w-full flex"><CartSummary /></div>
                    </div>
                    <div className="w-full flex flex-col gap-6 items-start mt-10">
                        <p className="md:text-xl text-base font-semibold">Your Recently Viewed Products</p>
                        <RecentViewedProducts />
                    </div>
                </div>
                <div className="w-full flex flex-col gap-6 items-start mt-24">
                    <Footer />
                </div>
            </div>
        </>
    )
}