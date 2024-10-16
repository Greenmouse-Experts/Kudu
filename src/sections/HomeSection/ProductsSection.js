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
                <div className="flex w-full flex-wrap gap-x-10 gap-y-14 bg-white p-3 shadow-sm">
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
                    <div className="bg-gray-100 text-center py-8 px-4 rounded-lg">
                        <h2 className="text-2xl font-bold mb-4">Boost Leads for Your Business</h2>
                        <p className="text-gray-700 mb-4">Place an advert on Kudu</p>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Shop Tech</button>
                    </div>
                </div>
            </div>
        </>
    )
}