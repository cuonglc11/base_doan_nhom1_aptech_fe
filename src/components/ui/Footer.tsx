import { assets } from "@assets/assets";
import { listRouterFooter } from "@components/data";
import { Link } from "@tanstack/react-router";

function Footer() {
  return (
    <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
      <div>
        <img src={assets.logo} className="mb-5 w-32" alt="" />
        <p className="w-full md:w-2/3 text-gray-600">
          Lorem Ipsum is simply dummy text of the printing and
        </p>
      </div>
      <div>
        <p className="text-xl font-medium mb-5">COMPANY</p>
        <ul className="flex flex-col gap-1 text-gray-600">
          {listRouterFooter.map((item, index) => (
            <Link to={item.link} key={index}>
              {" "}
              {item.title}
            </Link>
          ))}
        </ul>
      </div>
      <div>
        <p className="text-xl  font-medium mb-5">GET IN TOUCH</p>
        <ul className="flex flex-col gap-1 text-gray-600">
          <li>+1-212-456-7890</li>
          <li>contact@gmail.com</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
