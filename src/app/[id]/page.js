"use client";

import Header from "@/components/Header";
import ProfileSideBar from "./components/sideBar";
import Footer from "@/components/Footer";
import AccountProfile from "./modules/profile";
import ProductListing from "@/components/ProductsList";

export default function UserProfile() {
    const productsArr = [
        {
            photo: "/images/clothProduct.png",
            title: "85 inch Oled Television",
            price: "₦ 63,500",
            status: "Used",
        },
        {
            photo: "/images/television.png",
            title: "85 inch Oled Television",
            price: "₦ 63,500",
            status: "Brand New"
        },
        {
            photo: "/images/sneakers.png",
            title: "85 inch Oled Television",
            price: "₦ 63,500",
            status: "Brand New"
        },
        {
            photo: "/images/toyota.png",
            title: "85 inch Oled Television",
            price: "₦ 63,500",
            status: "Brand New"
        },
        {
            photo: "/images/sneakers_shoe.png",
            title: "85 inch Oled Television",
            price: "₦ 63,500",
            status: "Brand New"
        },
    ];

    return (
        <>
            <div className="w-full flex flex-col h-full bg-kuduLightBlue">
                <Header module='home' />
                <div className="w-full flex flex-col xl:px-80 lg:pl-44 lg:pr-36 md:px-4 px-5 py-3 mt-24 md:py-0 lg:gap-10 md:gap-8 gap-5 bg-kuduLightBlue h-full">
                    <div className="w-full flex md:flex-row flex-col h-full relative gap-8 items-start">
                        <div className="w-[35%] md:flex hidden flex-col">
                            <ProfileSideBar />
                        </div>
                        <div className="flex w-full md:w-[65%]">
                            <AccountProfile />
                        </div>
                    </div>

                    <div className="w-full flex flex-col gap-6 items-start mt-20">
                        <p className="text-xl uppercase font-semibold">More Like this</p>
                        <ProductListing productsArr={productsArr} />
                    </div>
                </div>

                <div className="w-full flex flex-col gap-6 items-start mt-20">
                    <Footer />
                </div>
            </div>
        </>
    )
}