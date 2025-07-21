import { useContext, useState } from "react";
import { assets } from "@assets/assets";
import { Link } from "@tanstack/react-router";
import { constants } from "@components/constant";
import { listRouter } from "@components/data";
import { ShopContext } from "@components/context/ShopContext";
function Navbar() {
  const [visible, setVisible] = useState(false);
  const { setShowSearch } = useContext(ShopContext);
  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <Link to={constants.home}>
        <img src={assets.logo} className="w-36" />
      </Link>
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        {listRouter.map((item, index) => (
          <Link
            key={index}
            to={item.link}
            className="flex flex-col items-center gap-1"
          >
            <p>{item.title}</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </Link>
        ))}
      </ul>
      <div className="flex items-center gap-6">
        <img
          onClick={() => setShowSearch(true)}
          src={assets.search_icon}
          className="w-5 cursor-pointer"
        />
        <div className="group relative">
          <img className="w-5 cursor-pointer" src={assets.profile_icon} />
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            <div className="flex flex-col gap-2  w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
              <p className="cursor-pointer hover:text-black">
                {constants.MyProfile}
              </p>
              <p className="cursor-pointer hover:text-black">
                {constants.Orders}
              </p>
              <p className="cursor-pointer hover:text-black">
                {constants.Login}
              </p>
            </div>
          </div>
        </div>
        <Link to={constants.cart}>
          <img src={assets.cart_icon} className="w-5 min-w-5" alt="" />
        </Link>
        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          className="w-5 cursor-pointer sm:hidden"
        />
      </div>
      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${
          visible ? "w-full" : "w-0"
        } `}
      >
        <div className="flex flex-col text-gray-600">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-3 cursor-pointer"
          >
            <img className="h-4 rotate-180" src={assets.dropdown_icon} />
            <p>{constants.Back}</p>
          </div>
          {listRouter.map((item, index) => (
            <Link
              key={index}
              onClick={() => setVisible(false)}
              className="py-2 pl-6 border"
              to={item.link}
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
