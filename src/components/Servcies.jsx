import image1 from "../assets/images/icons/1.png";
import image2 from "../assets/images/icons/2.png";
import image3 from "../assets/images/icons/3.png";
import image4 from "../assets/images/icons/4.png";
const Servcies = () => {
  const services = [
    {
      id: 1,
      image: image1,
      title: "Awesome Aroma",
      desc: "You will definitely be a fan of the design & aroma of your coffee",
    },
    {
      id: 2,
      image: image2,
      title: "High Quality",
      desc: "We served the coffee to you maintaining the best quality",
    },
    {
      id: 3,
      image: image3,
      title: "Pure Grades",
      desc: "The coffee is made of the green coffee beans which you will love",
    },
    {
      id: 4,
      image: image4,
      title: "Proper Roasting",
      desc: "Your coffee is brewed by first roasting the green coffee beans",
    },
  ];

  return (
    <div className="bg-[#ECEAE3] p-5">
      {services.map((service) => {
        <div className="bg-red-500">
          <img src={service.image} alt="" />
          <h2 className="font-rancho">{service.title}</h2>
          <p>{service.desc}</p>
        </div>;
      })}
    </div>
  );
};

export default Servcies;
