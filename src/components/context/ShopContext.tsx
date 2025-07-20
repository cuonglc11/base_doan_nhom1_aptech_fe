import { createContext, useState } from "react";
import { products } from "@assets/assets";
export const ShopContext = createContext<any>(null);
const ShopContextProvider = (props: any) => {
  const currency = "$";
  const delivery_free = 10;
  const [search, setSearch] = useState<string>("");
  const [showSearch, setShowSearch] = useState<boolean>(true);
  const value = {
    products,
    currency,
    delivery_free,
    search,
    setSearch,
    showSearch,
    setShowSearch,
  };
  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};
export default ShopContextProvider;
