import { useContext, useEffect, useState } from "react";
import { ShopContext } from "@components/context/ShopContext";
import { assets } from "@assets/assets";
import { useLocation } from "@tanstack/react-router";
import { constants } from "@components/constant";

function SearchBar() {
  const { search, setSearch, showSearch, setShowSearch } =
    useContext(ShopContext);
  const local = useLocation();
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (local.pathname.includes(constants.collection)) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [local]);
  return showSearch && visible ? (
    <div className="border-t border-b bg-gray-50 text-center">
      <div className="inline-flex items-center justify-between border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1  outline-none bg-inherit text-sm"
          type="text"
          placeholder="Search"
        />
        <img className="w-4" src={assets.search_icon} />
      </div>
      <img
        onClick={() => setShowSearch(false)}
        className="inline w-3 cursor-pointer"
        src={assets.cross_icon}
      />
    </div>
  ) : null;
}

export default SearchBar;
