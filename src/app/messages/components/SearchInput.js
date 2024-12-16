"use client";

import Image from "next/legacy/image";

export default function SearchInput() {
    return (
        <>
            <div className="flex items-center bg-[rgba(249,249,249,1)] border border-[rgba(212,212,212,1)] rounded-lg overflow-hidden w-full">
                <input
                    type="text"
                    className="md:w-3/4 w-full px-4 py-2 rounded-lg md:px-6 md:py-2 bg-transparent outline-none text-[13px] md:text-lg text-gray-700"
                    placeholder="Search"
                    style={{ fontSize: '13px' }}
                />
                <span className="flex w-1/4 px-5 justify-end">
                    <Image
                        src={'/images/search.png'}
                        width={15}
                        height={15}
                    />
                </span>
            </div>
        </>
    )
}