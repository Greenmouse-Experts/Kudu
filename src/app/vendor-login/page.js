import Footer from "@/components/Footer";
import Input from "@/components/Input";
import PageHeader from "@/components/PageHeader";
import Link from "next/link";

export default function VendorLogin() {
    return (
        <>
            <div className="w-full flex flex-col">
                <PageHeader />
                <div className="w-full flex flex-col xl:px-80 lg:px-36 md:px-4 px-5 py-3 lg:pt-24 md:pt-20 md:pb-20 lg:gap-10 md:gap-8 gap-5 bg-kuduLightBlue h-full">

                    <div className="w-full flex flex-col gap-2 md:mt-10 mt-20">
                        <div className="w-full flex justify-center">
                            <p className="lg:text-4xl md:text-lg text-xl font-[500]">
                                Vendor Login
                            </p>
                        </div>

                        <div className="flex lg:flex-row md:flex-row flex-col gap-x-20 gap-y-5 w-full">

                            <div className="md:w-1/2 w-full flex flex-col py-4 px-2">
                                    <div className="flex flex-col pt-10 gap-1">
                                        <p className="md:text-2xl text-lg text-gray-800 font-[500]">Registered Vendors</p>
                                        <p className="text-sm text-kuduGray">If you have an account, sign in with your email address.</p>
                                </div>
                                <div className='py-8 flex flex-col gap-4'>
                                    <div className="mb-4">
                                        <label className="block text-sm font-semibold mb-2" htmlFor="email">
                                            Email address
                                        </label>
                                        <Input placeholder="Your email address" />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-sm font-semibold mb-2" htmlFor="password">
                                            Password
                                        </label>
                                        <Input appendIcon="eye-password.png" type="password" placeholder="Password" />
                                    </div>
                                    <div className="flex justify-between items-center mb-4">
                                        <a href="#" className="text-sm text-blue-500 hover:underline">
                                            Forgot password?
                                        </a>
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full py-4 px-4 flex justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-[500] transition-colors"
                                    >
                                        <span className='flex text-sm'>
                                            Sign In
                                        </span>
                                        <span className='flex mt-1'>
                                            <svg width="22" height="12" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M22 6L12 0.226497V11.7735L22 6ZM0 7H13V5H0V7Z" fill="white" />
                                            </svg>
                                        </span>
                                    </button>
                                </div>
                                <div className='flex justify-center'>
                                    <div className='flex flex-col gap-3'>
                                        <p className="text-center text-sm" style={{ color: 'rgba(141, 141, 141, 1)' }}>
                                            Don’t have an account?{' '}
                                        </p>
                                        <p className="text-center">
                                            <Link href={'/sign-up'} className="text-kuduOrange text-sm flex justify-center gap-2">
                                                <span className='flex text-sm font-[500]'>
                                                    Sign Up
                                                </span>
                                                <span className='flex mt-1'>
                                                    <svg width="22" height="12" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M22 6L12 0.226497V11.7735L22 6ZM0 7H13V5H0V7Z" fill="rgba(255, 111, 34, 1)" />
                                                    </svg>
                                                </span>
                                            </Link>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="w-[1px] h-full min-h-[480px] mt-14 md:flex hidden flex-grow border" />

                            <div className="md:w-1/2 w-full flex flex-col md:gap-12 gap-6 py-4 px-2">
                                <div className="flex flex-col pt-10 gap-1">
                                    <p className="md:text-2xl text-lg text-gray-800 font-[500]">Become a Verified Vendor</p>
                                    <p className="text-xs text-kuduGray">
                                        Enjoy all the benefits we have to offer by completing our KYC and signing up to be a verified vendor on Kudu!
                                    </p>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full py-4 px-4 flex justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-[500] transition-colors"
                                >
                                    <span className='flex text-sm'>
                                        Become Verified
                                    </span>
                                    <span className='flex mt-1'>
                                        <svg width="22" height="12" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M22 6L12 0.226497V11.7735L22 6ZM0 7H13V5H0V7Z" fill="white" />
                                        </svg>
                                    </span>
                                </button>
                            </div>

                        </div>
                    </div>

                </div>

                <Footer />

            </div>
        </>
    )
}