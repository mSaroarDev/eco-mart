import CategoryList from "./CategorieList";

export default function CategoryListAll(){
    return (
      <>
        <div className="bg-white w-full max-w-[240px] shadow-md h-fit hidden lg:block">
                        <ul className="w-full">
                            <li><CategoryList /></li>
                            <li><CategoryList /></li>
                            <li><CategoryList /></li>
                            <li><CategoryList /></li>
                            <li><CategoryList /></li>
                            <li><CategoryList /></li>
                            <li><CategoryList /></li>
                            <li><CategoryList /></li>
                            <li><CategoryList /></li>
                            <li><CategoryList /></li>
                            <li><CategoryList /></li>
                        </ul>
                    </div>
      </>
    )
}