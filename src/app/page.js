import Header from "@/components/Header";
import CategorySection from "@/sections/HomeSection/CategorySection";
import DealsSection from "@/sections/HomeSection/DealsSection";
import FashionBanner from "@/sections/HomeSection/FashionBanner";
import PopularCategories from "@/sections/HomeSection/PopularCategories";
import PostSection from "@/sections/HomeSection/PostSection";
import ProductsSection from "@/sections/HomeSection/ProductsSection";
import SearchSection from "@/sections/HomeSection/SearchSection";

export default function Home() {
  return (
    <>
      <div className="w-full flex flex-col">
        <Header />
        <SearchSection />
        <div className="w-full flex flex-col lg:px-40 md:px-40 py-3 lg:gap-10 md:gap-10 gap-7 bg-kuduLightBlue h-full">
          <div className="w-full lg:flex md:flex hidden gap-3 mt-3">
            <CategorySection />
            <DealsSection />
            <PostSection />
          </div>
          <div className="w-full flex px-3">
            <PopularCategories />
          </div>
          <div className="w-full flex">
            <FashionBanner />
          </div>
          <div className="w-full flex">
            <ProductsSection />
          </div>
        </div>
      </div>
    </>
  );
}
