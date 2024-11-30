import logo from "../assets/images/more/logo1.png";
const Header = () => {
  return (
    <div className="flex items-center justify-center header">
      <div className="flex items-center gap-3">
        <img className="w-14" src={logo} alt="" />
        <h2 className="text-3xl font-rancho text-white">Espresso Emporium</h2>
      </div>
    </div>
  );
};

export default Header;
