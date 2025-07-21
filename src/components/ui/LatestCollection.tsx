import { useContext, useEffect, useState } from "react";
import { ShopContext } from "@components/context/ShopContext";
import { ProductItem, Title } from ".";
import type { productProp } from "@components/type";

function LatestCollection() {
  const { products } = useContext(ShopContext);

  const [latestProducts, setLastestProducts] = useState([]);
  useEffect(() => {
    setLastestProducts(products.slice(0, 10));
  }, []);

  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title text1={"LATEST"} text2={"COLLECTIONS"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm  md:text-base text-gray-600">
          Lorem Ipsum is simply dummy text of the printing anf tyspesetting
          industry. Lorem
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {latestProducts.map((item: productProp, index) => (
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
  );
}

export default LatestCollection;
