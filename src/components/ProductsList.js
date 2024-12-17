"use client";

import Badge from "@/components/Badge";
import Image from "next/legacy/image";
import Link from "next/link";

export default function ProductListing({ productsArr }) {
    return (
        <div className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-x-2 lg:gap-y-14 gap-y-8 bg-white p-3 shadow-sm">
            {productsArr.map((product, index) => (
                <Link href={'/product/id'} key={`${index}0`}>
                    <div className="flex flex-col gap-4">
                        <div className="flex justify-center relative md:h-[200px] h-[150px]">
                            <Image src={product.photo} width={650} height={650} className="object-cover" alt={product.title} />
                            <span className="absolute top-2 left-1 w-[24px] h-[24px] p-[6px] flex justify-center rounded-full bg-kuduLightBlue">
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
    )
}