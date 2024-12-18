import Input from '@/components/Input';
import Image from "next/legacy/image";
import Link from 'next/link';

export default function Login() {
    return (
        <div className="w-full h-full flex bg-kuduLightBlue">
            <div className='lg:w-1/2 md:w-1/2 w-full flex lg:h-screen md:h-screen px-10 flex-col justify-center'>
                <div className='py-10 lg:px-20 md:px-20 flex flex-col gap-4'>
                    <p className="text-3xl font-bold mb-6 text-gray-800">Sign In</p>
                    <div className="mb-4">
                        <label className="block text-sm font-semibold mb-2" htmlFor="email">
                            Email address
                        </label>
                        <Input placeholder="Your email address" background="bg-kuduDarkFade border-transparent" class="px-3 placeholder-black py-3" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-semibold mb-2" htmlFor="password">
                            Password
                        </label>
                        <Input appendIcon="eye-password.png" background="bg-kuduDarkFade" class="px-3 placeholder-black py-3" type="password" placeholder="Password" />
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
                        <span className='flex'>
                            Sign In
                        </span>
                        <span className='flex mt-2'>
                            <svg width="22" height="12" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22 6L12 0.226497V11.7735L22 6ZM0 7H13V5H0V7Z" fill="white" />
                            </svg>
                        </span>
                    </button>
                </div>

                <div className='flex justify-center'>
                    <div className='flex flex-col gap-2'>
                        <p className="text-center" style={{ color: 'rgba(141, 141, 141, 1)' }}>
                            Don’t have an account?{' '}
                        </p>
                        <p className="text-center">
                            <Link href={'/sign-up'} className="text-kuduOrange flex justify-center gap-2">
                                <span className='flex font-[500]'>
                                    Sign Up
                                </span>
                                <span className='flex mt-2'>
                                    <svg width="22" height="12" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22 6L12 0.226497V11.7735L22 6ZM0 7H13V5H0V7Z" fill="rgba(255, 111, 34, 1)" />
                                    </svg>
                                </span>
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-1/2 h-screen bg-cover bg-custom-bg lg:flex md:flex hidden flex-col justify-center relative">
                <div className='w-full flex justify-center'>
                    <div className="w-3/4 h-[500px] p-10 rounded-md border flex flex-col gap-8" style={{ backdropFilter: 'blur(15px)', borderColor: 'rgba(255, 255, 255, 0.35)' }}>
                        <p className='text-sm font-[500] text-white'>Welcome to</p>
                        <Link href={'/'}>
                            <Image src={'/images/kudu1.png'} width={80} height={20} alt='kudu-logo' />
                        </Link>
                        <p className='text-sm font-[500] text-white'>Join us today and enjoy exclusive deals, personalized shopping, and faster checkout.</p>
                        <div className='w-full flex justify-center'>
                            <Image src={'/images/signIn.png'} width={200} height={20} alt='sign-in' />
                        </div>
                        <p className='text-sm font-[500] text-white'>
                            Sign up now and start discovering amazing products tailored just for you! 🎉
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
