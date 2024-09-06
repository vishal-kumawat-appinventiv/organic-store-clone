import { useContext, useState } from "react";
import { Menu, ShoppingBag, User } from "lucide-react";
import { Link } from "react-router-dom";
import Drawer from "./Drawer";
import { MyContext } from "../libs/MyContext";
import { leftNavbarLinks, rightNavbarLinks } from "../libs/mock";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const { cart } = useContext(MyContext);

  const logo =
    "https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/06/organic-store-logo5.svg";

  return (
    <>
      <nav className="p-4 px-8 flex items-center justify-between w-full">
        <div className="flex items-center">
          <Link to={"/"}>
            <img src={logo} alt="nav-logo" width={145} />
          </Link>
          <ul className="hidden lg:flex gap-11 ml-8">
            {leftNavbarLinks.map((link) => (
              <li key={link.name}>
                <Link to={link.href} className="text-gray-800">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <ul className="hidden lg:flex gap-11">
          {rightNavbarLinks.map((link) => (
            <li key={link.name}>
              <Link to={link.href} className="text-gray-800">
                {link.name}
              </Link>
            </li>
          ))}
          <div className="flex items-center gap-4 cursor-pointer">
            <p className="text-[#8bc34a] font-bold">
              £{cart.reduce((acc, item) => acc + item.price * item.quantity, 0)}
            </p>
            <div onClick={() => setDrawerOpen(true)} className="relative">
              <ShoppingBag size={18} color="#8bc34a" />
              <p className="absolute top-[-10px] right-[-12px] rounded-full bg-[#87c34a] px-[6px] text-black text-sm">
                {cart.reduce((total, item) => total + item.quantity, 0)}
              </p>
            </div>
            <div>
              <User size={22} color="#000000" />
            </div>
          </div>
        </ul>
        <div className="flex items-center gap-3 lg:hidden">
          <p className="text-[#8bc34a] font-bold">£225.00</p>
          <div onClick={() => setDrawerOpen(true)}>
            <ShoppingBag size={18} color="#8bc34a" />
          </div>
          <div>
            <Menu color="#ffffff" className="bg-[#8bc34a]" />
          </div>
        </div>
      </nav>

      <Drawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
};

export default Navbar;
