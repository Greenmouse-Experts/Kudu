"use client";

import Image from "next/image";

export default function ProductsSection() {
    const productsArr = [
        {
            photo: "/images/iphone.png",
            title: "85 inch Oled Television",
            price: "₦ 63,500"
        },
        {
            photo: "/images/tv3D.png",
            title: "85 inch Oled Television",
            price: "₦ 63,500"
        },
        {
            photo: "/images/headset.png",
            title: "85 inch Oled Television",
            price: "₦ 63,500"
        },
        {
            photo: "/images/shoe.png",
            title: "85 inch Oled Television",
            price: "₦ 63,500"
        },
        {
            photo: "/images/tv3D.png",
            title: "85 inch Oled Television",
            price: "₦ 63,500"
        },
        {
            photo: "/images/iphone.png",
            title: "85 inch Oled Television",
            price: "₦ 63,500"
        },
        {
            photo: "/images/tv3D.png",
            title: "85 inch Oled Television",
            price: "₦ 63,500"
        },
        {
            photo: "/images/headset.png",
            title: "85 inch Oled Television",
            price: "₦ 63,500"
        },
        {
            photo: "/images/shoe.png",
            title: "85 inch Oled Television",
            price: "₦ 63,500"
        },
        {
            photo: "/images/tv3D.png",
            title: "85 inch Oled Television",
            price: "₦ 63,500"
        },
        {
            photo: "/images/iphone.png",
            title: "85 inch Oled Television",
            price: "₦ 63,500"
        },
        {
            photo: "/images/tv3D.png",
            title: "85 inch Oled Television",
            price: "₦ 63,500"
        },
        {
            photo: "/images/iphone.png",
            title: "85 inch Oled Television",
            price: "₦ 63,500"
        },
        {
            photo: "/images/tv3D.png",
            title: "85 inch Oled Television",
            price: "₦ 63,500"
        },
        {
            photo: "/images/headset.png",
            title: "85 inch Oled Television",
            price: "₦ 63,500"
        },
        {
            photo: "/images/shoe.png",
            title: "85 inch Oled Television",
            price: "₦ 63,500"
        },
        {
            photo: "/images/tv3D.png",
            title: "85 inch Oled Television",
            price: "₦ 63,500"
        },
        {
            photo: "/images/iphone.png",
            title: "85 inch Oled Television",
            price: "₦ 63,500"
        }
    ]
    return (
        <>
            <div className="flex flex-col gap-5">
                <div className="flex w-full flex-wrap lg:gap-x-10 md:gap-x-10 gap-x-3 gap-y-14 bg-white p-3 shadow-sm">
                    {productsArr.slice(0, 12).map((product, index) => (
                        <div className="flex flex-col gap-4" key={index}>
                            <div className="p-4 flex justify-center bg-kuduGrayPeach">
                                <Image src={product.photo} width={130} height={130} alt={product.title} />
                            </div>
                            <div className="flex flex-col gap-3">
                                <p className="text-xs font-semibold">
                                    {product.title}
                                </p>
                                <p className="text-sm font-semibold">
                                    {product.price}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex w-full gap-8">
                    <div className="bg-kuduDarkBlue md:w-1/2 flex w-full py-2 px-4 lg:rounded-lg md:rounded-lg">
                        <div className="flex flex-grow flex-col gap-2 py-3">
                            <h2 className="md:text-2xl text-base font-semibold text-white">Boost Leads for Your Business</h2>
                            <p className="text-white text-sm mb-4">Place an advert on Kudu</p>
                            <button className="bg-white shadow-sm flex gap-2 text-kuduDarkBlue justify-center uppercase font-semibold w-full px-4 py-3">Shop Tech
                                <span className="flex flex-col justify-center mt-[7px]">
                                    <svg width="26" height="13" viewBox="0 0 26 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M26 6.5L16 0.726497V12.2735L26 6.5ZM0 7.5H17V5.5H0V7.5Z" fill="#192D4C" />
                                    </svg>
                                </span>
                            </button>
                        </div>
                        <div className="md:flex hidden">
                            <Image src={'/images/user_phone.png'} width={250} height={50} alt="user phone" />
                        </div>
                        <div className="flex md:hidden">
                            <Image src={'/images/user_phone.png'} width={250} height={30} alt="user phone" />
                        </div>
                    </div>

                    <div className="bg-kuduOrange md:w-1/2 lg:flex md:flex hidden w-full py-2 px-4 lg:rounded-lg md:rounded-lg">
                        <div className="flex flex-grow flex-col gap-2 py-3">
                            <h2 className="md:text-2xl text-base font-semibold text-white">Hisense Smart
                                60” LED Television</h2>
                            <button className="bg-white shadow-sm flex gap-2 text-kuduDarkBlue font-semibold text-xs rounded-full px-3 w-1/2 py-3">
                                Starting
                                <br/>
                                From
                                <b className="mt-2">₦285,000</b>
                            </button>
                        </div>
                        <div className="md:flex hidden">
                            <Image src={'/images/televison_frame.png'} width={210} height={30} alt="user phone" />
                        </div>
                    </div>
                </div>

                <div className="flex w-full flex-wrap lg:gap-x-10 md:gap-x-10 gap-x-3 gap-y-14 bg-white p-3 shadow-sm">
                    {productsArr.slice(12, 18).map((product, index) => (
                        <div className="flex flex-col gap-4" key={index}>
                            <div className="p-4 flex justify-center bg-kuduGrayPeach">
                                <Image src={product.photo} width={130} height={130} alt={product.title} />
                            </div>
                            <div className="flex flex-col gap-3">
                                <p className="text-xs font-semibold">
                                    {product.title}
                                </p>
                                <p className="text-sm font-semibold">
                                    {product.price}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}