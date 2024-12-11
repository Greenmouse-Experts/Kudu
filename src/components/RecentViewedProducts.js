"use client";

import Badge from "@/components/Badge";
import Image from "next/image";
import Link from "next/link";

export default function RecentViewedProducts() {
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
    ]
    return (
        <>
            <div className="flex flex-col gap-5 w-full">
                <div className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-4 gap-y-14 bg-white p-3 shadow-sm">
                    {productsArr.slice(0, 5).map((product, index) => (
                        <Link href={'/product/id'} key={index}>
                            <div className="flex flex-col gap-4">
                                <div className="flex justify-center relative h-[200px]">
                                    <Image src={product.photo} width={200} height={200} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt={product.title} />
                                    <span className="absolute top-1 left-1 p-2 rounded-full bg-kuduLightBlue">
                                        <Image src={'/images/tag.svg'} alt="tag" width={13} height={13} />
                                    </span>
                                    <span className="absolute top-1 right-1">
                                        <Badge bgColor={product.status === 'Brand New' ? 'bg-kuduGreen' : 'bg-kuduRed'} text={product.status}
                                            textColor={'text-white'}
                                        />
                                    </span>
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
                        </Link>
                    ))}
                </div>
            </div>
        </>
    )
}