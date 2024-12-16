"use client";

import Image from "next/legacy/image";
import SearchInput from "../../components/SearchInput";


const users = [
    {
        name: "Andrea Tomi",
        product: "Football Boots",
        company: "JPH Footwears",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed orci sed ante.",
        image: "/images/profile.jpg", // Replace with actual image URLs
    },
    {
        name: "Fuad Samuel",
        product: "Pine Wear T-Shirt",
        company: "Pine Wears",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed orci sed ante.",
        image: "/images/profile_2.png",
    },
    {
        name: "Tunmise Andrew",
        product: "Barakat Perfume",
        company: "Elegant Scents",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed orci sed ante.",
        image: "/images/profile.jpg",
    },
    {
        name: "Jessica Obi",
        product: "Plain Trousers (Black)",
        company: "Jessy Fashion",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed orci sed ante.",
        image: "/images/profile_2.png",
    },
    {
        name: "Stephanie Majid",
        product: "Diamond Pendant + Necklace",
        company: "Steph Collection",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed orci sed ante.",
        image: "/images/profile.jpg",
    },
    {
        name: "Joshua Bamidele",
        product: "Josh Tees",
        company: "Josh Tees",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed orci sed ante.",
        image: "/images/profile.jpg",
    },
];

const UserCard = ({ user }) => {
    return (
        <div className="flex items-start gap-4 py-1">
            <Image
                src={user.image}
                alt={user.name}
                width={50}
                height={50}
                className="w-10 h-10 rounded-full"
            />
            <div className="flex flex-col gap-1">
                <div className="flex gap-3">
                    <h3 className="">{user.name}</h3>
                    <span className="bg-kuduOrange text-white px-2 py-1 rounded-md text-xs font-medium">
                        {user.company}
                    </span>
                </div>
                <p className="text-sm md:flex hidden font-semibold">{user.product}</p>
                <p className="text-sm md:flex hidden">{user.description}</p>
            </div>
        </div>
    );
};


export default function ChatSideBar() {
    return (
        <>
            <div className="md:w-[32%] w-full flex flex-col gap-2 mt-[1px] relative overflow-auto">
                {/** Search Bar */}
                <div className="w-full flex px-10 py-5 md:relative fixed">
                    <SearchInput />
                </div>

                <div className="w-full flex flex-row md:flex-col h-full px-5 md:mt-0 mt-24 mb-4 md:mb-0 md:gap-8 gap-20">
                    {users.map((user, index) => (
                        <UserCard key={index} user={user} />
                    ))}
                </div>
            </div>
        </>
    )
}