import Input from '@/components/Input';
import Image from 'next/image';

export default function Login() {
    return (
        <div className="w-full h-full flex">
            <div className='lg:w-1/2 md:w-1/2 w-full flex h-screen px-10 flex-col justify-center' style={{ backgroundColor: 'rgba(241, 241, 242, 1)' }}>
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

                <div className='flex justify-center mt-2'>
                    <div className='flex flex-col gap-2'>
                        <p className="text-center" style={{ color: 'rgba(141, 141, 141, 1)' }}>
                            Don’t have an account?{' '}
                        </p>
                        <p className="text-center">
                            <a href="#" className="text-orange-500 hover:underline">
                                Sign Up &rarr;
                            </a>
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-1/2 h-screen bg-cover bg-custom-bg lg:flex md:flex hidden flex-col justify-center relative">
                <div className='w-full flex justify-center'>
                    <div className="w-3/4 h-[500px] p-10 rounded-md border flex flex-col gap-8" style={{ backdropFilter: 'blur(15px)', borderColor: 'rgba(255, 255, 255, 0.35)' }}>
                        <p className='text-sm font-[500] text-white'>Welcome to</p>
                        <Image src={'/images/kudu1.png'} width={80} height={20} alt='kudu-logo' />
                        <p className='text-sm font-[500] text-white'>Join us today and enjoy exclusive deals, personalized shopping, and faster checkout.</p>
                        <div className='w-full flex justify-center'>
                            <Image src={'/images/signIn.png'} width={200} height={20} alt='sign-in' />
                        </div>
                        <p className='text-sm font-[500] text-white'>
                            Sign up now and start discovering amazing products tailored just for you! 🎉
                        </p>
                    </div>
                </div>
            </div>            {/**  <div className="flex w-10/12 max-w-5xl bg-white rounded-lg shadow-lg overflow-hidden">
                {/* Left Side (Sign In Form) 
                <div className="w-1/2 p-8">
                    <h2 className="text-3xl font-bold mb-6 text-gray-800">Sign In</h2>
                    <form>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2" htmlFor="email">
                                Email address
                            </label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Your email address"
                                className="w-full px-4 py-2 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2" htmlFor="password">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                placeholder="Enter password"
                                className="w-full px-4 py-2 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500"
                            />
                        </div>
                        <div className="flex justify-between items-center mb-4">
                            <a href="#" className="text-sm text-blue-500 hover:underline">
                                Forgot password?
                            </a>
                        </div>
                        <button
                            type="submit"
                            className="w-full py-2 px-4 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-semibold transition-colors"
                        >
                            Sign In &rarr;
                        </button>
                    </form>
                    <p className="text-center mt-4">
                        Don’t have an account?{' '}
                        <a href="#" className="text-orange-500 hover:underline">
                            Sign Up &rarr;
                        </a>
                    </p>
                </div>

                {/* Right Side (Image + Text) 
                <div className="w-1/2 bg-cover relative">
                    <div
                        className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-30 text-white p-8 rounded-r-lg"
                        style={{ backdropFilter: 'blur(10px)' }}
                    >
                        <h3 className="text-2xl font-bold mb-4">Welcome to</h3>
                        <h1 className="text-4xl font-extrabold mb-6">Kudu</h1>
                        <p className="text-center text-lg mb-6">
                            Join us today and enjoy exclusive deals, personalized shopping, and faster
                            checkout.
                        </p>
                        <div className="mb-6">
                            <Image
                                src="/images/shopping.png"
                                alt="Shopping"
                                width={150}
                                height={150}
                                className="rounded-lg"
                            />
                        </div>
                        <p className="text-center text-md">
                            Sign up now and start discovering amazing products tailored just for you! 🎉
                        </p>
                    </div>
                    <Image
                        src="/images/background.jpg" // Background image path
                        layout="fill"
                        objectFit="cover"
                        alt="Background"
                        className="rounded-r-lg"
                    />
                </div>
            </div> */}
        </div>
    );
}
