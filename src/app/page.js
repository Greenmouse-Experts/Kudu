import Header from "@/components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="w-full flex flex-col">
        <Header />

        <div className="relative w-full lg:min-h-[500px] h-[200px] lg:py-10 md:py-10 py-4 bg-black">
          <Image
            src="/images/shoppingBag.png"
            alt="Background image"
            layout="fill"
            objectFit="cover"
            className="opacity-70"
          />

          {/* Overlay */}
          <div className="absolute inset-0 flex flex-col items-center gap-6 justify-center px-4">
            {/* Heading */}
            <p className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold lg:flex md:flex hidden mb-4 md:mb-6 text-center">
              Search Any Item, Anytime!
            </p>

            {/* Search Bar */}
            <div className="flex w-full sm:w-10/12 md:w-8/12 lg:w-6/12 relative justify-center">
              <span className="absolute lg:block md:block hidden" style={{ top: '-85%', right: '-15%' }}>
                <Image
                  src="/images/kudu-circle.gif"
                  alt="Animated gif"
                  width={300} // Specify width and height explicitly
                  height={300}
                  unoptimized
                />
              </span>
              <div className="flex w-full flex-col gap-5 z-50">
                <div className="flex items-center bg-white rounded-lg overflow-hidden shadow-lg w-full">
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-lg md:px-6 md:py-3 outline-none text-[13px] md:text-lg text-gray-700"
                    placeholder="Find anything on Kudu..."
                    style={{ fontSize: '13px' }}
                  />
                </div>
                <div className="flex justify-center w-full">
                  <button className="bg-orange-500 text-white px-4 py-2 lg:w-1/5 md:w-1/5 w-full md:px-6 md:py-3 rounded-md hover:bg-orange-600 transition duration-300">
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}
