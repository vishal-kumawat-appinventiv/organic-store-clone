const BrandsDisplay = () => {
  const BrandsLogo = [
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

  return (
    <>
      <div className="bg-[#faf9f6] py-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-evenly">
          <div>
            <h4 className="font-bold">Featured Brands:</h4>
          </div>
          {BrandsLogo.map((b, idx) => {
            return (
              <div key={idx}>
                <img src={b.img} alt="brand-logo" className="w-full h-full" />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default BrandsDisplay;
