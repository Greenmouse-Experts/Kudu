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
                        <div className="flex flex-col gap-4">
                            <div className="flex justify-center relative md:h-[200px] h-[150px]">
                                <Image src={product.photo} width={650} height={650} className="object-cover" alt={product.title} />
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
                                <span className="flex gap-2">
                                    <p className="font-semibold text-xs"> Lot </p>
                                    <p className="text-kuduOrange text-xs font-semibold">#  65614089</p>
                                </span>
                                <span className="flex gap-2 font-semibold">
                                    <p className="text-xs">Current Bid:</p>
                                    <p className="text-xs font-semibold text-kuduGreen">
                                        {product.price}
                                    </p>
                                </span>
                                <span className="flex gap-2 font-semibold">
                                    <p className="text-xs">Location:</p>
                                    <p className="text-xs font-semibold text-kuduGreen">
                                        Ikeja
                                    </p>
                                </span>
                                <Button className="w-full py-2 px-4 flex justify-center gap-2 bg-kuduOrange text-white rounded-lg font-[500] transition-colors">
                                    <Link href={'/auction/product/id'} key={index}>
                                        <span className="text-sm font-[500]">View Details</span>
                                    </Link>
                                </Button>
                                <div className="flex mt-1 gap-3">
                                    <div className="flex">
                                        <svg width="19" height="20" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.9987 13.1976C10.9371 13.1257 10.8607 13.068 10.7747 13.0284C10.6887 12.9888 10.5951 12.9684 10.5004 12.9684C10.4057 12.9684 10.3122 12.9888 10.2261 13.0284C10.1401 13.068 10.0637 13.1257 10.0021 13.1976L6.06457 17.7914C5.98282 17.8866 5.9301 18.0033 5.91268 18.1277C5.89525 18.252 5.91385 18.3787 5.96626 18.4928C6.01868 18.6068 6.10271 18.7035 6.20839 18.7712C6.31407 18.839 6.43697 18.875 6.5625 18.875H14.4375C14.563 18.875 14.6859 18.839 14.7916 18.7712C14.8973 18.7035 14.9813 18.6068 15.0337 18.4928C15.0862 18.3787 15.1047 18.252 15.0873 18.1277C15.0699 18.0033 15.0172 17.8866 14.9354 17.7914L10.9987 13.1976ZM7.98902 17.5625L10.5 14.6332L13.011 17.5625H7.98902ZM19.0312 5.75V14.9375C19.0312 15.4596 18.8238 15.9604 18.4546 16.3296C18.0854 16.6988 17.5846 16.9062 17.0625 16.9062H16.4062C16.2322 16.9062 16.0653 16.8371 15.9422 16.714C15.8191 16.591 15.75 16.424 15.75 16.25C15.75 16.076 15.8191 15.909 15.9422 15.786C16.0653 15.6629 16.2322 15.5938 16.4062 15.5938H17.0625C17.2365 15.5938 17.4035 15.5246 17.5265 15.4015C17.6496 15.2785 17.7188 15.1115 17.7188 14.9375V5.75C17.7188 5.57595 17.6496 5.40903 17.5265 5.28596C17.4035 5.16289 17.2365 5.09375 17.0625 5.09375H3.9375C3.76345 5.09375 3.59653 5.16289 3.47346 5.28596C3.35039 5.40903 3.28125 5.57595 3.28125 5.75V14.9375C3.28125 15.1115 3.35039 15.2785 3.47346 15.4015C3.59653 15.5246 3.76345 15.5938 3.9375 15.5938H4.59375C4.7678 15.5938 4.93472 15.6629 5.05779 15.786C5.18086 15.909 5.25 16.076 5.25 16.25C5.25 16.424 5.18086 16.591 5.05779 16.714C4.93472 16.8371 4.7678 16.9062 4.59375 16.9062H3.9375C3.41536 16.9062 2.9146 16.6988 2.54538 16.3296C2.17617 15.9604 1.96875 15.4596 1.96875 14.9375V5.75C1.96875 5.22786 2.17617 4.7271 2.54538 4.35788C2.9146 3.98867 3.41536 3.78125 3.9375 3.78125H17.0625C17.5846 3.78125 18.0854 3.98867 18.4546 4.35788C18.8238 4.7271 19.0312 5.22786 19.0312 5.75Z" fill="#FF6F22" />
                                        </svg>
                                    </div>
                                    <div className="flex flex-col justify-center">
                                        <p className="text-kuduOrange text-xs font-[500]">Monitor</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}