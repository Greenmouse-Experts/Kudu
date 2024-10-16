import Input from '@/components/Input';
import Image from 'next/image';
import Link from 'next/link';

export default function Login() {
    return (
        <div className="w-full h-full flex">
            <div className='lg:w-1/2 md:w-1/2 w-full flex lg:h-screen md:h-screen h-full px-10 flex-col justify-center' style={{ backgroundColor: 'rgba(241, 241, 242, 1)' }}>
                <div className='py-10 lg:px-20 md:px-20 flex flex-col gap-4'>
                    <p className="text-3xl font-bold mb-6 text-gray-800">Sign In</p>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">
                            Email address
                        </label>
                        <Input placeholder="Your email address" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2" htmlFor="password">
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
                        className="w-full py-4 px-4 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-[500] transition-colors"
                    >
                        Sign In &rarr;
                    </button>
                </div>

                <div className='flex justify-center'>
                    <div className='flex flex-col gap-2'>
                        <p className="text-center" style={{ color: 'rgba(141, 141, 141, 1)' }}>
                            Don’t have an account?{' '}
                        </p>
                        <p className="text-center">
                            <Link href={'/sign-up'} className="text-kuduOrange">
                                Sign Up &rarr;
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
