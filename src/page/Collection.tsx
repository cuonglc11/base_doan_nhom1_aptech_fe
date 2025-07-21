import { ShopContext } from "../components/context/ShopContext";
import { categories, dataselect, typeProduct } from "@components/data";
import type { productProp } from "@components/type";
import { ProductItem, Title } from "@components/ui";
import React, { useContext, useEffect, useState } from "react";

function Collection() {
  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(true);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState<string[]>([]);
  const [subCategory, setSubCategory] = useState<string[]>([]);
  const toggleCategory = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (category.includes(value)) {
      setCategory((prev) => prev.filter((item) => item !== value));
    } else {
      setCategory((prev) => [...prev, value]);
    }
  };
  const toggleSubCategory = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (subCategory.includes(value)) {
      setSubCategory((prev) => prev.filter((item) => item !== value));
    } else {
      setSubCategory((prev) => [...prev, value]);
    }
  };
  const applyFilter = () => {
    let productCopy = products.slice();
    if (category.length > 0) {
      productCopy = productCopy.filter((item: productProp) =>
        category.includes(item.category)
      );
    }
      if (subCategory.length > 0) {
        productCopy = productCopy.filter((item: productProp) =>
          subCategory.includes(item.subCategory)
        );
      }
      if (showSearch && search){
          productCopy = productCopy.filter((item : productProp) => item.name.toLowerCase().includes(search.toLowerCase()));
      } 
      setFilterProducts(productCopy);
  };
  useEffect(() => {
    applyFilter();
  }, [category, subCategory , search , showSearch]);

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      <div className="min-w-60">
        <p
          onClick={() => setShowFilter(!showFilter)}
          className="my-2 text-xl flex items-center cursor-pointer gap-2"
        >
          FILTERS
        </p>
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showFilter ? "" : "hidden"
          }`}
        >
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            {categories.map((item, key) => (
              <p key={key} className="flex gap-2">
                <input
                  type="checkbox"
                  className="w-3"
                  onChange={toggleCategory}
                  value={item.value}
                />{" "}
                {item.title}
              </p>
            ))}
          </div>
        </div>
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showFilter ? "" : "hidden"
          }`}
        >
          <p className="mb-3 text-sm font-medium">TYPES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            {typeProduct.map((item, key) => (
              <p key={key} className="flex gap-2">
                <input
                  type="checkbox"
                  className="w-3"
                  onChange={toggleSubCategory}
                  value={item.value}
                />{" "}
                {item.title}
              </p>
            ))}
          </div>
        </div>
      </div>
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1="ALL" text2="COLLECTIONS" />
          <select className="border-2 border-gray-300 text-sm px-2">
            {dataselect.map((item, key) => (
              <option key={key} value={item.value}>
                {item.title}
              </option>
            ))}
          </select>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {filterProducts.map((item: productProp, index) => (
            <ProductItem
              key={index}
              id={item._id}
              name={item.name}
              image={item.image}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Collection;
