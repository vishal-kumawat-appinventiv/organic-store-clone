const AboutScreen = () => {
  const leafImage =
    "https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2021/03/basil-leaf.png";

  return (
    <>
      <div className="relative bg-[#f8f6f3] min-h-[400px] -mt-28 z-[-20]">
        <h1 className="absolute top-1/2 left-1/2 text-2xl lg:text-5xl font-bold transform -translate-x-1/2 -translate-y-1/2">
          About Us
        </h1>
      </div>
      <div className="relative">
        <div className="absolute top-[-30px] left-1/2 transform -translate-x-1/2">
          <img width="150" height="90" src={leafImage} alt="leaf" />
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 p-3 gap-10 py-24">
          <div className="flex flex-col gap-5 my-auto">
            <div>
              <h1 className="text-2xl md:text-4xl font-bold">
                We Are Your Favourite Store.
              </h1>
            </div>
            <div className="mr-5">
              <p>
                Tuas quisquam quo gravida proident harum, aptent ligula anim
                consequuntur, ultrices mauris, nunc voluptates lobortis, varius,
                potenti placeat! Fuga omnis. Cubilia congue. Recusandae. Vero
                penatibus quasi! Nostra tenetur dignissimos ultrices natus
                distinctio ultrices consequuntur numqu.
                <br />
                <br />
                Officiis fuga harum porro et? Similique rhoncus atque! Netus
                blanditiis provident nunc posuere. Rem sequi, commodo, lorem
                tellus elit, hic sem tenetur anim amet quas, malesuada proident
                platea corrupti expedita.
              </p>
            </div>
          </div>
          <div>
            <img
              src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2020/01/banner-01.jpg"
              alt="img"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutScreen;
