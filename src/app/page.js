import Header from "@/components/Header";
import DealsSection from "@/sections/HomeSection/DealsSection";
import Footer from "@/components/Footer";
import PhonesBanner from "@/sections/HomeSection/PhonesBanner";
import PostSection from "@/sections/HomeSection/PostSection";
import ProductsSection from "@/sections/HomeSection/ProductsSection";
import SearchSection from "@/sections/HomeSection/SearchSection";
import ProductConditions from "@/sections/HomeSection/ProductConditions";

export default function Home() {
  return (
    <>
      <div className="w-full flex flex-col">
        <Header />
        <SearchSection />
        <div className="w-full flex flex-col lg:pl-44 lg:pr-36 md:px-4 px-5 py-3 lg:gap-10 md:gap-8 gap-5 bg-kuduLightBlue h-full">
          <div className="w-full lg:flex md:flex hidden gap-3 mt-3">
            <DealsSection />
            <PostSection />
          </div>
          <div className="w-full flex mt-4">
            <ProductConditions />
          </div>
          <div className="w-full flex">
            <ProductsSection />
          </div>
          <div className="w-full flex">
            <PhonesBanner />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
