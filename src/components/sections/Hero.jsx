import Link from "next/link";
import CategoryList from "../CategorieList";
import Image from "next/image";
import CategoryListAll from "../CategoryList";

export default function HeroSection(){
    return (
      <>
        <div className="flex h-auto w-full bg-brand/10">
            <div className="w-full max-w-6xl mx-auto">
                <div className="flex gap-0">
                    <CategoryListAll />
                    <div className="w-full grid grid-cols-12 p-14">
                        <div className="hidden lg:block col-span-12 lg:col-span-6">
                            <Image src="/mega-sale.png" height={300} width={300} alt="Shoe" />
                        </div>
                        <div className="col-span-12 lg:col-span-6">
                            <Image src="/shoe.png" height={400} width={400} alt="Shoe" className="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </>
    )
}