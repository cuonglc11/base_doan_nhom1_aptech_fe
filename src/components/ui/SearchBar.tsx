import { useContext } from "react";
import { ShopContext } from "@components/context/ShopContext";

function SearchBar() {
  const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
  console.log(showSearch);

  return showSearch ? (
        <div>
            
        </div>
  ) : null ;
}

export default SearchBar;
