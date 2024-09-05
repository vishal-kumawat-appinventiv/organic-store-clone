const BestSelling = () => {
  const bestSellingProducts = [
    {
      img: "https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/coffee-asorted-300x300.jpg",
      category: "Groceries",
      name: "Assorted Coffee",
      rating: 0,
      price: 35.0,
      sale: false,
    },
    {
      img: "https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/sanitizer-300x300.jpg",
      category: "Groceries",
      name: "Hand Sanitizer",
      rating: 0,
      price: 15.0,
      sale: false,
    },
    {
      img: "https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/red-chillies-300x300.jpg",
      category: "Groceries",
      name: "Handpicked Red Chillies",
      rating: 0,
      price: 5.0,
      sale: false,
    },
    {
      img: "https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/edible-oil-300x300.jpg",
      category: "Groceries",
      name: "Natural Extracted Edible Oil",
      rating: 0,
      price: 25.0,
      sale: true,
    },
  ];

  const leafImg =
    "https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/07/logo-leaf-new.png";

  return (
    <>
      <div className="my-28 max-w-7xl mx-auto p-3">
        <h1 className="text-center text-4xl font-bold">
          Best Selling Products
        </h1>
        <div className="relative min-h-16 my-3">
          <img
            src={leafImg}
            alt="leaf-img"
            className="absolute top-0 left-1/2 transform -translate-x-1/2"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {bestSellingProducts.map((p, idx) => {
            return (
              <div key={idx} className="relative flex flex-col text-center">
                <div className="w-full h-full">
                  <img src={p.img} alt="img" className="w-full" />
                </div>
                <p className="text-gray-600">{p.category}</p>
                <p className="font-bold">{p.name}</p>
                <div>
                  {Array.from({ length: 5 }, (_, i) => (
                    <span key={i}>☆</span>
                  ))}
                </div>
                <p className="text-sm font-bold">£ {p.price}</p>
                {p.sale && (
                  <div className="absolute bg-[#8cc44b] text-sm rounded-full py-2 px-1 top-[-3px] right-0">
                    <p>Sale!</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default BestSelling;
