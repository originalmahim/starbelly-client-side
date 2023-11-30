
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;