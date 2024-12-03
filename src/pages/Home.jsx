import React, { useState } from "react";
import Banner from "../components/Banner";
import Servcies from "../components/Servcies";
import Gallery from "../components/Gallery";
import Coffee from "../components/Coffee";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const coffees = useLoaderData();
  const [loadedCoffees, setLoadedCoffees] = useState(coffees);
  return (
    <section>
      <Banner />
      <Servcies />
      <section className="grid grid-cols-1 lg:grid-cols-2 justify-items-center">
        {loadedCoffees.map((coffee) => (
          <Coffee coffee={coffee} setLoadedCoffees={setLoadedCoffees} />
        ))}
      </section>
      <Gallery />
    </section>
  );
};

export default Home;
