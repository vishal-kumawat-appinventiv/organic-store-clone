import { Link, useParams } from "react-router-dom";
import { ProductType } from "../libs/types";
import { useEffect, useState } from "react";
import ProductComponent from "../components/ProductComponent";
import { ChevronRight } from "lucide-react";
//@ts-ignore
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import Loading from "../components/Loading";
import Error from "../components/Error";

const CategoryScreen = () => {
  const { categoryType } = useParams();
  const {
    items: products,
    error,
    loading,
  } = useSelector((state: RootState) => state.products);
  const [productCategoryList, setProductCategoryList] = useState<ProductType[]>(
    []
  );
  const [searchProducts, setSearchProducts] = useState<ProductType[]>([]);
  const [filterProducts, setFilterProducts] = useState<ProductType[]>([]);
  const [filterApplied, setFilterApplied] = useState(false);
  const [input, setInput] = useState("");
  const [minValue, setMinValue] = useState(10);
  const [maxValue, setMaxValue] = useState(50);

  useEffect(() => {
    const updatedCategoryList =
      categoryType === "shop"
        ? products
        : products?.filter(
            (ele: ProductType) => ele.category.toLowerCase() === categoryType
          );

    setProductCategoryList(updatedCategoryList || []);
    setSearchProducts([]);
    setFilterProducts([]);
    setFilterApplied(false);
  }, [categoryType, products]);

  const saleProducts = products?.filter(
    (ele: ProductType) => ele?.sale === true
  );

  const handleSliderChange = (values: number[]) => {
    setMinValue(values[0]);
    setMaxValue(values[1]);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSearch = () => {
    if (input === "") {
      setSearchProducts([]);
    } else {
      const searchProds = productCategoryList.filter((ele: ProductType) =>
        ele?.name.toLowerCase().includes(input.toLowerCase())
      );
      setSearchProducts(searchProds);
    }
  };

  const handleFilterProd = () => {
    setSearchProducts([]);
    setFilterApplied(true);
    const prods = productCategoryList.filter(
      (ele: ProductType) => ele?.price >= minValue && ele?.price <= maxValue
    );
    setFilterProducts(prods);
  };

  const handleClearFilter = () => {
    setFilterApplied(false);
    setFilterProducts([]);
  };

  const displayedProducts =
    searchProducts.length > 0
      ? searchProducts
      : filterApplied && filterProducts.length === 0
      ? []
      : filterProducts.length > 0
      ? filterProducts
      : productCategoryList;

  return (
    <>
      {loading ? (
        <Loading />
      ) : error ? (
        <Error error={error as string} />
      ) : (
        <div className="bg-gray-100">
          <div className="lg:max-w-7xl px-10 xl:px-auto md:mx-auto">
            <div className="grid lg:grid-cols-3 py-12">
              <div className="lg:block hidden border-r border-gray-600 border-opacity-25 py-5 px-16">
                <div className="gap-3 flex items-center">
                  <input
                    type="text"
                    placeholder="Search Products..."
                    className="border p-2 max-w-[300px] w-full"
                    value={input}
                    onChange={handleInputChange}
                  />
                  <button
                    onClick={handleSearch}
                    className="p-2 bg-[#6a9739] rounded"
                  >
                    <ChevronRight color="#fff" />
                  </button>
                </div>
                <div>
                  <h3 className="text-[#8ec44e] text-2xl mt-5 font-bold">
                    Filter by Price
                  </h3>
                  <div className="flex items-center gap-2">
                    <p>{minValue}</p>
                    <p className="text-gray-500">to</p>
                    <p>{maxValue}</p>
                  </div>
                  <div className="mt-5">
                    <RangeSlider
                      min={10}
                      max={100}
                      step={1}
                      value={[minValue, maxValue]}
                      onInput={handleSliderChange}
                    />
                  </div>
                  <div className="flex items-center gap-5">
                    <button
                      onClick={handleFilterProd}
                      className="bg-[#6a9739] text-white p-2 mt-5 rounded"
                    >
                      Apply
                    </button>
                    <button
                      onClick={handleClearFilter}
                      className="bg-[#6a9739] text-white p-2 mt-5 rounded"
                    >
                      Clear Filter
                    </button>
                  </div>
                </div>
                <div className="mt-20">
                  {saleProducts?.slice(0, 3)?.map((ele: ProductType) => (
                    <div key={ele?.id} className="mb-8">
                      <ProductComponent data={ele} />
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-span-2 py-5 lg:px-10">
                <div className="text-gray-500">
                  <Link to={"/"}>Home</Link> / {categoryType}
                </div>
                <h3 className="text-[#8ec44e] text-6xl mt-5 font-bold capitalize">
                  {categoryType}
                </h3>
                <div className="flex justify-between mt-10">
                  <div>
                    Showing {displayedProducts.length}{" "}
                    {displayedProducts.length === 1 ? "result" : "results"}
                  </div>
                  <select className="seleect bg-transparent">
                    <option>Default Sort</option>
                    <option>Sort by popularity</option>
                    <option>Sort by price low to high</option>
                    <option>Sort by price high to low</option>
                  </select>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
                  {displayedProducts.length > 0 ? (
                    displayedProducts.map((ele) => (
                      <ProductComponent key={ele?.id} data={ele} />
                    ))
                  ) : (
                    <div className="text-center text-xl text-gray-500 col-span-3">
                      No products found
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CategoryScreen;
