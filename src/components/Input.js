import Image from "next/image";
import React from "react";

export default function Input(props) {
    return (
        <>
            <div className="flex items-center border border-transparent px-3 py-1.5 rounded-[7px]" style={{ backgroundColor: 'rgba(210, 210, 210, 1)' }}>
                {props.icon ?
                    <Image src={`/images/${props.icon}`} width={10} height={10} alt="icon" />
                    :
                    null}

                <input
                    type={props.type}
                    placeholder={`${props.placeholder}`}
                    className="peer w-full h-full bg-transparent font-sans font-normal outline-none focus:outline-none disabled:bg-blue-gray-50 disabled:border-0 disabled:cursor-not-allowed transition-all placeholder:opacity-1 focus:placeholder:opacity-100 text-sm px-3 py-3 rounded-[7px]"
                    style={{ borderColor: 'transparent', border: '0px !important' }}
                />

                {props.appendIcon ?
                    <Image src={`/images/${props.appendIcon}`} width={20} height={20} alt="icon" />
                    :
                    null}
            </div>        </>
    )
}