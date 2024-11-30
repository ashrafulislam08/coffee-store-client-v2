import banner from "../assets/images/more/3.png";
const Banner = () => {
  return (
    <div className="relative bg-cover bg-center h-screen flex items-center banner">
      <div className="bg-black bg-opacity-70 w-full h-full absolute"></div>
      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-16 lg:mr-[30px] flex flex-col lg:w-2/3 justify-end">
        <div className="">
          <h1 className="text-white text-3xl md:text-5xl mb-4 font-rancho ">
            Would you like a Cup of Delicious Coffee?
          </h1>
          <p className="text-white text-lg md:text-xl mb-6 font-raleway">
            It's coffee time – Sip & savor. Indulge in every sip of this
            beverage to boost your senses and transform every moment. Enjoy the
            beautiful moments and make them memorable.
          </p>
          <a
            href="#"
            className="bg-[#E3B577] text-[#242222] font-rancho px-6 py-3 rounded-md text-lg font-medium hover:bg-yellow-600"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
