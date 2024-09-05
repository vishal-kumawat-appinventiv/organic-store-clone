import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  const logoImg =
    "https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/07/organic-store-white-logo.png";

  const quickLinks = [
    {
      href: "/about",
      title: "About Us",
    },
    {
      href: "/cart",
      title: "Cart",
    },
    {
      href: "/checkout",
      title: "Checkout",
    },
    {
      href: "/contact",
      title: "Contact",
    },
    {
      href: "/",
      title: "Home",
    },
    {
      href: "/my-account",
      title: "My Account",
    },
    {
      href: "/shop",
      title: "Shop",
    },
  ];

  const siteLinks = [
    {
      href: "/privacy-policy",
      title: "Privacy Policy",
    },
    {
      href: "/shipping-details",
      title: "Shipping Details",
    },
    {
      href: "/offers-coupons",
      title: "Offers & Coupons",
    },
    {
      href: "/terms-conditions",
      title: "Terms & Conditions",
    },
  ];

  const moreLinks = [
    {
      title: "Know More About Us",
      href: "/about",
    },
    {
      title: "Visit Store",
      href: "/shop",
    },
    {
      title: "Let’s Connect",
      href: "/contact",
    },
    {
      title: "Locate Stores",
      href: "/store",
    },
  ];

  const btnImgs = [
    {
      img: "https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/06/play-store.png",
    },
    {
      img: "https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/06/app-store.png",
    },
  ];

  return (
    <>
      <div className="bg-black text-[#aeaeae]">
        <div className="mainGrid max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 py-20 px-3 text-center md:text-left">
          <div className="logoCol">
            <img src={logoImg} alt="img" />
            <p className="mt-10 italic mr-0 md:mr-24 font-bold">
              Maecenas mi justo, interdum at consectetur vel, tristique et arcu.
              Ut quis eros blandit, ultrices diam in, elementum ex. Suspendisse
              quis faucibus urna. Suspendisse pellentesque.
            </p>
          </div>
          <div className="rightCol grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <div>
                <h1 className="text-2xl text-white mb-10">Quick Links</h1>
                <div className="flex flex-col w-full">
                  {quickLinks.map((l, idx) => {
                    return (
                      <a key={idx} href={l.href}>
                        {l.title}
                      </a>
                    );
                  })}
                </div>
              </div>
              <div>
                <h1 className="text-2xl text-white mt-10 mb-2">Site Links</h1>
                <div className="flex flex-col w-full">
                  {siteLinks.map((l, idx) => {
                    return (
                      <a key={idx} href={l.href}>
                        {l.title}
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
            <div>
              <div>
                <h1 className="text-2xl text-white mb-5">
                  Download Our Mobile App
                </h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  aliquam gravida sollicitudin. Praesent porta enim mi, non
                  tincidunt libero interdum sit amet.
                </p>
              </div>
              <div>
                <h1 className="text-2xl text-white mt-10 mb-2">Quick Links</h1>
                <div className="flex flex-col w-full">
                  {moreLinks.map((l, idx) => {
                    return (
                      <a key={idx} href={l.href}>
                        {l.title}
                      </a>
                    );
                  })}
                </div>
              </div>
              <div className="btns flex flex-col items-center lg:flex-row gap-3 w-full mt-4">
                {btnImgs.map((b, idx) => {
                  return <img key={idx} src={b.img} alt="img" width="130" />;
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="border-t-2 border-gray-500">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between py-5">
            <p>Copyright © 2024 | Organic Store</p>
            <div className="flex gap-2">
              <Facebook />
              <Twitter />
              <Instagram />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
