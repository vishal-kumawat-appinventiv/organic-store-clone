import { Menu, ShoppingBag, User } from "lucide-react";

const Navbar = () => {
  const leftNavbarLinks = [
    {
      name: "Everything",
      href: "/shop",
    },
    {
      name: "Groceries",
      href: "/groceries",
    },
    {
      name: "Juice",
      href: "/juice",
    },
  ];

  const rightNavbarLinks = [
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ];

  const logo =
    "https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/06/organic-store-logo5.svg";

  return (
    <>
      <nav className="p-4 px-8 bg-white flex items-center justify-between w-full">
        <div className="flex items-center">
          <img src={logo} alt="nav-logo" width={145} />

          <ul className="hidden lg:flex gap-11 ml-8">
            {leftNavbarLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="text-gray-800">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <ul className="hidden lg:flex gap-11">
          {rightNavbarLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href} className="text-gray-800">
                {link.name}
              </a>
            </li>
          ))}
          <div className="flex items-center gap-4">
            <p className="text-[#8bc34a] font-bold">£225.00</p>
            <div>
              <ShoppingBag size={18} color="#8bc34a" />
            </div>
            <div>
              <User size={22} color="#000000" />
            </div>
          </div>
        </ul>
        <div className="flex items-center gap-3 lg:hidden">
          <p className="text-[#8bc34a] font-bold">£225.00</p>
          <div>
            <ShoppingBag size={18} color="#8bc34a" />
          </div>
          <div>
            <Menu color="#ffffff" className="bg-[#8bc34a]" />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
