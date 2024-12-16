"use client";

import Badge from "@/components/Badge";
import Button from "@/components/Button";
import Image from "next/legacy/image";
import Link from "next/link";

export default function ProductsSection() {
    const productsArr = [
        {
            photo: "/images/car_product.jpg",
            title: "85 inch Oled Television",
            price: "₦ 63,500",
            status: "Used",
        },
        {
            photo: "/images/car_2.jpg",
            title: "85 inch Oled Television",
            price: "₦ 63,500",
            status: "Used"
        },
        {
            photo: "/images/car_product.jpg",
            title: "85 inch Oled Television",
            price: "₦ 63,500",
            status: "Used"
        },
        {
            photo: "/images/toyota.png",
            title: "85 inch Oled Television",
            price: "₦ 63,500",
            status: "Used"
        },
        {
            photo: "/images/car_2.jpg",
            title: "85 inch Oled Television",
            price: "₦ 63,500",
            status: "Used"
        },
        {
            photo: "/images/car_1.png",
            title: "85 inch Oled Television",
            price: "₦ 63,500",
            status: "Used",
        },
        {
            photo: "/images/car_2.jpg",
            title: "85 inch Oled Television",
            price: "₦ 63,500",
            status: "Used"
        },
    ]
    return (
        <>
            <div className="flex flex-col gap-5 w-full">
                <div className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-3 gap-y-14 bg-white p-3 shadow-sm">
                    {productsArr.slice(0, 5).map((product, index) => (
                        <Link href={'/product/id'} key={index}>
                            <div className="flex flex-col gap-4">
                                <div className="flex justify-center relative h-[200px]">
                                    <Image src={product.photo} width={400} height={400} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt={product.title} />
                                    <span className="absolute top-2 left-1 w-[24px] h-[24px] p-[6px] flex justify-center rounded-full bg-kuduLightBlue">
                                        <Image src={'/images/tag.svg'} alt="tag" width={13} height={13} />
                                    </span>
                                    <span className="absolute top-2 right-1">
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