import CategoryList from "./CategorieList";

export default function CategoryListAllMobile(){
    return (
      <>
        <div className="bg-white w-full max-w-[500px] shadow-md h-full">
                        <ul className="w-full">
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