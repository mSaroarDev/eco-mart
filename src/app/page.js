import Appnav from "@/components/Appnav";
import Menubar from "@/components/MenuBar";
import BestSellerSection from "@/components/sections/BestSeller";
import FeturedCategoriesSection from "@/components/sections/FeaturedCategories";
import HeroSection from "@/components/sections/Hero";
import Topbar from "@/components/sections/Topbar";

export default function Homepage() {
  return (
    <>
      <Topbar />
      <Appnav />
      <Menubar />
      <HeroSection />
      <FeturedCategoriesSection />
      <BestSellerSection />
    </>
  );
}
