

const Banner = () => {
  return (
    <div className="relative">
      <div className="carousel w-full lg:h-[800px] md:h-[500px] h-[220px]">
        <div
          className="carousel-item w-full h-full relative flex items-center justify-end"
          style={{
            backgroundImage: `url('https://i.ibb.co/mNjLnj7/Screenshot-2023-11-23-212543.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="text-black text-right p-6">
            <h1 className="lg:font-bold lg:text-7xl md:text-4xl text-2xl mb-4">
              We do not cook, <br /> we create your <br /> emotions!
            </h1>
            <p className="text-xl hidden lg:grid">Crafting unforgettable moments to capture the essence of your love <br /> story and curating a unique, cherished experience for you .</p>

            {/* Responsive Search Field */}
            <div className="mt-8 lg:mt-12">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full py-2 pl-8 pr-4 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500 transition-all duration-300"
                />
                <div className="absolute top-0 left-0 flex items-center h-full pl-2">
                  <i className="fas fa-search text-gray-500"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
