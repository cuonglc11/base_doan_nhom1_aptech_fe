import { useContext } from "react";
import { ShopContext } from "@components/context/ShopContext";
import { Link } from "@tanstack/react-router";
import { constants } from "@components/constant";
import type { ProductPropsItem } from "@components/type";

function ProductItem(product: ProductPropsItem) {
  const { currency } = useContext(ShopContext);
  return (
    <Link
      className="text-gray-700 cursor-pointer"
      to={`${constants.product}/${product.id}`}
    >
      <div className="overflow-hidden">
        <img
          className="hover:scale-110 transition ease-in-out"
          src={product.image[0]}
          alt=""
        />
      </div>
      <p className="pt-3 pb-1 text-sm">{product.name}</p>
      <p className="text-sm font-medium">
        {currency}
        {product.price}
      </p>
    </Link>
  );
}
export default ProductItem;
