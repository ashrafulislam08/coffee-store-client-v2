import React, { useState } from "react";
import Banner from "../components/Banner";
import Servcies from "../components/Servcies";
import Gallery from "../components/Gallery";
import Coffee from "../components/Coffee";
import { Link, useLoaderData } from "react-router-dom";
import { BsCupHot } from "react-icons/bs";

const Home = () => {
  const coffees = useLoaderData();
  const [loadedCoffees, setLoadedCoffees] = useState(coffees);
  return (
    <section>
      <Banner />
      <Servcies />
      <section>
        <div className="text-center py-8 space-y-2">
          <p className="font-raleway">--- Sip & Savor ---</p>
          <h3 className="text-3xl font-bold font-rancho">
            Our Popular Products
          </h3>
          <button className="btn btn-primary font-rancho text-lg border-2 border-[#331A15] text-[#331A15] bg-[#D2B48C]">
            <Link to="/addCoffee" className="flex items-center gap-2">
              Add Coffee <BsCupHot />
            </Link>
          </button>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center">
          {loadedCoffees.map((coffee) => (
            <Coffee
              key={coffee._id}
              coffee={coffee}
              loadedCoffees={loadedCoffees}
              setLoadedCoffees={setLoadedCoffees}
            />
          ))}
        </div>
      </section>
      <Gallery />
    </section>
  );
};

export default Home;
