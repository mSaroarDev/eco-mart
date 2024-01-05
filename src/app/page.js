import Appnav from "@/components/Appnav";
import Menubar from "@/components/MenuBar";
import StickyMenu from "@/components/StickyMenu";
import BestSellerSection from "@/components/sections/BestSeller";
import FashionProductsSection from "@/components/sections/FashionProducts";
import FeturedCategoriesSection from "@/components/sections/FeaturedCategories";
import FeaturesSection from "@/components/sections/FeaturesSection";
import Footer from "@/components/sections/Footer";
import HeroSection from "@/components/sections/Hero";
import RecentProductsSection from "@/components/sections/RecentProducts";
import SportsProductsSection from "@/components/sections/SportsProductsSection";
import Topbar from "@/components/sections/Topbar";

export default function Homepage() {
  return (
    <>
      <Topbar />
      <Appnav />
      <Menubar />
      <div className="hidden lg:block">
        <StickyMenu />
      </div>
      <HeroSection />
      <FeturedCategoriesSection />
      <BestSellerSection />
      <FashionProductsSection />
      <RecentProductsSection />
      <SportsProductsSection />
      <FeaturesSection />
      <Footer />
    </>
  );
}
