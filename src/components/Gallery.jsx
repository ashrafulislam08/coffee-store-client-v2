import cup1 from "../assets/images/cups/1.png";
import cup2 from "../assets/images/cups/2.png";
import cup3 from "../assets/images/cups/3.png";
import cup4 from "../assets/images/cups/4.png";
import cup5 from "../assets/images/cups/5.png";
import cup6 from "../assets/images/cups/6.png";
import cup7 from "../assets/images/cups/7.png";
import cup8 from "../assets/images/cups/8.png";

const Gallery = () => {
  const images = [cup1, cup2, cup3, cup4, cup5, cup6, cup7, cup8];
  return (
    <div className="px-8 py-10">
      <div className="py-5 text-center">
        <p className="text-sm text-gray-500 font-raleway mb-1">Follow us now</p>
        <h2 className="text-4xl font-rancho">Follow on Instagram</h2>
      </div>
      <div className="grid lg:grid-cols-4 gap-5 xl:gap-2 justify-items-center">
        {images.map((image, idx) => (
          <div key={idx}>
            <img src={image} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
