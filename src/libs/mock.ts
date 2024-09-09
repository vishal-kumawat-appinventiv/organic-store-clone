import { NotebookTabs, PiggyBank, Recycle, Truck } from "lucide-react";
import HomePage from "../screens/HomePage";
import ProductScreen from "../screens/ProductScreen";
import CategoryScreen from "../screens/CategoryScreen";
import AboutScreen from "../screens/AboutScreen";
import Contact from "../screens/Contact";
import NotFound from "../screens/NotFound";

export const DummyProducts = [
  {
    id: 1,
    img: "https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/coffee-asorted.jpg",
    category: "Groceries",
    name: "Assorted Coffee",
    desc: "Neque porro quisquam est, qui dolore ipsum quia dolor sit amet, consectetur adipisci velit, sed quia non incidunt lores ta porro ame. numquam eius modi tempora incidunt lores ta porro ame.",
    rating: 0,
    price: 35.0,
    sale: false,
    bestSelling: true,
    trending: true,
  },
  {
    id: 2,
    img: "https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/sanitizer.jpg",
    category: "Groceries",
    name: "Hand Sanitizer",
    desc: "Neque porro quisquam est, qui dolore ipsum quia dolor sit amet, consectetur adipisci velit, sed quia non incidunt lores ta porro ame. numquam eius modi tempora incidunt lores ta porro ame.",
    rating: 0,
    price: 15.0,
    sale: false,
    bestSelling: true,
    trending: true,
  },
  {
    id: 3,
    img: "https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/red-chillies.jpg",
    category: "Groceries",
    name: "Handpicked Red Chillies",
    desc: "Neque porro quisquam est, qui dolore ipsum quia dolor sit amet, consectetur adipisci velit, sed quia non incidunt lores ta porro ame. numquam eius modi tempora incidunt lores ta porro ame.",
    rating: 0,
    price: 19.0,
    sale: false,
    bestSelling: true,
    trending: true,
  },
  {
    id: 4,
    img: "https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/edible-oil.jpg",
    category: "Groceries",
    name: "Natural Extracted Edible Oil",
    desc: "Neque porro quisquam est, qui dolore ipsum quia dolor sit amet, consectetur adipisci velit, sed quia non incidunt lores ta porro ame. numquam eius modi tempora incidunt lores ta porro ame.",
    rating: 0,
    price: 25.0,
    sale: true,
    bestSelling: true,
    trending: false,
  },
  {
    id: 5,
    img: "https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/orage-juice-kariz.jpg",
    category: "Juice",
    name: "Fresh Orange Juice",
    desc: "Neque porro quisquam est, qui dolore ipsum quia dolor sit amet, consectetur adipisci velit, sed quia non incidunt lores ta porro ame. numquam eius modi tempora incidunt lores ta porro ame.",
    rating: 0,
    price: 18.0,
    sale: false,
    bestSelling: false,
    trending: true,
  },
  {
    id: 6,
    img: "https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/cashew-butter-500.jpg",
    category: "Groceries",
    name: "Cashew Butter",
    desc: "Neque porro quisquam est, qui dolore ipsum quia dolor sit amet, consectetur adipisci velit, sed quia non incidunt lores ta porro ame. numquam eius modi tempora incidunt lores ta porro ame.",
    rating: 0,
    price: 25.0,
    sale: true,
    bestSelling: false,
    trending: false,
  },
];

export const BrandsLogo = [
  {
    img: "https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2021/03/logo-4.svg",
  },
  {
    img: "https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2021/03/logo-5.svg",
  },
  {
    img: "https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2021/03/logo-2.svg",
  },
  {
    img: "https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2021/03/logo-3.svg",
  },
  {
    img: "https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2021/03/logo-1.svg",
  },
];

export const quickLinks = [
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

export const siteLinks = [
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

export const moreLinks = [
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

export const btnImgs = [
  {
    img: "https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/06/play-store.png",
  },
  {
    img: "https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/06/app-store.png",
  },
];

export const FruitsCardProducts = [
  {
    name: "Farm Fresh Fruits",
    desc: "Ut sollicitudin quam vel purus tempus, vel eleifend felis varius.",
    img: "https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/06/product11-free-img.jpg",
  },
  {
    name: "Fresh Vegetables",
    img: "https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/06/product13-free-img.jpg",
    desc: "Aliquam porta justo nibh, id laoreet sapien sodales vitae justo.",
  },
  {
    name: "Organic Legume",
    img: "https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/06/product17-free-img.jpg",
    desc: "Phasellus sed urna mattis, viverra libero sed, aliquam est.",
  },
];

export const HeroCardsData = [
  {
    topic: "Free Shipping",
    desc: "Above $5 Only",
    icon: Truck,
  },
  {
    topic: "Certified Organic",
    desc: "100% Guarantee",
    icon: NotebookTabs,
  },
  {
    topic: "Huge Savings",
    desc: "At Lowest Price",
    icon: PiggyBank,
  },
  {
    topic: "Easy Returns",
    desc: "No Questions Asked",
    icon: Recycle,
  },
];

export const leftNavbarLinks = [
  { name: "Everything", href: "/category/shop" },
  { name: "Groceries", href: "/category/groceries" },
  { name: "Juice", href: "/category/juice" },
];

export const rightNavbarLinks = [
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export const routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/about",
    component: AboutScreen,
  },
  {
    path: "/contact",
    component: Contact,
  },
  {
    path: "/product/:prodName",
    component: ProductScreen,
  },
  {
    path: "/category/:categoryType",
    component: CategoryScreen,
  },
  {
    path: "*",
    component: NotFound,
  },
];

export const leafDivider =
  "https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2021/03/basil-leaf.png";

export const leafImg =
  "https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/07/logo-leaf-new.png";

export const mainLogo =
  "https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/07/organic-store-white-logo.png";

export const heroImage =
  "https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2021/03/organic-products-hero.png";

export const heroBottomLeaf =
  "https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/06/leaves-free-img.png";
