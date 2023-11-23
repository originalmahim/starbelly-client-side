const Banner = () => {
          return (
          <div>
          <div className="carousel w-full lg:h-[800px] md:h-[500px] h-[220px]">
            <div
            className="carousel-item relative w-full"
            style={{
            backgroundImage: `url('https://i.ibb.co/mNjLnj7/Screenshot-2023-11-23-212543.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            }}
            >
            <div  className="text-black lg:ml-[1020px] md:ml-6 lg:mt-60 -mt-10 md:mt-20 p-20 lg:p-10 ">
            <h1 className=" lg:font-bold lg:text-7xl md:text-4xl text-xl ">We do not cook, <br /> we create your <br /> emotions!</h1>
            <p className="my-4 text-xl hidden lg:flex">Crafting unforgettable moments to capture the essence of your love story <br /> and curating a unique, cherished experience for you and your guests, <br /> ensuring your big day is a lasting memory filled with love and joy.</p>
            </div>                            
          </div>
            </div>                            
          </div>
          );
};

export default Banner;